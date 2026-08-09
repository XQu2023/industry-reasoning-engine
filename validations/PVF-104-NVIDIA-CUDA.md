# PVF — SRE-104 — NVIDIA CUDA

| Field | Value |
| --- | --- |
| SRE report | `reports/SRE-104-NVIDIA-CUDA.md` |
| SRE T0 | 2006-11-08 |
| Framework | `PREDICTION_VALIDATION_FRAMEWORK.md` v1.0 |
| Validation date | 2026-08-09 |
| Horizons evaluated | H60 (primary); supporting evidence also falls inside H6–H24 windows where noted |
| Latest for this SRE? | Yes — supersedes: None |
| Validator | Sprint PVF-002 |

---

## Original Thesis

Restated only from the SRE at T0. No updating.

**Industry Change (A).**  
A general-purpose C-language development environment reaches the GPU, and GPU cores gain the ability to communicate, synchronise, and share data. System requirements shift from streaming languages and graphics-API-mediated GPU programming toward a vendor C compiler plus separate computing driver; from stream-only hardware toward cooperative thread execution; and from CPU-centric fine-grained crunching toward GPU fine-grained work with CPU retained for coarse control (SRE-104 §4).

**Value Migration (B).**  
Value migrates from streaming languages → NVIDIA programming model/compiler; from multi-core CPU fine-grained compute → GPU compute architecture; from graphics APIs as the compute path → a separate compute driver; and toward dependency of application performance engineering on the vendor programming model. Migration confidence: Medium. Standing: “Potential value reallocation. Requires later market verification.” (SRE-104 §6)

**Value Capture (C).**  
NVIDIA retains via (1) owning the compiler and compute driver, (2) stating obsolescence of streaming languages, (3) binding the architecture to NVIDIA GPUs, and (4) gating the SDK through a registered developer program. Share of economic profit / monetisation path: **Unknown** (no software price disclosed; capture might run through hardware). (SRE-104 §7)

**Tier Assignment (D).**  
Tier 1: NVIDIA (Reasoned Inference, Medium). Tier 2: vacant. Tier 3: Acceleware, SPEAG, Headwave (indirect). Tier 4: unattributed end users (Hypothesis). Magnitude Unknown. (SRE-104 §§7–8)

**Monitoring Signals (E).**  
SRE-104 §10 signals 1–12 (pricing/licence; developer-program size; portability / alternate route; cross-vendor standard; Quadro CUDA shipping; dedicated compute products; OS support; independent performance results; named-customer outcomes; compute revenue disclosure; CPU-vendor responses; manufacturing ramp).

**Standing sentence.**  
Potential value reallocation. Requires later market verification.

---

## Validation Date

| Item | Value |
| --- | --- |
| Validation date | 2026-08-09 |
| Horizon under primary scoring | H60 (~60 months after T0; window closes ~2011-11-08) |
| Other horizons in this file | Evidence dated H6–H24 is used as it falls inside H60; no separate Report Cards for H3/H6/H12/H24 |

---

## New Evidence

Only material **after** T0 (2006-11-08). Facts only; judgments are in Dimension Review.

| ID | Date | Source | Evidence (fact only) | Class (P0 / secondary) | Confidence |
| --- | --- | --- | --- | --- | --- |
| E1 | 2007-03-05 | NVIDIA Corporation press release (as reproduced in contemporaneous coverage of the official announcement): Quadro FX 4600, Quadro FX 5600, and Quadro Plex VCS Model IV unveiled; release states solutions feature CUDA technology so developers can tap Quadro computing power for complex visualization problems; Acceleware CTO Ryan Schneider quoted on Quadro-accelerated electromagnetic/energy simulation | P0 (NVIDIA announcement; body also carried in secondary republication) | High |
| E2 | 2007-06-20/21 | NVIDIA Corporation official Tesla announcement — “NVIDIA Tesla GPU Computing Processor Ushers In the Era of Personal Supercomputing” (Santa Clara): introduces Tesla GPU Computing Processor, Deskside Supercomputer, and GPU Computing Server; states CUDA is a complete software development solution including C-compiler for the GPU, debugger/profiler, dedicated driver, and standard libraries; states CUDA development environment supported on Linux and Microsoft Windows XP | P0 | High |
| E3 | 2007-06-23 | NVIDIA, *CUDA Programming Guide* Version 1.0 (developer.download.nvidia.com): states CUDA is a hardware and software architecture for GPU computation without mapping to a graphics API; available for GeForce 8 Series, Quadro FX 5600/4600, and Tesla; describes driver, API/runtime, CUFFT and CUBLAS libraries | P0 | High |
| E4 | 2007-06 / 2007-12 | NVIDIA Tesla product overview (June 2007, v01) and *NVIDIA Tesla GPU Computing Technical Brief* (Dec 2007): describe Tesla C870 / D870 / S870 line and CUDA SDK including C compiler, debugger/profiler tools, FFT and BLAS libraries; point developers to developer.nvidia.com | P0 | High |
| E5 | 2008-12-09 | Khronos Group press release — “The Khronos Group Releases OpenCL 1.0 Specification” (SIGGRAPH Asia, Singapore): ratifies OpenCL 1.0 as first open, royalty-free standard for cross-platform parallel programming across CPUs, GPUs, and other processors; working-group members listed include AMD, Apple, IBM, Intel, NVIDIA, and others; NVIDIA VP Tony Tamasi quoted that OpenCL provides “another powerful way to harness” CUDA-based GPUs on multiple platforms; AMD states plan to evolve ATI Stream SDK to comply with OpenCL | P0 (standards body) | High |
| E6 | 2009-03-13 | NVIDIA Corporation Form 10-K for fiscal year ended January 25, 2009 (signed March 13, 2009): states Tesla is a family of GPU computing products marking entry into high-performance computing; states CUDA is a general-purpose parallel computing architecture using NVIDIA GPUs; states “There are currently over 25,000 developers around the world using CUDA”; states developers can use C and that other languages are expected; states over 100 universities teach parallel programming with CUDA; states many PC OEMs offer Tesla solutions; lists named customer/user examples including Motorola, Chevron, GE Health Care; places Tesla inside Professional Solutions Business (PSB) with Quadro | P0 | High |
| E7 | 2011-03 (filing for FY ended 2011-01-30) | NVIDIA Corporation Form 10-K for fiscal year ended January 30, 2011: restates strategy to “Revolutionize High Performance Computing with CUDA and Tesla”; states developers worldwide have adopted and written programs for CUDA; states popular off-the-shelf software packages are CUDA-accelerated; reports Tesla progress including Tianhe-1A using more than 7,000 Tesla M2050 GPUs; continues to report Tesla inside PSB with Quadro (no separate CUDA software revenue line) | P0 | High |

**Excluded material (if any).**  
- Undated forum threads and undated marketing pages without a recoverable publication date.  
- Post-H60 material (after ~2011-11-08), including later CUDA version history and later AI-era narratives — not used for primary scoring.  
- Sell-side notes and unverified blog performance claims used alone for `Confirmed` at High confidence.

---

## Dimension Review

### A. Industry Change

| Field | Content |
| --- | --- |
| Outcome | Confirmed |
| Horizon | H60 |
| Evidence | E2, E3, E4 — C-compiler GPU path, dedicated compute driver/runtime, cooperative GPU compute products shipping; OS support disclosed |
| Date | 2007-06-20 through 2007-12 (decisive within H6–H12; holds through H60) |
| Source | NVIDIA Tesla announcement; CUDA Programming Guide 1.0; Tesla technical brief |
| Confidence | High |
| Rationale | The concrete T0 change — general-purpose C reaching the GPU plus cooperative GPU compute as a usable product path — is documented in NVIDIA’s own post-T0 product and developer materials. Streaming-language mediation is no longer the disclosed route in those materials. No evidence in the H60 window reverses the change. |

### B. Value Migration

| Field | Content |
| --- | --- |
| Outcome | Confirmed |
| Horizon | H60 |
| Evidence | E2–E4 (migration toward CUDA toolchain and GPU compute products); E6–E7 (CPU-vs-GPU framing and application dependency on CUDA); E1 (Quadro path) |
| Date | 2007-06 through 2011-03 |
| Source | NVIDIA Tesla/CUDA docs; NVIDIA FY2009 and FY2011 Forms 10-K |
| Confidence | High |
| Rationale | Stated origin→destination moves occurred: developers and HPC products organize around CUDA C + NVIDIA GPU compute rather than streaming languages or CPU-only fine-grained paths. Acceleware’s continued CUDA/Quadro linkage (E1) matches the T0 dependency example. OpenCL (E5) adds a parallel portable interface but does not reverse the observed migration into CUDA for NVIDIA’s stack within H60. |

### C. Value Capture

| Field | Content |
| --- | --- |
| Outcome | Partially Confirmed |
| Horizon | H60 |
| Evidence | E2–E4, E6–E7 (mechanism via CUDA-bound NVIDIA hardware + developer adoption); E5 (portable standard appears); E6–E7 (no separate CUDA software P&L; Tesla inside PSB) |
| Date | 2007-06 through 2011-03 |
| Source | NVIDIA product docs and Forms 10-K; Khronos OpenCL 1.0 release |
| Confidence | Medium |
| Rationale | The named retention mechanism operated: CUDA remained NVIDIA’s programming path for its GPUs; SDK/docs continued; developer and university adoption scaled (E6); monetisation visibly attached to CUDA-capable hardware lines (Tesla/Quadro/GeForce), which is the monetisation hypothesis the SRE left open. Magnitude of *economic profit* retained remains undisclosed — consistent with T0 `Unknown`, not a fail. OpenCL (E5) is a material partial miss against exclusivity of the access path (SRE §9 invalidator #1 / signal 4), without evidence by H60 that it displaced NVIDIA’s Tier-1-style position on its own GPUs. Hence Partially Confirmed, not Confirmed or Falsified. |

### D. Tier Assignment

| Field | Content |
| --- | --- |
| Outcome | Partially Confirmed |
| Horizon | H60 |
| Evidence | E2, E6, E7 (NVIDIA Tier 1 structure holds); E5 (portable standard tests exclusivity); no P0 evidence elevating a second Tier 1 or filling Tier 2 with a durable first-order capturer |
| Date | 2008-12-09; 2009-03-13; 2011-03 |
| Source | Khronos; NVIDIA Forms 10-K |
| Confidence | Medium |
| Rationale | NVIDIA as Tier 1 Direct Value Capturer holds: it still owns the CUDA model tied to its GPUs and expanded compute hardware. Tier 2 vacancy still fits — no other firm is shown capturing first-order surplus from the *CUDA programming model* itself. OpenCL prevents a clean Confirmed because the T0 bottleneck claim (“only disclosed route”) was stress-tested by a cross-vendor standard the SRE explicitly flagged. Tier 3 names were not re-verified exhaustively; absence does not falsify NVIDIA’s tier. |

### E. Monitoring Signals

| Field | Content |
| --- | --- |
| Outcome | Partially Confirmed |
| Horizon | H60 |
| Evidence | Signal portfolio vs E1–E7 (see checklist) |
| Date | 2007-03 through 2011-03 |
| Source | NVIDIA announcements/filings; Khronos |
| Confidence | Medium |
| Rationale | A majority of high-value signals produced observable outcomes inside H60 (Quadro CUDA, Tesla compute line, OS support, developer counts, cross-vendor OpenCL, CUDA strategy in filings). Several remain only partial (no standalone compute P&L; software licence price never published as a fee schedule; independent benchmark closure uneven on P0-only evidence). Portfolio outcome is Partially Confirmed. |

**Signal-level checklist**

| SRE signal # | Expected by (SRE) | Observed by H60? | Notes |
| ---: | --- | --- | --- |
| 1 | 1–4 quarters | Partial | No published CUDA compiler/driver *licence fee*; toolkit/docs distributed as developer materials (E3–E4). Monetisation visible via hardware, not software price list |
| 2 | 1–4 quarters | Yes | “Over 25,000 developers… using CUDA” (E6, filed 2009-03-13) |
| 3 | 2–8 quarters | Partial | CUDA remains NVIDIA-GPU-oriented in NVIDIA docs (E3); OpenCL offers another route (E5) |
| 4 | 4–12 quarters | Yes | OpenCL 1.0 ratified 2008-12-09 (E5) |
| 5 | 2–8 quarters | Yes | Quadro FX 4600/5600 with CUDA, 2007-03-05 (E1); Programming Guide lists Quadro (E3) |
| 6 | 4–12 quarters | Yes | Tesla compute product family, 2007-06 (E2, E4); continued in 10-Ks (E6–E7) |
| 7 | 1–4 quarters | Yes | Linux and Windows XP stated for CUDA (E2) |
| 8 | 2–8 quarters | Partial / Unknown on P0 | Customer acceleration language continues (E1, E6); rigorous independent benchmark set not assembled here from P0-only sources |
| 9 | 2–8 quarters | Partial | Acceleware still in NVIDIA Quadro narrative (E1); OEM/end-user examples in 10-K (E6); Headwave/SPEAG outcomes not separately verified |
| 10 | 4–12 quarters | Partial | Tesla discussed strategically; revenue reported inside PSB with Quadro, not as a CUDA software or pure-Tesla line (E6–E7) |
| 11 | 4–12 quarters | Partial | OpenCL targets CPUs and GPUs with Intel/AMD in working group (E5); does not by itself prove CPU closed the named workload gap |
| 12 | 2–8 quarters | Unknown | No manufacturing-partner disclosure tied specifically to CUDA ramp used in this file |

---

## Final Status

### Prediction Accuracy

| Dimension | Weight | Outcome | Points | Weighted |
| --- | --- | ---: | ---: | ---: |
| A Industry Change | 20 | Confirmed | 100 | 20.00 |
| B Value Migration | 20 | Confirmed | 100 | 20.00 |
| C Value Capture | 25 | Partially Confirmed | 65 | 16.25 |
| D Tier Assignment | 20 | Partially Confirmed | 65 | 13.00 |
| E Monitoring Signals | 15 | Partially Confirmed | 65 | 9.75 |
| **Total** | **100** | — | — | **79.00** |

**Prediction Accuracy: 79**

Points key: Confirmed 100 · Partially Confirmed 65 · Unchanged 40 · Weakened 25 · Unknown 35 · Falsified 0.

### Report Card

| Field | Content |
| --- | --- |
| Biggest success | Industry change and migration calls: within ~7–8 months NVIDIA shipped CUDA documentation, OS support, Quadro CUDA, and a dedicated Tesla compute line — exactly the structural shift SRE-104 described (E1–E4). Tier 1 placement on the programming-model owner, not on “faster GPU” rhetoric, held through H60. |
| Biggest miss | Cross-vendor portability (OpenCL, E5) arrived inside the SRE’s own signal-4 / invalidator window and was under-weighted relative to how cleanly the T0 bottleneck was phrased as the “only disclosed route.” Capture *magnitude* and a clean compute P&L also never resolved (E6–E7), so the hardest economic claim stayed Unknown even after adoption was obvious. |
| Lessons learned | (1) When §7 says monetisation may run through hardware, §10 should require a hardware-attach signal (SKU line, segment mix), not only a software price list. (2) Named falsifiers about portable standards should be treated as first-class early-horizon tests, not distant “untested” items. (3) Developer-count disclosures in filings are high-value closures for gated-SDK theses. |

### Final status line

At H60 the T0 thesis is **largely confirmed** on industry change and value migration (Prediction Accuracy **79**); NVIDIA Tier 1 holds with **Partial** confirmation on capture/tiers because OpenCL tested exclusivity and capture magnitude remained Unknown.

---

## Lessons

Process and methodology only. Original SRE not edited.

1. **Hardware-attach monitoring.** For toolchain launches with no software fee, pair “licence terms” signals with “dedicated compute SKU / segment disclosure” signals from day one.
2. **Standards falsifiers are early.** A cross-vendor API risk named at T0 (SRE-104 fact 16 / signal 4) should be scheduled no later than H24 and scored explicitly when it hits — as here with OpenCL at ~25 months.
3. **Unknown magnitude can co-exist with Confirmed direction.** PVF correctly does not punish T0 `Unknown` share when later filings still omit economic-profit split; punish only false precision.
4. **First PVF run hygiene.** Keep secondary republications of NVIDIA PRs labeled; prefer SEC and standards-body P0 for High confidence on adoption and portability tests.

---

*PVF artifact only. Original SRE report was not modified. No investment recommendation.*
