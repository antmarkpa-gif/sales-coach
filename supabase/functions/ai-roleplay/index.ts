import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import Anthropic from "npm:@anthropic-ai/sdk";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const anthropic = new Anthropic({
  apiKey: Deno.env.get("ANTHROPIC_API_KEY")!,
});

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface RoleplayRequest {
  scenarioId?: string;
  messages: Array<{ role: "user" | "assistant"; content: string }>;
  customScenario?: {
    productDescription: string;
    openingObjection: string;
    industry?: string;
    difficulty: string;
  };
}

serve(async (req: Request) => {
  // Handle CORS preflight
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    // 1. Validate Authorization
    const authHeader = req.headers.get("Authorization");
    if (!authHeader) {
      return new Response(
        JSON.stringify({ error: "UNAUTHORIZED", message: "Missing authorization header" }),
        { status: 401, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // 2. Initialize Supabase client
    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;

    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    // 3. Verify user token
    const token = authHeader.replace("Bearer ", "");
    const { data: { user }, error: authError } = await supabase.auth.getUser(token);

    if (authError || !user) {
      return new Response(
        JSON.stringify({ error: "UNAUTHORIZED", message: "Invalid token" }),
        { status: 401, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // 4. Parse request body
    const { scenarioId, messages, customScenario }: RoleplayRequest = await req.json();

    // 5. Check rate limits
    const today = new Date().toISOString().split("T")[0];
    const { count } = await supabase
      .from("ai_usage")
      .select("*", { count: "exact", head: true })
      .eq("user_id", user.id)
      .eq("feature", "roleplay")
      .gte("created_at", `${today}T00:00:00.000Z`);

    // Check if user is Pro
    const { data: isPro } = await supabase.rpc("is_pro", { p_user_id: user.id });

    const limit = isPro ? 50 : 3;
    const currentCount = count || 0;

    if (currentCount >= limit) {
      return new Response(
        JSON.stringify({
          error: "LIMIT_REACHED",
          message: "Daily AI session limit reached",
          limit,
          used: currentCount,
          isPro
        }),
        { status: 429, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // 6. Get or build system prompt
    let systemPrompt: string;

    if (customScenario) {
      systemPrompt = buildCustomPrompt(customScenario);
    } else if (scenarioId) {
      const { data: scenario, error: scenarioError } = await supabase
        .from("scenarios")
        .select("system_prompt")
        .eq("id", scenarioId)
        .single();

      if (scenarioError || !scenario) {
        return new Response(
          JSON.stringify({ error: "NOT_FOUND", message: "Scenario not found" }),
          { status: 404, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }

      systemPrompt = scenario.system_prompt;
    } else {
      return new Response(
        JSON.stringify({ error: "BAD_REQUEST", message: "Either scenarioId or customScenario is required" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // 7. Stream response from Claude
    const stream = await anthropic.messages.stream({
      model: "claude-haiku-4-5-20251001",
      max_tokens: 400,
      system: systemPrompt,
      messages: messages,
    });

    // 8. Log usage (non-blocking)
    supabase
      .from("ai_usage")
      .insert({
        user_id: user.id,
        feature: "roleplay",
        model: "claude-haiku-4-5-20251001",
      })
      .then(() => {
        // Usage logged successfully
      })
      .catch((err) => {
        console.error("Failed to log usage:", err);
      });

    // 9. Return streaming response
    return new Response(stream.toReadableStream(), {
      headers: {
        ...corsHeaders,
        "Content-Type": "text/event-stream",
        "Cache-Control": "no-cache",
        "Connection": "keep-alive",
      },
    });
  } catch (error) {
    console.error("Error in ai-roleplay:", error);

    return new Response(
      JSON.stringify({
        error: "INTERNAL_ERROR",
        message: error instanceof Error ? error.message : "An unexpected error occurred"
      }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});

/**
 * Build a custom scenario prompt based on user input
 */
function buildCustomPrompt(custom: RoleplayRequest["customScenario"]): string {
  if (!custom) return "";

  return `You are Rex, a realistic customer considering buying: ${custom.productDescription}.

Your opening concern: "${custom.openingObjection}"

Industry context: ${custom.industry || "general business"}
Difficulty: ${custom.difficulty}

Rules:
- Respond in Spanish (Latin American)
- Be realistic — firm but not impossible
- React authentically to their sales technique
- Ask clarifying questions when appropriate
- Don't give in too easily, but show openness to good arguments

After the 5th user message, break character and provide structured feedback in Spanish:

**Score:** [0-100]

**Fortalezas:**
1. [specific strength with quote]
2. [specific strength with quote]
3. [specific strength with quote]

**Áreas de Mejora:**
1. [specific improvement with example of better response]
2. [specific improvement with example of better response]
3. [specific improvement with example of better response]

**Mejor Línea:** "[their best line, quoted]"

**Veredicto de Rex:** [one honest sentence about their performance]`;
}
