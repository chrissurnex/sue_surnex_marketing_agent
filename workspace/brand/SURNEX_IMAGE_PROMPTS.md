# Surnex Image Prompt System v1

Date: 2026-03-17
Owner: Sue
Purpose: reusable prompt framework for generating Surnex visuals consistently across website, social, blog, ads, and product-led compositions.

Important:
- This system is model-agnostic in structure.
- When using Gemini, verify the currently available/latest model name at execution time instead of hardcoding assumptions.
- Use the product fidelity rules in `brand/SURNEX_PRODUCT_UI_REFERENCE.md` when creating any UI/product-derived images.

---

## 1. Prompting Philosophy

Bad prompting creates random pretty sludge.
Good prompting encodes:
- brand identity
- composition intent
- visual constraints
- fidelity rules
- what to avoid

For Surnex, every serious prompt should include five ingredients:
1. subject
2. environment/composition
3. style DNA
4. brand constraints
5. exclusions

---

## 2. Core Brand Prompt DNA

Use this as the base layer for non-product Surnex visuals:

> Premium dark technical brand visual for Surnex, high-contrast near-black environment, controlled lime green accent lighting, precise routing lines and signal paths, structured composition, modern B2B SaaS design language, operator-grade, premium and sharp, minimal clutter, strong hierarchy, tactical rather than playful, dark-mode native, clean edges, controlled glow, signal-over-noise aesthetic

Use this as the base layer for product-led visuals:

> Dark professional SEO and AI-search analytics product visual for Surnex, deep navy-charcoal dashboard environment, realistic enterprise SaaS interface, persistent left sidebar, rounded rectangular cards, white typography, muted gray labels, dense analytics layout, KPI cards, line charts, donut charts, tables and operational modules, serious and credible, subtle borders, minimal shadow, realistic multi-color chart accents, product-truth focused, not futuristic fantasy

---

## 3. Global Negative Constraints

Append some or all of these depending on the model:

> no generic AI startup gradient soup, no cyberpunk city, no rainbow colors, no glassmorphism, no giant glowing UI edges, no playful illustration, no cartoon style, no stock-photo people, no fake text blocks everywhere, no low-detail toy dashboard, no impossible interface layout, no empty whitespace-heavy consumer app look, no glossy crypto aesthetic

---

## 4. Prompt Structure Template

Use this structure:

### Template
**[asset type]** showing **[subject]**, in **[composition]**, with **[brand style cues]**, using **[color rules]**, conveying **[message]**, suitable for **[channel/format]**, with **[fidelity rules]**, avoid **[negative constraints]**

### Example shell
> Website hero visual showing a dark Surnex intelligence environment with routed search signals moving through structured panels, in a wide cinematic composition with one dominant focal object and sparse supporting elements, using near-black surfaces and disciplined lime green highlights, conveying precision and modern search advantage, suitable for a SaaS homepage hero, minimal clutter, premium technical mood, avoid rainbow gradients, cyberpunk clutter, generic AI wallpaper, and decorative nonsense

---

## 5. Master Prompt Blocks

## 5.1 Abstract Brand Scene Block
Use when you want conceptual Surnex visuals without literal UI.

> Abstract Surnex brand scene, dark tactical environment, routed signal lines, connected nodes, layered path structures, precision grid fragments, controlled lime green accents on deep black and charcoal surfaces, premium technical B2B brand aesthetic, structured and elegant, fast and intelligent, no clutter, no generic AI art, no sci-fi fantasy excess

## 5.2 Product-Matching UI Block
Use when visuals need to resemble the actual product.

> Realistic Surnex-style SEO and AI-search analytics dashboard, dark navy-charcoal app shell, persistent left sidebar with many modules, rounded cards, KPI summary row, detailed line charts, donut charts, tables, muted gray labels, white data text, realistic information density, credible operational analytics design, subtle borders, minimal shadow, multicolor chart accents inside the dashboard only, not a futuristic fake interface

## 5.3 Product + Brand Environment Block
Use when combining real-ish product with stronger marketing styling.

> Surnex product dashboard presented in a premium dark brand environment, realistic analytics UI preserved, interface framed by subtle lime signal paths and controlled atmospheric glow, strong composition, dark tactical minimalism, high contrast, serious and operator-grade, stylized framing but product-truth core

---

## 6. Asset-Type Prompt Recipes

## 6.1 Website Hero Prompt
Goal: homepage/landing page hero visual.

### Recipe
- one dominant focal object
- optional secondary support panel
- wide composition
- high contrast
- readable empty zones if text overlays externally
- premium, sharp, memorable

### Prompt
> Wide website hero visual for Surnex, premium dark technical composition with one dominant intelligence object and subtle supporting layers, routed search-signal paths, structured grid fragments, controlled lime green highlights on black and charcoal surfaces, cinematic but restrained, high contrast, clean focal hierarchy, conveys AI search and SEO advantage for agencies, suitable for a modern SaaS homepage, no generic stock startup art, no rainbow gradient clutter, no cyberpunk overload

## 6.2 Product Hero Prompt
Goal: hero art using realistic product cues.

### Prompt
> Premium homepage hero featuring a realistic Surnex-style analytics dashboard, dark navy-charcoal interface with left sidebar, KPI cards, trend charts, donut charts, and dense operational modules, displayed in a refined layered composition with subtle perspective and controlled lime environmental accents, serious, modern, and credible, suitable for B2B SaaS product marketing, avoid fake toy dashboards and excessive neon

## 6.3 Feature Section Prompt
Goal: smaller website visuals for feature blocks.

### Prompt
> Focused feature visual for Surnex showing a compact dark analytics module related to AI visibility and SEO intelligence, structured composition, realistic dashboard card fragments, controlled lime accent details, clean background, premium technical B2B aesthetic, highly legible at medium size, no clutter, no fantasy UI

## 6.4 Social Banner Prompt
Goal: profile header / cover art / announcement banner.

### Prompt
> Social banner for Surnex, ultra-wide dark tactical composition, strong contrast, sparse routed lime signal paths, modular dark panel structures, premium operator-grade AI search and SEO brand aesthetic, clean negative space for optional text overlay, sharp and memorable, no busy clutter, no cheesy sci-fi effects

## 6.5 Blog Cover Prompt
Goal: featured image template family.

### Prompt
> Blog cover image for Surnex, dark editorial-technical composition, structured grid background, one central product or signal-based focal visual, disciplined lime green accents, premium B2B SaaS look, clean and repeatable template style, suitable for AI search, SEO, analytics, and agency content, no generic AI illustration, no visual chaos

## 6.6 Product Announcement Prompt
Goal: launch/update posts.

### Prompt
> Product announcement visual for Surnex, dark high-contrast composition with realistic analytics interface fragments, crisp cards and charts, subtle lime signal energy around the frame, premium tactical mood, clean focal hierarchy, built for a product launch or feature release post, serious and modern, no fake glowy crypto styling

## 6.7 Ad Creative Prompt
Goal: punchier performance creative.

### Prompt
> Bold ad creative for Surnex, dark premium B2B technical visual with sharp lime accents, one clear focal concept tied to AI search and SEO advantage, concise composition, high contrast, strong negative space for copy, serious operator-grade aesthetic, attention-grabbing but credible, no gimmicky futurism, no rainbow effects

## 6.8 Comparison / Alternative Prompt
Goal: “replace stitched-together tools” type creative.

### Prompt
> Comparison graphic visual for Surnex, dark tactical layout showing clarity, structure, and unified search intelligence, modular panels and routed signal paths, premium B2B SaaS aesthetic, subtle lime emphasis indicating the better path, clean and decisive composition, suitable for competitor or category comparison messaging, no clutter, no cheesy symbolism

---

## 7. Composition Modules

These can be added to prompts as needed.

### 7.1 Wide / cinematic
> wide cinematic composition, clear focal hierarchy, generous dark negative space, premium landing-page framing

### 7.2 Tight crop
> tight crop with close-up dashboard detail, dense but readable card structures, realistic data textures

### 7.3 Layered product stack
> one dominant primary dashboard with one or two supporting offset panels, subtle perspective, clean depth separation

### 7.4 Minimal abstract
> sparse, high-contrast abstract scene with precise lime pathing and modular technical forms

---

## 8. Channel / Format Modifiers

Add one of these:

### 16:9
> optimized for 16:9 landscape, balanced edges, hero-friendly composition

### 1:1
> optimized for square social post, centered focal element, clear silhouette at thumbnail size

### 4:5
> optimized for portrait feed format, vertical hierarchy, strong center-weighted composition

### 9:16
> optimized for story/reel format, vertical path flow, clean focal stacking

### Ultra-wide banner
> optimized for ultra-wide header/banner use with safe negative space for overlays

---

## 9. Fidelity Modes

## 9.1 Mode A — Pure Brand Abstract
Use when product detail is not required.

Keywords:
- signal paths
- routed intelligence
- dark tactical environment
- lime accents
- structured geometry

## 9.2 Mode B — Product-Inspired
Use when you want the feeling of product truth without recreating exact screens.

Keywords:
- dashboard fragments
n- KPI cards
- charts
- left-nav hints
- realistic analytics density
- stylized but credible

## 9.3 Mode C — Product-Matching
Use when the image must clearly resemble Surnex’s actual interface DNA.

Keywords:
- persistent sidebar
- navy-charcoal UI shell
- rounded cards
- KPI row
- line charts + donuts + tables
- multicolor chart accents inside the product only
- operational SEO/AI search software

---

## 10. Prompt Examples by Use Case

## Example 1 — Homepage hero, abstract
> Wide homepage hero visual for Surnex, premium dark technical environment, routed search-signal paths moving through structured modular lanes, controlled lime green highlights on deep black and charcoal surfaces, tactical and operator-grade, clean focal hierarchy, modern B2B SaaS brand aesthetic, conveys precision and search advantage, optimized for 16:9, no rainbow gradient clutter, no cyberpunk city, no decorative nonsense

## Example 2 — Homepage hero, product-led
> Premium homepage hero for Surnex featuring a realistic dark analytics dashboard with a persistent left sidebar, KPI cards, trend charts, donut charts, and dense SEO and AI-search modules, shown in a refined layered composition with subtle perspective and controlled lime environmental accents, serious and credible, dark navy-charcoal interface, optimized for 16:9, avoid toy UI, excessive glow, and fantasy interface design

## Example 3 — Social cover
> Ultra-wide social banner for Surnex, dark tactical minimal composition with sparse routed lime signal paths, modular black panel structures, high contrast, premium operator-grade AI search and SEO brand language, sharp and memorable, optimized for banner format with clean safe zones, no clutter, no generic AI wallpaper

## Example 4 — Blog cover
> Blog cover image for Surnex about AI visibility and SEO reporting, dark editorial-technical design, structured grid background, one central realistic analytics panel combined with subtle signal path accents, disciplined lime highlights, premium B2B SaaS aesthetic, repeatable template logic, optimized for 16:9, no stock-photo business people, no cartoon illustration

## Example 5 — Product launch visual
> Product announcement graphic for Surnex, dark premium composition with realistic dashboard fragments, KPI cards and charts, crisp panel edges, subtle lime signal energy framing the visual, strong focal hierarchy, serious and modern operator-grade mood, optimized for square social, avoid crypto-style glow and fake futuristic interfaces

---

## 11. Output Review Checklist

Before using a generated image, check:
- Does it feel like Surnex?
- Does it preserve dark tactical minimalism?
- Is lime used with discipline?
- If product-led, does it resemble the actual product DNA?
- Is the image clean enough to place copy around or over?
- Is it too generic, too sci-fi, or too decorative?
- Would an agency buyer find it credible?

If not, iterate.

---

## 12. Next Evolution

As more real product screens arrive, expand this prompt system with:
- module-specific UI prompts
- page-specific prompts (Backlinks, AI Visibility, Keyword Research, Reports, Site Audit)
- typography-safe composition templates
- channel-specific production recipes
- final model-specific examples once the preferred Gemini image model/version is confirmed in the environment

