# Specification: [Feature Name]

**Spec ID**: ####
**Protocol**: SPIDER-UX
**Created**: YYYY-MM-DD
**Status**: draft | reviewing | approved

---

## Problem Statement

### Context
[Describe the current situation and why this feature is needed]

### User Story
As a [user type], I want to [action] so that [benefit].

### Success Criteria
- [ ] [Measurable criterion 1]
- [ ] [Measurable criterion 2]
- [ ] [Measurable criterion 3]

---

## Data Contract

### Primary Schema

```typescript
// specs/data/[entity]-schema.ts
import { z } from 'zod';

export const [Entity]Schema = z.object({
  id: z.string().uuid(),
  // Define all fields with proper types
  // Include nullable fields, enums, nested objects
  createdAt: z.string().datetime(),
  updatedAt: z.string().datetime(),
});

export type [Entity] = z.infer<typeof [Entity]Schema>;
```

### API Contract

| Endpoint | Method | Request | Response | Error Codes |
|----------|--------|---------|----------|-------------|
| `/api/[resource]` | GET | - | `[Entity][]` | 404, 500 |
| `/api/[resource]/:id` | GET | - | `[Entity]` | 404, 500 |
| `/api/[resource]` | POST | `Partial<[Entity]>` | `[Entity]` | 400, 500 |

### Edge Cases
- [ ] Empty list response
- [ ] Null/undefined fields
- [ ] Pagination metadata
- [ ] Rate limiting

---

## Semantic Contract

### Interactive Elements

| Element | Role | Label | Location | Behavior |
|---------|------|-------|----------|----------|
| Save button | `button` | "Save" | Bottom-right | Transitions state to "Saving" |
| Cancel button | `button` | "Cancel" | Bottom-right | Returns to previous state |
| Form field | `textbox` | "[Field name]" | Form area | Validates on blur |

### Accessibility Requirements
- [ ] All buttons have descriptive labels
- [ ] Form fields have associated labels
- [ ] Error messages are announced to screen readers
- [ ] Focus management on modal open/close
- [ ] Keyboard navigation support

### Test IDs

```typescript
// All interactive elements must have data-testid
data-testid="[component]-[action]-button"
data-testid="[component]-[field]-input"
data-testid="[component]-error-message"
```

---

## State Matrix

| State | Trigger | Data Requirement | Visual Indicator | MSW Scenario |
|-------|---------|------------------|------------------|--------------|
| **Initial** | Page load | None | Skeleton loader | Default |
| **Loading** | Data fetch started | None | Spinner/skeleton | `?delay=800` |
| **Success** | Data received (200) | Items > 0 | Content rendered | Default |
| **Empty** | Data received (200) | Items = 0 | Empty illustration | `?scenario=empty` |
| **Error** | Request failed | Error object | Error message + retry | `?scenario=error` |
| **Saving** | Form submit | Optimistic update | Disabled inputs + spinner | POST endpoint |

### State Transitions

```
Initial → Loading → Success
                  → Empty
                  → Error → (Retry) → Loading

Success → (User Action) → Saving → Success
                                 → Error
```

---

## Responsive Layout Schema

### Breakpoints

| Breakpoint | Width | Target Devices |
|------------|-------|----------------|
| Mobile | 375px | iPhone SE, small phones |
| Tablet | 768px | iPad, tablets |
| Desktop | 1024px+ | Laptops, monitors |

### Layout Rules

```yaml
layout_rules:
  - element: "[element_name]"
    data_testid: "[testid]"
    breakpoints:
      mobile:
        visibility: "visible" | "hidden"
        position: "top" | "bottom" | "sidebar"
      tablet:
        visibility: "visible" | "hidden"
        position: "..."
      desktop:
        visibility: "visible" | "hidden"
        position: "..."
```

### Component Behavior by Breakpoint

| Component | Mobile | Tablet | Desktop |
|-----------|--------|--------|---------|
| Navigation | Hamburger menu | Hamburger menu | Sidebar |
| Data table | Card view | Compact table | Full table |
| Actions | Bottom sheet | Dropdown | Inline buttons |

---

## Visual Specification

### Wireframes
[Link to Figma/design files or ASCII wireframes]

### Component Hierarchy

```
Page
├── Header (Organism)
│   ├── Logo (Atom)
│   ├── Navigation (Molecule)
│   └── UserMenu (Molecule)
├── Main Content (Template)
│   ├── PageTitle (Atom)
│   ├── Filters (Molecule)
│   └── DataGrid (Organism)
│       ├── DataRow (Molecule)
│       │   └── Cell (Atom)
│       └── Pagination (Molecule)
└── Footer (Organism)
```

### Design Tokens

| Token | Value | Usage |
|-------|-------|-------|
| `--color-primary` | `#3B82F6` | Primary actions |
| `--color-error` | `#EF4444` | Error states |
| `--spacing-md` | `16px` | Standard spacing |

---

## Technical Constraints

### Browser Support
- [ ] Chrome 90+
- [ ] Firefox 88+
- [ ] Safari 14+
- [ ] Edge 90+

### Performance Requirements
- [ ] First Contentful Paint < 1.5s
- [ ] Time to Interactive < 3s
- [ ] Largest Contentful Paint < 2.5s

### Dependencies
- React 18+
- TypeScript 5+
- MSW 2.0+
- Playwright MCP

---

## Open Questions

### Critical (Blocks Progress)
- [ ] [Question that must be answered before implementation]

### Important (Affects Design)
- [ ] [Question that influences architecture decisions]

### Nice-to-Know (Optimization)
- [ ] [Question for future enhancement]

---

## Consultation Log

### Initial Consultation (YYYY-MM-DD)

**GPT-5 Codex Feedback:**
- [Key feedback point 1]
- [Key feedback point 2]

**Gemini Pro Feedback:**
- [Key feedback point 1]
- [Key feedback point 2]

**Changes Made:**
- [Change 1 based on feedback]
- [Change 2 based on feedback]

### Post-Review Consultation (YYYY-MM-DD)

[Document subsequent consultation rounds]

---

## Amendments

[TICK amendments will be appended here in reverse chronological order]

<!--
### TICK-001: [Title] (YYYY-MM-DD)

**Summary**: [One-line description]

**Problem Addressed**:
[Why this amendment was needed]

**Spec Changes**:
- [Section]: [What changed]

**Plan Changes**:
- [Phase/steps]: [What was added/modified]

**Review**: See `reviews/####-name-tick-001.md`
-->
