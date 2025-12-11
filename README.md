# Codev: Context-First Development

A development methodology that treats natural language context as code. Start with clear specifications that both humans and AI agents can understand and execute.

## Installation

```bash
npm install -g @cluesmith/codev
```

This provides three CLI commands:
- `codev` - Main CLI (init, adopt, doctor, update)
- `af` - Agent Farm for parallel development
- `consult` - Multi-agent consultation

See **[CLI Command Reference](codev/docs/commands/overview.md)** for complete documentation.

### Quick Start

```bash
# New project
mkdir my-project && cd my-project
codev init

# Existing project
cd existing-project
codev adopt

# Verify dependencies
codev doctor
```

Then tell your AI agent: "I want to build X using the SPIDER protocol"

## Prerequisites

| Dependency | Min Version | macOS | Purpose |
|------------|-------------|-------|---------|
| Node.js | 18.0 | `brew install node` | Runtime |
| tmux | 3.0 | `brew install tmux` | Terminal multiplexer |
| ttyd | 1.7 | `brew install ttyd` | Web terminal |
| git | 2.5 | (pre-installed) | Worktrees |
| gh | latest | `brew install gh` | GitHub CLI |

**AI CLI** (at least one required):
- Claude Code: `npm install -g @anthropic-ai/claude-code`
- Gemini CLI: [github.com/google-gemini/gemini-cli](https://github.com/google-gemini/gemini-cli)
- Codex CLI: `npm install -g @openai/codex`

See **[DEPENDENCIES.md](codev-skeleton/DEPENDENCIES.md)** for complete instructions.

## The SP(IDE)R Protocol

Our flagship protocol for structured development:

- **S**pecify - Define what to build in clear, unambiguous language
- **P**lan - Break specifications into executable phases
- **For each phase:** **I**mplement → **D**efend → **E**valuate
- **R**eview - Capture lessons and improve the methodology

## Project Structure

After `codev init` or `codev adopt`:

```
your-project/
├── codev/
│   ├── specs/              # Feature specifications
│   ├── plans/              # Implementation plans
│   ├── reviews/            # Lessons learned
│   └── projectlist.md      # Project tracking
├── AGENTS.md               # AI agent instructions
├── CLAUDE.md               # Same as AGENTS.md
└── [your code]
```

Framework files (protocols, roles, templates) are provided at runtime by `@cluesmith/codev`. Local files override the embedded skeleton.

## Key Features

- **Documents as Code** - Specs, plans, and lessons tracked in version control
- **AI-Native Workflow** - Structured formats AI agents understand
- **Multi-Agent Consultation** - GPT-5, Gemini Pro, Claude for review
- **Continuous Improvement** - Every project improves the methodology

## Learn More

- 📺 **[Quick Introduction](https://youtu.be/vq_dmfyMHRA)** (5 min)
- 📺 **[Extended Overview](https://www.youtube.com/watch?v=8KTHoh4Q6ww)** (full)
- 🎯 **[Codev Demo Tour](https://github.com/ansari-project/codev-demo/blob/main/codev-tour.md)** - Building a Todo Manager
- 📖 **[Why We Created Codev](docs/why.md)** - From theory to practice
- 💬 **[GitHub Discussions](https://github.com/ansari-project/codev/discussions)** - Community Q&A

## Example: VIBE vs SPIDER

Same prompt, same AI model, different methodologies:

| Aspect | VIBE | SPIDER |
|--------|------|--------|
| **Files** | 3 (boilerplate) | 32 (complete app) |
| **Functionality** | 0% | 100% |
| **Tests** | 0 | 5 test suites |
| **Score** | 12-15/100 | 92-95/100 |

See detailed comparison: [VIBE](https://github.com/ansari-project/todo-manager-vibe) vs [SPIDER](https://github.com/ansari-project/codev-demo)

## Agent Farm

Optional web dashboard for parallel AI-assisted development:

```bash
af start                # Start dashboard
af spawn --project 42   # Spawn builder
af status               # Show status
af stop                 # Stop everything
```

**Features:**
- Monitor multiple builders at once
- Git worktree isolation for each builder
- Protocol-aware (knows about specs, plans)

See **[agent-farm.md](codev/docs/commands/agent-farm.md)** for full documentation.

## Self-Hosted Development

Codev is built with Codev. This repository has a dual structure:

| Directory | Purpose |
|-----------|---------|
| `codev/` | Our specs, plans, reviews for developing Codev |
| `codev-skeleton/` | Template distributed to users via npm |
| `packages/codev/` | npm package source code |

Explore our specs in `codev/specs/` to see how we build features.

## Testing

```bash
# Unit tests
cd packages/codev && npm test

# Integration tests
./scripts/run-tests.sh
```

216 unit tests + 64 bats integration tests. XDG sandboxing ensures tests never touch real user directories.

## Contributing

- **Bug Reports**: [Open an issue](https://github.com/ansari-project/codev/issues)
- **Feature Requests**: Share your ideas
- **Code**: New protocols, templates, integrations
- **Community**: Share SPIDER improvements from your projects

## License

MIT - See LICENSE file for details

---

*Built with Codev - where context drives code*
