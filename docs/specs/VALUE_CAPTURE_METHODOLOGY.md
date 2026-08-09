# Value Capture Methodology v1.0

Methodology governing §7 (Value Capture) and §8 (Listed Companies) of `docs/specs/RESEARCH_REPORT_STANDARD.md`.

Status: specification only. No implementation, no prompt changes, no benchmark changes are authorized by this document.

---

## 1. Purpose

Define a standardized methodology for identifying where long-term economic value ultimately accumulates after an industry change.

The methodology exists because the intuitive answer is usually wrong. When an industry change is visible, the participants most associated with it in public discussion are frequently not the ones that retain the surplus. The most identifiable participant, the fastest-growing revenue line, and the technical leader are three different things, and none of them is automatically the value capturer. This document forces the question to be answered structurally rather than by association.

A second purpose is comparability. Two reports written months apart on unrelated industries should reach their capture conclusions by the same process, so a reader can trust that a Tier 1 designation means the same thing in both.

---

## 2. Definition

**Value Capture:** the participant that sustainably captures a disproportionate share of the economic value created by an industry change.

Three terms are held apart, permanently:

**Value Creation ≠ Value Capture.** A change can create large economic surplus that flows entirely to buyers as lower prices, or is competed away among suppliers. Creating surplus does not entitle a participant to keep it.

**Revenue growth ≠ Value Capture.** Revenue measures value flowing *through* a participant. Capture requires value *staying*. A participant whose revenue rises while its economic profit does not is a conduit, not a capturer — and is often the most visible participant in the chain.

**Technology leadership ≠ Value Capture.** Superior technology captures value only when it is defensible and scarce. A technical lead that is replicable, licensable, standardized, or substitutable within the thesis horizon transfers its surplus to whoever controls the actual bottleneck.

Two working terms used below:

- **Economic profit** — returns above the cost of capital, sustained rather than momentary. This is the object being traced, not accounting profit or revenue.
- **Sustainability** — the capture persists because of structure (position, scarcity, switching cost, standard ownership, installed base, regulatory barrier), not because competitors have not yet arrived. Absent a named mechanism, capture is assumed temporary.

---

## 3. Classification

Every company assessed is assigned exactly one tier. Tiers describe structural position, not attractiveness, and carry no ordering by desirability.

| Tier | Name | Criteria | Required backing |
| --- | --- | --- | --- |
| **Tier 1** | Direct Value Capturer | Controls the bottleneck or scarce capability identified in §4. Retains a disproportionate share of economic profit. Has a named, durable retention mechanism | Evidence-supported or Reasoned inference, with the mechanism stated explicitly |
| **Tier 2** | Direct Beneficiary | Economics improve as a first-order consequence of the change, but retention is partial — the position is contested, substitutable, or dependent on a Tier 1 participant | Evidence-supported or Reasoned inference |
| **Tier 3** | Indirect Beneficiary | Gains through a second-order path that must be stated in full. Typically supplies, enables, or adjoins a Tier 1 or Tier 2 participant | Reasoned inference at minimum; the intermediate link must be named |
| **Tier 4** | Potential Beneficiary | A structurally plausible capture path exists but a required condition is unresolved at T0 | Hypothesis, with the resolving condition recorded as a monitoring signal |

Assignment rules:

1. **One tier only.** No dual assignment, no ranges, no "Tier 1–2". If the evidence cannot separate two tiers, assign the lower one and record the ambiguity.
2. **Tier is not a rank.** A Tier 3 participant may be a better subject for further research than a Tier 1 participant. This methodology does not speak to that.
3. **Tier 1 is scarce by construction.** Most industry changes have zero or one Tier 1 participant. A report naming several Tier 1 participants has probably mislocated the bottleneck in Step 1 and should return to §4.
4. **Negatively affected participants are in scope.** Where a change displaces value away from an incumbent, that participant is recorded with its role and the displacement mechanism. It receives no tier, since the tiers describe capture.
5. **Absence is a valid result.** If no participant can be shown to capture sustainably, the correct conclusion is that the surplus is competed away or accrues to buyers. This is a finding, not a failure to find one.

---

## 4. Identification Process

The five steps run in order. Each step may use only what the preceding steps established. Skipping to Step 5 by naming familiar companies and reasoning backwards is the primary failure mode this sequence prevents.

### Step 1 — Identify the industry bottleneck

Locate the constraint that limits the system's ability to deliver the newly demanded outcome. Ask what the system runs out of first.

- Distinguish a **structural bottleneck** (persists because of physics, capital intensity, accumulated know-how, standards, or regulation) from a **temporary shortage** (resolves with ordinary capacity addition). Only structural bottlenecks support Tier 1 designation.
- Record what would relieve the bottleneck and how long that would plausibly take.
- Output: one named bottleneck. If several candidates survive, the analysis is not yet specific enough to proceed.

### Step 2 — Identify the scarce capability

Determine what capability is required to relieve the bottleneck, and why it is not widely held.

- Name the source of scarcity: process control, capital scale, proprietary IP, accumulated data, standard ownership, distribution reach, certification, or installed base.
- Test replicability directly: who else could acquire this capability, by what route, and within what time? A capability replicable inside the thesis horizon is not scarce.
- Output: the capability, its scarcity source, and its replication path with a rough time cost.

### Step 3 — Trace value migration

Follow the surplus through the chain, from origin to destination, layer by layer.

- Both ends must be named. A destination without an origin is not a migration claim.
- Each hop states what changes for the participant at that hop.
- Identify where bargaining power sits at each hop, since that determines whether surplus stops there or passes through.
- Output: an ordered chain from the observable change to the point where surplus stops moving.

### Step 4 — Identify economic profit capture

At the terminal points of the chain, determine who retains economic profit rather than merely transacting it.

- Separate pass-through from retention. Where a participant faces competitive pressure to pass gains on to customers, it does not retain.
- Name the retention mechanism for each candidate capturer. No mechanism means no capture, regardless of how favorable the position appears.
- Consider the buyer as a candidate: surplus that flows to end customers as lower prices or better performance is a legitimate answer.
- Output: candidate capturers, each with a retention mechanism and its evidence label.

### Step 5 — Rank participants by sustainable capture

Order the candidates by durability of capture, then assign tiers.

- Ranking criteria, in priority order: (a) is the retention mechanism structural, (b) how long does it plausibly hold, (c) how large is the retained share relative to the surplus created, (d) what is the strength of evidence behind each of the above.
- Sustainability outranks magnitude. A durable smaller capture ranks above a larger capture that is contestable within the horizon.
- Assign one tier per participant per §3, then confirm every conclusion carries an evidence label per §5 and a confidence level per §6.
- Output: the tiered participant set, with any unresolved conditions routed to §7 falsifiers and monitoring signals.

**Process integrity checks.** Before the output is accepted: no participant may appear in Step 5 that was not reached through Steps 1–4; the bottleneck named in Step 1 must still be the constraint the Tier 1 participant controls; and any step lacking support must read `Unknown` rather than being bridged with plausible language.

---

## 5. Evidence Standard

Every conclusion carries exactly one of four labels. No conclusion is publishable without one.

| Label | Meaning | Requirement |
| --- | --- | --- |
| **Evidence-supported** | A P0 source directly supports the claim | Citation to a specific P0 document |
| **Reasoned inference** | Follows from labeled facts by stated reasoning, with no P0 source stating the conclusion itself | The reasoning steps must be visible and each input fact cited |
| **Hypothesis** | Structurally plausible but a required link is unestablished | The evidence that would close it, recorded as a monitoring signal |
| **Unknown** | Available P0 material does not resolve the question either way | A statement of what is missing |

Rules:

- **No unsupported conclusions.** Any claim that fits none of the four labels is removed, not softened.
- **Labels do not inherit upward.** A conclusion built on a Reasoned inference cannot be labeled Evidence-supported. The weakest input in a chain sets the ceiling for the output.
- **Tier 1 requires Evidence-supported or Reasoned inference.** A Hypothesis-grade capture claim cannot be Tier 1; it belongs in Tier 4.
- Fabricated facts and invented sources invalidate the entire analysis, not the individual claim.

---

## 6. Confidence Standard

Confidence is assessed separately from the evidence label. The evidence label describes *what kind* of support exists; confidence describes *how much weight* the conclusion can bear.

Four inputs:

1. **Evidence quality** — directness, specificity, and authority of the P0 source. First-party disclosure of a mechanism outranks an inference from disclosed aggregates.
2. **Causal strength** — whether every link from observable change to capture is established, and whether any link is `Unknown`.
3. **Alternative explanations** — whether competing accounts of the same facts have been identified and can be distinguished on available evidence. Unexamined alternatives cap confidence.
4. **Historical validation** — whether comparable structural changes have resolved this way before, and whether the analogy holds in its load-bearing respects rather than superficially.

| Level | Requires |
| --- | --- |
| **High** | Evidence-supported on the central claim, complete causal chain with no `Unknown` in a load-bearing link, alternatives identified and distinguishable, historical precedent consistent or not contradicting |
| **Medium** | Reasoned inference or better, at most one non-central weak link, alternatives identified but not fully separable |
| **Low** | Hypothesis-grade support, multiple weak links, alternatives cannot be distinguished on available evidence, or no relevant precedent |

Rules:

- Confidence cannot exceed what the evidence label permits: `Hypothesis` caps at Low, `Reasoned inference` caps at Medium.
- Confidence on a capture conclusion cannot exceed confidence on the value migration that produces it.
- Low confidence is publishable. Low confidence presented as High is a defect.

---

## 7. Falsification

Every thesis specifies all three of the following. A thesis that cannot be moved by future evidence is not a thesis.

**What would strengthen it.** Observable developments consistent with the capture mechanism holding — for example, disclosed pricing power at the bottleneck, sustained margin at the Tier 1 participant, or a failed entry by a would-be replicator.

**What would weaken it.** Developments that erode a supporting assumption without overturning the conclusion — partial substitution, gradual margin compression, or capacity additions that ease the bottleneck more quickly than expected.

**What would invalidate it.** Conditions under which the conclusion is wrong: the bottleneck relieved by a route not considered in Step 1, the scarce capability replicated inside the thesis horizon, or economic profit shown to accrue to a different participant than the one named.

Requirements:

- Each condition is stated concretely enough that a later reader can determine whether it occurred, and names the source class where it would become visible.
- Each is paired with a horizon, plus what its absence by that point would imply.
- Weakening and invalidating conditions are kept distinct. Collapsing them lets a partially wrong thesis survive indefinitely by absorbing every disconfirmation as a minor caveat.
- **No unfalsifiable conclusions.** A capture claim with no invalidating condition is removed from the analysis.

---

## 8. Exclusions

The following are never inputs to a capture conclusion.

| Excluded | Why |
| --- | --- |
| **Stock price** | Reflects flows, positioning, and expectations, not the structural question of who retains surplus |
| **Market sentiment** | Measures current belief, which is what a capture thesis is meant to be tested against |
| **Technical analysis** | Derives from price and volume history and carries no information about industry structure |
| **Buy/Sell opinions** | Third-party conclusions substituted for the analysis this methodology requires |
| **Short-term price movements** | Confirmation bias with a timestamp; a move following a disclosure is not evidence about durable capture |

Also excluded as *inputs*: sell-side research, journalism, expert-network calls, and unattributed channel commentary. These may inform which questions to ask, but no conclusion may rest on them. Reasoning that reaches a Tier assignment by way of any excluded input is discarded rather than relabeled.

---

## 9. Principles

- **Evidence First** — capture is established from cited P0 material and stated reasoning over it. Plausibility is not evidence, and neither is familiarity with the company.
- **Transparency** — the bottleneck, the scarce capability, the migration chain, and the retention mechanism are all shown, so a reader can attack any single link rather than accepting or rejecting a conclusion whole.
- **Long-term Orientation** — the test is durability of capture over multi-year horizons. Anything that resolves within a quarter is context, not conclusion.
- **Explicit Uncertainty** — `Unknown` and Low confidence are first-class outputs. Unsupported certainty is treated as a more serious defect than an admitted gap.
- **Reproducibility** — the same T0 inputs run through Steps 1–5 should yield the same bottleneck, the same migration chain, and the same tier assignments. Where they do not, the process was underspecified, and that is a defect in the analysis rather than a matter of judgment.

---

## Consistency notes

Two deliberate differences from `RESEARCH_REPORT_STANDARD.md`, recorded so neither document is read as overriding the other by accident:

1. **Evidence labels.** That standard uses three labels (`Evidence-supported`, `Hypothesis`, `Unknown`); this methodology uses four, adding `Reasoned inference` between the first two. The additional label is required here because most capture conclusions are not stated in any P0 document and would otherwise be forced to `Hypothesis`. When a capture conclusion is carried into a report, `Reasoned inference` maps to `Hypothesis` unless the report standard is amended to four labels.
2. **Confidence versus evidence label.** That standard treats confidence as a single tag drawn from its evidence scale; this methodology separates the evidence label from a three-level confidence assessment (High / Medium / Low). Report §§7–8 confidence values are produced by §6 of this document.

Tier mapping into report §§7–8: Tier 1 and Tier 2 are reported as direct beneficiaries, with Tier 1 distinguished by its named retention mechanism; Tier 3 is reported as an indirect beneficiary; Tier 4 appears only where its resolving condition is recorded as a monitoring signal.

---

## Change Control

Sections 2, 3, 4, 5, and 8 are frozen at v1.0 — they define what qualifies as a capture conclusion, so changing them changes what past reports mean. Amendment requires a new version and a re-check of any live thesis whose tier assignment depended on the changed criterion. Sections 1, 6, 7, and 9 may be clarified within v1.0 provided no threshold moves.
