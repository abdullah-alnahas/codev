# Review: Secure Remote Access

## Metadata
- **Spec**: codev/specs/0062-secure-remote-access.md
- **Plan**: codev/plans/0062-secure-remote-access.md
- **Protocol**: SPIDER
- **Status**: Completed
- **Completed**: 2025-12-27

## Summary

This spec implements secure remote access to Agent Farm via SSH tunneling. The solution enables users to access the Agent Farm dashboard and all terminal sessions (architect, builders, utils) from remote devices like iPads or other laptops through a single SSH port forward.

### Key Components Implemented

1. **Reverse Proxy** (packages/codev/src/agent-farm/servers/dashboard-server.ts)
   - Added http-proxy for proxying HTTP and WebSocket traffic
   - Created `/terminal/:id` route that maps terminal IDs to ttyd ports
   - Implemented `getPortForTerminal()` helper for port lookup
   - Added WebSocket upgrade handler for terminal communication

2. **Dashboard UI Updates** (packages/codev/templates/dashboard/js/tabs.js)
   - Created `getTerminalUrl()` function for proxied URL generation
   - Updated architect iframe to use `/terminal/architect`
   - Updated builder tabs to use `/terminal/builder-{id}`
   - Updated shell tabs to use `/terminal/util-{id}`

3. **af tunnel Command** (packages/codev/src/agent-farm/commands/tunnel.ts)
   - Outputs SSH command with detected local IPs
   - Derives dashboard port from running architect state
   - Includes SSH config suggestion for convenience
   - Provides Windows-specific guidance

4. **Documentation** (CLAUDE.md, AGENTS.md)
   - Added Remote Access section with step-by-step instructions
   - Documented `af tunnel` command

## Consultation Summary

### Gemini (94.7s)
- **Verdict**: REQUEST_CHANGES
- **Key Issue**: Dashboard port should be derived from running state, not config
- **Resolution**: Fixed to use `architect.port - 1`

### Codex (21.5s)
- **Verdict**: REQUEST_CHANGES
- **Key Issues**:
  1. Spec metadata had wrong ID (0055 vs 0062)
  2. Port derivation issue (same as Gemini)
  3. Suggested adding host-header regression tests
- **Resolution**: Fixed metadata, port derivation. Host-header tests already covered by existing security tests.

## Test Coverage

Added 23 new tests:
- `tunnel.test.ts` (8 tests): Command output, IP detection, Windows handling
- `terminal-proxy.test.ts` (15 tests): Port lookup logic for all terminal types

## Implementation Notes

### Design Decisions

1. **Why http-proxy over http-proxy-middleware?**
   - Dashboard uses raw `http.createServer()`, not Express
   - http-proxy integrates directly with native Node HTTP server

2. **Why SSH tunnel instead of authentication?**
   - Leverages existing SSH infrastructure (no new dependencies)
   - SSH handles authentication, encryption, and access control
   - Works with existing SSH keys and configs
   - Simpler than implementing auth layer in dashboard

3. **Why derive port from architect state?**
   - Users may start with custom `--port` option
   - Config defaults may not match running state
   - Runtime state is the source of truth

### Limitations

1. **File annotations still use direct ports**
   - open-server (for file viewing) is not yet proxied
   - Would require similar proxy treatment or server consolidation

2. **No active Windows SSH detection**
   - Only shows guidance message, doesn't detect sshd service
   - Detection would add complexity for minimal benefit

## Lessons Learned

1. **State vs Config**: When generating instructions based on running services, always use runtime state (from database/memory), not config defaults.

2. **Spec Metadata**: Always verify spec file metadata (ID) matches filename before implementation.

3. **WebSocket Proxy**: http-proxy handles WebSocket upgrade seamlessly with `ws: true` option and explicit upgrade handler.

4. **Test Mocking**: When mocking `process.exit`, make it throw to properly simulate control flow termination.

## Files Modified

- `packages/codev/package.json` - Added http-proxy dependency
- `packages/codev/src/agent-farm/servers/dashboard-server.ts` - Reverse proxy
- `packages/codev/src/agent-farm/commands/tunnel.ts` - New command
- `packages/codev/src/agent-farm/commands/index.ts` - Export tunnel
- `packages/codev/src/agent-farm/cli.ts` - Register tunnel command
- `packages/codev/templates/dashboard/js/tabs.js` - Proxied URLs
- `packages/codev/src/agent-farm/__tests__/tunnel.test.ts` - New tests
- `packages/codev/src/agent-farm/__tests__/terminal-proxy.test.ts` - New tests
- `CLAUDE.md` - Documentation
- `AGENTS.md` - Documentation
- `codev/specs/0062-secure-remote-access.md` - Fixed metadata

## Acceptance Criteria Status

- [x] Single SSH forward exposes entire dashboard
- [x] All terminal iframes work through proxy
- [x] WebSocket connections (ttyd) work correctly
- [x] `af tunnel` outputs correct SSH command
- [x] Documentation updated
- [x] Tests added
