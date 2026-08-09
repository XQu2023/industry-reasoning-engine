# Sprint Review 001 — SRE-101 to SRE-105

| Field | Value |
| --- | --- |
| Scope | `reports/SRE-101-NVIDIA-Blackwell.md`, `reports/SRE-102-Amazon-EC2.md`, `reports/SRE-103-Apple-App-Store.md`, `reports/SRE-104-NVIDIA-CUDA.md`, `reports/SRE-105-Amazon-S3.md` |
| Standard reviewed against | `RESEARCH_REPORT_STANDARD.md` v1.1, `VALUE_CAPTURE_METHODOLOGY.md` v1.0, `SRE_GLOSSARY.md` v1.0, `SRE_PRODUCT_SPEC.md` v1.0 |
| Reports reviewed | 5 |
| Files modified by this review | None. This document is the only output. |

Counts below are stated as *n*/5, meaning the number of the five reports exhibiting the pattern. Every finding cites the report and the section or fact number where it is observable.

---

## 1. Common Failure Patterns

Ranked by frequency. All seven patterns occur in every report, so within that tie they are ordered by severity — how much each one changes what a reader can conclude.

| Rank | Pattern | Frequency |
| ---: | --- | --- |
| 1 | Magnitude of value capture is never established | 5/5 |
| 2 | `Bottleneck: Yes` converges on exactly one layer, always as `Reasoned Inference` | 5/5 |
| 3 | §2 records the source's forward-looking language, which §2 prohibits | 5/5 |
| 4 | Supply-end layers are unattributed, so §8 is effectively about the announcing company | 5/5 |
| 5 | Demand evidence is vendor-selected and unquantified, yet still drives layer directions | 5/5 |
| 6 | Formatting drift between runs under a frozen standard | 5/5 |
| 7 | Self-referential compliance narration inside the report body | 5/5 |

### P1 — Magnitude of value capture is never established (5/5)

Every report reaches a position and stops. SRE-101 §7: the 25x figure is a creation claim and "the split of that surplus between the platform vendor and its buyers is therefore **Unknown**." SRE-102 §7: price is disclosed, cost is not, so "whether ten cents per clock hour represents durable capture, a promotional rate, or a price that competition will erode is therefore **Unknown**." SRE-103 §7: "the structure of capture is disclosed and the economics of capture are not." SRE-104 §7: same finding, with the sharper observation that no charge is disclosed for any software element, so the monetisation mechanism itself is Unknown. SRE-105 §7 Step 4: "Economic profit capture is therefore **not measurable** at T0."

This is the review's most consequential finding, because it means `VALUE_CAPTURE_METHODOLOGY.md` §4 **Step 4 has never once been completed**. Steps 1, 2, 3, and 5 run in all five reports; Step 4 returns Unknown in all five. The cause is the input class rather than the reasoning: a launch announcement discloses capability, sometimes price, and never cost. The methodology is not broken by this, but its central question — who retains the surplus — is answered only as a direction in every report produced so far.

### P2 — One bottleneck, always inferred (5/5)

Each report marks exactly one layer `Bottleneck: Yes`, each states so explicitly in its reading notes, and in no case is the assessment `Evidence-supported`: SRE-101 interconnect fabric, SRE-102 metered compute platform, SRE-103 application distribution, SRE-104 programming model and compiler toolchain, SRE-105 distributed storage system engineering.

The uniformity is the problem. Five sources of different kinds, from three companies across eighteen years, all yielding exactly one inferred bottleneck suggests a habit of the analysis rather than a property of the evidence. SRE-102 shows where it strains: the bottleneck is the 20-instance beta cap, which the report itself concedes is "administrative rather than physical," and which it expects to be temporary. That is a rollout limit, not a scarce capability, so the `Bottleneck` column does not carry the same meaning in SRE-102 as it does in the other four. The column is being filled because it exists.

### P3 — §2 carries forward-looking language that §2 forbids (5/5)

`RESEARCH_REPORT_STANDARD.md` §2 prohibits "no forward language ('will', 'is set to')" in the facts section. Every report breaches it: SRE-101 facts 8, 17, 25 ("will support double the compute", "will be available from partners starting later this year", "will be increasingly GPU-accelerated"); SRE-102 fact 1 ("with more beta slots to open soon"); SRE-103 facts 1, 28 ("will be available on the iPhone's App Store", "will be available in 21 named countries"); SRE-104 fact 16 (the forward-looking-statements section itself); SRE-105 fact 29 ("expects to announce this summer").

All five handled it the same way, by attributing the statement to the publisher rather than asserting it — "NVIDIA stated that…", "The announcement states…". That convergence is evidence the practice is correct and the prohibition is wrong, which is the basis of the specification change in §3 below.

### P4 — The supply end of every value chain is unattributed (5/5)

Each report records layers the source establishes as necessary while naming no participant in them: SRE-101 (advanced packaging, high-bandwidth memory, thermal management, facility power); SRE-102 (physical facilities, server processors, network capacity — all three fully `Unknown` across scarcity, bottleneck, and direction); SRE-103 (device hardware names no component or manufacturing supplier; prior mobile software distribution is `Unknown` in every cell); SRE-104 (semiconductor manufacturing, multi-core CPU, streaming languages); SRE-105 (commodity hardware, data centre facilities, network transit, customer-owned provisioning).

The consequence lands in §8. Row counts are 15, 1, 3, 1, 1 — and in SRE-101 the fourteen non-NVIDIA rows are customers and cloud adopters, not suppliers, so no report contains a single supply-side company. §8 is currently a table about the company that published the announcement. This is a faithful consequence of P0-only sourcing, and each report says so, but it caps what the section can deliver.

### P5 — Vendor-curated demand evidence still drives layer directions (5/5)

The adoption evidence in every case is selected and published by the party announcing: SRE-101 (an adopter list plus four executive quotes), SRE-102 (two self-selected forum posts), SRE-103 (six partner quotes), SRE-104 (three customers), SRE-105 (three early adopters, one a research project with a stated horizon of a few months). Every report flags this in §9. The inconsistency is in what each then does with it: SRE-104 and SRE-105 downgrade the end-user row to `Hypothesis`, SRE-103 refuses to direct the developer layer at all and marks it `Unknown`, while SRE-101 marks application software `↑` on `Hypothesis` and SRE-102 marks application development `↑` on `Reasoned Inference` from the same class of evidence. The same evidence quality produces three different treatments.

### P6 — Formatting drift under a frozen standard (5/5)

Standards rule 5 fixes the structure so reports "remain comparable across cases and diffable over time." They are not yet diffable. Three distinct §9 formats appear across five reports: SRE-101 through SRE-104 use "Assumptions that could fail / What would weaken / What would invalidate", while SRE-105 uses numbered R1–R8 items each with strengthen/weaken/invalidate bullets. Two distinct §10 formats appear: SRE-101 through SRE-104 use a signal table with `Source class`, `Horizon`, and `Absence implies` columns plus a closure table, while SRE-105 uses an Unknown-closure table plus unnumbered prose milestones with no horizons. SRE-105 also appends a `Compliance Record` section that no other report has, and SRE-101 carries a `Revision` line recording that it was regenerated under v1.1 while the others do not.

Some of this drift is a defect against the standard rather than a gap in it — see §3.

### P7 — Compliance narration inside the artifact (5/5)

All five reports explain their own conformance to the reader: "Weakening and invalidating conditions are kept separate deliberately" (SRE-101 through SRE-104, verbatim in each), "recorded rather than papered over" (SRE-103 §3), "This is why confidence is **Medium** and not High" (SRE-105 §7). SRE-105 institutionalises it with a 13-row `Compliance Record` table. Process talk is defensible as transparency, but it belongs in a review like this one rather than in a research artifact, and it is a measurable share of the length of every report.

---

## 2. Best Practices

Only practices demonstrated by more than one report are listed. Each is a candidate for retention because it is observably load-bearing, not because it reads well.

### BP1 — Numbered fact ledger, cited by number downstream (5/5)

Every report numbers §2 facts and cites them as `[fact 17]` in later sections. This is the single most valuable practice in the set, because it makes the facts/reasoning boundary auditable rather than aspirational. It is what allowed this review to find the traceability defects in SRE-101 §§5, 7, and 8 by inspection. Without numbered facts, that defect class is invisible.

### BP2 — An explicit "Not stated, and therefore Unknown" close to §2 (5/5)

Each report ends §2 with an enumerated list of what the source does not say — SRE-101 (pricing, memory supplier, packaging provider, benchmark methodology), SRE-102 (no SLA, no supplier, no cost, no competitor), SRE-103 (no revenue share, no review process, no exclusivity statement), SRE-104 (no price, no portability statement, no benchmark), SRE-105 (no SLA, no cost, no location count, no supplier). This converts absence into a recorded finding and gives §§7 and 10 something concrete to reference. It is the mechanism by which "Unknown remains Unknown" is actually enforced rather than merely promised.

### BP3 — Counter-evidence recorded at the point of the conclusion (4/5)

SRE-102 lists three disclosed facts that defeat its own complement-coupling mechanism (off-the-shelf Xen, commodity-class compute unit, published price with no commitment). SRE-103 notes that more than 125 of 500 launch applications are free, cutting against the monetisation implied by its Tier 1 call. SRE-104 concedes no charge is disclosed for any element of the toolchain it identifies as the retention mechanism. SRE-105 lists six facts cutting against its own Tier 1 assignment and states that they are why confidence stops at Medium. Placing the counter-case in the same paragraph as the claim, rather than deferring it to §9, is what stops the conclusion from reading stronger than its support.

### BP4 — Attackable migration chains with the open link named (5/5)

Every §6 numbers its causal steps and then states which links are not established: SRE-101 (step 4 depends on buyers taking the rack rather than the board product), SRE-102 (steps 3 and 4 — pooled economics undisclosed, scale capped by the beta), SRE-103 (steps 4 and 5 — exclusivity unstated, magnitude undisclosed), SRE-104 (steps 4 and 5 — no exclusivity, no portability statement), SRE-105 (step 5 identified as the single step that converts migration into retention). Naming the weak link is what makes the chain falsifiable in the sense `VALUE_CAPTURE_METHODOLOGY.md` §7 requires.

### BP5 — Leaving tiers vacant (3/5)

SRE-102 leaves Tier 1 vacant and defends the vacancy from disclosed facts. SRE-104 and SRE-105 leave Tier 2 vacant. This is the clearest evidence that the tier structure discriminates rather than decorating: a framework that always finds a capturer is not measuring anything. SRE-102 and SRE-105 read against each other productively — the same company, the same era, opposite Tier 1 outcomes, with the difference located in a disclosed fact (stored data plus per-gigabyte egress creates a switching cost that rented compute hours do not).

### BP6 — Retaining a row whose every cell is Unknown (4/5)

SRE-103 keeps a `Prior mobile software distribution` row with all cells `Unknown` so that the missing origin of its largest claimed migration is visible on the page. SRE-102 does the same for facilities, processors, and network; SRE-101 for facility power; SRE-105 for data centre facilities. Dropping these rows would have produced cleaner tables that concealed exactly where the analysis is blind.

### BP7 — Source-integrity notes carried into §10 (3/5)

SRE-102 records that the retrieved page carries a 2020 link-update notice, SRE-104 that the text is an archived capture of a page no longer served, SRE-105 that the press-center rendering truncates the headline and was cross-checked against an archived copy. SRE-102 and SRE-104 then carry the limitation into §10 as an item with **no** closure path, explicitly marked as permanent. Recording an un-closable Unknown rather than quietly dropping it is the correct handling and should be kept.

---

## 3. Specification Validation

**Conclusion: B — one mandatory change.**

### The change

**`RESEARCH_REPORT_STANDARD.md` §2 — Prohibitions.** Replace the blanket prohibition on forward language with a prohibition on *unattributed* forward, causal, and evaluative language. Forward-looking, evaluative, or causal content that is the P0 source's own statement may be recorded in §2 when it is attributed to the publisher and cited; the report's own voice remains bound by the existing prohibition.

### Why this and nothing else

The prohibition as written is unsatisfiable against the source class the product actually consumes. A launch announcement's factual content routinely *is* forward-looking: that a product "will be available later this year" is a verifiable statement made at T0, not a claim postdating T0. The standard conflates the tense of a statement with the timing of its publication, and the §2 `Invalid if` clause does not even list forward language as a trigger — so the rule is a prohibition no report can honour and no report is failed for breaking.

All five reports breached it, and all five independently invented the same repair: attribute the statement to the publisher. See P3 above for the fact-level citations in each report. A specification whose rule is broken by 5/5 outputs, in the same way, with the same workaround, is describing the wrong thing. The change ratifies the practice the reports already converged on and restores a rule that can be enforced.

### Why the other candidate changes are rejected

Three other defects looked like specification gaps and are not. Each is a report defect against v1.1 as it already stands, so changing the standard would excuse non-compliance rather than fix it:

- **§8 inclusion inconsistency.** SRE-101's 15-row table admits Tier 4 rows whose stated reason is essentially that the company was named as an adopter. §8 already prohibits this: "Companies must not be added merely for coverage completeness; a thin thesis on a large name is worse than its omission." SRE-102 quotes that clause and applies it; SRE-103, SRE-104, and SRE-105 each wrote an explicit inclusion rule consistent with it. The standard is sufficient; SRE-101 does not comply with it.
- **§6 missing elements in SRE-105.** §6 requires a confidence tag on the migration as a whole and, where evidence supports only a direction, the exact sentence "Potential value reallocation. Requires later market verification." SRE-105 §6 has neither. SRE-101 through SRE-104 have both. The contract is already explicit.
- **§10 missing elements in SRE-105.** §10 requires each indicator to be "paired with the horizon by which it would be expected, and what its absence by that point would imply." SRE-105's twelve verification milestones carry neither horizons nor absence-implications, and its closure table does not cover the `Hypothesis` on the end-user row in its own §5. SRE-101 through SRE-104 satisfy both requirements through a signal table with `Horizon` and `Absence implies` columns.

The remaining §§1, 3, 4, 5, 7, 9 contracts held in all five reports without a single case requiring interpretation beyond what the text supplies. One change, not two, and no others.

---

## 4. Report Quality

| Report | Score |
| --- | ---: |
| SRE-101 NVIDIA Blackwell | 7 / 10 |
| SRE-102 Amazon EC2 | 9 / 10 |
| SRE-103 Apple App Store | 9 / 10 |
| SRE-104 NVIDIA CUDA | 9 / 10 |
| SRE-105 Amazon S3 | 7 / 10 |

**SRE-101 — NVIDIA Blackwell (7/10)**
Biggest strength: the §5 bottleneck cell is treated as genuinely load-bearing, with three named alternative bottlenecks — packaging, memory, thermal — kept live as `Bottleneck: Unknown` so the Tier 1 assignment can be attacked at its weakest point.
Biggest weakness: §§5, 7, and 8 introduce material that appears nowhere in §2 — TensorRT-LLM and NeMo Megatron, Project Ceiba with AWS Nitro and EFA networking, and Alphabet and Meta executive statements cited to facts 18 and 20, which contain only name lists — which breaches the rule that a fact appearing first in a reasoning section is a defect.

**SRE-102 — Amazon EC2 (9/10)**
Biggest strength: it leaves Tier 1 vacant and defends the vacancy from four disclosed facts rather than from absence of evidence, which is the strongest available demonstration that the methodology can return "no durable capturer" as a finding.
Biggest weakness: its sole `Bottleneck: Yes` is the 20-instance beta cap, an administrative limit the report itself expects to be temporary, so the bottleneck column means something different here than in the other four reports.

**SRE-103 — Apple App Store (9/10)**
Biggest strength: it marks the third-party developer layer `Expected Value Change: Unknown` despite hundreds of companies shipping over 500 applications, because no commercial term is disclosed — the clearest case in the set of "Unknown remains Unknown" costing the report its most attractive available conclusion.
Biggest weakness: the origin of its largest claimed migration cannot be named, since the source asserts a "breakthrough way" to distribute without describing what preceded it, leaving §6's headline movement anchored to a §5 row whose every cell is `Unknown`.

**SRE-104 — NVIDIA CUDA (9/10)**
Biggest strength: it is the only report carrying an `Evidence-supported` `↓` — the source's own statement that the compiler "obsoletes streaming languages for GPU computing" — and it catches that two of the three quoted customers are commercially linked, so the demand evidence is two independent perspectives rather than three.
Biggest weakness: Tier 1 is assigned while §7 concedes that no price or fee is disclosed for the compiler, driver, kit, or hardware, so the retention mechanism is structurally identified with no disclosed route by which it converts into economic profit.

**SRE-105 — Amazon S3 (7/10)**
Biggest strength: the capture argument rests on an explicit design statement rather than on inference about intent — the requirement that the system be hardware-agnostic "so that savings can be captured as Amazon continues to drive down infrastructure costs" — and it names data gravity through egress pricing as the mechanism that distinguishes its Tier 1 call from SRE-102's vacancy.
Biggest weakness: it is the least specification-compliant of the five despite being the most recent, omitting §6's mandatory migration-wide confidence tag and required standing sentence, omitting §10's required horizons and absence-implications, and appending a `Compliance Record` section that no other report carries.

---

## 5. Overall Conclusion

**Is SRE becoming more accurate?**

In reasoning, yes; in conformance, no. Analytical depth rises across the sequence: SRE-104 produced the first `↓` grounded in the source's own words, and SRE-105 produced the first capture mechanism anchored in an explicit design statement plus the first differentiated Tier 1 call defended against a prior report's opposite finding. But the newest report is also the least compliant with the frozen standard, and the oldest still contains untraceable §2 content. Accuracy of judgment and reliability of execution are moving in opposite directions, so the trend is not a single line and should not be reported as one.

**Is the Value Capture methodology working?**

Partly, and the boundary is precise. Steps 1, 2, 3, and 5 discriminate: across five cases the framework produced one vacant Tier 1, two vacant Tier 2s, and four assigned Tier 1s with named mechanisms, and it separated position from magnitude in every case. Step 4 — identify economic profit capture — has never been completed in any report, because a T0 announcement discloses price at best and cost never. The methodology is working as a test of structural position and is inert as a test of retained share. That is a property of the input class, not a flaw in the tiers, but it means no report so far answers the product's fourth core research question with anything but a direction.

**Is the current workflow repeatable?**

In substance yes, in form not yet. Source acquisition, fact extraction, and §§1–5 reproduced consistently across five cases, including two where the official page no longer resolves and an archived or cross-checked copy was required. Sections 6, 9, and 10 did not: three §9 formats and two §10 formats appeared under one frozen standard, and the most recent run dropped required elements of both §6 and §10. The workflow is repeatable enough to produce comparable analysis and not yet repeatable enough to produce diffable artifacts, which is what Standards rule 5 exists to guarantee.

---

*Review only. No report, prompt, benchmark, engine, schema, or specification file was modified. The single specification change identified in §3 is recorded as a finding and has not been applied.*
