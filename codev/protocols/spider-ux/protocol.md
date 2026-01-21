# SPIDER-UX 360° Protocol
**A Comprehensive Protocol for Human-Centered, Agentic Web Engineering**

> **Version**: 2.0 (360° Edition)  
> **Philosophy**: *Design for humans first, verify with machines, measure with data, iterate with humility.*

---

## 🗺️ UX Coverage Map

Before diving in, understand what "360°" means. This protocol covers the complete orbit around UI/UX:

```
                           ┌─────────────────┐
                           │   1. RESEARCH   │ ← Who are we designing for?
                           │   & DISCOVERY   │
                           └────────┬────────┘
                                    │
        ┌───────────────────────────┼───────────────────────────┐
        │                           │                           │
        ▼                           ▼                           ▼
┌───────────────┐         ┌─────────────────┐         ┌─────────────────┐
│ 2. INFORMATION│         │  3. INTERACTION │         │   4. VISUAL     │
│  ARCHITECTURE │         │   & BEHAVIOR    │         │  DESIGN SYSTEM  │
│  & CONTENT    │         │                 │         │                 │
└───────┬───────┘         └────────┬────────┘         └────────┬────────┘
        │                          │                           │
        └──────────────────────────┼───────────────────────────┘
                                   │
        ┌──────────────────────────┼──────────────────────────┐
        │                          │                          │
        ▼                          ▼                          ▼
┌───────────────┐         ┌─────────────────┐         ┌─────────────────┐
│ 5. ACCESSIBIL-│         │  6. PERFORMANCE │         │   7. TRUST,     │
│    ITY        │         │  & RESILIENCE   │         │ PRIVACY, ETHICS │
└───────┬───────┘         └────────┬────────┘         └────────┬────────┘
        │                          │                          │
        └──────────────────────────┼──────────────────────────┘
                                   │
        ┌──────────────────────────┼──────────────────────────┐
        │                          │                          │
        ▼                          ▼                          ▼
┌───────────────┐         ┌─────────────────┐         ┌─────────────────┐
│ 8. INTERNATIO-│         │  9. DESIGN      │         │  10. MEASUREMENT│
│  NALIZATION   │         │  SYSTEM GOV.    │         │   & ITERATION   │
└───────────────┘         └─────────────────┘         └─────────────────┘
```

**Each feature spec must declare which slices apply.** Not every feature needs all ten—but you must consciously decide.

---

## Table of Contents

1. [Executive Summary](#executive-summary)
2. [UI/UX Design Principles (Mandatory)](#-uiux-design-principles-mandatory-reading)
3. [User Research & Discovery](#-user-research--discovery)
4. [Information Architecture & Content Strategy](#-information-architecture--content-strategy)
5. [Typography System](#-typography-system)
6. [Color, Theme & Visual Design](#-color-theme--visual-design)
7. [Spacing & Layout System](#-spacing--layout-system)
8. [Motion & Animation Design](#-motion--animation-design)
9. [Accessibility (Complete)](#-accessibility-complete)
10. [Performance & Resilience](#-performance--resilience)
11. [Trust, Privacy & Ethical Design](#-trust-privacy--ethical-design)
12. [Internationalization & Localization](#-internationalization--localization)
13. [Forms Protocol](#-forms-protocol)
14. [Complex Pattern Library](#-complex-pattern-library)
15. [Design System Governance](#-design-system-governance)
16. [Protocol Phases (SPIDER)](#protocol-phases)
17. [Measurement & Analytics](#-measurement--analytics)
18. [Configuration & Tools](#configuration--tools)
19. [Templates & Quick References](#templates--quick-references)

---

## Executive Summary

SPIDER-UX 360° is a comprehensive protocol for autonomous AI agents building verified, human-centered web applications. It addresses three fundamental challenges:

1. **The Feedback Gap**: Agents can generate code but cannot perceive visual/interactive consequences
2. **The Research Gap**: Traditional protocols assume requirements arrive fully-formed
3. **The Measurement Gap**: Building without feedback loops is faith without evidence

**Key Innovations:**
- **Synthetic Vision**: Playwright MCP's accessibility tree enables semantic UI verification
- **User Reality Packs**: Structured research inputs prevent "building the wrong thing right"
- **Defense Gates**: Automated verification before any human review
- **Measurement Contracts**: Every feature ships with success criteria

### The Three Pillars

| Component | Role | Function |
|-----------|------|----------|
| **Claude Code / Agent** | Architect & Builder | Orchestration, reasoning, code generation |
| **Playwright MCP** | Critic & Sensor | Agent's "eyes"—verification via Accessibility Tree |
| **MSW** | Simulator | Deterministic data for UI state verification |

### When to Use SPIDER-UX 360°

| Use SPIDER-UX 360° For | Use Standard SPIDER Instead |
|------------------------|----------------------------|
| New frontend features | Backend-only APIs |
| Full-page development | CLI tools |
| Interactive prototypes | Infrastructure/DevOps |
| Responsive applications | Documentation-only |

---

## 🧠 UI/UX Design Principles (MANDATORY READING)

**Before beginning ANY design work, internalize these principles. They are constraints, not suggestions.**

> **The Meta-Principle**: *Respect your user's time, attention, and intelligence—then design as if they have none of these to spare.*

### Core Laws (Memorize These)

| Law | Principle | Design Implication |
|-----|-----------|-------------------|
| **Don't Make Me Think** | Every element should be self-evident | If users pause to figure something out, you've failed |
| **Jakob's Law** | Users expect your site to work like others | Novelty is the enemy of usability—follow conventions |
| **Fitts's Law** | Target acquisition depends on size and distance | Big buttons, placed where users naturally look/move |
| **Hick's Law** | More choices = slower decisions | Fewer options, progressive disclosure |
| **Miller's Law** | Working memory holds ~7±2 items | Chunk information into digestible groups |
| **Aesthetic-Usability Effect** | Beautiful = perceived as more usable | Polish matters—users forgive flaws in attractive designs |

### Foundational Principles

| Principle | Requirement |
|-----------|-------------|
| **Visibility of System Status** | Always inform users what's happening (spinners, progress, confirmations) |
| **Match System to Real World** | Use familiar language, icons, metaphors |
| **User Control & Freedom** | Provide clear exits—undo, cancel, back buttons |
| **Consistency & Standards** | Internal consistency + platform conventions |
| **Error Prevention > Error Messages** | Disable invalid options, smart defaults, confirm destructive actions |
| **Recognition Over Recall** | Show options, don't require memorization |

### Mental Models

| Concept | Application |
|---------|-------------|
| **Gulf of Execution/Evaluation** | Help users know HOW to act and WHAT happened |
| **Affordances & Signifiers** | Objects must LOOK like what they DO |
| **Principle of Least Surprise** | Systems behave as expected—warn about unexpected behavior |
| **Progressive Disclosure** | Show only what's needed; hide advanced options |
| **80/20 Rule** | 80% of users use 20% of features—optimize for common paths |

### Psychological Principles

| Principle | Design Technique |
|-----------|-----------------|
| **Peak-End Rule** | Smooth endings redeem bumpy flows—nail confirmation/completion |
| **Serial Position Effect** | Users remember first/last items—important nav at top AND bottom |
| **Loss Aversion** | "Don't lose your progress" > "Save your progress" |
| **Social Proof** | Show activity, user counts, testimonials |
| **Zeigarnik Effect** | Incomplete tasks occupy mental space—use progress bars, checklists |

### Quick Reference Checklist

Before starting any design, verify YES to all:

- [ ] **Self-Evident?** Can users understand this without thinking?
- [ ] **Conventional?** Does this match expectations from other sites?
- [ ] **Accessible?** Touch targets large enough? Content chunked?
- [ ] **Progressive?** Complexity revealed only when needed?
- [ ] **Forgiving?** Can users recover from mistakes easily?
- [ ] **Informative?** Does the system always show its status?
- [ ] **Consistent?** Same actions produce same results throughout?

---

## 🔬 User Research & Discovery

**You cannot design well without understanding users.** This section ensures research inputs exist before specification begins.

### The User Reality Pack (Required in Specify Phase)

Every specification MUST include a User Reality Pack containing:

#### 1. User Segments & Primary Persona

```markdown
## Primary Persona: Sarah, the Busy Professional

**Demographics**: 32, marketing manager, uses mobile 70% of time
**Goals**: Complete tasks quickly between meetings
**Frustrations**: Slow loading, too many steps, unclear next actions
**Tech Comfort**: High—uses 15+ apps daily
**Context**: Often distracted, multitasking, in noisy environments

### Key Insight
Sarah scans, doesn't read. Every screen must answer "What do I do next?" in 2 seconds.
```

**Minimum requirement**: 1 primary persona, up to 3 secondary personas.

#### 2. Jobs To Be Done (JTBD) Statements

Use this format consistently:

```
When [SITUATION], I want to [MOTIVATION], so I can [EXPECTED OUTCOME].
```

**Examples:**
```markdown
## Primary JTBD
When I have 5 minutes between meetings, I want to quickly check my team's progress, 
so I can identify blockers before they become problems.

## Secondary JTBDs
- When a client asks about project status, I want to find the answer in <30 seconds...
- When I'm reviewing work on mobile, I want to approve/reject with one tap...
```

**Minimum requirement**: 1 primary job, 3 secondary jobs.

#### 3. Top Tasks Matrix

| Task | Frequency | Criticality | Current Pain | Target Time |
|------|-----------|-------------|--------------|-------------|
| Check dashboard | Daily | High | Too many clicks | <5 sec |
| Approve request | Weekly | Critical | Buried in menu | <10 sec |
| Export report | Monthly | Medium | Slow, unclear | <30 sec |
| Update settings | Rare | Low | Acceptable | N/A |

**Minimum requirement**: 5 top tasks ranked by frequency × criticality.

#### 4. Context of Use

| Factor | Description | Design Implication |
|--------|-------------|-------------------|
| **Primary Device** | Mobile (65%), Desktop (35%) | Mobile-first design |
| **Environment** | Office, commute, home | Works in bright light, noisy |
| **Interruptions** | High—frequent context switching | Save state, easy resume |
| **Session Length** | 2-5 minutes typical | Fast task completion |
| **Connectivity** | Variable, often poor mobile | Offline-capable, low data |

#### 5. Assumptions Log

| Assumption | Risk if Wrong | Validation Method | Status |
|------------|---------------|-------------------|--------|
| Users prefer card view | Medium | A/B test | ⏳ Unvalidated |
| Email notifications are wanted | High | User survey | ✅ Validated |
| Dark mode is expected | Low | Analytics check | ⏳ Unvalidated |

**Minimum requirement**: 5 assumptions with validation plans.

### Research Methods Reference

| Method | When to Use | Output |
|--------|-------------|--------|
| **User Interviews** | Discovery, understanding context | Persona insights, JTBDs |
| **Contextual Inquiry** | Observing real usage | Pain points, workarounds |
| **Card Sorting** | IA decisions | Navigation structure |
| **Tree Testing** | Validating IA | Findability scores |
| **Usability Testing** | Validating designs | Task success rates |
| **5-Second Tests** | First impressions | Clarity scores |
| **A/B Testing** | Optimizing existing flows | Conversion data |

### Research Gate

**No specification is valid unless it includes:**
- [ ] 1 primary persona
- [ ] 1 primary JTBD + 3 secondary JTBDs
- [ ] 5 top tasks with target times
- [ ] Context of use documented
- [ ] 5 assumptions with validation plans

---

## 📚 Information Architecture & Content Strategy

### Information Architecture Artifacts

#### 1. Site Map / IA Tree

```
├── Dashboard (/)
│   ├── Overview (/overview)
│   └── Analytics (/analytics)
├── Projects (/projects)
│   ├── List View (/projects/list)
│   ├── Board View (/projects/board)
│   └── [Project Detail] (/projects/:id)
│       ├── Tasks
│       ├── Files
│       └── Settings
├── Team (/team)
└── Settings (/settings)
    ├── Profile
    ├── Notifications
    └── Integrations
```

#### 2. Navigation Model Rationale

| Pattern | When to Use | This Project |
|---------|-------------|--------------|
| **Top Tabs** | <7 items, equal importance | ❌ Too many sections |
| **Side Nav** | Many items, hierarchical | ✅ Selected |
| **Bottom Nav** | Mobile, <5 items | ✅ Mobile only |
| **Hamburger** | Secondary items | ✅ Overflow items |

**Rationale**: Side nav chosen because [specific reason based on user research].

#### 3. Content Model

| Content Type | Attributes | Relationships |
|--------------|------------|---------------|
| **Project** | name, status, owner, dates | Has many Tasks, Files |
| **Task** | title, status, assignee, due | Belongs to Project |
| **User** | name, email, role, avatar | Owns Projects, assigned Tasks |

### Content Contract (UX Writing)

#### Voice & Tone Guidelines

| Dimension | Our Voice |
|-----------|-----------|
| **Formal ↔ Casual** | Casual but professional (like a helpful colleague) |
| **Serious ↔ Playful** | Mostly serious, playful in celebrations |
| **Technical ↔ Simple** | Simple—avoid jargon, explain when necessary |
| **Authoritative ↔ Friendly** | Friendly first, authoritative when needed |

#### Microcopy Standards

**Button Labels:**
| ✅ Do | ❌ Don't |
|-------|---------|
| "Save changes" | "Submit" |
| "Create project" | "OK" |
| "Delete project" | "Yes" |
| "Cancel" | "No" |

**Canonical Labels (use consistently):**
| Action | Standard Label |
|--------|----------------|
| Authentication | "Sign in" (not Log in, Login) |
| Account creation | "Sign up" (not Register, Create account) |
| Logout | "Sign out" |
| Submit | [Specific verb]: "Save", "Send", "Create" |
| Cancel | "Cancel" (not Close, Never mind) |

#### Error Message Templates

**Structure**: What happened + Why + What to do next

| ❌ Bad | ✅ Good |
|--------|---------|
| "Error" | "Couldn't save changes. Check your connection and try again." |
| "Invalid input" | "Email address needs an @ symbol" |
| "Something went wrong" | "We couldn't load your projects. [Retry button]" |
| "404" | "This page doesn't exist. [Go to Dashboard]" |

**Error Copy Rules:**
- Never blame the user
- Always provide a next action
- Be specific about what failed
- Use "we" for system failures ("We couldn't..."), "you" for user errors ("Your password needs...")

#### Empty State Playbook

| State | Message | Action |
|-------|---------|--------|
| **No data yet** | "No projects yet" | "Create your first project →" |
| **No results** | "No projects match 'xyz'" | "Clear filters" or "Try different keywords" |
| **Deleted/moved** | "This project was deleted" | "Go to Dashboard" |
| **Permission denied** | "You don't have access to this project" | "Request access" or "Go back" |

#### Forbidden Phrases

Never use these vague phrases:

| ❌ Forbidden | ✅ Replacement |
|-------------|---------------|
| "Click here" | [Specific action]: "View project details" |
| "Something went wrong" | [Specific error with action] |
| "Invalid" | [What's wrong]: "Email needs @ symbol" |
| "Error" (alone) | [Full explanation] |
| "Success!" (alone) | "Project created. [View project]" |
| "Learn more" | [Specific topic]: "How billing works" |
| "N/A" | "Not set" or hide entirely |

### Content Defense Gate

```javascript
// Content verification tests
test.describe('Content Contract Verification', () => {
  
  test('no forbidden vague phrases', async ({ page }) => {
    await page.goto('/');
    const pageText = await page.textContent('body');
    
    const forbiddenPhrases = [
      'click here',
      'something went wrong',
      'invalid',
      'error', // standalone
      'n/a',
      'learn more'
    ];
    
    for (const phrase of forbiddenPhrases) {
      // Case-insensitive, but allow "error" in context like "Error: specific message"
      const regex = new RegExp(`\\b${phrase}\\b(?![:\\s]\\w)`, 'i');
      expect(pageText).not.toMatch(regex);
    }
  });
  
  test('error messages have next actions', async ({ page }) => {
    // Trigger error state
    await page.route('**/api/**', route => route.abort());
    await page.goto('/dashboard');
    
    const errorElement = await page.locator('[role="alert"], .error, [data-error]').first();
    if (await errorElement.isVisible()) {
      // Must have a button or link
      const hasAction = await errorElement.locator('button, a').count() > 0;
      expect(hasAction).toBe(true);
    }
  });
  
  test('empty states have guidance', async ({ page }) => {
    await page.goto('/projects?filter=nonexistent');
    
    const emptyState = await page.locator('[data-empty-state], .empty-state').first();
    if (await emptyState.isVisible()) {
      const text = await emptyState.textContent();
      // Should have action guidance
      expect(text).toMatch(/create|add|try|clear|go to/i);
    }
  });
});
```

---

## 🔤 Typography System

**Typography makes up 90% of the web.** This section provides the system color has—but for type.

### Type Scale (Modular Scale)

Use a mathematical ratio for harmonious sizing. Common ratios:

| Ratio | Name | Feeling |
|-------|------|---------|
| 1.125 | Major Second | Subtle, dense |
| 1.200 | Minor Third | Readable, common |
| 1.250 | Major Third | Clear hierarchy |
| 1.333 | Perfect Fourth | Strong hierarchy |
| 1.500 | Perfect Fifth | Dramatic |

**Recommended: 1.250 (Major Third) for most interfaces**

#### Type Scale Tokens

```typescript
// tokens/typography.ts
export const typeScale = {
  // Base: 16px (1rem)
  'text-xs':   '0.64rem',   // 10.24px - captions, labels
  'text-sm':   '0.8rem',    // 12.8px  - secondary text
  'text-base': '1rem',      // 16px    - body text
  'text-lg':   '1.25rem',   // 20px    - lead paragraphs
  'text-xl':   '1.563rem',  // 25px    - H4
  'text-2xl':  '1.953rem',  // 31.25px - H3
  'text-3xl':  '2.441rem',  // 39px    - H2
  'text-4xl':  '3.052rem',  // 48.8px  - H1
  'text-5xl':  '3.815rem',  // 61px    - Display
};
```

### Line Height (Leading)

| Text Type | Line Height | Why |
|-----------|-------------|-----|
| **Body text** | 1.5–1.6 | Optimal readability |
| **Headings** | 1.1–1.2 | Tighter for visual weight |
| **UI labels** | 1.2–1.3 | Compact but readable |
| **Long-form** | 1.6–1.8 | Easier scanning |

```css
:root {
  --leading-none: 1;
  --leading-tight: 1.15;
  --leading-snug: 1.3;
  --leading-normal: 1.5;
  --leading-relaxed: 1.6;
  --leading-loose: 1.8;
}
```

### Line Length (Measure)

**CRITICAL**: Body text must be 45–75 characters per line. Full-width text is unreadable.

```css
/* Optimal reading width */
.prose {
  max-width: 65ch; /* ~65 characters */
}

/* Never exceed */
.content {
  max-width: 75ch;
}
```

### Font Pairing

#### Safe Combinations

| Heading | Body | Feeling |
|---------|------|---------|
| **Inter** | Inter | Clean, modern, Swiss |
| **Playfair Display** | Source Sans Pro | Editorial, elegant |
| **Roboto Slab** | Roboto | Technical, approachable |
| **Montserrat** | Open Sans | Friendly, geometric |
| **Georgia** | Verdana | Classic, web-safe |

#### Pairing Rules

1. **Contrast in structure**: Pair serif + sans-serif, or geometric + humanist
2. **Harmony in x-height**: Similar x-heights feel related
3. **Maximum 2 families**: More creates visual chaos
4. **Weight variety**: Use weight for hierarchy within a family

### Responsive Typography

Use `clamp()` for fluid scaling:

```css
:root {
  /* Fluid type scale */
  --text-base: clamp(1rem, 0.9rem + 0.5vw, 1.125rem);
  --text-lg: clamp(1.25rem, 1rem + 1vw, 1.5rem);
  --text-xl: clamp(1.5rem, 1.25rem + 1.5vw, 2rem);
  --text-2xl: clamp(2rem, 1.5rem + 2vw, 3rem);
}

h1 { font-size: var(--text-2xl); }
h2 { font-size: var(--text-xl); }
p { font-size: var(--text-base); }
```

### Vertical Rhythm

Maintain consistent spacing based on line height:

```css
:root {
  --baseline: 1.5rem; /* 24px at 16px base */
}

h1, h2, h3, p, ul, ol {
  margin-bottom: var(--baseline);
}

h1 { margin-top: calc(var(--baseline) * 2); }
h2 { margin-top: calc(var(--baseline) * 1.5); }
```

### Typography Tokens

```typescript
// tokens/typography.ts
export const typography = {
  fonts: {
    sans: 'Inter, system-ui, -apple-system, sans-serif',
    serif: 'Georgia, Cambria, serif',
    mono: 'JetBrains Mono, Consolas, monospace',
  },
  
  weights: {
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },
  
  sizes: typeScale,
  
  lineHeights: {
    tight: 1.15,
    snug: 1.3,
    normal: 1.5,
    relaxed: 1.6,
  },
  
  letterSpacing: {
    tighter: '-0.02em',
    tight: '-0.01em',
    normal: '0',
    wide: '0.02em',
    wider: '0.05em',
  },
};
```

### Typography Defense Gate

```javascript
test.describe('Typography Defense Gate', () => {
  
  test('body text width is restricted', async ({ page }) => {
    await page.goto('/');
    
    const paragraphs = await page.locator('p').all();
    for (const p of paragraphs) {
      const width = await p.evaluate(el => el.offsetWidth);
      const fontSize = await p.evaluate(el => 
        parseFloat(getComputedStyle(el).fontSize)
      );
      const charsPerLine = width / (fontSize * 0.5); // Approximate
      
      expect(charsPerLine).toBeLessThanOrEqual(80);
    }
  });
  
  test('line height is accessible', async ({ page }) => {
    await page.goto('/');
    
    const textElements = await page.locator('p, li, td').all();
    for (const el of textElements) {
      const lineHeight = await el.evaluate(el => {
        const style = getComputedStyle(el);
        return parseFloat(style.lineHeight) / parseFloat(style.fontSize);
      });
      
      // WCAG recommends at least 1.5 for body text
      expect(lineHeight).toBeGreaterThanOrEqual(1.4);
    }
  });
  
  test('heading hierarchy is maintained', async ({ page }) => {
    await page.goto('/');
    
    const headings = await page.locator('h1, h2, h3, h4, h5, h6').all();
    let lastLevel = 0;
    
    for (const heading of headings) {
      const level = parseInt(await heading.evaluate(el => el.tagName[1]));
      // Should not skip levels (h1 → h3)
      expect(level - lastLevel).toBeLessThanOrEqual(1);
      lastLevel = level;
    }
  });
});
```

---

## 🎨 Color, Theme & Visual Design

**Color is communication, not decoration.** Every color choice carries meaning, affects usability, and impacts accessibility.

### The 60-30-10 Rule

| Proportion | Role | Application |
|------------|------|-------------|
| **60%** | Dominant | Backgrounds, large surfaces (neutrals) |
| **30%** | Secondary | Cards, containers, supporting elements |
| **10%** | Accent | CTAs, highlights, interactive elements |

### Never Pure Black or White

| Avoid | Use Instead | Why |
|-------|-------------|-----|
| `#000000` | `#1A1A1A`, `#0D1117` | Pure black is harsh, unnatural |
| `#FFFFFF` | `#FAFAFA`, `#F5F5F5` | Pure white causes eye strain |

### Color Psychology

| Color | Western Association | UI Application |
|-------|---------------------|----------------|
| **Red** | Danger, urgency | Destructive actions, errors |
| **Green** | Success, go | Confirmations, positive actions |
| **Blue** | Trust, calm | Primary brand, links, information |
| **Yellow** | Warning, attention | Warnings (not errors), highlights |
| **Orange** | Energy, warmth | Secondary CTAs, notifications |

**Critical caveat**: Never rely on color alone. Always pair with icons, text, or patterns.

### WCAG Contrast Requirements

| Element Type | Minimum Ratio | Target (AAA) |
|--------------|---------------|--------------|
| **Body text** (< 18px) | 4.5:1 | 7:1 |
| **Large text** (≥ 18px) | 3:1 | 4.5:1 |
| **UI components** | 3:1 | 4.5:1 |
| **Focus indicators** | 3:1 | 4.5:1 |

### Three-Layer Token Architecture

```typescript
// LAYER 1: PRIMITIVE TOKENS (Raw Values)
const primitives = {
  'blue-500': '#3B82F6',
  'gray-100': '#F3F4F6',
  'red-600': '#DC2626',
};

// LAYER 2: SEMANTIC TOKENS (Intent)
const semantic = {
  'color-primary': primitives['blue-500'],
  'color-danger': primitives['red-600'],
  'color-surface': primitives['gray-100'],
};

// LAYER 3: COMPONENT TOKENS (Context)
const component = {
  'button-primary-bg': semantic['color-primary'],
  'alert-error-bg': semantic['color-danger'],
};
```

### Light/Dark Mode

| Principle | Light Mode | Dark Mode |
|-----------|------------|-----------|
| Base background | `#FFFFFF` | `#0D1117` |
| Elevation (cards) | Slightly darker | Slightly lighter |
| Saturation | Normal | Reduce 10-15% |
| Text primary | `#111827` | `#F0F6FC` |

**In dark mode**: "Closer to user" = "lighter" (elevation via lightness).

### Color Verification Checklist

- [ ] All text meets WCAG AA (4.5:1 body, 3:1 large)
- [ ] Hierarchy passes squint test—CTA visible, structure clear
- [ ] Color meaning paired with icons/text (not color alone)
- [ ] Dark mode tested (if applicable)
- [ ] Color blindness simulated
- [ ] No pure #000000 or #FFFFFF
- [ ] 60-30-10 proportions balanced
- [ ] Grayscale test passes—hierarchy survives desaturation

---

## 📐 Spacing & Layout System

### Spacing Scale

Use a consistent scale based on a base unit (typically 4px or 8px):

```typescript
// tokens/spacing.ts (4px base)
export const spacing = {
  'space-0':   '0',
  'space-px':  '1px',
  'space-0.5': '2px',
  'space-1':   '4px',    // Base unit
  'space-2':   '8px',
  'space-3':   '12px',
  'space-4':   '16px',   // Common padding
  'space-5':   '20px',
  'space-6':   '24px',   // Section gaps
  'space-8':   '32px',
  'space-10':  '40px',
  'space-12':  '48px',
  'space-16':  '64px',   // Large sections
  'space-20':  '80px',
  'space-24':  '96px',
};
```

### Component Spacing Guidelines

| Context | Spacing | Token |
|---------|---------|-------|
| **Inside buttons** | 8px vert, 16px horiz | `space-2`, `space-4` |
| **Between form fields** | 16px | `space-4` |
| **Card padding** | 16-24px | `space-4` to `space-6` |
| **Section gaps** | 32-48px | `space-8` to `space-12` |
| **Page margins** | 16px mobile, 24px+ desktop | Responsive |

### Grid System

```css
:root {
  /* 12-column grid */
  --grid-columns: 12;
  --grid-gutter: 24px;
  --grid-margin: 16px;
}

@media (min-width: 768px) {
  :root {
    --grid-margin: 24px;
  }
}

@media (min-width: 1024px) {
  :root {
    --grid-gutter: 32px;
    --grid-margin: 48px;
  }
}
```

### Container Max-Widths

| Breakpoint | Max-Width | Use Case |
|------------|-----------|----------|
| **sm** | 640px | Mobile-optimized |
| **md** | 768px | Tablet |
| **lg** | 1024px | Desktop |
| **xl** | 1280px | Wide desktop |
| **2xl** | 1536px | Ultra-wide |
| **prose** | 65ch | Reading content |

### Border Radius Scale

```typescript
export const radii = {
  'rounded-none': '0',
  'rounded-sm':   '2px',
  'rounded':      '4px',    // Default
  'rounded-md':   '6px',
  'rounded-lg':   '8px',
  'rounded-xl':   '12px',
  'rounded-2xl':  '16px',
  'rounded-full': '9999px', // Pills, circles
};
```

### Shadow / Elevation Scale

```typescript
export const shadows = {
  'shadow-sm':  '0 1px 2px 0 rgb(0 0 0 / 0.05)',
  'shadow':     '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
  'shadow-md':  '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
  'shadow-lg':  '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
  'shadow-xl':  '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
  'shadow-2xl': '0 25px 50px -12px rgb(0 0 0 / 0.25)',
};

// Dark mode: use lighter backgrounds instead of shadows
```

### Z-Index Scale

```typescript
export const zIndex = {
  'z-0':       0,
  'z-10':      10,   // Elevated cards
  'z-20':      20,   // Dropdowns
  'z-30':      30,   // Fixed headers
  'z-40':      40,   // Modals backdrop
  'z-50':      50,   // Modals
  'z-toast':   60,   // Toast notifications
  'z-tooltip': 70,   // Tooltips (always on top)
};
```

---

## 🏃 Motion & Animation Design

**UI is 4-dimensional: X, Y, Z, and Time.** Without motion guidelines, interfaces feel like "jump cuts."

### Core Motion Principles

| Principle | Application |
|-----------|-------------|
| **Purposeful** | Motion should communicate, not decorate |
| **Quick** | Most transitions 150-300ms; never sluggish |
| **Natural** | Ease-out for entering, ease-in for exiting |
| **Consistent** | Same action = same animation everywhere |

### Duration Scale

```typescript
// tokens/motion.ts
export const duration = {
  'duration-instant':  '0ms',
  'duration-fast':     '100ms',  // Micro-interactions (hover, focus)
  'duration-normal':   '200ms',  // Standard transitions
  'duration-slow':     '300ms',  // Complex transitions
  'duration-slower':   '400ms',  // Modal/page transitions (MAX for UI)
  'duration-slowest':  '500ms',  // Only for dramatic effect
};
```

**Rule**: UI animations should rarely exceed 400ms. Users perceive >500ms as sluggish.

### Easing Functions

```typescript
export const easing = {
  // Standard: Most UI transitions
  'ease-default': 'cubic-bezier(0.4, 0, 0.2, 1)',
  
  // Ease-out: Elements entering (appear, expand)
  'ease-out': 'cubic-bezier(0, 0, 0.2, 1)',
  
  // Ease-in: Elements exiting (disappear, collapse)
  'ease-in': 'cubic-bezier(0.4, 0, 1, 1)',
  
  // Ease-in-out: Elements moving position
  'ease-in-out': 'cubic-bezier(0.4, 0, 0.2, 1)',
  
  // Spring: Playful, bouncy (use sparingly)
  'ease-spring': 'cubic-bezier(0.34, 1.56, 0.64, 1)',
};
```

### Motion by Context

| Context | Duration | Easing | Example |
|---------|----------|--------|---------|
| **Hover state** | 100-150ms | ease-default | Button color change |
| **Focus ring** | 100ms | ease-out | Outline appearance |
| **Dropdown open** | 200ms | ease-out | Menu expands down |
| **Dropdown close** | 150ms | ease-in | Menu collapses up |
| **Modal enter** | 300ms | ease-out | Fade + scale up |
| **Modal exit** | 200ms | ease-in | Fade + scale down |
| **Page transition** | 300-400ms | ease-in-out | Crossfade |
| **Toast enter** | 300ms | ease-out | Slide in |
| **Toast exit** | 200ms | ease-in | Fade out |
| **Skeleton shimmer** | 1500ms | linear | Continuous loop |

### Choreography Principles

1. **Stagger for lists**: Items animate in sequence (30-50ms delay each)
2. **Shared axis**: Elements move along consistent paths
3. **Focal awareness**: Draw attention to what changed
4. **Morphing**: Transform elements (card → detail) to maintain context

### Reduced Motion (MANDATORY)

```css
/* Always respect user preference */
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

**Rules:**
- [ ] All animations respect `prefers-reduced-motion`
- [ ] No essential information is conveyed by motion alone
- [ ] No autoplaying animations that can't be paused
- [ ] No animations that flash more than 3 times per second

### Motion Defense Gate

```javascript
test.describe('Motion Defense Gate', () => {
  
  test('animations respect reduced motion', async ({ page }) => {
    // Emulate reduced motion preference
    await page.emulateMedia({ reducedMotion: 'reduce' });
    await page.goto('/');
    
    // Check that transitions are effectively instant
    const button = page.locator('button').first();
    const transitionDuration = await button.evaluate(el => 
      getComputedStyle(el).transitionDuration
    );
    
    // Should be near-instant
    expect(parseFloat(transitionDuration)).toBeLessThanOrEqual(0.01);
  });
  
  test('no motion exceeds 400ms', async ({ page }) => {
    await page.goto('/');
    
    const allElements = await page.locator('*').all();
    for (const el of allElements.slice(0, 100)) { // Sample
      const duration = await el.evaluate(el => {
        const style = getComputedStyle(el);
        const transition = parseFloat(style.transitionDuration) * 1000;
        const animation = parseFloat(style.animationDuration) * 1000;
        return Math.max(transition, animation);
      });
      
      expect(duration).toBeLessThanOrEqual(500);
    }
  });
  
  test('loading states have skeleton or spinner', async ({ page }) => {
    await page.route('**/api/**', async route => {
      await new Promise(r => setTimeout(r, 1000));
      route.continue();
    });
    
    await page.goto('/dashboard');
    
    // Should show loading indicator
    const hasLoading = await page.locator(
      '[data-loading], [role="progressbar"], .skeleton, .spinner'
    ).count() > 0;
    
    expect(hasLoading).toBe(true);
  });
});
```

---

## ♿ Accessibility (Complete)

**Accessibility is a legal and ethical requirement.** This section goes beyond color contrast to cover keyboard, screen readers, cognitive accessibility, and more.

### Keyboard Navigation

#### Tab Order Requirements

- [ ] All interactive elements reachable by Tab
- [ ] Tab order follows visual order (left-to-right, top-to-bottom)
- [ ] Skip links present for navigation bypass
- [ ] No keyboard traps (can always Tab out)
- [ ] Focus never lost (always visible somewhere)

#### Focus Management

| Scenario | Focus Behavior |
|----------|----------------|
| **Modal opens** | Focus moves to modal (first focusable or close button) |
| **Modal closes** | Focus returns to trigger element |
| **Delete action** | Focus moves to next item (or previous if last) |
| **Route change** | Focus moves to main content (or h1) |
| **Error occurs** | Focus moves to error summary (or first error field) |
| **Toast appears** | Focus does NOT move (it's supplementary) |

```javascript
// Focus trap for modals
function trapFocus(element) {
  const focusables = element.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
  const first = focusables[0];
  const last = focusables[focusables.length - 1];
  
  element.addEventListener('keydown', (e) => {
    if (e.key === 'Tab') {
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }
  });
}
```

### Screen Reader Support

#### Live Regions

```html
<!-- Polite: Announced when convenient (status updates) -->
<div role="status" aria-live="polite">3 items in cart</div>

<!-- Assertive: Announced immediately (errors) -->
<div role="alert" aria-live="assertive">Payment failed. Please try again.</div>
```

**Rules:**
- Use `aria-live="polite"` for non-urgent updates
- Use `aria-live="assertive"` only for critical errors
- Never spam live regions (debounce rapid changes)

#### ARIA Patterns for Complex Widgets

| Widget | Required ARIA |
|--------|---------------|
| **Modal** | `role="dialog"`, `aria-modal="true"`, `aria-labelledby` |
| **Dropdown** | `role="listbox"`, `aria-expanded`, arrow key navigation |
| **Tabs** | `role="tablist"`, `role="tab"`, `aria-selected` |
| **Accordion** | `aria-expanded`, `aria-controls` |
| **Toast** | `role="status"`, `aria-live="polite"` |

### Text Scaling & Reflow

```css
/* Support 200% zoom without horizontal scroll */
html {
  font-size: 100%; /* Respect user's browser setting */
}

/* Use relative units */
.container {
  max-width: 75rem; /* Not px */
  padding: 1rem;    /* Scales with font */
}

/* Media queries in em (scale with zoom) */
@media (min-width: 48em) { /* 768px at default */ }
```

**Verification:**
- [ ] Test at 200% browser zoom
- [ ] No horizontal scrolling
- [ ] No text truncation
- [ ] Touch targets remain adequate

### Cognitive Accessibility

| Principle | Implementation |
|-----------|----------------|
| **Plain language** | 8th grade reading level max |
| **Consistent wording** | Same action = same label everywhere |
| **No time limits** | Or provide way to extend |
| **Clear instructions** | Don't assume knowledge |
| **Error recovery** | Undo available, clear fix instructions |

### Complete Accessibility Checklist

#### Perceivable
- [ ] Text contrast ≥4.5:1 (3:1 for large text)
- [ ] UI component contrast ≥3:1
- [ ] Color is not only means of conveying info
- [ ] Images have alt text (or aria-hidden if decorative)
- [ ] Video has captions
- [ ] Audio has transcripts

#### Operable
- [ ] All functionality keyboard accessible
- [ ] No keyboard traps
- [ ] Skip links present
- [ ] Focus visible and styled
- [ ] Touch targets ≥44×44px
- [ ] No timing requirements (or extensible)
- [ ] No content that flashes >3 times/second

#### Understandable
- [ ] Language declared (`lang="en"`)
- [ ] Consistent navigation
- [ ] Consistent identification (same icons/labels)
- [ ] Error prevention for important actions
- [ ] Error messages identify field and suggest fix
- [ ] Labels visible (not placeholder-only)

#### Robust
- [ ] Valid HTML
- [ ] ARIA used correctly
- [ ] Works across browsers
- [ ] Works with assistive technology

### Accessibility Defense Gate

```javascript
test.describe('Accessibility Defense Gate', () => {
  
  test('keyboard navigation works', async ({ page }) => {
    await page.goto('/');
    
    // Tab through all interactive elements
    const interactives = await page.locator(
      'a, button, input, select, textarea, [tabindex]:not([tabindex="-1"])'
    ).all();
    
    for (let i = 0; i < Math.min(interactives.length, 20); i++) {
      await page.keyboard.press('Tab');
      
      // Focus should be visible
      const focused = page.locator(':focus');
      await expect(focused).toBeVisible();
      
      // Should have focus indicator
      const outline = await focused.evaluate(el => 
        getComputedStyle(el).outlineWidth !== '0px' ||
        getComputedStyle(el).boxShadow !== 'none'
      );
      expect(outline).toBe(true);
    }
  });
  
  test('modals trap focus', async ({ page }) => {
    await page.goto('/');
    
    // Open a modal
    await page.getByRole('button', { name: /open modal|settings/i }).click();
    const modal = page.locator('[role="dialog"]');
    
    if (await modal.isVisible()) {
      // Tab should cycle within modal
      const modalFocusables = await modal.locator(
        'button, [href], input, [tabindex]:not([tabindex="-1"])'
      ).all();
      
      // Press Tab many times
      for (let i = 0; i < modalFocusables.length + 2; i++) {
        await page.keyboard.press('Tab');
      }
      
      // Focus should still be in modal
      const focusedInModal = await page.evaluate(() => {
        const focused = document.activeElement;
        const modal = document.querySelector('[role="dialog"]');
        return modal?.contains(focused);
      });
      
      expect(focusedInModal).toBe(true);
    }
  });
  
  test('zoom to 200% has no horizontal scroll', async ({ page }) => {
    // Simulate 200% zoom via viewport
    await page.setViewportSize({ width: 640, height: 360 }); // Half of 1280x720
    await page.goto('/');
    
    const hasHorizontalScroll = await page.evaluate(() => 
      document.documentElement.scrollWidth > document.documentElement.clientWidth
    );
    
    expect(hasHorizontalScroll).toBe(false);
  });
  
  test('reduced motion is respected', async ({ page }) => {
    await page.emulateMedia({ reducedMotion: 'reduce' });
    await page.goto('/');
    
    // Animations should be disabled
    const animation = await page.locator('*').first().evaluate(el => 
      getComputedStyle(el).animationDuration
    );
    
    expect(parseFloat(animation)).toBeLessThanOrEqual(0.01);
  });
  
  test('skip link is present and works', async ({ page }) => {
    await page.goto('/');
    await page.keyboard.press('Tab');
    
    const skipLink = page.locator('a[href="#main"], a[href="#content"]');
    if (await skipLink.count() > 0) {
      await expect(skipLink.first()).toBeVisible();
    }
  });
});
```

---

## ⚡ Performance & Resilience

**A UI can be "usable" in the lab and painful in the wild.**

### Performance Budgets

| Metric | Target | Threshold |
|--------|--------|-----------|
| **LCP** (Largest Contentful Paint) | <2.5s | <4s |
| **INP** (Interaction to Next Paint) | <200ms | <500ms |
| **CLS** (Cumulative Layout Shift) | <0.1 | <0.25 |
| **FCP** (First Contentful Paint) | <1.8s | <3s |
| **TTI** (Time to Interactive) | <3.8s | <7.3s |

### Latency Budgets (UI Feedback)

| Response Type | Budget | User Perception |
|---------------|--------|-----------------|
| **Instant feedback** | <100ms | "Instantaneous" |
| **Loading indicator** | <1s | "Quick, no spinner needed" |
| **Progress indication** | <10s | "Working on it" (show progress) |
| **Background task** | >10s | Offload, notify when done |

### Resilience Matrix

**Every feature must define behavior for these scenarios:**

| Scenario | Detection | UI Behavior |
|----------|-----------|-------------|
| **Offline** | `navigator.onLine`, fetch failure | Show cached data + offline indicator |
| **Slow network** | Timeout >3s | Show skeleton, not spinner |
| **Timeout** | Request >10s | Cancel, show retry |
| **Server error (5xx)** | Status code | "Something went wrong" + retry |
| **Auth error (401/403)** | Status code | Redirect to login / show access denied |
| **Not found (404)** | Status code | "This doesn't exist" + navigation |
| **Rate limited (429)** | Status code | "Slow down" + countdown |
| **Partial data** | Incomplete response | Show what we have + indicate missing |
| **Stale data** | Age header, timestamp | Show with "Last updated X ago" |

### Perceived Performance Techniques

| Technique | When to Use |
|-----------|-------------|
| **Skeleton screens** | Data loading >300ms |
| **Optimistic updates** | Low-risk actions (like, star) |
| **Progressive loading** | Large lists (virtualization) |
| **Prefetching** | Likely next navigation |
| **Stale-while-revalidate** | Frequently accessed data |

### Performance Defense Gate

```javascript
test.describe('Performance Defense Gate', () => {
  
  test('no layout shift during load', async ({ page }) => {
    // Measure CLS
    await page.goto('/');
    
    const cls = await page.evaluate(() => {
      return new Promise(resolve => {
        let clsValue = 0;
        const observer = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            if (!entry.hadRecentInput) {
              clsValue += entry.value;
            }
          }
        });
        observer.observe({ entryTypes: ['layout-shift'] });
        
        setTimeout(() => {
          observer.disconnect();
          resolve(clsValue);
        }, 3000);
      });
    });
    
    expect(cls).toBeLessThan(0.1);
  });
  
  test('loading states appear within 1s', async ({ page }) => {
    await page.route('**/api/**', async route => {
      await new Promise(r => setTimeout(r, 2000));
      route.continue();
    });
    
    const start = Date.now();
    await page.goto('/dashboard');
    
    // Loading indicator should appear quickly
    const loading = page.locator('[data-loading], .skeleton, [role="progressbar"]');
    await expect(loading.first()).toBeVisible({ timeout: 1000 });
  });
  
  test('handles offline gracefully', async ({ page }) => {
    await page.goto('/dashboard');
    
    // Go offline
    await page.context().setOffline(true);
    
    // Try to refresh or take action
    await page.reload();
    
    // Should show offline indicator, not error
    const offlineIndicator = page.locator('[data-offline], .offline-banner');
    const errorPage = page.locator('[data-error="network"]');
    
    const hasGracefulHandling = await offlineIndicator.isVisible() || 
                                 await page.content().then(c => c.includes('offline'));
    expect(hasGracefulHandling).toBe(true);
  });
  
  test('slow network shows skeleton not spinner', async ({ page }) => {
    // Throttle to slow 3G
    const client = await page.context().newCDPSession(page);
    await client.send('Network.emulateNetworkConditions', {
      offline: false,
      downloadThroughput: 50 * 1024 / 8, // 50kb/s
      uploadThroughput: 50 * 1024 / 8,
      latency: 2000
    });
    
    await page.goto('/dashboard');
    
    // Prefer skeleton over spinner for >1s loads
    const skeleton = page.locator('.skeleton, [data-skeleton]');
    const hasSkeletons = await skeleton.count() > 0;
    
    // This is a soft recommendation, not hard fail
    if (!hasSkeletons) {
      console.warn('Consider using skeleton screens for slow loads');
    }
  });
});
```

---

## 🔒 Trust, Privacy & Ethical Design

**Users lend you attention and data. Return clarity and safety.**

### Trust Contract Checklist

Every feature handling user data must verify:

- [ ] **Transparency**: User knows what data is collected and why
- [ ] **Control**: User can view, edit, delete their data
- [ ] **Consent**: Explicit opt-in for non-essential data collection
- [ ] **Security**: Sensitive fields masked, sessions timeout appropriately
- [ ] **No surprises**: Defaults are safe, not profitable

### Anti-Dark-Pattern Pledge

**Never implement:**

| Dark Pattern | Description | Violation |
|--------------|-------------|-----------|
| **Confirmshaming** | "No thanks, I don't want to save money" | ❌ Banned |
| **Roach motel** | Easy to sign up, impossible to cancel | ❌ Banned |
| **Hidden costs** | Surprise fees at checkout | ❌ Banned |
| **Misdirection** | Visual hierarchy that tricks | ❌ Banned |
| **Forced continuity** | Auto-renew without clear notice | ❌ Banned |
| **Sneak into basket** | Add items user didn't choose | ❌ Banned |
| **Privacy zuckering** | Confusing privacy settings | ❌ Banned |

### Privacy UX Requirements

| Action | Required UX |
|--------|-------------|
| **Permission request** | Explain WHY needed, just-in-time |
| **Data collection** | Notice before collection |
| **Cookie consent** | Real choice, not "accept or leave" |
| **Account deletion** | Clear path, confirm data removal |
| **Data export** | User can download their data |

### Security UX

| Feature | Requirement |
|---------|-------------|
| **Session timeout** | Warn before logout, clear redirect |
| **Password fields** | Toggle visibility option |
| **Sensitive data** | Masked by default, reveal on demand |
| **Auth errors** | Generic ("Invalid credentials"), not specific |
| **Rate limiting** | Show countdown, not just error |

### Destructive Actions Protocol

**For any action that cannot be undone:**

1. **Require confirmation** — Modal with clear consequences
2. **Use friction** — Type to confirm for critical actions
3. **Delay execution** — "Undo" window (5-30 seconds)
4. **Soft delete first** — Archive before permanent deletion

```jsx
// Good confirmation dialog
<Dialog>
  <DialogTitle>Delete "Project Alpha"?</DialogTitle>
  <DialogDescription>
    This will permanently delete the project and all 47 tasks.
    This action cannot be undone.
  </DialogDescription>
  <DialogFooter>
    <Button variant="secondary">Cancel</Button>
    <Button variant="destructive">Delete project</Button>
  </DialogFooter>
</Dialog>
```

---

## 🌍 Internationalization & Localization

### Text Expansion Tolerance

Different languages have different lengths. Design must accommodate:

| Language | Expansion Factor | Example |
|----------|------------------|---------|
| English (base) | 1.0x | "Submit" |
| German | 1.3x | "Absenden" (but can be longer) |
| French | 1.2x | "Soumettre" |
| Finnish | 1.3x | "Lähetä" |
| Arabic | 1.25x | — |
| Chinese | 0.5-0.7x | Often shorter |

**Rule**: Design buttons/labels with 40% extra space, or use flexible layouts.

### RTL (Right-to-Left) Support

```css
/* Use logical properties, not physical */

/* ❌ Don't */
.element {
  margin-left: 16px;
  padding-right: 8px;
  text-align: left;
}

/* ✅ Do */
.element {
  margin-inline-start: 16px;
  padding-inline-end: 8px;
  text-align: start;
}
```

**CSS Logical Properties Cheat Sheet:**

| Physical | Logical |
|----------|---------|
| `left` | `inline-start` |
| `right` | `inline-end` |
| `top` | `block-start` |
| `bottom` | `block-end` |
| `margin-left` | `margin-inline-start` |
| `padding-right` | `padding-inline-end` |
| `border-left` | `border-inline-start` |
| `text-align: left` | `text-align: start` |

### Date/Number Formatting

**Never hardcode formats.** Use `Intl` APIs:

```javascript
// Dates
new Intl.DateTimeFormat('en-US').format(date); // 1/21/2026
new Intl.DateTimeFormat('de-DE').format(date); // 21.1.2026
new Intl.DateTimeFormat('ja-JP').format(date); // 2026/1/21

// Numbers
new Intl.NumberFormat('en-US').format(1234.56); // 1,234.56
new Intl.NumberFormat('de-DE').format(1234.56); // 1.234,56

// Currency
new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' })
  .format(1234.56); // $1,234.56
```

### String Externalization

```typescript
// ❌ Don't hardcode
<Button>Submit</Button>

// ✅ Do externalize
<Button>{t('common.submit')}</Button>

// translations/en.json
{
  "common": {
    "submit": "Submit",
    "cancel": "Cancel",
    "save": "Save changes"
  }
}
```

### Pluralization

```typescript
// Use ICU MessageFormat or similar
{
  "items_count": "{count, plural, =0 {No items} one {1 item} other {# items}}"
}
```

### i18n Defense Gate

```javascript
test.describe('Internationalization Defense Gate', () => {
  
  test('UI handles text expansion (pseudo-locale)', async ({ page }) => {
    // Inject pseudo-localized text (40% longer with accents)
    await page.addInitScript(() => {
      const pseudoLocalize = (text) => {
        // Add 40% padding + accents
        return '[' + text.replace(/[a-z]/gi, c => 
          'àḃćḋèḟǵḣìĵķĺṁńòṗqŕśṫùṿẁẍỳź'['abcdefghijklmnopqrstuvwxyz'.indexOf(c.toLowerCase())] || c
        ) + ' !!!]';
      };
      
      // Override text rendering (simplified example)
      window.__PSEUDO_LOCALE__ = true;
    });
    
    await page.goto('/');
    
    // Check for overflow
    const hasOverflow = await page.evaluate(() => {
      const elements = document.querySelectorAll('button, a, label, [class*="nav"]');
      for (const el of elements) {
        if (el.scrollWidth > el.clientWidth) return true;
      }
      return false;
    });
    
    expect(hasOverflow).toBe(false);
  });
  
  test('RTL layout works', async ({ page }) => {
    // Set RTL direction
    await page.addStyleTag({ content: 'html { direction: rtl; }' });
    await page.goto('/');
    
    // Navigation should be on the right
    const nav = page.locator('nav').first();
    const navBox = await nav.boundingBox();
    const pageWidth = await page.evaluate(() => window.innerWidth);
    
    // In RTL, nav should be on right side (or centered)
    // This is a simplified check
    expect(navBox.x + navBox.width).toBeGreaterThan(pageWidth / 2);
  });
  
  test('no hardcoded date formats', async ({ page }) => {
    await page.goto('/');
    
    const pageText = await page.textContent('body');
    
    // Check for hardcoded US date formats (MM/DD/YYYY)
    const hardcodedDateRegex = /\b(0?[1-9]|1[0-2])\/(0?[1-9]|[12]\d|3[01])\/\d{4}\b/;
    
    // This is a heuristic—real check would verify dates use Intl
    // Presence doesn't mean wrong, but warrants review
  });
});
```

---

## 📝 Forms Protocol

**Forms are where UX goes to become mercy or chaos.** This section provides comprehensive form guidelines.

### Form Principles

| Principle | Implementation |
|-----------|----------------|
| **Minimize fields** | Only ask what's necessary |
| **Smart defaults** | Pre-fill when possible |
| **Progressive disclosure** | Show advanced options on demand |
| **Inline validation** | Validate on blur, not on keystroke |
| **Clear errors** | Specific, near the field, with fix suggestion |
| **Preserve input** | Never lose user's work |

### Validation Strategy

| Timing | When to Use | Example |
|--------|-------------|---------|
| **On blur** | Most validations | Email format, required fields |
| **On change** | Real-time formatting | Phone number, credit card |
| **On submit** | Expensive validations | Username availability |
| **Never on keystroke** | Distracting, premature | — |

### Error Display

```html
<!-- Field-level error -->
<div class="form-field error">
  <label for="email">Email address</label>
  <input 
    id="email" 
    type="email" 
    aria-invalid="true" 
    aria-describedby="email-error"
  />
  <p id="email-error" class="error-message" role="alert">
    Enter a valid email address (e.g., name@company.com)
  </p>
</div>

<!-- Error summary (for submit-time) -->
<div role="alert" aria-labelledby="error-summary-title">
  <h2 id="error-summary-title">Fix 2 errors to continue</h2>
  <ul>
    <li><a href="#email">Email address is invalid</a></li>
    <li><a href="#password">Password must be at least 8 characters</a></li>
  </ul>
</div>
```

### Input Types & Keyboards

| Input | HTML Type | Mobile Keyboard |
|-------|-----------|-----------------|
| Email | `type="email"` | Email keyboard (@ visible) |
| Phone | `type="tel"` | Numeric keypad |
| Number | `type="text" inputmode="numeric"` | Numeric (allows formatting) |
| Password | `type="password"` | Text with mask |
| Date | `type="date"` | Date picker |
| Search | `type="search"` | Search keyboard |

### Labels & Placeholders

| Element | Purpose | Rules |
|---------|---------|-------|
| **Label** | Identify the field | Always visible, always present |
| **Placeholder** | Example format | Never the only label, disappears |
| **Helper text** | Additional guidance | Below field, persistent |

```html
<!-- ✅ Good -->
<label for="phone">Phone number</label>
<input id="phone" type="tel" placeholder="(555) 123-4567" />
<p class="helper-text">We'll text you a verification code</p>

<!-- ❌ Bad: Placeholder as label -->
<input type="tel" placeholder="Phone number" />
```

### Multi-Step Forms

| Requirement | Implementation |
|-------------|----------------|
| **Progress indicator** | "Step 2 of 4" with visual bar |
| **Back navigation** | Always allow going back |
| **Save progress** | Auto-save or explicit save |
| **Validation per step** | Validate before next step |
| **Review before submit** | Summary screen for important forms |

### Forms Defense Gate

```javascript
test.describe('Forms Defense Gate', () => {
  
  test('labels are always visible', async ({ page }) => {
    await page.goto('/form-page');
    
    const inputs = await page.locator('input, select, textarea').all();
    for (const input of inputs) {
      const id = await input.getAttribute('id');
      const ariaLabel = await input.getAttribute('aria-label');
      const label = page.locator(`label[for="${id}"]`);
      
      // Must have either visible label or aria-label
      const hasLabel = await label.isVisible() || ariaLabel;
      expect(hasLabel, `Input ${id} missing visible label`).toBe(true);
    }
  });
  
  test('error messages are helpful', async ({ page }) => {
    await page.goto('/form-page');
    
    // Submit empty form to trigger errors
    await page.getByRole('button', { name: /submit|save|continue/i }).click();
    
    const errors = await page.locator('.error-message, [role="alert"]').all();
    for (const error of errors) {
      const text = await error.textContent();
      
      // Error should not be generic
      expect(text).not.toMatch(/^(error|invalid|required)$/i);
      
      // Should suggest a fix or give specifics
      expect(text.length).toBeGreaterThan(10);
    }
  });
  
  test('submit button disabled when invalid', async ({ page }) => {
    await page.goto('/form-page');
    
    // Don't fill required fields
    const submitButton = page.getByRole('button', { name: /submit|save|continue/i });
    
    // Either disabled, or clicking shows errors (not silent fail)
    const isDisabled = await submitButton.isDisabled();
    if (!isDisabled) {
      await submitButton.click();
      const hasErrors = await page.locator('[role="alert"], .error').count() > 0;
      expect(hasErrors).toBe(true);
    }
  });
  
  test('correct mobile keyboards', async ({ page }) => {
    await page.goto('/form-page');
    
    const emailInput = page.locator('input[type="email"]');
    if (await emailInput.count() > 0) {
      const type = await emailInput.getAttribute('type');
      expect(type).toBe('email');
    }
    
    const phoneInput = page.locator('input[name*="phone"], input[id*="phone"]');
    if (await phoneInput.count() > 0) {
      const type = await phoneInput.getAttribute('type');
      const inputmode = await phoneInput.getAttribute('inputmode');
      expect(type === 'tel' || inputmode === 'numeric').toBe(true);
    }
  });
  
  test('password has visibility toggle', async ({ page }) => {
    await page.goto('/login');
    
    const passwordInput = page.locator('input[type="password"]');
    if (await passwordInput.count() > 0) {
      // Should have toggle button nearby
      const toggle = page.locator('button[aria-label*="show"], button[aria-label*="password"], [data-toggle-password]');
      const hasToggle = await toggle.count() > 0;
      
      // Soft check - not required but recommended
      if (!hasToggle) {
        console.warn('Consider adding password visibility toggle');
      }
    }
  });
});
```

---

## 🧩 Complex Pattern Library

### Navigation Patterns

| Pattern | When to Use | Key Requirements |
|---------|-------------|------------------|
| **Tab bar (mobile)** | 3-5 primary destinations | Icons + labels, highlight active |
| **Side navigation** | 5+ items, hierarchical | Collapsible sections, highlight path |
| **Mega menu** | Large sites, many categories | Organized columns, escape key closes |
| **Breadcrumbs** | Deep hierarchies | Clickable except current, schema markup |
| **Contextual nav** | Related actions | Near content, not overwhelming |

### Data Table Pattern

**Required features:**

| Feature | Implementation |
|---------|----------------|
| **Sorting** | Click header, show direction indicator |
| **Filtering** | Clear what's applied, easy to clear all |
| **Pagination** | Page numbers, per-page selector, total count |
| **Selection** | Checkbox column, bulk actions bar |
| **Empty state** | Message + action when no data |
| **Loading** | Skeleton rows, not full-page spinner |
| **Responsive** | Priority columns or card view on mobile |

### Search Pattern

| Component | Requirement |
|-----------|-------------|
| **Input** | Magnifying glass icon, clear button |
| **Autocomplete** | Show after 2 chars, max 10 suggestions |
| **Recent searches** | Show on focus when empty |
| **No results** | Helpful message + suggestions |
| **Results** | Highlight matched terms |

### Notification Strategy

| Type | Pattern | Duration | Dismissible |
|------|---------|----------|-------------|
| **Success** | Toast | 3-5 seconds | Yes |
| **Error** | Inline or Modal | Persistent | Yes (if recoverable) |
| **Warning** | Banner or Toast | Persistent or timed | Yes |
| **Info** | Toast | 5 seconds | Yes |
| **Progress** | Toast or Inline | Until complete | No |

**Toast Stacking:**
- Stack vertically (newest on bottom)
- Max 3 visible at once
- Pause timers on hover
- Allow "dismiss all"

### Onboarding Patterns

| Pattern | When to Use |
|---------|-------------|
| **Welcome modal** | First visit, keep minimal |
| **Feature callouts** | New features, max 3 steps |
| **Coach marks** | Complex UI, dismissible |
| **Progressive disclosure** | Learn as you go |
| **Empty state guidance** | First action prompts |

### Data Visualization

| Chart Type | Use For |
|------------|---------|
| **Line** | Trends over time |
| **Bar** | Comparisons between categories |
| **Pie** | Parts of a whole (max 5 slices) |
| **Area** | Volume over time |
| **Scatter** | Correlation between variables |

**Accessibility for charts:**
- [ ] Alt text for chart images
- [ ] Data table alternative
- [ ] Patterns in addition to colors
- [ ] High contrast colors

---

## 🏛️ Design System Governance

### Component Lifecycle

```
┌─────────────────────────────────────────────────────────────────────────┐
│                    COMPONENT LIFECYCLE                                   │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                          │
│  [PROPOSAL] → [DRAFT] → [REVIEW] → [STABLE] → [DEPRECATED] → [REMOVED]  │
│                                                                          │
│  • Proposal: RFC document filed                                          │
│  • Draft: Initial implementation, may change                             │
│  • Review: Testing, feedback collection                                  │
│  • Stable: Production-ready, versioned                                   │
│  • Deprecated: Marked for removal, migration guide exists                │
│  • Removed: Fully removed after deprecation period                       │
│                                                                          │
└─────────────────────────────────────────────────────────────────────────┘
```

### Component Documentation Standard

Every component must have:

```markdown
# ComponentName

## Overview
One-sentence description of what this component does.

## When to Use
- Use when [scenario]
- Don't use when [anti-pattern]

## Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| variant | 'primary' \| 'secondary' | 'primary' | Visual style |
| size | 'sm' \| 'md' \| 'lg' | 'md' | Size variant |
| disabled | boolean | false | Disables interaction |

## Accessibility
- Keyboard: [Tab] to focus, [Enter/Space] to activate
- Screen reader: Announces as [button/link/etc]
- Focus indicator: Yes

## Examples
[Live code examples]

## Related Components
- [Link to similar components]
```

### Naming Conventions

| Element | Convention | Example |
|---------|------------|---------|
| **Components** | PascalCase | `PrimaryButton`, `UserCard` |
| **Props** | camelCase | `isDisabled`, `onSubmit` |
| **Tokens** | kebab-case | `color-primary`, `space-4` |
| **CSS classes** | BEM or utility | `.btn--primary`, `text-lg` |
| **Files** | kebab-case | `primary-button.tsx` |

### Versioning Strategy

```
MAJOR.MINOR.PATCH

MAJOR: Breaking changes (API changes, removed components)
MINOR: New features, new components
PATCH: Bug fixes, minor improvements
```

**Breaking change policy:**
1. Announce in next minor release
2. Deprecate for 2 minor releases minimum
3. Provide migration guide
4. Remove in next major release

### Design-Dev Handoff

| Artifact | Responsible | Format |
|----------|-------------|--------|
| **Figma file** | Design | Organized pages, variants documented |
| **Token export** | Design → Dev | JSON via Tokens Studio or similar |
| **Interaction notes** | Design | Annotations in Figma |
| **Component spec** | Dev | Markdown in component folder |
| **Visual regression** | Both | Chromatic or similar |

---

## Protocol Phases

### Overview

```
┌─────────────────────────────────────────────────────────────────────────┐
│                    SPIDER-UX 360° PHASES                                 │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                          │
│   S - SPECIFY     Define requirements with User Reality Pack             │
│         ↓                                                                │
│   P - PLAN        Atomize into testable components                       │
│         ↓                                                                │
│   I - IMPLEMENT   Build mock-first with semantic contracts               │
│         ↓                                                                │
│   D - DEFEND      Verify via automated gates (NO HUMAN REVIEW)           │
│         ↓                                                                │
│   E - EVALUATE    Present to human reviewer                              │
│         ↓                                                                │
│   R - REVIEW      Capture learnings, measure outcomes                    │
│                                                                          │
└─────────────────────────────────────────────────────────────────────────┘
```

---

### S - Specify (The Foundation of Truth)

**Purpose**: Transform abstract requirements into machine-readable definitions that prevent "building the wrong thing right."

#### Required Artifacts

1. **User Reality Pack** (see Research section)
   - Primary persona
   - JTBD statements
   - Top tasks matrix
   - Context of use
   - Assumptions log

2. **Data Contract** (Zod schemas)
   ```typescript
   export const TransactionSchema = z.object({
     id: z.string().uuid(),
     amount: z.number(),
     status: z.enum(['pending', 'completed', 'failed']),
   });
   ```

3. **Semantic Contract** (Accessibility requirements)
   ```markdown
   - "Save" button: role=button, aria-label="Save changes"
   - Status indicator: role=status, shows pending/success/error
   - Error message: role=alert, aria-live=assertive
   ```

4. **State Matrix** (All UI states)

   | State | Trigger | Data | Visual |
   |-------|---------|------|--------|
   | Initial | Page load | None | Skeleton |
   | Success | 200 OK | Items | Grid view |
   | Empty | 200 OK, 0 items | Empty array | Empty state CTA |
   | Error | 5xx/network | Exception | Retry button |

5. **Behavior Contract** (Interactions)

   | Action | Feedback | Timing | Cancellation |
   |--------|----------|--------|--------------|
   | Save | Button disabled + spinner | <100ms feedback | Cancel button |
   | Delete | Confirmation modal | Immediate | Undo 5 sec |

6. **Content Contract** (Labels, errors, empty states)

7. **Responsive Layout Schema**
   ```yaml
   breakpoints:
     mobile: 375px
     tablet: 768px
     desktop: 1024px
   layout_rules:
     - element: "sidebar"
       mobile: hidden
       desktop: visible
   ```

8. **Coverage Declaration**
   ```markdown
   ## 360° Coverage for This Feature
   - [x] User Research: Yes (User Reality Pack included)
   - [x] IA & Content: Yes (Content Contract included)
   - [x] Visual: Using existing design system
   - [x] Accessibility: Standard requirements
   - [ ] i18n: Not applicable (internal tool)
   - [x] Performance: Standard budgets apply
   ```

#### Specify Gate

No spec is valid without:
- [ ] 1 primary persona
- [ ] 1 primary JTBD + 3 secondary
- [ ] 5 top tasks with target times
- [ ] 5 assumptions with validation plans
- [ ] State Matrix with all states
- [ ] Behavior Contract for interactions
- [ ] Content Contract for copy
- [ ] Coverage Declaration

---

### P - Plan (Atomization)

**Purpose**: Break specifications into atomic, testable steps.

#### Component Decomposition

| Level | Examples | Build Order |
|-------|----------|-------------|
| Atoms | Button, Input, Icon | First |
| Molecules | SearchBar, FormField | Second |
| Organisms | UserCard, DataTable | Third |
| Templates | DashboardLayout | Fourth |
| Pages | TransactionsPage | Last |

#### Plan Checklist Format

```markdown
# Plan: Feature Name

## Phase 1: Data Layer
- [ ] Define Zod schemas
- [ ] Implement MSW handlers (success, empty, error)
- [ ] Add realistic latency (300-800ms)

## Phase 2: Components (Bottom-Up)
- [ ] Build Atom: StatusBadge
- [ ] Build Molecule: TransactionRow
- [ ] Build Organism: TransactionTable
- [ ] Build loading skeletons

## Phase 3: Behavior
- [ ] Implement sort/filter
- [ ] Add optimistic updates
- [ ] Handle error recovery

## Phase 4: Content
- [ ] Implement all empty states
- [ ] Add error messages
- [ ] Verify microcopy consistency

## Phase 5: Polish
- [ ] Motion/transitions
- [ ] Focus management
- [ ] Loading choreography

## Defense Checklist Preview
- [ ] All states from State Matrix
- [ ] All behaviors from Behavior Contract
- [ ] All content from Content Contract
- [ ] Accessibility gates
- [ ] Performance gates
- [ ] Responsive gates
```

---

### I - Implement (Mock-First Construction)

**Purpose**: Build working code with MSW as the foundation.

#### Smart Mock Foundation

```typescript
// MSW handlers must simulate real behavior
export const handlers = [
  http.get('/api/transactions', async () => {
    await delay(800); // Force loading state visibility
    return HttpResponse.json(mockTransactions);
  }),
  
  http.get('/api/transactions/empty', async () => {
    await delay(300);
    return HttpResponse.json([]);
  }),
  
  http.get('/api/transactions/error', async () => {
    await delay(300);
    return new HttpResponse(null, { status: 500 });
  }),
];
```

#### Implementation Checklist

**For every component:**
- [ ] Uses semantic HTML (`<button>` not `<div onClick>`)
- [ ] Has `data-testid` for Playwright
- [ ] Includes ARIA attributes where needed
- [ ] Handles all states (loading, error, empty)
- [ ] Respects `prefers-reduced-motion`
- [ ] Uses design tokens (no hardcoded values)

**For forms:**
- [ ] Labels visible (not placeholder-only)
- [ ] Validation on blur
- [ ] Error messages specific with fix suggestion
- [ ] Correct input types for mobile keyboards

**For navigation:**
- [ ] Current location indicated
- [ ] Skip link present
- [ ] Focus managed on route change

---

### D - Defend (Autonomous Verification)

**Purpose**: PROVE the code works. Human review is FORBIDDEN until all gates pass.

#### Defense Gate Sequence

```
┌─────────────────────────────────────────────────────────────────────────┐
│                    DEFENSE GATE SEQUENCE                                 │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                          │
│  1. STATIC ANALYSIS                                                      │
│     └── TypeScript: no errors                                            │
│     └── ESLint: no errors                                                │
│     └── a11y lint: no violations                                         │
│                                                                          │
│  2. CONTENT VERIFICATION                                                 │
│     └── No forbidden vague phrases                                       │
│     └── Error messages have actions                                      │
│     └── Empty states have guidance                                       │
│                                                                          │
│  3. ACCESSIBILITY VERIFICATION                                           │
│     └── Keyboard navigation works                                        │
│     └── Focus management correct                                         │
│     └── Contrast ratios pass                                             │
│     └── Zoom to 200% works                                               │
│     └── Reduced motion respected                                         │
│                                                                          │
│  4. STATE MATRIX VERIFICATION                                            │
│     └── Each state in matrix renders correctly                           │
│     └── State transitions work                                           │
│     └── Error states display correctly                                   │
│                                                                          │
│  5. BEHAVIOR VERIFICATION                                                │
│     └── Feedback timing correct                                          │
│     └── Cancellation works                                               │
│     └── Undo available where specified                                   │
│                                                                          │
│  6. PERFORMANCE VERIFICATION                                             │
│     └── CLS < 0.1                                                        │
│     └── Loading states appear < 1s                                       │
│     └── Offline/error handled gracefully                                 │
│                                                                          │
│  7. RESPONSIVE VERIFICATION                                              │
│     └── Mobile (375px) works                                             │
│     └── Tablet (768px) works                                             │
│     └── Desktop (1024px+) works                                          │
│     └── No horizontal overflow                                           │
│                                                                          │
│  8. FORM VERIFICATION (if applicable)                                    │
│     └── Labels visible                                                   │
│     └── Errors helpful                                                   │
│     └── Keyboards correct                                                │
│                                                                          │
│  9. MOTION VERIFICATION                                                  │
│     └── No animation > 400ms                                             │
│     └── Reduced motion works                                             │
│                                                                          │
│  [ALL PASS] → Proceed to Evaluate                                        │
│  [ANY FAIL] → Fix and re-run Defense                                     │
│                                                                          │
└─────────────────────────────────────────────────────────────────────────┘
```

#### Running Defense

```bash
# Run all defense gates
npm run defend

# Individual gates
npm run defend:a11y
npm run defend:content
npm run defend:states
npm run defend:performance
npm run defend:responsive
npm run defend:forms
```

---

### E - Evaluate (Human Gateway)

**Purpose**: Present verified artifact for human evaluation.

#### Deployment Artifact

```bash
# Build demo with mocks
NEXT_PUBLIC_USE_MOCKS=true npm run build

# Deploy to preview
vercel --prod
```

#### Review Handover Document

```markdown
## Feature: Transaction History

### Demo URL
https://project-demo.vercel.app/transactions

### Testing Instructions
1. Open link
2. Toggle "Mobile View" in top-right
3. Click "Simulate Error" to see error state
4. Clear filter to see empty state

### Verification Report
- ✅ Passed 28 Playwright checks
- ✅ Mobile viewport verified (375px)
- ✅ Error states tested
- ✅ Loading states with 800ms latency

### State Matrix Coverage
| State | Verified |
|-------|----------|
| Initial/Loading | ✅ |
| Success | ✅ |
| Empty | ✅ |
| Error | ✅ |

### UX Principles Compliance
| Principle | Status | Evidence |
|-----------|--------|----------|
| Fitts's Law | ✅ | All buttons ≥44px |
| System Status | ✅ | Skeleton during load, toast on action |
| Error Prevention | ✅ | Delete requires confirmation |

### Accessibility Compliance
| Check | Status |
|-------|--------|
| Keyboard navigation | ✅ |
| Focus management | ✅ |
| Color contrast | ✅ |
| Screen reader | ✅ |

### Assumptions Validated
| Assumption | Outcome |
|------------|---------|
| Users prefer card view | ⏳ A/B test pending |
| Sort by date is default | ✅ Confirmed in testing |

### Open Questions for Reviewer
1. Should empty state suggest creating vs importing?
2. Is the loading skeleton duration appropriate?
```

---

### R - Review (Continuous Improvement)

**Purpose**: Capture learnings, document decisions, measure outcomes.

#### Review Artifacts

1. **Principles Reflection**
   ```markdown
   ### Principles Most Critical
   - Hick's Law: Filter options could overwhelm; capped at 5

   ### Violations Caught in Defense
   | Principle | Violation | Fix |
   |-----------|-----------|-----|
   | Fitts's Law | Delete button 32px | Increased to 48px |

   ### Lessons for Future
   - Progress bars were essential for multi-select actions
   ```

2. **Technical Decisions**
   ```markdown
   ### Decisions Made
   | Decision | Rationale | Alternatives Considered |
   |----------|-----------|------------------------|
   | React Query | Caching + refetch | SWR, manual fetch |
   | Skeleton > Spinner | Less jarring | Shimmer, blank |

   ### Technical Debt
   - [ ] Virtualization needed for >1000 rows
   - [ ] Optimistic updates for bulk actions
   ```

3. **Measurement Setup**
   ```markdown
   ### Analytics Events
   | Event | Trigger | Properties |
   |-------|---------|------------|
   | transaction_viewed | Page load | count, filter_applied |
   | transaction_exported | Export click | format, count |

   ### Success Metrics
   | Metric | Baseline | Target | Current |
   |--------|----------|--------|---------|
   | Task completion | 65% | 85% | — |
   | Time on task | 45s | 20s | — |
   ```

---

## 📊 Measurement & Analytics

**UX without feedback loops is faith without evidence.**

### Measurement Contract

Every feature ships with:

```markdown
## Measurement Contract: Feature Name

### Primary Success Metric
Task completion rate for [primary JTBD]

### Secondary Metrics
- Time to complete task
- Error rate
- Abandonment rate
- Return usage (within 7 days)

### Events to Track
| Event | Trigger | Properties |
|-------|---------|------------|
| feature_started | Entry to flow | source, user_segment |
| feature_completed | Success state | duration_ms, steps_taken |
| feature_abandoned | Exit without complete | last_step, duration_ms |
| feature_error | Error occurs | error_type, recovery_action |

### Qualitative Questions to Answer
1. Where do users get stuck?
2. Is the empty state helpful?
3. Do users understand the error messages?

### A/B Testing Plan (if applicable)
| Variant | Hypothesis | Success Criteria |
|---------|------------|-----------------|
| A: Card view | Higher engagement | +10% interaction rate |
| B: List view | Faster scanning | -20% time on task |
```

### Analytics Event Taxonomy

```typescript
// events/taxonomy.ts
export const events = {
  // Navigation
  page_viewed: { page: string, referrer?: string },
  feature_accessed: { feature: string, entry_point: string },
  
  // Actions
  action_started: { action: string, context: object },
  action_completed: { action: string, duration_ms: number },
  action_failed: { action: string, error: string },
  
  // Forms
  form_started: { form: string },
  form_submitted: { form: string, duration_ms: number },
  form_abandoned: { form: string, last_field: string },
  form_error: { form: string, field: string, error: string },
  
  // Engagement
  feature_used: { feature: string, frequency: number },
  help_accessed: { topic: string, context: string },
};
```

### Success Metrics Framework

| Level | Metric Type | Example |
|-------|-------------|---------|
| **Task** | Completion rate | 85% complete checkout |
| **Usability** | Time on task | <30s to find settings |
| **Engagement** | Return rate | 60% return within 7 days |
| **Satisfaction** | CSAT / NPS | CSAT > 4.0 |
| **Business** | Conversion | 10% trial → paid |

### Usability Testing Protocol

**The 5-User Rule**: 5 users uncover ~85% of usability problems.

#### Test Structure

```markdown
## Usability Test Plan

### Objectives
1. Can users complete [primary task] without help?
2. Is the [new feature] discoverable?
3. Are error messages understood?

### Participants
- 5 users matching primary persona
- Mix of tech comfort levels
- Recruited via [method]

### Tasks
1. "Find the transaction from last Tuesday and export it."
2. "Change your notification settings to weekly summary."
3. "What would you do if you saw this error?" [show error state]

### Metrics to Capture
- Task success (yes/no/partial)
- Time on task
- Errors made
- Assists needed
- Verbal feedback

### Analysis Template
| Task | P1 | P2 | P3 | P4 | P5 | Success Rate |
|------|----|----|----|----|----|--------------| 
| Find & export | ✅ | ✅ | ❌ | ✅ | ✅ | 80% |
```

---

## Configuration & Tools

### MCP Server Configuration

```json
// .claude/mcp.json
{
  "mcpServers": {
    "playwright": {
      "command": "npx",
      "args": ["-y", "@playwright/mcp-server"]
    }
  }
}
```

### Project Configuration

```json
// codev/config.json
{
  "project": {
    "name": "ProjectName",
    "protocol": "spider-ux-360"
  },
  "spider-ux-360": {
    "phases": ["Specify", "Plan", "Implement", "Defend", "Evaluate", "Review"],
    "breakpoints": {
      "mobile": 375,
      "tablet": 768,
      "desktop": 1024
    },
    "performance": {
      "lcp": 2500,
      "inp": 200,
      "cls": 0.1
    },
    "coverage": {
      "required": ["research", "content", "accessibility", "performance"],
      "optional": ["i18n", "advanced-motion"]
    }
  }
}
```

### TypeScript Configuration

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

### Recommended Tools

| Category | Tool | Purpose |
|----------|------|---------|
| **Testing** | Playwright | Browser automation, a11y testing |
| **Mocking** | MSW | Backend-less development |
| **Tokens** | Style Dictionary | Token management |
| **Components** | Storybook | Component development |
| **Visual Regression** | Chromatic | Visual testing |
| **A11y** | axe-core | Accessibility scanning |
| **Performance** | Lighthouse | Performance auditing |
| **Analytics** | Mixpanel/Amplitude | Event tracking |

---

## Templates & Quick References

### Quick Reference Card

```
┌─────────────────────────────────────────────────────────────────────────┐
│                 SPIDER-UX 360° QUICK REFERENCE                           │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                          │
│  🎯 USER RESEARCH                                                        │
│     • 1 persona, 1 primary JTBD, 5 top tasks, 5 assumptions              │
│                                                                          │
│  🧠 COGNITIVE                                                            │
│     • Self-evident • Familiar • Chunked (7±2) • Progressive              │
│                                                                          │
│  👆 INTERACTION                                                          │
│     • Big targets (44px) • Few choices • Looks like what it does         │
│                                                                          │
│  💬 FEEDBACK                                                             │
│     • Always show status • Prevent errors • Enable undo • End well       │
│                                                                          │
│  👁️ VISUAL                                                               │
│     • 60-30-10 color • Type scale • Spacing scale • Motion <400ms        │
│                                                                          │
│  ♿ ACCESSIBILITY                                                        │
│     • Keyboard works • Focus visible • Contrast 4.5:1 • Reduced motion   │
│                                                                          │
│  ⚡ PERFORMANCE                                                          │
│     • Feedback <100ms • Loading <1s • CLS <0.1 • Offline graceful        │
│                                                                          │
│  🔒 TRUST                                                                │
│     • No dark patterns • Confirm destructive • Explain data use          │
│                                                                          │
│  📝 CONTENT                                                              │
│     • Specific errors • Actionable empty states • No vague phrases       │
│                                                                          │
│  🌍 i18n                                                                 │
│     • 40% text expansion • Logical CSS properties • Intl APIs            │
│                                                                          │
│  📊 MEASUREMENT                                                          │
│     • Primary KPI defined • Events tracked • Usability test planned      │
│                                                                          │
└─────────────────────────────────────────────────────────────────────────┘
```

### Defense Gate Summary

| Gate | Checks | Pass Criteria |
|------|--------|---------------|
| **Static** | TypeScript, ESLint, a11y lint | 0 errors |
| **Content** | Vague phrases, error messages, empty states | All pass |
| **Accessibility** | Keyboard, focus, contrast, zoom, motion | All pass |
| **States** | All State Matrix states render | 100% coverage |
| **Behavior** | Feedback timing, cancellation, undo | Per contract |
| **Performance** | CLS, loading indicators, offline | Per budget |
| **Responsive** | Mobile, tablet, desktop, no overflow | All pass |
| **Forms** | Labels, errors, keyboards | All pass (if applicable) |
| **Motion** | Duration, reduced motion | All pass |

### File Templates Location

```
codev/templates/
├── spec-template.md           # Specification template
├── plan-template.md           # Planning template
├── review-template.md         # Review template
├── user-reality-pack.md       # Research template
├── content-contract.md        # UX writing template
├── behavior-contract.md       # Interaction template
├── measurement-contract.md    # Analytics template
└── usability-test-plan.md     # Testing template
```

---

## References

### Technical
- [Playwright MCP](https://github.com/microsoft/playwright-mcp)
- [Mock Service Worker](https://github.com/mswjs/msw)
- [Atomic Design](https://bradfrost.com/blog/post/atomic-web-design/)
- [WCAG Guidelines](https://www.w3.org/WAI/standards-guidelines/wcag/)

### UI/UX Principles
- **Don't Make Me Think** — Steve Krug
- **The Design of Everyday Things** — Don Norman
- **Laws of UX** — [lawsofux.com](https://lawsofux.com)
- **Nielsen's Heuristics** — Nielsen Norman Group
- **Refactoring UI** — Adam Wathan & Steve Schoger

### Research & Methods
- **User-Centered Design** — ISO 9241-210
- **Jobs To Be Done** — Clayton Christensen
- **The Mom Test** — Rob Fitzpatrick
- **Rocket Surgery Made Easy** — Steve Krug

### Motion Design
- **Material Design Motion** — Google
- **Disney's 12 Principles** — Frank Thomas & Ollie Johnston (adapted for UI)

### Accessibility
- **Inclusive Design Principles** — [inclusivedesignprinciples.org](https://inclusivedesignprinciples.org)
- **A11y Project** — [a11yproject.com](https://a11yproject.com)

---

## Changelog

### v2.0 (360° Edition)
- Added User Research & Discovery section
- Added Typography System
- Added Motion & Animation Design
- Added complete Accessibility section (keyboard, screen reader, cognitive)
- Added Performance & Resilience section
- Added Trust, Privacy & Ethical Design
- Added Internationalization & Localization
- Added Forms Protocol
- Added Complex Pattern Library
- Added Design System Governance
- Added Measurement & Analytics section
- Integrated Content Contract into Specify phase
- Integrated Behavior Contract into Specify phase
- Added Coverage Declaration requirement
- Expanded Defense Gates to cover all areas
- Added User Reality Pack requirement

### v1.0 (Original)
- Initial SPIDER-UX protocol
- Color system
- Basic accessibility (color focus)
- State Matrix
- Defense Gate concept

---

> **The Final Principle**: *This protocol is a tool, not a cage. Adapt it to your context, learn from each project, and remember: we build for humans, verify with machines, and improve with evidence. The goal is not to follow the protocol perfectly—it's to ship products that respect people's time, attention, and intelligence.*