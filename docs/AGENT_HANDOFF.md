# Agent Handoff

## [codex] 2026-06-11 22:20 KST

- Replaced `assets/studies/study-coming-soon.png` from the Claude source thumbnail path.
- Updated Coming Soon thumbnail cache query parameters from `20260611` to `20260611b`.

## [codex] 2026-06-11 22:08 KST

- Removed outlines from all Study thumbnails.
- Added cache-busting query parameters to Coming Soon thumbnail usages so same-path image replacements load freshly.
- Updated the `home.css` cache version across pages that load it.

## [codex] 2026-06-11 00:18 KST

- Added `assets/studies/study-coming-soon.png` from the Claude source thumbnail.
- Replaced all unavailable Study card thumbnails on Home and Work with the Coming Soon image.
- Removed the disabled-card image dimming so the Coming Soon thumbnail displays as designed.

## [codex] 2026-06-11 00:00 KST

- Reduced Study card thumbnail sizing while keeping the 3:4 ratio.
- Converted unavailable Study cards into disabled non-link cards.
- Updated unavailable Study card titles to `Coming Soon`.

## [codex] 2026-06-10 20:02 KST

- Removed the outer border from the filled Overview image frame in the first Study detail page.

## [codex] 2026-06-10 19:57 KST

- Replaced `assets/studies/study-01-overview.png` with the updated overview screenshot.
- Added an `is-fill` media modifier so the Overview image fills its frame without inner padding.

## [codex] 2026-06-10 19:45 KST

- Added `assets/studies/study-01-overview.png` from the provided screenshot.
- Updated the first Study Overview section image slot to use the new overview image.

## [codex] 2026-05-31 14:19 KST

- Refined the first Study hero into a large visual-led case-study layout inspired by the referenced Dribbble dashboard composition.
- Added reusable image slots between each section title and description in the Study detail page.
- Updated the `home.css` cache version across pages that load it.

## [codex] 2026-05-31 14:02 KST

- Rewrote the first Study detail page around the AI-assisted fridge app design system case study.
- Updated the study narrative to follow Concept, Screens, Components, Variants, Variables, Automation, Dark Mode, and Reflection.
- Updated the first Study card on Home and Work to match the fridge app design system content.

## [codex] 2026-05-31 13:46 KST

- Removed the `STUDIES` heading inside the Work page Studies panel.
- Removed the top divider from the first Project card in the Work archive.
- Updated the `home.css` cache version across pages that load it.

## [codex] 2026-05-31 13:34 KST

- Updated the home page Projects and Studies `전체보기` links to black pill CTA buttons aligned to the right.
- Matched the CTA arrow style to the Resume arrow.
- Changed the home page `AI STUDIES` title to `STUDIES`.
- Updated the `home.css` cache version across pages that load it.

## [codex] 2026-05-31 13:18 KST

- Removed the remaining `01 Study` eyebrow above the Studies title on the Work page.

Notes:
- Existing untracked local files were not included: `.DS_Store`, `docs/.DS_Store`, `docs/HANDOFF.md.pdf`, `watch-main.sh`.

## [codex] 2026-05-31 06:05 KST

- Replaced the mobile-only `KD` home affordance on About and Work with a clearer circular line home icon.
- Removed the `All Work` eyebrow from the Work archive page.
- Removed the extra `Work` eyebrow from the Studies section on the Work page.
- Updated the shared `style.css` cache version across pages.

Notes:
- Desktop navigation structure remains unchanged.
- Existing untracked local files were not included: `.DS_Store`, `docs/.DS_Store`, `docs/HANDOFF.md.pdf`, `watch-main.sh`.

## [codex] 2026-05-31 05:49 KST

- Removed the `Home` item from the mobile hamburger menu on the home page.
- Replaced the mobile-only house SVG home icon on About and Work pages with a quieter `KD` monogram home button.
- Updated `css/style.css` for the new mobile home button styling.
- Verified `js/main.js` with `node --check`.

Notes:
- Desktop top navigation remains unchanged.
- Existing untracked local files were not included: `.DS_Store`, `docs/HANDOFF.md.pdf`, `watch-main.sh`.
