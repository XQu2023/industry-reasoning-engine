# Production Checklist — Sprint P-001

Research OS Public Beta polish. Presentation only. No new research, features, or architecture.

---

## Priority order applied

1. Professional first impression  
2. Reading experience  
3. Visual consistency  
4. Language consistency  
5. Performance  

---

## Improvements delivered

### 1. Language consistency

| Item | Before | After |
| --- | --- | --- |
| Missing Chinese body | Chinese chrome + English body (mixed) | Full Chinese notice page; no English body |
| Notice copy | — | `中文版正在整理中，请切换至英文阅读完整内容。` |
| One-click English | — | Primary button `切换至英文` → `/briefs/db-00X` |
| Collection cards (zh) | English titles under Chinese labels | Pending cards: `DB-00X · 中文版整理中` + `整理中` status |
| DB-001 zh | Authored Chinese body | Unchanged — full Chinese brief |
| Future locales | Silent EN fallback risk | Same unavailable pattern (generic notice) |

### 2. Homepage / first impression

| Item | Before | After |
| --- | --- | --- |
| Hero | Jump straight to collection title | Headline: what Research OS is |
| Trust | Implicit | Three pillars: primary sources / evidence discipline / trust before growth |
| Public Beta | Unmarked | Eyebrow `Public Beta` / `公开测试` |
| Collection | Competing as page H1 | Secondary section under brand story |

### 3. Founding Collection

| Item | Before | After |
| --- | --- | --- |
| Card hierarchy | Flat | ID + status row, stronger title, meta under rule |
| Alignment | Uneven meta | Shared top rule + grid meta |
| Hover | Soft shadow | Lift + border accent; disabled lift on mobile |
| Pending state | Same as ready | Distinct pending treatment, no English title leak |
| Spacing | Tight | Wider editorial rhythm |

### 4. Reader

| Item | Before | After |
| --- | --- | --- |
| Measure | ~40rem | Refined to ~38.5rem for long reading |
| Hero / promise / value / reality | Existing V1.1–V1.2 structure | Kept; spacing/contrast tightened |
| Nav | Present | Focus/disabled states clarified |
| Confidence badges | English in zh UI | Localized (`中等` / `低`) |
| Reading time (zh) | `~5 minutes` | `约 5 分钟` |

### 5. Brand & accessibility

| Item | Before | After |
| --- | --- | --- |
| Background | Flat | Soft editorial atmosphere (fixed gradient) |
| Focus | Weak / inconsistent | Shared `:focus-visible` ring |
| Buttons | Text links only | Primary button for language switch |
| Contrast | Mixed faint ink | Darker ink / muted tokens |
| Keyboard | Basic | Skip link, focus rings, card focus |
| Aria labels | Hardcoded English in places | Localized site bar / brief nav / promise labels |

### 6. Performance

| Item | Before | After |
| --- | --- | --- |
| Assets | Fonts + SPA | No new asset classes; fonts already swapped |
| Layout shift | Hero min-height on brief only | Home avoids full-viewport lock; mobile disables transform hover |
| Paint | Fine | Lighter first-paint story via clearer static title/description |

---

## Page review matrix

| Page | EN | ZH | Notes |
| --- | --- | --- | --- |
| `/` homepage | Pass | — | First impression + collection |
| `/zh` homepage | — | Pass | Chinese chrome; pending cards in Chinese |
| `/briefs/db-001` | Pass | — | Full English brief |
| `/zh/briefs/db-001` | — | Pass | Full Chinese brief |
| `/briefs/db-002`…`db-010` | Pass | — | Full English briefs |
| `/zh/briefs/db-002`…`db-010` | — | Pass | Notice + switch to English (no mixed body) |
| Mobile / tablet | Pass | Pass | Single-column collection; stacked pillars |

---

## Screenshots (after)

Captured from local production build preview (`vite preview`):

1. `reader/screenshots/p001-home-en.png` — English homepage first impression  
2. `reader/screenshots/p001-home-zh.png` — Chinese homepage; pending cards without English titles  
3. `reader/screenshots/p001-db001-zh.png` — Full Chinese DB-001 reader  
4. `reader/screenshots/p001-db005-zh-notice.png` — Chinese unavailable notice + switch to English  
5. `reader/screenshots/p001-db010-en.png` — English DB-010 reader polish  

Language audit: `/zh/briefs/db-002` … `/zh/briefs/db-010` verified — notice only, no English body mix.

---

## Final Production Review

**Verdict:** Ready for Public Beta presentation surface.

Research OS now reads as an editorial product: a clear opening argument, a disciplined collection, and Decision Briefs that never mix languages. Where Chinese is incomplete, the product is honest—invite English with one click—rather than improvising a bilingual collage.

**Not in scope (intentionally unchanged):** SRE, PVF, SKB, research conclusions, login, search, comments, AI features.

**Residual known limits:** Only DB-001 has an authored Chinese brief body; DB-002–010 correctly show the preparation notice until translations exist.
