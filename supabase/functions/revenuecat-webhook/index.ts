import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";
import { createHmac } from "https://deno.land/std@0.168.0/crypto/mod.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type, x-revenuecat-signature",
};

/**
 * RevenueCat webhook event types we handle
 */
type WebhookEventType =
  | "INITIAL_PURCHASE"
  | "RENEWAL"
  | "CANCELLATION"
  | "EXPIRATION"
  | "BILLING_ISSUE"
  | "PRODUCT_CHANGE"
  | "SUBSCRIBER_ALIAS";

interface RevenueCatWebhookEvent {
  api_version: string;
  event: {
    type: WebhookEventType;
    app_user_id: string;
    product_id: string;
    expiration_at_ms?: number;
    purchased_at_ms?: number;
    original_app_user_id?: string;
  };
}

serve(async (req: Request) => {
  // Handle CORS preflight
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  // Only accept POST requests
  if (req.method !== "POST") {
    return new Response(
      JSON.stringify({ error: "Method not allowed" }),
      { status: 405, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }

  try {
    // 1. Verify RevenueCat signature (optional but recommended)
    const signature = req.headers.get("X-RevenueCat-Signature");
    const webhookSecret = Deno.env.get("REVENUECAT_WEBHOOK_SECRET");

    const body = await req.text();

    if (webhookSecret && signature) {
      const isValid = await verifySignature(body, signature, webhookSecret);
      if (!isValid) {
        console.error("Invalid webhook signature");
        // Still return 200 to prevent retries, but log the issue
        return new Response(
          JSON.stringify({ received: true, processed: false, reason: "invalid_signature" }),
          { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
    }

    // 2. Parse webhook payload
    const payload: RevenueCatWebhookEvent = JSON.parse(body);
    const { type, app_user_id, product_id, expiration_at_ms, purchased_at_ms } = payload.event;

    console.log(`Processing webhook: ${type} for user ${app_user_id}`);

    // 3. Initialize Supabase client
    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    // 4. Map RevenueCat app_user_id to our user_id
    // RevenueCat app_user_id should be the Supabase user UUID
    const userId = app_user_id;

    // Verify user exists
    const { data: profile } = await supabase
      .from("profiles")
      .select("id")
      .eq("id", userId)
      .single();

    if (!profile) {
      console.error(`User not found: ${userId}`);
      // Return 200 to acknowledge receipt (prevent retries)
      return new Response(
        JSON.stringify({ received: true, processed: false, reason: "user_not_found" }),
        { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // 5. Handle different event types
    let status: "active" | "expired" | "cancelled" | "billing_issue";
    let shouldUpsert = true;

    switch (type) {
      case "INITIAL_PURCHASE":
      case "RENEWAL":
        status = "active";
        break;

      case "CANCELLATION":
        status = "cancelled";
        break;

      case "EXPIRATION":
        status = "expired";
        break;

      case "BILLING_ISSUE":
        status = "billing_issue";
        break;

      case "SUBSCRIBER_ALIAS":
      case "PRODUCT_CHANGE":
        // Handle alias or product change events
        console.log(`Received ${type} event, will process as active if applicable`);
        status = "active";
        break;

      default:
        console.log(`Unhandled event type: ${type}`);
        shouldUpsert = false;
        status = "expired"; // Default, won't be used
    }

    // 6. Upsert subscription record
    if (shouldUpsert) {
      const subscriptionData = {
        user_id: userId,
        revenuecat_id: app_user_id,
        product_id: product_id,
        status: status,
        current_period_start: purchased_at_ms
          ? new Date(purchased_at_ms).toISOString()
          : null,
        current_period_end: expiration_at_ms
          ? new Date(expiration_at_ms).toISOString()
          : null,
        updated_at: new Date().toISOString(),
      };

      const { error: upsertError } = await supabase
        .from("subscriptions")
        .upsert(subscriptionData, {
          onConflict: "user_id",
          ignoreDuplicates: false,
        });

      if (upsertError) {
        console.error("Failed to upsert subscription:", upsertError);
        // Still return 200 to prevent infinite retries
        return new Response(
          JSON.stringify({ received: true, processed: false, reason: "db_error" }),
          { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }

      console.log(`Successfully processed ${type} for user ${userId}`);
    }

    // 7. Always return 200 to acknowledge receipt
    // RevenueCat will retry on non-200 responses
    return new Response(
      JSON.stringify({
        received: true,
        processed: true,
        event_type: type,
        user_id: userId,
      }),
      { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Webhook processing error:", error);

    // Return 200 even on error to prevent infinite retries
    // Log the error for debugging
    return new Response(
      JSON.stringify({
        received: true,
        processed: false,
        reason: "processing_error",
        error: error instanceof Error ? error.message : "Unknown error",
      }),
      { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});

/**
 * Verify RevenueCat webhook signature
 */
async function verifySignature(
  payload: string,
  signature: string,
  secret: string
): Promise<boolean> {
  try {
    // RevenueCat uses HMAC-SHA256
    const encoder = new TextEncoder();
    const key = await crypto.subtle.importKey(
      "raw",
      encoder.encode(secret),
      { name: "HMAC", hash: "SHA-256" },
      false,
      ["sign"]
    );

    const signatureBuffer = await crypto.subtle.sign(
      "HMAC",
      key,
      encoder.encode(payload)
    );

    const expectedSignature = Array.from(new Uint8Array(signatureBuffer))
      .map((b) => b.toString(16).padStart(2, "0"))
      .join("");

    return signature === expectedSignature;
  } catch (error) {
    console.error("Signature verification failed:", error);
    return false;
  }
}
