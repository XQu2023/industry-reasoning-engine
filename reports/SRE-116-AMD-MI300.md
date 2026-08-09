# SRE-116 — AMD MI300

| Field | Value |
| --- | --- |
| Subject | AMD Instinct MI300 Series — MI300X accelerators and MI300A APUs |
| T0 (frozen date) | 2023-12-06 |
| Industry domain | AI Computing / High-performance computing accelerators |
| T0 source A | Advanced Micro Devices, Inc., press release — “AMD Delivers Leadership Portfolio of Data Center AI Solutions with AMD Instinct MI300 Series”, December 6, 2023 (`ir.amd.com` / `amd.com` newsroom; GlobeNewswire dateline) |
| T0 source B | AMD Blog — Guy Ludden, “Introducing the AMD Instinct™ MI300 Series accelerators, Powering the Growth of AI and HPC at Scale”, December 6, 2023 (`amd.com/en/blogs/2023/introducing-the-amd-instinct-mi300-series-acceler.html`) |
| Standards applied | `SRE_PRODUCT_SPEC.md` v1.0, `RESEARCH_REPORT_STANDARD.md` v1.1 (repository; sprint attribution / confidence / traceability rules applied as stated for this run), `VALUE_CAPTURE_METHODOLOGY.md` v1.0, `SRE_GLOSSARY.md` v1.0, `MISSION.md` |

Two P0 documents, both first-party AMD properties published on T0, cited as **[A]** and **[B]**. Nothing published after T0 is used as evidence. Third-party coverage is excluded. Related-blog sidebars dated after T0 on the live blog page are not used.

**Source-retrieval note.** The frozen case date is **2023-12-06**. Source A is the official AMD availability press release (IR and newsroom renderings of the same announcement). Source B is the same-day AMD product blog. Whether any character-level difference exists versus the texts as first served is **Unknown**; the retrieved bodies are used as the official T0 text.

Evidence labels used: Evidence-supported, Reasoned Inference, Hypothesis, Unknown (`SRE_GLOSSARY.md` v1.0). Confidence levels: High, Medium, Low (`VALUE_CAPTURE_METHODOLOGY.md` §6).

---

## 1. Executive Summary

AMD announced availability of the AMD Instinct MI300X accelerator — which AMD states has industry-leading memory bandwidth for generative AI and leadership performance for LLM training and inference — and the AMD Instinct MI300A APU combining CDNA 3 GPU architecture with “Zen 4” CPUs for HPC and AI [facts 1–3, 13–15, 18]. Specs AMD publishes include MI300X with 304 GPU CUs and 192 GB HBM3 at 5.3 TB/s peak theoretical bandwidth, MI300A with 228 GPU CUs, 24 “Zen 4” CPU cores, and 128 GB HBM3, plus an eight-accelerator Instinct Platform with 1.5 TB HBM3 on an OCP design [facts 15, 16, 25, 35]. AMD also announced ROCm 6, claiming ~8x generational AI acceleration on Llama 2 text generation versus prior AMD hardware/software, and named cloud, OEM, and supercomputing paths including Microsoft Azure ND MI300x v5 VMs, planned Oracle Cloud MI300X instances, Dell / HPE / Lenovo / Supermicro systems, and El Capitan at Lawrence Livermore National Laboratory [facts 4–12, 21–24, 7, 34]. *(Evidence-supported)*

**Key conclusion.** Value migrates from prior-generation discrete accelerators (including AMD’s own MI250X and, on AMD’s comparisons, Nvidia H100-class platforms) toward CDNA 3–based high-HBM3 Instinct MI300 products and ROCm 6 software for generative AI and HPC/AI convergence — if announced deployments and design-ins convert to sustained volume. *(Reasoned Inference, Medium)*

**Tier 1 is assigned; magnitude is not established.** Advanced Micro Devices, Inc. designs and sells the MI300 Series, ROCm 6, and the Instinct Platform, and discloses NASDAQ listing [facts 1, 21–25, 28]. Price, margin, and share of industry economic profit are not disclosed [see the §2 Unknown list]. The position is evidenced; the share retained is **Unknown**. *(Reasoned Inference for the position, Medium; Unknown for the share)*

**Top companies for further research — not recommendations, not ranked by attractiveness.**

- **Advanced Micro Devices, Inc. (NASDAQ: AMD)** — designs/sells MI300 Series; Tier 1. *(Reasoned Inference, Medium)*
- **Nvidia** — comparison baseline in AMD’s H100 HGX / Hopper footnotes; negatively affected path if AMD’s claims hold. Listing not established by ticker in the T0 sources. *(Hypothesis, Low)*
- **Microsoft** — Azure ND MI300x v5 VMs powered by MI300X. *(Hypothesis, Low)*
- **Oracle** — plans MI300X bare-metal / OCI Supercluster support. *(Hypothesis, Low)*

Market blind spot: treating MI300 as a routine GPU refresh while underweighting the structural claim — 192 GB HBM3-class memory for single-accelerator 70B inference (per AMD), CPU+GPU APU packaging for HPC/AI, and an open ROCm 6 deployment path with named cloud/OEM design-ins. *(Reasoned Inference, Medium)*

---

## 2. Evidence

Verified facts only. Each is stated in one of the T0 AMD sources without interpretation. Future-tense content appears only where AMD states it, attributed to AMD.

**From Source A — press release (2023-12-06)**

1. The release is dated December 6, 2023, Santa Clara, Calif., via GlobeNewswire, and announces availability of AMD Instinct MI300X accelerators and AMD Instinct MI300A APUs from AMD (NASDAQ: AMD). [A]
2. AMD states MI300X has “industry leading memory bandwidth for generative AI” and “leadership performance for large language model (LLM) training and inferencing.” [A]
3. AMD states MI300A combines “the latest AMD CDNA™ 3 architecture and ‘Zen 4’ CPUs to deliver breakthrough performance for HPC and AI workloads.” [A]
4. Victor Peng, president, AMD, is quoted stating MI300 Series accelerators “will be in large scale cloud and enterprise deployments,” and that by leveraging “leadership hardware, software and open ecosystem approach, cloud providers, OEMs and ODMs are bringing to market technologies that empower enterprises to adopt and deploy AI-powered solutions.” [A]
5. The release subtitle states Dell Technologies, Hewlett Packard Enterprise, Lenovo, Meta, Microsoft, Oracle, Supermicro “and others showcase AMD hardware for high performance computing and generative AI.” [A]
6. AMD states customers leveraging the portfolio include Microsoft, which “recently announced the new Azure ND MI300x v5 Virtual Machine (VM) series, optimized for AI workloads and powered by AMD Instinct MI300X accelerators.” [A]
7. AMD states El Capitan — “a supercomputer powered by AMD Instinct MI300A APUs and housed at Lawrence Livermore National Laboratory” — “is expected to be the second exascale-class supercomputer powered by AMD and expected to deliver more than two exaflops of double precision performance when fully deployed.” [A]
8. AMD states “Oracle Cloud Infrastructure plans to add AMD Instinct MI300X-based bare metal instances” for AI, and that “MI300X-based instances are planned to support OCI Supercluster with ultrafast RDMA networking.” [A]
9. AMD states Dell showcased the Dell PowerEdge XE9680 server featuring eight AMD Instinct MI300 Series accelerators and a Dell Validated Design for Generative AI with AMD ROCm-powered AI frameworks. [A]
10. AMD states HPE “recently announced the HPE Cray Supercomputing EX255a, the first supercomputing accelerator blade powered by AMD Instinct MI300A APUs,” which AMD attributes as becoming “available in early 2024.” [A]
11. AMD states Lenovo “announced its design support for the new AMD Instinct MI300 Series accelerators with planned availability in the first half of 2024.” [A]
12. AMD states Supermicro “announced new additions to its H13 generation of accelerated servers powered by 4th Gen AMD EPYC™ CPUs and AMD Instinct MI300 Series accelerators.” [A]
13. AMD states MI300X is powered by AMD CDNA 3 architecture and, versus previous-generation AMD Instinct MI250X, delivers “nearly 40% more compute units,” “1.5x more memory capacity,” “1.7x more peak theoretical memory bandwidth,” and support for new math formats such as FP8 and sparsity. [A]
14. AMD states “Today’s LLMs continue to increase in size and complexity, requiring massive amounts of memory and compute.” [A]
15. AMD states MI300X features “a best-in-class 192 GB of HBM3 memory capacity as well as 5.3 TB/s peak memory bandwidth” (with footnote methodology). [A]
16. AMD states the AMD Instinct Platform is “built on an industry standard OCP design with eight MI300X accelerators to offer an industry leading 1.5TB of HBM3 memory capacity,” and that the standard design “allows OEM partners to design-in MI300X accelerators into existing AI offerings.” [A]
17. AMD states that compared to the Nvidia H100 HGX, “the AMD Instinct Platform can offer a throughput increase of up to 1.6x when running inference on LLMs like BLOOM 176B” and “is the only option on the market capable of running inference for a 70B parameter model, like Llama2, on a single MI300X accelerator.” [A]
18. AMD states MI300A APUs are “the world’s first data center APU for HPC and AI,” leverage 3D packaging and the 4th Gen AMD Infinity Architecture, and combine CDNA 3 GPU cores, “Zen 4” x86 CPU cores, and 128 GB HBM3 to deliver “~1.9x the performance-per-watt on FP32 HPC and AI workloads” versus MI250X. [A]
19. AMD states MI300A APUs integrate CPU and GPU cores on a single package and feature “unified memory and cache resources.” [A]
20. AMD states its “30x25 goal,” “aiming to deliver a 30x energy efficiency improvement in server processors and accelerators for AI-training and HPC from 2020-2025.” [A]
21. AMD announces “the latest AMD ROCm™ 6 open software platform” and “the company’s commitment to contribute state-of-the-art libraries to the open-source community.” [A]
22. AMD states ROCm 6 increases “AI acceleration performance by ~8x when running on MI300 Series accelerators in Llama 2 text generation compared to previous generation hardware and software,” and adds support for FlashAttention, HIPGraph, and vLLM, among others. [A]
23. AMD states it is “uniquely positioned to leverage the most broadly used open-source AI software models, algorithms and frameworks – such as Hugging Face, PyTorch, TensorFlow and others.” [A]
24. AMD states it continues to invest in software through “the acquisitions of Nod.AI and Mipsology” and through partnerships such as Lamini (“running LLMs for enterprise customers”) and MosaicML (“leveraging AMD ROCm to enable LLM training on AMD Instinct accelerators with zero code changes”). [A]
25. AMD publishes a specifications table: MI300A — CDNA 3, 228 GPU CUs, 24 “Zen 4” CPU cores, 128 GB HBM3, 5.3 TB/s peak theoretical memory bandwidth, 5nm/6nm, 3D packaging with 4th Gen AMD Infinity Architecture; MI300X — CDNA 3, 304 GPU CUs, N/A CPU cores, 192 GB HBM3, 5.3 TB/s, 5nm/6nm, same packaging; Platform — 2,432 GPU CUs, 1.5 TB HBM3, 5.3 TB/s per OAM. [A]
26. Footnotes compare MI300X memory capacity/bandwidth figures to published Nvidia Hopper H200 and H100 results and detail AMD Performance Labs measurement dates in November 2023. [A]
27. Footnotes for the Nvidia H100 comparison describe test configurations including Intel Xeon Platinum host CPUs on both AMD and Nvidia systems. [A]
28. The About AMD section states AMD (NASDAQ: AMD) has driven innovation in high-performance computing, graphics, and visualization for more than 50 years, and identifies trademarks of Advanced Micro Devices, Inc. [A]
29. The cautionary statement identifies the registrant as Advanced Micro Devices, Inc. (AMD) and lists forward-looking items including features, availability, timing, and expected benefits of MI300X, MI300A, El Capitan, the 30x25 goal, the Instinct platform, MI300X bare-metal instances, and ROCm. [A]

**From Source B — AMD Blog (2023-12-06)**

30. The post is dated Dec 06, 2023, titled “Introducing the AMD Instinct™ MI300 Series accelerators, Powering the Growth of AI and HPC at Scale,” by Guy Ludden. [B]
31. AMD states data growth and need for real-time results push AI and HPC requirements for high compute, storage, large memory capacity, and high memory bandwidth, used differently across AI (lower-precision speed, big memory for generative AI and training) and HPC (higher precision, large-data simulations). [B]
32. AMD states the MI300 Series features third-generation Compute DNA (AMD CDNA 3) with two variants for AI and HPC requirements, and that ROCm 6 is an “open production-ready software platform.” [B]
33. AMD states CDNA 3 “embraces advanced packaging to enable heterogeneous integration,” repartitions compute, memory, and communication across a heterogeneous package integrating “up to eight vertically stacked compute dies and four I/O dies (IOD)” with 4th Gen Infinity Architecture and “eight stacks of high-bandwidth memory.” [B]
34. AMD states MI300A integrates 3D-stacked “Zen 4” x86 CPUs and CDNA 3 GPU XCDs with HBM, has “24 CPU cores and 14,592 GPU stream processors,” and “is expected to be leveraged by many of the world’s largest, most scalable data centers and supercomputers,” including “powering the future two-exaflop El Capitan supercomputer.” [B]
35. AMD states MI300X “replaced three ‘Zen 4’ CPU chiplets integrated on the MI300A with two additional AMD CDNA 3 XCD chiplets and added an additional 64GB of HBM3 memory,” yielding “up to 192GB of memory,” and that running larger language models in memory allows cloud and enterprise users to “run more inference jobs per GPU,” “can reduce the total number of GPUs needed,” and “helps lower the total cost of ownership (TCO).” [B]
36. AMD states ROCm 6 is optimized for MI300, “maintaining compatibility with industry software frameworks,” consists of drivers, development tools, and APIs, is “free, open source,” and that software designed on it is “portable, allowing movement between accelerators from different vendors.” [B]
37. AMD points readers to Infinity Hub containers and deployment guides for HPC, AI, and machine-learning applications. [B]

**Not stated in any T0 source used here, and therefore Unknown:** any AMD list price, ASP, or margin for MI300 products; unit shipment or revenue figures; exclusive supply terms for HBM3 or wafer foundry identity beyond “5nm / 6nm”; any ticker/exchange designation for Nvidia, Microsoft, Oracle, Meta, Dell, HPE, Lenovo, Supermicro, Intel, Hugging Face, Lamini, or MosaicML; Meta’s specific MI300 deployment beyond the showcase subtitle; and whether AMD’s performance comparisons hold under third-party replication. *(Unknown)*

---

## 3. Customer Problem

**What end-user problem changed.** Cloud providers, enterprises, OEMs, and HPC operators need accelerators with enough memory capacity/bandwidth and compute to train and serve growing LLMs and to run HPC/AI workloads efficiently — including unified CPU–GPU programming for converged workloads. AMD states LLMs are increasing in size and complexity and require massive memory and compute; AI needs lower-precision speed and big memory; HPC needs higher precision and large-data simulation resources [facts 14, 31]. *(Evidence-supported)*

Three components are distinguishable:

- **Memory capacity / bandwidth for large models.** 192 GB HBM3 MI300X; 1.5 TB platform; single-GPU 70B Llama2 inference claim [facts 15–17, 35]. *(Evidence-supported as AMD’s claim)*
- **HPC/AI convergence and programming overhead.** MI300A unified memory/cache and CPU+GPU package [facts 18, 19, 33, 34]. *(Evidence-supported)*
- **Software deployability.** ROCm 6 with FlashAttention, HIPGraph, vLLM; open frameworks; MosaicML zero-code-change training claim [facts 21–24, 36]. *(Evidence-supported as AMD’s claim)*

**Who is worse off without it:** operators of generative-AI and HPC systems that AMD says need more memory/compute and efficient CPU–GPU packaging — including named cloud/OEM/supercomputing paths [facts 6–12, 14, 31]. How many such operators exist and what they previously spent is not disclosed. Magnitude of the customer problem is **Unknown**.

---

## 4. Industry Change

**The concrete change.** AMD makes available CDNA 3–based Instinct MI300X GPUs and MI300A CPU+GPU APUs with HBM3 capacities of 192 GB / 128 GB (and an eight-GPU OCP Instinct Platform), paired with ROCm 6, and announces cloud, OEM, and El Capitan design-ins [facts 1, 6–12, 15, 16, 21, 25]. *(Evidence-supported)*

**Which system requirement shifts.**

1. **From prior-gen MI250X-class AMD accelerators to CDNA 3 MI300 with more CUs, memory, bandwidth, and FP8/sparsity.** Generational deltas stated by AMD [facts 13, 18, 22]. *(Evidence-supported as AMD’s claim)*
2. **From memory-constrained multi-GPU LLM inference toward higher per-accelerator HBM3 capacity.** Single MI300X 70B Llama2 inference claim; TCO via fewer GPUs [facts 17, 35]. *(Evidence-supported as AMD’s claim)*
3. **From discrete CPU–GPU HPC nodes toward data-center APU packages with unified memory.** “World’s first data center APU for HPC and AI” [facts 18, 19, 33, 34]. *(Evidence-supported as AMD’s claim)*
4. **From closed or prior ROCm stacks toward ROCm 6 open production software with named generative-AI features.** FlashAttention, HIPGraph, vLLM; portability claim across vendors [facts 21, 22, 36]. *(Evidence-supported as AMD’s claim)*

**Why the prior solution becomes insufficient.** AMD argues LLM size/complexity and HPC/AI data intensity require more memory, bandwidth, and efficiency; it positions MI300 and ROCm 6 as the response, with comparisons to MI250X and Nvidia H100 HGX [facts 13–18, 31, 35]. Independent verification is not in the sources. *(Reasoned Inference)*

**Structural or cyclical.** Structural if high-HBM3 CDNA 3 platforms and ROCm 6 become a default AI/HPC accelerator path alongside competing stacks: packaging, memory capacity, and open software change what operators must buy and how they deploy [facts 16, 17, 21, 33]. At T0 availability is announced with planned OEM dates into 2024; volume is undisclosed [facts 1, 10, 11]. *(Reasoned Inference)*

---

## 5. Value Chain Analysis

**Purpose.** Map how value flows after §4. No winner is identified here.

| Layer | Role | Scarcity | Bottleneck | Expected Value Change | Evidence Label |
| --- | --- | --- | --- | --- | --- |
| Wafer process (5nm / 6nm) | Process nodes listed for MI300 [fact 25] | Unknown | Unknown | Unknown | Unknown |
| HBM3 memory stacks | 128–192 GB per device; 1.5 TB platform; eight HBM stacks in CDNA 3 package [facts 15, 16, 25, 33] | Unknown | Yes | ↑ | Reasoned Inference |
| AMD CDNA 3 / MI300 accelerator silicon & packaging | MI300X GPU and MI300A APU products [facts 1, 25, 33–35] | Unknown | Yes | ↑ | Reasoned Inference |
| ROCm 6 open software platform | Drivers, tools, APIs; FlashAttention, HIPGraph, vLLM [facts 21, 22, 36] | No | No | ↑ | Reasoned Inference |
| Prior-gen AMD Instinct (MI250X) | Generational baseline AMD improves upon [facts 13, 18, 22] | No | No | ↓ | Reasoned Inference |
| Competing accelerator platforms (Nvidia H100 HGX / Hopper class as AMD compares) | Comparison baseline for throughput/memory [facts 17, 26] | Unknown | Unknown | ↓ | Hypothesis |
| Cloud accelerated instances (Azure, OCI paths) | Host MI300X for AI workloads [facts 6, 8] | Unknown | No | ↑ | Reasoned Inference |
| OEM / ODM server & blade systems | Dell, HPE, Lenovo, Supermicro design-ins [facts 9–12] | No | No | ↑ | Reasoned Inference |
| Supercomputing end sites (e.g. El Capitan / LLNL) | MI300A-powered exascale path [facts 7, 34] | Unknown | No | ↑ | Hypothesis |
| Open AI frameworks (PyTorch, TensorFlow, Hugging Face) | Software models AMD says it leverages [fact 23] | No | No | → | Unknown |

**Layers with no participant named.** HBM3 suppliers and wafer foundries are unattributed beyond process-node labels [fact 25]. Per `RESEARCH_REPORT_STANDARD.md` §5, none is inferred.

**Reading notes.**

- Bottleneck layers labeled `Yes` as `Reasoned Inference`: HBM3 capacity/bandwidth and the MI300 silicon/packaging that deliver it for LLM/HPC [facts 14–16, 25]. Scarcity of AMD’s specific implementation versus rivals is **Unknown**.
- Prior AMD MI250X is `↓` on AMD’s own generational claims [facts 13, 18]. Nvidia-class platforms are `↓` only as `Hypothesis` based on AMD’s comparative claims [fact 17].
- ROCm is `Scarcity: No` because AMD states it is free, open, and portable across vendors [fact 36].

No winner is identified in this section.

---

## 6. Value Migration

**Where value moves — origin and destination both named.**

| From (origin layer) | To (destination layer) | Basis |
| --- | --- | --- |
| Prior-gen AMD Instinct MI250X-class accelerators | CDNA 3 MI300X / MI300A products | Facts 13, 18, 22, 25 |
| Memory-constrained multi-GPU LLM serving (as AMD frames) | High-HBM3 MI300X / Instinct Platform | Facts 15–17, 35 |
| Discrete CPU–GPU HPC coupling | MI300A unified-memory APU packages | Facts 18, 19, 33, 34 |
| Prior ROCm / closed stacks (as AMD contrasts) | ROCm 6 open generative-AI feature set | Facts 21, 22, 36 |

**Why the migration follows.**

1. AMD states LLMs and HPC/AI workloads need more memory, bandwidth, and efficient compute [facts 14, 31]. *(Evidence-supported)*
2. It ships MI300 products with stated generational gains and APU integration, plus an OCP eight-GPU platform [facts 13, 16, 18, 25]. *(Evidence-supported)*
3. It pairs hardware with ROCm 6 and names cloud/OEM/supercomputing adoption paths [facts 6–12, 21, 22]. *(Evidence-supported)*
4. Therefore value migrates toward high-HBM3 CDNA 3 Instinct platforms and ROCm 6 — if deployments scale. *(Reasoned Inference)*

**Links not established.** Magnitude of profit migration is **Unknown** (no prices). Whether HBM suppliers capture most surplus is **Unknown**. Whether Nvidia retains category leadership despite AMD’s claims is **Unknown**. *(Unknown)*

**Confidence on the migration as a whole: Medium.** *(Reasoned Inference)* Direction is supported by product availability, specs, and named design-ins. Against that: AMD-produced benchmarks, open/portable software that can weaken lock-in, and undisclosed volumes/margins. Under `VALUE_CAPTURE_METHODOLOGY.md` §6, those gaps cap confidence below High.

**Statement of standing.** Potential value reallocation. Requires later market verification.

---

## 7. Value Capture

Per `VALUE_CAPTURE_METHODOLOGY.md`: value creation is not value capture. Higher performance and TCO claims are *creation* language [facts 17, 35]; the question is who retains surplus. Every conclusion below carries exactly one evidence label and one confidence level.

**Step 1 — Industry bottleneck.** Delivering accelerator memory capacity/bandwidth and packaged CPU–GPU compute sufficient for large LLM and HPC/AI workloads at deployable software cost [facts 14–19, 31]. *(Reasoned Inference, Medium)*

**Step 2 — Scarce capability.** AMD’s MI300 CDNA 3 silicon/packaging with HBM3 (especially 192 GB MI300X) plus ROCm 6 deployment path [facts 15, 25, 21, 35]. Replicability by others is **Unknown**; Nvidia is named as a compared alternative [facts 17, 26]. *(Reasoned Inference, Medium)*

**Step 3 — Value migration.** As in §6: toward MI300 / Instinct Platform / ROCm 6; away from prior MI250X-class AMD parts and, on AMD’s claims, some Nvidia H100-class inference configurations.

**Step 4 — Economic profit capture.** No ASP or margin disclosed. Magnitude of capture is **Unknown**. *(Unknown, Low)*

**Step 5 — Ranking.**

### Tier 1 — Direct Value Capturer

**Advanced Micro Devices, Inc.** *(Reasoned Inference, Medium)*

Retention mechanism, in three parts:

1. **Owns the MI300 product architecture.** Designs and announces availability of MI300X, MI300A, and the Instinct Platform with published specs [facts 1, 15, 16, 25]. *(Evidence-supported for ownership/availability; Reasoned Inference that this is the capture surface, Medium)*
2. **Customer design-ins as switching/adoption anchors.** Microsoft Azure ND MI300x v5; planned OCI instances; Dell, HPE, Lenovo, Supermicro systems; El Capitan MI300A path [facts 6–12, 7]. Durability and exclusivity Unknown. *(Reasoned Inference, Medium)*
3. **ROCm 6 + ecosystem investment.** Software platform, acquisitions (Nod.AI, Mipsology), partnerships (Lamini, MosaicML) [facts 21–24]. Open/portable nature can also weaken lock-in [fact 36]. *(Reasoned Inference, Low)*

**Counter-evidence recorded.** Performance leadership claims are AMD’s own tests [facts 17, 22, 26]; ROCm portability across vendors [fact 36]; Nvidia remains the named comparison competitor [facts 17, 26]; HBM/foundry economics unstated; Meta showcase without deployment detail [fact 5]. These keep confidence at Medium and magnitude at Unknown. *(Reasoned Inference, Medium)*

**Magnitude of capture: Unknown.** *(Unknown, Low)*

### Tier 2 — Direct Beneficiary

**Vacant at company-name resolution.** Cloud and OEM partners gain first-order ability to sell MI300-based systems/instances [facts 6, 8–12], but their retention of accelerator surplus versus AMD is undisclosed and their positions are substitutable. Assigning Tier 2 without economics would overstate capture; they appear under Tier 3/4. *(Reasoned Inference, Medium)*

### Tier 3 — Indirect Beneficiary

- **Microsoft** *(Hypothesis, Low)* Azure ND MI300x v5 VMs powered by MI300X [fact 6]; capture is cloud-instance margin, not established.
- **Oracle** *(Hypothesis, Low)* Plans MI300X bare metal and OCI Supercluster support [fact 8].
- **Dell Technologies / Hewlett Packard Enterprise / Lenovo / Supermicro** *(Hypothesis, Low)* Server/blade design-ins [facts 9–12].

### Tier 4 — Potential Beneficiary

- **Meta** *(Unknown, Low)* Named only in showcase subtitle [fact 5].
- **Lamini / MosaicML** *(Hypothesis, Low)* Ecosystem partners [fact 24].
- **Hugging Face** *(Unknown, Low)* Named as framework ecosystem [fact 23].
- **End customers / LLNL El Capitan operators** *(Hypothesis, Low)* May retain surplus via performance/TCO [facts 7, 17, 35].
- **Unnamed HBM3 suppliers** *(Unknown, Low)* Memory stacks required [facts 15, 33]; corporate identity not stated.

**Negatively affected (no tier).** **Nvidia** — AMD claims Instinct Platform throughput advantage versus H100 HGX and single-GPU 70B inference differentiation [fact 17]. Whether Nvidia loses share is **Unknown**. *(Hypothesis, Low)*

**Alternative explanations.** That HBM suppliers capture most hardware surplus — possible *(Hypothesis, Low)*. That Nvidia retains AI-accelerator category economics despite AMD’s claims — possible *(Hypothesis, Low)*. That open ROCm prevents durable AMD capture — possible [fact 36] *(Hypothesis, Low)*. That announced design-ins fail to ship at scale — possible for forward-dated OEM items [facts 10, 11] *(Unknown, Low)*.

---

## 8. Listed Companies

Publicly listed participants named in the T0 sources. **Not ranked; not a recommendation; no valuation.**

**Inclusion rule.** Enter only if the T0 source names the entity and establishes it as the publicly listed company (ticker/exchange or equivalent).

| Company | Role | Why | Evidence | Confidence |
| --- | --- | --- | --- | --- |
| Advanced Micro Devices, Inc. (NASDAQ: AMD) | Accelerator designer / seller (Tier 1) | Announces MI300 Series availability, ROCm 6, and design-ins; identified as NASDAQ: AMD | [A] facts 1, 28 | Medium |

**Named in the sources but excluded from this table** (listing not established by ticker/exchange in the T0 texts):

- **Nvidia** [facts 17, 26] — comparison competitor; omitted on listing rule.
- **Microsoft** [facts 5, 6] — Azure MI300X VMs; omitted.
- **Oracle** [facts 5, 8] — planned OCI instances; omitted.
- **Meta** [fact 5] — showcase subtitle only; omitted.
- **Dell Technologies, Hewlett Packard Enterprise, Lenovo, Supermicro** [facts 5, 9–12] — OEM paths; omitted.
- **Intel** [fact 27] — appears in footnote host-CPU configurations; omitted.
- **Lamini, MosaicML, Nod.AI, Mipsology, Hugging Face** [facts 23, 24] — software ecosystem / acquisitions; omitted.
- **Lawrence Livermore National Laboratory** [fact 7] — hosting institution for El Capitan; not a commercial issuer in this table.

**Displaced participants.** Prior AMD MI250X functions are marked `↓` in §5. Nvidia is the named external comparison; displacement of Nvidia’s economics is **Unknown**. *(Hypothesis / Unknown)*

---

## 9. Risks

### Assumptions that could fail

1. **Announced availability converts to sustained large-scale deployments** — supports §§4–7. Peng states large-scale deployments “will” occur; OEM dates extend into 2024 [facts 4, 10, 11]. *(Unknown at T0)*
2. **AMD’s performance and TCO claims versus MI250X and Nvidia H100 hold in customer production** — supports migration and Tier 1 [facts 13, 17, 18, 22]. Tests are AMD’s. *(Hypothesis)*
3. **ROCm 6 becomes a sufficient software path without ceding surplus to portable/open alternatives** — supports mechanism 3; portability across vendors is stated [facts 22, 36]. *(Hypothesis)*
4. **HBM3 and 5nm/6nm supply remain available on terms that leave surplus with AMD** — supports silicon capture [facts 15, 25]. Supplier identity/economics Unknown. *(Unknown)*
5. **Customer design-ins (Azure, OCI, OEMs, El Capitan) ship and stay on AMD** — supports mechanism 2 [facts 6–12, 7]. *(Hypothesis)*
6. **No rival establishes a stronger exclusive software/hardware lock that empties AMD’s Tier 1** — supports Tier 1 assignment. *(Hypothesis)*

### What would weaken the thesis

- Design-ins delayed or cancelled (OEM 2024 windows missed; OCI plans not realized).
- Independent benchmarks failing to reproduce AMD’s H100 / Llama2 claims.
- ROCm adoption remaining thin relative to competing software stacks.
- HBM or foundry costs consuming hardware gross margin.
- Nvidia matching or exceeding 192 GB-class memory configurations and neutralizing AMD’s stated differentiation.

### What would invalidate the thesis

- **AMD withdrawing or failing to supply MI300 Series at scale**, so the migration destination does not exist.
- **Economic profit from AI/HPC accelerators accruing primarily to unnamed HBM or foundry layers**, such that AMD does not retain Tier 1 surplus.
- **Operators remaining on prior-gen or rival stacks as the default**, reversing the migration in §6.
- **Open/portable software making MI300 a fully interchangeable commodity GPU**, removing retention mechanisms 2–3.

Weakening and invalidating conditions are kept separate deliberately: the first set reduces the size of the conclusion; the last set replaces it.

---

## 10. Monitoring Signals

Each signal names the P0 source class where it would become visible, a horizon measured from T0, and what its absence by that point would imply.

| # | Signal | Source class | Horizon | Absence implies |
| ---: | --- | --- | --- | --- |
| 1 | Cloud GA confirmation of Azure ND MI300x v5 and OCI MI300X instances | Microsoft / Oracle / AMD official announcements | 1–4 quarters | Assumption 5 partially unresolved |
| 2 | OEM shipment of Dell XE9680, HPE EX255a, Lenovo, Supermicro MI300 systems | OEM and AMD official announcements | 1–4 quarters (through 1H 2024 windows) | Assumptions 1 / 5 unresolved |
| 3 | El Capitan deployment milestones and performance claims | LLNL / AMD / DOE official announcements | 2–12 quarters | Fact 7 expectation unverified |
| 4 | AMD disclosure of Instinct/MI300 revenue, units, or ASP | AMD filings / earnings materials | 1–8 quarters | Magnitude of capture stays Unknown |
| 5 | Third-party benchmarks of MI300 vs H100/H200-class systems | Independent labs; customer technical posts | 1–8 quarters | Assumption 2 unresolved |
| 6 | ROCm 6 adoption metrics, framework support updates, or partner case studies | AMD and partner official blogs/docs | 2–8 quarters | Assumption 3 unresolved |
| 7 | Competing accelerator launches matching ≥192 GB HBM-class capacity | Competitor official announcements | 2–12 quarters | Differentiation / Assumption 6 untested |
| 8 | HBM supply agreements or memory-cost commentary affecting accelerators | AMD filings; memory-vendor official statements | 2–12 quarters | Assumption 4 unresolved |
| 9 | Progress disclosures on AMD 30x25 energy-efficiency goal | AMD official ESG / product posts | 4–8 quarters (through 2025) | Fact 20 goal path unverified |
| 10 | Any ticker/listing disclosure for other named participants if used in later §8 | Official offering documents / exchange notices | Any time | Non-AMD §8 rows remain excluded on listing rule |
| 11 | Meta (or other “showcase” names) publishing concrete MI300 deployments | Company official announcements | 2–8 quarters | Fact 5 remains showcase-only |
| 12 | Evidence of multi-year cloud/OEM commitments or switching costs to Instinct/ROCm | AMD and customer official terms/case studies | 4–12 quarters | Retention durability untested |

### Closure paths for every open item

Per `RESEARCH_REPORT_STANDARD.md` §10 and `VALUE_CAPTURE_METHODOLOGY.md` §7, every `Hypothesis` and `Unknown` recorded in §§5–8 has a closure path above.

| Open item | Recorded in | Closes via |
| --- | --- | --- |
| Process-node layer (**Unknown**) | §5 | Signal 8 |
| HBM scarcity / supplier surplus (**Unknown**) | §5, §7 Tier 4 | Signal 8 |
| Nvidia-class platform direction (**Hypothesis**) | §5, §7 negative path | Signals 5, 7 |
| Supercomputing surplus (**Hypothesis**) | §5, §7 Tier 4 | Signal 3 |
| Framework layer direction (**Unknown**) | §5 | Signal 6 |
| Magnitude of capture (**Unknown**) | §1, §7 Step 4 | Signal 4 |
| Deployment scale (**Unknown**) | §4, §9 assumption 1 | Signals 1, 2, 3 |
| Performance-claim validity (**Hypothesis**) | §9 assumption 2 | Signal 5 |
| ROCm retention vs portability (**Hypothesis**) | §9 assumption 3 | Signals 6, 12 |
| Supply-chain surplus split (**Unknown**) | §9 assumption 4 | Signal 8 |
| Design-in conversion (**Hypothesis**) | §9 assumption 5 | Signals 1, 2, 11 |
| Tier 1 durability vs rivals (**Hypothesis**) | §9 assumption 6 | Signals 7, 12 |
| Cloud/OEM Tier 3 paths (**Hypothesis**) | §7 Tier 3 | Signals 1, 2 |
| Meta / Lamini / MosaicML / Hugging Face (**Unknown** / **Hypothesis**) | §7 Tier 4 | Signals 6, 11 |
| Listing status for non-AMD names (**Unknown**) | §8 | Signal 10 |
| Customer-problem magnitude (**Unknown**) | §3 | Signals 4, 5 |

No open item lacks a closure path. No signal requires non-public information. No signal is expressed as a trading trigger, entry condition, or action.

---

*Report produced under `RESEARCH_REPORT_STANDARD.md` v1.1 (repository version; sprint attribution and confidence rules applied) and `MISSION.md`. Two P0 AMD sources, T0-locked to 2023-12-06. Contains no investment recommendation, no valuation or securities-price information, and no timing signal beyond dates AMD itself states. Performance and “leadership” language appear only as facts attributed to AMD. All Unknown items remain Unknown.*
