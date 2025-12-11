# Codev Project Instructions for AI Agents

> **Note**: Identical content is in [AGENTS.md](AGENTS.md) for cross-tool compatibility.

## Project Context

**THIS IS THE CODEV SOURCE REPOSITORY - WE ARE SELF-HOSTED**

This project IS Codev itself. We use Codev methodology to develop Codev.

### Repository Structure

| Directory | Purpose |
|-----------|---------|
| `codev/` | Our instance - specs, plans, reviews for Codev features |
| `codev-skeleton/` | Template distributed to users via npm |
| `packages/codev/` | @cluesmith/codev npm package source |

**When to modify each**:
- `codev/`: When implementing Codev features
- `codev-skeleton/`: When updating protocols, templates, or agents for users
- `packages/codev/`: When changing CLI implementation

## Quick Start

**Available Protocols**:
- **SPIDER**: Multi-phase development - `codev/protocols/spider/protocol.md`
- **TICK**: Amendments to existing specs - `codev/protocols/tick/protocol.md`
- **EXPERIMENT**: Research spikes - `codev/protocols/experiment/protocol.md`
- **MAINTAIN**: Codebase maintenance - `codev/protocols/maintain/protocol.md`

**Key locations**:
- Project tracking: `codev/projectlist.md` (master list, check first)
- Specifications: `codev/specs/`
- Plans: `codev/plans/`
- Reviews: `codev/reviews/`

### Human Approval Gates

| Gate | AI Action | Human Action |
|------|-----------|--------------|
| conceived → specified | Write spec | Approve spec |
| committed → integrated | Merge PR | Validate production |

AI agents must stop at `conceived` after writing a spec, and at `committed` after merging.

## Protocol Selection

| Situation | Protocol |
|-----------|----------|
| New feature from scratch | SPIDER |
| Amendment to existing spec | TICK |
| Research/prototyping | EXPERIMENT |
| Code hygiene, doc sync | MAINTAIN |
| Typo fix, small bug | Skip formal protocol |

## Core Workflow (SPIDER)

1. **Specify** - Define what to build
2. **Plan** - Break into executable phases
3. **For each phase**: Implement → Defend → Evaluate
4. **Review** - Capture lessons learned

### Consultation Checkpoints

Consult GPT-5 and Gemini Pro:
- After writing implementation code
- After writing tests
- Before presenting to user

## CLI Commands

Full documentation in `codev/docs/commands/`:
- **[overview.md](codev/docs/commands/overview.md)** - Quick reference
- **[codev.md](codev/docs/commands/codev.md)** - init, adopt, doctor, update, tower
- **[agent-farm.md](codev/docs/commands/agent-farm.md)** - start, spawn, status, cleanup, send
- **[consult.md](codev/docs/commands/consult.md)** - pr, spec, plan, general

### Quick Reference

```bash
# Project setup
codev init              # New project
codev adopt             # Existing project
codev doctor            # Check dependencies

# Agent Farm
af start                # Start dashboard
af spawn --project 42   # Spawn builder
af status               # Show status
af send builder "msg"   # Send message

# Consultation (run in parallel)
consult --model gemini pr 42 &
consult --model codex pr 42 &
wait
```

## Git Workflow

### ABSOLUTE PROHIBITION

**NEVER use these commands**:
```bash
git add -A        # FORBIDDEN
git add .         # FORBIDDEN
git add --all     # FORBIDDEN
```

**Always specify files explicitly**:
```bash
git add codev/specs/0001-feature.md
git add src/components/TodoList.tsx
```

### Commit Messages

```
[Spec 0001] Initial specification draft
[Spec 0001][Implement] Add auth routes
[Maintain] Update lessons-learned.md
```

### PR Merging

**Use regular merge, never squash**:
```bash
gh pr merge <number> --merge      # Correct
gh pr merge <number> --squash     # Forbidden
```

## Consultation

### Default Models
- **Gemini 3 Pro** (gemini-3-pro-preview) - deep analysis
- **GPT-5 Codex** (gpt-5-codex) - coding perspective

### Parallel Execution

**Always run 3-way reviews in parallel with background**:
```bash
consult --model gemini pr 95 &
consult --model codex pr 95 &
consult --model claude pr 95 &
wait
```

### Model Aliases

| Alias | Model | CLI |
|-------|-------|-----|
| gemini, pro | gemini-3-pro-preview | gemini-cli |
| codex, gpt | gpt-5-codex | codex |
| claude, opus | (default) | claude |

## Important Practices

### Before Starting ANY Task

1. Check `codev/projectlist.md` for status
2. Check for existing PRs: `gh pr list --search "keyword"`
3. Read existing code before modifying

### When Stuck (15+ minutes)

1. Stop coding
2. Consult external models with specific questions
3. Ask the user
4. Consider simpler approaches

### Code Quality

- Don't over-engineer - only make requested changes
- Don't add features beyond what's asked
- Don't add error handling for scenarios that can't happen
- Delete unused code completely (no `_vars` or comments)

## Testing

### Test Environment

Always use XDG sandboxing:
```bash
export XDG_CONFIG_HOME="$TEST_PROJECT/.xdg"
```

Never touch real `$HOME` directories in tests.

### Running Tests

```bash
# Unit tests
cd packages/codev && npm test

# Integration tests
./scripts/run-tests.sh
```

## Code Metrics

Use **tokei** for codebase metrics:
```bash
tokei -e "tests/lib" -e "node_modules" -e ".git" -e ".builders" -e "dist" .
```

## File Naming

```
codev/specs/0001-feature-name.md
codev/plans/0001-feature-name.md
codev/reviews/0001-feature-name.md
```

## Related Documentation

- **Architecture**: `codev/resources/arch.md`
- **Lessons Learned**: `codev/resources/lessons-learned.md`
- **Full Protocol**: `codev/protocols/spider/protocol.md`
- **Workflow Reference**: `codev/resources/workflow-reference.md`

---

*Context drives code. When in doubt, check the protocol.*
