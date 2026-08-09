# Strategic Research Brief Standard v1.0

Public product specification for the **Strategic Research Brief (SRB)**.

Status: specification only. No implementation, no prompt changes, no code changes, and no modification of the Strategic Research Engine (SRE), Industry Reasoning Engine (IRE), benchmarks, schemas, or knowledge bases are authorized by this document.

Relationship to existing work:

| Artifact | Role |
| --- | --- |
| Strategic Research Report (SRE) | Internal / full research artifact under `RESEARCH_REPORT_STANDARD.md` |
| Strategic Research Brief (SRB) | Public, concise publication derived from one completed SRE |

An SRB is a **product**. It is not a shortened SRE, not a research notebook, and not a new research process.

---

## 1. Purpose

Transform **one completed Strategic Research Report** into a concise publication for long-term investors.

The Brief explains, in plain language:

1. what changed
2. why it matters
3. where value is moving
4. which listed companies may benefit
5. what remains unknown

The Brief never recommends buying or selling securities. It never states a price target, valuation, or timing for market action.

---

## 2. Product Definition

**Strategic Research Brief (SRB):** a fixed-structure, reader-facing summary of a single completed SRE, written for non-specialists, bounded to a short reading time, and fully traceable to that SRE.

Hard product rules:

- **One SRE → one SRB.** No multi-case briefs at v1.0.
- **Derivation only.** Every sentence in an SRB must be supportable from the parent SRE. The SRB never creates new research, never adds facts, never introduces participants absent from the SRE, and never upgrades `Unknown` to a conclusion.
- **Publication surface.** The SRB is the public artifact. The parent SRE remains the audit trail.
- **No investment advice.** Naming a company as a potential beneficiary is not a recommendation.

---

## 3. Target Reader

| Reader | Need | What the Brief must give them |
| --- | --- | --- |
| Long-term investors | Structural change they can hold and monitor over years | Clear change → migration → beneficiary map, plus unknowns and signals |
| General business readers | Industry understanding without specialist vocabulary | Plain English explanation of what happened and why it matters |

Assumptions about the reader:

- No specialist knowledge of the industry is required.
- No prior reading of the parent SRE is required to understand the Brief.
- A reader who wants to audit a claim can open the parent SRE; the Brief does not replace that audit.

Explicitly not a target reader: anyone seeking a trade idea, entry price, target price, or short-horizon signal.

---

## 4. Length and Reading Time

| Constraint | Limit |
| --- | --- |
| Maximum length | **3 pages** (print-equivalent; body content only) |
| Maximum reading time | **5 minutes** |
| Executive Summary | **150 words maximum** |
| Headline | **One sentence** |

If content does not fit, the Brief compresses further. It does not drop required sections, invent abridged variants, or move material into footnotes that effectively create a fourth page of body content.

---

## 5. Fixed Structure

Every Brief uses exactly these nine sections, in this order. Sections are never reordered, renamed, or omitted. An unsupported section is filled with `Unknown` and a one-line reason.

| # | Section | Content contract |
| ---: | --- | --- |
| 1 | Headline | One sentence naming the change and its strategic significance |
| 2 | Executive Summary | ≤150 words. States what changed, why it matters, where value moves, and the strength of support |
| 3 | What Happened | Only verified T0 facts from the parent SRE’s Evidence section |
| 4 | Why It Matters | The industry change / requirement shift, in plain English |
| 5 | Where Value Moves | A simple value-migration diagram plus a short prose reading |
| 6 | Potential Beneficiaries | Tier 1 / Tier 2 / Tier 3 / Unknown — listed companies emphasized for the public surface |
| 7 | What We Still Don't Know | Explicit `Unknown` items; unknowns remain unknown |
| 8 | Signals To Watch | Future validation or falsification signals from the parent SRE |
| 9 | Sources | Official P0 sources only, as cited in the parent SRE |

### 5.1 Headline

**Purpose.** Orient the reader in one sentence.

**Required.** One sentence. Names the observable change and the strategic implication at the level the parent SRE supports.

**Prohibited.** Questions as headlines; hype adjectives; company tickers as the sole headline; buy/sell language; claims stronger than the parent SRE.

### 5.2 Executive Summary

**Purpose.** Let a reader who stops here leave with the correct conclusion and no false confidence.

**Required.** Maximum 150 words. Covers: what changed; why it matters; where value moves; who may benefit at a high level; what is still unknown or weakly supported.

**Prohibited.** New facts; prices; targets; recommendations; confidence stronger than the parent SRE.

### 5.3 What Happened

**Purpose.** Establish the factual floor.

**Required.** Short bullets or short paragraphs of verified T0 facts only. Each fact must already appear in the parent SRE Evidence section.

**Prohibited.** Interpretation, causal language, evaluative language, and any fact not in the parent SRE.

### 5.4 Why It Matters

**Purpose.** Explain the industry change for a non-specialist.

**Required.** What system requirement shifted; why the prior or lower-specification solution becomes insufficient; whether the change is structural (alters what participants must do) or cyclical (alters volume only), stated explicitly when the parent SRE establishes it.

**Prohibited.** Restating §3 without adding the requirement-shift explanation; introducing participants or mechanisms absent from the parent SRE.

### 5.5 Where Value Moves

**Purpose.** Show origin and destination of value migration.

**Required.**

- A **simple value-migration diagram** (from → to), using only layers or participants established in the parent SRE.
- One short prose paragraph reading the diagram.
- A confidence or evidence label consistent with the parent SRE (see §7).

**Diagram rules.**

- Both ends named. “Value moves to software” is insufficient.
- Direction only. No magnitude, no dollar amounts, no share percentages unless the parent SRE states them as facts.
- If the parent SRE states only potential reallocation, the Brief uses the same standing (for example: potential value reallocation; later verification required).

**Allowed diagram forms at v1.0** (choose one; keep it simple):

```text
[Origin layer / participant]  →  [Destination layer / participant]
```

or a two-to-four row from/to table.

**Prohibited.** Complex multi-hop charts that require specialist reading; new layers; winner language in the diagram itself.

### 5.6 Potential Beneficiaries

**Purpose.** Translate value capture into a public, investor-readable map without turning it into a stock screen.

**Required format.** Four buckets, always present:

| Bucket | Meaning in the Brief |
| --- | --- |
| **Tier 1** | Direct value capturer(s) per the parent SRE, if any |
| **Tier 2** | Direct beneficiaries with partial or dependent retention |
| **Tier 3** | Indirect beneficiaries, with the second-order path stated in one line |
| **Unknown** | Material beneficiary questions the parent SRE could not resolve |

**Listed-company rule for the public surface.**

- When the parent SRE’s Listed Companies section names publicly listed companies, those names appear in the matching tier bucket with a one-line structural reason.
- Private participants named in the parent SRE may appear if needed for honesty about who captures value, but the Brief must label them as not established as publicly listed (or equivalent plain language).
- If the parent SRE’s Listed Companies table is empty, the Brief says so plainly under the relevant bucket or under `Unknown`. It does not invent tickers or listing status.

**Vacant tiers.** If the parent SRE leaves a tier vacant, the Brief shows that tier as vacant. Vacancy is a valid finding.

**Prohibited.** Ranking by attractiveness; portfolio weights; “top pick” language; adding companies for coverage completeness; implying that inclusion is a recommendation.

**Standing disclaimer** (required once in this section, or once in the Executive Summary and referenced here):

> Companies are named for further research only. This is not a recommendation to buy, sell, or hold any security, and not a ranking by attractiveness.

### 5.7 What We Still Don't Know

**Purpose.** Protect the reader from false precision.

**Required.** A short list of material `Unknown` items carried from the parent SRE (and any `Hypothesis` items that remain open, labeled as such).

**Rule.** `Unknown` remains `Unknown`. The Brief never fills gaps with plausible market color.

### 5.8 Signals To Watch

**Purpose.** Give the long-term reader a monitoring checklist.

**Required.** A compact table or bullets derived from the parent SRE’s Monitoring Signals / verification paths.

Each signal states:

- what to watch
- where it would appear (source class: official documentation, filing, company announcement, etc.)
- a horizon when useful
- what absence would imply, when the parent SRE states it

**Prohibited.** Trading triggers; entry/exit conditions; action language (“buy on…”, “trim if…”).

### 5.9 Sources

**Purpose.** Show the official evidence base.

**Required.** Official P0 sources only, as listed in the parent SRE. Each entry includes publisher, document identity, and date (and URL if the parent SRE provides one).

**Prohibited.** Journalism, sell-side notes, blogs, social media, or any non-P0 source. The Brief does not enlarge the source set.

**Traceability line.** Every Brief states the parent SRE identifier (for example: `SRE-120`) so a reader can retrieve the full audit trail.

---

## 6. Mapping From SRE to SRB

The Brief is a projection of the parent SRE, not a parallel analysis.

| SRB section | Draws from parent SRE |
| --- | --- |
| Headline | Executive Summary + Industry Change |
| Executive Summary | Executive Summary (compressed) |
| What Happened | Evidence (facts only) |
| Why It Matters | Customer Problem + Industry Change |
| Where Value Moves | Value Chain Analysis + Value Migration |
| Potential Beneficiaries | Value Capture + Listed Companies |
| What We Still Don't Know | Unknowns / Uncertainty material across the SRE |
| Signals To Watch | Monitoring Signals (+ Risk falsifiers as needed for clarity) |
| Sources | Evidence citations / source list |

If the parent SRE does not support a Brief section, that Brief section reads `Unknown`. The writer does not research around the gap.

---

## 7. Evidence Labels and Confidence

The Brief uses the same four evidence labels defined in `SRE_GLOSSARY.md`:

| Label | Meaning |
| --- | --- |
| `Evidence-supported` | Directly supported by a P0 source in the parent SRE |
| `Reasoned Inference` | Follows from parent-SRE facts by stated reasoning |
| `Hypothesis` | Plausible but unclosed; must appear in Signals To Watch |
| `Unknown` | Not resolved by available P0 material |

Confidence levels (`High` / `Medium` / `Low`), when shown, must not exceed the parent SRE’s confidence for the same conclusion.

**Compression rule.** Labels may be shortened for readability (for example: “Supported”, “Inferred”, “Hypothesis”, “Unknown”) only if the Brief’s legend maps them one-to-one to the glossary terms. Meaning must not change.

---

## 8. Writing Style

| Rule | Requirement |
| --- | --- |
| Plain English | Short sentences. Everyday words. |
| Jargon | Allowed only if explained immediately in the same sentence or the next. |
| Tone | Calm, specific, non-promotional. No hype. |
| Investment language | No buy, sell, hold, overweight, target, fair value, or “priced in” as advice. |
| Traceability | Every conclusion must be traceable to a passage in the parent SRE. |
| Facts vs reasoning | §3 is facts only. Interpretation begins at §4. |
| Hindsight | No outcomes after the parent SRE’s `T0`. |

**Voice.** Prefer “Anthropic announced…” over “the market was disrupted by…”. Prefer “value may move toward…” over “winners will be…”.

---

## 9. Output Rules

1. **Derived from an existing SRE only.** No SRB without a completed parent SRE that itself complies with `RESEARCH_REPORT_STANDARD.md`.
2. **No new research.** No new facts, participants, tiers, or sources.
3. **No investment recommendation.** Naming beneficiaries is descriptive of structural position, not advice.
4. **No stock target and no price prediction.**
5. **Unknown remains Unknown.**
6. **Fixed nine-section structure** for every Brief.
7. **Length ceiling is binding.** Exceeding 3 pages or ~5 minutes of reading time is a defect.
8. **Parent SRE identifier required** in the Brief header or Sources section.
9. **T0 discipline inherited.** The Brief uses the parent SRE’s frozen `T0`; it does not update the story with later news.

---

## 10. Header Metadata

Every Brief begins with a compact header before §1 Headline:

| Field | Content |
| --- | --- |
| Title | Strategic Research Brief — \<subject\> |
| Parent SRE | Identifier of the completed report (required) |
| T0 | Frozen date from the parent SRE |
| Domain | Industry domain from the parent SRE, if stated |
| Reading time | Stated target ≤ 5 minutes |
| Disclaimer | Not investment advice; not a recommendation |

---

## 11. Non-Goals

Permanently out of scope for the Brief product:

| Non-goal | Why excluded |
| --- | --- |
| Original research | Would break the derivation contract and the audit trail |
| Stock recommendations | Requires mandate, portfolio, and risk tolerance the product does not have |
| Price targets / valuation models | Not supported by the SRE evidence discipline |
| News summarization without migration/capture | Compression without the product’s core questions |
| Multi-SRE synthesis | Comparability and traceability fail when parents mix |
| Replacing the SRE | The Brief is the public surface; the SRE is the full chain |

---

## 12. Quality Gates

A Brief fails as a whole if any of the following hold:

- It introduces a fact, company, or source not present in the parent SRE.
- It states a conclusion at higher confidence than the parent SRE.
- It contains buy/sell/hold language, a price, a target, or a timing signal for trading.
- Any of the nine sections is missing or renamed.
- `Unknown` is silently replaced with a plausible claim.
- Length materially exceeds the 3-page / 5-minute ceiling.
- Non-P0 sources appear in §9.
- The parent SRE identifier is missing.

Positive checks:

- A non-specialist can explain what changed and where value may move after one reading.
- Every beneficiary claim maps to the parent SRE’s Value Capture / Listed Companies material.
- Every open `Hypothesis` / material `Unknown` has a corresponding signal or an explicit residual Unknown note.

---

## 13. Relationship to Other Specs

| Document | Relationship |
| --- | --- |
| `SRE_PRODUCT_SPEC.md` | Defines the SRE product and research mission; SRB is a downstream publication product |
| `RESEARCH_REPORT_STANDARD.md` | Defines the parent report shape; SRB must not contradict it |
| `VALUE_CAPTURE_METHODOLOGY.md` | Governs tier meaning; SRB inherits tiers, does not re-tier |
| `SRE_GLOSSARY.md` | Shared vocabulary for evidence labels and core terms |
| `MISSION.md` | Institutional mission; SRB serves the public communication of that mission |

Where this standard and a parent SRE disagree on a factual claim, the parent SRE governs until the SRE is revised. The Brief is never the place to correct research.

---

## Change Control

This specification is versioned as **v1.0**.

- Changing the nine-section structure, the derivation-only rule, the length ceiling, or the non-goals requires a new version.
- Clarifying wording inside a section without changing what counts as a defect may be done within v1.0.

**Version history.**

| Version | Change |
| --- | --- |
| v1.0 (SRB-001) | Initial public Strategic Research Brief product standard |
