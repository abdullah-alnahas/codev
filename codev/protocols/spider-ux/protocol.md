# SPIDER-UX Protocol
**A Rigorous Protocol for Agentic Backend-Less Web Engineering**

> **Quick Reference**: See `codev/resources/workflow-reference.md` for stage diagrams and common commands.

## Executive Summary

SPIDER-UX is a specialized protocol for autonomous AI agents building verified, backend-less web applications. It addresses the core challenge in UI/UX engineering: the **"Feedback Gap"**—the disconnect between an agent's code generation capabilities and its ability to perceive the visual and interactive consequences of that code.

**Key Innovation**: SPIDER-UX provides agents with "synthetic vision" through Playwright MCP's accessibility tree, enabling semantic verification of UI rather than pixel-based verification.

## Prerequisites

**Required Tools:**
- The `consult` CLI must be available (installed with `npm install -g @cluesmith/codev`)
- **Playwright MCP** server configured for browser automation
- **MSW (Mock Service Worker)** for backend-less development
- Node.js/npm environment with React/Next.js or similar framework
- TypeScript with strict mode enabled

**Check Setup:**
```bash
codev doctor
npx playwright --version
```

## Core Philosophy

### The Three Pillars

| Component | Role | Function |
|-----------|------|----------|
| **Claude Code / Agent** | Architect & Builder | Orchestration engine that reasons about the project, generates plans, executes code modifications |
| **Playwright MCP** | Critic & Sensor | Agent's "eyes"—launches app, queries Accessibility Tree, detects layout violations |
| **MSW** | Simulator | "Source of Truth" for data—enables deterministic UI state verification |

### Key Principles

1. **Backend-Less**: Build fully functional demos without API dependencies using MSW
2. **Semantics-First**: All interactive elements must have ARIA roles and `data-testid`
3. **Fail-Fast**: Automated verification before any human review
4. **Contract-First**: Data schemas (Zod/OpenAPI) defined before implementation
5. **Mandatory Defense Gate**: Human review forbidden until agent proves work through automated browser instrumentation

## When to Use SPIDER-UX

### Use SPIDER-UX for:
- New frontend features with UI/UX components
- Full-page or component development
- Interactive demos and prototypes
- Responsive web applications
- Any UI work requiring visual verification

### Use Standard SPIDER instead when:
- Backend-only work (APIs, services)
- CLI tools or non-visual applications
- Infrastructure/DevOps tasks
- Documentation-only projects

## Protocol Phases

### S - Specify (The Foundation of Truth)

**Purpose**: Transform abstract requirements into machine-readable textual definitions that prevent hallucination.

**"Ambiguity is the enemy of automation."**

SPIDER-UX specifications require THREE parallel artifacts:

#### 1. The Data Contract

Define all data schemas using **Zod** or **OpenAPI** BEFORE any UI work begins.

```typescript
// specs/data/transaction-schema.ts
import { z } from 'zod';

export const TransactionSchema = z.object({
  id: z.string().uuid(),
  amount: z.number(),
  currency: z.enum(['USD', 'EUR', 'GBP']),
  status: z.enum(['pending', 'completed', 'failed']),
  createdAt: z.string().datetime(),
  description: z.string().nullable(),
});

export type Transaction = z.infer<typeof TransactionSchema>;
```

**Requirements:**
- Include edge cases: nullable fields, pagination metadata, error codes
- Schema drives TypeScript types, MSW handlers, and runtime validation
- Single source of truth for all data

#### 2. The Semantic Contract

Define the **accessibility traits** of every interactive element.

| Requirement | Traditional | SPIDER-UX |
|-------------|-------------|-----------|
| "User clicks Save button" | Implementation-focused | "A widget with role `button` and label 'Save' exists. Upon interaction, UI transitions from 'Editing' to 'Saving'" |

**Why This Matters:**
- Agents cannot "see" if a `<div>` with a click listener is interactive
- Semantic contracts ensure testable, accessible UI
- Prevents the "untestable UI" problem

#### 3. The State Matrix

Enumerate ALL UI states—not just the happy path.

| UI State | Trigger Condition | Data Requirement | Visual Indicator |
|----------|-------------------|------------------|------------------|
| **Initial** | Page Load | None | Skeleton Loader / Spinner |
| **Success** | Data Fetched (200 OK) | List of >0 items | Grid View with Items |
| **Empty** | Data Fetched (200 OK) | List of 0 items | "No items found" illustration |
| **Error** | Network Failure (500/404) | Exception Object | Retry Button & Error Message |
| **Saving** | User Action (POST) | Optimistic Update | Disabled Inputs + Spinner |

**This matrix becomes the Defend phase checklist.**

#### 4. Responsive Layout Schema

Define layout behavior at specific breakpoints:

```yaml
layout_rules:
  - element: "sidebar_navigation"
    breakpoints:
      mobile: { visibility: "hidden" }
      desktop: { visibility: "visible" }
  - element: "hamburger_menu"
    breakpoints:
      mobile: { visibility: "visible" }
      desktop: { visibility: "hidden" }
```

**Breakpoint Definitions:**
- Mobile: 375px
- Tablet: 768px
- Desktop: 1024px+

**Workflow:**
1. Analyze requirements and generate spec document
2. **COMMIT**: "Initial specification draft"
3. Multi-agent review (GPT-5 and Gemini Pro)
4. Update spec with feedback
5. **COMMIT**: "Specification with multi-agent review"
6. Human reviews and provides comments
7. Iterate until approved

**Output**: `codev/specs/####-feature-name.md` using SPIDER-UX spec template

---

### P - Plan (Atomization and Architecture)

**Purpose**: Break monolithic specifications into atomic, executable steps.

**"Divide and Conquer."**

#### Component Decomposition (Atomic Design)

Break UI into hierarchical components:

| Level | Examples | Characteristics |
|-------|----------|-----------------|
| **Atoms** | `PrimaryButton`, `InputField`, `Icon` | Single-purpose, highly reusable |
| **Molecules** | `SearchBar`, `FormField` | Composed of atoms |
| **Organisms** | `UserCard`, `TransactionList`, `NavigationHeader` | Complex, domain-specific |
| **Templates** | `DashboardLayout`, `AuthLayout` | Page-level structure |
| **Pages** | `TransactionsPage`, `ProfilePage` | Full routes |

**Build bottom-up**: Implement and test `PrimaryButton` before `UserCard`.

#### State Management Architecture

Separate concerns explicitly:

| State Type | Manager | Examples |
|------------|---------|----------|
| **Server State** | React Query / SWR | API data, cache, loading states |
| **Client State** | Zustand / Context | Modal open/close, form inputs |

#### Plan Checklist Format

```markdown
# Plan: Transaction History Feature

## Phase 1: Data Layer
- [ ] Define Transaction Zod schema in `src/types`
- [ ] Implement MSW handler with simulated latency (800ms)
- [ ] Implement MSW error scenarios (500, 404)

## Phase 2: Components
- [ ] Build `TransactionRow` component (Molecule)
- [ ] Build `TransactionTable` component (Organism)
- [ ] Build loading skeleton variant

## Phase 3: Integration
- [ ] Integrate `useQuery` hook for data fetching
- [ ] Implement error boundary
- [ ] Add empty state handling

## Phase 4: Defense
- [ ] Verify "Loading" state via Playwright
- [ ] Verify "Error" state using MSW override
- [ ] Verify responsive behavior at all breakpoints
```

**Output**: `codev/plans/####-feature-name.md` using SPIDER-UX plan template

---

### I - Implement (Mock-First, Device-Aware Construction)

**Purpose**: Build working code with the Mock Layer as the foundation.

**"Mock-First, Device-Aware."**

#### Step 1: The Smart Mock Foundation

MSW handlers must be **"Smart Mocks"** that simulate real backend behavior:

```typescript
// src/mocks/handlers.ts
import { http, HttpResponse, delay } from 'msw';
import { Transaction } from '@/types/transaction';

export const handlers = [
  // Success with realistic latency
  http.get('/api/transactions', async () => {
    await delay(800); // Force loading state visibility
    return HttpResponse.json<Transaction[]>([
      { id: '1', amount: 100, /* ... */ },
    ]);
  }),

  // Empty state
  http.get('/api/transactions/empty', async () => {
    await delay(300);
    return HttpResponse.json([]);
  }),

  // Error state
  http.get('/api/transactions/error', async () => {
    await delay(300);
    return new HttpResponse(null, { status: 500 });
  }),
];
```

**Why Smart Mocks:**
- Forces rendering of loading states (skeletons, spinners)
- Enables deterministic error testing
- Creates demo-ready artifacts from day one

#### Step 2: Device Preview Shell

Wrap the application in a responsive preview component:

```typescript
// Toolbar allows toggling between device frames
// Mobile: 375px, Tablet: 768px, Desktop: 1440px
```

**Benefits:**
- Verify responsive layouts without resizing browser
- More reliable in CI environments
- Consistent testing across viewports

#### Step 3: Semantic Widget Construction

**MANDATORY**: Every interactive element must be semantically identifiable.

| Correct | Incorrect |
|---------|-----------|
| `<button aria-label="Submit Transaction">Submit</button>` | `<div onClick={submit}>Submit</div>` |

**Checklist:**
- [ ] All buttons use `<button>` or have `role="button"`
- [ ] All inputs have associated labels
- [ ] All interactive elements have `data-testid`
- [ ] ARIA attributes present where needed

#### Step 4: Feature Flags & Environment Configuration

```typescript
// src/index.tsx
async function enableMocking() {
  if (process.env.NODE_ENV !== 'development') {
    return;
  }
  const { worker } = await import('./mocks/browser');
  return worker.start();
}

enableMocking().then(() => {
  ReactDOM.createRoot(rootElement).render(<App />);
});
```

**Environment Variables:**
- `NEXT_PUBLIC_USE_MOCKS=true` for backend-less demo build
- `npm run build:demo` produces deployable demo artifact

---

### D - Defend (The Autonomous Critic)

**Purpose**: PROVE the code works through automated verification. Manual verification is FORBIDDEN during the active development loop.

**"The Autonomous Critic."**

#### The Defense Mechanism: Playwright MCP

Playwright MCP provides high-level tools to the agent:

| Tool | Purpose |
|------|---------|
| `navigate(url)` | Visit a page |
| `click(selector)` | Interaction |
| `fill(selector, text)` | Input |
| `snapshot_accessibility_tree()` | Primary sensory input |
| `get_console_logs()` | Fail-fast error detection |

#### The Verification Workflow

```
┌─────────────────────────────────────────────────────────────┐
│                    DEFEND PHASE LOOP                        │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│   1. LAUNCH                                                 │
│      └── Start dev server with MSW enabled                  │
│                                                             │
│   2. INSPECT (Sensory Step)                                 │
│      └── Request Accessibility Tree                         │
│      └── Semantic truth > raw HTML (fewer tokens)           │
│                                                             │
│   3. INTERACT                                               │
│      └── playwright_click(selector: "role=button[name=Save]")│
│                                                             │
│   4. VERIFY STATE                                           │
│      └── Check State Matrix conditions                      │
│      └── Did spinner appear? Did toast show?                │
│                                                             │
│   5. FAIL-FAST CHECK                                        │
│      └── Console errors = IMMEDIATE FAIL                    │
│      └── 404, TypeError = IMMEDIATE FAIL                    │
│                                                             │
│   6. RESPONSIVE VERIFICATION                                │
│      └── Resize viewport to 375x667                         │
│      └── Verify layout rules from spec                      │
│      └── Check for horizontal overflow                      │
│                                                             │
│   [PASS] → Proceed to Evaluate                              │
│   [FAIL] → Self-Healing Loop                                │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

#### Self-Healing (The Ouroboros Loop)

When Defense fails:

1. **Analyze**: Compare expected vs actual Semantic Tree
2. **Diagnose**: "Button label is 'Submit', not 'Save' as spec'd"
3. **Fix**: Autonomously modify code OR update spec if code is correct
4. **Retry**: Re-run Defense script

**This closes the loop without human intervention.**

#### Defense Script Template

```bash
#!/bin/bash
# scripts/defend_ui.sh

# 1. Start the App in Background with Mocks Enabled
echo "Starting App with Mocks..."
NEXT_PUBLIC_USE_MOCKS=true npm run dev &
PID=$!

# 2. Wait for localhost to be ready
npx wait-on http://localhost:3000

# 3. Invoke Claude Agent to Verify
echo "Invoking Claude Critic..."
claude -p "Connect to http://localhost:3000. Use Playwright MCP to verify the UI against 'specs/ui/state_matrix.md'. Check mobile responsiveness and error states."

# 4. Cleanup
kill $PID
echo "Defense Complete."
```

#### Mandatory Defense Checks

- [ ] All State Matrix states verified
- [ ] All Semantic Contract elements present
- [ ] Zero console errors
- [ ] Responsive layout rules pass
- [ ] No horizontal overflow on mobile
- [ ] Loading states render correctly (with latency)
- [ ] Error states display correctly

---

### E - Evaluate (The Human Gateway)

**Purpose**: Present verified, interactive artifact for human evaluation.

**"The Human Gateway."**

#### The Deployment Artifact

Build the demo for production:

```bash
# Produces a fully functional backend-less demo
NEXT_PUBLIC_USE_MOCKS=true npm run build

# Deploy to preview URL
gh pages deploy ./out
# OR
vercel --prod
```

#### The Review Handover

Generate a structured review request:

```markdown
## Change Log
- Implemented Transaction History feature

## Verification Report
- Passed 14 Playwright checks
- Mobile viewport verified (375px)
- Network error simulation tested
- Loading state verified with 800ms latency

## Demo URL
https://project-demo.vercel.app/transaction-history

## Testing Instructions
1. Open the link
2. Use toggle in top-right to switch to "Mobile View"
3. Click "Simulate Error" to see error state handling
4. Observe loading skeleton on initial load

## State Matrix Coverage
| State | Verified |
|-------|----------|
| Initial | ✅ |
| Success | ✅ |
| Empty | ✅ |
| Error | ✅ |
| Saving | ✅ |
```

**Key Principle**: The reviewer evaluates the EXACT artifact the agent verified—eliminating "works on my machine" syndrome.

---

### R - Review (Continuous Improvement)

**Purpose**: Capture learnings, document decisions, and improve the protocol.

**Process:**
1. Compare implementation to original specification
2. Assess Playwright verification effectiveness
3. Document MSW handler improvements
4. Capture accessibility insights
5. Update architecture documentation

**Output**: `codev/reviews/####-feature-name.md`

---

## Configuration

### MCP Server Configuration

```json
// .claude/mcp.json
{
  "mcpServers": {
    "playwright": {
      "command": "npx",
      "args": ["-y", "@playwright/mcp-server"],
      "env": {
        "PLAYWRIGHT_BROWSERS_PATH": "0"
      }
    }
  }
}
```

### TypeScript Configuration (Strictness for AI)

```json
// tsconfig.json
{
  "compilerOptions": {
    "strict": true,
    "noImplicitAny": true,
    "strictNullChecks": true,
    "noUncheckedIndexedAccess": true
  }
}
```

### Project Configuration

```json
// codev/config.json
{
  "project": {
    "name": "WebAppDemo",
    "protocol": "spider-ux"
  },
  "spider-ux": {
    "phases": ["Specify", "Plan", "Implement", "Defend", "Evaluate", "Review"],
    "tools": ["playwright-mcp", "msw"],
    "breakpoints": {
      "mobile": 375,
      "tablet": 768,
      "desktop": 1024
    }
  }
}
```

---

## Best Practices

### Reducing Token Usage

The Accessibility Tree can be large. Use **Targeted Discovery**:

```javascript
// Instead of full tree
await page.accessibility.snapshot();

// Target specific subtree
await page.locator('[data-testid="transaction-table"]').accessibility.snapshot();
```

### Handling Layout Flakiness

Use tolerance thresholds for layout assertions:

```javascript
// Fuzzy assertion instead of pixel-perfect
await expect(element.boundingBox()).toBeNear(expectedBox, { tolerance: 5 });
```

### Preventing Hallucinated Widgets

Always verify visibility in Defense phase:

```javascript
// This checks computed styles, not just DOM presence
await expect(page.getByRole('button', { name: 'Save' })).toBeVisible();
```

### Smart Mock Patterns

```typescript
// Parameterized scenarios
http.get('/api/data', ({ request }) => {
  const url = new URL(request.url);
  const scenario = url.searchParams.get('scenario');

  switch (scenario) {
    case 'empty': return HttpResponse.json([]);
    case 'error': return new HttpResponse(null, { status: 500 });
    default: return HttpResponse.json(mockData);
  }
});
```

---

## Common Pitfalls

| Pitfall | Solution |
|---------|----------|
| Agent can't "see" UI | Use Accessibility Tree via Playwright MCP |
| Tests pass but UI broken | Always include `toBeVisible()` assertions |
| Data hallucination | Define Zod schemas BEFORE implementation |
| Flaky responsive tests | Use container queries, tolerance thresholds |
| Untestable UI | Enforce semantic contracts (ARIA roles) |
| Manual verification dependency | Mandatory Defense Gate before human review |

---

## Templates

Templates for each phase are in `templates/`:
- `spec.md` - SPIDER-UX specification template
- `plan.md` - SPIDER-UX planning template
- `review.md` - SPIDER-UX review template

---

## Protocol Evolution

This protocol evolves based on learnings:
1. Fork the protocol directory
2. Modify templates and processes
3. Document changes in `protocol-changes.md`
4. Share improvements back to the community

---

## References

- [Playwright MCP Server](https://github.com/microsoft/playwright-mcp)
- [Mock Service Worker (MSW)](https://github.com/mswjs/msw)
- [Atomic Design Methodology](https://bradfrost.com/blog/post/atomic-web-design/)
- [WCAG Accessibility Guidelines](https://www.w3.org/WAI/standards-guidelines/wcag/)
