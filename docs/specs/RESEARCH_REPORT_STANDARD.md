# Strategic Research Report Standard v1.1

Supersedes v1.0. Change in this version (SRE-102): a mandatory **Value Chain Analysis** section is inserted as §5, and the sections that followed it are renumbered to §§6–10. Adding a section is a version-bump event under this document's own Change Control, which is why the version advances rather than amending v1.0 in place.

Output standard for the single artifact defined in `docs/specs/SRE_PRODUCT_SPEC.md` §4.

Status: specification only. No implementation, no prompt changes, no schema changes are authorized by this document.

Scope: this document fixes the shape, content contract, and failure conditions of every Strategic Research Report. The product spec says *that* there is one standardized report; this standard says exactly *what it contains* and *when it is invalid*.

---

## Conventions used throughout

**Evidence labels.** Four labels only, as defined in `SRE_GLOSSARY.md` v1.0. There is no fifth, and no numeric probability.

| Label | Meaning | Required backing |
| --- | --- | --- |
| `Evidence-supported` | A P0 source directly supports the claim | Citation to a specific P0 document |
| `Reasoned Inference` | A logical conclusion derived from verified facts through explicit reasoning, but not directly stated by the source | Visible reasoning steps, each input fact cited |
| `Hypothesis` | Reasoning is sound but no P0 source closes the step | Named evidence that would confirm it, recorded in §10 |
| `Unknown` | Available P0 material does not support a claim either way | Statement of what is missing |

**Confidence levels.** Separate from the evidence label. Three levels — `High`, `Medium`, `Low` — assessed per `VALUE_CAPTURE_METHODOLOGY.md` §6. A label describes what kind of support exists; confidence describes how much weight the conclusion can bear.

**Citation format.** Every fact and every evidence item carries `[Publisher, document type, publication date]`. A claim without a citation is not a fact; it is either `Hypothesis` or `Unknown`.

**T0 discipline.** All content derives from material published on or before the report's frozen `T0` date. Hindsight language is a defect, not a style issue.

**Facts / reasoning separation.** §2 contains facts. §§3–7 contain reasoning over those facts. Reasoning may reorganize and interpret facts; it may never introduce a new one. A fact appearing for the first time in a reasoning section is a defect.

---

## 1. Executive Summary

**Purpose.** Let a reader who stops after this section leave with the correct conclusion and no false confidence.

**Required content:**

- **One-paragraph summary.** Prose, not bullets. States the observable change, the value migration it implies, and the strength of support in one pass.
- **Key conclusion.** A single sentence naming where value moves and who is positioned to retain it, tagged with its confidence value.
- **Top companies for further research.** Names only, each with a one-line reason and confidence tag.

**Prohibitions.** No prices, valuations, targets, entry points, or horizons expressed as actions. No new facts introduced here that do not appear in §2. The company list is explicitly labeled *for further research* and carries the standing disclaimer that it is not a recommendation and not ranked by attractiveness.

**Invalid if:** the confidence tag on the key conclusion is stronger than the evidence in §2 supports, or the summary asserts a completed value shift that §6 labels `Hypothesis`.

---

## 2. Evidence

**Purpose.** Establish the factual floor for everything that follows.

**Required content.** A list of verified facts, each one:

1. Observable and stated in a P0 source.
2. Accompanied by its citation.
3. Written without interpretation.

**Prohibitions.** No inference of any kind. No causal language ("because", "which means", "indicating"), no evaluative language ("strong", "impressive", "dominant"), no forward language ("will", "is set to"). Aggregation across sources is inference and belongs in §§3–7.

**Invalid if:** any fact lacks a citation, any fact postdates `T0`, or any fact cannot be located in the cited document. A single fabricated fact or invented source invalidates the entire report regardless of the quality of the rest.

---

## 3. Customer Problem

**Purpose.** Identify the demand-side reason the change matters.

**Required content.** What end-user or system-level problem changed. Specifically: what the buyer could not previously do or afford, and what shifted in that constraint.

**Prohibitions.** Do not substitute a supplier-side constraint (a manufacturing limit, a margin pressure, a capacity shortage) for the customer's problem. Do not restate the product as the problem.

**Invalid if:** the section describes only a technical characteristic with no identified party who is worse off without it. If the P0 material does not disclose the end problem, the section reads `Unknown` with a statement of what is missing.

---

## 4. Industry Change

**Purpose.** Name the structural change, distinguishing it from an event.

**Required content.**

- The concrete change occurring or about to occur.
- Which system requirement shifts as a result.
- Why the prior or lower-specification solution becomes insufficient.
- Whether the change is structural (alters what participants must do) or cyclical (alters volume only). This determination is explicit.

**Prohibitions.** No summarizing of the announcement as though restatement were analysis. Sequence is not causation; if a step in the chain has no P0 support, that step reads `Unknown` rather than being bridged with plausible language.

**Invalid if:** the section is a paraphrase of §2 with no identified requirement change, or a cyclical change is presented as structural.

---

## 5. Value Chain Analysis

**Purpose.** Describe how value flows through the industry value chain after the identified industry change.

This section is a map, not a conclusion. It establishes the terrain — which layers exist, which are scarce, which constrain the system — that §§6–7 then reason over. It is mandatory in every report.

**Required content.** For each major value-chain layer, record:

| Layer | Role | Scarcity | Bottleneck | Expected Value Change | Evidence Label |
| --- | --- | --- | --- | --- | --- |

Column contracts:

- **Layer** — the value-chain layer, named at a consistent level of granularity across rows (for example: process manufacturing, component supply, system integration, deployment, application software).
- **Role** — what the layer does in delivering the changed outcome. Function only; no assessment of position.
- **Scarcity** — `Yes` / `No` / `Unknown`. Whether the layer's capability or resource is limited relative to demand.
- **Bottleneck** — `Yes` / `No` / `Unknown`. Whether the layer constrains value creation or system performance.
- **Expected Value Change** — `↑` / `→` / `↓` / `Unknown`. Direction only. No magnitude, no ranking, no timing.
- **Evidence Label** — one of the four allowed labels below, applied to that row's assessment.

**Allowed Evidence Labels**

- `Evidence-supported`
- `Reasoned Inference`
- `Hypothesis`
- `Unknown`

**Rules**

- Separate facts from reasoning. The existence and role of a layer is drawn from §2; scarcity, bottleneck, and direction of value change are reasoning and are labeled as such.
- Do not infer missing participants. Where the P0 source establishes that a layer must exist but names no participant in it, the layer is recorded and left unattributed. Supplying a plausible name is a defect.
- `Unknown` remains `Unknown`. A blank cell is not permitted, and `Unknown` is never upgraded to a direction because a direction seems likely.
- Do not identify winners in this section. No company is named as capturing value here; that determination belongs to §§7–8.
- This section only maps the value chain. No thesis, no recommendation, no ranking of layers by attractiveness.

**Invalid if:** any cell is blank; `Scarcity`, `Bottleneck`, or `Expected Value Change` uses a value outside its permitted set; a row carries no evidence label; a participant is named in a layer that the P0 source does not place there; or the section states or implies which participant captures the value.

---

## 6. Value Migration

**Purpose.** State where value moves, and why it must.

**Required content.**

- **Where.** From which layer, function, or participant, to which. Both ends named. "Value moves to software" is insufficient; the origin must be stated. Origins and destinations use the layers established in §5.
- **Why.** The causal link from the requirement change in §4 to the reallocation, step by step, so a reader can attack any individual link.
- **Confidence tag** on the migration as a whole.

**Prohibitions.** Never describe a value shift as already complete unless P0 evidence explicitly supports that. Where evidence supports only a direction, state: *"Potential value reallocation. Requires later market verification."*

**Invalid if:** a destination is named without an origin, or the causal chain skips from observable change directly to beneficiary without the intervening requirement and capability steps.

---

## 7. Value Capture

**Purpose.** Separate who touches the value from who retains it.

**Required content.**

- **Direct beneficiaries.** Participants whose economics change as a first-order consequence, with the structural reason they can retain the gain — position, switching cost, scarcity, standard ownership, or installed base.
- **Indirect beneficiaries.** Participants who gain through a second-order path, with that path stated explicitly.
- **Confidence.** Tagged separately for direct and indirect, since indirect claims are almost always weaker.
- **Supporting evidence.** Citations, or the named evidence that would be required to close the step.

**Prohibitions.** Revenue exposure is not capture. A participant that passes value through under competitive pressure is not a beneficiary and must not be listed as one. Do not list a beneficiary whose only qualification is category adjacency.

**Invalid if:** any beneficiary appears with no stated retention mechanism, or capture is asserted at higher confidence than the migration in §6 that produces it.

---

## 8. Listed Companies

**Purpose.** Make the company-level implications auditable, one row at a time.

**Required format.** A table with exactly these columns:

| Company | Role | Why | Evidence | Confidence |
| --- | --- | --- | --- | --- |

Column contracts:

- **Company** — legal or commonly used entity name. Publicly listed only in this section; private participants belong in §7 prose.
- **Role** — position in the value chain (for example: supplier, platform, integrator, standard owner, substituted incumbent), consistent with the layers mapped in §5. Negatively affected participants are included and labeled as such.
- **Why** — the structural reason this company is positioned as stated, traceable to §6 and §7.
- **Evidence** — citation to P0 material, or `Unknown: <what is missing>`.
- **Confidence** — one of the three confidence levels: `High`, `Medium`, or `Low`.

**Prohibitions.** No ordering that implies attractiveness. No price, market-cap, valuation, or share-based columns. No target, rating, weighting, or sizing. Companies must not be added merely for coverage completeness; a thin thesis on a large name is worse than its omission.

**Invalid if:** any row carries `Evidence-supported` support without a citation, the table is sorted or presented as a ranked list, or the section reads as a screen rather than as consequences of §§6–7.

---

## 9. Risks

**Purpose.** Expose the thesis to attack on its own terms.

**Required content.**

- **Assumptions that could fail.** The load-bearing assumptions, stated as claims that could turn out false — not as generic risk categories. Each names the section it supports.
- **What would invalidate the thesis.** Concrete, checkable conditions. Each falsifier is specific enough that a later reader can determine whether it occurred.

**Prohibitions.** No boilerplate risk language ("competition may increase", "execution risk", "macro conditions"). No risk that would not actually change the conclusion if it materialized.

**Invalid if:** no stated falsifier could realistically occur, or the section lists risks that leave the conclusion intact either way — that is decoration, not falsification.

---

## 10. Monitoring Signals

**Purpose.** Convert the thesis into something verifiable over time.

**Required content.**

- **Future indicators.** Observable, publicly checkable developments that would confirm or weaken the thesis. Each names the source class where it would appear (filing, official documentation, investor presentation).
- **Verification milestones.** Each indicator paired with the horizon by which it would be expected, and what its absence by that point would imply.
- Every `Hypothesis` and `Unknown` recorded anywhere in the report appears here with the evidence that would close it.

**Prohibitions.** No signals that require non-public information. No trading triggers, entry conditions, or action language.

**Invalid if:** any `Hypothesis` from §§5–8 has no corresponding closure path here.

---

## Standards

Binding rules for every report. These are pass/fail, not guidance.

1. **Facts and reasoning separated.** Facts live in §2 with citations. Reasoning lives in §§3–7 and adds no facts. Violation is a defect regardless of whether the reasoning is correct.
2. **Evidence required for every conclusion.** Each conclusion is `Evidence-supported` with a citation, `Reasoned Inference` with visible reasoning over cited facts, `Hypothesis` with a named closure path, or `Unknown`. Nothing else is publishable.
3. **Unknown explicitly marked.** `Unknown` is a valid and preferred output where evidence is absent. Sections are never dropped or silently omitted to avoid it; unsupported certainty is penalized more heavily than omission.
4. **No investment recommendation.** No buy, sell, hold, rating, price, valuation, target, position size, or timing. §§1 and 8 name companies for further research only.
5. **Fixed structure for every report.** All ten sections, in this order, in every report, with §5 and §8 in their specified column formats. No abridged variants and no reordering, so reports remain comparable across cases and diffable over time.

**Section order.** Fixed at v1.1:

| # | Section |
| ---: | --- |
| 1 | Executive Summary |
| 2 | Evidence |
| 3 | Customer Problem |
| 4 | Industry Change |
| 5 | Value Chain Analysis |
| 6 | Value Migration |
| 7 | Value Capture |
| 8 | Listed Companies |
| 9 | Risks |
| 10 | Monitoring Signals |

---

## Report-level failure conditions

A report fails as a whole, not partially, if any of the following hold:

- A fabricated fact or invented source appears anywhere.
- Any claim postdates `T0`.
- A conclusion is stated at higher confidence than its supporting section.
- Any section is missing, or replaced with silence rather than `Unknown`.
- The report contains investment advice, a price, or a timing signal.
- Framing borrows vocabulary from an industry other than the one the report's own T0 facts establish.

---

## Relationship to the product spec

`SRE_PRODUCT_SPEC.md` §4 lists the report as a 12-part structure organized around the reasoning pipeline. This standard expresses the same content as the 10 reader-facing sections above: the spec's Facts map to §2; Customer Problem to §3; Leading Signal and Change to §4; Reasoning and Value Migration to §6; Value Capture to §7; Evidence is distributed into the per-claim citations and the Evidence column of §8; Verification / Falsification splits across §§9–10; and the Uncertainty Register is absorbed into §10. The spec's Market Blind Spot has no dedicated section in this standard and, where present, belongs in the §1 summary. Where the two documents differ in wording, this standard governs report output and the spec governs product scope.

**Value Chain Analysis has no counterpart in the product spec.** §5 is introduced by this standard at v1.1 and maps to no stage of the reasoning pipeline described in `SRE_PRODUCT_SPEC.md` §4. It is a reader-facing mapping section, not a pipeline output.

---

## Change Control

Sections 1–10 and the Standards list are frozen at v1.1. Adding, removing, or reordering a section requires a new version of this standard, because report comparability across cases depends on the structure being fixed. Clarifying a content contract without changing what qualifies as a defect may be done within v1.1.

**Version history.**

| Version | Change |
| --- | --- |
| v1.0 | Initial standard. Nine sections, three evidence labels. |
| v1.1 (SRE-102) | Mandatory §5 Value Chain Analysis inserted; former §§5–9 renumbered to §§6–10; evidence labels aligned to the four defined in `SRE_GLOSSARY.md`; confidence levels stated separately as High / Medium / Low. |
