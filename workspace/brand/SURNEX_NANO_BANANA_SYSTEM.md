# Surnex Nano Banana 2 System v1

Date: 2026-03-17
Owner: Sue
Purpose: define the canonical image-generation system for Surnex using Gemini 3.1 Flash Image Preview (Nano Banana 2) so future outputs are consistent, faster to produce, and less prone to prompt drift.

---

## 1. Core Decision

Surnex image generation should now run from a **master system** instead of ad hoc prompt iteration.

Preferred engine:
- **Nano Banana 2**
- Gemini 3.1 Flash Image Preview

Goal:
- keep taste consistent
- reduce prompt chaos
- make assets reproducible
- scale from hero visuals to page assets, banners, and content images

---

## 2. What We Keep From Prior Exploration

The reset does **not** discard what was learned.

### Locked creative truths
- Surnex works best as a **premium dark cinematic brand**
- lime signal-routing energy is a core identity device
- visuals should feel operator-grade, not playful
- product screenshots should be used as **reference only**
- final visuals should use **redrawn / remade product cues**, not screenshot pastes

### Locked composition truths
- hero direction is best in the **R1 / R3** lane
- feature visuals need an **A-level cleanliness floor**
- busier variants usually lose
- banners can carry more atmosphere than feature visuals

### Locked branding truths
- use the **correct Surnex logo mark only**
- for banners/heroes where branding appears:
  - logo mark = brand lime
  - SURNEX wordmark = white
- for feature images and page-support visuals:
  - **no logo** unless explicitly requested

---

## 3. Master Style DNA

All Surnex Nano Banana generations should inherit this base style DNA unless explicitly overridden.

### Base visual DNA
- premium dark cinematic environment
- near-black and charcoal base
- controlled lime signal-routing energy
- layered depth, but not cluttered
- product-inspired, not screenshot-literal
- modern B2B SaaS concept-art feel
- operator-grade, precise, premium

### Anti-DNA
- no generic AI sludge
- no cyberpunk neon mess
- no crypto exchange aesthetic
- no random rainbow gradients
- no playful illustration
- no literal pasted screenshots
- no fake logos

---

## 4. Asset Classes

Surnex now uses 4 canonical asset classes.

### 4.1 Hero
Use for:
- homepage hero
- major product/brand hero sections

Rules:
- strongest cinematic composition
- can use logo
- can carry more atmosphere than other classes
- must still preserve clarity

### 4.2 Feature Image
Use for:
- feature blocks
- website support visuals
- benefit sections
- product capability modules

Rules:
- **no logo**
- A-level cleanliness floor
- one clear visual idea per image
- product cues can appear lightly

### 4.3 Banner
Use for:
- brand cover
- launch/announcement banner
- profile header

Rules:
- wide composition
- brand-first
- logo allowed and often required
- strong atmosphere okay if still readable

### 4.4 Page Asset
Use for:
- 3-up or repeated visuals inside real product/marketing pages
- page-specific feature rows
- supporting illustrations for product pages

Rules:
- **no logo**
- must work as a coordinated set
- should support adjacent copy
- style consistency across the set matters more than individual flashiness

---

## 5. Logo Rules

### Allowed logo usage
Use logo only for:
- heroes (when needed)
- banners / covers
- explicit brand-led assets

### Disallowed logo usage
Do not place logo on:
- feature images
- page-support visuals
- page asset sets
- blog image bodies unless explicitly requested

### Canonical brand treatment
- logo mark in brand lime
- SURNEX wordmark in white
- never allow model to improvise logo colors
- never allow model to invent a substitute mark

---

## 6. Product Screenshot Rules

### Product screenshots are reference-only
Use them for:
- UI rhythm
- dashboard density
- card/chart patterns
- product context
- structural cues

Do not use them for:
- direct screenshot pasting
- final polished visuals
- brand hero compositions

### Interpretation rule
The model should:
- **redraw**
- **reinterpret**
- **clean up**
- **brand-align**

But not:
- clone literally
- flatten into plain dashboard renders
- drift into fantasy unrelated to Surnex

---

## 7. Complexity Rules

### Feature and page assets
Use this as the default:
- A-level clarity floor
- one focal idea
- limited visual fragments
- enough depth to feel premium
- not more complex than needed

### Heroes and banners
Can carry:
- more atmosphere
- more signal motion
- more drama

But still must avoid:
- visual noise
- too many competing focal points
- unreadable compositions

---

## 8. Reference Hierarchy

When generating Surnex visuals, treat references in this order:

1. **Approved Surnex brand/logo rules**
2. **Approved Surnex style DNA**
3. **Approved winning internal outputs**
4. **Page/section layout reference**
5. **Product screenshots**

This is important.

It means:
- brand truth comes before local page fidelity
- page fidelity comes before decorative experimentation

---

## 9. Approved Internal Reference Outputs

At the time of writing, these are the most important anchors.

### Hero anchors
- R1 / R3 hero lane

### Feature image behavior
- A-level clarity floor
- B only if simplified

### Banner anchor
- approved centered-logo banner base
- lime mark + white wordmark

These should be reused as style anchors in future generation.

---

## 10. Nano Banana 2 Working Method

Use Nano Banana 2 in one of two modes.

### Mode A — Generate
For:
- new hero concepts
- banners
- new feature-image families

### Mode B — Reference-guided remake
For:
- page assets
- product-inspired visuals
- section-specific support graphics

In Mode B, always provide:
- the master style anchor
- product screenshots
- page/section reference if available
- clear instructions about what is reference-only vs target-style

---

## 11. Output Review Rules

Every Surnex output should be checked against:
- brand fit
- complexity control
- correct logo treatment (if logo present)
- feature/page no-logo rule (if applicable)
- product relevance
- reusability

If it fails any of those, it is not approved.

---

## 12. Reset Principle

The new system exists to prevent looping.

That means:
- fewer master prompts
- more consistency
- less improvisation
- more page-asset production with locked rules

