# SRE-101 — NVIDIA Blackwell

| Field | Value |
| --- | --- |
| Subject | NVIDIA Blackwell platform |
| T0 (frozen date) | 2024-03-18 |
| Industry domain | AI Computing |
| T0 source | NVIDIA, official press release, 2024-03-18 — "NVIDIA Blackwell Platform Arrives to Power a New Era of Computing" (`nvidianews.nvidia.com`) |
| Standards applied | `SRE_PRODUCT_SPEC.md` v1.0, `RESEARCH_REPORT_STANDARD.md` v1.1, `VALUE_CAPTURE_METHODOLOGY.md` v1.0, `SRE_GLOSSARY.md` v1.0 |
| Revision | Regenerated under `RESEARCH_REPORT_STANDARD.md` v1.1 (SRE-103). Adds mandatory §5 Value Chain Analysis; former §§5–9 renumbered to §§6–10. Conclusions unchanged from the v1.0 issue. |

Single-source report. All content derives from the one P0 document above, cited throughout as **[NVIDIA, press release, 2024-03-18]**. Nothing published after T0 is used.

Evidence labels used: Evidence-supported, Reasoned Inference, Hypothesis, Unknown (`SRE_GLOSSARY.md` v1.0). Confidence levels: High, Medium, Low (`VALUE_CAPTURE_METHODOLOGY.md` §6).

---

## 1. Executive Summary

NVIDIA announced the Blackwell platform as a rack-scale system rather than as a chip. The single document at T0 describes a 208-billion-transistor dual-die GPU, a fifth-generation NVLink fabric carrying 1.8TB/s per GPU across as many as 576 GPUs, a 72-GPU liquid-cooled rack that the vendor states "acts as a single GPU," and — announced the same day — the InfiniBand and Ethernet platforms and DPUs that connect it, plus the software stack that runs it [NVIDIA, press release, 2024-03-18]. The economic claim attached to this bundle is a vendor-stated reduction of up to 25x in LLM inference cost and energy versus the predecessor generation, and up to 30x inference performance against the same number of H100 GPUs [NVIDIA, press release, 2024-03-18]. If the binding constraint on trillion-parameter inference is making many accelerators behave as one rather than making any single accelerator faster, then the unit of competition has moved from the chip to the coherent rack, and the layers that were previously purchased separately — interconnect, networking, data processing units, systems software — are absorbed into one vendor-controlled platform. *(Reasoned Inference, Medium)*

**Key conclusion.** Value migrates from board-level and component-level accelerated compute toward the vendor that owns the rack-scale coherence fabric and the software that addresses it, with NVIDIA structurally positioned to retain a disproportionate share because the 576-GPU domain is reachable only through its proprietary NVLink and its own frameworks. *(Reasoned Inference, Medium)*

The finding the T0 document does not settle, and which the analysis therefore leaves open: the source states the magnitude of value created (up to 25x lower inference cost and energy) but discloses no pricing for any Blackwell product, so how that surplus divides between the platform vendor and the buyers named as adopters is **Unknown**. A 25x reduction in cost per unit of work is, on its face, value delivered to the buyer; whether the vendor recaptures it through platform pricing cannot be determined from this source. *(Unknown)*

**Top companies for further research — not recommendations, not ranked by attractiveness.** This list identifies where the reasoning in §§6–7 lands. It contains no view on price, valuation, or timing.

- **NVIDIA** — owns the bottleneck-controlling capability under `VALUE_CAPTURE_METHODOLOGY.md` §4 Steps 1–2. *(Reasoned Inference, Medium)*
- **TSMC** — named in the source as the manufacturer of the custom 4NP process on which the dual-die GPU is built. *(Reasoned Inference, Medium)*
- **Dell Technologies** — the only server maker named with a direct statement about delivering Blackwell-based products. *(Reasoned Inference, Low)*
- **Microsoft, Amazon, Alphabet, Oracle** — named as the first cloud providers to offer Blackwell instances; whether deployment translates into retained value is not addressed by the source. *(Hypothesis, Low)*

Market blind spot: public attention at T0 attaches to the GPU and its transistor count, while the same announcement quietly moves networking, DPUs, and rack architecture inside the platform boundary — the part of the bundle that determines whether the 576-GPU domain is addressable at all. *(Reasoned Inference, Medium)*

---

## 2. Evidence

Verified facts only. Each is stated in the T0 source without interpretation. Vendor performance and cost claims are recorded as claims made by the vendor, which is what the source establishes.

1. NVIDIA announced that the Blackwell platform "has arrived" on March 18, 2024, at GTC. [NVIDIA, press release, 2024-03-18]
2. NVIDIA stated the platform enables organizations to build and run real-time generative AI on trillion-parameter large language models at up to 25x less cost and energy consumption than its predecessor. [NVIDIA, press release, 2024-03-18]
3. Blackwell-architecture GPUs contain 208 billion transistors. [NVIDIA, press release, 2024-03-18]
4. Blackwell GPUs are manufactured using a custom-built 4NP TSMC process. [NVIDIA, press release, 2024-03-18]
5. The GPU comprises two reticle-limit dies connected by a 10TB/s chip-to-chip link into a single, unified GPU. [NVIDIA, press release, 2024-03-18]
6. The architecture comprises six stated technologies: the GPU itself, a second-generation Transformer Engine, fifth-generation NVLink, a RAS engine, Secure AI confidential computing, and a decompression engine. [NVIDIA, press release, 2024-03-18]
7. NVIDIA stated the six technologies together enable AI training and real-time LLM inference for models scaling up to 10 trillion parameters. [NVIDIA, press release, 2024-03-18]
8. The second-generation Transformer Engine adds micro-tensor scaling and 4-bit floating point inference, which NVIDIA stated will support double the compute and model sizes. [NVIDIA, press release, 2024-03-18]
9. Fifth-generation NVLink delivers 1.8TB/s bidirectional throughput per GPU and supports communication among up to 576 GPUs. [NVIDIA, press release, 2024-03-18]
10. The GB200 Grace Blackwell Superchip connects two B200 Tensor Core GPUs to a Grace CPU over a 900GB/s NVLink chip-to-chip interconnect. [NVIDIA, press release, 2024-03-18]
11. The GB200 NVL72 is a multi-node, liquid-cooled, rack-scale system combining 36 Grace Blackwell Superchips — 72 Blackwell GPUs and 36 Grace CPUs — interconnected by fifth-generation NVLink. [NVIDIA, press release, 2024-03-18]
12. GB200 NVL72 includes NVIDIA BlueField-3 data processing units for cloud network acceleration, composable storage, zero-trust security, and GPU compute elasticity. [NVIDIA, press release, 2024-03-18]
13. NVIDIA stated GB200 NVL72 provides up to a 30x performance increase compared to the same number of H100 Tensor Core GPUs for LLM inference workloads, and reduces cost and energy consumption by up to 25x. [NVIDIA, press release, 2024-03-18]
14. NVIDIA stated the platform acts as a single GPU with 1.4 exaflops of AI performance and 30TB of fast memory, and is a building block for the newest DGX SuperPOD. [NVIDIA, press release, 2024-03-18]
15. NVIDIA announced the Quantum-X800 InfiniBand and Spectrum-X800 Ethernet platforms on the same day, delivering networking at speeds up to 800Gb/s, for connecting GB200-powered systems. [NVIDIA, press release, 2024-03-18]
16. NVIDIA also offers the HGX B200, a server board linking eight B200 GPUs through NVLink to support x86-based platforms, with networking up to 400Gb/s via Quantum-2 InfiniBand and Spectrum-X Ethernet. [NVIDIA, press release, 2024-03-18]
17. Blackwell-based products will be available from partners "starting later this year." [NVIDIA, press release, 2024-03-18]
18. AWS, Google Cloud, Microsoft Azure, and Oracle Cloud Infrastructure will be among the first cloud service providers to offer Blackwell-powered instances, as will NVIDIA Cloud Partner companies Applied Digital, CoreWeave, Crusoe, IBM Cloud, Lambda, and Nebius. [NVIDIA, press release, 2024-03-18]
19. Sovereign AI clouds named as providing Blackwell-based services include Indosat Ooredoo Hutchinson, Nexgen Cloud, Oracle EU Sovereign Cloud, Oracle US, UK and Australian Government Clouds, Scaleway, Singtel, Northern Data Group's Taiga Cloud, Yotta Data Services' Shakti Cloud, and YTL Power International. [NVIDIA, press release, 2024-03-18]
20. Organizations named as expected to adopt Blackwell are Amazon Web Services, Dell Technologies, Google, Meta, Microsoft, OpenAI, Oracle, Tesla, and xAI. [NVIDIA, press release, 2024-03-18]
21. Ansys, Cadence, and Synopsys are named as software makers that will use Blackwell-based processors to accelerate their engineering simulation software. [NVIDIA, press release, 2024-03-18]
22. The Blackwell portfolio is supported by NVIDIA AI Enterprise, including NVIDIA NIM inference microservices announced the same day, alongside frameworks, libraries, and tools. [NVIDIA, press release, 2024-03-18]
23. The Blackwell architecture succeeds the NVIDIA Hopper architecture, which the source states launched two years earlier. [NVIDIA, press release, 2024-03-18]
24. NVIDIA stated the RAS engine enables massive-scale AI deployments to run uninterrupted for weeks or even months and reduces operating costs. [NVIDIA, press release, 2024-03-18]
25. NVIDIA stated that data processing, on which companies spend tens of billions of dollars annually, will be increasingly GPU-accelerated in coming years. [NVIDIA, press release, 2024-03-18]
26. The source's forward-looking-statements section identifies risks including NVIDIA's reliance on third parties to manufacture, assemble, package and test its products; the impact of technological development and competition; market acceptance of its products or partners' products; and design, manufacturing or software defects. [NVIDIA, press release, 2024-03-18]
27. Jensen Huang, founder and CEO, is quoted describing Blackwell as "the engine to power this new industrial revolution." [NVIDIA, press release, 2024-03-18]
28. Elon Musk, CEO of Tesla and xAI, is quoted: "There is currently nothing better than NVIDIA hardware for AI." [NVIDIA, press release, 2024-03-18]
29. Michael Dell, founder and CEO of Dell Technologies, is quoted stating that with the launch of Blackwell, Dell will continue to deliver the next generation of accelerated products and services to its customers. [NVIDIA, press release, 2024-03-18]
30. Satya Nadella, CEO of Microsoft, is quoted stating that Microsoft is bringing the GB200 Grace Blackwell processor to its datacenters globally. [NVIDIA, press release, 2024-03-18]

**Not stated in the T0 source, and therefore Unknown:** the price of any Blackwell product; the type or supplier of the 30TB of fast memory; the identity of the advanced-packaging or assembly providers for the dual-die GPU; the identity of liquid-cooling suppliers; unit volumes, capacity, or delivery schedule beyond "later this year"; any named competing product or competitor; the workload definition or measurement methodology behind the 25x and 30x claims; and the split of realized economics between NVIDIA and any partner. *(Unknown)*

---

## 3. Customer Problem

**What end-user problem changed.** Buyers wanting to serve generative AI from trillion-parameter models in real time faced a problem that is not primarily about single-chip speed: a model of that size does not fit or run on one accelerator, so serving it requires many accelerators to act as one, continuously, at acceptable cost and power. The source addresses exactly this pairing — trillion-parameter scale on one side, cost and energy on the other — by presenting a 72-GPU rack that "acts as a single GPU," and by expressing its central claim as cost and energy per unit of inference rather than as raw throughput [facts 2, 11, 13, 14]. *(Evidence-supported)*

Two components of the buyer's problem are visible in the source as distinct:

- **Serving cost and energy at scale.** The vendor's headline framing is operating cost and energy for LLM inference, not training records, and the RAS engine is justified in terms of uptime over weeks to months and reduced operating cost [facts 2, 13, 24]. This locates the buyer's pain in continuous production serving rather than in one-off model building. *(Evidence-supported)*
- **Aggregation, not acceleration.** The stated innovations that carry the largest numbers are interconnect-related — 10TB/s die-to-die, 900GB/s CPU-to-GPU, 1.8TB/s per-GPU NVLink across up to 576 GPUs [facts 5, 9, 10]. The problem being solved is the cost of moving data between processors that must cooperate on one model. *(Reasoned Inference)*

**Who is worse off without it:** organizations that intend to serve very large models to end users continuously — the source names cloud providers and AI developers in this position [facts 18, 20]. *(Evidence-supported)*

The source does not disclose what these buyers previously spent, what inference cost they were unable to bear, or what workloads they had to forgo. The magnitude of the customer problem in absolute economic terms is therefore **Unknown**.

---

## 4. Industry Change

**The concrete change.** The purchasable unit of AI computing is presented as a rack-scale, liquid-cooled, coherently interconnected system, with the interconnect fabric, data processing units, networking platforms, and production software stack announced as parts of the same platform [facts 11, 12, 15, 22]. *(Evidence-supported)*

**Which system requirement shifts.** Three requirements move together in the source:

1. **From board-level to rack-level coherence.** A 72-GPU domain interconnected by fifth-generation NVLink, described as acting as one GPU, sets the design point at rack scale, and the fabric extends to 576 GPUs [facts 9, 11, 14]. *(Evidence-supported)*
2. **From air-cooled to liquid-cooled facilities.** The flagship configuration is stated to be liquid-cooled [fact 11], which changes a facility requirement rather than a component specification. *(Evidence-supported)*
3. **From separately sourced adjacent layers to a bundled platform.** Networking at up to 800Gb/s and BlueField-3 DPUs arrive as parts of the same announcement and the same rack [facts 12, 15]. *(Evidence-supported)*

**Why the prior solution becomes insufficient.** Two of the constraints named in the source are physical rather than commercial. The GPU is built from two *reticle-limit* dies joined by a 10TB/s link [fact 5]: the reticle limit is a manufacturing boundary, and the disclosed response to it is to stop treating one die as the unit and to stitch dies together. The same logic is then applied one level up, stitching 72 GPUs into one coherent domain [facts 11, 14]. Read together, the disclosed architecture indicates that scaling by making a single monolithic processor larger had reached a boundary, and that the remaining path to trillion-parameter real-time inference runs through aggregation. *(Reasoned Inference)*

**Structural or cyclical.** Structural. The change alters what participants must do — buyers must accept liquid cooling and rack-scale procurement, and must adopt a proprietary interconnect to reach the largest coherent domain — rather than altering volumes at constant requirements [facts 9, 11]. *(Reasoned Inference)*

The source presents Blackwell as succeeding Hopper two years on [fact 23]. Whether the two-year architectural cadence is itself the structural change, or whether this generation is discontinuous in kind rather than degree, is not resolvable from a single announcement. *(Unknown)*

---

## 5. Value Chain Analysis

**Purpose.** Map how value flows through the value chain after the change described in §4. This section is a map, not a conclusion: it identifies no winner and names no capturer. Layer existence and role are drawn from §2 facts; scarcity, bottleneck, and direction of value change are reasoning, labeled per row.

Granularity is one functional layer per row, ordered from manufacture through end demand.

| Layer | Role | Scarcity | Bottleneck | Expected Value Change | Evidence Label |
| --- | --- | --- | --- | --- | --- |
| Leading-edge wafer manufacturing | Fabricates the GPU dies on a custom 4NP process [fact 4] | Yes | Unknown | ↑ | Reasoned Inference |
| Advanced packaging, assembly and test | Joins two reticle-limit dies via a 10TB/s link into one unified GPU [fact 5]; the source states reliance on third parties to manufacture, assemble, package and test [fact 26] | Unknown | Unknown | ↑ | Reasoned Inference |
| High-bandwidth memory supply | Provides the 30TB of fast memory in the rack-scale configuration [fact 14] | Unknown | Unknown | ↑ | Hypothesis |
| Accelerator silicon design | Designs the 208-billion-transistor GPU, second-generation Transformer Engine, RAS, Secure AI, and decompression engines [facts 3, 6, 8] | Yes | No | ↑ | Reasoned Inference |
| Interconnect fabric | Provides die-to-die (10TB/s), CPU–GPU (900GB/s), and GPU–GPU (1.8TB/s, up to 576 GPUs) coherence [facts 5, 9, 10] | Yes | Yes | ↑ | Reasoned Inference |
| Host CPU | Supplies host compute coupled to GPUs — 36 CPUs to 72 GPUs in the rack configuration [facts 10, 11] | Unknown | No | Unknown | Reasoned Inference |
| Infrastructure offload (DPU) | Provides network acceleration, composable storage, zero-trust security, and compute elasticity within the rack [fact 12] | Unknown | No | ↑ | Reasoned Inference |
| Cluster networking | Connects systems at up to 800Gb/s via the newly announced InfiniBand and Ethernet platforms, against 400Gb/s for the board-level product [facts 15, 16] | Unknown | Unknown | ↑ | Reasoned Inference |
| Thermal management | Removes heat from the flagship configuration, which is stated to be liquid-cooled [fact 11] | Unknown | Unknown | ↑ | Reasoned Inference |
| Facility power and energy supply | Supplies the power envelope; the source frames the platform's advantage partly as reduced energy consumption per unit of work [facts 2, 13] | Unknown | Unknown | Unknown | Unknown |
| Rack-scale system integration | Assembles 36 Superchips into a multi-node liquid-cooled rack that acts as a single GPU with 1.4 exaflops and 30TB fast memory [facts 11, 14] | Yes | Unknown | ↑ | Reasoned Inference |
| Board-level server integration | Builds eight-GPU x86 server boards (HGX B200) with a prior networking generation [fact 16] | No | No | Unknown | Reasoned Inference |
| Platform and inference software | Supplies the frameworks and production stack that address the platform — TensorRT-LLM, NeMo Megatron, AI Enterprise, NIM [facts 8, 22] | Yes | Unknown | ↑ | Reasoned Inference |
| Cloud capacity provision | Operates Blackwell-powered instances and sells access to them [facts 18, 19, 30] | Unknown | Unknown | Unknown | Unknown |
| Application software | Uses Blackwell-based processors to accelerate engineering simulation and related software [fact 21] | No | No | ↑ | Hypothesis |
| AI model development and serving | Consumes the platform to train and serve models, constituting end demand [facts 7, 20] | Unknown | No | Unknown | Unknown |

**Layers with no participant named in the T0 source.** Advanced packaging, assembly and test; high-bandwidth memory supply; thermal management; and facility power and energy supply are each established as necessary by the disclosed design [facts 5, 11, 14, 26], but the source names no company in any of them. Per `RESEARCH_REPORT_STANDARD.md` §5, these layers are recorded and left unattributed; no participant is supplied by inference.

**Reading notes, held separate from the table.**

- Exactly one layer is marked `Bottleneck: Yes` — the interconnect fabric — and that assessment is `Reasoned Inference`, not `Evidence-supported`. No P0 statement identifies a bottleneck; the assessment rests on the concentration of disclosed engineering in interconnect at three levels [facts 5, 9, 10] and on the rack being described as acting as one GPU [fact 14].
- Three layers marked `Bottleneck: Unknown` are the live alternatives to that assessment: advanced packaging, high-bandwidth memory, and thermal management. The source names neither supplier nor capacity for any of them, so none can be excluded as the true constraint from this document.
- `Accelerator silicon design` is marked `Bottleneck: No` because the disclosed architecture works around the single-die reticle boundary by joining two dies rather than treating one die as the limit [fact 5]. This is an inference about the architecture as disclosed, not a claim that silicon design is unimportant.
- Four layers carry `Expected Value Change: Unknown`. Host CPU and facility energy have no disclosed baseline for comparison. Board-level server integration is `Unknown` because the direction depends on how demand splits between the rack and board products, which the source does not disclose. Cloud capacity provision and AI model development are `Unknown` because the source discloses no pricing, leaving the direction of value change at those layers undetermined.

No winner is identified in this section. Which participants capture value from the layers marked `↑` is addressed in §§7–8.

---

## 6. Value Migration

**Purpose.** State where value moves, and why it must. Origins and destinations use the layers established in §5.

**Where value moves — origin and destination both named.**

| From (origin layer) | To (destination layer) | Basis |
| --- | --- | --- |
| Board-level server integration, where the differentiated purchase is a GPU or an eight-GPU server board | Rack-scale system integration, where the differentiated purchase is a 72-GPU liquid-cooled domain addressed as one accelerator | Facts 11, 14, 16 |
| Separately procured cluster networking and infrastructure offload | The platform vendor's own interconnect fabric, cluster networking, and DPU layers, announced as part of the same platform | Facts 12, 15 |
| Air-cooled data center design and the equipment assuming it | Thermal management for liquid-cooled, high-density racks | Fact 11 |
| The prior-generation installed base used as the performance and cost baseline | The new platform generation, against which the prior generation is positioned as 30x slower and 25x more costly per unit of inference work by the vendor | Facts 13, 23 |

**Why the migration follows.** Step by step, so any single link can be attacked:

1. The binding constraint on trillion-parameter real-time inference is the cost of making many accelerators cooperate on one model, not single-accelerator throughput — evidenced by the concentration of disclosed engineering in interconnect bandwidth at three levels and by the framing of the flagship product as a rack that acts as one GPU [facts 5, 9, 10, 11, 14]. This is the layer marked `Bottleneck: Yes` in §5. *(Reasoned Inference)*
2. If that constraint binds, the capability that becomes scarce is the ability to deliver a coherent multi-GPU domain — interconnect, CPU-GPU coupling, offload, power and thermal design, and the software that addresses the domain as a unit. *(Reasoned Inference)*
3. The T0 source shows all of those layers supplied by one vendor and announced together: NVLink, Grace CPU coupling, BlueField-3 DPUs, Quantum-X800 and Spectrum-X800 networking, AI Enterprise and NIM [facts 9, 10, 12, 15, 22]. *(Evidence-supported)*
4. Where a layer that was previously bought separately is absorbed into a bundle that is required to reach the new design point, bargaining power at that layer moves toward the bundle owner. *(Reasoned Inference)*
5. Therefore value reallocates from component and board-level layers, and from independently sourced adjacent layers, toward the owner of the rack-scale platform boundary. *(Reasoned Inference)*

**One link is explicitly not established.** Step 4 assumes buyers must take the rack-scale configuration to obtain the benefit. The same source offers HGX B200 — eight B200 GPUs on an x86 server board with 400Gb/s networking [fact 16] — which is a board-level path that does not require the 72-GPU rack or the 800Gb/s networking generation. The source does not disclose how demand splits between these two paths, and the vendor's headline 30x and 25x claims are attached to the NVL72 rack configuration [fact 13]. Whether buyers adopt the rack-scale unit or the board-level unit is **Unknown** at T0, and the migration thesis depends on it. This is why board-level server integration carries `Expected Value Change: Unknown` in §5 rather than `↓`.

**Confidence on the migration as a whole: Medium.** *(Reasoned Inference)* The direction is well supported by the structure of the announcement; the magnitude is not established, one load-bearing link is open, and competing readings remain available — that the true bottleneck is advanced packaging, memory, or thermal capacity rather than interconnect. Those three layers are marked `Bottleneck: Unknown` in §5 precisely because the source names 30TB of fast memory without naming its type or supplier, and describes reticle-limit dual-die construction without naming a packaging provider [facts 5, 14]. Under `VALUE_CAPTURE_METHODOLOGY.md` §6, alternatives that cannot be distinguished on available evidence cap confidence below High.

**Statement of standing.** Potential value reallocation. Requires later market verification.

---

## 7. Value Capture

Per `VALUE_CAPTURE_METHODOLOGY.md`: value creation is not value capture, revenue growth is not value capture, and technology leadership is not value capture. The 25x cost and energy reduction is a *creation* claim [fact 13]; the question here is who retains it.

### Direct beneficiaries

**NVIDIA — Tier 1, Direct Value Capturer.** *(Reasoned Inference, Medium)*

Retention mechanism, which the methodology requires to be named: the coherent domain that constitutes the new design point is reachable only through the vendor's own proprietary interconnect. Fifth-generation NVLink at 1.8TB/s per GPU spanning up to 576 GPUs is an NVIDIA interface, and the addressing of that domain runs through NVIDIA's own frameworks and production software — TensorRT-LLM, NeMo Megatron, AI Enterprise, NIM [facts 8, 9, 22]. The adjacent layers that a buyer would otherwise source competitively — cluster networking, DPUs — are supplied by the same vendor for the same rack [facts 12, 15]. Scarcity source under `VALUE_CAPTURE_METHODOLOGY.md` §4 Step 2: proprietary interconnect plus software co-dependency, compounded by dual-die construction on a custom process at the reticle limit [facts 4, 5]. In §5 terms, this participant supplies the one layer marked `Bottleneck: Yes` and three further layers marked `Scarcity: Yes`.

Supporting evidence: facts 4, 5, 8, 9, 11, 12, 14, 15, 22. Durability is not disclosed: the source names no competitor and no replication path, so how long the mechanism holds is **Unknown**. This caps confidence at Medium and is why the tier rests on Reasoned Inference rather than Evidence-supported — no P0 statement asserts that NVIDIA captures disproportionate economic value.

**TSMC — Tier 2, Direct Beneficiary.** *(Reasoned Inference, Medium)*

The GPU at the center of the platform is manufactured on a custom-built 4NP TSMC process [fact 4], making TSMC a named, first-order participant in the leading-edge wafer manufacturing layer, which §5 marks `Scarcity: Yes`. Retention is partial and its mechanism is only inferable: leading-edge capacity for a custom process is scarce, but the source discloses nothing about pricing, contract terms, volumes, or the division of economics between the two parties. The source's own risk language notes NVIDIA's reliance on third parties to manufacture, assemble, package and test [fact 26], which establishes dependence without quantifying leverage. Whether TSMC retains a disproportionate share is **Unknown**.

### Indirect beneficiaries

**Dell Technologies — Tier 3, Indirect Beneficiary.** *(Reasoned Inference, Low)* Second-order path, stated in full: Dell is named among expected adopters, and its CEO states that with the Blackwell launch Dell will continue to deliver next-generation accelerated products and services [facts 20, 29]. This places Dell in the server integration layers of §5, where board-level integration carries `Expected Value Change: Unknown`. Retention mechanism: none identified in the source. Under `VALUE_CAPTURE_METHODOLOGY.md` §6, revenue exposure without a named retention mechanism is not capture, which is why this is Tier 3 rather than Tier 2.

**Ansys, Cadence, Synopsys — Tier 3, Indirect Beneficiary.** *(Reasoned Inference, Low)* Second-order path: each is named as using Blackwell-based processors to accelerate engineering simulation software, and the source states their customers can bring products to market faster and at lower cost [fact 21]. They occupy the application software layer, whose direction of value change §5 labels `Hypothesis`. They gain a capability input, not a claim on the reallocated surplus. Whether the resulting gain is retained or competed away is **Unknown**.

**Advanced packaging, memory, and thermal management layers — Tier 3, unattributed.** *(Hypothesis, Low)* The source establishes that the platform requires reticle-limit dual-die construction, 30TB of fast memory, and liquid cooling [facts 5, 11, 14], and §5 marks each of those layers `↑` or `Unknown` with no participant named. No company is entered against these paths in §8, and none is inferred. The layers are recorded and routed to §10 for closure.

### Potential beneficiaries

**Named cloud providers and AI developers — Tier 4, Potential Beneficiary.** *(Hypothesis, Low)* AWS, Google Cloud, Microsoft Azure, and Oracle Cloud Infrastructure are named as among the first to offer Blackwell instances; Meta, OpenAI, Tesla, and xAI are named as expected adopters [facts 18, 20, 30]. These participants occupy the cloud capacity provision and model development layers, both of which §5 marks `Expected Value Change: Unknown`. Two readings are available and the source separates neither: they capture value by monetizing scarce capacity, or they are the buyers to whom the 25x cost reduction accrues and which competition among them passes through to their own customers. Resolving condition, routed to §10: disclosure of whether Blackwell capacity is monetized at sustained premium pricing.

### The central open question

The magnitude of value created is stated (up to 25x lower cost and energy per unit of inference work) while no price for any Blackwell product is disclosed [facts 2, 13, and the Unknown list in §2]. The split of that surplus between the platform vendor and its buyers is therefore **Unknown** at T0. Every capture conclusion above is bounded by this: the direction of migration is Medium-confidence, the division of spoils is not established at any confidence level.

Consistent with the methodology, the possibility that surplus accrues mainly to buyers as lower cost per unit of work — or is competed away among cloud providers — remains open and is not excluded by this source.

---

## 8. Listed Companies

Publicly listed participants named in the T0 source. Roles carry the §5 layer and the tier assigned in §7. **This table is not ranked by attractiveness, contains no price or valuation information, and is not a recommendation.** Order follows the value chain from manufacture to deployment.

| Company | Role | Why | Evidence | Confidence |
| --- | --- | --- | --- | --- |
| TSMC | Leading-edge wafer manufacturing — Tier 2 Direct Beneficiary | Named as supplying the custom-built 4NP process for the 208-billion-transistor dual-die GPU, a layer marked `Scarcity: Yes` in §5 | Fact 4 [NVIDIA, press release, 2024-03-18]; economics of the relationship: Unknown | Medium |
| NVIDIA | Interconnect fabric, accelerator design, DPU, networking, platform software, rack integration — Tier 1 Direct Value Capturer | Supplies the one layer marked `Bottleneck: Yes` in §5 plus three layers marked `Scarcity: Yes`; the 576-GPU coherent domain is reachable only through its interconnect and frameworks | Facts 4, 5, 8, 9, 11, 12, 14, 15, 22 [NVIDIA, press release, 2024-03-18] | Medium |
| Dell Technologies | Server integration — Tier 3 Indirect Beneficiary | Named adopter; CEO states delivery of next-generation accelerated products with the Blackwell launch. No retention mechanism identified | Facts 20, 29 [NVIDIA, press release, 2024-03-18] | Low |
| Microsoft | Cloud capacity provision — Tier 4 Potential Beneficiary | Azure named among first CSPs to offer Blackwell instances; CEO states GB200 is being brought to its datacenters globally | Facts 18, 20, 30 [NVIDIA, press release, 2024-03-18] | Low |
| Amazon | Cloud capacity provision — Tier 4 Potential Beneficiary | AWS named among first CSPs; source describes co-development of Project Ceiba using Grace Blackwell Superchips with AWS Nitro and EFA networking | Facts 18, 20 [NVIDIA, press release, 2024-03-18] | Low |
| Alphabet | Cloud capacity provision — Tier 4 Potential Beneficiary | Google Cloud named among first CSPs; CEO states intent to bring Blackwell to Cloud customers and internal teams | Facts 18, 20 [NVIDIA, press release, 2024-03-18] | Low |
| Oracle | Cloud capacity provision — Tier 4 Potential Beneficiary | OCI named among first CSPs; also named for EU Sovereign and government clouds | Facts 18, 19, 20 [NVIDIA, press release, 2024-03-18] | Low |
| IBM | Cloud capacity provision — Tier 4 Potential Beneficiary | IBM Cloud named as an NVIDIA Cloud Partner offering Blackwell-powered instances | Fact 18 [NVIDIA, press release, 2024-03-18] | Low |
| Applied Digital | Cloud capacity provision — Tier 4 Potential Beneficiary | Named NVIDIA Cloud Partner offering Blackwell-powered instances | Fact 18 [NVIDIA, press release, 2024-03-18] | Low |
| Singtel | Cloud capacity provision (sovereign) — Tier 4 Potential Beneficiary | Named as providing Blackwell-based sovereign cloud services | Fact 19 [NVIDIA, press release, 2024-03-18] | Low |
| Meta Platforms | AI model development and serving — Tier 4 Potential Beneficiary | Named expected adopter; CEO states intent to use Blackwell to train open-source Llama models | Fact 20 [NVIDIA, press release, 2024-03-18] | Low |
| Tesla | AI model development and serving — Tier 4 Potential Beneficiary | Named expected adopter; CEO quoted on NVIDIA hardware for AI. No capture path disclosed | Facts 20, 28 [NVIDIA, press release, 2024-03-18] | Low |
| Synopsys | Application software — Tier 3 Indirect Beneficiary | Named as using Blackwell-based processors to accelerate engineering simulation software | Fact 21 [NVIDIA, press release, 2024-03-18] | Low |
| Cadence Design Systems | Application software — Tier 3 Indirect Beneficiary | Named as using Blackwell-based processors to accelerate engineering simulation software | Fact 21 [NVIDIA, press release, 2024-03-18] | Low |
| Ansys | Application software — Tier 3 Indirect Beneficiary | Named as using Blackwell-based processors to accelerate engineering simulation software | Fact 21 [NVIDIA, press release, 2024-03-18] | Low |

**Layers with no row in this table.** Advanced packaging, assembly and test; high-bandwidth memory supply; thermal management; and facility power and energy supply appear in §5 with no participant named, because the T0 source names none. No company is entered against them here, and none is inferred.

**Named in the source but excluded from this table,** to avoid entries with no distinguishable capture thesis: CoreWeave, Crusoe, Lambda, Nebius, Nexgen Cloud, Scaleway, Yotta Data Services, OpenAI, and xAI — not publicly listed at T0, or listing status not established by the T0 source. Northern Data Group, Indosat Ooredoo Hutchinson, and YTL Power International are named as sovereign-cloud participants [fact 19] and are omitted on the same basis as the thin-thesis rule, since the source states only that they will provide Blackwell-based services.

**Displaced participants.** The source positions the prior Hopper generation as the baseline against which the new platform is 30x faster and 25x cheaper per unit of inference work [facts 13, 23], and specifies liquid cooling for the flagship rack [fact 11], which displaces air-cooled design assumptions. The source names no competing vendor and no negatively affected company, so no displaced participant is named here. *(Unknown)*

---

## 9. Risks

### Assumptions that could fail

1. **The performance and cost claims are vendor claims about undefined workloads** — supports §§4–7. The 30x and 25x figures originate from the party selling the product, with no workload definition, measurement methodology, or independent verification in the source, and the source's own forward-looking-statements section explicitly subjects its performance and benefit claims to risks and uncertainties [facts 13, 26]. If realized improvement is materially smaller, the migration's magnitude shrinks even if its direction holds. *(Evidence-supported that these are vendor claims; the underlying magnitude is Unknown)*
2. **Interconnect, not packaging, memory, or thermal capacity, is the true bottleneck** — supports §5 and §6 Step 1. The competing readings are the three layers §5 marks `Bottleneck: Unknown`: advanced packaging capacity for reticle-limit dual-die parts, memory capacity and bandwidth, and heat removal at rack density. The source names 30TB of fast memory and dual-die construction without naming type, supplier, or packaging provider [facts 5, 14], so it cannot adjudicate. If this assumption fails, Tier 1 is mislocated and capture moves toward participants the source does not name. *(Reasoned Inference)*
3. **Buyers adopt the rack-scale unit rather than the board-level unit** — supports §6 Step 4 and §7. HGX B200 offers eight B200 GPUs on x86 server boards with a prior networking generation [fact 16]. If demand concentrates there, rack-scale integration is not the scarce capability and value stays closer to component and board level. *(Unknown at T0)*
4. **Proprietary interconnect remains proprietary and necessary** — supports the §7 retention mechanism. The mechanism depends on NVLink being the only route to the coherent domain. The source names no alternative and no standard, which is the absence of contrary evidence rather than evidence of durability. *(Unknown)*
5. **Announced adoption converts into deployment** — supports §8. The source states availability "starting later this year" and describes partners as "expected to adopt" [facts 17, 20]. Announced intent at T0 is not deployment, and the source's risk language names market acceptance and design, manufacturing, or software defects as factors [fact 26]. *(Evidence-supported as a disclosed risk)*

### What would weaken the thesis

- Realized inference cost improvement materially below the vendor's stated range, leaving direction intact but magnitude overstated.
- Buyers capturing most of the cost reduction through competitive pricing among the named cloud providers, so that surplus passes through the platform vendor to end users.
- Bottleneck relief arriving faster than expected through packaging, memory, or cooling capacity additions, reducing the scarcity of the coherence capability.
- Adoption splitting materially toward HGX B200 board-level configurations, diluting rack-scale differentiation without eliminating it.

### What would invalidate the thesis

- **A coherent multi-GPU domain of comparable scale becoming reachable without the vendor's proprietary interconnect** — through an open standard or a competing fabric. This removes the named retention mechanism and, with it, the Tier 1 designation.
- **Economic profit demonstrably accruing to a different layer** — for example, if the scarce input proves to be advanced packaging, memory, or thermal capacity and pricing power sits with participants in those layers, the bottleneck assessment in §5 was wrong.
- **The rack-scale unit failing to become the unit of purchase**, with trillion-parameter serving delivered predominantly at board level or by other means, which invalidates the migration described in §6 rather than merely reducing it.
- **The stated cost and energy advantage not materializing at production scale**, which would remove the value being reallocated and make the capture question moot.

Weakening and invalidating conditions are kept separate deliberately: the first four reduce the size of the conclusion, the last four replace it.

---

## 10. Monitoring Signals

Each signal names the P0 source class where it would become visible, a horizon measured from T0, and what its absence by that point would imply.

| # | Signal | Source class | Horizon | Absence implies |
| ---: | --- | --- | --- | --- |
| 1 | Blackwell products shipping from partners, versus continued forward-looking language | NVIDIA quarterly filings; partner press releases | By end of calendar 2024, per the stated "later this year" [fact 17] | Execution or manufacturing delay; assumption 5 weakening |
| 2 | Whether named cloud providers disclose GB200 NVL72 rack-scale deployments specifically, or HGX B200 board-level deployments | CSP investor presentations; official product documentation | 2–4 quarters | Assumption 3 failing; migration stays at board level |
| 3 | Disclosure of sustained pricing or margin at the platform layer, versus pass-through | NVIDIA quarterly and annual filings | 2–4 quarters | Surplus accruing to buyers rather than the platform vendor; closes the §7 central Unknown |
| 4 | Networking and DPU attach disclosed as a distinct and growing contribution | NVIDIA segment disclosure in filings | 2–4 quarters | Bundling of adjacent layers not translating into retained value |
| 5 | Identity and terms of memory suppliers for the 30TB fast-memory configuration | NVIDIA or supplier filings; official technical documentation | 1–3 quarters | The memory layer's scarcity, bottleneck status, and direction remain Unknown |
| 6 | Advanced packaging and assembly capacity disclosures for reticle-limit dual-die parts | TSMC and supplier filings and investor presentations | 2–4 quarters | Packaging-constraint alternative remains unresolved; closes the §7 unattributed-layer Hypothesis |
| 7 | Liquid-cooling adoption and supplier identity disclosed by data center operators for Blackwell-class density | Operator filings and investor presentations | 2–4 quarters | Thermal management layer remains unattributed; §6 facility-side migration unconfirmed |
| 8 | Announcement of a competing or open interconnect reaching comparable coherent-domain scale | Official announcements and technical documentation from any vendor or standards body | 4–8 quarters | Retention mechanism intact; supports assumption 4 |
| 9 | Whether Ansys, Cadence, and Synopsys ship Blackwell-accelerated products as stated | Official product documentation and filings | 2–4 quarters | Application software layer's `↑` Hypothesis unsupported |
| 10 | Independent or customer-published inference cost and energy results against the vendor's stated range | Official customer disclosures; technical documentation | 2–4 quarters | The 25x and 30x claims remain vendor-only; assumption 1 unresolved |

### Closure paths for every open item

Per `RESEARCH_REPORT_STANDARD.md` §10 and `VALUE_CAPTURE_METHODOLOGY.md` §7, every `Hypothesis` and `Unknown` recorded in §§5–8 has a closure path above.

| Open item | Recorded in | Closes via |
| --- | --- | --- |
| Split of the 25x surplus between vendor and buyers (**Unknown**) | §1, §7 | Signals 3, 10 |
| Rack-scale versus board-level adoption (**Unknown**) | §5 board-level row, §6 Step 4, §9 assumption 3 | Signal 2 |
| Memory layer scarcity, bottleneck status, and direction (**Hypothesis**, **Unknown**) | §5 memory row, §2 | Signal 5 |
| Advanced packaging bottleneck status and participants (**Unknown**) | §5 packaging row, §2 | Signal 6 |
| Thermal management bottleneck status and participants (**Unknown**) | §5 thermal row | Signal 7 |
| Facility power and energy direction (**Unknown**) | §5 facility row | Signals 7, 10 |
| Host CPU value direction (**Unknown**) | §5 host CPU row | Signals 1, 2 |
| Unattributed packaging, memory, and thermal layers as beneficiaries (**Hypothesis**) | §7 | Signals 5, 6, 7 |
| Cloud capacity and model development value direction (**Unknown**, **Hypothesis**) | §5 cloud and model rows, §7, §8 | Signals 2, 3 |
| Application software layer direction (**Hypothesis**) | §5 application row, §7 | Signal 9 |
| Durability and replicability of the interconnect mechanism (**Unknown**) | §7, §9 assumption 4 | Signal 8 |
| Verification of vendor performance and cost claims (**Unknown**) | §2, §9 assumption 1 | Signal 10 |
| Whether the two-year architectural cadence is itself the structural change (**Unknown**) | §4 | Signals 1, 8 |
| TSMC's share of economics (**Unknown**) | §7, §8 | Signal 6, plus supplier filings |

No signal above requires non-public information. No signal is expressed as a trading trigger, entry condition, or action.

---

*Report produced under `RESEARCH_REPORT_STANDARD.md` v1.1. Single P0 source, T0-locked to 2024-03-18. Contains no investment recommendation, no price or valuation information, and no timing signal. All Unknown items remain Unknown.*
