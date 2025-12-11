# Codev Architecture Documentation

## Overview

Codev is a context-driven development framework that treats natural language specifications as first-class code. This repository is self-hosted: we use Codev methodology to develop Codev itself.

**Published as**: `@cluesmith/codev` on npm

## Technology Stack

| Category | Technology | Purpose |
|----------|------------|---------|
| Runtime | Node.js 18+ | CLI and servers |
| Language | TypeScript | Type-safe implementation |
| Database | SQLite (better-sqlite3) | Runtime state, WAL mode |
| CLI | commander.js | Command parsing |
| Process | tree-kill, tmux | Session management |
| Web | ttyd | Terminal embedding |
| Testing | Vitest, bats-core | Unit and integration tests |

## Repository Structure

```
codev/                          # Git repository root
├── packages/codev/             # @cluesmith/codev npm package
│   ├── src/                    # TypeScript source
│   ├── bin/                    # CLI entry points (codev, af, consult)
│   ├── skeleton/               # Embedded codev-skeleton (built)
│   └── templates/              # HTML templates for dashboard/annotator
├── codev-skeleton/             # Template distributed to users
│   ├── protocols/              # SPIDER, TICK, EXPERIMENT, MAINTAIN
│   ├── roles/                  # architect, builder, consultant
│   ├── agents/                 # Claude Code agents
│   └── templates/              # Markdown templates
├── codev/                      # Our self-hosted instance
│   ├── specs/                  # Feature specifications
│   ├── plans/                  # Implementation plans
│   ├── reviews/                # Lessons learned
│   ├── resources/              # arch.md, lessons-learned.md
│   └── maintain/               # MAINTAIN protocol runs
├── tests/                      # bats-core integration tests
├── CLAUDE.md                   # AI agent instructions
└── AGENTS.md                   # Same as CLAUDE.md (AGENTS.md standard)
```

## npm Package Structure

The `@cluesmith/codev` package provides three CLI commands:

| Command | Entry Point | Purpose |
|---------|-------------|---------|
| `codev` | bin/codev.js | Project management (init, adopt, doctor, update) |
| `af` | bin/af.js | Agent Farm orchestration (start, spawn, status) |
| `consult` | bin/consult.js | Multi-agent consultation |

### Source Organization

```
packages/codev/src/
├── cli.ts                      # Main CLI entry, routes to commands
├── commands/                   # codev subcommands
│   ├── init.ts                 # codev init
│   ├── adopt.ts                # codev adopt
│   ├── doctor.ts               # codev doctor
│   ├── update.ts               # codev update
│   ├── eject.ts                # codev eject
│   ├── tower.ts                # codev tower
│   └── consult/                # consult command
│       └── index.ts            # Wraps gemini-cli, codex, claude
├── agent-farm/                 # af subcommands
│   ├── cli.ts                  # af CLI entry
│   ├── index.ts                # Core orchestration logic
│   ├── state.ts                # SQLite state management
│   ├── types.ts                # TypeScript interfaces
│   ├── commands/               # af subcommands
│   │   ├── start.ts            # Start architect dashboard
│   │   ├── spawn.ts            # Spawn builder in worktree
│   │   ├── status.ts           # Show builder status
│   │   ├── cleanup.ts          # Clean up builder
│   │   ├── send.ts             # Send message to builder
│   │   └── ...
│   ├── servers/                # HTTP servers
│   │   ├── dashboard-server.ts # Main dashboard
│   │   ├── tower-server.ts     # Multi-project overview
│   │   └── open-server.ts      # File annotator
│   ├── db/                     # SQLite database layer
│   │   ├── index.ts            # Database operations
│   │   ├── schema.ts           # Table definitions
│   │   └── migrate.ts          # JSON → SQLite migration
│   ├── tutorial/               # Interactive onboarding
│   └── utils/                  # Shared utilities
└── lib/                        # Shared library code
    ├── templates.ts            # Template file handling
    └── projectlist-parser.ts   # Parse projectlist.md
```

## Key Concepts

### Dual Directory Nature

| Directory | Purpose | Who Uses It |
|-----------|---------|-------------|
| `codev/` | Our specs, plans, reviews | Codev developers |
| `codev-skeleton/` | Template for users | Installed to user projects |

When you run `codev init`, the skeleton is copied to your project. When we work on Codev, we use the `codev/` directory.

### State Management

Runtime state is stored in SQLite databases:

| Database | Location | Contents |
|----------|----------|----------|
| Local | `.agent-farm/state.db` | Architect, builders, utils for this project |
| Global | `~/.agent-farm/global.db` | Port allocations across all projects |

### Protocols

| Protocol | Purpose | Key Files |
|----------|---------|-----------|
| SPIDER | Multi-phase development | spec → plan → implement → defend → evaluate → review |
| TICK | Amendments to existing specs | Modifies existing spec/plan in-place |
| EXPERIMENT | Research spikes | Disposable prototypes |
| MAINTAIN | Codebase maintenance | Code hygiene + doc sync |

Protocol files live in `codev-skeleton/protocols/*/protocol.md`.

### Roles

| Role | Responsibilities |
|------|-----------------|
| Architect | Creates specs/plans, reviews PRs, orchestrates builders |
| Builder | Implements specs in isolated worktrees |
| Consultant | External AI (Gemini, Codex, Claude) for review |

Role definitions live in `codev-skeleton/roles/*.md`.

## Data Flow

### Project Initialization

```
codev init
    ↓
Copy codev-skeleton/ → project/codev/
    ↓
Create CLAUDE.md, AGENTS.md from templates
    ↓
Create codev/projectlist.md
```

### Builder Spawning

```
af spawn --project 0042
    ↓
Create git worktree: .builders/0042-name/
    ↓
Start tmux session with claude --model sonnet
    ↓
Inject builder role + spec context
    ↓
Record in state.db (id, port, worktree, status)
```

### Consultation

```
consult --model gemini pr 42
    ↓
Load consultant role from roles/consultant.md
    ↓
Invoke gemini-cli with role as system prompt
    ↓
Stream output to terminal
```

## Configuration

### codev/config.json

```json
{
  "shell": {
    "architect": "claude --model opus",
    "builder": "claude --model sonnet",
    "shell": "bash"
  }
}
```

### Environment Variables

| Variable | Purpose |
|----------|---------|
| `CODEV_DEBUG` | Enable debug logging |
| `GEMINI_SYSTEM_MD` | System prompt for gemini-cli |

## Testing

### Unit Tests (Vitest)

```bash
cd packages/codev && npm test
```

Tests live in `src/**/__tests__/*.test.ts`. Coverage includes:
- State management
- Template handling
- CLI command logic
- Database operations

### Integration Tests (bats)

```bash
./scripts/run-tests.sh
```

Tests live in `tests/*.bats`. Coverage includes:
- `codev init/adopt/doctor`
- End-to-end workflows
- Platform compatibility (macOS, Linux)

## Key Design Decisions

1. **SQLite over JSON**: Atomic operations, no race conditions (Spec 0031)
2. **Embedded skeleton**: `npm run build` copies codev-skeleton into the package
3. **Template precedence**: Local files override embedded skeleton
4. **Git worktrees**: Isolated builder environments without branch switching
5. **tmux sessions**: Persistent terminals survive disconnection

## File Reference

| File | Purpose |
|------|---------|
| `packages/codev/src/agent-farm/state.ts` | SQLite state CRUD operations |
| `packages/codev/src/agent-farm/servers/dashboard-server.ts` | Main dashboard (~1200 lines) |
| `packages/codev/src/commands/consult/index.ts` | Multi-model consultation |
| `packages/codev/src/lib/templates.ts` | Skeleton file resolution |
| `codev-skeleton/protocols/spider/protocol.md` | SPIDER protocol definition |
| `codev-skeleton/roles/builder.md` | Builder role definition |

## Related Documentation

- **CLI Reference**: `codev/docs/commands/`
- **Lessons Learned**: `codev/resources/lessons-learned.md`
- **Workflow Reference**: `codev-skeleton/resources/workflow-reference.md`
