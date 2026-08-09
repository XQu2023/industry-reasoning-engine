# Sprint Review 002 — SRE-106 to SRE-110

| Field | Value |
| --- | --- |
| Scope | `reports/SRE-106-ASML-EUV.md`, `reports/SRE-107-Transformer.md`, `reports/SRE-108-Apple-M1.md`, `reports/SRE-109-Tesla-Gigafactory.md`, `reports/SRE-110-Cloudflare.md` |
| Standard reviewed against | `RESEARCH_REPORT_STANDARD.md` v1.1 (repository), plus the sprint attribution / confidence / traceability rules referred to in-report as v1.1.1 practice; `VALUE_CAPTURE_METHODOLOGY.md` v1.0; `SRE_GLOSSARY.md` v1.0; `SRE_PRODUCT_SPEC.md` v1.0 |
| Prior review | `docs/reviews/SPRINT_REVIEW_001.md` (SRE-101–105) |
| Reports reviewed | 5 |
| Validation | `npm run typecheck` pass; `npm test` 41/41 pass |
| Files modified by this review | None other than this document. |

Counts below are *n*/5. Findings cite report and section.

---

## 1. Execution Consistency

Compared with Sprint Review 001, this cohort is materially more uniform in form and more discriminating in substance.

**What converged (5/5).**

| Contract | Status in SRE-106–110 |
| --- | --- |
| Sections 1–10 in fixed order | Present in all five |
| Numbered §2 fact ledger + downstream `[fact n]` citations | Present in all five |
| §2 “Not stated… Unknown” close | Present in all five |
| §6 migration-wide confidence tag | Present in all five (all Medium) |
| §6 standing sentence *Potential value reallocation. Requires later market verification.* | Present in all five |
| §9 Assumptions / Weaken / Invalidate | Present in all five |
| §10 signal table with `Horizon` + `Absence implies` + Hypothesis/Unknown closure table | Present in all five |
| Every Value Capture conclusion tagged with one evidence label and one confidence level | Present in all five |
| No `Compliance Record` appendix (SRE-105 defect not repeated) | Absent in all five |

Sprint Review 001’s formatting failures (SRE-105 §6/§9/§10 drift) do not recur. Standards rule 5 (diffable structure) is met for this set.

**What still varies (execution, not format).**

| Dimension | Observation |
| --- | --- |
| Tier outcomes | Discriminating: Tier 1 assigned (106 immersion-only, 108, 109); Tier 1 vacant (107, 110); Tier 2 vacant (106, 107, 108, 109); Tier 2 assigned (110 Cloudflare) |
| Bottleneck column | Four reports mark exactly one `Bottleneck: Yes` as Reasoned Inference; **SRE-107 marks none** — correctly, because open publication removes scarcity of the architecture |
| §8 row counts | 2 / 0 / 2 / 2 / 0 — empty tables are justified when listing is not established (107, 110) |
| Source pack | Single PR (110), single paper (107), dual newsroom (108), triple ASML (106), blog+8-K+10-K (109) — all same-day / T0-locked; no post-T0 verification content mixed into facts |
| §8 listing proof | Inconsistent application — see Failure Pattern F2 |

**Verdict on consistency.** Workflow execution is now repeatable enough to compare reports by diffing sections. Remaining inconsistency is analytical discipline on §8 inclusion, not section shape.

---

## 2. Repeated Failure Patterns

Ranked by how much each still changes what a reader can conclude.

| Rank | Pattern | Frequency |
| ---: | --- | --- |
| 1 | Magnitude of value capture never established (Step 4 returns Unknown) | 5/5 |
| 2 | §8 “listing established by T0 source” rule applied unevenly | 2/5 defective relative to peers |
| 3 | Migration confidence pinned at Medium regardless of source strength | 5/5 |
| 4 | Self-referential compliance narration in §9 | 5/5 |
| 5 | Announcer-centric §8 when rows exist (supply end still unattributed) | 3/3 of non-empty §8 tables |

### F1 — Magnitude never established (5/5)

`VALUE_CAPTURE_METHODOLOGY.md` §4 Step 4 remains incomplete in every report. SRE-106: “Magnitude of capture: Unknown.” SRE-107: “Economic profit capture is **not measurable**.” SRE-108 / SRE-109 / SRE-110: position assigned or vacated; share retained Unknown. Cause unchanged from Review 001: T0 announcements disclose capability, sometimes price or CapEx, never cost-to-serve vs surplus retained. The methodology discriminates *position*; it does not yet measure *retained share* on this input class.

### F2 — §8 listing-rule unevenness (2/5)

SRE-106 establishes listing in §2 (ASML Euronext/NASDAQ; TSMC TWSE/NYSE) before §8. SRE-107 and SRE-110 correctly leave §8 empty when the source names entities but does not establish listed status. Against that standard of care:

- **SRE-108** enters Apple and Intel while its own §2 Unknown list states “public-listing ticker text for any company” is Unknown. Inclusion rule text is present; listing proof is not.
- **SRE-109** establishes Tesla on NASDAQ via Form 10-K fact 19, then also enters **Panasonic Corporation** with no exchange or listing statement in any T0 source used.

This is an execution defect against the inclusion rule the reports themselves recite, not a gap in the written standard. It is the most actionable failure remaining in this cohort.

### F3 — Confidence always Medium on migration (5/5)

Every §6 tags Medium with a similar justification (undisclosed magnitude / open alternatives). SRE-106’s immersion chain is materially better grounded than SRE-110’s free-tier beta claims; SRE-107’s architectural migration is grounded in the paper’s own comparisons. The label no longer separates strong from weak migration evidence inside this sprint. That compresses the confidence system’s information content.

### F4 — Compliance narration (5/5)

All five close §9 with a near-verbatim line that weakening and invalidating conditions are “kept separate deliberately.” Process talk belongs in reviews, not in the research artifact. Length cost is real; evidentiary value is zero.

### F5 — Supply end unattributed; §8 stays announcer-led (3/3 non-empty)

Where §8 has rows, they are the announcing OEM/equipment vendor plus at most one named counterparty (TSMC; Intel displaced; Panasonic merchant). Precursor, foundry, optics, transit, and partner layers remain correctly unattributed under no-inference — and therefore §8 still cannot answer “who else captures.” Faithful to P0; still a product ceiling.

**Patterns from Review 001 that improved.**

- Forward language in §2: still present, but attributed to the publisher in all cases, matching the sprint’s v1.1.1 attribution practice (and Review 001’s recommended repair).
- §6/§9/§10 formatting drift: fixed.
- Habit of always one `Bottleneck: Yes`: broken productively by SRE-107.

---

## 3. Best Practices

Only practices shown by more than one report, and load-bearing.

### BP1 — Vacant tiers defended from disclosed facts (4/5)

SRE-107 vacates Tier 1 and Tier 2 from openness of the architecture. SRE-110 vacates Tier 1 from free core + simple domain join + no switching cost. SRE-106 / SRE-108 / SRE-109 vacate Tier 2 rather than inventing partners or foundries. Vacancy is now a routine, evidence-backed output — the clearest proof the tier frame measures something.

### BP2 — Split the announcement headline from the capture object (2/5, high value)

SRE-106 assigns Tier 1 on **immersion** evidence and records EUV-specific capture as Unknown. SRE-109 assigns Tier 1 on plan/demand/CapEx ownership and refuses to name Panasonic as Gigafactory partner because partnerships are “not formalized.” Both prevent the press headline from selecting the capturer.

### BP3 — Zero `Bottleneck: Yes` when scarcity is published away (1/5, should become habit)

SRE-107’s reading note states that marking architecture design as bottleneck would contradict open disclosure. That is the correct use of the column after Review 001 criticized mechanical single-bottleneck filling.

### BP4 — Counter-evidence beside the Tier call (4/5)

SRE-106 lists maturity language, unnamed “others,” and missing price against its own Tier 1. SRE-108 records Mac mini price cut and Apple-tested claims. SRE-109 records no cell experience and unformalized partners. SRE-110 records free core against Tier 2. Keeps Medium confidence honest.

### BP5 — Source-integrity / retrieval notes when the primary URL is incomplete (3/5)

SRE-106 (multi-release same day), SRE-109 (blog PDF unrecovered; 10-K used for quantitative plan; no invented GWh), SRE-110 (single official PR; third-party Disrupt coverage excluded). Limits are stated before reasoning begins.

### BP6 — Empty §8 when listing is not established (2/5)

SRE-107 and SRE-110. Correct and should be the template for every private-company or academic T0.

### BP7 — Numbered facts + Unknown close (5/5)

Unchanged from Review 001; still the audit backbone. No new §2→§7 ghost facts of the SRE-101 class were found in spot checks of this cohort’s Tier mechanisms against cited fact IDs.

---

## 4. Specification Validation

**Does any evidence justify changing SRE v1.1.1?**

NO

Remaining defects in this cohort are execution against rules the reports already recite (especially §8 listing proof) or inherent limits of T0 announcement inputs (Step 4 magnitude). They do not justify a new mandatory specification change. The forward-language attribution practice assumed by this sprint’s v1.1.1 runs is already the working rule; ratifying it into the repository `RESEARCH_REPORT_STANDARD.md` text remains an open item from Sprint Review 001, not a new finding from SRE-106–110.

---

## 5. Overall Production Readiness

**Beta**

| Bar | Assessment |
| --- | --- |
| Alpha | Cleared. Structure, labels, Unknown discipline, and vacant-tier behavior work across dissimilar source types (equipment PR cluster, research paper, consumer silicon, industrial CapEx plan, free SaaS beta). |
| Beta | Met. Section contracts are diffable; typecheck and tests pass; capture calls discriminate (assigned vs vacant; immersion vs EUV; free-core Tier 1 vacancy). |
| Production Ready | Not met. §8 listing inclusion is not uniformly enforced; Step 4 magnitude remains permanently Unknown on this input class without an explicit product acceptance criteria; confidence labels do not yet separate strong from weak migrations; compliance narration still pollutes artifacts; no automated report lint for preflight checks. |

**Readiness implication.** Suitable for internal comparative research and methodology iteration. Not suitable to freeze as an external deliverable standard until §8 inclusion is applied as strictly as in SRE-107/110 and until the product either (a) accepts “magnitude Unknown” as the standing Step 4 answer for announcement-only T0 packs or (b) requires a second evidence class before claiming production completeness.

---

## Cohort quality notes (non-scoring)

| Report | Dominant strength | Dominant residual weakness |
| --- | --- | --- |
| SRE-106 ASML EUV | Headline/capture split (immersion Tier 1; EUV Unknown) | Supply layers remain empty; no competitor named anywhere |
| SRE-107 Transformer | Vacant Tier 1/2 + zero bottleneck from open publication | §8 empty by rule; commercial world invisible at T0 |
| SRE-108 Apple M1 | Clean SoC+OS retention mechanisms; no foundry inference | §8 listing not established in T0 text |
| SRE-109 Tesla Gigafactory | Refuses inferred Gigafactory partner; early-stage risks explicit | Panasonic §8 row without listing proof; Tier 1 rests on plan not cells |
| SRE-110 Cloudflare | Vacant Tier 1 from free core + weak join friction | Vendor performance averages drive migration without methodology |

---

*Review only. No report, prompt, benchmark, engine, schema, or specification file was modified. Validation: typecheck pass; 41/41 tests pass.*
