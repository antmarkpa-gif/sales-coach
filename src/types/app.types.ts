/**
 * Application Type Definitions
 */

// ═══════════════════════════════════════════════════════════════
// USER & AUTH
// ═══════════════════════════════════════════════════════════════

export interface User {
  id: string;
  email: string;
  displayName: string | null;
  avatarUrl: string | null;
}

export interface Profile {
  id: string;
  email: string;
  displayName: string | null;
  avatarUrl: string | null;
  createdAt: Date;
  updatedAt: Date;
}

export interface AuthState {
  user: User | null;
  isLoading: boolean;
  isAuthenticated: boolean;
}

// ═══════════════════════════════════════════════════════════════
// PRACTICE
// ═══════════════════════════════════════════════════════════════

export type ScenarioCategory =
  | "objection"
  | "negotiation"
  | "closing"
  | "discovery";
export type ScenarioDifficulty = "beginner" | "intermediate" | "advanced";

export interface Scenario {
  id: string;
  title: string;
  description: string;
  category: ScenarioCategory;
  difficulty: ScenarioDifficulty;
  systemPrompt: string;
  openingObjection: string;
  isPremium: boolean;
  sortOrder: number;
  createdAt: Date;
}

export interface CustomScenario {
  productDescription: string;
  openingObjection: string;
  industry?: string;
  difficulty: ScenarioDifficulty;
}

export type AIMessageRole = "user" | "assistant";

export interface AIMessage {
  role: AIMessageRole;
  content: string;
  timestamp: Date;
}

export interface SessionFeedback {
  score: number;
  strengths: string[];
  improvements: string[];
  bestLine: string;
  rexVerdict: string;
  scoreLabel: string;
}

export interface PracticeSession {
  id: string;
  userId: string;
  scenarioId: string | null;
  customScenario: CustomScenario | null;
  transcript: AIMessage[];
  score: number | null;
  feedback: SessionFeedback | null;
  startedAt: Date;
  completedAt: Date | null;
  createdAt: Date;
}

// ═══════════════════════════════════════════════════════════════
// LEARN
// ═══════════════════════════════════════════════════════════════

export type ContentBlockType = "text" | "tip" | "example" | "takeaway";

export interface ContentBlock {
  type: ContentBlockType;
  content: string;
  title?: string;
}

export interface Lesson {
  id: string;
  title: string;
  description: string;
  content: ContentBlock[];
  durationMinutes: number;
  sortOrder: number;
  isPremium: boolean;
  createdAt: Date;
}

export type LessonStatus = "not_started" | "in_progress" | "completed";

export interface LessonProgress {
  id: string;
  userId: string;
  lessonId: string;
  status: LessonStatus;
  progressPercent: number;
  timeSpentSeconds: number;
  completedAt: Date | null;
  createdAt: Date;
  updatedAt: Date;
}

// ═══════════════════════════════════════════════════════════════
// SUBSCRIPTION
// ═══════════════════════════════════════════════════════════════

export type SubscriptionStatus =
  | "active"
  | "expired"
  | "cancelled"
  | "billing_issue";

export interface Subscription {
  id: string;
  userId: string;
  revenuecatId: string;
  productId: string;
  status: SubscriptionStatus;
  currentPeriodStart: Date | null;
  currentPeriodEnd: Date | null;
  createdAt: Date;
  updatedAt: Date;
}

// ═══════════════════════════════════════════════════════════════
// PROGRESS STATS
// ═══════════════════════════════════════════════════════════════

export interface UserStats {
  totalSessions: number;
  averageScore: number;
  bestScore: number;
  currentStreak: number;
  longestStreak: number;
  lessonsCompleted: number;
  totalPracticeTime: number;
}

// ═══════════════════════════════════════════════════════════════
// NAVIGATION
// ═══════════════════════════════════════════════════════════════

export type RootStackParamList = {
  "(auth)": undefined;
  "(auth)/login": undefined;
  "(auth)/register": undefined;
  "(auth)/forgot-password": undefined;
  "(auth)/verify-email": { email: string };
  "(main)": undefined;
  "(main)/home": undefined;
  "(main)/practice": undefined;
  "(main)/practice/[id]": { id: string };
  "(main)/practice/result": { sessionId: string };
  "(main)/learn": undefined;
  "(main)/learn/[id]": { id: string };
  "(main)/progress": undefined;
  "(main)/profile": undefined;
};

// ═══════════════════════════════════════════════════════════════
// API RESPONSES
// ═══════════════════════════════════════════════════════════════

export interface ApiError {
  code: string;
  message: string;
}

export interface ApiResponse<T> {
  data: T | null;
  error: ApiError | null;
}

// ═══════════════════════════════════════════════════════════════
// UI STATE
// ═══════════════════════════════════════════════════════════════

export type LoadingState = "idle" | "loading" | "success" | "error";

export interface UIState<T> {
  data: T | null;
  status: LoadingState;
  error: string | null;
}
