# SRE Product Specification v1.0

Strategic Research Engine (SRE) — product-level specification.

Status: specification only. No implementation, no prompt changes, no code changes are authorized by this document.  
Relationship to existing work: SRE is the product layer above the Industry Reasoning Engine (IRE) V1.1. IRE supplies the reasoning pipeline and the GoldCase output; SRE defines who it serves, what it accepts, what it emits, and how quality is judged.

---

## 1. Mission

Transform public evidence into trustworthy strategic research that identifies long-term value creation, value migration, and value capture.

Three distinct objects, never conflated:

| Object | Question it answers |
| --- | --- |
| Value creation | What new capability or economic surplus now exists that did not before? |
| Value migration | Where does that surplus move from and to, across the system? |
| Value capture | Which participant is structurally positioned to retain it? |

"Trustworthy" is defined operationally, not rhetorically: every claim is either traceable to a cited P0 source, labeled as a hypothesis requiring later verification, or returned as `Unknown`. There is no fourth category.

---

## 2. Target Users

| User | Primary need | What SRE must give them |
| --- | --- | --- |
| Long-term investors | Understand structural change before it is priced in as consensus | Causal chain from observable change to value capture, with falsifiers |
| Industry researchers | Reproducible analysis they can audit and extend | Full source trail, frozen inputs, explicit reasoning steps |
| Corporate strategy teams | Position their own firm inside a shifting value chain | Value migration map and the requirement changes that drive it |
| Family offices | Durable theses that survive multi-year holding periods, with low monitoring overhead | Long-horizon framing plus named verification signals to watch |

Common denominator across all four: they are penalized far more by a confident wrong answer than by an honest `Unknown`. The product is tuned to that asymmetry.

Explicitly not a target user: anyone seeking a trade, an entry price, or a short-horizon signal.

---

## 3. Inputs (P0 only)

Only the following source classes are admissible at v1.0. P0 means first-party and attributable — published by the entity itself or filed with a regulator.

1. **Official press releases** — issued by the company or institution under its own name.
2. **SEC filings** — 10-K, 10-Q, 8-K, S-1, proxy statements, and equivalent filings in other jurisdictions.
3. **Annual reports** — including shareholder letters published as part of the report.
4. **Investor presentations** — earnings decks, analyst day and capital markets day materials.
5. **Official technical documentation** — product documentation, specification sheets, datasheets, architecture and whitepapers published by the vendor or standards body.

Input discipline:

- **T0 lock.** Every research unit is bound to a frozen timestamp `T0`. Only material published on or before `T0` may enter the input. This is the same source-lock discipline used by the IRE benchmark.
- **No hindsight.** Input text may not contain language describing outcomes that postdate `T0`.
- **Attribution required.** Each input carries publisher, document type, and publication date. Material that cannot be attributed is inadmissible.
- **Non-P0 material is excluded from input,** including sell-side research, journalism, blogs, forums, social media, expert-network calls, private channel checks, and unattributed leaks. Non-P0 material may only appear later as *verification evidence* when a thesis is checked against outcomes, never as the basis of the thesis.
- **Insufficiency is a valid state.** If admissible P0 material does not support a research unit, SRE declines to produce a thesis rather than substituting weaker sources.

---

## 4. Outputs

SRE emits exactly one artifact type: a **standardized Strategic Research Report**. One report per research unit. No alternate formats, no severity tiers, no abridged variants — a single shape so reports are comparable and diffable across cases and over time.

Required sections, in fixed order:

| # | Section | Content contract |
| ---: | --- | --- |
| 1 | Header | Subject, `T0` frozen date, detected industry domain, source list |
| 2 | Facts | Observable facts stated in the P0 input, each attributed. Facts only — no interpretation |
| 3 | Customer Problem | The system- or end-level problem creating demand, not a supplier-side constraint |
| 4 | Leading Signal | The earliest observable disclosed change. Observation only, no inference words |
| 5 | Change | The concrete change occurring or about to occur |
| 6 | Reasoning | Ordered causal chain: observable change → requirement change → why the prior solution becomes insufficient → which capability gains value → why value reallocates. Any unsupported step is `Unknown` |
| 7 | Value Migration | Direction of value movement, separating evidence-supported reallocation from hypothesis requiring later verification |
| 8 | Value Capture | Who retains the reallocated value, and the structural reason why |
| 9 | Evidence | Source-supported facts substantiating each material reasoning step. Restating the leading signal does not count as evidence for the chain |
| 10 | Verification / Falsification | Named observable events that would confirm or break the thesis, with the horizon on which to expect them |
| 11 | Market Blind Spot | What the prevailing framing appears to be missing |
| 12 | Uncertainty Register | Every `Unknown`, every hypothesis, and the specific evidence that would close it |

Output rules:

- Report structure is fixed; sections are never dropped. An unsupported section is filled with `Unknown` and a reason.
- Confidence language must match evidence strength. A directional possibility is stated as a potential reallocation requiring later market verification, never as a completed shift.
- No stage of the report contains a price, a valuation target, or a recommended action.

---

## 5. Core Research Questions

Every report answers these six, in this order. The sequence is load-bearing: each question may only draw on material established by the ones before it.

1. **What changed?** — the observable, sourced change at `T0`.
2. **Why does it matter?** — which system requirement shifts, and why the prior solution becomes insufficient.
3. **Where does value migrate?** — from which layer or participant, to which.
4. **Who captures the value?** — who is structurally positioned to retain it, versus who merely touches it.
5. **What evidence supports this?** — per-step source support, with gaps named rather than smoothed over.
6. **What could invalidate the thesis?** — the falsifiers, stated concretely enough to be checked later.

A report that answers 3 and 4 without surviving 5 and 6 is not a finding. It is a hypothesis, and must be labeled as one.

---

## 6. Design Principles

- **Evidence First** — reasoning may reorganize facts but never add them. No claim outruns its source.
- **Long-term First** — the unit of analysis is structural change over multi-year horizons. Quarterly noise is context, not conclusion.
- **Transparent Reasoning** — the causal chain is exposed step by step so a reader can attack any individual link. Conclusions are never delivered as a black box.
- **Benchmark Driven** — quality is measured against frozen, source-locked cases with a published rubric, not by internal impression. Changes ship only when the benchmark holds.
- **Explicit Uncertainty** — `Unknown` is a first-class output. Unsupported certainty is a defect and is penalized more heavily than omission.

---

## 7. Non-Goals

These are permanently out of scope, not deferred. Each would corrupt the evidence discipline that makes the output trustworthy.

| Non-goal | Why excluded |
| --- | --- |
| Stock price prediction | Prices depend on flows, positioning, and sentiment that no P0 document discloses |
| Buy/Sell recommendations | Requires a portfolio, mandate, and risk tolerance SRE does not have |
| Technical analysis | Derives from price and volume history, not from evidence about the business |
| News summarization | Compression without causal reasoning; produces no value-migration conclusion |
| Market timing | Answers "when will it be priced" rather than "is it structurally true" |

Anti-goal for the product surface: SRE should be unusable as a trading signal generator. If output starts being consumed that way, that is a specification failure, not a growth channel.

---

## 8. Success Metrics

| Metric | Definition | Measurement |
| --- | --- | --- |
| **Research Quality** | Correctness and completeness of the reasoning chain per category | IRA score against the frozen evaluation rubric across facts, customer problem, leading signal, reasoning, value reallocation, and evidence |
| **Benchmark Pass Rate** | Share of source-locked benchmark cases meeting the pass threshold | Cases passing / total cases in the frozen benchmark set |
| **Prediction Validity** | Whether theses survive contact with later outcomes | Retrospective check of each thesis against its own stated falsifiers, once the verification horizon has elapsed |
| **Transparency** | Whether every material claim is traceable or explicitly flagged | Share of claims that are source-attributed, labeled hypothesis, or `Unknown`; target is total coverage with zero unlabeled assertions |
| **Reproducibility** | Whether the same `T0` input yields the same structural conclusion | Re-run on frozen inputs; compare per-case structure and conclusions against the stored baseline. Regression count is the primary gate |

Cross-cutting hard gates, independent of score:

- **Hallucination = 0.** Any fabricated fact or invented source fails the release outright, regardless of aggregate quality.
- **Regression = 0.** No previously passing case may degrade.
- **Domain fidelity.** Framing must match the domain detected from the case's own T0 facts; borrowing another industry's vocabulary is a defect.

---

## Change Control

This specification is versioned. Amending Sections 3, 4, 6, or 7 requires a new spec version and a full benchmark re-validation, because each of those sections constrains what the engine is permitted to output. Sections 1, 2, 5, and 8 may be clarified within v1.0 provided no measurement definition changes.
