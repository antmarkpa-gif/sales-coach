# Task: $ARGUMENTS

Before implementing:
1. Read CLAUDE.md rules
2. Read docs/DESIGN.md for schema/architecture reference
3. Write a 5–10 line implementation plan:
   - What files will be modified/created
   - What order to implement
   - What patterns to follow

STOP. Show me the plan. Wait for "approved" or corrections.

After approval:
1. Implement the task
2. Check TypeScript compiles: `npx tsc --noEmit`
3. Verify 3 UI states (loading, error, empty) if applicable
4. Update docs/TASKS.md
5. Commit when complete

Rules:
- One task only. No scope creep.
- All 10 CLAUDE.md rules apply
- Use existing patterns from the codebase
