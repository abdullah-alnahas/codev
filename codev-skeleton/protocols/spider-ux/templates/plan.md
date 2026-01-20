# Plan: [Feature Name]

**Spec ID**: ####
**Protocol**: SPIDER-UX
**Created**: YYYY-MM-DD
**Status**: draft | approved | in-progress | completed

---

## Overview

**Objective**: [One-line summary of what this plan delivers]

**Related Spec**: `codev/specs/####-feature-name.md`

### Tech Stack

| Category | Technology |
|----------|------------|
| Framework | Next.js / React |
| Language | TypeScript (Strict) |
| Server State | TanStack Query |
| Client State | Zustand |
| Styling | Tailwind CSS |
| Testing | Playwright MCP |
| Mocking | MSW 2.0 |

---

## Component Architecture

### Atomic Design Hierarchy

```
Page: [PageName]
├── Templates
│   └── [LayoutTemplate]
├── Organisms
│   ├── [ComplexComponent1]
│   └── [ComplexComponent2]
├── Molecules
│   ├── [CompoundComponent1]
│   └── [CompoundComponent2]
└── Atoms
    ├── [Button]
    ├── [Input]
    └── [Icon]
```

### File Structure

```
src/
├── types/
│   └── [entity].ts              # Zod schemas & types
├── mocks/
│   ├── browser.ts               # MSW browser setup
│   ├── handlers/
│   │   └── [entity].ts          # Entity-specific handlers
│   └── data/
│       └── [entity].ts          # Mock data factories
├── components/
│   ├── atoms/
│   │   └── [Component]/
│   │       ├── index.tsx
│   │       └── [Component].test.tsx
│   ├── molecules/
│   ├── organisms/
│   └── templates/
├── hooks/
│   └── use[Entity].ts           # React Query hooks
└── pages/
    └── [route]/
        └── index.tsx
```

---

## Implementation Phases

### Phase 1: Data Layer Foundation

**Status**: `pending` | `in-progress` | `completed`

**Objective**: Establish type-safe data contracts and mock infrastructure

**Tasks**:
- [ ] Create Zod schema in `src/types/[entity].ts`
- [ ] Export TypeScript types from schema
- [ ] Create mock data factory in `src/mocks/data/[entity].ts`
- [ ] Implement MSW handlers with smart mock behavior:
  - [ ] Success response with 800ms delay
  - [ ] Empty state scenario
  - [ ] Error scenario (500)
  - [ ] Not found scenario (404)
- [ ] Configure MSW browser worker
- [ ] Verify mocks intercept requests

**Files to Create/Modify**:
- `src/types/[entity].ts` (new)
- `src/mocks/data/[entity].ts` (new)
- `src/mocks/handlers/[entity].ts` (new)
- `src/mocks/browser.ts` (modify)

**Exit Criteria**:
- [ ] Schema validates sample data
- [ ] MSW intercepts `/api/[resource]` requests
- [ ] All scenarios (success, empty, error) return correct responses
- [ ] TypeScript compiles without errors

---

### Phase 2: Atomic Components

**Status**: `pending` | `in-progress` | `completed`

**Depends on**: Phase 1

**Objective**: Build foundational UI atoms with semantic markup

**Tasks**:
- [ ] Create `[Atom1]` component:
  - [ ] Implement with proper ARIA attributes
  - [ ] Add `data-testid` attribute
  - [ ] Handle all visual states (default, hover, disabled, loading)
  - [ ] Ensure accessibility compliance
- [ ] Create `[Atom2]` component:
  - [ ] [Same checklist]
- [ ] Document component props with TypeScript
- [ ] Add Storybook stories (if using)

**Semantic Requirements**:
```typescript
// Every interactive atom MUST have:
<button
  role="button"
  aria-label="[Descriptive label]"
  data-testid="[component]-[action]-button"
  disabled={isDisabled}
>
```

**Files to Create**:
- `src/components/atoms/[Atom1]/index.tsx`
- `src/components/atoms/[Atom2]/index.tsx`

**Exit Criteria**:
- [ ] All atoms render correctly in isolation
- [ ] Semantic attributes present
- [ ] Keyboard navigation works
- [ ] Visual states match design

---

### Phase 3: Molecule Components

**Status**: `pending` | `in-progress` | `completed`

**Depends on**: Phase 2

**Objective**: Compose atoms into functional molecules

**Tasks**:
- [ ] Create `[Molecule1]` component:
  - [ ] Compose required atoms
  - [ ] Implement local state (if any)
  - [ ] Handle form validation (if applicable)
  - [ ] Add proper ARIA relationships
- [ ] Create `[Molecule2]` component:
  - [ ] [Same checklist]

**Files to Create**:
- `src/components/molecules/[Molecule1]/index.tsx`
- `src/components/molecules/[Molecule2]/index.tsx`

**Exit Criteria**:
- [ ] Molecules compose atoms correctly
- [ ] Form validation works (if applicable)
- [ ] Accessibility relationships correct

---

### Phase 4: Organism Components

**Status**: `pending` | `in-progress` | `completed`

**Depends on**: Phase 3

**Objective**: Build complex domain-specific components

**Tasks**:
- [ ] Create `[Organism]` component:
  - [ ] Compose molecules and atoms
  - [ ] Integrate with React Query hooks
  - [ ] Handle all State Matrix states:
    - [ ] Initial/Loading state (skeleton)
    - [ ] Success state (content)
    - [ ] Empty state (illustration)
    - [ ] Error state (error boundary)
  - [ ] Implement responsive behavior

**Files to Create**:
- `src/components/organisms/[Organism]/index.tsx`
- `src/components/organisms/[Organism]/Skeleton.tsx`
- `src/components/organisms/[Organism]/EmptyState.tsx`
- `src/components/organisms/[Organism]/ErrorState.tsx`

**Exit Criteria**:
- [ ] All State Matrix states render correctly
- [ ] Data flows from React Query
- [ ] Error boundaries catch failures
- [ ] Loading skeleton displays

---

### Phase 5: Page Integration

**Status**: `pending` | `in-progress` | `completed`

**Depends on**: Phase 4

**Objective**: Assemble complete page with data fetching

**Tasks**:
- [ ] Create `use[Entity]` React Query hook
- [ ] Build page template with layout
- [ ] Integrate organism components
- [ ] Implement responsive layout rules
- [ ] Add page-level error boundary
- [ ] Configure metadata (title, description)

**Files to Create/Modify**:
- `src/hooks/use[Entity].ts` (new)
- `src/pages/[route]/index.tsx` (new/modify)
- `src/components/templates/[Layout].tsx` (new)

**Exit Criteria**:
- [ ] Page renders with mock data
- [ ] All breakpoints work correctly
- [ ] Navigation functions
- [ ] SEO metadata present

---

### Phase 6: Defense (Mandatory)

**Status**: `pending` | `in-progress` | `completed`

**Depends on**: Phase 5

**Objective**: Prove implementation correctness through automated verification

**Playwright MCP Verification Checklist**:

#### State Matrix Verification
- [ ] **Initial State**: Skeleton renders on page load
- [ ] **Loading State**: Spinner visible during fetch (use 800ms delay)
- [ ] **Success State**: Content renders with mock data
- [ ] **Empty State**: Empty illustration with `?scenario=empty`
- [ ] **Error State**: Error message with retry button using `?scenario=error`

#### Semantic Contract Verification
- [ ] All buttons have correct `role="button"`
- [ ] All inputs have associated labels
- [ ] `data-testid` attributes present on all interactive elements
- [ ] ARIA attributes correct

#### Responsive Layout Verification
- [ ] Mobile (375px):
  - [ ] [Element] is hidden/visible per spec
  - [ ] No horizontal overflow
  - [ ] Touch targets adequate (44px minimum)
- [ ] Tablet (768px):
  - [ ] Layout transitions correctly
- [ ] Desktop (1024px):
  - [ ] Full layout renders

#### Console Error Check
- [ ] Zero console errors
- [ ] No 404 requests
- [ ] No uncaught exceptions

**Defense Script**:
```bash
# scripts/defend.sh
NEXT_PUBLIC_USE_MOCKS=true npm run dev &
npx wait-on http://localhost:3000
# Playwright MCP verification runs here
kill $!
```

**Exit Criteria**:
- [ ] All Playwright assertions pass
- [ ] Zero console errors
- [ ] All State Matrix states verified
- [ ] Responsive layout rules pass
- [ ] Self-healing loop complete (if needed)

---

### Phase 7: Demo Deployment

**Status**: `pending` | `in-progress` | `completed`

**Depends on**: Phase 6

**Objective**: Deploy backend-less demo for human evaluation

**Tasks**:
- [ ] Build production bundle with mocks:
  ```bash
  NEXT_PUBLIC_USE_MOCKS=true npm run build
  ```
- [ ] Deploy to preview URL (Vercel/GitHub Pages)
- [ ] Generate review handover document
- [ ] Verify demo works as expected

**Demo URL**: [To be filled after deployment]

**Exit Criteria**:
- [ ] Demo accessible at preview URL
- [ ] All features work without backend
- [ ] Review handover document complete

---

## Consultation Log

### Plan Review Consultation (YYYY-MM-DD)

**GPT-5 Codex Feedback:**
- [Key feedback point 1]
- [Key feedback point 2]

**Gemini Pro Feedback:**
- [Key feedback point 1]
- [Key feedback point 2]

**Changes Made:**
- [Change 1 based on feedback]
- [Change 2 based on feedback]

---

## Risk Mitigation

| Risk | Likelihood | Impact | Mitigation |
|------|------------|--------|------------|
| MSW handler complexity | Medium | Medium | Start with simple handlers, add scenarios incrementally |
| Accessibility gaps | Medium | High | Verify with axe-core during Defense phase |
| Responsive flakiness | Medium | Medium | Use tolerance thresholds, container queries |

---

## Amendment History

[TICK amendments will be appended here in reverse chronological order]

<!--
### TICK-001: [Title] (YYYY-MM-DD)

**Changes**:
- [Phase added]: [Description]
- [Implementation steps]: [What was updated]

**Review**: See `reviews/####-name-tick-001.md`
-->
