# SALES COACH — Requirements Specification

## Authentication (REQ-AUTH)
- **REQ-AUTH-01**: Email/password registration with email verification
- **REQ-AUTH-02**: Email/password login with "remember me" option
- **REQ-AUTH-03**: Password reset via email link
- **REQ-AUTH-04**: Persistent sessions using secure token storage (expo-secure-store)
- **REQ-AUTH-05**: Auto-logout on token expiration with redirect to login

## Practice Module (REQ-PRACTICE)
- **REQ-PRACTICE-01**: Display scenario cards with title, description, difficulty badge
- **REQ-PRACTICE-02**: Free users see 8 scenarios, Pro users see all (including premium)
- **REQ-PRACTICE-03**: Real-time streaming chat with Rex (AI customer)
- **REQ-PRACTICE-04**: Chat interface with user/AI message bubbles, timestamps
- **REQ-PRACTICE-05**: Typing indicator while Rex is responding ("Rex is thinking...")
- **REQ-PRACTICE-06**: Extended thinking indicator at 8s ("Rex is thinking hard on this one...")
- **REQ-PRACTICE-07**: Timeout handling at 15s with retry option
- **REQ-PRACTICE-08**: Session ends after 5 user messages → feedback generated
- **REQ-PRACTICE-09**: Feedback screen shows: score (0-100), strengths, improvements, best line, Rex's verdict
- **REQ-PRACTICE-10**: Score label mapping: 0-40="Sigue practicando", 41-70="Vas bien", 71-85="Cierre sólido", 86-100="Closer élite"
- **REQ-PRACTICE-11**: Save session to history with full transcript and feedback
- **REQ-PRACTICE-12**: Custom scenario creation (Pro only): product description, opening objection, industry

## Learn Module (REQ-LEARN)
- **REQ-LEARN-01**: Lesson list with progress indicators (not started, in progress, completed)
- **REQ-LEARN-02**: Free users access first 5 lessons, Pro users access all
- **REQ-LEARN-03**: Lesson content renders: text blocks, tips, examples, key takeaways
- **REQ-LEARN-04**: Mark lesson as complete on reaching end
- **REQ-LEARN-05**: Track time spent per lesson

## Progress Module (REQ-PROGRESS)
- **REQ-PROGRESS-01**: Display total sessions completed, average score, best score
- **REQ-PROGRESS-02**: Show current streak (consecutive days with practice)
- **REQ-PROGRESS-03**: Score trend chart (last 7/30 sessions)
- **REQ-PROGRESS-04**: Session history list with date, scenario, score
- **REQ-PROGRESS-05**: Free users see last 7 days, Pro users see all history
- **REQ-PROGRESS-06**: Tap session to view full transcript and feedback

## Subscription (REQ-SUB)
- **REQ-SUB-01**: Display current plan status (Free/Pro)
- **REQ-SUB-02**: Show upgrade prompt when hitting free limits
- **REQ-SUB-03**: RevenueCat integration for iOS/Android purchases
- **REQ-SUB-04**: Support monthly ($9.99) and annual ($79.99) plans
- **REQ-SUB-05**: 7-day free trial for new subscribers
- **REQ-SUB-06**: Webhook handler syncs subscription status to database
- **REQ-SUB-07**: Graceful handling of subscription expiration/cancellation

## Rate Limiting (REQ-RATE)
- **REQ-RATE-01**: Free users: 3 AI sessions per day
- **REQ-RATE-02**: Pro users: 50 AI sessions per day
- **REQ-RATE-03**: Show remaining sessions in UI
- **REQ-RATE-04**: Clear, friendly message when limit reached with upgrade CTA

## Performance & UX (REQ-UX)
- **REQ-UX-01**: All lists use FlashList for 60fps scrolling
- **REQ-UX-02**: Images use expo-image with caching
- **REQ-UX-03**: Skeleton loaders for all loading states
- **REQ-UX-04**: Haptic feedback on button presses (expo-haptics)
- **REQ-UX-05**: Offline detection with user-friendly message
