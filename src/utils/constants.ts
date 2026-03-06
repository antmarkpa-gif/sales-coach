/**
 * Application Constants
 * Centralized configuration values
 */

// ═══════════════════════════════════════════════════════════════
// ROUTES
// ═══════════════════════════════════════════════════════════════

export const ROUTES = {
  // Auth routes
  WELCOME: "/(auth)",
  LOGIN: "/(auth)/login",
  REGISTER: "/(auth)/register",
  FORGOT_PASSWORD: "/(auth)/forgot-password",
  VERIFY_EMAIL: "/(auth)/verify-email",

  // Main routes
  HOME: "/(main)/home",
  PRACTICE: "/(main)/practice",
  PRACTICE_SESSION: "/(main)/practice/[id]",
  PRACTICE_RESULT: "/(main)/practice/result",
  LEARN: "/(main)/learn",
  LESSON: "/(main)/learn/[id]",
  PROGRESS: "/(main)/progress",
  PROFILE: "/(main)/profile",
} as const;

// ═══════════════════════════════════════════════════════════════
// FREE TIER LIMITS
// ═══════════════════════════════════════════════════════════════

export const FREE_LIMITS = {
  aiSessionsPerDay: 3,
  lessons: 5,
  historyDays: 7,
} as const;

// ═══════════════════════════════════════════════════════════════
// PRO TIER LIMITS
// ═══════════════════════════════════════════════════════════════

export const PRO_LIMITS = {
  aiSessionsPerDay: 50,
  lessons: Infinity,
  historyDays: Infinity,
} as const;

// ═══════════════════════════════════════════════════════════════
// REVENUECAT
// ═══════════════════════════════════════════════════════════════

export const PRODUCT_IDS = {
  monthly: "sales_coach_monthly_999",
  annual: "sales_coach_annual_7999",
} as const;

export const REVENUECAT_ENTITLEMENT = "pro";

// ═══════════════════════════════════════════════════════════════
// ERROR MESSAGES
// ═══════════════════════════════════════════════════════════════

export const ERROR_MESSAGES = {
  network: "Sin conexión a internet. Verifica tu conexión e intenta de nuevo.",
  auth: "Error de autenticación. Por favor, inicia sesión de nuevo.",
  aiTimeout:
    "Rex está tardando más de lo esperado. ¿Quieres intentar de nuevo?",
  aiUnavailable:
    "El servicio de práctica no está disponible. Intenta más tarde.",
  server: "Error del servidor. Por favor, intenta de nuevo.",
  unknown: "Algo salió mal. Por favor, intenta de nuevo.",
  limitReached:
    "Has alcanzado tu límite diario. Actualiza a Pro para más sesiones.",
} as const;

// ═══════════════════════════════════════════════════════════════
// SCORE LABELS
// ═══════════════════════════════════════════════════════════════

export const SCORE_LABELS = {
  0: "Sigue practicando",
  41: "Vas bien",
  71: "Cierre sólido",
  86: "Closer élite",
} as const;

/**
 * Get label for a given score
 */
export function getScoreLabel(score: number): string {
  if (score >= 86) return SCORE_LABELS[86];
  if (score >= 71) return SCORE_LABELS[71];
  if (score >= 41) return SCORE_LABELS[41];
  return SCORE_LABELS[0];
}

// ═══════════════════════════════════════════════════════════════
// AI CONFIGURATION
// ═══════════════════════════════════════════════════════════════

export const AI_CONFIG = {
  // Timeout thresholds
  thinkingIndicatorDelay: 8000, // Show "thinking hard" at 8s
  requestTimeout: 15000, // Show retry button at 15s

  // Message limits
  maxMessagesPerSession: 5, // Session ends after 5 user messages

  // Models (for reference - actual calls go through Edge Functions)
  roleplayModel: "claude-haiku-4-5-20251001",
  feedbackModel: "claude-sonnet-4-6",
} as const;

// ═══════════════════════════════════════════════════════════════
// VALIDATION
// ═══════════════════════════════════════════════════════════════

export const VALIDATION = {
  email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  password: {
    minLength: 8,
    pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/,
  },
  displayName: {
    minLength: 2,
    maxLength: 50,
  },
} as const;

// ═══════════════════════════════════════════════════════════════
// ANALYTICS EVENTS
// ═══════════════════════════════════════════════════════════════

export const ANALYTICS_EVENTS = {
  // Auth
  SIGN_UP: "sign_up",
  LOGIN: "login",
  LOGOUT: "logout",

  // Practice
  SESSION_STARTED: "session_started",
  SESSION_COMPLETED: "session_completed",
  SESSION_ABANDONED: "session_abandoned",

  // Learn
  LESSON_STARTED: "lesson_started",
  LESSON_COMPLETED: "lesson_completed",

  // Subscription
  PAYWALL_VIEWED: "paywall_viewed",
  SUBSCRIPTION_STARTED: "subscription_started",
  SUBSCRIPTION_CANCELLED: "subscription_cancelled",

  // General
  SCREEN_VIEW: "screen_view",
  ERROR: "error",
} as const;
