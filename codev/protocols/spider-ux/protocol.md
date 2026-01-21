# SPIDER-UX Protocol
**A Rigorous Protocol for Agentic Backend-Less Web Engineering**

> **Quick Reference**: See `codev/resources/workflow-reference.md` for stage diagrams and common commands.

---

## 🧠 UI/UX Design Principles (MANDATORY READING)

**Before beginning ANY design work, you MUST internalize these principles. They are not suggestions—they are constraints that govern every design decision.**

> **The Meta-Principle**: *Respect your user's time, attention, and intelligence—then design as if they have none of these to spare.*

Users are distracted, impatient, and not reading your interface—they're scanning it while doing three other things. Every element must earn its place.

### Core Laws (Memorize These)

| Law | Principle | Design Implication |
|-----|-----------|-------------------|
| **Don't Make Me Think** | Every element should be self-evident | If users pause to figure something out, you've failed |
| **Jakob's Law** | Users expect your site to work like others they know | Novelty is the enemy of usability—follow conventions |
| **Fitts's Law** | Target acquisition depends on size and distance | Big buttons, placed where users naturally look/move |
| **Hick's Law** | More choices = slower decisions | Fewer options, progressive disclosure |
| **Miller's Law** | Working memory holds ~7±2 items | Chunk information into digestible groups |
| **Aesthetic-Usability Effect** | Beautiful = perceived as more usable | Polish matters—users forgive flaws in attractive designs |

### Foundational Principles

| Principle | Requirement |
|-----------|-------------|
| **Visibility of System Status** | Always inform users what's happening (spinners, progress, confirmations) |
| **Match System to Real World** | Use familiar language, icons, metaphors (trash can, floppy disk) |
| **User Control & Freedom** | Provide clear exits—undo, cancel, back buttons |
| **Consistency & Standards** | Internal consistency + platform conventions |
| **Error Prevention > Error Messages** | Disable invalid options, smart defaults, confirm destructive actions |
| **Recognition Over Recall** | Show options, don't require memorization (dropdowns, autocomplete) |

### Mental Models

| Concept | Application |
|---------|-------------|
| **Gulf of Execution/Evaluation** | Bridge both: help users know HOW to act and WHAT happened |
| **Affordances & Signifiers** | Objects must LOOK like what they DO (buttons look clickable) |
| **Principle of Least Surprise** | Systems behave as expected—warn about unexpected behavior |
| **Progressive Disclosure** | Show only what's needed; hide advanced options |
| **80/20 Rule** | 80% of users use 20% of features—optimize for common paths |

### Psychological Principles

| Principle | Design Technique |
|-----------|-----------------|
| **Peak-End Rule** | Smooth endings redeem bumpy flows—nail the confirmation/offboarding |
| **Serial Position Effect** | Users remember first/last items—put important nav at top and bottom |
| **Loss Aversion** | "Don't lose your progress" > "Save your progress" |
| **Social Proof** | Show activity, user counts, testimonials |
| **Zeigarnik Effect** | Incomplete tasks occupy mental space—use progress bars, checklists |

### Process & Methodology

| Framework | Application |
|-----------|-------------|
| **User-Centered Design (UCD)** | Decisions driven by user research, not assumptions. Iterate: Research → Design → Prototype → Test → Refine |
| **Jobs To Be Done (JTBD)** | Users "hire" your interface to accomplish a job. Ask: "What job is the user hiring this to do?" |
| **Double Diamond** | Discover (diverge) → Define (converge) → Develop (diverge) → Deliver (converge) |
| **Usability Testing** | Watch real users attempt real tasks. 5 users uncover ~85% of problems. You will be humbled. |

### Practical Heuristics

| Heuristic | Rule |
|-----------|------|
| **F-Pattern/Z-Pattern** | Place critical content along natural scan paths |
| **White Space** | Breathing room improves comprehension—don't cram |
| **3-Click Rule** | Each click must feel productive and confident |
| **Mobile-First** | Constraints force clarity—design for small screens first |

### Quick Reference Checklist

Before starting any design, verify you can answer YES to all:

- [ ] **Self-Evident?** Can users understand this without thinking?
- [ ] **Conventional?** Does this match user expectations from other sites?
- [ ] **Accessible?** Are touch targets large enough? Is content chunked?
- [ ] **Progressive?** Is complexity revealed only when needed?
- [ ] **Forgiving?** Can users recover from mistakes easily?
- [ ] **Informative?** Does the system always show its status?
- [ ] **Consistent?** Same actions produce same results throughout?

### Principles Integration Through the Protocol

```
┌─────────────────────────────────────────────────────────────────────────┐
│                    PRINCIPLES WORKFLOW                                   │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                          │
│  ┌─────────────┐                                                         │
│  │  MEMORIZE   │  Before ANY design work:                                │
│  │  PRINCIPLES │  • Read the principles above                            │
│  │             │  • Internalize the Quick Reference Checklist            │
│  └──────┬──────┘                                                         │
│         │                                                                │
│         ▼                                                                │
│  ┌─────────────┐                                                         │
│  │  SPECIFY    │  Run Principles Alignment Check                         │
│  │             │  • Does spec violate any principle?                     │
│  │             │  • Are all states defined?                              │
│  └──────┬──────┘                                                         │
│         │                                                                │
│         ▼                                                                │
│  ┌─────────────┐                                                         │
│  │  PLAN       │  Principles-Driven Component Design                     │
│  │             │  • Apply principles to each component decision          │
│  │             │  • Document principle-based rationale                   │
│  └──────┬──────┘                                                         │
│         │                                                                │
│         ▼                                                                │
│  ┌─────────────┐                                                         │
│  │  IMPLEMENT  │  Implementation Principles Checklist                    │
│  │             │  • Verify during every decision                         │
│  │             │  • Forms, Navigation, Interactions                      │
│  └──────┬──────┘                                                         │
│         │                                                                │
│         ▼                                                                │
│  ┌─────────────┐                                                         │
│  │  DEFEND     │  🚨 MANDATORY: Principles Verification Gate             │
│  │             │  • Run automated Playwright checks                      │
│  │             │  • ALL 12 principles must PASS                          │
│  │             │  • If ANY fail → return to Implement                    │
│  └──────┬──────┘                                                         │
│         │ (only if ALL pass)                                             │
│         ▼                                                                │
│  ┌─────────────┐                                                         │
│  │  EVALUATE   │  Principles Compliance Report                           │
│  │             │  • Include in Review Handover                           │
│  │             │  • Evidence for each principle                          │
│  └──────┬──────┘                                                         │
│         │                                                                │
│         ▼                                                                │
│  ┌─────────────┐                                                         │
│  │  REVIEW     │  Principles Reflection                                  │
│  │             │  • What worked? What violations were caught?            │
│  │             │  • Update lessons for future work                       │
│  └─────────────┘                                                         │
│                                                                          │
└─────────────────────────────────────────────────────────────────────────┘
```

**The Defense Gate is NON-NEGOTIABLE**: You cannot declare "done" until all 12 principles pass automated verification.

---

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

#### 5. Principles Alignment Check

**MANDATORY**: Before finalizing the spec, verify alignment with UI/UX principles:

| Principle Category | Verification Question | ✓ |
|--------------------|----------------------|---|
| **Don't Make Me Think** | Is every element self-evident? No cognitive friction? | |
| **Jakob's Law** | Does this follow conventions users already know? | |
| **Fitts's Law** | Are primary actions large and well-positioned? | |
| **Hick's Law** | Are choices minimized? Is complexity progressively disclosed? | |
| **System Status** | Does the spec define feedback for every state transition? | |
| **Error Prevention** | Are destructive actions protected? Invalid states prevented? | |
| **Recognition > Recall** | Are options visible rather than requiring memorization? | |
| **Consistency** | Do similar elements behave identically throughout? | |

**If any check fails, revise the spec before proceeding.**

**Workflow:**
1. Analyze requirements and generate spec document
2. **Run Principles Alignment Check** (above table)
3. **COMMIT**: "Initial specification draft"
4. Multi-agent review (GPT-5 and Gemini Pro)
5. Update spec with feedback
6. **COMMIT**: "Specification with multi-agent review"
7. Human reviews and provides comments
8. Iterate until approved

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

#### Principles-Driven Component Design

When decomposing components, apply these principle-based questions:

| Component Decision | Governing Principle | Question to Ask |
|-------------------|---------------------|-----------------|
| Button placement | Fitts's Law | Is this in a thumb-friendly zone? Large enough to tap? |
| Number of options | Hick's Law | Can we reduce choices? Should we use progressive disclosure? |
| Form layout | Miller's Law | Is this chunked into ≤7 logical groups? |
| Navigation structure | Serial Position Effect | Are key items at start/end of lists? |
| Error handling | Error Prevention | Can we prevent this error instead of just handling it? |
| Empty states | Visibility of System Status | Does the empty state guide users on what to do next? |
| Loading states | Peak-End Rule | Is the loading experience smooth? Does completion feel satisfying? |

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

**Semantic Checklist:**
- [ ] All buttons use `<button>` or have `role="button"`
- [ ] All inputs have associated labels
- [ ] All interactive elements have `data-testid`
- [ ] ARIA attributes present where needed

#### Implementation Principles Checklist

**During every implementation decision, verify:**

| Principle | Implementation Check |
|-----------|---------------------|
| **Affordances** | Does this button LOOK clickable? Does this link look like a link? |
| **Signifiers** | Are visual cues clear? (hover states, focus rings, cursor changes) |
| **White Space** | Is there breathing room? Or is this cramped? |
| **Mobile-First** | Does this work on 375px width FIRST? |
| **Touch Targets** | Are tap targets at least 44x44px on mobile? |
| **Least Surprise** | Does this behave as users expect? Any surprising behaviors to warn about? |
| **Recognition** | Are options visible? (dropdowns show values, not just "Select...") |
| **Consistency** | Same color/size/position for same type of element? |

**If implementing a FORM:**
- [ ] Smart defaults reduce typing
- [ ] Invalid options are disabled, not error-messaged after
- [ ] Labels are visible (not just placeholders)
- [ ] Error messages appear inline, near the problem

**If implementing NAVIGATION:**
- [ ] Current location is always visible
- [ ] Back/cancel/undo is always available
- [ ] Important items at top AND bottom (Serial Position Effect)

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

#### 🚨 UI/UX Principles Verification (MANDATORY GATE)

**You CANNOT proceed to Evaluate until ALL principle checks pass.**

Use Playwright MCP to verify each principle holds in the live application:

##### Cognitive Load Verification
```javascript
// Verify: Don't Make Me Think
// Check: No unexplained icons, no ambiguous labels
const ambiguousElements = await page.locator('[aria-label*="..."], [title*="click here"]').count();
expect(ambiguousElements).toBe(0); // No vague labels

// Verify: Hick's Law (choice overload)
// Check: No more than 7±2 visible options in any menu/list at once
const menuItems = await page.locator('[role="menuitem"]').count();
expect(menuItems).toBeLessThanOrEqual(9);
```

##### Interaction Verification
```javascript
// Verify: Fitts's Law (touch targets)
// Check: All clickable elements are at least 44x44px
const buttons = await page.locator('button, [role="button"], a').all();
for (const button of buttons) {
  const box = await button.boundingBox();
  expect(box.width).toBeGreaterThanOrEqual(44);
  expect(box.height).toBeGreaterThanOrEqual(44);
}

// Verify: Affordances & Signifiers
// Check: Interactive elements have hover/focus states
await button.hover();
const cursorStyle = await button.evaluate(el => getComputedStyle(el).cursor);
expect(cursorStyle).toBe('pointer');
```

##### System Feedback Verification
```javascript
// Verify: Visibility of System Status
// Check: Loading states actually appear (use MSW delay)
await page.goto('/data-page');
await expect(page.getByRole('progressbar')).toBeVisible(); // or skeleton

// Verify: After action completes, confirmation is shown
await page.getByRole('button', { name: 'Save' }).click();
await expect(page.getByRole('status')).toContainText(/saved|success/i);
```

##### Error Prevention Verification
```javascript
// Verify: Destructive actions require confirmation
await page.getByRole('button', { name: 'Delete' }).click();
await expect(page.getByRole('alertdialog')).toBeVisible();
await expect(page.getByRole('alertdialog')).toContainText(/confirm|are you sure/i);

// Verify: Invalid inputs are prevented, not just error-messaged
const submitButton = page.getByRole('button', { name: 'Submit' });
await expect(submitButton).toBeDisabled(); // When form is invalid
```

##### Consistency Verification
```javascript
// Verify: Same elements behave the same way
// Check: All primary buttons have same color/size
const primaryButtons = await page.locator('.btn-primary, [data-variant="primary"]').all();
const firstStyle = await primaryButtons[0].evaluate(el => ({
  bg: getComputedStyle(el).backgroundColor,
  fontSize: getComputedStyle(el).fontSize
}));
for (const btn of primaryButtons) {
  const style = await btn.evaluate(el => ({
    bg: getComputedStyle(el).backgroundColor,
    fontSize: getComputedStyle(el).fontSize
  }));
  expect(style).toEqual(firstStyle);
}
```

##### Navigation Verification
```javascript
// Verify: User Control & Freedom
// Check: Back/cancel is always available
await expect(page.getByRole('button', { name: /back|cancel|close/i })).toBeVisible();

// Verify: Current location is clear
const currentNavItem = page.locator('[aria-current="page"], .active');
await expect(currentNavItem).toBeVisible();
```

##### Principles Verification Checklist

| Principle | Verification Method | Pass? |
|-----------|---------------------|-------|
| Don't Make Me Think | No ambiguous labels/icons | [ ] |
| Jakob's Law | Follows platform conventions | [ ] |
| Fitts's Law | Touch targets ≥44px | [ ] |
| Hick's Law | ≤9 options per menu | [ ] |
| Miller's Law | Info chunked into ≤7 groups | [ ] |
| System Status | Loading/success/error states visible | [ ] |
| User Control | Undo/back/cancel available | [ ] |
| Error Prevention | Destructive actions confirmed | [ ] |
| Recognition > Recall | Options visible, not hidden | [ ] |
| Consistency | Same elements = same behavior | [ ] |
| White Space | Elements not cramped | [ ] |
| Mobile-First | Works at 375px width | [ ] |

**If ANY check fails:**
1. Document the specific violation
2. Return to Implement phase
3. Fix the violation
4. Re-run Defense

**ONLY proceed to Evaluate when ALL checks pass.**

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

Generate a structured review request that **includes Principles Compliance**:

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

## UI/UX Principles Compliance Report

### Core Laws Verification
| Law | Status | Evidence |
|-----|--------|----------|
| Don't Make Me Think | ✅ | All labels self-explanatory, no ambiguous icons |
| Jakob's Law | ✅ | Standard table pattern, familiar sort controls |
| Fitts's Law | ✅ | All buttons ≥44px, primary CTA in thumb zone |
| Hick's Law | ✅ | 5 filter options (within 7±2), progressive disclosure for advanced |
| Miller's Law | ✅ | Data chunked into 3 logical groups |

### Interaction Principles
| Principle | Status | Evidence |
|-----------|--------|----------|
| System Status | ✅ | Skeleton loader during fetch, toast on save |
| Error Prevention | ✅ | Delete requires confirmation dialog |
| User Control | ✅ | Cancel button on all forms, undo for delete |
| Recognition > Recall | ✅ | Dropdown shows current selection, recent items visible |

### Visual Principles
| Principle | Status | Evidence |
|-----------|--------|----------|
| Consistency | ✅ | All primary buttons same color/size/font |
| White Space | ✅ | 16px minimum gaps, no cramped sections |
| Affordances | ✅ | Buttons have hover states, links are underlined |

### Accessibility Baseline
| Check | Status |
|-------|--------|
| Touch targets ≥44px | ✅ |
| Mobile-first (375px) | ✅ |
| Color contrast ratio ≥4.5:1 | ✅ |
| Focus indicators visible | ✅ |
```

**Key Principle**: The reviewer evaluates the EXACT artifact the agent verified—eliminating "works on my machine" syndrome.

**IMPORTANT**: If any principle shows ❌, the agent MUST return to Implement → Defend cycle and fix before presenting to human reviewer.

---

### R - Review (Continuous Improvement)

**Purpose**: Capture learnings, document decisions, and improve the protocol.

**Process:**
1. Compare implementation to original specification
2. Assess Playwright verification effectiveness
3. Document MSW handler improvements
4. Capture accessibility insights
5. Update architecture documentation
6. **Reflect on UI/UX Principles adherence** (see below)

#### Principles Reflection (MANDATORY)

Document which principles were most relevant and any violations discovered during development:

```markdown
## UI/UX Principles Reflection

### Principles Most Critical to This Feature
1. **Hick's Law**: Transaction filters could easily become overwhelming
   - Decision: Capped visible filters at 5, used progressive disclosure
   - Outcome: Filter usage increased by 40% in user testing

2. **Peak-End Rule**: Transaction confirmation is the "end" of the flow
   - Decision: Added satisfying animation + clear summary
   - Outcome: Reduced support tickets about "did it work?"

### Principle Violations Caught in Defense
| Principle | Violation | How Fixed |
|-----------|-----------|-----------|
| Fitts's Law | Mobile delete button was 32px | Increased to 48px with padding |
| System Status | No feedback during bulk operations | Added progress bar + count |
| Error Prevention | Batch delete had no confirmation | Added confirmation modal |

### Principles to Emphasize in Future Work
- This feature revealed that **Loss Aversion** is powerful for undo messaging
- **Zeigarnik Effect** worked well for multi-step forms—keep using progress indicators

### Principle Conflicts Encountered
- **Hick's Law vs Feature Requests**: Users wanted 12 filter options
  - Resolution: Used progressive disclosure (5 common + "More Filters")
  - Lesson: Defend Hick's Law with data, offer progressive disclosure as compromise
```

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

### Principle-Related Pitfalls

| Pitfall | Principle Violated | Solution |
|---------|-------------------|----------|
| "Clever" unconventional UI | Jakob's Law | Follow conventions; novelty ≠ usability |
| Too many options shown at once | Hick's Law | Progressive disclosure, max 7±2 items |
| Tiny touch targets | Fitts's Law | Minimum 44x44px for all interactive elements |
| Silent state changes | System Status | Always show loading, success, error feedback |
| No undo for actions | User Control | Add cancel/undo for all reversible actions |
| Memorization required | Recognition > Recall | Show options; use autocomplete, recents |
| Inconsistent button styles | Consistency | Use design tokens; same action = same style |
| Cramped layouts | White Space | Minimum 16px gaps; resist feature stuffing |
| Desktop-first design | Mobile-First | Design at 375px first, scale up |
| Confusing icons without labels | Don't Make Me Think | Labels > icons; or icon + tooltip |
| Bland confirmation screens | Peak-End Rule | Make endings satisfying; celebrate completion |

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

### Technical References
- [Playwright MCP Server](https://github.com/microsoft/playwright-mcp)
- [Mock Service Worker (MSW)](https://github.com/mswjs/msw)
- [Atomic Design Methodology](https://bradfrost.com/blog/post/atomic-web-design/)
- [WCAG Accessibility Guidelines](https://www.w3.org/WAI/standards-guidelines/wcag/)

### UI/UX Principles References
- **Don't Make Me Think** - Steve Krug's seminal book on web usability
- **The Design of Everyday Things** - Don Norman (Affordances, Gulf of Execution/Evaluation)
- **Laws of UX** - Jon Yablonski ([lawsofux.com](https://lawsofux.com))
- **Nielsen's 10 Usability Heuristics** - Jakob Nielsen, Nielsen Norman Group
- **Fitts's Law** - Paul Fitts, 1954 (target acquisition time)
- **Hick's Law** - William Hick, 1952 (choice-reaction time)
- **Miller's Law** - George Miller, 1956 ("The Magical Number Seven")
- **Peak-End Rule** - Daniel Kahneman (memory and experience)
- **Zeigarnik Effect** - Bluma Zeigarnik (incomplete tasks)

### Process & Methodology References
- **User-Centered Design** - ISO 9241-210, Don Norman's advocacy
- **Jobs To Be Done** - Clayton Christensen, Tony Ulwick (Outcome-Driven Innovation)
- **Double Diamond** - British Design Council, 2005
- **Usability Testing** - Jakob Nielsen ("5 users find 85% of problems")

---

## Appendix: Quick Principles Reference Card

Print this and keep visible during development:

```
┌─────────────────────────────────────────────────────────┐
│           SPIDER-UX PRINCIPLES QUICK CARD               │
├─────────────────────────────────────────────────────────┤
│                                                         │
│  🧠 COGNITIVE                                           │
│     • Self-evident (no thinking required)               │
│     • Familiar (Jakob's Law - match expectations)       │
│     • Chunked (7±2 items max - Miller's Law)            │
│     • Progressive (reveal complexity gradually)         │
│                                                         │
│  👆 INTERACTION                                         │
│     • Big targets (44px min - Fitts's Law)              │
│     • Few choices (minimize options - Hick's Law)       │
│     • Looks like what it does (affordances)             │
│     • No surprises (Least Surprise)                     │
│                                                         │
│  💬 FEEDBACK                                            │
│     • Always show status (loading, saving, done)        │
│     • Prevent errors (disable invalid, confirm delete)  │
│     • Enable recovery (undo, cancel, back)              │
│     • End well (Peak-End Rule)                          │
│                                                         │
│  👁️ VISUAL                                              │
│     • Consistent (same = same)                          │
│     • Breathe (white space is good)                     │
│     • Mobile first (375px → up)                         │
│     • Scan-friendly (F/Z patterns)                      │
│                                                         │
│  ❌ NEVER                                               │
│     • Require memorization                              │
│     • Surprise users                                    │
│     • Block without feedback                            │
│     • Ignore conventions                                │
│                                                         │
└─────────────────────────────────────────────────────────┘
```
