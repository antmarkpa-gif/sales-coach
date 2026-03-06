/**
 * Database types for Supabase
 * Auto-generate with: npx supabase gen types typescript --local > src/types/database.types.ts
 */

export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export interface Database {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string;
          email: string;
          display_name: string | null;
          avatar_url: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id: string;
          email: string;
          display_name?: string | null;
          avatar_url?: string | null;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          email?: string;
          display_name?: string | null;
          avatar_url?: string | null;
          created_at?: string;
          updated_at?: string;
        };
      };
      scenarios: {
        Row: {
          id: string;
          title: string;
          description: string;
          category: "objection" | "negotiation" | "closing" | "discovery";
          difficulty: "beginner" | "intermediate" | "advanced";
          system_prompt: string;
          opening_objection: string;
          is_premium: boolean;
          sort_order: number;
          created_at: string;
        };
        Insert: {
          id?: string;
          title: string;
          description: string;
          category: "objection" | "negotiation" | "closing" | "discovery";
          difficulty: "beginner" | "intermediate" | "advanced";
          system_prompt: string;
          opening_objection: string;
          is_premium?: boolean;
          sort_order?: number;
          created_at?: string;
        };
        Update: {
          id?: string;
          title?: string;
          description?: string;
          category?: "objection" | "negotiation" | "closing" | "discovery";
          difficulty?: "beginner" | "intermediate" | "advanced";
          system_prompt?: string;
          opening_objection?: string;
          is_premium?: boolean;
          sort_order?: number;
          created_at?: string;
        };
      };
      practice_sessions: {
        Row: {
          id: string;
          user_id: string;
          scenario_id: string | null;
          custom_scenario: Json | null;
          transcript: Json;
          score: number | null;
          feedback: Json | null;
          started_at: string;
          completed_at: string | null;
          created_at: string;
        };
        Insert: {
          id?: string;
          user_id: string;
          scenario_id?: string | null;
          custom_scenario?: Json | null;
          transcript?: Json;
          score?: number | null;
          feedback?: Json | null;
          started_at?: string;
          completed_at?: string | null;
          created_at?: string;
        };
        Update: {
          id?: string;
          user_id?: string;
          scenario_id?: string | null;
          custom_scenario?: Json | null;
          transcript?: Json;
          score?: number | null;
          feedback?: Json | null;
          started_at?: string;
          completed_at?: string | null;
          created_at?: string;
        };
      };
      lessons: {
        Row: {
          id: string;
          title: string;
          description: string;
          content: Json;
          duration_minutes: number;
          sort_order: number;
          is_premium: boolean;
          created_at: string;
        };
        Insert: {
          id?: string;
          title: string;
          description: string;
          content: Json;
          duration_minutes: number;
          sort_order?: number;
          is_premium?: boolean;
          created_at?: string;
        };
        Update: {
          id?: string;
          title?: string;
          description?: string;
          content?: Json;
          duration_minutes?: number;
          sort_order?: number;
          is_premium?: boolean;
          created_at?: string;
        };
      };
      lesson_progress: {
        Row: {
          id: string;
          user_id: string;
          lesson_id: string;
          status: "not_started" | "in_progress" | "completed";
          progress_percent: number;
          time_spent_seconds: number;
          completed_at: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          user_id: string;
          lesson_id: string;
          status?: "not_started" | "in_progress" | "completed";
          progress_percent?: number;
          time_spent_seconds?: number;
          completed_at?: string | null;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          user_id?: string;
          lesson_id?: string;
          status?: "not_started" | "in_progress" | "completed";
          progress_percent?: number;
          time_spent_seconds?: number;
          completed_at?: string | null;
          created_at?: string;
          updated_at?: string;
        };
      };
      subscriptions: {
        Row: {
          id: string;
          user_id: string;
          revenuecat_id: string;
          product_id: string;
          status: "active" | "expired" | "cancelled" | "billing_issue";
          current_period_start: string | null;
          current_period_end: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          user_id: string;
          revenuecat_id: string;
          product_id: string;
          status: "active" | "expired" | "cancelled" | "billing_issue";
          current_period_start?: string | null;
          current_period_end?: string | null;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          user_id?: string;
          revenuecat_id?: string;
          product_id?: string;
          status?: "active" | "expired" | "cancelled" | "billing_issue";
          current_period_start?: string | null;
          current_period_end?: string | null;
          created_at?: string;
          updated_at?: string;
        };
      };
      ai_usage: {
        Row: {
          id: string;
          user_id: string;
          feature: "roleplay" | "feedback";
          model: string;
          created_at: string;
        };
        Insert: {
          id?: string;
          user_id: string;
          feature: "roleplay" | "feedback";
          model: string;
          created_at?: string;
        };
        Update: {
          id?: string;
          user_id?: string;
          feature?: "roleplay" | "feedback";
          model?: string;
          created_at?: string;
        };
      };
    };
    Functions: {
      is_pro: {
        Args: { p_user_id: string };
        Returns: boolean;
      };
    };
  };
}
