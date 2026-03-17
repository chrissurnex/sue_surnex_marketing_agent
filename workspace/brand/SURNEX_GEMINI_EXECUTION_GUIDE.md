# Surnex Gemini Execution Guide v1

Date: 2026-03-17
Owner: Sue
Purpose: define how Surnex visual generation should be executed with Gemini image models, including model verification, batch logic, prompt handling, output discipline, and review workflow.

Important:
- Chris wants Gemini / “Nano Banana” as the image-generation engine.
- Do not hardcode a model name from memory.
- Always verify the currently available/latest Gemini image model in the environment before production runs.
- Treat model selection as an explicit step, not an assumption.

Related docs:
- `brand/SURNEX_IMAGE_PROMPTS.md`
- `brand/SURNEX_GENERATION_BRIEFS_V1.md`
- `brand/SURNEX_GENERATION_RUNBOOK.md`
- `brand/SURNEX_PRODUCTION_WORKFLOW.md`

---

## 1. Goal

Use Gemini to generate Surnex visuals in a disciplined, repeatable way so outputs are:
- on-brand
- reusable
- reviewable
- properly named
- easy to iterate

This guide is about **execution mechanics**, not brand theory.

---

## 2. Model Selection Rule

Before any serious generation run:

### Step 1 — Verify the active Gemini image model
Check:
- what Gemini image-generation model(s) are currently available
- which one maps to the latest “Nano Banana” tier Chris wants
- whether it supports the needed aspect ratios and image fidelity

### Rule
If there is a newer/better Gemini image model available than the one previously used, prefer that model **only after** confirming it still performs well for:
- dark technical compositions
- dashboard-like image structure
- prompt adherence
- product-adjacent visuals

### Log requirement
Every generation review must record:
- exact model name used
- date used
- any notable model behavior changes

---

## 3. Environment Assumption

Gemini generation should use Chris’s configured Gemini API credential.

Requirement:
- use the Gemini API key already available in the environment
- do not duplicate secrets into docs
- do not paste secrets into prompt files or review notes

If an execution script/tool is later created, it should read the key from environment at runtime.

---

## 4. Execution Philosophy

### 4.1 Batch, don’t thrash
Generate in small, disciplined sets.

Correct pattern:
- 3 variants per asset
- review
- choose winner
- refine only the winner

Wrong pattern:
- 40 random attempts with prompt drift and no scoring

### 4.2 One hypothesis per batch
Each batch should test a specific difference such as:
- safer vs balanced vs bolder
- more product fidelity vs less
- tighter crop vs wider hero

Not everything at once.

### 4.3 Save prompts with outputs
Every serious output should be traceable back to:
- asset brief
- prompt variant
- model used
- review decision

---

## 5. First Production Batch

Run these first:

### Homepage hero
- `hero-v1-safe-inspired-16x9`
- `hero-v1-balanced-inspired-16x9`
- `hero-v1-bold-inspired-16x9`

### AI visibility feature
- `ai-visibility-v1-safe-inspired-4x3`
- `ai-visibility-v1-balanced-inspired-4x3`
- `ai-visibility-v1-bold-inspired-4x3`

### SEO + AI unified visual
- `seo-ai-unified-v1-safe-inspired-16x9`
- `seo-ai-unified-v1-balanced-inspired-16x9`
- `seo-ai-unified-v1-bold-inspired-16x9`

This is the minimum useful batch.

---

## 6. Prompt Assembly Process

For each generation request, build the prompt from these layers:

1. **Asset objective**
2. **Variant prompt body**
3. **Format instruction**
4. **Fidelity requirement**
5. **Negative constraints**

### Example structure
- Asset: homepage hero
- Variant: balanced
- Format: 16:9
- Fidelity: inspired / product-led hybrid
- Negatives: no rainbow gradients, no cyberpunk clutter, no generic AI wallpaper, etc.

---

## 7. Asset-Specific Execution Rules

## 7.1 Homepage hero
Use when:
- defining top-level brand perception
- building the main site visual language

Execution guidance:
- favor composition with real copy-safe zones
- dashboard/product core should remain believable
- do not let signal effects overpower usability

## 7.2 AI visibility feature visual
Use when:
- explaining AI answer presence/citations/visibility

Execution guidance:
- keep concept readable
- avoid chatbot metaphors
- use structured nodes/paths instead of floating speech bubbles

## 7.3 SEO + AI unified visual
Use when:
- communicating category wedge
- showing “one operating layer” concept

Execution guidance:
- avoid lazy split-screen
- integration must look natural
- one system, not two collaged scenes

---

## 8. Output Handling

All generated outputs should be saved into:
- `brand/outputs/`

Use the naming convention from the runbook:
- `[asset]-[version]-[variant]-[mode]-[format]`

Examples:
- `hero-v1-balanced-inspired-16x9.png`
- `ai-visibility-v1-safe-inspired-4x3.png`
- `seo-ai-unified-v1-bold-inspired-16x9.png`

If an output is refined from a selected winner, append revision suffix:
- `-r1`
- `-r2`

Example:
- `hero-v1-balanced-inspired-16x9-r1.png`

---

## 9. Review Discipline

After each 3-output batch:

1. Create or update the matching review file in `brand/reviews/`
2. Score the outputs using the review template
3. Select one of:
   - Approved
   - Approved with edits
   - Refine
   - Kill

### Review priority order
Prioritize:
1. brand fit
2. message clarity
3. product truth (where relevant)
4. reusability
5. pure visual beauty

Pretty but off-brand loses.

---

## 10. Iteration Rules for Gemini

If Gemini outputs are:

### Too generic
Add:
- more product-specific cues
- more Surnex-specific routing/path language
- clearer dark tactical environment

### Too sci-fi / too glowy
Tighten:
- reduce atmospheric effects
- emphasize realistic dashboard structure
- explicitly ban neon overload and cyberpunk styling

### Too safe / boring
Add:
- stronger signal architecture
- sharper contrast
- more controlled environmental energy
- more decisive focal hierarchy

### Too fake on product UI
Add:
- persistent left sidebar
- KPI row
- realistic chart density
- muted dashboard chrome
- multi-color charts inside product only

---

## 11. Success Standard

A successful Gemini-generated Surnex image should:
- look unmistakably like it belongs to Surnex
- feel premium and technical
- avoid generic AI visual clichés
- support the specific asset’s job
- remain reusable beyond one campaign

If it is merely “cool-looking,” that is not enough.

---

## 12. Recommended Future Automation

If we decide to automate generation later, create a small script or workflow that can:
- read a prompt file from `brand/prompts/`
- inject the chosen format/model settings
- save outputs to `brand/outputs/`
- write a simple metadata log next to each output

That would reduce prompt copy/paste errors and preserve traceability.

But automation comes after the first manual quality pass.

---

## 13. Immediate Action After This Guide

The next logical action is:
1. verify the current Gemini image model
2. run Batch 1 (9 outputs)
3. review and score
4. pick winners
5. refine only the winners

That is the real start of production.

