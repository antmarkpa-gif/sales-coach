# Create Screen: $ARGUMENTS

Requirements:
1. **Loading state**: Skeleton components (NOT ActivityIndicator)
2. **Error state**: Message + retry button
3. **Empty state**: Contextual message + action CTA
4. **TypeScript**: All props and navigation params typed
5. **PostHog**: Screen tracking on mount
6. **Register** in appropriate _layout.tsx navigation
7. **FeedbackButton** if it's a main tab screen

Implementation steps:
1. Create the screen file in appropriate location
2. Add skeleton loading state
3. Add error state with retry functionality
4. Add empty state with relevant CTA
5. Implement main content
6. Add PostHog tracking
7. Register in navigation layout
8. Update docs/TASKS.md
9. Commit when complete

All CLAUDE.md rules apply. Use existing component patterns.
