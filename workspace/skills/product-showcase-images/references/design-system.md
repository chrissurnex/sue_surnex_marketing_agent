# Product Showcase Design System

## Goal

Create dark, premium, readable SaaS product imagery for Surnex marketing pages.

The image should look like a polished dashboard scene built from real interface components.

## Brand identity

- Dark neutral UI
- Lime as the only accent
- No rainbow dashboards
- No abstract AI wallpaper
- Dense, useful compositions
- Real readable text and data

## Colors

| Role | Class | Hex | Usage |
| --- | --- | --- | --- |
| Page background | `bg-[#0a0a0a]` | `#0a0a0a` | body/canvas background |
| Card background | `bg-neutral-900` | `#171717` | widget fills |
| Composite background | `bg-neutral-950` | `#0a0a0a` | multi-widget scenes |
| Border | `border-neutral-800` | `#262626` | card/panel borders |
| Grid lines | n/a | `#262626` | chart grid lines |
| Primary accent | `text-lime-400` / `bg-lime-400` | `#a3e635` | KPIs, active states, chart lines, progress |
| Primary muted | `bg-lime-400/10` | n/a | badges, icon chips, active nav |
| Negative | `text-red-400` | n/a | missing/not-cited only |
| Text heading | `text-neutral-100` to `text-neutral-200` | n/a | headings, key numbers |
| Text body | `text-neutral-300` to `text-neutral-400` | n/a | data labels, rows |
| Text muted | `text-neutral-500` to `text-neutral-600` | n/a | captions, subtitles, axes |

## Color rule

Use only lime plus neutral shades.

Do **not** introduce blue, purple, orange, cyan, emerald, gradients with extra hues, or multi-color category palettes unless Chris explicitly overrides the rule.

## Typography

- Font: Inter via `https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap`
- Widget titles: 20px
- KPI cards: 30–36px
- Hero numbers: 60px
- Data labels: 18px
- Captions: 14–16px
- Minimum text size: 14px

Anything smaller is too hard to read at live-page render widths.

## Spacing and layout

- Default body padding: 16px with `box-sizing:border-box`
- Outer framed container: rounded-2xl border border-neutral-800
- Outer padding: `p-8` to `p-10`
- Card gaps: `gap-3` to `gap-5`
- Fill at least 90% of the image area
- Avoid the floating-in-darkness look

## Border radius rules

### Hero images (1200x1200)
- No outer border
- No body padding
- No outer body radius
- Body: `margin:0; padding:0; overflow:hidden`
- Inner cards: rounded-2xl (16px)

### Grid cards and spotlights (1200x900)
- Body padding: 16px
- Outer frame: rounded-2xl border border-neutral-800
- Inner cards: rounded-xl to rounded-2xl
- Small elements: rounded-lg
- Pills/progress: rounded-full where appropriate

## Content rules

- Use readable labels
- Use plausible metrics
- Use SEO / AI search / agency oriented data
- Prefer one clear message per image
- Use enough content to feel like real software
- Avoid lorem ipsum and nonsense labels

## Composition defaults

### Hero
- Sidebar feel is encouraged
- Strong KPI row
- One dominant chart area
- 1–3 supporting cards/modules
- Should feel like a complete product system

### Grid card
- One dominant module
- One supporting module
- Tight crop, high legibility

### Spotlight
- One broad dashboard scene
- 2–3 supporting modules
- Strong hierarchy and clean structure

## Chart rules

Use inline SVG.

Recommended chart types:
- area chart
- vertical bars
- horizontal bars
- donut
- multi-line trend

Charts should use:
- neutral grid lines
- lime line/fill emphasis
- readable axis labels
- restrained annotation

## Quality bar

Reject anything that:
- looks abstract instead of product-led
- uses unreadable tiny text
- wastes space
- adds extra accent colors
- looks messy or overfilled
- feels fake or toy-like
