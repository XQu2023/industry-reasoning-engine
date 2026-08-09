# SRE-108 — Apple M1

| Field | Value |
| --- | --- |
| Subject | Apple M1 system-on-a-chip and first M1-powered Macs |
| T0 (frozen date) | 2020-11-10 |
| Industry domain | Semiconductor / Consumer Electronics |
| T0 source A | Apple, official press release, 2020-11-10 — "Apple unleashes M1", subhead "With industry-leading performance, powerful features, and incredible efficiency, M1 is Apple’s first chip designed specifically for the Mac" (`apple.com/newsroom`) |
| T0 source B | Apple, official press release, 2020-11-10 — "Introducing the next generation of Mac", subhead announcing MacBook Air, 13-inch MacBook Pro, and Mac mini powered by M1 (`apple.com/newsroom`) |
| Standards applied | `SRE_PRODUCT_SPEC.md` v1.0, `RESEARCH_REPORT_STANDARD.md` v1.1 (repository; sprint attribution / confidence / traceability rules applied as stated for this run), `VALUE_CAPTURE_METHODOLOGY.md` v1.0, `SRE_GLOSSARY.md` v1.0 |

Two P0 documents, both first-party Apple newsroom press releases datelined **November 10, 2020**, cited as **[A]** and **[B]**. Source A is the M1 chip announcement that defines this case; Source B is the same-day product announcement that places M1 in MacBook Air, 13-inch MacBook Pro, and Mac mini. Nothing published after T0 is used.

Evidence labels used: Evidence-supported, Reasoned Inference, Hypothesis, Unknown (`SRE_GLOSSARY.md` v1.0). Confidence levels: High, Medium, Low (`VALUE_CAPTURE_METHODOLOGY.md` §6).

---

## 1. Executive Summary

Apple announced M1 as “the first chip designed specifically for the Mac” and “the most powerful chip it has ever created”: a system on a chip built on a 5-nanometer process with 16 billion transistors, combining CPU, GPU, Neural Engine, I/O, security, media engines, and related blocks, with a unified memory architecture [facts 1–6, 11, 15, 16, 18]. The same day, Apple introduced MacBook Air, 13-inch MacBook Pro, and Mac mini powered by M1, available to order, as “the beginning of a transition to a new family of chips designed specifically for the Mac” that “will take about two years to complete” [facts 24, 25, 29, 40]. Apple states vendor-tested gains of up to 3.5x CPU, 6x GPU, and 15x machine learning versus previous-generation Macs, with battery life up to 2x longer [facts 8–10]. *(Evidence-supported)*

**Key conclusion.** Value migrates from separately sourced PC-class CPU, discrete or chipset I/O, and memory pools toward a vertically integrated Mac SoC and OS stack that Apple designs, packages, and ships only in its own Macs — with software (Big Sur, Rosetta 2, Universal apps, Metal, Core ML) co-optimized to that silicon. *(Reasoned Inference, Medium)*

**Tier 1 is assigned; magnitude is not established.** Apple occupies the position: it designs M1 specifically for the Mac, combines technologies previously spread across multiple chips into one SoC, owns the Mac OS path that “unlocks” M1, and begins a stated two-year Apple-silicon family transition [facts 1, 4, 5, 26–28, 33]. No cost, wafer price, foundry identity, or margin appears in either release [see the §2 Unknown list]. The position is evidenced; the share of economic profit retained is **Unknown**. *(Reasoned Inference for the position, Medium; Unknown for the share)*

**Top companies for further research — not recommendations, not ranked by attractiveness.**

- **Apple** — designs M1, sells the first M1 Macs, and co-optimizes macOS Big Sur to the chip. Tier 1; share retained Unknown. *(Reasoned Inference, Medium)*
- **Intel** — named in Apple’s footnotes as the CPU class in previous-generation Macs and in compared PC systems. Displaced / substituted incumbent on the Mac CPU path; not a beneficiary. *(Reasoned Inference, Low)*

Market blind spot: attention attaches to “world’s fastest” performance slogans, while the load-bearing change is the shift from multi-chip PC architecture to an Apple-designed SoC with unified memory and a multi-year exclusive Mac transition — a change in who supplies the Mac’s compute substrate, not only how fast a benchmark runs. *(Reasoned Inference, Medium)*

---

## 2. Evidence

Verified facts only. Each is stated in one of the two T0 sources without interpretation. Performance claims are recorded as claims Apple made, including where Apple states it conducted the testing. Future-tense content appears only where the source states it, attributed to Apple.

**From Source A — M1 chip**

1. Apple announced M1 on November 10, 2020, describing it as “the most powerful chip it has ever created and the first chip designed specifically for the Mac.” [A]
2. Apple states M1 “is optimized for Mac systems in which small size and power efficiency are critically important.” [A]
3. Apple states that as a system on a chip (SoC), M1 “combines numerous powerful technologies into a single chip, and features a unified memory architecture for dramatically improved performance and efficiency.” [A]
4. Apple states: “Macs and PCs have traditionally used multiple chips for the CPU, I/O, security, and more. Now with M1, these technologies are combined into a single SoC.” [A]
5. Apple states the unified memory architecture “brings together high-bandwidth, low-latency memory into a single pool within a custom package,” allowing technologies in the SoC “to access the same data without copying it between multiple pools of memory.” [A]
6. Apple states M1 “is the first personal computer chip built using cutting-edge 5-nanometer process technology” and “is packed with an astounding 16 billion transistors, the most Apple has ever put into a chip.” [A]
7. Johny Srouji, Apple’s senior vice president of Hardware Technologies, is quoted stating M1 “builds on more than a decade of designing industry-leading chips for iPhone, iPad, and Apple Watch, and ushers in a whole new era for the Mac.” [A]
8. Apple states M1 “features the world’s fastest CPU core in low-power silicon, the world’s best CPU performance per watt, the world’s fastest integrated graphics in a personal computer, and breakthrough machine learning performance with the Apple Neural Engine.” [A]
9. Apple states M1 “delivers up to 3.5x faster CPU performance, up to 6x faster GPU performance, and up to 15x faster machine learning, all while enabling battery life up to 2x longer than previous-generation Macs.” [A]
10. Apple states that with this increase in performance and efficiency, “M1 delivers the biggest leap ever for the Mac.” [A]
11. Apple states M1 features an 8-core CPU consisting of four high-performance cores and four high-efficiency cores. [A]
12. Apple states the high-performance cores “are the world’s fastest CPU cores in low-power silicon,” and that developers can “build apps nearly 3x faster than before.” [A]
13. Apple states the four high-efficiency cores “deliver outstanding performance at a tenth of the power” and “by themselves… deliver similar performance as the current-generation, dual-core MacBook Air at much lower power.” [A]
14. Apple states that all eight cores “can work together… and deliver the world’s best CPU performance per watt.” [A]
15. Apple states M1 includes Apple’s most advanced GPU, “featuring up to eight powerful cores capable of running nearly 25,000 threads simultaneously,” with “2.6 teraflops of throughput,” described as “the world’s fastest integrated graphics in a personal computer.” [A]
16. Apple states M1 brings the Apple Neural Engine to the Mac, “featuring Apple’s most advanced 16-core architecture capable of 11 trillion operations per second,” enabling “up to 15x faster machine learning performance.” [A]
17. Apple states the entire M1 chip “is designed to excel at machine learning, with ML accelerators in the CPU and a powerful GPU.” [A]
18. Apple states M1 includes Apple’s latest image signal processor (ISP); “the latest Secure Enclave”; “a high-performance storage controller with AES encryption hardware”; “low-power, highly efficient media encode and decode engines”; and “an Apple-designed Thunderbolt controller with support for USB 4, transfer speeds up to 40Gbps.” [A]
19. Apple states the Thunderbolt controller is compatible with more peripherals, “including Apple’s Pro Display XDR in full 6K resolution.” [A]
20. Apple states macOS Big Sur “is engineered, down to its core, to take full advantage of all the capability and power of M1.” [A]
21. Apple states that with M1, “just like iPhone and iPad, the Mac now instantly wakes from sleep,” and that browsing with Safari “is now up to 1.5x speedier at running JavaScript and nearly 2x more responsive.” [A]
22. Apple states that with Big Sur and M1, “all of Apple’s Mac software is now Universal and runs natively on M1 systems,” that existing Mac apps not updated to Universal “will run seamlessly with Apple’s Rosetta 2 technology,” and that “iPhone and iPad apps can now run directly on the Mac.” [A]
23. Apple states that Big Sur foundations are optimized to unlock M1, “including developer technologies from Metal for graphics to Core ML for machine learning.” [A]
24. Apple states M1 powers the new MacBook Air, 13-inch MacBook Pro, and Mac mini, which “join the rest of the Mac product line to form the strongest Mac lineup ever.” [A]
25. Apple states: “This is the beginning of a transition to a new family of chips designed specifically for the Mac. The transition to Apple silicon will take about two years to complete, and these three systems are an amazing first step.” [A]
26. Footnotes in Source A state Apple conducted testing in October 2020 using preproduction 13-inch MacBook Pro systems with Apple M1 and 16GB of RAM, and define comparison sets including “highest-performing CPUs for notebooks” and “high-performing CPUs for notebooks and desktops, commercially available at the time of testing.” [A]
27. Footnotes in Source A define integrated GPU as “a GPU located on a monolithic silicon die along with a CPU and memory controller, behind a unified memory subsystem.” [A]
28. Footnotes in Source A state Safari comparisons used Intel Core i5-based 13-inch MacBook Pro systems (among other configurations), and that M1-versus-previous-Mac Safari tests used production Intel Core i7-based 13-inch MacBook Air and Intel Core i3-based Mac mini systems as baselines. [A]

**From Source B — M1 Mac products**

29. Apple introduced a new MacBook Air, 13-inch MacBook Pro, and Mac mini “powered by the revolutionary M1, the first in a family of chips designed by Apple specifically for the Mac.” [B]
30. Tim Cook, Apple’s CEO, is quoted stating the introduction of three new Macs featuring M1 “represents a bold change that was years in the making,” and that M1 “combined with Big Sur, delivers mind-blowing performance, extraordinary battery life, and access to more software and apps than ever before.” [B]
31. Apple states MacBook Air with M1 has up to 3.5x faster CPU than the previous generation, up to 5x faster graphics, up to 9x faster ML workloads, up to 2x faster SSD performance, and that “in MacBook Air, M1 is faster than the chips in 98 percent of PC laptops sold in the past year.” [B]
32. Apple states the new MacBook Air is fanless and delivers “up to 15 hours of wireless web browsing and up to 18 hours of video playback — the longest battery life ever on a MacBook Air.” [B]
33. Apple states MacBook Air “is still just $999, and $899 for education.” [B]
34. Apple states the 13-inch MacBook Pro with M1 has an 8-core CPU “up to 2.8x faster than the previous generation,” GPU “up to 5x faster,” ML “up to 11x faster,” and “up to 17 hours of wireless web browsing and up to a staggering 20 hours of video playback,” described as “the longest battery life ever on a Mac.” [B]
35. Apple states the 13-inch MacBook Pro “is up to 3x faster than the best-selling Windows laptop in its class” and “is now the world’s fastest compact pro notebook” for on-device ML tasks that use the Neural Engine. [B]
36. Apple states the 13-inch MacBook Pro “is available for the same starting price of just $1,299, and $1,199 for education.” [B]
37. Apple states Mac mini with M1 has an 8-core CPU “with up to 3x faster performance than the previous generation,” GPU “up to a massive 6x increase,” and ML “up to 15x faster performance over the previous generation.” [B]
38. Apple states that compared with “the best-selling Windows desktop in its price range, the Mac mini is just one-tenth the size, yet delivers up to 5x faster performance.” [B]
39. Apple states Mac mini “is now available for just $699, $100 less than the previous-generation quad-core model,” and $679 for education. [B]
40. Apple states the new MacBook Air, 13-inch MacBook Pro, and Mac mini with M1 “are available to order today on apple.com and in the Apple Store app,” and “will begin arriving to customers and will be in select Apple Store locations and Apple Authorized Resellers starting next week.” [B]
41. Footnotes in Source B state comparisons against production Intel Core i7-based PC systems with Intel Iris Plus Graphics and Windows 10, and against Intel Core i5-based PC systems with Intel UHD Graphics 630 and Windows 10, among other test configurations. [B]
42. Source B footnotes also name Microsoft Surface Pro 7, Samsung Galaxy S20 Ultra, Chrome, Firefox, and Microsoft Edge in browser or device comparison testing contexts. [B]

**Not stated in either T0 source, and therefore Unknown:** any wafer foundry or process partner for the 5nm manufacture; any bill of materials, chip cost, or Apple margin on M1 or on M1 Macs; any Intel or other supplier contract term for prior Mac CPUs; any statement that Apple will never again use a third-party CPU in Macs after the two-year transition; unit volumes or sell-through; any competing Apple-silicon Mac from another vendor (by construction Apple-only); any memory, SSD NAND, or display supplier identity beyond Apple’s own Pro Display XDR as a peripheral; and public-listing ticker text for any company. *(Unknown)*

---

## 3. Customer Problem

**What end-user problem changed.** Mac buyers in size- and power-constrained systems faced a trade-off between performance and battery life / thermals. Apple states M1 is optimized for Mac systems “in which small size and power efficiency are critically important,” and frames the outcome as higher CPU/GPU/ML performance “while enabling battery life up to 2x longer than previous-generation Macs” [facts 2, 9]. *(Evidence-supported)*

Two components are distinguishable:

- **Performance per watt as the binding product constraint.** Apple’s repeated “performance per watt” and efficiency-core claims locate the buyer problem in doing more work without proportional power cost [facts 8, 13, 14, 32, 34]. *(Evidence-supported)*
- **Fragmented Mac compute and software path.** Traditional multi-chip CPU/I/O/security layouts and non-native app transitions are addressed by SoC integration plus Universal apps, Rosetta 2, and iPhone/iPad apps on Mac [facts 4, 5, 22]. *(Evidence-supported)*

**Who is worse off without it:** Mac users in portable and compact systems, and developers targeting Mac performance — evidenced by Apple’s workload examples (photo editing, app builds, 4K/8K video, ML) [facts 12, 15, 16, 31, 34, 37]. *(Evidence-supported)*

Absolute willingness-to-pay, prior spend, and how many buyers were blocked by the prior constraint are not disclosed. Magnitude of the customer problem is **Unknown**.

---

## 4. Industry Change

**The concrete change.** Apple replaces the traditional multi-chip Mac/PC compute substrate with an Apple-designed SoC for Mac, beginning a stated ~two-year transition of the Mac lineup to Apple silicon, starting with three shipping products [facts 1, 4, 24, 25, 29, 40]. *(Evidence-supported)*

**Which system requirement shifts.**

1. **From multi-chip to SoC integration.** CPU, I/O, security, and more move onto one chip with unified memory [facts 3–5]. *(Evidence-supported)*
2. **From third-party PC CPU classes in Macs (as baseline) to Apple-designed Mac silicon.** Footnotes use Intel Core-based prior Macs and PCs as comparison baselines [facts 28, 41]; the products announced are M1-powered [facts 24, 29]. *(Evidence-supported for the announced products; Reasoned Inference for the structural shift)*
3. **From OS-as-portable-layer to OS-silicon co-design.** Big Sur is “engineered, down to its core” for M1; Metal and Core ML unlock the chip; Rosetta 2 and Universal apps manage the software transition [facts 20–23]. *(Evidence-supported)*

**Why the prior solution becomes insufficient.** Apple does not claim prior Macs could not compute; it claims the multi-chip tradition limited integration, performance, and efficiency relative to what a Mac-specific SoC with unified memory delivers [facts 3–5, 9, 10]. For battery-limited notebooks, efficiency cores at “a tenth of the power” are presented as the way to keep everyday tasks cheap while reserving performance cores for demand [facts 11–13]. *(Reasoned Inference)*

**Structural or cyclical.** Structural. Participants must change what they do: Apple designs and ships Mac SoCs; Mac software must be Universal or run under Rosetta 2; the Mac lineup transitions over about two years [facts 22, 25, 29]. *(Reasoned Inference)*

---

## 5. Value Chain Analysis

**Purpose.** Map how value flows after §4. No winner is identified here.

| Layer | Role | Scarcity | Bottleneck | Expected Value Change | Evidence Label |
| --- | --- | --- | --- | --- | --- |
| Leading-edge wafer manufacturing (5nm) | Fabricates the SoC on the stated 5nm process [fact 6] | Unknown | Unknown | ↑ | Hypothesis |
| Mac SoC design (CPU/GPU/NPU/ISP/I/O/security) | Designs and integrates M1 technologies into one chip [facts 1, 3, 11, 15, 16, 18] | Yes | Yes | ↑ | Reasoned Inference |
| Unified memory packaging | Provides single high-bandwidth memory pool in a custom package [fact 5] | Unknown | Unknown | ↑ | Reasoned Inference |
| Discrete / multi-chip PC CPU supply for Macs | Previously supplied Mac CPU class; Intel Core baselines appear in footnotes [facts 4, 28, 41] | No | No | ↓ | Reasoned Inference |
| Separate I/O, security, and chipset functions | Previously separate chips; combined into M1 SoC [fact 4] | No | No | ↓ | Reasoned Inference |
| macOS and developer frameworks (Big Sur, Metal, Core ML, Rosetta 2) | Co-optimize software to M1 and manage app transition [facts 20–23] | Yes | No | ↑ | Reasoned Inference |
| Mac system integration and retail | Ships MacBook Air, 13-inch MacBook Pro, Mac mini at stated prices [facts 24, 33, 36, 39, 40] | Unknown | No | ↑ | Reasoned Inference |
| Third-party Mac application software | Runs Universal natively, via Rosetta 2, or as iPhone/iPad apps [fact 22] | No | No | ↑ | Hypothesis |
| PC laptop/desktop competitors (benchmark baselines) | Appear as compared Windows systems in Apple footnotes [facts 31, 35, 38, 41] | No | No | Unknown | Unknown |
| End customers of Macs | Buy performance-per-watt and battery-life gains [facts 9, 32, 34] | No | No | ↑ | Hypothesis |

**Layers with no participant named.** Leading-edge wafer manufacturing is established by the 5nm claim [fact 6] with **no foundry named**; unified memory packaging has no memory vendor named. Per `RESEARCH_REPORT_STANDARD.md` §5, these layers are recorded and left unattributed. No foundry is inferred.

**Reading notes.**

- Exactly one layer is `Bottleneck: Yes` — Mac SoC design — as `Reasoned Inference`: Apple states M1 is the first chip designed specifically for the Mac and that Macs traditionally used multiple chips, now combined [facts 1, 4]. The scarce object is Apple’s Mac-specific SoC design coupled to macOS, not 5nm wafers in general (foundry unnamed; scarcity of wafers **Unknown**).
- Two layers carry `↓`: discrete/multi-chip CPU supply for Macs, and separate I/O/security chipset functions [facts 4, 28].
- Wafer manufacturing is `↑` only as `Hypothesis`: a new Apple SoC implies leading-edge wafers are used [fact 6], but volumes, pricing, and who captures are undisclosed.

No winner is identified in this section.

---

## 6. Value Migration

**Where value moves — origin and destination both named.**

| From (origin layer) | To (destination layer) | Basis |
| --- | --- | --- |
| Multi-chip CPU / I/O / security layouts traditional to Macs and PCs | Mac SoC design with unified memory in a custom package | Facts 3, 4, 5 |
| Third-party PC CPU classes used in prior Macs (Intel Core baselines) | Apple-designed M1 CPU complex (performance + efficiency cores) | Facts 11–14, 28, 41 |
| OS and apps treating Mac silicon as a generic PC-like substrate | macOS Big Sur, Universal apps, Rosetta 2, Metal, Core ML co-designed for M1 | Facts 20–23 |
| Battery/performance trade-offs absorbing buyer surplus on portables | Efficiency-led SoC delivering stated performance at higher battery life | Facts 2, 9, 13, 32, 34 |

**Why the migration follows.**

1. Apple states Macs traditionally used multiple chips for CPU, I/O, security, and more [fact 4]. *(Evidence-supported)*
2. M1 combines those technologies and adds unified memory so blocks share one pool without copying [facts 3, 5]. *(Evidence-supported)*
3. The first Macs shipping that substrate are Apple’s own three models, at the start of a ~two-year Apple-silicon transition [facts 24, 25, 29, 40]. *(Evidence-supported)*
4. Software is rebuilt around that substrate: Big Sur engineered for M1; Universal / Rosetta 2 / iOS apps [facts 20–22]. *(Evidence-supported)*
5. Therefore value migrates from the prior multi-chip / third-party CPU Mac architecture toward Apple’s integrated SoC-plus-OS stack. *(Reasoned Inference)*

**Links not established.** Magnitude of profit migration is **Unknown** (no costs). Whether the two-year transition completes as stated is forward-looking in the source [fact 25] and not verified at T0. *(Unknown)*

**Confidence on the migration as a whole: Medium.** *(Reasoned Inference)*

**Statement of standing.** Potential value reallocation. Requires later market verification.

---

## 7. Value Capture

Per `VALUE_CAPTURE_METHODOLOGY.md`: value creation is not value capture. Vendor performance multiples are creation claims [facts 8–10]; the question is who retains the surplus. Every conclusion below carries exactly one evidence label and one confidence level.

**Step 1 — Industry bottleneck.** Designing a Mac-specific SoC that simultaneously delivers high performance-per-watt, integrated graphics, on-device ML, and OS co-design for Apple’s Mac form factors [facts 1, 2, 8, 20]. *(Reasoned Inference, Medium)*

**Step 2 — Scarce capability.** Apple’s vertical combination of custom Mac silicon + macOS/developer stack + Mac system products. The source states M1 builds on more than a decade of Apple chip design for other devices and is the first chip designed specifically for the Mac [facts 1, 7]. *(Reasoned Inference, Medium)*

**Step 3 — Value migration.** As in §6: toward Apple’s SoC-plus-OS stack; away from multi-chip / prior Mac CPU classes.

**Step 4 — Economic profit capture.** No chip cost, foundry price, or margin is disclosed. Mac starting prices are disclosed [facts 33, 36, 39], but without cost they do not measure capture. *(Unknown, Low)*

**Step 5 — Ranking.**

### Tier 1 — Direct Value Capturer

**Apple** *(Reasoned Inference, Medium)*

Retention mechanism, in three parts:

1. **Exclusive productization path.** M1 is designed specifically for the Mac and ships first only in Apple’s MacBook Air, 13-inch MacBook Pro, and Mac mini [facts 1, 24, 29]. A third party cannot buy M1 as a merchant chip on these facts. *(Reasoned Inference, Medium)*
2. **Software coupling.** Big Sur is engineered for M1; Universal apps, Rosetta 2, Metal, and Core ML bind software progress to Apple’s stack [facts 20–23]. *(Reasoned Inference, Medium)*
3. **Stated multi-year family transition.** Apple states a ~two-year transition to a family of Apple-designed Mac chips, with these three systems as the first step [fact 25]. Switching the Mac substrate becomes a platform program, not a one-SKU experiment. *(Reasoned Inference, Medium)*

**Counter-evidence recorded.** All “world’s fastest / best” claims are Apple’s own tests [facts 8, 26, 27]. No foundry or cost disclosure exists. Prior Mac CPU suppliers’ economics are not quantified. Mac mini price is $100 lower than the prior quad-core model [fact 39], which could mean value passed to buyers. *(Reasoned Inference, Medium)*

**Magnitude of capture: Unknown.** *(Unknown, Low)*

### Tier 2 — Direct Beneficiary

**Vacant.** *(Reasoned Inference, Medium)* No named non-Apple participant shows first-order retained gain. The 5nm layer would be the natural Tier 2 candidate and is unattributed [fact 6]. Naming a foundry would be an inferred participant and is forbidden.

### Tier 3 — Indirect Beneficiary

**None assigned.** Third-party Mac app developers may gain from performance and from iPhone/iPad apps on Mac [fact 22], but no developer company is named as a beneficiary with a retention mechanism. *(Unknown, Low)*

### Negatively affected / displaced (not a beneficiary tier)

**Intel** *(Reasoned Inference, Low)* Named repeatedly as the CPU in previous-generation Macs and in compared PC systems [facts 28, 41]. The announced Macs use M1 instead. This is displacement of the prior Mac CPU role for these SKUs, not evidence of Intel’s company-wide economics. Share of impact **Unknown**.

### Tier 4 — Potential Beneficiary

- **Unnamed 5nm manufacturing partner** *(Unknown, Low)* Implied by process node only [fact 6]; identity and terms Unknown.
- **Mac customers** *(Hypothesis, Low)* Stated performance and battery gains, and Mac mini price cut [facts 9, 32, 34, 39], may mean surplus accrues to buyers. Not excluded.
- **Microsoft, Samsung** *(Unknown, Low)* Appear only in footnote device/browser comparisons [fact 42]; no capture path. Not entered as beneficiaries.

**Alternative explanations.** That Apple’s silicon advantage is competed away by other PC SoCs — possible; no competitor SoC is analyzed in the sources *(Hypothesis, Low)*. That foundry pricing power captures the node rent — possible but unattributed *(Unknown, Low)*. That Intel retains non-Mac CPU franchise unaffected — outside this case’s Mac-transition scope *(Unknown, Low)*.

---

## 8. Listed Companies

Publicly listed participants named in the T0 sources. **Not ranked; not a recommendation; no valuation.**

**Inclusion rule.** Enter only if the T0 source names the entity and that named entity is itself the publicly listed company (not an inferred parent). Thin benchmark-only names are omitted.

| Company | Role | Why | Evidence | Confidence |
| --- | --- | --- | --- | --- |
| Apple | Mac SoC design, macOS co-optimization, Mac systems — Tier 1 Direct Value Capturer | Designs M1 specifically for Mac; ships first M1 Macs; engineers Big Sur, Rosetta 2, Universal apps, Metal, Core ML to the chip; begins stated two-year Apple-silicon transition. Share retained: Unknown | Facts 1, 3–7, 20–25, 29, 33, 36, 39, 40 [A, B] | Medium |
| Intel | Discrete / multi-chip PC CPU supply for prior Macs and compared PCs — displaced / substituted incumbent | Footnotes use Intel Core-based previous Macs and Intel Core-based PC systems as performance baselines; announced Macs use M1 | Facts 28, 41 [A, B]; magnitude of franchise impact: Unknown | Low |

**Named in the sources but excluded from this table.**

- **Microsoft** [fact 42] — named in browser/OS comparison footnotes (Edge, Windows, Surface Pro 7); no Mac-silicon capture path disclosed; thin thesis omitted.
- **Samsung** [fact 42] — Galaxy S20 Ultra in browser footnote only; omitted.

**Layers with no row.** 5nm wafer manufacturing and memory packaging remain unattributed; no company is inferred into them.

**Displaced participants.** Intel is entered above as displaced on the Mac CPU path for the announced products. Broader PC CPU displacement beyond those comparisons is **Unknown**.

---

## 9. Risks

### Assumptions that could fail

1. **Apple-silicon transition completes across the Mac lineup in about two years** — supports §4 and Tier 1 mechanism 3. The timeline is Apple’s forward-looking statement [fact 25]. *(Unknown at T0)*
2. **Vendor performance and battery claims hold in customer use** — supports §§3–6. Figures are Apple-tested on preproduction systems [facts 9, 26, 31, 34]. *(Reasoned Inference)*
3. **SoC integration plus OS co-design is the scarce combination, not the 5nm node alone** — supports §5 bottleneck placement. If any party with 5nm access can match Mac-class efficiency without Apple’s stack, scarcity is mis-located. *(Hypothesis)*
4. **Software transition does not stall adoption** — supports mechanisms 2–3. Rosetta 2 and Universal apps are disclosed [fact 22]; developer follow-through is not. *(Unknown)*
5. **Pricing preserves supplier surplus** — supports magnitude assessment. Mac mini is $100 cheaper than the prior quad-core model [fact 39]; efficiency gains could be competed into price. *(Unknown)*
6. **Intel displacement on these Mac SKUs is economically material to Intel** — supports §8 Intel row. The sources show SKU-level substitution, not Intel company financial impact. *(Hypothesis)*

### What would weaken the thesis

- Realized battery/performance gains materially below Apple’s stated ranges.
- Slow Universal-app adoption, leaving Rosetta as a long-run drag.
- Apple cutting prices enough that silicon gains accrue mainly to customers.
- Other PC vendors shipping comparable high-efficiency SoC notebooks that shrink Apple’s differentiation without removing it.

### What would invalidate the thesis

- **Apple abandoning or reversing the Apple-silicon Mac transition**, restoring third-party CPUs as the Mac substrate.
- **Economic profit from M1 accruing primarily to an unnamed manufacturing partner**, such that wafer/packaging scarcity—not Apple’s design—captures the rent.
- **M1 Macs failing commercially so that the SoC-plus-OS stack does not become the Mac standard**, invalidating the migration rather than merely reducing it.
- **A merchant Mac-class SoC available to non-Apple OEMs matching the disclosed integration and efficiency**, removing exclusivity of the productization path.

Weakening and invalidating conditions are kept separate deliberately: the first four reduce the size of the conclusion, the last four replace it.

---

## 10. Monitoring Signals

Each signal names the P0 source class where it would become visible, a horizon measured from T0, and what its absence by that point would imply.

| # | Signal | Source class | Horizon | Absence implies |
| ---: | --- | --- | --- | --- |
| 1 | Additional Mac models announced with Apple silicon, versus continued Intel Mac SKUs | Apple official newsroom and product pages | Within ~2 years of T0, per stated transition [fact 25] | Assumption 1 weakening |
| 2 | Completion language on the Apple-silicon Mac transition | Apple official announcements | ~2 years | Transition incomplete; Tier 1 mechanism 3 unresolved |
| 3 | Independent or customer-reported battery and performance results vs Apple’s ranges | Customer disclosures; technical publications | 1–4 quarters | Assumption 2 unresolved |
| 4 | Disclosure of Universal app share vs Rosetta-dependent apps | Apple developer announcements; Mac App Store / developer reports | 2–8 quarters | Assumption 4 unresolved |
| 5 | Any disclosure of M1/Apple-silicon manufacturing partner or process economics | Apple or supplier filings and official announcements | 2–8 quarters | 5nm layer stays unattributed; invalidating foundry-capture path untested |
| 6 | Apple segment gross margin or Mac revenue/margin movement after M1 launch | Apple filings | 2–8 quarters | Magnitude of capture stays Unknown |
| 7 | Mac ASP and mix versus the disclosed starting prices | Apple filings and official pricing | 2–8 quarters | Assumption 5 unresolved |
| 8 | Intel disclosures on Mac CPU volume or PC-client mix changes | Intel filings and official announcements | 2–8 quarters | Intel displacement impact stays Unknown |
| 9 | Competing x86 or non-Apple SoC notebooks matching claimed performance-per-watt | Competitor official announcements and reviews based on P0 vendor claims | 4–12 quarters | Differentiation untested |
| 10 | Further Apple Mac SoC family members (post-M1) as implied by “family of chips” | Apple official newsroom | 2–8 quarters | “Family” claim remains first-step only |
| 11 | Developer frameworks (Metal/Core ML) attach to M1 features in shipping apps | Apple developer documentation and app vendor announcements | 2–8 quarters | Software-coupling mechanism unverified beyond Apple’s own apps |
| 12 | Unit shipments of M1 MacBook Air / Pro / mini | Apple filings or official unit disclosures | 2–8 quarters | Adoption scale Unknown |

### Closure paths for every open item

Per `RESEARCH_REPORT_STANDARD.md` §10 and `VALUE_CAPTURE_METHODOLOGY.md` §7, every `Hypothesis` and `Unknown` recorded in §§5–8 has a closure path above.

| Open item | Recorded in | Closes via |
| --- | --- | --- |
| 5nm wafer layer scarcity, bottleneck, participants (**Unknown** / **Hypothesis**) | §5, §7 Tier 2 vacant | Signal 5 |
| Unified memory packaging participants (**Unknown**) | §5 | Signal 5 |
| Third-party Mac app layer direction (**Hypothesis**) | §5 | Signals 4, 11 |
| PC competitor layer direction (**Unknown**) | §5 | Signal 9 |
| End-customer surplus (**Hypothesis**) | §5, §7 Tier 4 | Signals 3, 7 |
| Magnitude of capture / margins (**Unknown**) | §1, §7 Step 4 | Signals 6, 7 |
| Two-year transition completion (**Unknown**) | §4, §9 assumption 1 | Signals 1, 2, 10 |
| Performance claim verification (**Unknown**) | §9 assumption 2 | Signal 3 |
| Software-transition risk (**Unknown**) | §9 assumption 4 | Signals 4, 11 |
| Intel impact magnitude (**Unknown**) | §7, §8 | Signal 8 |
| Customer-problem magnitude (**Unknown**) | §3 | Signals 3, 12 |
| Whether foundry captures the rent (**Unknown**) | §7 alternatives | Signal 5 |

No open item lacks a closure path. No signal requires non-public information. No signal is expressed as a trading trigger, entry condition, or action.

---

*Report produced under `RESEARCH_REPORT_STANDARD.md` v1.1 (repository version; sprint attribution and confidence rules applied). Two P0 sources, T0-locked to 2020-11-10. Contains no investment recommendation, no valuation or securities-price information, and no timing signal. Product prices appear only as facts stated by the source. All Unknown items remain Unknown.*
