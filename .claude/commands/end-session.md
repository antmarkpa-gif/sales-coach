# End Session

1. Update docs/TASKS.md:
   - Move completed items → ✅ section
   - Update 🔥 In Progress
   - Update ⏳ Up Next

2. Stage all changes:
   ```bash
   git add -A
   ```

3. Create commit with conventional format:
   ```bash
   git commit -m "[type](scope): summary

   Co-Authored-By: Claude <noreply@anthropic.com>"
   ```

4. Push to remote:
   ```bash
   git push origin [current branch]
   ```

5. Report:
   - What got done this session
   - What's next
   - Any blockers or notes for next session
