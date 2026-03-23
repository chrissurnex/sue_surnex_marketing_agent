---
name: product-showcase-images
description: Create Surnex-style product showcase images for dark SaaS marketing pages by composing real HTML/CSS dashboard scenes and screenshotting them at high resolution. Use when the user wants homepage heroes, feature grid cards, spotlight images, dashboard mockups, or product visuals with readable text/data instead of abstract AI-generated artwork. Best for on-the-fly generation of branded dark+lime product images, reusable widget-based compositions, and fast iteration on SaaS marketing imagery.
---

# Product Showcase Images

Use this skill to create product marketing images that look like real software, not abstract AI art.

## Core rule

Build the image in HTML/CSS first. Screenshot second.

Do **not** default to text-to-image models for these assets. Use real layout, real copy, real numbers, real tables, and real SVG charts so the output stays crisp and believable.

## Quick start

1. Read `references/design-system.md`.
2. Use `artifacts/v6-widgets/index.html` as the widget library.
3. Create or update one HTML composition for the requested image.
4. Screenshot it at 2x scale with `scripts/screenshot.mjs`.
5. Review for readability, spacing, and brand consistency.
6. Refine once if needed.

## Asset types

Choose one before building:

- **Hero** — 1200x1200, no outer border/padding/radius on body, page wrapper handles clipping
- **Grid card** — 1200x900, padded framed composition
- **Spotlight** — 1200x900, padded framed composition
- **Dashboard mockup** — use the closest matching size unless Chris specifies otherwise

## Workflow

### 1. Define the story

Decide what the image needs to communicate in one sentence.

Examples:
- AI visibility dashboard for agencies
- topic gap analysis with opportunities highlighted
- citation/comparison view across domains
- action-oriented product overview with KPIs and lists

If the message is fuzzy, the image will be fuzzy.

### 2. Pick a composition pattern

Use one of these defaults:

- **Hero:** sidebar + KPI band + main chart + supporting cards
- **Grid card:** one dominant widget plus one supporting widget
- **Spotlight:** one large dashboard scene with 2–3 supporting modules

Keep content dense enough to fill at least 90% of the image area.

### 3. Assemble from widgets

Copy from `artifacts/v6-widgets/index.html` and adapt the data.

Preferred widget set:
- metric cards
- area chart
- bar chart
- horizontal bars
- topic list
- data table
- split cards
- impact card
- donut chart
- multi-line chart
- priority gaps table
- full dashboard composite

Use inline SVG for charts. Do not add chart libraries unless absolutely necessary.

### 4. Apply Surnex styling

Follow `references/design-system.md` exactly:
- dark neutral surfaces only
- lime as the only accent
- Inter only
- no tiny text
- no random color pollution
- strong border discipline
- rounded corners consistent with asset type

### 5. Use believable content

Write copy and numbers that look real:
- readable metric names
- plausible growth deltas
- sensible topic names
- agency/SEO/AI-search oriented data

Do not use lorem ipsum, fake gibberish, or microscopic labels.

### 6. Screenshot cleanly

Use `scripts/screenshot.mjs`.

Defaults:
- hero: 1200x1200
- grid/spotlight: 1200x900
- deviceScaleFactor: 2
- body background matches composition rules

### 7. Review hard

Reject outputs that:
- feel abstract instead of product-led
- leave too much empty darkness
- use unreadable small text
- introduce non-lime accent colors
- look like a pasted screenshot instead of a polished composed scene
- contain sloppy alignment or clipped borders

## Simplification rules

Keep this skill lean.

- Ignore CMS/Strapi unless Chris explicitly asks.
- Focus on generating the image file fast.
- Reuse the same widget primitives across pages.
- Prefer editing a working composition over rebuilding from scratch.
- Do not over-engineer data plumbing.

## File layout

- `references/design-system.md` — design rules and rendering constraints
- `artifacts/v6-widgets/index.html` — reusable widget library
- `artifacts/templates/base.html` — minimal starter template
- `scripts/screenshot.mjs` — Playwright screenshot helper

Create page-specific compositions inside `artifacts/<slug>/` when needed.

## Output pattern

When Chris asks for an image on the fly:

1. create/update a composition HTML file
2. screenshot it
3. return the image path(s)
4. briefly explain what changed if this was a revision

Do not dump a massive design essay unless asked.
