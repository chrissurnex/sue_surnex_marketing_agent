# Product Showcase Pipeline Reference

## Design system

Read `design-system.md` first.

It contains:
- complete color table
- typography rules
- spacing and layout rules
- border radius rules
- brand constraints

## Widget component library

Primary widget reference:
- `../artifacts/v6-widgets/index.html`

Current widget set:

| # | Widget | Purpose |
| --- | --- | --- |
| 1 | Metric cards | 4-up KPI summary row |
| 2 | Area chart | 30-day or trend overview |
| 3 | Bar chart | monthly or categorical comparison |
| 4 | Horizontal bars | share-of-voice / ranking bars |
| 5 | Topic list | keyword / topic rows with states |
| 6 | Data table | readable tabular comparison |
| 7 | Split cards | top gainers / losers |
| 8 | Impact card | trigger / citation progress blocks |
| 9 | Donut chart | cited vs uncited / mix split |
| 10 | Multi-line chart | triggered vs cited trend lines |
| 11 | Priority gaps table | opportunity table with progress |
| 12 | Full dashboard composite | sidebar + KPIs + chart + list |

Add new widgets only when they solve a repeated need.

## Image slots

Default full page-set structure:

| Slot | Size | Purpose | Composition rule |
| --- | --- | --- | --- |
| 01 hero | 1200x1200 | page centerpiece | no outer border/padding/radius; dense full dashboard scene |
| 02 grid A | 1200x900 | feature support | one dominant widget + one support widget |
| 03 grid B | 1200x900 | feature support | one dominant widget + one support widget |
| 04 grid C | 1200x900 | feature support | one dominant widget + one support widget |
| 05 spotlight A | 1200x900 | deeper product story | large dashboard scene + 2–3 support modules |
| 06 spotlight B | 1200x900 | deeper product story | large dashboard scene + 2–3 support modules |
| 07 spotlight C | 1200x900 | deeper product story | large dashboard scene + 2–3 support modules |

## HTML templates

Use these skeleton types:

### Hero template
- body: `margin:0; padding:0; overflow:hidden`
- no outer border
- no outer radius
- no body padding
- inner cards: rounded-2xl
- content should fill the frame aggressively

### Grid template
- body: `padding:16px; box-sizing:border-box`
- outer frame: rounded-2xl border border-neutral-800
- one main module plus one supporting module
- maintain strong legibility at smaller render widths

### Spotlight template
- body: `padding:16px; box-sizing:border-box`
- outer frame: rounded-2xl border border-neutral-800
- use broader composition than grid card
- combine 2–4 modules into one clean product scene

Base starter:
- `../artifacts/templates/base.html`

## Screenshot system

Use `../scripts/screenshot.mjs`.

Pattern:

```bash
node scripts/screenshot.mjs <input.html> <output.png> [width] [height]
```

Example:

```bash
node scripts/screenshot.mjs artifacts/ai-visibility/01-hero.html artifacts/ai-visibility/01-hero.png 1200 1200
node scripts/screenshot.mjs artifacts/ai-visibility/02-grid-tracking.html artifacts/ai-visibility/02-grid-tracking.png 1200 900
```

Rules:
- render at 2x device scale
- wait for page/network idle
- use local HTML files
- review output after every screenshot

## Credentials and endpoints

Only use API credentials/endpoints when Chris explicitly asks for upload/linking.

Credential handling rules:
- treat tokens as sensitive
- prefer environment variables or existing local config
- distinguish read-only vs write tokens clearly before use
- do not paste secrets into chat unless explicitly requested

Typical split:
- **read-only token**: fetch existing page/media/entity state
- **write token**: upload media or update page records

## End-to-end pipeline

Use this only when the request includes generation + upload + page linking.

1. Define the page story
2. Build the 7 HTML files
3. Screenshot all 7 outputs
4. Verify image dimensions and readability
5. Fetch current page/entity state
6. Upload images with controlled pacing
7. PUT/PATCH only the intended media fields/components
8. Re-fetch and verify all 7 slots

### curl patterns

Replace placeholders with the real endpoint names/ids from the target environment.

Fetch entity:

```bash
curl -sS \
  -H "Authorization: Bearer $READ_TOKEN" \
  "$STRAPI_URL/api/<collection>/<id>?populate=*"
```

Upload media:

```bash
curl -sS \
  -H "Authorization: Bearer $WRITE_TOKEN" \
  -F "files=@artifacts/<slug>/01-hero.png" \
  "$STRAPI_URL/api/upload"
```

Update entity:

```bash
curl -sS -X PUT \
  -H "Authorization: Bearer $WRITE_TOKEN" \
  -H "Content-Type: application/json" \
  -d @payload.json \
  "$STRAPI_URL/api/<collection>/<id>"
```

Verification fetch:

```bash
curl -sS \
  -H "Authorization: Bearer $READ_TOKEN" \
  "$STRAPI_URL/api/<collection>/<id>?populate=*"
```

### update discipline

- preserve all text fields when doing PUT
- omit component IDs if the API rejects them as unrelated
- do not send arrays/components you are not intentionally updating
- throttle uploads if the server is fragile
- always verify after update

## Reference implementation

Keep one complete working example per page family inside:
- `../artifacts/<page-slug>/`

Recommended contents:
- `01-hero.html`
- `02-grid-*.html`
- `03-grid-*.html`
- `04-grid-*.html`
- `05-spotlight-*.html`
- `06-spotlight-*.html`
- `07-spotlight-*.html`
- generated `.png` outputs

## Logo rules

- Use the approved Surnex logo assets only
- Keep branding subtle
- Do not let the logo dominate product scenes
- Use no logo at all if the surrounding page already carries enough brand identity
- Never invent alternate marks or decorative pseudo-logos

## Anti-patterns

| Don’t | Why | Do instead |
| --- | --- | --- |
| Use AI image generation | Garbled text, fake UI, low trust | HTML/CSS + Playwright |
| Use font sizes below 14px | Unreadable at render width | 14px minimum |
| Float a tiny widget in a dark canvas | Wasted space, weak composition | Fill 90%+ of frame |
| Use perspective transforms | Hurts readability, wastes corners | Flat presentation |
| Skip body padding on grid/spotlight | Border clipping | `padding:16px; box-sizing:border-box` |
| Add border/radius to hero outer container | Double-corner artifact | let page wrapper handle clipping |
| Add multiple accent colors | Off-brand | lime + neutrals only |
| Use lorem ipsum / gibberish | Looks fake | real labels and plausible values |
| Use pasted screenshots as final art | Feels sloppy and inconsistent | redraw in HTML/CSS |
| Overcrowd with too many modules | Visual chaos | one dominant message |
| Include arrays you are not updating in PUT | Can wipe data | only send changed fields |
| Use component IDs blindly in PUT | API relation errors | omit if not required |
| Rapid-fire uploads | 503 / unstable media service | add spacing between uploads |
| Skip verification after PUT | silent data loss | always re-fetch all 7 slots |

## Key dependencies

- Playwright or playwright-core — headless browser automation
- Tailwind CSS CDN — loaded in each HTML file
- Inter font via Google Fonts CDN
- Node.js — runs screenshot helper
- curl — for optional API work
- Strapi v5 — only when upload/linking is explicitly requested
