# SALES COACH — Technical Design

## Architecture Overview
```
┌─────────────────────────────────────────────────────────────┐
│                      EXPO APP (Client)                       │
│  ┌─────────┐  ┌─────────┐  ┌─────────┐  ┌─────────┐        │
│  │  Auth   │  │Practice │  │  Learn  │  │Progress │        │
│  └────┬────┘  └────┬────┘  └────┬────┘  └────┬────┘        │
│       │            │            │            │              │
│       └────────────┴────────────┴────────────┘              │
│                         │                                    │
│              ┌──────────┴──────────┐                        │
│              │   Supabase Client   │                        │
│              └──────────┬──────────┘                        │
└──────────────────────────┼──────────────────────────────────┘
                           │ HTTPS
┌──────────────────────────┼──────────────────────────────────┐
│                    SUPABASE                                  │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐         │
│  │    Auth     │  │  Database   │  │Edge Functions│         │
│  │  (GoTrue)   │  │ (Postgres)  │  │   (Deno)    │         │
│  └─────────────┘  └─────────────┘  └──────┬──────┘         │
│                                           │                 │
│                                    ┌──────┴──────┐         │
│                                    │  Anthropic  │         │
│                                    │     API     │         │
│                                    └─────────────┘         │
└─────────────────────────────────────────────────────────────┘
```

## Database Schema

### profiles
```sql
CREATE TABLE profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  email TEXT NOT NULL,
  display_name TEXT,
  avatar_url TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);
```

### scenarios
```sql
CREATE TABLE scenarios (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  category TEXT NOT NULL CHECK (category IN ('objection', 'negotiation', 'closing', 'discovery')),
  difficulty TEXT NOT NULL CHECK (difficulty IN ('beginner', 'intermediate', 'advanced')),
  system_prompt TEXT NOT NULL,
  opening_objection TEXT NOT NULL,
  is_premium BOOLEAN DEFAULT FALSE,
  sort_order INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW()
);
```

### practice_sessions
```sql
CREATE TABLE practice_sessions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
  scenario_id UUID REFERENCES scenarios(id),
  custom_scenario JSONB,
  transcript JSONB NOT NULL DEFAULT '[]',
  score INTEGER CHECK (score >= 0 AND score <= 100),
  feedback JSONB,
  started_at TIMESTAMPTZ DEFAULT NOW(),
  completed_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT NOW()
);
```

### lessons
```sql
CREATE TABLE lessons (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  content JSONB NOT NULL,
  duration_minutes INTEGER NOT NULL,
  sort_order INTEGER DEFAULT 0,
  is_premium BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMPTZ DEFAULT NOW()
);
```

### lesson_progress
```sql
CREATE TABLE lesson_progress (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
  lesson_id UUID NOT NULL REFERENCES lessons(id) ON DELETE CASCADE,
  status TEXT NOT NULL CHECK (status IN ('not_started', 'in_progress', 'completed')),
  progress_percent INTEGER DEFAULT 0,
  time_spent_seconds INTEGER DEFAULT 0,
  completed_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(user_id, lesson_id)
);
```

### subscriptions
```sql
CREATE TABLE subscriptions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
  revenuecat_id TEXT NOT NULL,
  product_id TEXT NOT NULL,
  status TEXT NOT NULL CHECK (status IN ('active', 'expired', 'cancelled', 'billing_issue')),
  current_period_start TIMESTAMPTZ,
  current_period_end TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(user_id)
);
```

### ai_usage
```sql
CREATE TABLE ai_usage (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
  feature TEXT NOT NULL CHECK (feature IN ('roleplay', 'feedback')),
  model TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);
```

## Row Level Security (RLS)

All tables have RLS enabled. Pattern for SELECT policies:
```sql
CREATE POLICY "Users can read own data"
  ON table_name FOR SELECT
  USING (auth.uid() = user_id);
```

## Navigation Structure
```
app/
├── (auth)/                 # Auth group - no tab bar
│   ├── _layout.tsx        # Stack navigator
│   ├── index.tsx          # Welcome/onboarding
│   ├── login.tsx          # Email/password login
│   ├── register.tsx       # Email/password signup
│   ├── forgot-password.tsx # Password reset request
│   └── verify-email.tsx   # Email verification
│
├── (main)/                 # Main app - has tab bar
│   ├── _layout.tsx        # Tab navigator
│   ├── home.tsx           # Dashboard
│   ├── practice/
│   │   ├── index.tsx      # Scenario list
│   │   ├── [id].tsx       # Active session
│   │   └── result.tsx     # Feedback screen
│   ├── learn/
│   │   ├── index.tsx      # Lesson list
│   │   └── [id].tsx       # Lesson content
│   ├── progress.tsx       # Stats & history
│   └── profile.tsx        # Settings & subscription
│
├── _layout.tsx            # Root layout
└── +not-found.tsx         # 404 handler
```

## AI Integration

| Feature | Model | Use Case | Latency Target |
|---------|-------|----------|----------------|
| Roleplay | claude-haiku-4-5-20251001 | Streaming conversation | <2s first token |
| Feedback | claude-sonnet-4-6 | Session analysis | <10s total |

### Edge Function Flow
1. Client sends request with auth token
2. Edge function validates token via Supabase Auth
3. Check rate limits (ai_usage table)
4. If under limit: call Claude API, stream response
5. Log usage to ai_usage table
6. Return response (streaming or JSON)

## State Management

### Zustand Stores
- `authStore`: user, session, isLoading, login(), logout()
- `appStore`: subscription status, UI preferences

### TanStack Query Keys
- `['scenarios']` - All scenarios
- `['lessons']` - All lessons
- `['practice-sessions', userId]` - User's sessions
- `['lesson-progress', userId]` - User's lesson progress
- `['profile', userId]` - User profile
- `['subscription', userId]` - Subscription status
