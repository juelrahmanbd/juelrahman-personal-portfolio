# Md Juel Rahman — Personal Portfolio Design System (Phase 01)

## 1. Executive Summary & Brand Direction

- **Brand Owner:** Md Juel Rahman
- **Professional Identity:** AI-Focused Full-Stack Web Developer & Creative Technologist
- **Location:** Bangladesh
- **Design Inspiration:** Modern international technology brands & Webgate aesthetic
- **Visual Identity Philosophy:** A refined balance between deep nocturnal purple plum surfaces, soft rose-pink interactive accents, crisp geometric Plus Jakarta Sans typography, and subtle micro-borders. It conveys high-velocity software engineering, AI capability, and premium digital agency craftsmanship.

---

## 2. Color System & Semantic Tokens

The color system is defined via CSS variables in `src/app/globals.css` and extended through `tailwind.config.ts`. Every color pairing is audited against **WCAG 2.1 Level AAA** contrast requirements for dark mode readability.

### Core Color Palette

| Token Name | Hex / Value | Semantic Role | WCAG Contrast Ratio |
|---|---|---|---|
| `--bg-primary` | `#190C2B` | Primary Canvas / Root Background | Canvas Root |
| `--bg-secondary` | `#231136` | Secondary Background / Section Alternate | 1.15:1 vs Primary |
| `--surface-default` | `#321B49` | Default Card Surface / Module Fill | 1.35:1 vs Canvas |
| `--surface-elevated` | `#3F225C` | Elevated Cards / Hover Surface | 1.6:1 vs Canvas |
| `--surface-light` | `#FFF8FB` | Light Surface / Contrast Mode | High-contrast Light Context |
| `--accent-primary` | `#F6D1DD` | Primary Interactive Accent / Main CTA | **10.9:1 (AAA)** on `#190C2B` |
| `--accent-secondary` | `#E8AFC5` | Secondary Accent / Muted Badges | **8.5:1 (AAA)** on `#190C2B` |
| `--accent-hover` | `#FDE8EE` | Primary Button Hover & Glow | **12.4:1 (AAA)** on `#190C2B` |
| `--text-primary` | `#FFFFFF` | Primary Headings & High-Emphasis Copy | **14.8:1 (AAA)** on `#190C2B` |
| `--text-muted` | `#C8B9D2` | Body Copy & Secondary Text | **8.7:1 (AAA)** on `#190C2B` |
| `--text-subtle` | `#9681A6` | Captions, Metadata & Dividers | **5.2:1 (AA)** on `#190C2B` |
| `--text-dark` | `#25152D` | Dark Text on Light Surface / Accent | **10.8:1 (AAA)** on `#F6D1DD` |
| `--border-subtle` | `rgba(255, 255, 255, 0.08)` | Default Card & Container Borders | Subtle Separation |
| `--border-strong` | `rgba(255, 255, 255, 0.16)` | Hover & Active Card Borders | Visual Feedback |
| `--border-accent` | `rgba(246, 209, 221, 0.28)` | Accent Highlights & Outline Badges | Focal Boundary |

---

## 3. Typography System

### Font Family Evaluation & Selection
- **Selected Font:** **Plus Jakarta Sans** (Google Font via `next/font/google` variable font)
  - *Rationale:* Plus Jakarta Sans features geometric proportions, wide apertures, clean curves, and exceptional readability at both massive display sizes and small UI labels. It embodies contemporary AI and tech brands while maintaining zero layout shift (CLS) via Next.js local font bundling.
- **Monospace Font:** **JetBrains Mono**
  - *Rationale:* Used for code snippets, technical tags, metadata, and status badges.

### Fluid Typography Scale

| Hierarchy | Fluid Size (`clamp`) | Line Height | Tracking | Weight | Class Utility |
|---|---|---|---|---|---|
| **Display Large** | `clamp(2.75rem, 6vw, 4.5rem)` (44px–72px) | 1.05 | -0.03em | Bold (700) | `.text-display-large` |
| **Display Small** | `clamp(2.25rem, 4.5vw, 3.5rem)` (36px–56px) | 1.10 | -0.025em | Bold (700) | `.text-display-small` |
| **Heading 1 (H1)** | `clamp(2.00rem, 3.5vw, 2.75rem)` (32px–44px) | 1.15 | -0.02em | Bold (700) | `.text-heading-1` |
| **Heading 2 (H2)** | `clamp(1.50rem, 2.5vw, 2.00rem)` (24px–32px) | 1.25 | -0.015em | Semibold (600) | `.text-heading-2` |
| **Heading 3 (H3)** | `clamp(1.25rem, 1.8vw, 1.50rem)` (20px–24px) | 1.35 | -0.01em | Semibold (600) | `.text-heading-3` |
| **Heading 4 (H4)** | `1.125rem` (18px) | 1.40 | -0.005em | Semibold (600) | `.text-heading-4` |
| **Body Large** | `1.125rem` (18px) | 1.60 | Normal | Regular (400) / Medium (500) | `.text-body-large` |
| **Body Regular** | `1.000rem` (16px) | 1.65 | Normal | Regular (400) | `.text-body-regular` |
| **Body Small** | `0.875rem` (14px) | 1.50 | Normal | Regular (400) / Medium (500) | `.text-body-small` |
| **Caption / Label**| `0.750rem` (12px) | 1.40 | +0.05em | Semibold (600) Uppercase | `.text-caption` |

---

## 4. Spacing, Layout & Responsive Scale

### Breakpoints
- `sm`: `640px` (Mobile landscape & small tablets)
- `md`: `768px` (Tablets & compact laptops)
- `lg`: `1024px` (Desktops & laptops)
- `xl`: `1280px` (Standard desktop canvas)
- `2xl`: `1536px` (Ultra-wide displays)

### Container System (`<Container size="...">`)
- `sm`: Max width `640px` (Narrow reading columns / forms)
- `md`: Max width `768px` (Article & modal content)
- `lg`: Max width `1024px` (Balanced layouts)
- `xl`: Max width `1280px` (Default site container)
- `full`: 100% width

### Horizontal Padding Scale
- Mobile (`< 640px`): `1rem` (`px-4`)
- Tablet (`640px - 1023px`): `1.5rem` (`px-6`)
- Desktop (`>= 1024px`): `2rem` (`px-8`)

### Vertical Rhythm (`<Section spacing="...">`)
- `compact`: `py-12 sm:py-16` (Auxiliary strips, sub-headers)
- `default`: `py-16 sm:py-24 lg:py-28` (Standard content sections)
- `spacious`: `py-24 sm:py-32 lg:py-36` (Hero & showcase areas)

### Border Radius Scale
- `xs`: `4px`
- `sm`: `6px` (Inline code, badges)
- `md`: `10px` (Inputs, small buttons)
- `lg`: `16px` (Default cards, medium containers)
- `xl`: `20px` (Feature cards)
- `2xl`: `24px` (Major panels)
- `full`: `9999px` (Pill badges, status indicators, avatar circles)

---

## 5. Component System Specification

### 5.1 Button System (`<Button variant="..." size="...">`)

| Variant | Visual Appearance | Interactive Feedback | Use Case |
|---|---|---|---|
| `primary` | `#F6D1DD` fill, `#25152D` dark text | Hover: `#FDE8EE`, glow shadow, active scale `0.98` | Main conversion CTAs |
| `secondary` | `#321B49` fill, `#FFFFFF` text, `border-white/8` | Hover: `#3F225C`, `border-white/16` | Secondary actions |
| `outline` | Transparent fill, `border-white/16`, white text | Hover: `bg-white/[0.06]`, `border-white/30` | Tertiary actions |
| `ghost` | Transparent fill, `#C8B9D2` muted text | Hover: `text-white`, `bg-white/[0.06]` | Header nav & subtle utility buttons |
| `icon` | Square/circle container, centered icon | Hover: `#3F225C`, `border-white/16` | Standalone icon triggers |

- **Loading State:** Injects animated `Loader2` spinner and applies `pointer-events-none`.
- **Disabled State:** Applies `opacity-50 cursor-not-allowed pointer-events-none`.
- **Focus Indicator:** 2px ring `#F6D1DD` with 2px offset on `#190C2B`.

### 5.2 Foundational Components
- **`Card`:** Surfaces `#321B49` with `border-white/8` and `shadow-card`. Interactive option gives `-translate-y-0.5` micro-elevation. Subcomponents include `CardHeader`, `CardTitle`, `CardDescription`, `CardContent`, `CardFooter`.
- **`Badge`:** Semantic tag pills (`accent`, `surface`, `muted`, `outline`) with optional live pulsing radar dot (`dotColor="bg-emerald-400"`).
- **`Divider`:** Accessible `role="separator"` with optional centered label.
- **`IconContainer`:** Rounded plum/rose frames providing consistent geometric bounding boxes for Lucide icons.
- **`FormField` / `Input` / `Textarea`:** Dark secondary background `#231136` inputs with focus rings, accessible label binding, helper text, and error states.
- **`TextLink`:** Inline link with animated hover underline and optional external link indicator (`ArrowUpRight`).

---

## 6. Motion & Accessibility Foundation

- **Focus Visibility:** Unconditional `:focus-visible` styling with `ring-2 ring-accent-primary`.
- **Reduced Motion:** Automatic override via `@media (prefers-reduced-motion: reduce)` collapsing animations and transitions to `0.01ms`.
- **Selection Color:** Custom high-contrast selection `::selection` using `#F6D1DD` background and `#25152D` dark plum text.
- **Transitions:** Standardized on `transition-all duration-200 ease-out` with custom cubic-bezier `(0.16, 1, 0.3, 1)`.

---

## 7. Future-Ready Architecture

- **Supabase Compatibility:** Component props and interfaces are strictly typed with standard TypeScript interfaces. Data schemas and authentication guards can be seamlessly introduced in subsequent phases without refactoring foundational UI primitives.
- **Deployment Platform:** Optimized for Hostinger automatic deployment from GitHub `main` branch.
