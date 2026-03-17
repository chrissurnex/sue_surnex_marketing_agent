# Surnex Generation Runbook v1

Date: 2026-03-17
Owner: Sue
Purpose: operational playbook for generating, storing, reviewing, and iterating Surnex visual assets without chaos.

Related docs:
- `brand/SURNEX_VISUAL_DIRECTION.md`
- `brand/SURNEX_DESIGN_SYSTEM.md`
- `brand/SURNEX_IMAGE_PROMPTS.md`
- `brand/SURNEX_PRODUCT_UI_REFERENCE.md`
- `brand/SURNEX_ASSET_PRODUCTION_PACK_V1.md`
- `brand/SURNEX_PRODUCTION_WORKFLOW.md`
- `brand/SURNEX_GENERATION_BRIEFS_V1.md`

---

## 1. Purpose

This runbook exists to prevent three common failures:
1. random prompts with no memory
2. output files with useless names
3. good directions getting lost during iteration

The goal is to create a repeatable visual production pipeline for Surnex.

---

## 2. Folder Structure

Use these folders consistently.

### `brand/references/`
Store source/reference material such as:
- visual inspiration images
- screenshots from the current product
- campaign references
- style territory examples

### `brand/prompts/`
Store prompt sets, experimental prompt variants, and final approved prompt blocks.

### `brand/outputs/`
Store generated assets and exported working outputs.

### `brand/reviews/`
Store review logs, scoring notes, selection decisions, and iteration observations.

---

## 3. Core Naming Convention

Use this naming structure:

`[asset]-[version]-[variant]-[mode]-[format]`

### Definitions
- **asset** = `hero`, `ai-visibility`, `seo-ai-unified`, `banner`, `blog-cover`, `announcement`, `ad-a`, `ad-b`, `ad-c`
- **version** = `v1`, `v2`, `v3`
- **variant** = `safe`, `balanced`, `bold`
- **mode** = `abstract`, `inspired`, `matching`
- **format** = `16x9`, `21x9`, `4x3`, `1x1`, `4x5`, `9x16`

### Example filenames
- `hero-v1-safe-inspired-16x9`
- `hero-v1-balanced-matching-16x9`
- `ai-visibility-v1-bold-inspired-4x3`
- `seo-ai-unified-v1-balanced-inspired-16x9`
- `announcement-v1-safe-matching-1x1`

If a second iteration is made from a winner, append:
- `r1`, `r2`, `r3`

Example:
- `hero-v1-balanced-inspired-16x9-r1`

---

## 4. Generation Order

Generate in this exact order unless there is a strong reason not to.

## Phase 1 — establish core visual language
1. `hero-v1-safe-inspired-16x9`
2. `hero-v1-balanced-inspired-16x9`
3. `hero-v1-bold-inspired-16x9`
4. `ai-visibility-v1-safe-inspired-4x3`
5. `ai-visibility-v1-balanced-inspired-4x3`
6. `ai-visibility-v1-bold-inspired-4x3`
7. `seo-ai-unified-v1-safe-inspired-16x9`
8. `seo-ai-unified-v1-balanced-inspired-16x9`
9. `seo-ai-unified-v1-bold-inspired-16x9`

## Phase 2 — expand asset family
10. banner variants
11. announcement variants
12. blog cover template variants
13. ad lane variants

---

## 5. Prompt File Convention

For each asset family, create a prompt note in `brand/prompts/`.

Suggested filenames:
- `brand/prompts/hero-v1.md`
- `brand/prompts/ai-visibility-v1.md`
- `brand/prompts/seo-ai-unified-v1.md`

Each file should include:
- purpose
- format targets
- final prompt variants A/B/C
- notes from prior runs
- winner notes
- next-iteration changes

---

## 6. Review File Convention

For each generation batch, create a review note in `brand/reviews/`.

Suggested filenames:
- `brand/reviews/hero-v1-review.md`
- `brand/reviews/ai-visibility-v1-review.md`
- `brand/reviews/seo-ai-unified-v1-review.md`

Each review file should track:
- generated outputs
- scores
- what worked
- what failed
- next prompt changes
- winner selected

---

## 7. Review Template

Use this exact structure for reviews.

### Batch
- Asset:
- Date:
- Model used:
- Format(s):
- Source prompt file:

### Outputs reviewed
- output name:
- output name:
- output name:

### Scorecard (1–5)
| Output | Brand fit | Product truth | Message clarity | Visual impact | Reusability | Thumbnail strength |
|---|---:|---:|---:|---:|---:|---:|
| output-a |  |  |  |  |  |  |
| output-b |  |  |  |  |  |  |
| output-c |  |  |  |  |  |  |

### What worked
- 

### What failed
- 

### Winner
- 

### Next iteration changes
- 

---

## 8. Prompt Iteration Rules

When iterating, change only one or two major variables at a time.

Good variables to change:
- more/less product fidelity
- more/less signal energy
- simpler/denser composition
- wider/tighter framing
- cleaner headline safe zone

Do not rewrite everything blindly every round.

### Bad iteration behavior
- changing prompt language completely every time
- generating 20 unrelated options with no hypothesis
- mixing multiple visual directions in one prompt

### Good iteration behavior
- choose the strongest base
- tighten the weak part only
- preserve successful structure

---

## 9. Winner Selection Logic

A winner does not need to be the prettiest image.
It needs to be the best **Surnex asset**.

Prefer outputs that:
- feel unmistakably on-brand
- support the intended message fast
- preserve product credibility where needed
- work in the real channel/context
- leave room for downstream use

Avoid choosing an image just because it is flashy.

---

## 10. Approval Labels

Tag reviewed outputs with one of these:
- **Approved** — usable now
- **Approved with edits** — strong base, needs light cleanup/cropping/layout treatment
- **Refine** — promising but needs another generation round
- **Kill** — wrong lane, do not continue

---

## 11. Generation Logging Standards

Every time a serious generation run happens, log:
- model used
- prompt version
- output filenames
- selected winner
- lessons learned

If the model output quality changes over time, this log becomes valuable.

---

## 12. Format Priority Rules

### For homepage/landing assets
Always generate 16:9 first.
Then adapt only after a winner exists.

### For feature visuals
Generate 4:3 first.
Square comes second.

### For announcements/ads
Generate 1:1 first unless the placement requires portrait.

### For banners
Generate ultra-wide first.

---

## 13. Storage Discipline

Do not dump files into random folders.

Expected pattern:
- references in `brand/references/`
- prompt docs in `brand/prompts/`
- outputs in `brand/outputs/`
- review notes in `brand/reviews/`

If a visual is a finalist, keep it.
If it is obviously dead, tag it in review notes and archive or ignore it deliberately.

---

## 14. First Production Queue

### Queue A — run first
- homepage hero A/B/C
- AI visibility A/B/C
- SEO + AI unified A/B/C

### Queue B — run after first winners are clear
- social banner A/B/C
- announcement A/B/C
- blog cover A/B/C

### Queue C — run after the system proves itself
- ad lanes A/B/C
- campaign-specific variants
- channel-specific crops

---

## 15. Final Principle

The pipeline should compound.
Every generation round should make the next one smarter.
If we are not learning and reusing, we are just making expensive noise.

