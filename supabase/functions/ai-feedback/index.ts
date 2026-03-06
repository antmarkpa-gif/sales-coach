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

interface FeedbackRequest {
  sessionId: string;
  transcript: Array<{ role: "user" | "assistant"; content: string }>;
  scenarioTitle: string;
}

interface SessionFeedback {
  score: number;
  strengths: string[];
  improvements: string[];
  bestLine: string;
  rexVerdict: string;
  scoreLabel: string;
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
    const { sessionId, transcript, scenarioTitle }: FeedbackRequest = await req.json();

    if (!sessionId || !transcript || transcript.length === 0) {
      return new Response(
        JSON.stringify({ error: "BAD_REQUEST", message: "Missing required fields" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // 5. Generate feedback using Claude Sonnet
    const systemPrompt = `Eres un experto en ventas que analiza conversaciones de roleplay de ventas.
Tu tarea es evaluar la conversación y proporcionar feedback estructurado en español.

Responde ÚNICAMENTE con un objeto JSON válido con esta estructura exacta:
{
  "score": <número 0-100>,
  "strengths": ["fortaleza 1 con cita textual", "fortaleza 2 con cita textual", "fortaleza 3 con cita textual"],
  "improvements": ["mejora 1 con ejemplo de mejor respuesta", "mejora 2 con ejemplo de mejor respuesta", "mejora 3 con ejemplo de mejor respuesta"],
  "bestLine": "la mejor línea del vendedor, entrecomillada",
  "rexVerdict": "una oración honesta sobre su desempeño general"
}

Criterios de evaluación:
- 0-40: No manejó las objeciones, no escuchó al cliente, fue agresivo o pasivo
- 41-70: Intentó manejar objeciones pero sin técnica clara, algunas respuestas buenas
- 71-85: Buen manejo de objeciones, escuchó al cliente, demostró valor
- 86-100: Excelente manejo, preguntas poderosas, cerró o avanzó la venta significativamente

Sé específico y constructivo. Cita frases exactas del vendedor.`;

    const userContent = `Escenario: ${scenarioTitle}

Conversación:
${transcript.map(m => `${m.role === 'user' ? 'VENDEDOR' : 'CLIENTE (REX)'}: ${m.content}`).join('\n\n')}

Analiza esta conversación y proporciona feedback estructurado.`;

    const response = await anthropic.messages.create({
      model: "claude-sonnet-4-6",
      max_tokens: 1024,
      system: systemPrompt,
      messages: [{ role: "user", content: userContent }],
    });

    // 6. Parse the JSON response
    const responseText = response.content[0].type === "text" ? response.content[0].text : "";

    let feedback: SessionFeedback;
    try {
      const parsed = JSON.parse(responseText);
      feedback = {
        score: Math.min(100, Math.max(0, parsed.score)),
        strengths: parsed.strengths || [],
        improvements: parsed.improvements || [],
        bestLine: parsed.bestLine || "",
        rexVerdict: parsed.rexVerdict || "",
        scoreLabel: getScoreLabel(parsed.score),
      };
    } catch (parseError) {
      console.error("Failed to parse feedback JSON:", parseError);
      // Provide default feedback if parsing fails
      feedback = {
        score: 50,
        strengths: ["Completó la sesión de práctica"],
        improvements: ["Continúa practicando para mejorar"],
        bestLine: "",
        rexVerdict: "Sigue practicando para mejorar tus habilidades de venta.",
        scoreLabel: "Vas bien",
      };
    }

    // 7. Update the practice session with feedback
    const { error: updateError } = await supabase
      .from("practice_sessions")
      .update({
        score: feedback.score,
        feedback: feedback,
        completed_at: new Date().toISOString(),
      })
      .eq("id", sessionId)
      .eq("user_id", user.id);

    if (updateError) {
      console.error("Failed to update session:", updateError);
    }

    // 8. Log AI usage
    await supabase.from("ai_usage").insert({
      user_id: user.id,
      feature: "feedback",
      model: "claude-sonnet-4-6",
    });

    // 9. Return feedback
    return new Response(
      JSON.stringify({ success: true, feedback }),
      { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Error in ai-feedback:", error);

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
 * Get score label based on score value
 */
function getScoreLabel(score: number): string {
  if (score >= 86) return "Closer élite";
  if (score >= 71) return "Cierre sólido";
  if (score >= 41) return "Vas bien";
  return "Sigue practicando";
}
