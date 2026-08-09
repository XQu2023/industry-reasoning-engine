# Prediction Validation Framework v1.0

Prediction Validation Framework (PVF) — specification for testing whether Strategic Research Engine (SRE) reports have predictive power over time.

Status: specification and template only. No implementation, no prompt changes, no engine changes, no benchmark changes, and no modification of existing SRE reports are authorized by this document.

Relationship to existing work: SRE produces a T0-locked Strategic Research Report under `SRE_PRODUCT_SPEC.md`, `RESEARCH_REPORT_STANDARD.md`, and `VALUE_CAPTURE_METHODOLOGY.md`. PVF does not rewrite that report. PVF appends a separate validation artifact that scores whether later, dated evidence confirms, weakens, or falsifies the original T0 thesis.

---

## 1. Purpose

**Prediction validation** measures whether the original T0 thesis in an SRE report is **confirmed**, **weakened**, or **falsified** by later evidence.

Three objects are held apart:

| Object | What PVF asks |
| --- | --- |
| Original T0 thesis | What did the SRE report claim at freeze time, on P0 evidence only? |
| Later evidence | What dated, attributable material appeared after T0? |
| Validation judgment | Relative to that thesis, is each dimension confirmed, weakened, or falsified? |

PVF exists because a well-formed SRE report can still be wrong about the future. Structural clarity at T0 is not predictive power. Predictive power is established only when named monitoring signals and capture claims meet (or fail to meet) subsequent evidence on stated horizons.

PVF is not:

- a rewrite of the SRE report
- a new research unit with a new T0
- an investment recommendation, rating, or price target
- a license to import hindsight into the original facts section

---

## 2. Validation Principles

1. **Never modify the original SRE report.** The T0 artifact is immutable once published. Typos and format defects are out of scope for PVF; they are handled, if at all, by a separate report process, never by silent edit during validation.

2. **Validation is appended, never rewritten.** Each validation run produces a new PVF report (or a dated addendum file) stored separately from the SRE report. Prior PVF reports for the same SRE are retained; later runs do not overwrite earlier judgments without an explicit supersession note.

3. **Evaluate only against the original T0 thesis.** The unit of comparison is what the SRE claimed at T0 — Industry Change, Value Migration, Value Capture, Tier Assignment, and Monitoring Signals as written. Later narratives, market folklore, or a better thesis the analyst wishes they had written are irrelevant.

4. **Use dated evidence.** Every evidence item used in validation carries a publication or filing date strictly after T0 (or, for horizon checks, within the horizon window under evaluation). Undated material is inadmissible.

5. **Distinguish facts from interpretation.** Validation evidence records what a source states. Outcomes (Confirmed, Weakened, Falsified, etc.) are labeled judgments. A fact may not be silently upgraded into a validation outcome without an explicit dimension call.

Additional operating rules:

- **Horizon lock.** A validation run declares which horizon(s) it evaluates. Evidence outside the declared horizon may be noted as context but does not decide that horizon’s outcomes unless the run is explicitly multi-horizon.
- **No T0 contamination.** Material on or before T0 may be cited only to restate the original thesis, never as “new evidence.”
- **Unknown is valid.** Absence of evidence at a horizon yields `Unknown` or `Unchanged` as defined in §5 — not inventive confirmation.
- **Falsifiers win.** If a named invalidating condition from the SRE §9 / §10 path occurs, the affected dimension cannot be scored `Confirmed`.

---

## 3. Validation Horizons

Every PVF run evaluates one or more of the following horizons, measured from the SRE report’s frozen `T0`:

| Horizon code | Elapsed time from T0 |
| --- | --- |
| H3 | 3 months |
| H6 | 6 months |
| H12 | 12 months |
| H24 | 24 months |
| H60 | 60 months |

Rules:

- Horizons are fixed. Custom intervals are not part of v1.0.
- A single PVF report may cover one horizon or several; each dimension outcome is tagged with the horizon it applies to.
- Early horizons may return `Unknown` or `Unchanged` more often; that is expected, not a defect.
- A claim that was `Confirmed` at H12 may be `Weakened` or `Falsified` at H24. Later horizons do not erase earlier PVF reports; they supersede only for forward-looking accuracy summaries when explicitly marked as the latest run.

---

## 4. Validation Dimensions

For every SRE report, PVF evaluates exactly these five dimensions:

| Code | Dimension | What is tested |
| --- | --- | --- |
| **A** | Industry Change | Did the concrete change described in the SRE (§4 Industry Change / equivalent) occur, stall, or reverse? |
| **B** | Value Migration | Did value move from the stated origin layers toward the stated destination layers? |
| **C** | Value Capture | Did the named retention mechanism operate such that surplus accrued as claimed (or remain Unknown as claimed)? |
| **D** | Tier Assignment | Did Tier 1 / Tier 2 / vacant-tier calls hold, upgrade, or fail against later structure? |
| **E** | Monitoring Signals | Did the SRE’s §10 signals appear on the stated horizons, and did absence implications match reality? |

Dimension rules:

- All five dimensions are mandatory in every PVF report. None may be skipped.
- Each dimension receives exactly one outcome from §5 per declared horizon.
- Dimension D evaluates the tier map as published (including vacant tiers). Vacant Tier 1 that later fills with the same participant the SRE excluded is a miss against vacancy only if the SRE claimed vacancy would persist; otherwise score against what was actually claimed.
- Dimension E scores the signal set as a portfolio: individual signals may confirm while the portfolio is only `Partially Confirmed`.
- Magnitude claims that the SRE marked `Unknown` are not failed for remaining unknown; they fail only if the SRE asserted a measurable capture magnitude that later evidence contradicts.

---

## 5. Validation Outcomes

Each dimension, at each declared horizon, must be exactly one of:

| Outcome | Meaning |
| --- | --- |
| **Confirmed** | Later dated evidence supports the T0 claim on this dimension with no material contradiction. |
| **Partially Confirmed** | Material parts of the claim hold; other material parts fail, stall, or remain unresolved. |
| **Unchanged** | No material confirming or contradicting evidence has appeared; the thesis is neither advanced nor impaired. |
| **Weakened** | Later evidence cuts against the claim’s strength, scope, timing, or confidence, without fully replacing it. |
| **Falsified** | A named falsifier occurred, or the core claim is contradicted such that the T0 position on this dimension cannot stand. |
| **Unknown** | Evidence is missing, undated, non-attributable, or insufficient to judge — including when the horizon has not produced observable tests. |

Outcome rules:

- Exactly one outcome per dimension per horizon. No dual labels, no ranges.
- `Confirmed` requires positive supporting evidence, not merely the absence of falsification.
- `Unchanged` is preferred over `Confirmed` when nothing relevant happened.
- `Unknown` is preferred over speculative `Weakened` or `Partially Confirmed`.
- If outcomes conflict across sub-claims inside one dimension, use `Partially Confirmed` or `Weakened` rather than forcing `Confirmed`.

---

## 6. Validation Evidence

Every validation conclusion (each dimension outcome, and any roll-up used for the Report Card) must include:

| Field | Requirement |
| --- | --- |
| **Evidence** | What was observed — paraphrase or short quotation; no unsupported assertion |
| **Date** | Publication, filing, or official announcement date of the evidence |
| **Source** | Attributable publisher and document identity (URL or filing ID when available) |
| **Confidence** | `High`, `Medium`, or `Low` |

Confidence guide (aligned in spirit with `VALUE_CAPTURE_METHODOLOGY.md` §6):

| Level | When to use |
| --- | --- |
| **High** | First-party or regulatory primary source; dates clear; directly tests the named claim |
| **Medium** | Credible attributable source; inference required to map evidence onto the T0 claim |
| **Low** | Indirect, incomplete, or thinly attributable mapping; or single anecdotal datapoint |

Evidence class rules for PVF (distinct from SRE T0 input rules):

- PVF **may** use post-T0 P0 sources (official releases, filings, official docs) as primary validation evidence.
- PVF **may** use non-P0 sources (journalism, research, datasets) only when dated and attributable, and must label them as secondary. Secondary evidence alone cannot support `Confirmed` at High confidence.
- PVF **must not** use undated social posts, anonymous leaks, or unverifiable private checks.

---

## 7. Report Card

Each validated SRE receives a **Prediction Accuracy** score and three qualitative fields.

### 7.1 Prediction Accuracy (0–100)

A single integer from 0 to 100 inclusive for the declared horizon set of the PVF run.

**Default v1.0 weighting** (must be stated in every PVF report; weights sum to 100):

| Dimension | Weight |
| --- | --- |
| A Industry Change | 20 |
| B Value Migration | 20 |
| C Value Capture | 25 |
| D Tier Assignment | 20 |
| E Monitoring Signals | 15 |

**Outcome points** (per dimension, before weighting):

| Outcome | Points |
| --- | --- |
| Confirmed | 100 |
| Partially Confirmed | 65 |
| Unchanged | 40 |
| Weakened | 25 |
| Unknown | 35 |
| Falsified | 0 |

Computation:

1. For each dimension, take points from the outcome table.
2. Multiply by dimension weight / 100.
3. Sum across dimensions.
4. Round to nearest integer. Record the unrounded sum in an appendix line if desired.

Multi-horizon runs: either (a) publish one Report Card per horizon, or (b) publish a single card for the latest completed horizon and list earlier horizon cards by reference. Do not average horizons into one score unless the PVF report explicitly declares an equal-weight multi-horizon average and shows the arithmetic.

### 7.2 Qualitative fields (required)

| Field | Content |
| --- | --- |
| **Biggest success** | The T0 claim that held most clearly, with evidence pointer |
| **Biggest miss** | The T0 claim that failed or weakened most clearly, with evidence pointer |
| **Lessons learned** | Process or methodological lessons for future SRE reports — not a rewrite of the original |

Prohibitions on the Report Card: no buy/sell/hold, no price, no target, no position-sizing language.

---

## 8. Version Rule

1. **Original SRE report never changes.** Path and content of `reports/SRE-*.md` (or successor locations) remain frozen for PVF purposes.
2. **Validation is stored separately.** PVF outputs live under a distinct path convention, for example:
   - `docs/validations/PVF-<SRE-ID>-<HORIZON>-<YYYYMMDD>.md`
   - or `docs/validations/<SRE-ID>/PVF-<HORIZON>-<YYYYMMDD>.md`
3. **One validation artifact per run.** A run is identified by SRE id, horizon set, and validation date.
4. **Supersession is explicit.** If a new PVF run replaces a prior run’s Report Card as “latest,” the new file states which prior file it supersedes. Prior files are not deleted.
5. **Version of this framework.** This document is **PVF v1.0**. PVF reports must record the framework version used. Changing this framework does not rewrite past PVF reports or any SRE report.

---

## Consistency notes

- Evidence labels inside the original SRE (`Evidence-supported`, `Reasoned Inference`, `Hypothesis`, `Unknown`) are part of the T0 thesis to be tested; PVF outcomes in §5 are a separate vocabulary and must not be mixed into the SRE file.
- SRE §10 Monitoring Signals are the preferred test hooks for Dimension E. If a signal’s horizon in the SRE does not match a PVF horizon code, map to the nearest PVF horizon and record the mapping.
- Vacant Tier 1 at T0 that remains vacant is eligible for `Confirmed` on Dimension D when vacancy was the claim.

---

## Change Control

| Version | Date | Notes |
| --- | --- | --- |
| v1.0 | 2026-08-09 | Initial Prediction Validation Framework (specification + template authorization only) |
