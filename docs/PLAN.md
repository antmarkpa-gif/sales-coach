# SALES COACH — Implementation Plan

## M0: Foundation (Current)
**Goal**: Project scaffold, specs, infrastructure ready

### Done When
- [ ] Git repo initialized with proper .gitignore
- [ ] GitHub repo created and pushed
- [ ] Auto-commit hooks configured
- [ ] Expo project created with all dependencies
- [ ] NativeWind configured and working
- [ ] CLAUDE.md created with all rules
- [ ] All spec docs in /docs/
- [ ] Folder structure created
- [ ] Scaffold files implemented (supabase.ts, brand.ts, Button, etc.)
- [ ] Database migrations written
- [ ] Edge Functions scaffolded
- [ ] CI/CD workflows created
- [ ] Slash commands created

---

## M1: Auth + Navigation Shell
**Goal**: User can register, login, navigate tabs

### Done When
- [ ] Supabase project connected
- [ ] Auth flows working (register, login, logout, forgot password)
- [ ] Email verification flow
- [ ] Tab navigation with proper icons
- [ ] Protected routes (redirect to login if not authenticated)
- [ ] Profile screen with logout button
- [ ] PostHog initialized with user identification

---

## M2: Practice Core
**Goal**: User can complete a practice session

### Done When
- [ ] Scenario list displays with difficulty badges
- [ ] Scenario detail shows description and "Start" CTA
- [ ] Chat UI with message bubbles
- [ ] AI streaming working via Edge Function
- [ ] Typing indicator with timeout handling
- [ ] Session ends after 5 messages
- [ ] Feedback generated and displayed
- [ ] Session saved to database

---

## M3: Learn + Progress
**Goal**: User can read lessons and track progress

### Done When
- [ ] Lesson list with progress indicators
- [ ] Lesson content renders all block types
- [ ] Lesson completion tracking
- [ ] Progress screen shows stats
- [ ] Score chart displays trend
- [ ] Session history with detail view
- [ ] Streak calculation working

---

## M4: Subscriptions
**Goal**: Payments working, limits enforced

### Done When
- [ ] RevenueCat SDK integrated
- [ ] Paywall displays correctly
- [ ] Purchase flow works (sandbox)
- [ ] Webhook syncs subscription to DB
- [ ] Rate limiting enforced (3 free / 50 pro)
- [ ] Premium scenarios locked for free users
- [ ] Premium lessons locked for free users
- [ ] History limited to 7 days for free users

---

## M5: Polish + Launch
**Goal**: App store ready

### Done When
- [ ] All loading states use Skeleton
- [ ] All error states have retry
- [ ] All empty states have CTAs
- [ ] Haptic feedback on all buttons
- [ ] Offline handling
- [ ] App icons and splash screen
- [ ] EAS Build configured
- [ ] App Store screenshots
- [ ] Play Store listing
- [ ] Privacy policy
- [ ] Terms of service
- [ ] TestFlight beta
- [ ] Production launch
