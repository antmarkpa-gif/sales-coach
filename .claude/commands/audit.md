# Full Codebase Audit

Run all checks in order. Report all issues. Fix nothing yet.

## SECURITY

1. Check for exposed API keys:
   ```bash
   grep -r "sk-ant\|anthropic\|openai" src/
   ```
   Expected: 0 results

2. Check for exposed service keys:
   ```bash
   grep -r "SUPABASE_SERVICE_ROLE" src/
   ```
   Expected: 0 results

3. Verify all Supabase tables have RLS in DESIGN.md schema

4. Check token storage (should only use expo-secure-store):
   ```bash
   grep -r "AsyncStorage" src/
   ```
   Expected: 0 results (tokens in SecureStore only)

## TYPESCRIPT

1. Type check:
   ```bash
   npx tsc --noEmit
   ```
   Expected: Pass clean

2. Check for `any` types:
   ```bash
   grep -r ": any" src/
   ```
   List all occurrences

## AI ARCHITECTURE

1. Check for direct Anthropic imports in src/:
   ```bash
   grep -r "@anthropic-ai/sdk\|Anthropic(" src/
   ```
   Expected: 0 results (all AI through Edge Functions)

2. Verify ai.service.ts exists and routes through Edge Functions

## PERFORMANCE

1. Check for FlatList usage:
   ```bash
   grep -r "FlatList" src/
   ```
   Expected: 0 results (use FlashList)

2. Check for wrong Image import:
   ```bash
   grep -r "from 'react-native'" src/ | grep "Image"
   ```
   Expected: 0 results (use expo-image)

3. Verify all list components use FlashList

## ERROR HANDLING

1. Every screen has loading/error/empty states
2. Every AI call handles timeout (8s indicator, 15s retry)
3. Offline behavior tested

## CONSISTENCY

1. Colors from brand.ts only (no hardcoded hex values):
   ```bash
   grep -rE "#[0-9A-Fa-f]{6}" src/ --include="*.tsx"
   ```

2. All spacing from brand.ts SPACING constants

## OUTPUT

Numbered issues by priority:
- **CRITICAL**: Security vulnerabilities, data exposure
- **HIGH**: Type safety, performance issues
- **MEDIUM**: Consistency, best practices

Do NOT fix anything. Wait for approval on which issues to address.
