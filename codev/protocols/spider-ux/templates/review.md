# Review: [Feature Name]

**Spec ID**: ####
**Protocol**: SPIDER-UX
**Completed**: YYYY-MM-DD
**Demo URL**: [https://project-demo.vercel.app/...]

---

## Executive Summary

[One paragraph summary of what was built, key decisions made, and overall outcome]

---

## Implementation Summary

### What Was Built

| Component | Type | Location | Status |
|-----------|------|----------|--------|
| [Component1] | Organism | `src/components/organisms/...` | Complete |
| [Component2] | Molecule | `src/components/molecules/...` | Complete |
| [Hook] | Hook | `src/hooks/...` | Complete |

### Files Changed

```
src/
├── types/[entity].ts           # New - Zod schema
├── mocks/
│   ├── handlers/[entity].ts    # New - MSW handlers
│   └── data/[entity].ts        # New - Mock data
├── components/
│   ├── atoms/...               # New/Modified
│   ├── molecules/...           # New/Modified
│   └── organisms/...           # New/Modified
├── hooks/use[Entity].ts        # New - React Query
└── pages/[route]/index.tsx     # New/Modified
```

### Lines of Code

| Category | Added | Modified | Removed |
|----------|-------|----------|---------|
| Components | X | X | X |
| Tests | X | X | X |
| Types | X | X | X |
| Mocks | X | X | X |
| **Total** | **X** | **X** | **X** |

---

## Defense Phase Results

### Playwright MCP Verification

| Test Category | Assertions | Passed | Failed |
|---------------|------------|--------|--------|
| State Matrix | X | X | X |
| Semantic Contract | X | X | X |
| Responsive Layout | X | X | X |
| Console Errors | X | X | X |
| **Total** | **X** | **X** | **X** |

### State Matrix Coverage

| State | Verified | Notes |
|-------|----------|-------|
| Initial | Yes/No | [Any issues or observations] |
| Loading | Yes/No | [Skeleton renders correctly, 800ms delay] |
| Success | Yes/No | [Content renders with mock data] |
| Empty | Yes/No | [Empty illustration displays] |
| Error | Yes/No | [Error message and retry work] |

### Responsive Verification

| Breakpoint | Width | Layout Correct | Overflow Check |
|------------|-------|----------------|----------------|
| Mobile | 375px | Yes/No | Pass/Fail |
| Tablet | 768px | Yes/No | Pass/Fail |
| Desktop | 1024px | Yes/No | Pass/Fail |

### Self-Healing Loop

**Iterations Required**: X

| Iteration | Issue Found | Fix Applied |
|-----------|-------------|-------------|
| 1 | [Issue description] | [Fix description] |
| 2 | [Issue description] | [Fix description] |

---

## Accessibility Report

### Semantic Compliance

| Requirement | Status | Notes |
|-------------|--------|-------|
| All buttons have `role="button"` | Pass/Fail | |
| All inputs have labels | Pass/Fail | |
| `data-testid` on interactive elements | Pass/Fail | |
| ARIA attributes correct | Pass/Fail | |
| Keyboard navigation works | Pass/Fail | |
| Focus management correct | Pass/Fail | |

### axe-core Results

- Critical Issues: X
- Serious Issues: X
- Moderate Issues: X
- Minor Issues: X

---

## MSW Mock Implementation

### Handlers Created

| Endpoint | Method | Scenarios | Latency |
|----------|--------|-----------|---------|
| `/api/[resource]` | GET | success, empty, error | 800ms |
| `/api/[resource]/:id` | GET | success, not-found | 300ms |
| `/api/[resource]` | POST | success, validation-error | 500ms |

### Smart Mock Features

- [ ] Realistic latency simulation
- [ ] Error injection capability
- [ ] Empty state simulation
- [ ] Pagination support
- [ ] Rate limiting simulation

---

## Deviations from Plan

### Planned vs Actual

| Aspect | Planned | Actual | Reason |
|--------|---------|--------|--------|
| [Item] | [What was planned] | [What was done] | [Why it changed] |

### Scope Changes

- [Any features added/removed during implementation]

---

## Performance Metrics

| Metric | Target | Actual | Status |
|--------|--------|--------|--------|
| First Contentful Paint | < 1.5s | Xs | Pass/Fail |
| Time to Interactive | < 3s | Xs | Pass/Fail |
| Largest Contentful Paint | < 2.5s | Xs | Pass/Fail |

---

## Consultation Summary

### GPT-5 Codex Review

**Key Feedback:**
- [Feedback point 1]
- [Feedback point 2]

**Addressed:**
- [How feedback was incorporated]

### Gemini Pro Review

**Key Feedback:**
- [Feedback point 1]
- [Feedback point 2]

**Addressed:**
- [How feedback was incorporated]

---

## Lessons Learned

### What Went Well

1. **[Category]**: [Description of what worked effectively]
2. **[Category]**: [Description]
3. **[Category]**: [Description]

### Challenges Encountered

1. **[Challenge]**: [Description of issue and how it was resolved]
2. **[Challenge]**: [Description]
3. **[Challenge]**: [Description]

### Process Improvements

1. **[Improvement]**: [Suggested change to SPIDER-UX protocol]
2. **[Improvement]**: [Suggested change]

---

## Recommendations

### Immediate Follow-ups

- [ ] [Action item with owner]
- [ ] [Action item]

### Future Enhancements

- [ ] [Enhancement idea for future TICK amendment]
- [ ] [Enhancement idea]

### Technical Debt

| Item | Priority | Description |
|------|----------|-------------|
| [Item] | High/Medium/Low | [What needs improvement] |

---

## Demo Testing Instructions

### Prerequisites

```bash
# Ensure mocks are enabled
NEXT_PUBLIC_USE_MOCKS=true
```

### Test Scenarios

1. **Success State**
   - Navigate to [URL]
   - Observe loading skeleton
   - Wait for content to appear

2. **Empty State**
   - Navigate to [URL]?scenario=empty
   - Verify empty illustration displays

3. **Error State**
   - Navigate to [URL]?scenario=error
   - Verify error message displays
   - Click retry button

4. **Responsive Testing**
   - Use browser DevTools to resize
   - Test at 375px, 768px, 1024px
   - Verify layout rules from spec

---

## Sign-off

| Role | Name | Date | Approved |
|------|------|------|----------|
| Developer | [Name] | YYYY-MM-DD | Yes/No |
| Reviewer | [Name] | YYYY-MM-DD | Yes/No |
| Stakeholder | [Name] | YYYY-MM-DD | Yes/No |

---

## Appendix

### Console Output (Defense Phase)

```
[Paste relevant Playwright output here]
```

### Screenshots

[Include key screenshots from Defense verification]
