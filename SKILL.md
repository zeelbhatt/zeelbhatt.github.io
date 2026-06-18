---
name: zeel-bhatt-design
description: Use this skill to generate well-branded interfaces and assets for Zeel Bhatt's robotics/ML portfolio, either for production or throwaway prototypes/mocks. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping a clean, academic, minimal-theme portfolio.
user-invocable: true
---

Read the README.md file within this skill, and explore the other available files.

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand.

If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.

## Quick orientation
- **Aesthetic:** clean, near-monochrome academic portfolio (`jekyll-theme-minimal` lineage). White page, ink-gray text, a single brand blue `#267CB9` for links/accents, hairline `#e5e5e5` borders. No gradients, no emoji in technical copy, restrained motion.
- **Type:** Noto Sans everywhere + Noto Sans Mono for eyebrows/tags/code.
- **Tokens:** link `styles.css` (root) — it `@import`s all token files. Use the semantic CSS variables (`--accent`, `--text-body`, `--border`, `--bg-card`, etc).
- **Components:** `components/core/` — `Button`, `Tag`, `Card`.
- **Reference layout:** `ui_kits/portfolio/index.html` — fixed photo rail + scroll-snap sections; mobile-friendly. Copy its patterns for new portfolio surfaces.
- **Assets:** `assets/photo.jpeg` and `assets/projects/*` come straight from the live site.

## Voice
First person, plain and direct, quantified results, technical acronyms uppercase (SLAM, ROS, CUDA). Sentence case prose, Title Case headers. Don't pad with filler.
