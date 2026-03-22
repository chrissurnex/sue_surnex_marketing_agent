# Approved Surnex Design Rules

## Execution default
- Generate Surnex images with the **latest Nano Banana 2 model via Gemini** by default.
- If Nano Banana 2 generation is unavailable, return final prompts and composition specs instead of silently switching providers.
- Do not use OpenAI image generation for Surnex design work unless Chris explicitly asks.

## Core visual world
- UI-first
- premium and elegant
- dark modular product surfaces
- controlled lime signal flow
- minimal branding
- product shown as a beautiful system, not a heavy 3D object

## Source-of-truth asset
- `../assets/approved-base-b2.png` is the visual anchor for the system.
- New hero/banner/design explorations should stay in this world unless Chris explicitly requests a new direction.

## Branding rules
- Use only `../assets/final-logo-mark.jpg` as the Surnex logo mark source of truth.
- Use only `../assets/wordmark.svg` as the Surnex wordmark source of truth.
- If branding appears:
  - logo mark = brand lime
  - SURNEX wordmark = white
- Do not let the model invent, simplify, or substitute the logo mark.

## Feature/page image rules
- No logo
- No wordmark
- No text
- No fake UI text or readable labels
- Redraw product-inspired scenes; never paste raw screenshots
- Keep scenes closer to the actual product layout language:
  - left sidebar feel
  - KPI rows
  - dark dashboard cards
  - charts/tables/modules
  - realistic product rhythm

## Derivative behavior rule
- Start from the approved base visual world.
- Then simplify and move closer to the real product layout.
- Keep restrained signal energy.
- Avoid fantasy abstractions and noisy network wallpaper.

## Approved feature behavior anchor
- AI Visibility v2 B (`../../brand/outputs/ai-visibility-from-base-v2-b-4x3.png`) is the approved derivative behavior reference:
  - simpler
  - more product-faithful
  - still premium and on-brand

## Keyword research page rule
- Keyword Research image 2 is the page-set style anchor.
- Images 1 and 3 should match its style and product-faithful simplicity.
