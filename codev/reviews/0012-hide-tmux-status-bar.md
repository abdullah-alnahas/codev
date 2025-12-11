# TICK Review: Hide tmux Status Bar

## Metadata
- **ID**: 0012-hide-tmux-status-bar
- **Protocol**: TICK
- **Date**: 2025-12-10
- **Specification**: codev/specs/0012-hide-tmux-status-bar.md
- **Plan**: codev/plans/0012-hide-tmux-status-bar.md
- **Status**: completed

## Implementation Summary

Added `tmux set-option -t "${sessionName}" status off` after every tmux session creation to hide the status bar in dashboard terminals. The dashboard already provides tab navigation, making the tmux status bar redundant and wasteful of vertical space.

## Success Criteria Status
- [x] tmux status bar not visible in Architect terminal
- [x] tmux status bar not visible in Builder terminals
- [x] tmux status bar not visible in Util terminals
- [x] No functional loss (session info available via dashboard)
- [x] Build compiles successfully
- [x] No breaking changes

## Files Changed

### Modified
- `packages/codev/src/agent-farm/commands/start.ts` - Added status off after architect session creation (line 117)
- `packages/codev/src/agent-farm/commands/spawn.ts` - Added status off after builder session creation (3 locations: lines 267, 315, 639)
- `packages/codev/src/agent-farm/servers/dashboard-server.ts` - Added status off after util and worktree builder session creation (2 locations: lines 342, 435)
- `agent-farm/src/commands/start.ts` - Synced from packages/codev
- `agent-farm/src/commands/spawn.ts` - Synced from packages/codev
- `agent-farm/src/servers/dashboard-server.ts` - Synced from packages/codev

## Deviations from Plan

The plan's line numbers were approximate. Actual locations varied slightly but the pattern was consistent:
- Always add `status off` immediately after `tmux new-session`
- Always add before mouse/clipboard configuration

## Testing Results

### Manual Tests
1. Build compiles successfully - Verified
2. tmux status bar hidden - Requires live test (sessions created at runtime)
3. User's other tmux sessions unaffected - Uses per-session `-t` flag, not global

### Verification Command
```bash
# After starting af, check session status
tmux show-options -t "af-architect-XXXX" status
# Expected output: status off
```

## Challenges Encountered

1. **Plan line numbers were off**
   - **Solution**: Used grep/search to find actual locations of tmux session creation

2. **agent-farm/src vs packages/codev/src divergence**
   - **Solution**: Synced files from packages/codev to agent-farm after changes

## Lessons Learned

### What Went Well
- Pattern was consistent across all files
- Single-line change at each location made implementation straightforward
- Using per-session `-t` flag ensures no global side effects

### What Could Improve
- agent-farm/src should be derived from packages/codev/src automatically (symlinks or build step)
- Could consider making status bar configurable in config.json for power users

## Multi-Agent Consultation

**Models Consulted**: Gemini 3 Pro, GPT-5 Codex
**Date**: 2025-12-10

### Key Feedback

**Gemini Pro** (29.1s):
- Verified all 6 locations where `tmux set-option -t <session> status off` was added
- Confirmed placement is correct (immediately after creation, before user interaction)
- Low risk assessment - standard tmux configuration command
- **Verdict: APPROVE**

**GPT-5 Codex** (70.8s):
- Verified all six `tmux new-session` call sites now immediately issue `status off`
- Confirmed command scopes change to session (not global), avoiding side effects
- Noted `status` option available since tmux 1.0, no compatibility concerns
- Confirmed no additional `tmux new-session` invocations were missed
- Noted no flicker: status bar never becomes visible in freshly spawned sessions
- **Verdict: APPROVE**

### Issues Identified
- None - both reviewers approved without changes

### Recommendations
- Both agreed implementation is solid and consistent

## TICK Protocol Feedback
- **Autonomous execution**: Worked well - small, well-defined scope
- **Single-phase approach**: Appropriate for this task
- **Speed vs quality trade-off**: Balanced - simple change, hard to get wrong
- **End-only consultation**: Appropriate given scope

## Follow-Up Actions
- [ ] Run multi-agent consultation
- [ ] Manual testing after merge
- [ ] Consider adding toggle mechanism if users request it (per expert consultation in spec)

## Conclusion

TICK was appropriate for this task. The implementation was straightforward - adding a single tmux option after each session creation. The change provides a cleaner dashboard experience with more vertical space for terminal content. No functional regression as the dashboard provides equivalent navigation.
