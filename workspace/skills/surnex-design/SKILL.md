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
5. Default all Surnex image generation to **the latest Nano Banana 2 model via Gemini**.
6. If generating feature/page-support images, enforce: **no logo, no text, no fake UI words**.
7. If direct Nano Banana 2 generation is unavailable, return polished prompts + composition specs. Do **not** silently switch to another provider unless Chris explicitly asks.

## Execution default

- **Default generator:** latest **Nano Banana 2** via Gemini
- **Default behavior when user says “make images”:** write the prompt, generate the images, review the outputs, then refine once if needed
- **Fallback behavior:** if Nano Banana 2 cannot be used, explain the blocker clearly and provide final prompts/specs instead of changing providers
- **Do not default to OpenAI image generation for Surnex design work** unless Chris explicitly requests it

## Workflow

### 1. Classify the asset
Choose one:
- **Hero** — product/brand centerpiece
- **Open graph** — social preview image with strong silhouette and low-detail readability
- **Feature image** — supports a feature block or product capability
- **Page-support image** — part of a real page section or 3-up row
- **Banner** — wide brand or launch surface
- **Blog cover** — editorial template surface

### 2. Set branding intensity
- **Hero/Banner/Open graph:** branding may appear, but only with the approved logo assets and only when useful.
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
- branding level
- no-logo/no-text rule if applicable
- anti-drift constraints
- framing/crop guidance for the target surface

### 5. Generate in small sets
Generate **2–3 variants max**, then review.
Do not spray endless variations.

### 6. Review and refine
- Reject weak variants fast.
- Keep only outputs that match the approved Surnex world.
- If needed, do one tighter second pass with clearer composition and less drift.

## Asset defaults

### Hero
- Wide landscape composition
- Product-led centerpiece
- Premium, dark, modular UI system
- Controlled lime signal flow
- Can include restrained branding if explicitly useful

### Open graph
- Social-preview-first composition
- Strong central silhouette
- Simpler than hero images
- High contrast, low clutter, readable at small sizes
- Avoid tiny detail that disappears in previews

### Feature / page-support
- No logo
- No wordmark
- No readable text
- No fake UI labels
- Closer to real product layout language

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
- are too detailed or cluttered for open graph use

## Resources

### references/
- `references/approved-rules.md` — locked Surnex design decisions and approved derivative rules

### assets/
- `assets/approved-base-b2.png` — approved source-of-truth base image
- `assets/final-logo-mark.jpg` — only valid logo mark
- `assets/wordmark.svg` — only valid wordmark
