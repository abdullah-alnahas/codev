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

## Color, Theme & Visual Design Principles

**Color is not decoration—it's communication.** Every color choice carries meaning, affects usability, and impacts accessibility. These principles are as mandatory as the UX laws above.

### Foundational Color Theory

#### The 60-30-10 Rule

| Proportion | Role | Application |
|------------|------|-------------|
| **60%** | Dominant | Background, large surfaces (neutrals: white, light gray, dark gray) |
| **30%** | Secondary | Cards, containers, supporting elements (brand secondary, neutral variants) |
| **10%** | Accent | CTAs, highlights, interactive elements (brand primary, semantic colors) |

**Why it works**: Creates visual hierarchy without cognitive overload. The eye naturally organizes content by color proportion.

#### HSB Over Hex (Think in HSB)

| Model | Best For | Why |
|-------|----------|-----|
| **HSB/HSL** | Design decisions | Intuitive: "make it darker" = reduce B; "make it more vivid" = increase S |
| **Hex/RGB** | Code implementation | Machine-readable, but unintuitive for humans |

**Practical tip**: Design in HSB, convert to Hex for code. When adjusting colors, think "Hue, Saturation, Brightness" not "Red, Green, Blue."

#### Never Pure Black or White

| Avoid | Use Instead | Why |
|-------|-------------|-----|
| `#000000` | `#1A1A1A`, `#0D1117` | Pure black feels harsh, unnatural, creates excessive contrast |
| `#FFFFFF` | `#FAFAFA`, `#F5F5F5` | Pure white causes eye strain, especially on screens |

**The 90% rule**: Maximum brightness ~95%, minimum brightness ~5%. This mimics natural light conditions.

### Color Psychology (With Cultural Caveats)

| Color | Western Association | Cultural Variance | UI Application |
|-------|---------------------|-------------------|----------------|
| **Red** | Danger, urgency, error | China: luck, prosperity | Destructive actions, errors, alerts |
| **Green** | Success, go, nature | Some cultures: jealousy | Success states, confirmations, positive actions |
| **Blue** | Trust, calm, professional | Universal positive | Primary brand, links, information |
| **Yellow** | Warning, attention | Caution universally | Warnings (not errors), highlights |
| **Orange** | Energy, warmth | Less universal | Secondary CTAs, notifications |
| **Purple** | Luxury, creativity | Mourning in some cultures | Premium features, creative tools |
| **Pink** | Playfulness, care, modernity | Varies widely | Consumer apps, younger demographics |
| **Neutral grays** | Sophistication, balance | Universal | Enterprise, minimalist design |

**Critical caveat**: Color meaning varies dramatically across cultures. Red means luck in China, mourning in South Africa. Research your audience.

**Design implication**: Never rely on color alone. Always pair with icons, text, or patterns for meaning.

#### Start with One Color, Then Expand

Don't pick a palette—pick **one** brand/accent color and derive everything else:

1. **Choose your primary accent** based on brand/emotion
2. **Tint your neutrals** with that hue (warm grays from orange, cool grays from blue)
3. **Generate semantic colors** that harmonize (success green, error red adjusted to match palette saturation)

This creates subtle cohesion invisible to the conscious eye but felt intuitively.

#### Test in Grayscale

**MANDATORY CHECK**: Desaturate your design completely. If hierarchy and meaning disappear, you're over-relying on color.

- Structure should survive without color
- Important elements should still stand out by size, weight, position
- If everything looks equally gray, you have a hierarchy problem

### Accessibility is Non-Negotiable

#### WCAG Contrast Requirements

| Element Type | Minimum Ratio | Target Ratio | Test Tool |
|--------------|---------------|--------------|-----------|
| **Body text** (< 18px) | 4.5:1 | 7:1 (AAA) | WebAIM Contrast Checker |
| **Large text** (≥ 18px or 14px bold) | 3:1 | 4.5:1 (AAA) | Stark Figma Plugin |
| **UI components** (icons, borders) | 3:1 | 4.5:1 | axe DevTools |
| **Focus indicators** | 3:1 | 4.5:1 | Manual inspection |

**MANDATORY**: Every color combination in your UI must pass contrast checks before Defense phase.

#### Color Blindness Considerations

| Type | Affected Population | Colors Confused | Design Solution |
|------|---------------------|-----------------|-----------------|
| **Deuteranopia** (red-green) | 6% of males | Red ↔ Green | Never use red/green alone for status |
| **Protanopia** (red-green) | 2% of males | Red ↔ Green | Add icons: ✓ for success, ✕ for error |
| **Tritanopia** (blue-yellow) | 0.01% | Blue ↔ Yellow | Use patterns in addition to color |

**The Rule**: Color should enhance meaning, never be the only carrier of meaning.

```typescript
// WRONG: Color is the only differentiator
<Badge color="green">Active</Badge>
<Badge color="red">Inactive</Badge>

// CORRECT: Color + icon + text
<Badge color="green" icon={<CheckIcon />}>Active</Badge>
<Badge color="red" icon={<XIcon />}>Inactive</Badge>
```

### Building a Color System (Design Tokens)

#### Three-Layer Token Architecture

```
┌─────────────────────────────────────────────────────────────┐
│  LAYER 1: PRIMITIVE TOKENS (Raw Values)                      │
│  blue-500: #3B82F6                                           │
│  gray-100: #F3F4F6                                           │
│  red-600: #DC2626                                            │
├─────────────────────────────────────────────────────────────┤
│  LAYER 2: SEMANTIC TOKENS (Intent)                           │
│  color-primary: {blue-500}                                   │
│  color-danger: {red-600}                                     │
│  color-surface: {gray-100}                                   │
├─────────────────────────────────────────────────────────────┤
│  LAYER 3: COMPONENT TOKENS (Context)                         │
│  button-primary-bg: {color-primary}                          │
│  alert-error-bg: {color-danger}                              │
│  card-bg: {color-surface}                                    │
└─────────────────────────────────────────────────────────────┘
```

**Why three layers**:
- **Primitive**: Change the hex once, updates everywhere
- **Semantic**: Swap meanings without touching components
- **Component**: Override specific contexts without breaking system

#### Generating Color Scales

For each base color, generate a scale of 10 shades:

| Scale Step | Lightness | Use Case |
|------------|-----------|----------|
| 50 | ~97% | Subtle backgrounds |
| 100 | ~95% | Hover backgrounds |
| 200 | ~90% | Active backgrounds |
| 300 | ~80% | Borders |
| 400 | ~65% | Placeholder text |
| 500 | ~50% | **Base color** (icons, secondary text) |
| 600 | ~40% | Primary text, buttons |
| 700 | ~30% | Hover states on dark |
| 800 | ~20% | Headings |
| 900 | ~10% | High contrast text |

**Tool**: Use [Tailwind CSS Color Generator](https://uicolors.app/create) or similar.

#### Interactive State Colors

Every interactive element needs a color system for states:

| State | Transformation | Example (Primary Blue #3B82F6) |
|-------|----------------|-------------------------------|
| **Default** | Base color | `#3B82F6` |
| **Hover** | Darken 10% or increase saturation | `#2563EB` |
| **Active/Pressed** | Darken 15% | `#1D4ED8` |
| **Focus** | Add ring/outline | `ring-2 ring-blue-500 ring-offset-2` |
| **Disabled** | Reduce opacity to 50% | `#3B82F6` at 50% opacity |

### Light/Dark Mode (The Right Way)

#### Don't Just Invert

| Wrong Approach | Right Approach |
|----------------|----------------|
| Invert all colors | Design intentionally for each mode |
| White → Black, Black → White | Background: `#FFFFFF` → `#0D1117` |
| Same saturation in both | Reduce saturation ~10-15% in dark mode |

**Why saturation matters**: Highly saturated colors on dark backgrounds cause visual vibration and eye strain.

#### The Elevation System

In dark mode, use lightness to convey elevation (closer = lighter):

| Elevation Level | Light Mode | Dark Mode | Use Case |
|-----------------|------------|-----------|----------|
| **Base (0)** | `#FFFFFF` | `#0D1117` | Page background |
| **Elevated (1)** | `#F9FAFB` | `#161B22` | Cards, panels |
| **Elevated (2)** | `#F3F4F6` | `#21262D` | Dropdowns, modals |
| **Elevated (3)** | `#E5E7EB` | `#30363D` | Hover states |

**Principle**: In dark mode, "closer to user" = "lighter." This mimics how light falls on physical surfaces.

#### Semantic Color Mapping

```typescript
// tokens/colors.ts
export const lightTheme = {
  bg: { primary: '#FFFFFF', secondary: '#F9FAFB', tertiary: '#F3F4F6' },
  text: { primary: '#111827', secondary: '#4B5563', tertiary: '#9CA3AF' },
  border: { default: '#E5E7EB', strong: '#D1D5DB' },
  status: { success: '#059669', error: '#DC2626', warning: '#D97706' }
};

export const darkTheme = {
  bg: { primary: '#0D1117', secondary: '#161B22', tertiary: '#21262D' },
  text: { primary: '#F0F6FC', secondary: '#8B949E', tertiary: '#6E7681' },
  border: { default: '#30363D', strong: '#484F58' },
  status: { success: '#3FB950', error: '#F85149', warning: '#D29922' }
};
```

### Visual Hierarchy Through Color

#### The Squint Test

Blur your vision (or literally squint) at your UI:
- Can you still identify the primary action?
- Does the hierarchy remain clear?
- Are important elements visually distinct?

**If the answer is "no," your color contrast is insufficient for hierarchy.**

#### Hierarchy Techniques

| Technique | Application | Example |
|-----------|-------------|---------|
| **Saturation contrast** | Draw attention to CTAs | Muted grays + saturated blue button |
| **Lightness contrast** | Separate content areas | Light cards on slightly darker background |
| **Temperature contrast** | Create visual interest | Warm accent on cool background |
| **Size + color** | Reinforce importance | Large heading in brand color |

### Typography & Color Interaction

| Text Type | Color Guidelines |
|-----------|-----------------|
| **Headings** | Can use brand colors (maintain 4.5:1 contrast) |
| **Body text** | Neutral dark (gray-900 or gray-800)—never colored |
| **Secondary text** | Neutral medium (gray-600 or gray-500) |
| **Links** | Distinct from body (traditionally blue, underlined) |
| **Disabled text** | Low contrast (gray-400) signals non-interactivity |

**The rule**: Body text is always neutral. Color in body text implies meaning (link, error, etc.).

### Color Harmony Types (Detailed)

Understanding color relationships is essential. Each harmony type creates a different feeling:

#### Monochromatic Harmony
*One hue, multiple saturations and values*

```
Example: Navy → Blue → Sky Blue → Pale Blue
```

| Aspect | Details |
|--------|---------|
| **Feeling** | Cohesive, calm, sophisticated, minimal |
| **UI use case** | Enterprise software, content-heavy interfaces, establishing visual quiet |
| **Strength** | Almost impossible to clash; inherently unified |
| **Risk** | Can feel flat or boring without strong value contrast |

**Pro tip**: Push the value range wider than you think—from very dark to very light—to maintain visual interest.

#### Analogous Harmony
*2-4 colors adjacent on the wheel (within ~60°)*

```
Example: Blue → Blue-Green → Green
Example: Orange → Red-Orange → Red
```

| Aspect | Details |
|--------|---------|
| **Feeling** | Natural, serene, comfortable (occurs in nature—sunsets, forests, oceans) |
| **UI use case** | Brands wanting warmth or organic feel; apps prioritizing calm |
| **Strength** | Naturally pleasing; low risk of clashing |
| **Risk** | Can lack contrast; needs a clear dominant color |

**Pro tip**: Choose one color to dominate (~60%), one to support (~30%), use third sparingly (~10%). Ensure sufficient value contrast.

#### Complementary Harmony
*Two colors directly opposite on the wheel (180° apart)*

```
Example: Blue ↔ Orange
Example: Red ↔ Green
Example: Purple ↔ Yellow
```

| Aspect | Details |
|--------|---------|
| **Feeling** | High energy, vibrant, dynamic tension |
| **UI use case** | CTAs that must pop; sports/entertainment brands; drawing immediate attention |
| **Strength** | Maximum contrast; naturally eye-catching |
| **Risk** | Can feel garish or overwhelming; accessibility issues (especially red-green) |

**Pro tip**: Never use complements at full saturation in equal amounts. Let one dominate (muted/large area) and use the other as a sharp accent (vibrant/small area). This is **dominant-subordinate** balance.

#### Split-Complementary Harmony
*One base color + the two colors adjacent to its complement*

```
Example: Blue + Yellow-Orange + Red-Orange
Example: Green + Red-Purple + Red-Orange
```

| Aspect | Details |
|--------|---------|
| **Feeling** | Vibrant but more nuanced than straight complementary |
| **UI use case** | Brands wanting energy with more sophistication |
| **Strength** | High contrast but less tension; harder to mess up than pure complements |
| **Risk** | Three colors require careful balance |

**Pro tip**: Use the base color as your dominant, and the two split colors as accents. This gives flexibility while maintaining vibrancy.

#### Triadic Harmony
*Three colors equally spaced on the wheel (120° apart)*

```
Example: Red + Yellow + Blue (primary triad)
Example: Orange + Green + Purple (secondary triad)
```

| Aspect | Details |
|--------|---------|
| **Feeling** | Bold, playful, balanced tension |
| **UI use case** | Children's products, creative tools, brands wanting boldness |
| **Strength** | Visually rich; balanced energy |
| **Risk** | Easily overwhelming; can feel childish or chaotic if not managed |

**Pro tip**: Triadic harmony almost always requires heavy desaturation of at least two colors. One vibrant, two muted. Otherwise it looks like a circus.

#### Tetradic (Rectangle) Harmony
*Four colors forming a rectangle on the wheel (two complementary pairs)*

```
Example: Blue + Orange + Red + Green
```

| Aspect | Details |
|--------|---------|
| **Feeling** | Rich, complex, full-spectrum |
| **UI use case** | Complex dashboards with many categories; data visualization |
| **Strength** | Maximum variety while maintaining structure |
| **Risk** | Very hard to balance; easily chaotic |

**Pro tip**: Use one dominant color, one secondary, and the other two as accents only. Unify with consistent saturation and value across all four.

#### Square Harmony
*Four colors equally spaced (90° apart)*

```
Example: Red + Yellow-Green + Blue + Red-Purple
```

| Aspect | Details |
|--------|---------|
| **Feeling** | Balanced, dynamic, full |
| **UI use case** | Data visualization with distinct categories |
| **Strength** | Even distribution of warm and cool |
| **Risk** | Same as tetradic—requires careful restraint |

#### Quick Reference: Choosing a Harmony Type

| If you want... | Use... |
|----------------|--------|
| Calm, sophisticated, minimal | Monochromatic |
| Natural, comfortable, low-risk | Analogous |
| Energetic, attention-grabbing | Complementary |
| Vibrant but controlled | Split-complementary |
| Bold, playful, youthful | Triadic |
| Complex, multi-category distinction | Tetradic or Square |

**For enterprise UIs**: Stick to monochromatic or analogous. Save complementary/triadic for marketing or consumer apps.

### Advanced Harmony Principles

Beyond the color wheel, these principles create cohesion across any palette:

#### Saturation Harmony

Colors with **matching saturation** feel related even if hues differ wildly.

```
All pastels together → harmonious
All jewel tones together → harmonious
All muted/dusty tones together → harmonious
```

This is why Wes Anderson films feel cohesive despite using many colors—consistent saturation level across the palette.

**UI application**: If you need many distinct colors (charts, tags, categories), keep them at the same saturation and brightness. They'll feel like a family.

#### Value/Brightness Harmony

Similar principle: colors at the **same brightness** feel unified.

```
All dark jewel tones → harmonious
All light pastels → harmonious
All mid-tones → harmonious
```

**UI application**: Dashboard cards in different colors? Make them all the same lightness. They'll cohere even if hues vary.

#### Temperature Harmony

Colors can be warm (red, orange, yellow) or cool (blue, green, purple). Harmonious palettes often:
- Commit to one temperature with small accents from the other
- Use temperature to create depth (warm foreground, cool background)

**UI application**: A warm palette (oranges, reds) with a single cool accent (teal CTA) creates both harmony and focal point.

#### The "Shared Undertone" Technique

Add a small amount of one color to every other color in your palette. This creates subtle cohesion invisible to the conscious eye.

```
Base palette: Blue, Green, Gray
Add 5% yellow to each → suddenly warmer and more unified
```

This is why "tinting your grays" works so well—your neutral participates in the palette rather than sitting apart from it.

#### The "Anchor + Vary" Method

Choose one attribute to anchor, then vary the others:

| Anchor | Vary | Result |
|--------|------|--------|
| **Hue** | Saturation and value | Monochromatic |
| **Saturation** | Hue and value | Consistent intensity |
| **Value** | Hue and saturation | Consistent lightness |

This constraint is what separates intentional palettes from random color picking.

### Practical Palette Formulas

#### The Safe UI Palette Formula

For most interfaces, this structure works:

| Role | Harmony Approach |
|------|------------------|
| **Neutrals** (backgrounds, text) | Monochromatic gray scale, tinted with brand hue |
| **Primary accent** (CTAs, key actions) | One saturated brand color |
| **Secondary accent** (supporting actions) | Analogous or split-complement to primary |
| **Semantic colors** (error, success, warning) | Conventional (red, green, yellow) adjusted to match palette saturation |

This gives variety without chaos.

#### Natural Palette Extraction

Nature has already solved color harmony. Extract palettes from:
- Photographs of landscapes, plants, animals
- Fine art paintings
- Film stills with strong color grading

Tools like Coolors, Adobe Color, or Muzli can extract palettes from images. The colors will feel "right" because they coexist in reality.

#### The "One Weird Color" Principle

Many striking palettes are mostly neutral or analogous, with **one unexpected hue**. This creates:
- Cohesion (the safe base)
- Interest (the surprise)
- Focus (the odd color draws the eye)

```
Example: Grays + soft blues + unexpected coral accent
Example: Earth tones + electric purple CTA
```

### Color Testing Methods

#### The Blur Test
Blur your eyes or step back from the screen. The most important elements should still stand out. If everything looks equally prominent, you have a hierarchy problem.

#### The Grayscale Test
Convert to grayscale. If values are too similar, colors that seemed distinct will merge into mud. Good harmony survives desaturation.

#### The Isolation Test
Look at each color pairing in isolation (just two colors, side by side). Do they feel related? If any pair feels jarring, reconsider.

#### The "Album Cover" Test
Mock up your palette as a simple graphic—a poster or album cover. Does it feel intentional and unified, or like a ransom note? This removes UI context and reveals raw harmony (or lack of it).

### Common Color Mistakes

| Mistake | Why It's Bad | Fix |
|---------|--------------|-----|
| Using pure black text | Too harsh, causes halation | Use `#1A1A1A` or gray-900 |
| Colored body text | Implies meaning where none exists | Reserve color for semantic purpose |
| Low contrast "aesthetic" choices | Inaccessible, hard to read | Always check contrast ratios |
| Too many accent colors | Visual noise, no hierarchy | Stick to 1-2 accent colors |
| Ignoring color blindness | Excludes 8% of male users | Always add secondary indicators |
| Saturated colors in dark mode | Eye strain, visual vibration | Desaturate by 10-15% |
| **Vibrating colors** | Highly saturated complements adjacent | Separate them or desaturate one |
| **Equal saturation everywhere** | Eye has nowhere to rest; visual fatigue | Create saturation hierarchy—most muted, few vibrant |
| **Random hue selection** | Individually "nice" but disconnected together | Commit to a harmony type |
| **Ignoring value contrast** | Similar lightness even with different hues | Always check colors differ in value, not just hue |
| **Harmony without hierarchy** | Pretty but useless for guiding attention | Harmony creates family; hierarchy decides who speaks first |
| **Shadows without color** | Gray shadows look dull and flat | Tint shadows with light source color or object color |

### Recommended Tools

| Tool | Purpose | Link |
|------|---------|------|
| **Coolors** | Palette generation | coolors.co |
| **Realtime Colors** | Live preview on UI mockup | realtimecolors.com |
| **Adobe Color** | Classic wheel-based harmony generation | color.adobe.com |
| **Paletton** | Deep control over harmony types | paletton.com |
| **Huemint** | AI-generated palettes for brand/UI | huemint.com |
| **Leonardo** | Color scale generation | leonardocolor.io |
| **WebAIM Contrast Checker** | Accessibility testing | webaim.org/resources/contrastchecker |
| **Stark** | Figma accessibility plugin | getstark.co |
| **Polypane** | Browser with built-in accessibility tools | polypane.app |
| **Sim Daltonism** | Color blindness simulation (macOS) | michelf.ca/projects/sim-daltonism |
| **axe DevTools** | Browser extension for accessibility | deque.com/axe/devtools |
| **UI Colors** | Tailwind palette generator | uicolors.app |
| **Khroma** | AI learns your preferences | khroma.co |
| **Color Hunt / Muzli Colors** | Browse curated community palettes | colorhunt.co / colors.muz.li |

### Additional Color Principles

#### Shadows Need Color Too
Gray shadows look dull. Tint shadows with the color of the light source (usually warm) or the object casting them. Subtle, but it adds richness.

#### Use Color to Group, Not Decorate
Color should communicate relationships:
- Same color = related items
- Different color = different category
- Decorative color without meaning is noise

#### Respect System Preferences
Use `prefers-color-scheme` media query to default to user's OS setting. Provide a manual toggle, but don't ignore their preference.

```css
@media (prefers-color-scheme: dark) {
  :root { /* dark theme tokens */ }
}
```

### Color Verification Checklist

Before proceeding from **Implement** to **Defend**, verify:

- [ ] **Contrast**: All text meets WCAG AA (4.5:1 body, 3:1 large text)
- [ ] **Hierarchy**: Squint test passes—CTA is visible, structure is clear
- [ ] **Semantics**: Color meaning is paired with icons/text (not color alone)
- [ ] **Consistency**: Same semantic color used throughout (success = green-600 everywhere)
- [ ] **Dark mode**: Tested in both modes (if applicable)
- [ ] **Color blindness**: Simulated with Deuteranopia filter
- [ ] **No pure extremes**: No #000000 or #FFFFFF in use
- [ ] **60-30-10**: Color proportions feel balanced
- [ ] **Grayscale test**: Hierarchy survives desaturation
- [ ] **Value contrast**: Colors differ in lightness, not just hue
- [ ] **Saturation hierarchy**: Most elements muted, few elements vibrant
- [ ] **System preferences**: `prefers-color-scheme` respected

---

### 🚨 MANDATORY COLOR DEFENSE GATE

**You CANNOT proceed to Evaluate until ALL color checks pass automated verification.**

This is not a checklist to review—it's a gate enforced by Playwright MCP.

#### Automated Color Verification (Playwright)

```javascript
// Color Defense Gate - MANDATORY before Evaluate phase

import { test, expect } from '@playwright/test';
import Color from 'colorjs.io'; // or similar color library

test.describe('Color Defense Gate', () => {

  // 1. CONTRAST VERIFICATION
  test('all text meets WCAG AA contrast requirements', async ({ page }) => {
    await page.goto('/');

    // Get all text elements
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

      // Large text: >= 18px or >= 14px bold
      const isLargeText = styles.fontSize >= 18 || (styles.fontSize >= 14 && parseInt(styles.fontWeight) >= 700);
      const minContrast = isLargeText ? 3.0 : 4.5;

      expect(contrast, `Text "${await element.textContent()}" has insufficient contrast: ${contrast.toFixed(2)}`).toBeGreaterThanOrEqual(minContrast);
    }
  });

  // 2. NO PURE BLACK/WHITE
  test('no pure black (#000000) or pure white (#FFFFFF) in use', async ({ page }) => {
    await page.goto('/');

    const allElements = await page.locator('*').all();

    for (const element of allElements) {
      const styles = await element.evaluate(el => ({
        color: getComputedStyle(el).color,
        bgColor: getComputedStyle(el).backgroundColor,
        borderColor: getComputedStyle(el).borderColor
      }));

      const pureBlack = 'rgb(0, 0, 0)';
      const pureWhite = 'rgb(255, 255, 255)';

      expect(styles.color).not.toBe(pureBlack);
      expect(styles.color).not.toBe(pureWhite);
      expect(styles.bgColor).not.toBe(pureBlack);
      expect(styles.bgColor).not.toBe(pureWhite);
    }
  });

  // 3. COLOR-ALONE MEANING CHECK
  test('status indicators have icons/text, not just color', async ({ page }) => {
    await page.goto('/');

    // Find all status badges/indicators
    const statusElements = await page.locator('[data-status], [role="status"], .badge, .status, .alert').all();

    for (const element of statusElements) {
      // Must have either: icon (svg, img) OR text content
      const hasIcon = await element.locator('svg, img, [class*="icon"]').count() > 0;
      const hasText = (await element.textContent())?.trim().length > 0;

      expect(hasIcon || hasText, 'Status indicator relies on color alone').toBe(true);
    }
  });

  // 4. TOUCH TARGET SIZE (reinforces Fitts's Law with visual distinction)
  test('primary CTAs are visually prominent', async ({ page }) => {
    await page.goto('/');

    const primaryButtons = await page.locator('[data-variant="primary"], .btn-primary, button[type="submit"]').all();

    expect(primaryButtons.length).toBeGreaterThan(0); // At least one primary CTA exists

    for (const button of primaryButtons) {
      const box = await button.boundingBox();
      expect(box.width).toBeGreaterThanOrEqual(44);
      expect(box.height).toBeGreaterThanOrEqual(44);
    }
  });

  // 5. DARK MODE VERIFICATION (if applicable)
  test('dark mode has proper elevation system', async ({ page }) => {
    await page.goto('/');

    // Emulate dark mode
    await page.emulateMedia({ colorScheme: 'dark' });

    const pageBackground = await page.evaluate(() => getComputedStyle(document.body).backgroundColor);
    const cardBackground = await page.locator('.card, [data-elevation="1"]').first().evaluate(
      el => getComputedStyle(el).backgroundColor
    );

    // In dark mode, elevated surfaces should be LIGHTER than base
    const pageBg = new Color(pageBackground);
    const cardBg = new Color(cardBackground);

    expect(cardBg.get('lab.l')).toBeGreaterThan(pageBg.get('lab.l')); // Card lighter than page
  });

  // 6. GRAYSCALE HIERARCHY TEST
  test('visual hierarchy survives grayscale conversion', async ({ page }) => {
    await page.goto('/');

    // Apply grayscale filter to page
    await page.addStyleTag({ content: 'html { filter: grayscale(100%); }' });

    // Take screenshot and analyze (or use visual regression)
    const primaryCTA = await page.locator('[data-variant="primary"]').first();
    const secondaryElement = await page.locator('p').first();

    const ctaLightness = await primaryCTA.evaluate(el => {
      const color = getComputedStyle(el).backgroundColor;
      // Extract lightness from grayscale
      const match = color.match(/\d+/g);
      return match ? parseInt(match[0]) : 0;
    });

    const textLightness = await secondaryElement.evaluate(el => {
      const color = getComputedStyle(el).backgroundColor;
      const match = color.match(/\d+/g);
      return match ? parseInt(match[0]) : 0;
    });

    // Primary CTA should have distinct lightness from surrounding content
    expect(Math.abs(ctaLightness - textLightness)).toBeGreaterThan(30);
  });

});
```

#### Running the Color Defense Gate

```bash
# Run color-specific tests
npx playwright test --grep "Color Defense Gate"

# Run all defense gates
npm run test:defend
```

#### Gate Enforcement

| Check | Auto-Verifiable | Tool |
|-------|-----------------|------|
| WCAG contrast ratios | ✅ Yes | Playwright + colorjs.io |
| No pure black/white | ✅ Yes | Playwright |
| Color + icon/text for status | ✅ Yes | Playwright |
| Dark mode elevation | ✅ Yes | Playwright |
| Grayscale hierarchy | ✅ Yes | Playwright |
| Color blindness simulation | ⚠️ Manual | Stark / Sim Daltonism |
| 60-30-10 proportion | ⚠️ Manual | Visual inspection |
| Saturation hierarchy | ⚠️ Manual | Visual inspection |

**If ANY automated check fails: STOP. Fix the issue. Re-run Defense.**

**For manual checks**: Document evidence in the Review Handover. Provide screenshots showing compliance.

---

> **The Synthesized Principle**: *Color is communication, not decoration. Every hue should earn its place by guiding attention, conveying meaning, or reinforcing hierarchy. When in doubt: simplify. A restrained palette executed consistently will always outperform a rainbow applied carelessly.*

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
- [ ] **🎨 COLOR DEFENSE GATE PASSED** (see Color Principles section)

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
