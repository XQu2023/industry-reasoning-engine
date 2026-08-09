# Strategic Knowledge Base v1.0

Strategic Knowledge Base (SKB) — specification for converting completed SRE + PVF cycles into reusable, durable strategic knowledge.

Status: specification only. No implementation, no prompt changes, no engine changes, no benchmark changes, and no modification of existing SRE reports, PVF specs, or existing validations are authorized by this document.

Relationship to existing work:

| Layer | Role |
| --- | --- |
| SRE | Produces a T0-locked Strategic Research Report |
| PVF | Separately validates whether that T0 thesis held, on dated post-T0 evidence |
| SKB | Extracts reusable knowledge units from completed SRE + PVF cycles and stores them append-only under `knowledge/` |

SKB does not rewrite SRE or PVF artifacts. It cites them.

---

## 1. Purpose

The **Strategic Knowledge Base (SKB)** is the permanent repository of validated strategic knowledge extracted from completed SRE + PVF cycles.

Three objects are held apart:

| Object | Question it answers |
| --- | --- |
| SRE report | What was claimed at T0, on P0 evidence only? |
| PVF report | Did that thesis confirm, weaken, or falsify under later dated evidence? |
| SKB knowledge unit | What durable lesson can be reused on future cases? |

SKB exists because a single validated case is not yet a rule. Predictive power becomes institutional only when lessons are extracted, leveled, categorized, and retained without deleting the trail of what was later superseded.

SKB is not:

- a replacement for SRE or PVF
- a live research report
- an investment recommendation, screen, or ranking product
- a license to backfill hindsight into T0 facts

---

## 2. Knowledge Unit

The atomic SKB record is a **Knowledge Unit (KU)**.

Every KU contains at least:

| Field | Content |
| --- | --- |
| **Original T0 event** | Subject, frozen `T0` date, and pointer to the source SRE report |
| **Core thesis** | Compact restatement of the T0 claim being retained as knowledge (change, migration, and/or capture) |
| **Final validation result** | PVF horizon and dimension-level outcomes that justify the unit; pointer to the PVF artifact |
| **Prediction Accuracy** | The PVF Report Card score (0–100) for the cited validation run, when available |
| **Stable lessons** | What should be reused on future cases |
| **Invalidated assumptions** | What failed, weakened, or was superseded — retained, never deleted |

Additional required metadata on every KU:

| Field | Content |
| --- | --- |
| `ku_id` | Stable identifier (for example `KU-001`) |
| `level` | `A`, `B`, or `C` (§3) |
| `category` | One primary category from §4; optional secondary tags allowed |
| `status` | `active` or `superseded` |
| `superseded_by` | `ku_id` of the replacing unit, or `None` |
| `source_sre` | Path to SRE report |
| `source_pvf` | Path to PVF report, or `None` for Level C |
| `created` | Date the unit entered the SKB |
| `last_reviewed` | Date of last promotion, supersession, or review note |

Rules:

- One KU expresses one reusable claim. Do not bundle unrelated lessons into a single unit.
- A KU may cite multiple SRE/PVF pairs only when the claim is the same and promotion to Level A requires it (§5).
- `Invalidated assumptions` may be empty at creation; once filled, entries are append-only within the unit’s history note.

---

## 3. Knowledge Levels

| Level | Name | Meaning |
| --- | --- | --- |
| **A** | Multi-case validated | The claim has been validated across **multiple independent** completed PVF cycles |
| **B** | Single-PVF validated | The claim has been validated in **one** completed PVF |
| **C** | Working hypothesis | Plausible reusable claim extracted from SRE reasoning, reviews, or incomplete cycles — **not** yet PVF-validated |

Level rules:

- Level is a property of the knowledge claim, not of the company or industry named in the source case.
- A higher level never implies investment attractiveness.
- Level C may exist without a PVF pointer; Levels B and A require at least one completed PVF citation.
- When evidence conflicts across cases, do not silently average into Level A; either keep Level B units separate or record a superseded/conflict note and a new KU.

---

## 4. Knowledge Categories

Every KU is assigned exactly one **primary** category:

| Category | Scope |
| --- | --- |
| **Value Capture** | Who retains surplus; retention mechanisms; tier logic; magnitude limits |
| **Value Migration** | Origin → destination layer moves; compelled vs convenient reallocation |
| **Bottlenecks** | What constrains the system after a change; bottleneck vs temporary shortage |
| **Scarcity** | What is narrowly held and why it is not widely available |
| **Business Models** | How monetisation attaches (or fails to) relative to the technical change |
| **Platform Strategies** | Toolchains, standards, gated access, switching costs, control points |
| **Ecosystem Effects** | Developer, partner, customer, or complement dynamics around the change |
| **Organizational Strategy** | How firms organize CapEx, partnerships, integration, or disclosure around the change |

Secondary tags from the same list are optional. Primary category determines folder placement under `knowledge/` (see `knowledge/README.md`).

---

## 5. Promotion Rules

Knowledge may move only in the following directions:

| Transition | Rule |
| --- | --- |
| **C → B** | Allowed only after **one completed PVF** that supports the claim at the cited horizon, with Prediction Accuracy and dimension outcomes recorded on the KU |
| **B → A** | Allowed only after **multiple independent validations** — meaning at least two completed PVF cycles on **distinct** SRE cases (different T0 events), not two horizons of the same case alone |

Promotion discipline:

1. Promotion appends a new version note (or a new KU that supersedes the prior one). It does not erase the lower-level record’s history.
2. A single SRE with multiple PVF horizons (H12 then H60) counts as **one** case for B → A purposes.
3. Independence requires different T0 events and non-duplicative source packs. Two validations of the same launch do not unlock Level A.
4. Demotion is not a delete. If a Level A/B claim fails on a later independent case, mark the prior KU `superseded` (or add an invalidated-assumption entry) and append a new KU reflecting the corrected claim at the appropriate level.
5. Failure to promote is the default. Absence of a second case keeps knowledge at Level B.

---

## 6. Version Rule

1. **Knowledge is append-only.** SKB entries are not deleted.
2. **Nothing is deleted.** Files may be corrected only by appending supersession metadata; content history remains recoverable.
3. **Invalidated knowledge is marked as superseded.** Set `status: superseded` and `superseded_by: <ku_id>` (or `superseded_by: None` with an explicit retired note when no replacement yet exists).
4. **SRE and PVF remain immutable inputs.** SKB never edits `reports/` or `validations/`.
5. **Framework version.** This document is **SKB v1.0**. Knowledge units record the SKB version used at creation or last promotion.

---

## Consistency notes

- SKB vocabulary (`Level A/B/C`, categories above) is separate from SRE evidence labels and PVF outcomes. Do not mix label systems inside a single field.
- Prediction Accuracy is copied from PVF as a citation, not recalculated inside SKB, unless a KU explicitly aggregates multiple PVFs and shows the arithmetic.
- Sprint reviews may propose Level C candidates; only a completed PVF promotes them to Level B.

---

## Change Control

| Version | Date | Notes |
| --- | --- | --- |
| v1.0 | 2026-08-09 | Initial Strategic Knowledge Base specification |
