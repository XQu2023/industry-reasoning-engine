# PVF Report Template

Use with `docs/specs/PREDICTION_VALIDATION_FRAMEWORK.md` v1.0.

Copy this file to the validations path declared in the framework (for example `docs/validations/PVF-<SRE-ID>-<HORIZON>-<YYYYMMDD>.md`).  
Do **not** edit the original SRE report.

---

# PVF — \<SRE-ID\> — \<Short Subject\>

| Field | Value |
| --- | --- |
| SRE report | `reports/<SRE-filename>.md` |
| SRE T0 | YYYY-MM-DD |
| Framework | `PREDICTION_VALIDATION_FRAMEWORK.md` v1.0 |
| Validation date | YYYY-MM-DD |
| Horizons evaluated | H3 / H6 / H12 / H24 / H60 (list all that apply) |
| Latest for this SRE? | Yes / No — if Yes, supersedes: \<prior PVF path or None\> |
| Validator | \<name or agent id\> |

---

## Original Thesis

Restate only what the SRE claimed at T0. No updating. Cite SRE sections.

**Industry Change (A).**  
\<One paragraph from SRE §4 — paraphrase with section citations.\>

**Value Migration (B).**  
\<Origin → destination from SRE §6; confidence tag as published.\>

**Value Capture (C).**  
\<Mechanism and magnitude stance from SRE §7.\>

**Tier Assignment (D).**  
\<Tier 1 / 2 / 3 / 4 / vacant calls as published.\>

**Monitoring Signals (E).**  
\<List the SRE §10 signals in scope for this horizon, or point to the §10 table.\>

**Standing sentence (if present).**  
\<e.g. Potential value reallocation. Requires later market verification.\>

---

## Validation Date

| Item | Value |
| --- | --- |
| Validation date | YYYY-MM-DD |
| Horizon under primary scoring | H\<n\> (elapsed: \<approx months\> after T0) |
| Other horizons in this file | \<none or list\> |

---

## New Evidence

Only material **after** T0. Each row is a fact record; interpretation belongs in Dimension Review.

| ID | Date | Source | Evidence (fact only) | Class (P0 / secondary) | Confidence |
| --- | --- | --- | --- | --- | --- |
| E1 | YYYY-MM-DD | \<publisher, document\> | \<observable statement\> | P0 / secondary | High / Medium / Low |
| E2 | YYYY-MM-DD | | | | |

**Excluded material (if any).**  
\<Undated, non-attributable, or pre-T0 items considered and rejected.\>

---

## Dimension Review

One outcome per dimension per primary horizon. Use only: Confirmed | Partially Confirmed | Unchanged | Weakened | Falsified | Unknown.

### A. Industry Change

| Field | Content |
| --- | --- |
| Outcome | \<outcome\> |
| Horizon | H\<n\> |
| Evidence | \<E# refs + brief link to claim\> |
| Date | \<of decisive evidence\> |
| Source | \<publisher / doc\> |
| Confidence | High / Medium / Low |
| Rationale | \<interpretation; keep separate from evidence row text\> |

### B. Value Migration

| Field | Content |
| --- | --- |
| Outcome | \<outcome\> |
| Horizon | H\<n\> |
| Evidence | |
| Date | |
| Source | |
| Confidence | |
| Rationale | |

### C. Value Capture

| Field | Content |
| --- | --- |
| Outcome | \<outcome\> |
| Horizon | H\<n\> |
| Evidence | |
| Date | |
| Source | |
| Confidence | |
| Rationale | |

### D. Tier Assignment

| Field | Content |
| --- | --- |
| Outcome | \<outcome\> |
| Horizon | H\<n\> |
| Evidence | |
| Date | |
| Source | |
| Confidence | |
| Rationale | |

### E. Monitoring Signals

| Field | Content |
| --- | --- |
| Outcome | \<outcome\> |
| Horizon | H\<n\> |
| Evidence | |
| Date | |
| Source | |
| Confidence | |
| Rationale | |

**Signal-level checklist (optional but recommended).**

| SRE signal # | Expected by | Observed? | Notes |
| ---: | --- | --- | --- |
| 1 | | Yes / No / Unknown | |

---

## Final Status

### Prediction Accuracy

| Dimension | Weight | Outcome | Points | Weighted |
| --- | --- | ---: | ---: | ---: |
| A Industry Change | 20 | | | |
| B Value Migration | 20 | | | |
| C Value Capture | 25 | | | |
| D Tier Assignment | 20 | | | |
| E Monitoring Signals | 15 | | | |
| **Total** | **100** | — | — | **\<0–100\>** |

**Prediction Accuracy: \<integer 0–100\>**

Points key: Confirmed 100 · Partially Confirmed 65 · Unchanged 40 · Weakened 25 · Unknown 35 · Falsified 0.

### Report Card

| Field | Content |
| --- | --- |
| Biggest success | |
| Biggest miss | |
| Lessons learned | |

### Final status line

\<One sentence: overall thesis status at this horizon — e.g. “At H12 the T0 thesis is Partially Confirmed; capture magnitude remains Unknown.”\>

---

## Lessons

Process and methodology only. Do not edit the SRE.

1. \<lesson\>
2. \<lesson\>
3. \<lesson\>

---

*PVF artifact only. Original SRE report was not modified. No investment recommendation.*
