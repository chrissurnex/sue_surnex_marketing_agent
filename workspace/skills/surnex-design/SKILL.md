---
name: surnex-design
description: Create or refine Surnex design assets and image-generation prompts using the approved Surnex visual system. Use when working on Surnex heroes, feature images, page-support visuals, banners, blog covers, or any Nano Banana 2 / Gemini image generation for Surnex. Also use when the user provides reference images, product screenshots, or logo assets and wants the Surnex design system updated or reused consistently.
---

# Surnex Design

Use this skill to keep Surnex design work consistent.

## Quick start

1. Read `references/approved-rules.md`.
2. Treat `assets/approved-base-b2.png` as the visual anchor unless Chris explicitly changes direction.
3. Treat `assets/final-logo-mark.jpg` as the only valid logo mark.
4. Treat `assets/wordmark.svg` as the only valid wordmark.
5. If generating feature/page-support images, enforce: **no logo, no text, no fake UI words**.

## Workflow

### 1. Classify the asset
Choose one:
- **Hero** — product/brand centerpiece
- **Feature image** — supports a feature block or product capability
- **Page-support image** — part of a real page section or 3-up row
- **Banner** — wide brand or launch surface
- **Blog cover** — editorial template surface

### 2. Set branding intensity
- **Hero/Banner:** branding may appear, but only with the approved logo assets.
- **Feature/Page-support/Blog cover:** default to no logo unless Chris explicitly asks for branding.

### 3. Set product fidelity
- Use product screenshots as **reference only**.
- Redraw everything into the approved Surnex visual world.
- Keep scenes closer to the actual product layout language when Chris asks for more product fidelity.

### 4. Build prompts from the approved rules
Default prompt shape:
- approved base visual world
- asset purpose
- product-layout closeness level
- no-logo/no-text rule if applicable
- anti-drift constraints

### 5. Generate in small sets
Generate 2–3 variants max, then review.
Do not spray endless variations.

## Prompting rules

### Always include
- UI-first
- premium and elegant
- dark modular product surfaces
- controlled lime signal flow
- redrawn product cues only

### Include when product fidelity matters
- closer to the real product layout language
- left sidebar feel
- KPI rows
- dark dashboard cards
- charts/tables/modules
- realistic product rhythm

### Exclude aggressively
- no pasted screenshots
- no fake logos
- no readable UI text unless explicitly wanted
- no noisy fantasy abstractions
- no generic AI wallpaper
- no heavy 3D object scenes unless explicitly requested

## Review rules

Reject outputs that:
- use the wrong logo mark
- add readable junk text to feature/page images
- drift away from the approved base world
- become too abstract when product fidelity matters
- become too screenshot-literal and lose polish

## Resources

### references/
- `references/approved-rules.md` — locked Surnex design decisions and approved derivative rules

### assets/
- `assets/approved-base-b2.png` — approved source-of-truth base image
- `assets/final-logo-mark.jpg` — only valid logo mark
- `assets/wordmark.svg` — only valid wordmark
