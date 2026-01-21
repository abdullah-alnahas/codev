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

---

## Color, Theme & Visual Design Principles

> **Color is communication, not decoration. Every hue should earn its place by guiding attention, conveying meaning, or reinforcing hierarchy.**

This section provides systematic approaches to color and visual design—treating aesthetics as engineering decisions, not guesswork.

### Foundational Color Theory

#### The 60-30-10 Rule
A timeless formula from interior design that works beautifully in UI:
- **60%** — Dominant/neutral color (backgrounds, large surfaces)
- **30%** — Secondary color (cards, containers, supporting elements)
- **10%** — Accent color (CTAs, highlights, interactive elements)

This creates visual hierarchy without chaos. Your accent color does the heavy lifting despite occupying the least space.

#### Start with One Color, Then Expand
Don't pick a palette—pick *one* brand/accent color and derive everything else from it. Your neutral grays can be tinted with that hue (warm grays from orange, cool grays from blue) to create subtle cohesion.

#### HSB Over Hex
Think in **Hue, Saturation, Brightness** rather than hex codes:
- Keep hue constant, vary saturation/brightness → harmonious shades
- Reduce saturation for backgrounds, increase for accents
- Dark mode ≠ inverting colors; it's reducing brightness while managing saturation

#### Never Use Pure Black or Pure White
`#000000` and `#FFFFFF` are harsh and rarely exist in nature. Use off-blacks (`#1a1a1a`, `#121212`) and off-whites (`#f8f8f8`, `#fafafa`) for a softer, more sophisticated feel.

### Color Psychology (Context-Dependent)

These associations are culturally influenced—useful starting points, not universal laws:

| Color | Common Associations | Typical UI Usage |
|-------|---------------------|------------------|
| **Blue** | Trust, calm, professionalism | Finance, healthcare, enterprise |
| **Green** | Growth, success, nature | Confirmation states, eco/health |
| **Red** | Urgency, error, passion | Alerts, destructive actions |
| **Orange** | Energy, warmth, friendliness | CTAs, playful brands |
| **Yellow** | Optimism, caution, attention | Warnings, highlights (sparingly) |
| **Purple** | Creativity, luxury, wisdom | Premium products, creative tools |
| **Pink** | Playfulness, care, modernity | Consumer apps, younger demographics |
| **Neutral grays** | Sophistication, balance | Enterprise, minimalist design |

**Critical caveat:** Color meaning varies dramatically across cultures. Red means luck in China, mourning in South Africa. Research your audience.

### Accessibility: Non-Negotiable Standards

#### WCAG Contrast Ratios
- **4.5:1** minimum for normal text
- **3:1** minimum for large text (18px+ or 14px bold)
- **3:1** for UI components and graphical elements

Use tools like WebAIM's contrast checker or Stark plugin.

#### Never Rely on Color Alone
~8% of men have color vision deficiency. Always pair color with:
- Icons (✓ checkmark + green, ✗ X + red)
- Text labels ("Error: Invalid email")
- Patterns or shapes (charts especially)

#### Test in Grayscale
Desaturate your design. If hierarchy and meaning disappear, you're over-relying on color.

#### Consider Color Blindness Types
- **Deuteranopia/Protanopia** (red-green) — most common
- **Tritanopia** (blue-yellow) — rare

Avoid red/green as the *only* differentiator. Blue/orange is a safer contrasting pair.

### Building a Color System

#### Semantic Color Tokens
Don't just name colors by their hue. Create semantic layers:
```
├── Primitive: blue-500, gray-100
├── Semantic: color-primary, color-error, color-success
└── Component: button-background, input-border-focus
```

#### Create a Sufficient Scale
For each color, generate 9-11 shades (50, 100, 200... 900):
- Light shades for backgrounds and hover states
- Mid shades for borders and secondary text
- Dark shades for primary text and emphasis

#### Define Interactive States
Every interactive element needs colors for:
- **Default**
- **Hover** (slightly darker/lighter)
- **Active/Pressed** (more pronounced shift)
- **Focus** (visible ring for keyboard users)
- **Disabled** (reduced opacity or grayed out)

### Light Mode vs. Dark Mode

#### Dark Mode Is Not Inversion
- Use dark grays (`#121212`, `#1e1e1e`) not pure black
- *Reduce* saturation of colors (vibrant hues vibrate against dark backgrounds)
- Elevate surfaces with lighter shades (not shadows—"light rises")

#### Material Design's Elevation System
In dark mode, higher surfaces = lighter colors:
```
Background: #121212
Card (1dp): #1e1e1e
Modal (8dp): #2d2d2d
```

#### Respect System Preferences
Use `prefers-color-scheme` media query to default to user's OS setting.

### Visual Hierarchy Through Color

#### Squint Test
Blur your eyes. The most important elements should still stand out. If everything looks equally prominent, hierarchy problem.

#### Saturation as Emphasis
The most saturated element draws the eye first. Use vibrant colors for primary CTAs and muted tones for everything else.

#### Temperature Creates Depth
- **Warm colors** (red, orange, yellow) advance—feel closer
- **Cool colors** (blue, green, purple) recede—feel further

Use warm accents on cool backgrounds to make elements "pop."

#### Limit Your Palette Ruthlessly
- 1 primary accent
- 1-2 secondary/supporting colors
- 1 neutral scale (gray or tinted gray)
- Semantic colors (error, warning, success, info)

### Typography & Color Interaction

#### Text Color Hierarchy
- **Primary text**: Highest contrast, headings and body
- **Secondary text**: Medium contrast, captions and metadata
- **Tertiary/disabled**: Low contrast, placeholders
- **Inverse**: For text on colored backgrounds

#### Colored Text Is Hard
Reserve color for links, labels, and status indicators—not body text.

### Color Harmony Types (Detailed)

Understanding color relationships is essential. Each harmony type creates a different feeling:

#### Monochromatic
*One hue, multiple saturations and values*

| Aspect | Details |
|--------|---------|
| **Feeling** | Cohesive, calm, sophisticated, minimal |
| **UI use case** | Enterprise software, content-heavy interfaces |
| **Strength** | Almost impossible to clash; inherently unified |
| **Risk** | Can feel flat without strong value contrast |

**Pro tip**: Push value range wider—very dark to very light—for visual interest.

#### Analogous
*2-4 colors adjacent on the wheel (within ~60°)*

| Aspect | Details |
|--------|---------|
| **Feeling** | Natural, serene, comfortable |
| **UI use case** | Brands wanting warmth or organic feel |
| **Strength** | Naturally pleasing; low clash risk |
| **Risk** | Can lack contrast; needs clear dominant |

**Pro tip**: 60% dominant, 30% support, 10% accent. Ensure value contrast.

#### Complementary
*Two colors directly opposite (180° apart)*

| Aspect | Details |
|--------|---------|
| **Feeling** | High energy, vibrant, dynamic tension |
| **UI use case** | CTAs that must pop; attention-grabbing |
| **Strength** | Maximum contrast; eye-catching |
| **Risk** | Garish if equal saturation; red-green accessibility |

**Pro tip**: Dominant-subordinate balance. One muted/large, other vibrant/small.

#### Split-Complementary
*Base + two colors adjacent to complement*

| Aspect | Details |
|--------|---------|
| **Feeling** | Vibrant but more nuanced |
| **UI use case** | Energy with sophistication |
| **Strength** | High contrast, less tension than pure complement |
| **Risk** | Three colors need careful balance |

**Pro tip**: Base color dominant, two splits as accents.

#### Triadic
*Three colors equally spaced (120° apart)*

| Aspect | Details |
|--------|---------|
| **Feeling** | Bold, playful, balanced tension |
| **UI use case** | Children's products, creative tools |
| **Strength** | Visually rich; balanced energy |
| **Risk** | Easily overwhelming; can feel chaotic |

**Pro tip**: Heavy desaturation of at least two. One vibrant, two muted.

#### Tetradic (Rectangle)
*Four colors forming a rectangle (two complementary pairs)*

| Aspect | Details |
|--------|---------|
| **Feeling** | Rich, complex, full-spectrum |
| **UI use case** | Complex dashboards; data visualization |
| **Strength** | Maximum variety with structure |
| **Risk** | Very hard to balance; easily chaotic |

**Pro tip**: One dominant, one secondary, two accents. Unify saturation/value.

#### Square
*Four colors equally spaced (90° apart)*

| Aspect | Details |
|--------|---------|
| **Feeling** | Balanced, dynamic, full |
| **UI use case** | Data visualization with distinct categories |
| **Strength** | Even warm/cool distribution |
| **Risk** | Requires careful restraint |

### Quick Reference: Choosing Harmony

| If you want... | Use... |
|----------------|--------|
| Calm, sophisticated | Monochromatic |
| Natural, comfortable | Analogous |
| Energetic, attention-grabbing | Complementary |
| Vibrant but controlled | Split-complementary |
| Bold, playful | Triadic |
| Complex, multi-category | Tetradic or Square |

### Advanced Harmony Principles

Beyond the color wheel:

#### Saturation Harmony
Colors with **matching saturation** feel related even if hues differ:
- All pastels → harmonious
- All jewel tones → harmonious
- All muted/dusty → harmonious

**UI application**: Charts/tags with many colors—keep same saturation/brightness.

#### Value/Brightness Harmony
Colors at **same brightness** feel unified:
- All dark jewel tones → harmonious
- All light pastels → harmonious

**UI application**: Dashboard cards in different colors—same lightness.

#### Temperature Harmony
Warm (red, orange, yellow) vs cool (blue, green, purple):
- Commit to one temperature, accent with other
- Warm foreground + cool background creates depth

#### The "Shared Undertone" Technique
Add small amount of one color to all others—creates invisible cohesion.

```
Base: Blue, Green, Gray
Add 5% yellow to each → warmer and unified
```

#### The "Anchor + Vary" Method

| Anchor | Vary | Result |
|--------|------|--------|
| Hue | Saturation + value | Monochromatic |
| Saturation | Hue + value | Consistent intensity |
| Value | Hue + saturation | Consistent lightness |

### Practical Palette Formulas

#### The Safe UI Palette Formula

| Role | Approach |
|------|----------|
| Neutrals | Monochromatic gray, tinted with brand |
| Primary accent | One saturated brand color |
| Secondary | Analogous or split-complement |
| Semantic | Red/green/yellow adjusted to palette saturation |

#### Natural Palette Extraction
Extract from nature photos, fine art, film stills. Colors feel "right" because they coexist in reality.

#### The "One Weird Color" Principle
Mostly neutral/analogous + one unexpected hue = cohesion + interest + focus.

```
Grays + soft blues + unexpected coral accent
Earth tones + electric purple CTA
```

### Color Testing Methods

| Test | Purpose |
|------|---------|
| **Blur Test** | Squint—important elements should still stand out |
| **Grayscale Test** | Desaturate—hierarchy should survive |
| **Isolation Test** | Two colors side-by-side—should feel related |
| **Album Cover Test** | Mock as poster—intentional or ransom note? |

### Color Verification Checklist

Before proceeding from **Implement** to **Defend**, verify:

- [ ] **Contrast**: All text meets WCAG AA (4.5:1 body, 3:1 large text)
- [ ] **Hierarchy**: Squint test passes—CTA visible, structure clear
- [ ] **Semantics**: Color meaning paired with icons/text (not color alone)
- [ ] **Consistency**: Same semantic color throughout (success = green-600 everywhere)
- [ ] **Dark mode**: Tested in both modes (if applicable)
- [ ] **Color blindness**: Simulated with Deuteranopia filter
- [ ] **No pure extremes**: No #000000 or #FFFFFF
- [ ] **60-30-10**: Color proportions feel balanced
- [ ] **Grayscale test**: Hierarchy survives desaturation
- [ ] **Value contrast**: Colors differ in lightness, not just hue
- [ ] **Saturation hierarchy**: Most elements muted, few vibrant

### Common Color Mistakes

| Mistake | Solution |
|---------|----------|
| Equal saturation everywhere | Create saturation hierarchy |
| Random hue selection | Commit to a harmony type |
| Ignoring value contrast | Ensure colors differ in value, not just hue |
| Harmony without hierarchy | Harmony creates family; hierarchy decides who speaks |
| Pure black/white | Use off-black and off-white |
| Vibrating complementary colors | Separate or desaturate one |

### Recommended Color Tools

| Purpose | Tools |
|---------|-------|
| Palette generation | Coolors, Realtime Colors, Huemint, Leonardo |
| Contrast checking | WebAIM, Stark, Polypane |
| Color blindness simulation | Sim Daltonism, Chrome DevTools |
| Design token management | Figma variables, Style Dictionary |
| Inspiration | Dribbble, Mobbin, Refero |

### Quick Recipe: Building a Palette from Scratch

1. **Choose a primary accent** based on brand/emotion
2. **Generate a gray scale** (consider tinting with your accent)
3. **Define semantic colors** (success=green, error=red, warning=yellow, info=blue)
4. **Create shades** (50-900) for each color
5. **Map to semantic tokens** (color-background, color-text-primary)
6. **Define interactive states** for all clickable elements
7. **Build a dark mode variant** (desaturate, don't invert)
8. **Test contrast ratios** for all text/background combinations
9. **Test with color blindness simulators**
10. **Document everything**

---

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
│   7. 🎨 COLOR DEFENSE GATE                                  │
│      └── Run automated contrast checks                      │
│      └── Verify no pure black/white                         │
│      └── Check color + icon/text for status                 │
│      └── Test dark mode elevation (if applicable)           │
│      └── Validate grayscale hierarchy                       │
│                                                             │
│   [ALL PASS] → Proceed to Evaluate                          │
│   [ANY FAIL] → Self-Healing Loop                            │
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
- [ ] **🎨 COLOR DEFENSE GATE PASSED** (see below)

---

### 🚨 MANDATORY COLOR DEFENSE GATE

**You CANNOT proceed to Evaluate until ALL color checks pass automated verification.**

This is not a checklist to review—it's a gate enforced by Playwright.

#### Automated Color Verification

```javascript
// Color Defense Gate - MANDATORY before Evaluate phase
import { test, expect } from '@playwright/test';
import Color from 'colorjs.io';

test.describe('Color Defense Gate', () => {

  // 1. CONTRAST VERIFICATION
  test('all text meets WCAG AA contrast requirements', async ({ page }) => {
    await page.goto('/');
    const textElements = await page.locator('p, span, h1, h2, h3, h4, h5, h6, a, button, label').all();

    for (const element of textElements) {
      const styles = await element.evaluate(el => ({
        color: getComputedStyle(el).color,
        bgColor: getComputedStyle(el).backgroundColor,
        fontSize: parseFloat(getComputedStyle(el).fontSize),
        fontWeight: getComputedStyle(el).fontWeight
      }));

      const fgColor = new Color(styles.color);
      const bgColor = new Color(styles.bgColor);
      const contrast = fgColor.contrast(bgColor, 'WCAG21');

      const isLargeText = styles.fontSize >= 18 || (styles.fontSize >= 14 && parseInt(styles.fontWeight) >= 700);
      const minContrast = isLargeText ? 3.0 : 4.5;

      expect(contrast).toBeGreaterThanOrEqual(minContrast);
    }
  });

  // 2. NO PURE BLACK/WHITE
  test('no pure black (#000000) or pure white (#FFFFFF)', async ({ page }) => {
    await page.goto('/');
    const allElements = await page.locator('*').all();

    for (const element of allElements) {
      const styles = await element.evaluate(el => ({
        color: getComputedStyle(el).color,
        bgColor: getComputedStyle(el).backgroundColor
      }));

      expect(styles.color).not.toBe('rgb(0, 0, 0)');
      expect(styles.color).not.toBe('rgb(255, 255, 255)');
      expect(styles.bgColor).not.toBe('rgb(0, 0, 0)');
      expect(styles.bgColor).not.toBe('rgb(255, 255, 255)');
    }
  });

  // 3. COLOR-ALONE MEANING CHECK
  test('status indicators have icons/text, not just color', async ({ page }) => {
    await page.goto('/');
    const statusElements = await page.locator('[data-status], [role="status"], .badge, .status, .alert').all();

    for (const element of statusElements) {
      const hasIcon = await element.locator('svg, img, [class*="icon"]').count() > 0;
      const hasText = (await element.textContent())?.trim().length > 0;
      expect(hasIcon || hasText).toBe(true);
    }
  });

  // 4. GRAYSCALE HIERARCHY TEST
  test('visual hierarchy survives grayscale conversion', async ({ page }) => {
    await page.goto('/');
    await page.addStyleTag({ content: 'html { filter: grayscale(100%); }' });

    const primaryCTA = await page.locator('[data-variant="primary"]').first();
    const secondaryElement = await page.locator('p').first();

    const ctaLightness = await primaryCTA.evaluate(el => {
      const match = getComputedStyle(el).backgroundColor.match(/\d+/g);
      return match ? parseInt(match[0]) : 0;
    });

    const textLightness = await secondaryElement.evaluate(el => {
      const match = getComputedStyle(el).backgroundColor.match(/\d+/g);
      return match ? parseInt(match[0]) : 0;
    });

    expect(Math.abs(ctaLightness - textLightness)).toBeGreaterThan(30);
  });
});
```

#### Gate Enforcement

| Check | Auto-Verifiable | Tool |
|-------|-----------------|------|
| WCAG contrast ratios | ✅ Yes | Playwright + colorjs.io |
| No pure black/white | ✅ Yes | Playwright |
| Color + icon/text for status | ✅ Yes | Playwright |
| Grayscale hierarchy | ✅ Yes | Playwright |
| Color blindness simulation | ⚠️ Manual | Stark / Sim Daltonism |
| 60-30-10 proportion | ⚠️ Manual | Visual inspection |

**If ANY automated check fails: STOP. Fix the issue. Re-run Defense.**

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
