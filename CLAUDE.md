# SALES COACH — Claude Code Context

## Project Overview
AI-powered sales roleplay app for LATAM freelancers/consultants. Users practice handling objections with Rex (AI customer), get scored 0-100 with actionable feedback.

**Avatar**: Carlos, 29, dev/consultant, $3-5K/mo, loses 60% proposals to "está muy caro"

## Tech Stack
- **Framework**: Expo SDK 55 + Expo Router (file-based routing)
- **Styling**: NativeWind v4 (Tailwind for React Native)
- **State**: Zustand (global) + TanStack Query (server)
- **Backend**: Supabase (Auth, Postgres, Edge Functions, RLS)
- **AI**: Claude via Supabase Edge Functions ONLY
  - Roleplay: claude-haiku-4-5-20251001 (streaming)
  - Feedback: claude-sonnet-4-6 (JSON analysis)
- **Payments**: RevenueCat (entitlement: "pro")
- **Analytics**: PostHog

## Business Model
| Tier | AI Sessions | Lessons | History |
|------|------------|---------|---------|
| Free | 3/day | 5 | 7 days |
| Pro ($9.99/mo) | 50/day | All | Forever |

Product IDs: `sales_coach_monthly_999`, `sales_coach_annual_7999`

## Critical Rules — MEMORIZE THESE

### 1. AI Architecture (SECURITY)
```
NEVER: import Anthropic from '@anthropic-ai/sdk' in src/
ALWAYS: Call Supabase Edge Functions → they call Claude
```
AI keys live in Supabase secrets only. Client never sees them.

### 2. Secure Storage
```typescript
// CORRECT
import * as SecureStore from 'expo-secure-store';
// NEVER use AsyncStorage for tokens
```

### 3. Lists = FlashList
```typescript
// CORRECT
import { FlashList } from '@shopify/flash-list';
// NEVER use FlatList
```

### 4. Images = expo-image
```typescript
// CORRECT
import { Image } from 'expo-image';
// NEVER use Image from 'react-native'
```

### 5. Every Screen Has 3 States
```typescript
if (isLoading) return <Skeleton />;      // NOT ActivityIndicator
if (error) return <ErrorState retry={refetch} />;
if (!data?.length) return <EmptyState />;
return <Content />;
```

### 6. Colors From Theme Only
```typescript
// CORRECT
import { COLORS } from '@/theme/brand';
// NEVER hardcode: style={{ color: '#00D67D' }}
```

### 7. Commit Format
```
type(scope): message

Co-Authored-By: Claude <noreply@anthropic.com>
```
Types: feat, fix, refactor, docs, test, chore

### 8. TypeScript Strictness
- All props typed with interfaces
- No `any` — use `unknown` + type guards
- Navigation params always typed

### 9. Error Handling
- AI calls: 8s → "Rex is thinking hard...", 15s → retry button
- Network errors: Show message + retry, never crash

### 10. Documentation Updates
After ANY code change: update docs/TASKS.md status

## File Structure
```
app/                    # Expo Router screens
  (auth)/              # Auth group (login, register, etc)
  (main)/              # Main app (home, practice, learn, profile)
src/
  components/          # UI components (ui/, practice/, learn/, progress/)
  hooks/               # Custom hooks (useAuth, useSubscription, etc)
  services/            # API layer (supabase, auth, practice, ai, etc)
  store/               # Zustand stores
  types/               # TypeScript interfaces
  theme/               # brand.ts (colors, spacing, typography)
  utils/               # constants, helpers, validation
supabase/
  migrations/          # SQL migrations
  functions/           # Edge Functions (ai-roleplay, ai-feedback, webhook)
docs/                  # REQUIREMENTS, DESIGN, PLAN, TASKS, BRANDING
```

## Database Tables
- `profiles` — user profiles (auto-created on signup)
- `scenarios` — practice scenarios with system prompts
- `practice_sessions` — completed sessions with scores
- `lessons` — learn section content (JSONB)
- `lesson_progress` — user progress per lesson
- `subscriptions` — RevenueCat sync
- `ai_usage` — rate limiting tracker

## Commands
- `/daily-start` — morning planning
- `/task [description]` — implement single task
- `/new-screen [name]` — scaffold new screen
- `/end-session` — commit and push
- `/audit` — full codebase audit

## Current Milestone
Check docs/PLAN.md for current milestone and docs/TASKS.md for active tasks.

## Quick Reference
```typescript
// Supabase client
import { supabase } from '@/services/supabase';

// Theme tokens
import { COLORS, SPACING, TYPOGRAPHY } from '@/theme/brand';

// Navigation
import { router } from 'expo-router';
router.push('/practice/[id]', { id: scenarioId });

// Analytics
import { usePostHog } from 'posthog-react-native';
posthog.capture('session_completed', { score });
```
