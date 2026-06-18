# Zeel Bhatt Portfolio — Design System

A small, faithful design system distilled from the live personal portfolio of
**Zeel Bhatt** — an M.S. Robotics graduate (Arizona State University) working in
machine learning with a focus on **3D vision, SLAM, and robotics**.

The live site is a GitHub Pages / Jekyll page built on the **`jekyll-theme-minimal`**
theme: a clean, two-column, black-on-white academic layout. This system captures that
theme's foundations (Noto Sans, the `#267CB9` link blue, neutral grays, 5px radii,
hairline borders) and extends them into a structured, mobile-friendly, scroll-snapping
portfolio rebuild.

## Sources

- **Portfolio repo:** https://github.com/zeelbhatt/zeelbhatt.github.io
  (content + project images; `_config.yml` declares `theme: jekyll-theme-minimal`)
- **Theme source of truth:** https://github.com/pages-themes/minimal
  (`_sass/jekyll-theme-minimal.scss`, `_sass/fonts.scss` — exact colors, type, layout)

Explore those repos to build higher-fidelity work against this person's site. Imagery in
`assets/` is pulled directly from the portfolio repo.

---

## Content Fundamentals

How copy reads on this site:

- **Voice:** first person ("I am an M.S. Robotics…", "I believe humans should be
  immortal"). Direct, plain, occasionally idealistic. Technical without being stiff.
- **Tone:** matter-of-fact and a little playful. Mentions chess, a musical instrument,
  and immortality right next to KITTI accuracy numbers.
- **Casing:** Sentence case for prose; Title Case for section headers and role/company
  names. Acronyms stay uppercase (SLAM, ROS, CUDA, RGB-D, SE(3)).
- **Specifics over adjectives:** results are quantified — "0.76 cm translational and
  1e-6 rad rotational accuracy on the KITTI dataset." Prefer concrete metrics and named
  techniques (ORB-SLAM, Ceres, DCGAN, optical flow) to vague claims.
- **Emoji:** essentially none in the technical copy. (The rebuild uses two chess glyphs
  ♛ ♚ only in the personal "Off the Clock" section — restrained and optional.)
- **Vibe:** a researcher's homepage — papers, projects, code links. Short blurbs, lots of
  outbound links ("View Code", "See blog-post", arXiv, IEEE, Lichess).

Example phrasings to echo:
> "My research is driven by a more abstract interest in shape understanding at both the
> structural and semantic levels."
> "Building robust SLAM & 3D reconstruction systems."

---

## Visual Foundations

- **Color:** near-monochrome. White (`#fff`) page, ink grays for text
  (`#222` headings → `#727272` body), a single **brand blue `#267CB9`** for links and
  accents that deepens to `#069` on hover. No gradients. Imagery (e.g. the hero photo)
  carries the only warm color — a Phoenix sunset — and is left untreated (no filters,
  no grain).
- **Type:** **Noto Sans** for everything (the theme's self-hosted webfont; we load the
  identical family from Google Fonts). **Noto Sans Mono** is added for eyebrows, section
  numbers, tags and code. Headings are bold with slightly tight tracking; body is 16px/1.6.
- **Spacing:** 4px base step. The theme's signature `20px` block rhythm and `50px` page
  padding are preserved as tokens.
- **Backgrounds:** flat white or a barely-there `#f8f8f8` subtle panel. No textures,
  patterns, or full-bleed gradients. The contact section uses the subtle panel to signal
  a close.
- **Borders:** 1px hairlines in `#e5e5e5` / `#e0e0e0`. Used generously to divide list
  rows and outline cards — this is a hairline-driven system, not a shadow-driven one.
- **Shadows:** soft, neutral, low-opacity (`rgba(34,34,34,…)`). Cards rest with almost
  no shadow and lift to `shadow-md` on hover. No colored glows.
- **Corners:** `5px` is the theme default (buttons, code blocks); the rebuild adds `10px`
  for cards and `16px` for the photo. Pills (`999px`) for tags.
- **Cards:** white, 1px border, 10px radius, near-zero rest shadow. On hover: lift 3px,
  `shadow-md`, border darkens slightly, and an inline ↗ arrow nudges.
- **Hover states:** links go from `#267CB9` → `#069` (and the theme famously bolds them);
  buttons darken; cards lift. **Press:** none beyond color (no scale-down).
- **Animation:** restrained. A single scroll-driven `rise` (fade + 22px translate) reveals
  section content via `animation-timeline: view()`, degrading to fully-visible where
  unsupported. Easing is a gentle `cubic-bezier(0.22,1,0.36,1)`. No bounces, no loops.
- **Transparency / blur:** not used. Surfaces are opaque.
- **Layout rules:** the desktop layout pins a **fixed left rail** (photo + identity + nav)
  while the right column **scroll-snaps** through full-height sections. On mobile (≤880px)
  the rail becomes the first full-screen panel and the document scroll-snaps.

---

## Iconography

The original site uses **no icon system at all** — it's a Markdown page; "icons" are just
text links and inline images. The rebuild keeps that minimalism:

- **Brand/social marks:** two tiny inline SVGs only — a GitHub mark and a document/arXiv
  glyph — drawn at 15px in the rail. These are the sole hand-drawn vectors.
- **Affordances:** the up-right arrow **↗** (a Unicode character, not an icon font)
  marks every outbound link. Chess uses Unicode **♛ ♚**.
- **No icon font, no sprite, no emoji** in the technical content. If a future surface needs
  a broader icon set, match this hairline / thin-stroke aesthetic (e.g. Lucide at
  1.75–2px stroke) and flag the addition — none ships today.

---

## Index / Manifest

**Root**
- `styles.css` — global entry point (an `@import` manifest; link this one file)
- `tokens/` — `colors.css`, `typography.css`, `fonts.css`, `spacing.css`
- `README.md` — this file
- `SKILL.md` — Agent-Skills-compatible entry point

**Foundations** (`guidelines/` — Design System tab cards)
- Colors: `color-brand`, `color-neutrals`
- Type: `type-display`, `type-body`
- Spacing: `spacing-scale`, `radii-shadows`

**Components** (`components/core/`)
- `Button` — primary / secondary / ghost, 3 sizes
- `Tag` — monospace skill / metadata pill
- `Card` — bordered project / link card with cover image
- `core.card.html` — combined component specimen

**UI Kit** (`ui_kits/portfolio/`)
- `index.html` — the full rebuilt portfolio: fixed photo rail + scroll-snap sections
  (About · Experience · Selected Work · Research & Writing · Off the Clock · Contact),
  mobile-friendly.

**Assets** (`assets/`)
- `photo.jpeg` — hero portrait
- `projects/` — project cover images (SLAM, VOCAL, bundle adjustment, signal processing,
  blending, GAN, Fourier)
