# Agent Handoff

## [codex] 2026-06-13 01:05 KST

- Fixed the mobile top button returning in a stuck active/hover state after tapping it.
- Blurred the top button on click and neutralized mobile hover styling.
- Updated global `style.css` and `main.js` cache versions across pages.

## [codex] 2026-06-13 00:57 KST

- Changed mobile Study lists to a two-column grid.
- Updated the `home.css` cache version across pages that load it.

## [codex] 2026-06-13 00:49 KST

- Changed the mobile floating top button to stay hidden at the page top.
- Added scroll-based visibility so the mobile top button appears after scrolling down and hides again at the top.
- Updated the global `main.js` cache version across pages.

## [codex] 2026-06-13 00:41 KST

- Changed the footer top button to float at the bottom-right only on mobile.
- Updated the global `style.css` cache version across pages.

## [codex] 2026-06-13 00:28 KST

- Added a footer-right circular top button across all pages, inspired by the referenced BEAMS footer placement.
- Refined the top button to an icon-only light gray circle that turns black on hover.
- Reduced the top button size and fixed the arrow position so hover does not shift it.
- Slimmed the top button arrow stroke and moved it up slightly within the circle.
- Added smooth scroll-to-top behavior via global `main.js`.
- Updated global `style.css` and `main.js` cache versions across pages.

## [codex] 2026-06-13 00:15 KST

- Cleared the placeholder images from the first Study detail page starting at Concept through Reflection.
- Added empty media-slot styling so cleared Study slots keep their intended proportions for future images.
- Updated the `home.css` cache version across pages that load it.

## [codex] 2026-06-13 00:06 KST

- Added `피크닉 (peaknic)` as the latest UI/UX Designer experience on Home and About.
- Updated the IXI experience period from current to `2024.05 - 2026.05` on Home and About.

## [codex] 2026-06-12 22:35 KST

- Increased the desktop cursor point offset so it sits farther down/right from the native pointer with clearer breathing room.
- Updated global `style.css` and `main.js` cache versions across pages.

## [codex] 2026-06-12 22:20 KST

- Added a desktop-only black square cursor point that follows the mouse.
- The cursor point grows and morphs into a circle over interactive elements.
- Offset the cursor point slightly down and right from the native pointer.
- Updated global `style.css` and `main.js` cache versions across pages.

## [codex] 2026-06-12 22:12 KST

- Moved `assets/03-estore-01.png` from the Context section to the As-Is analysis image slot on the 03 project page.
- Removed the Context section image block and caption entirely.

## [codex] 2026-06-12 22:04 KST

- Removed outlines from Work detail image slots and inserted image blocks.
- Updated `work.css` cache versions across Work detail pages.

## [codex] 2026-06-12 21:58 KST

- Updated the caption below the first 03 E-STORE image to `as-is 메인, 상품 주문 화면`.

## [codex] 2026-06-12 00:12 KST

- Added `assets/03-estore-01.png` from the Claude source image.
- Inserted the new E-STORE visual into the first Context image slot on the 03 project page.

## [codex] 2026-06-12 00:00 KST

- Set remaining Work detail image block radius values to `0`.
- Set remaining Study detail image radius values to `0`.
- Updated `home.css` and `work.css` cache versions across pages that load them.

## [codex] 2026-06-11 22:28 KST

- Removed the outline from Work project list thumbnails.
- Set project and Study list thumbnail radius values to `0`.
- Updated the `home.css` cache version across pages that load it.

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
