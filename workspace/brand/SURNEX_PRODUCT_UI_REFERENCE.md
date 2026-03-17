# Surnex Product UI Reference v1

Purpose: document the current visual and structural reality of the Surnex product UI so future generated visuals, mockups, hero images, launch graphics, and product-led marketing assets resemble the actual product instead of generic AI SaaS dashboards.

Status: based on 3 screenshots supplied by Chris on 2026-03-17. This reference captures the current product look **before** later palette/brand updates.

---

## 1. Overall Product Feel

The current Surnex product presents as a **dark, dense, data-heavy SEO / AI search analytics platform**.

Core traits:
- Dark navy-charcoal application shell
- Left-hand persistent sidebar navigation
- Large central analytics canvas
- Modular card-based dashboard layout
- Rounded panels with subtle borders
- Fine-line charts, donut charts, distribution bars, metric cards, tables, and accordions
- Minimal decorative styling; product is functional rather than flashy
- Visual tone feels more like **serious operational analytics software** than glossy marketing art

If recreating product-inspired visuals, the UI should feel:
- operational
- information-rich
- trustworthy
- technical
- dark-mode native
- understated, not over-designed

Avoid making it feel:
- overly futuristic
- neon/cyberpunk
- glassmorphism-heavy
- highly saturated
- whimsical
- consumer-app-like

---

## 2. Core Layout Structure

### 2.1 App Frame

The visible product uses a standard three-part application structure:

1. **Persistent left sidebar**
2. **Top content/header area inside main pane**
3. **Scrollable card/grid content area**

### 2.2 Sidebar

Characteristics:
- Fixed vertical left navigation
- Darker than the main content area
- Narrow but not tiny; wide enough for icon + label layout
- Includes organization/account area at top
- Includes grouped nav items with nesting/expansion
- Includes user/profile area near bottom
- Includes Help + Dark Theme entries near lower section

Visual behavior:
- Active item indicated with subtle highlight state
- Icons are small, thin-stroke, modern
- Labels are sentence/title case, not oversized
- Nested items slightly indented
- Section structure feels product-led and utilitarian

### 2.3 Main Content Pane

Characteristics:
- Large, dark content surface
- Page title top-left
- Action buttons top-right on some pages (`Export`, `Refresh`, `Settings` visible on one shot)
- Main content arranged in stacked cards and dashboard sections
- Strong use of horizontal rows and evenly spaced modules

### 2.4 Grid Logic

Observed layout patterns:
- Top row of compact KPI cards (4 across in examples)
- Large full-width chart below
- Mid-page 2-column card layout for donuts/secondary visuals
- Full-width chart below that
- Additional lower sections continue grid pattern
- Alternate pages use 2-column rows, large table blocks, accordions, and summary cards

The UI uses a **structured analytics grid**, not freeform layout.

---

## 3. Visual Style

### 3.1 Backgrounds / Surfaces

Approximate visual hierarchy:
- **Sidebar background:** deepest navy-charcoal
- **Main app background:** slightly lighter dark navy
- **Card background:** another slightly elevated dark surface
- **Borders:** thin, subtle, cool-gray/blue-gray outlines

The overall look is dark but not pure black. It leans:
- blue-charcoal
- slate-navy
- graphite with cool undertones

### 3.2 Corners / Radius

Cards and controls appear to use:
- medium rounded corners
- consistent radius across cards, buttons, and fields
- soft geometry rather than sharp/angular enterprise boxes

Estimated feel:
- around 10–14px on larger cards
- slightly smaller on controls/chips/buttons

### 3.3 Borders / Separation

Observed separation style:
- very subtle 1px borders
- occasional low-contrast inner elevation
- sectioning mostly achieved through cards and spacing, not dramatic shadows

### 3.4 Shadows / Depth

Depth is restrained.

The UI does **not** rely on:
- heavy drop shadows
- floating glass layers
- bright glows

Depth comes from:
- surface contrast
- border lines
- spacing
- card grouping

---

## 4. Typography

### 4.1 General Type Personality

The typography appears to be a modern sans-serif suited for product interfaces.

Style characteristics:
- clean
- neutral
- readable
- slightly compact
- professional
- not geometric-display-heavy

### 4.2 Hierarchy

Observed hierarchy:
- Page titles: medium-large, bold, white
- Subtitles/context labels: smaller, muted gray
- KPI numbers: large, strong, high-contrast white
- Card labels: small, muted text
- Table labels: regular small UI text
- Chart legends: small, colored legend labels with muted supporting text

### 4.3 Text Color Roles

Observed text roles:
- **Primary text:** near-white
- **Secondary text:** soft gray
- **Muted meta text:** dimmer gray-blue / cool gray
- **Data highlight text:** sometimes colored icons or stat accents

---

## 5. Color Behavior Inside the Product

Important: the current product screenshots do **not** yet reflect the future Surnex lime-led brand palette. They use a broader operational dashboard palette.

### 5.1 Dominant UI Colors

Current dominant interface colors appear to be:
- dark navy / charcoal backgrounds
- white text
- gray secondary text
- cool muted border tones

### 5.2 Data Visualization Accent Colors

Charts and indicators currently use a multi-color analytics palette, including:
- purple / violet
- cyan / teal
- green
- orange / amber
- red
- blue
- pink/magenta in some donut segments

Interpretation:
- the product uses color pragmatically for data differentiation
- it is **not** currently a single-accent monochrome system
- generated “product shots” should preserve multicolor charting where appropriate

### 5.3 Accent Usage in the UI Chrome
n
The surrounding application chrome remains restrained. Color mostly appears in:
- chart lines
- donut segments
- tiny feature icons
- metric indicators
- completion/status badges

This means future generated product images should avoid flooding the interface chrome with bright accent colors.

---

## 6. Navigation Information Architecture Observed

From the screenshots, the sidebar includes a broad SEO / AI search intelligence stack.

Observed nav items include:
- Dashboard
- AI Search
  - AI Visibility
  - AI Overviews
  - Google AI Mode
  - ChatGPT
  - LLM Benchmark
  - AI Trends
  - Citation Gap
- Keywords
- Rank Tracking
- Backlinks
  - Overview
  - All Backlinks
  - Referring Domains
  - Anchors
  - New & Lost
  - Gap Analysis
- Site Audit
- Domain Tools
- Trends
- Web Vitals
- Local SEO
- Content Tools
- Reports
- Settings
- Help
- Dark Theme

This is important because future product-based visuals should imply that Surnex is:
- comprehensive
- multi-module
- SEO + AI search focused
- analytics-heavy
- agency/pro-grade

---

## 7. Patterns Observed Across the Screens

### 7.1 KPI Summary Cards

Repeated pattern:
- 4-across row
- small label at top
- large numeric value beneath
- small icon on right side
- dark card surface
- evenly spaced layout

Examples shown:
- Domain Rank
- Total Backlinks
- Referring Domains
- Referring IPs
- Avg Position
- AI Overview Rate
- GEO Citation Rate

### 7.2 Line / Area Charts

Observed line chart behavior:
- large, horizontally stretched charts
- dark plot area integrated into card
- very light gridlines or subtle axis lines
- thin colored series lines
- muted axis labels
- legends placed near top
- some charts show filled area glow/subtle gradient beneath line

### 7.3 Donut Charts

Observed donut chart behavior:
- centered donut ring
- legend to right side
- multiple small color segments
- used for distribution analysis
- card framing clean and spacious

### 7.4 Horizontal Bar Visualization

Observed “Link Types” style chart:
- horizontal category labels on left
- bars extend right
- muted axes / guides
- dominant purple bars in example
- straightforward analytics styling, not decorative

### 7.5 Tables / Data Grids

Observed in keyword research screenshot:
- simple dark table container
- muted headers
- white body text
- multiple columns
- minimal visual noise
- spacing rather than borders doing much of the work

### 7.6 Accordions / Expandable Rows

Observed in “AI Answers” section:
- stacked dark rows
- left-aligned chevrons
- text labels in lowercase/phrase case
- subdued styling

### 7.7 Status / Activity Cards

Observed in “Recent Audits”:
- compact horizontal record layout
- small icon tile on left
- score and recency text
- status on right (`Completed`)
- restrained use of green for completion state

---

## 8. Product Density and Content Behavior

The UI is notably **dense**.

That density communicates:
- serious capability
- depth of tooling
- multiple analytical layers
- professional rather than beginner orientation

Key traits:
- lots of modules visible at once
- not much empty whitespace compared with marketing sites
- dashboard-first logic
- a mix of summary + trend + breakdown + diagnostic views

When generating product-inspired visuals, maintain:
- moderate-to-high information density
- multiple cards in frame
- real-seeming labels and metrics
- navigation context
- credible chart variety

Do **not** generate fake product scenes that show:
- one giant empty card and nothing else
- three oversized widgets floating in space
- hyper-minimal consumer-dashboard layouts
- cartoonishly clean generic SaaS UI

---

## 9. Specific Screenshot Notes

### Screenshot A — Backlinks Overview

Key observations:
- Page title: `Backlinks`
- Subtitle references backlink profile for a domain
- Action controls top-right: Export / Refresh / Settings
- Four top metric cards
- Large backlink trend chart below
- Two donut charts beneath (TLD distribution / country distribution)
- Full-width horizontal bar chart for link types
- Lower modules continue below fold

Visual takeaway:
- a classic operational analytics page
- lots of comparative/link-profile detail
- mature SEO tooling feel

### Screenshot B — Keyword Research / AI Visibility Detail

Key observations:
- Page title: `keyword research`
- Back navigation at top
- Subheader includes location, language, AI search volume, platform, first response, last dates
- 30-day mention trend card
- AI search volume over 12 months chart
- Recent snapshots table
- AI Answers accordion section

Visual takeaway:
- blends AI-search-specific metrics with timeline analysis and explainability/detail layers
- should feel like a specialized intelligence workspace, not generic keyword software

### Screenshot C — Domain Dashboard / Mixed Summary

Key observations:
- Domain header (`moz.com`)
- Top summary cards for Avg Position / Domain Rank / AI Overview Rate / GEO Citation Rate
- Ranking distribution progress-style horizontal bar
- Recent Audits card
- Top Movers card
- Audit Score Trend chart
- Severity Distribution donut chart
- Backlink Trend chart
- Backlink Stats summary card

Visual takeaway:
- this page is a cross-functional executive dashboard view
- combines ranking, audits, backlinks, visibility, and issue severity in one screen
- good reference for “overview dashboard” compositions

---

## 10. Reusable Visual Rules for Future Generated Assets

When using AI generation or design composition to create Surnex product-based visuals, follow these rules.

### 10.1 Must-Haves
- Dark SaaS analytics dashboard
- Persistent left sidebar with many modules
- Rounded cards on a deep navy-charcoal base
- White primary text and muted secondary text
- Multiple chart types visible in frame
- Realistic analytics density
- Practical layout with rows/columns, not abstract floating panes
- SEO / AI search vocabulary or adjacent interface cues

### 10.2 Nice-to-Haves
- Top-row KPI cards
- Domain/project context in header
- subtle control buttons top-right
- line chart + donut chart + table combination
- nested sidebar nav
- agency/professional multi-project feel

### 10.3 Avoid
- bright gradient backgrounds behind the UI
- glassmorphism overlays
- giant glowing buttons
- huge empty whitespace areas
- fake futuristic holograms
- oversaturated neon outlines
- impossible chart compositions
- product shots with no sidebar or no navigation context
- mobile-app styling unless explicitly generating mobile views

---

## 11. Guidance for Marketing Compositions Using Product UI

### 11.1 If using real-product-inspired dashboard art in hero sections
Use:
- angled or layered dashboard crops
- one dominant primary screen and 1–2 supporting panels
- realistic metric cards and charts
- dark frame consistent with product shell

Do not:
- fully reinvent the interface
- swap into a bright white style
- replace analytics density with simplistic placeholder blocks

### 11.2 If creating “product in action” social graphics
Use:
- close crops of specific product modules
- charts, KPI cards, and left-nav fragments
- realistic page titles like backlinks, keyword research, AI visibility

Do not:
- generate fantasy interfaces disconnected from the real app structure

### 11.3 If creating future stylized product renders
You may stylize with:
- perspective
- lighting
- framing
- layered composition
- subtle brand-green environmental glow

But the UI itself should still preserve:
- dark navy dashboard core
- sidebar structure
- card shapes
- chart density
- practical module layout

---

## 12. Current Product DNA Summary

If forced into one paragraph:

Surnex currently looks like a dark, professional, analytics-dense SEO and AI-search intelligence platform with a left-hand multi-module navigation, rounded navy-charcoal cards, white and muted-gray typography, and multi-color data visualizations spanning KPI cards, line charts, donut charts, tables, accordions, and diagnostic summaries. It feels operational, credible, and information-rich — not flashy, not playful, and not generic consumer SaaS.

---

## 13. Prompt Seed for Future Product-Matching Image Generation

Use this as a base reference, not a final production prompt:

> Dark professional SEO and AI-search analytics dashboard, deep navy-charcoal interface, persistent left sidebar with many nested modules, rounded rectangular cards, white typography, muted gray labels, dense information layout, top KPI stat cards, line charts, donut charts, tables, accordions, realistic enterprise SaaS product UI, operational and trustworthy, subtle borders, minimal shadows, multi-color chart accents, serious product design, not futuristic fantasy, not glassmorphism, not neon cyberpunk

---

## 14. Next Documentation Needed

To improve fidelity later, gather:
- additional product screens from more modules
- full-resolution desktop screenshots
- typography details if known
- actual design tokens from the app (colors, radius, spacing) when available
- component inventory (buttons, tables, filters, forms, tabs, badges, modals)
- screenshots after the palette/brand refresh

