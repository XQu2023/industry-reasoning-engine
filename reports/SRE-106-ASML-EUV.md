# SRE-106 — ASML EUV

| Field | Value |
| --- | --- |
| Subject | ASML EUV lithography — first NXE:3100 systems placed with customers |
| T0 (frozen date) | 2010-02-22 |
| Industry domain | Semiconductor |
| T0 source A | ASML Holding NV, official press release, 2010-02-22 — "TSMC to Take Delivery of an ASML EUV Lithography System for Research and Development on Future Technology Generations" |
| T0 source B | ASML Holding NV, official press release, 2010-02-22 — "ASML Ships 100th TWINSCAN XT:19x0 Series Immersion System While Ramping Deliveries of New NXT Immersion Platform" |
| T0 source C | ASML Holding NV, official press release, 2010-02-22 — "ASML FlexRay Illuminators Successfully Enter Market as Chip Makers Seek Design Flexibility for Continued Shrink" |
| Standards applied | `SRE_PRODUCT_SPEC.md` v1.0, `RESEARCH_REPORT_STANDARD.md` v1.1 (repository; sprint attribution / confidence / traceability rules applied as stated for this run), `VALUE_CAPTURE_METHODOLOGY.md` v1.0, `SRE_GLOSSARY.md` v1.0 |

Three P0 documents, all first-party ASML press releases datelined **February 22, 2010**, cited as **[A]**, **[B]**, and **[C]**. All three were furnished together as Exhibits 99.1, 99.2 and 99.3 to a single ASML filing. Source A is the EUV announcement that defines this case; B and C are admitted because they are ASML official press releases of the same date and they carry the only T0 evidence of what EUV is positioned against.

**Standard applied.** `RESEARCH_REPORT_STANDARD.md` is at v1.1 in this repository and was not modified for this sprint. This report additionally applies the four sprint rules governing §2 attribution, §2 traceability, §7 confidence, and future-tense facts. The §2 rule permits future-tense content only where it is explicitly attributed to the T0 source; every such fact below is written as a statement the publisher made.

**Source-retrieval note, recorded rather than smoothed over.** The three releases were retrieved as exhibits to ASML's Form 6-K. **The 6-K wrapper is dated March 2, 2010 and therefore postdates T0**; its safe-harbour statement and its signature are excluded from this report, and no fact below derives from them. The consequence is material and is recorded as a limitation: unlike prior reports in this series, **no company risk-factor or forward-looking-statement text is available at T0**, so §9 cannot cite the issuer's own stated risks. Source A's text was cross-checked against ASML's own newsroom copy and TSMC's press-room copy, which agree with the filed exhibit on all content used. One wire distribution of Source A carries a February 21 transmission timestamp against the release's own February 22 dateline; the dateline is used, and no claim here depends on the difference.

Evidence labels used: Evidence-supported, Reasoned Inference, Hypothesis, Unknown (`SRE_GLOSSARY.md` v1.0). Confidence levels: High, Medium, Low (`VALUE_CAPTURE_METHODOLOGY.md` §6).

---

## 1. Executive Summary

On one day ASML published three things that must be read together. It announced that TSMC will take delivery of a TWINSCAN NXE:3100 extreme ultraviolet system, one of six such systems going to partners and customers, for **research and development** of future nodes [facts 1, 2, 3]. It announced the shipment of its 100th XT:1900-series immersion scanner, more than 160 immersion systems shipped in total, use by 18 of the world's top 20 chipmakers, and an estimated 350 million chips produced monthly on its immersion tools [facts 12, 14, 15]. And it announced that programmable illuminators are entering volume shipment specifically because "customers are looking to extend the use of immersion tools" [facts 24, 31]. EUV is described as having "the potential to reduce costs associated with current techniques used to stretch 193-nm immersion lithography" [fact 4]. *(Evidence-supported)*

The structure that produces is unusual and is the finding of this report: **the same supplier sells both the workaround and its eventual replacement, and at T0 the revenue is in the workaround.** Double patterning splits a layer into two or more exposures, which the source states requires much tighter overlay and critical dimension uniformity and "ultra-high throughput lithography systems" to preserve fab productivity, and that cost-effective double patterning "requires a high-accuracy, high-productivity lithography scanner" [facts 21, 22, 23]. Every one of those requirements raises what a fab must buy per layer from the lithography supplier. EUV is announced as the technology that would reduce that cost. *(Reasoned Inference, Medium)*

**Key conclusion.** Value migrates toward the supplier that owns the scanner, the programmable illuminator, and the source-mask optimization software as one coupled portfolio, because continued shrink at low k1 has moved the binding requirement from resolution in a single exposure to the alignment, uniformity, and throughput of several — while the EUV transition that would reset those requirements is, at T0, a six-tool development programme and not a committed change. *(Reasoned Inference, Medium)*

**What is not established, and it is the direction, not merely the size.** Because EUV is presented as *cost-reducing* relative to the techniques ASML currently sells [fact 4], whether EUV raises or lowers the total value captured at the lithography layer cannot be determined from these documents. No price appears for any system, EUV or immersion [see the §2 Unknown list]. This is recorded as **Unknown** and is why §5 marks the EUV row `Unknown` in its value-change column rather than `↑`.

**Top companies for further research — not recommendations, not ranked by attractiveness.** This list identifies where the reasoning in §§6–7 lands. It contains no view on valuation or timing.

- **ASML** — sole named supplier of the scanner, illuminator, and optimization software, with an installed base the source quantifies. Tier 1 on immersion evidence; EUV-specific capture Unknown. *(Reasoned Inference, Medium)*
- **TSMC** — stated to be expected as the first dedicated foundry conducting on-site EUV development. Tier 3; no retention mechanism disclosed. *(Reasoned Inference, Low)*

Market blind spot: the announcement that reads as news is EUV, while the two releases that describe where value actually sits at T0 report a mature technology being extended — a 100th shipment, 18 of the top 20 customers, and illuminators sold expressly to prolong the incumbent method. A reader who takes only the EUV release will date the industry's transition to 2010, which is the one thing these three documents jointly refuse to say. *(Reasoned Inference, Medium)*

---

## 2. Evidence

Verified facts only. Each is stated in one of the three T0 sources without interpretation. Future-tense content appears only where the source states it, and is written as a statement the publisher made. Customer statements reproduced inside the releases are recorded as statements the publisher reproduced, which is what the source establishes.

**From Source A — the EUV announcement**

1. ASML Holding NV announced on February 22, 2010 that Taiwan Semiconductor Manufacturing Company will take delivery of a TWINSCAN NXE:3100 extreme ultraviolet (EUV) lithography system. [A]
2. The release states the tool "represents one of six NXE:3100 EUV systems for ASML's worldwide partners and customers." [A]
3. The release states TSMC "is expected to be the first dedicated foundry conducting on-site EUV development" and will install the new system on its Fab 12 GigaFab for development of future technology nodes. [A]
4. The release states that EUV technology "employs a much shorter wavelength and has the potential to reduce costs associated with current techniques used to stretch 193-nm immersion lithography, making it a promising lithography technology for manufacturing ICs for future advanced technology nodes." [A]
5. The release states TSMC "is evaluating EUV and other lithography technologies for their potential to optimize cost-effective manufacturing at future technology nodes." [A]
6. Dr. Shang-yi Chiang, TSMC Senior Vice President of Research & Development, is quoted stating that TSMC will use a TWINSCAN NXE:3100 for research and development of future advanced technology nodes, that "EUV is one of next-generation lithography technologies we are investigating," that working with the system "is in line with our objective of maintaining advanced technology leadership," and that the agreement "reinforces our historic commitment to investing in the innovative European semiconductor community which, through ASML and others, will play a pivotal role in our process technology development in the future." [A]
7. Martin van den Brink, ASML executive vice president and chief product & technology officer, is quoted: "With an NXE:3100 for TSMC, ASML is now providing EUV systems to all major segments of the chip making industry: Logic, DRAM and NAND flash memory, and Foundry." [A]
8. The release identifies Taiwan Semiconductor Manufacturing Company as "(TWSE: 2330, NYSE: TSM)." [A]
9. The release describes TSMC as "the world's largest dedicated semiconductor foundry," states that its managed capacity in 2009 totalled 9.96 million 8-inch equivalent wafers including capacity from two advanced 12-inch GIGAFABs, four eight-inch fabs and one six-inch fab, names its wholly owned subsidiaries WaferTech and TSMC China and its joint venture fab SSMC, and states that TSMC "is the first foundry to provide 40nm production capabilities." [A]
10. The releases describe ASML as "the world's leading provider of lithography systems for the semiconductor industry, manufacturing complex machines that are critical to the production of integrated circuits or chips," headquartered in Veldhoven, the Netherlands. [A, B, C]
11. The releases state ASML "is traded on Euronext Amsterdam and NASDAQ under the symbol ASML," and that it has more than 6,500 employees expressed in full time equivalents, serving chip manufacturers in more than 60 locations in 15 countries. [A, B, C]

**From Source B — the 100th immersion system and the NXT platform**

12. ASML announced the shipment of its 100th TWINSCAN XT:1900 series lithography system, stated to be "capable of imaging industry-leading chip features as small as 38 nanometers." [B]
13. The release states the XT:19x0 series includes the XT:1900Gi and XT:1950Hi systems, "both featuring the industry's largest numerical aperture of 1.35." [B]
14. The release states that in total ASML "has shipped more than 160 TWINSCAN immersion systems, all capable of imaging sub-60 nm chip features." [B]
15. The release states that XT:19x0 series immersion systems "are the enabling technology behind the most advanced memory and logic chips in volume production," and that semiconductor manufacturers around the world, "including 18 of the world's top 20," use TWINSCAN immersion scanners "to produce an estimated 350 million chips every month." [B]
16. Jan Smits, senior vice president of the TWINSCAN product group at ASML, is quoted stating "Immersion lithography is now a mature technology," that ASML's immersion development continues in order to provide chipmakers with products that meet application-specific needs, and that "our XT systems provide cost-efficient, single-exposure manufacturing down to 38nm, while our new NXT platform provides the enhanced overlay and productivity performance required for double-patterning of critical features as small as 22 nm." [B]
17. The release states that as of December 31, 2009 ASML had shipped five TWINSCAN NXT systems and had another 17 NXT systems in backlog, and that this positions the new class of immersion systems "to become the preferred productivity system for DRAM and Logic chip manufacturing and future Flash nodes." [B]
18. The release states that "multiple customers will start volume production on NXT in the second quarter of 2010." [B]
19. The release states that immersion lithography systems "transfer patterns to wafers by projecting light through highly purified water between the lens and the wafer, enabling chipmakers to print smaller features with the same wavelength of light," and that ArF immersion technology "has become the de facto standard for chip production at 55 nm and below." [B]
20. The release states that ASML "was the first manufacturer to introduce immersion lithography, shipping its first TWINSCAN immersion system in 2004," and that "it remains the worldwide leader in the field which continues to grow rapidly." [B]
21. The release states that Double Patterning Technology "describes a variety of lithography techniques that involve splitting a complex layer pattern into two (or more) simpler patterns, and exposing them separately to recreate the original layer pattern on the wafer," and that this "allows features to be created on the wafer that are smaller than could be resolved by the scanner in a single exposure." [B]
22. The release states that the accuracy required to align the multiple patterns "places much tighter critical dimension uniformity (CDU) and overlay than the single-exposure techniques used to date," and that "multiple lithography steps per layer mean ultra-high throughput lithography systems are needed to maintain fab productivity." [B]
23. The release states that "for cost-effective Double Patterning to be adopted by semiconductor manufacturers requires a high-accuracy, high-productivity lithography scanner," and that ASML's NXT:1950i "provides overlay below 3nm, CDU of better than 1nm and high throughput of 175 wafers per hour necessary to make double-patterning processes cost-efficient." [B]

**From Source C — FlexRay programmable illumination**

24. ASML announced that its new FlexRay programmable illumination system "is finding strong acceptance by providing chip makers with virtually unlimited illumination source tuning." [C]
25. The release states that faster, more flexible source tuning "is essential for customers making full use of ASML's powerful source and mask optimization (SMO) software aimed at continued chip feature shrink, initially in R&D and later proliferation in production." [C]
26. The release states that as chip designs shrink, "more and more source-mask tuning is required to maintain a workable process window, resulting in the need of many complex pupil shapes." [C]
27. The release states that FlexRay "offers a higher-level of control and tighter pupil specifications than previous solutions, enabling better tool-to-tool matching and improved critical dimension uniformity (CDU), or chip structure accuracy." [C]
28. The release states that the first FlexRay unit "was shipped to a Logic customer in December 2009 and is already in use for both development work and low volume production," that ASML "has received orders for multiple units from leading Logic, Memory and Foundry customers," and that ASML "will begin shipping in volume this quarter on TWINSCAN XT:1950i and NXT:1950i immersion systems." [C]
29. The release states that ASML's Tachyon SMO software, "from its subsidiary Brion," is used to develop new lithography processes and optimize existing processes "at the design, photomask and imaging levels," and that Tachyon SMO "co-optimizes and analyzes scanner source and mask design simultaneously, ensuring an optimized process window." [C]
30. The release states that "FlexRay and Tachyon SMO are two key, complementary ingredients in ASML's holistic lithography portfolio." [C]
31. Jan Smits is quoted stating "Customers are looking to extend the use of immersion tools," and that FlexRay "not only provides immediate benefit in terms of faster, more effective R&D, but also prepares fabs for the adoption of a more holistic approach for continued shrink." [C]
32. The release states that FlexRay performance data "being shown this week at the SPIE Advanced Lithography conference in San Jose, CA demonstrates the stability, reliability and reproducibility required for use in volume production beginning in Q2 2010." [C]
33. The release states that the illuminator "is a key part of any lithography optical system," that it "conditions the light from the source, and causes the light beam to take on a prescribed shape, known as the pupil shape, before it goes through the mask." [C]
34. The release states that different mask patterns require different pupil shapes, making pupil shape "a key factor in ensuring a robust process window for low-k1 production — where process tolerances are approaching the limit of manufacturability," and that "as chip features shrink, more complex pupil shapes are required if existing immersion technology is used." [C]
35. The release states that current illuminator technology "uses exchangeable glass inserts called diffractive optical elements (DOEs) to shape the light," that for complex pupil shapes "these DOEs have to be custom designed and manufactured," and that by contrast FlexRay "uses a programmable array of thousands of individually adjustable micro-mirrors," can create any pupil shape "in a matter of minutes," thereby "eliminating the long cycle time associated with DOE design and fabrication and thus accelerating ramp to yield for low k1 designs." [C]

**Not stated in any T0 source, and therefore Unknown:** the price, cost, or order value of an NXE:3100, of any immersion system, or of a FlexRay unit; the identity of the five other recipients of NXE:3100 systems; the delivery or installation date of the TSMC system; any EUV performance figure — wavelength value, resolution, throughput, or availability for volume production; any date by which EUV would be used in production; the "other lithography technologies" TSMC is stated to be evaluating; any competing lithography supplier, competing system, or competitor of any kind; the identity of any supplier of optics, light sources, micro-mirror arrays, diffractive optical elements, water purification, or any subsystem; ASML revenue, cost, margin, backlog value, or order intake; the number of FlexRay units ordered; the identity of the Logic customer that received the first FlexRay unit; the commercial terms between ASML and TSMC or any other customer; the quantified cost of double patterning against EUV; any k1 value; and — because the filing wrapper in which these releases were furnished postdates T0 — any issuer risk-factor or safe-harbour statement. *(Unknown)*

---

## 3. Customer Problem

**What end-user problem changed.** The buyer's problem is not that it cannot print small features. It is that printing them is becoming expensive and slow by the only available method. The sources state this in four separate places. Process tolerances at low k1 are "approaching the limit of manufacturability" [fact 34]. More source-mask tuning is required as designs shrink, producing a need for many complex pupil shapes [fact 26]. Features below what a scanner can resolve in one exposure require splitting the layer into two or more patterns, each exposed separately [fact 21]. And the custom diffractive optics used to shape light for complex pupils "have to be custom designed and manufactured," carrying a "long cycle time" that delays ramp to yield [fact 35]. *(Evidence-supported)*

Three components of the problem are distinguishable, and the sources address each:

- **Cost, stated as the problem EUV addresses.** The EUV release does not justify EUV by resolution. It states that EUV "has the potential to reduce costs associated with current techniques used to stretch 193-nm immersion lithography" [fact 4], and that TSMC is evaluating technologies "for their potential to optimize cost-effective manufacturing" [fact 5]. The named problem is the cost of the workaround. *(Evidence-supported)*
- **Fab productivity, not just accuracy.** Splitting layers multiplies lithography steps, and the source states that this means "ultra-high throughput lithography systems are needed to maintain fab productivity" [fact 22]. A fab that doubles exposures at critical layers loses output unless the scanner runs faster. *(Evidence-supported)*
- **Cycle time in getting to yield.** The tuning burden itself delays production, because complex pupil shapes previously required custom-built glass inserts; the disclosed remedy creates any shape "in a matter of minutes" [fact 35]. *(Evidence-supported)*

**Who is worse off without it:** chipmakers pursuing nodes below what single exposure can resolve. The sources place this population precisely — 18 of the world's top 20 semiconductor manufacturers already use these scanners [fact 15], orders for programmable illuminators come from "leading Logic, Memory and Foundry customers" [fact 28], and one named buyer states that working with the new system "is in line with our objective of maintaining advanced technology leadership" [fact 6]. *(Evidence-supported)*

**What the sources do not disclose.** No cost figure appears for any method — not for double patterning, not for custom diffractive optics, not for a scanner, not for an EUV system [see the §2 Unknown list]. The problem is established as a cost problem and cannot be sized as one. Its magnitude is therefore **Unknown**.

---

## 4. Industry Change

**The concrete change.** Two changes are announced together and they are not the same kind of thing. First, a pre-production EUV system generation is placed with customers for development, with six systems going to partners and customers and one of them to a foundry [facts 1, 2, 3]. Second — and this one is entering volume — the incumbent method is being extended by programmable illumination shipping in volume from this quarter, by optimization software that co-optimizes source and mask, and by a scanner platform built for double patterning [facts 16, 23, 28, 29]. *(Evidence-supported)*

**Which system requirement shifts.** Three requirements move in the sources:

1. **From resolution in one exposure to alignment across several.** The binding specifications become overlay and critical dimension uniformity rather than what a single exposure can resolve, because layers are split and re-combined [facts 21, 22]. The disclosed figures for the new platform are overlay below 3nm and CDU better than 1nm [fact 23]. *(Evidence-supported)*
2. **From throughput as productivity to throughput as feasibility.** Where each layer needs several exposures, scanner speed stops being an efficiency matter and becomes a condition of the method being economic at all — the source states that cost-effective double patterning "requires a high-accuracy, high-productivity lithography scanner," and pairs 175 wafers per hour with that requirement [facts 22, 23]. *(Evidence-supported)*
3. **From configuring the tool to co-optimizing tool, mask, and design.** Illumination moves from exchangeable glass inserts to a programmable array of thousands of micro-mirrors [fact 35], and the software optimizes scanner source and mask design simultaneously at the design, photomask and imaging levels [fact 29]. The unit being optimized is no longer the scanner. *(Evidence-supported)*

**Why the prior solution becomes insufficient.** The sources give a physical reason and an economic one. Physically, tolerances at low k1 are approaching the limit of manufacturability, and features are wanted below what one exposure resolves [facts 21, 34]. Economically, the remedies compound: more exposures per layer, tighter alignment, more complex pupil shapes, custom optics with long lead times [facts 21, 22, 26, 35]. Each remedy adds cost to the same objective. That is the condition under which a different wavelength becomes attractive on cost grounds, which is exactly how the EUV release frames it [fact 4]. *(Reasoned Inference)*

**Structural or cyclical.** This determination has to be made twice, because the two announcements are at different stages.

- **The extension of immersion is a structural change, and it is underway.** It alters what participants must do: a fab pursuing critical features at 22nm runs multiple exposures per layer, holds overlay below 3nm, and co-optimizes source and mask rather than selecting a fixed illumination setting [facts 16, 21, 23, 29]. Volume production on the new platform is stated to start in the second quarter of 2010, and illuminators ship in volume from this quarter [facts 18, 28]. *(Reasoned Inference)*
- **The EUV transition is not established as a change at T0.** The evidence is six systems, described as being for partners and customers, with the named one going to a foundry for "research and development" [facts 1, 2, 3]. The technology carries hedged language in the publisher's own words — it "has the potential to reduce costs" and is "a promising lithography technology" [fact 4] — and the named customer states it is "evaluating EUV and other lithography technologies" and that EUV is "one of next-generation lithography technologies we are investigating" [facts 5, 6]. Whether EUV becomes a structural change, and when, is **Unknown** at T0.

Treating the second bullet as though it were the first is the central error available in this case, and it is the one a reader arriving with knowledge of what EUV later became is most likely to make.

---

## 5. Value Chain Analysis

**Purpose.** Map how value flows through the value chain after the change described in §4. This section is a map, not a conclusion: it identifies no winner and names no capturer. Layer existence and role are drawn from §2 facts; scarcity, bottleneck, and direction of value change are reasoning, labeled per row.

Granularity is one functional layer per row, ordered from optical inputs through end demand.

| Layer | Role | Scarcity | Bottleneck | Expected Value Change | Evidence Label |
| --- | --- | --- | --- | --- | --- |
| Light source | Supplies the light the illuminator conditions; the incumbent method prints with "the same wavelength of light" while EUV is stated to employ "a much shorter wavelength" [facts 4, 19, 33] | Unknown | Unknown | Unknown | Unknown |
| Precision projection optics | Provides the lens system, including the stated numerical aperture of 1.35, and the water-based final imaging path [facts 13, 19] | Unknown | Unknown | ↑ | Reasoned Inference |
| Diffractive optical elements | Supplied exchangeable custom-designed glass inserts to shape light into required pupil shapes [fact 35] | No | No | ↓ | Reasoned Inference |
| Programmable illumination | Replaces fixed inserts with a programmable array of thousands of adjustable micro-mirrors, creating any pupil shape in minutes [facts 24, 27, 35] | Unknown | No | ↑ | Reasoned Inference |
| Lithography scanner systems (immersion) | Expose the wafer; the platform for double patterning is stated to deliver overlay below 3nm, CDU better than 1nm, and 175 wafers per hour [facts 12, 16, 23] | Yes | Yes | ↑ | Reasoned Inference |
| EUV lithography systems | Six pre-production NXE:3100 systems placed with partners and customers for development of future nodes [facts 1, 2, 3] | Unknown | Unknown | Unknown | Unknown |
| Computational lithography software | Co-optimizes scanner source and mask design simultaneously at design, photomask and imaging levels [facts 25, 29, 30] | Unknown | No | ↑ | Reasoned Inference |
| Photomask design and manufacture | Supplies the masks that are co-optimized with the source and split across multiple exposures [facts 21, 29] | Unknown | Unknown | ↑ | Reasoned Inference |
| Single-exposure patterning at critical layers | Previously produced the smallest features in one exposure, stated as cost-efficient down to 38nm [facts 16, 21] | No | No | ↓ | Reasoned Inference |
| Multi-patterning process integration | Splits layers into two or more patterns and re-aligns them in the fab, under tighter CDU and overlay than single exposure [facts 21, 22] | Unknown | Unknown | ↑ | Reasoned Inference |
| Leading-edge chip manufacturing | Operates the fabs; 18 of the world's top 20 manufacturers use these scanners, and the named foundry reports 9.96 million 8-inch equivalent wafers of managed capacity for 2009 [facts 9, 15] | Unknown | No | ↑ | Reasoned Inference |
| End demand for advanced chips | Consumes the output; the scanners are stated to be behind the most advanced memory and logic chips in volume production, at an estimated 350 million chips per month [facts 15, 16] | No | No | ↑ | Hypothesis |

**Layers with no participant named in the T0 sources.** Light source, precision projection optics, diffractive optical elements, programmable micro-mirror arrays as components, photomask design and manufacture, single-exposure patterning, and multi-patterning process integration are each established as necessary or displaced by the disclosed technology [facts 19, 21, 29, 33, 35], and **no company is named in any of them**. Beyond ASML and TSMC, the sources name only ASML's own subsidiary Brion [fact 29] and TSMC's own subsidiaries and joint venture [fact 9]. In particular, five of the six NXE:3100 recipients are unnamed [fact 2] and the first FlexRay customer is identified only as "a Logic customer" [fact 28]. Per `RESEARCH_REPORT_STANDARD.md` §5, these layers are recorded and left unattributed, and no recipient is inferred.

**Reading notes, held separate from the table.**

- The `Lithography scanner systems` row is the only `Bottleneck: Yes`, and it is the best-grounded bottleneck assessment in this series so far, though still `Reasoned Inference` rather than `Evidence-supported`. It rests on a direct statement that cost-effective double patterning "requires a high-accuracy, high-productivity lithography scanner" [fact 23], reinforced by the statement that multiple exposures per layer require ultra-high throughput "to maintain fab productivity" [fact 22]. The source says the method is not economic without the tool. It does not say the tool is scarce, which is a separate question answered in the `Scarcity` column and argued in §7.
- The `EUV lithography systems` row carries `Unknown` in three of four assessment columns, and this is the analytically load-bearing cell of the table. A direction cannot be assigned because the source's own framing cuts both ways: EUV would be additional equipment sold, but it is introduced as reducing "costs associated with current techniques used to stretch 193-nm immersion lithography" [fact 4] — techniques the same supplier currently sells. With no price for either path [see §2 Unknown list], `↑` and `↓` are equally consistent with the evidence, so the cell reads `Unknown` and is not upgraded.
- Two layers carry `↓`. Diffractive optical elements decline because the source states their design-and-fabrication cycle is eliminated by the programmable alternative [fact 35]. Single-exposure patterning at critical layers declines because features below single-exposure resolution require splitting [facts 16, 21]. Neither has a named participant, so no company is recorded as displaced.
- `Precision projection optics` is marked `↑` while its supplier is unnamed. The basis is that the disclosed direction of travel adds optical content and tightens optical specification — largest stated numerical aperture, water in the imaging path, and thousands of individually adjustable micro-mirrors replacing a glass insert [facts 13, 19, 35]. Whether that value accrues to an independent supplier or is internal is **Unknown**, because no optics supplier is named anywhere.
- `Multi-patterning process integration` is marked `↑` at T0 while being precisely what EUV is positioned to displace [fact 4]. Both readings are held: at T0 the method is being adopted, with volume production on the double-patterning platform stated for the second quarter of 2010 [fact 18], while its long-run direction depends on an EUV transition the sources do not establish.
- `End demand for advanced chips` carries `Hypothesis` because the sources establish volume and capability [facts 15, 16] without disclosing anything about what end users pay or gain.

No winner is identified in this section. Which participants capture value from the layers marked `↑` is addressed in §§7–8.

---

## 6. Value Migration

**Purpose.** State where value moves, and why it must. Origins and destinations use the layers established in §5.

**Where value moves — origin and destination both named.**

| From (origin layer) | To (destination layer) | Basis |
| --- | --- | --- |
| Single-exposure patterning at critical layers, which produced the smallest features in one pass | Multi-patterning process integration together with scanner systems specified for overlay, CDU, and throughput | Facts 16, 21, 22, 23 |
| Diffractive optical elements, custom designed and manufactured per pupil shape | Programmable illumination using an array of thousands of adjustable micro-mirrors | Facts 27, 35 |
| Scanner-level process configuration, where the tool was set up and run | Computational lithography software that co-optimizes source and mask design simultaneously, coupled to the programmable illuminator | Facts 25, 29, 30 |
| Buyer-side process tuning effort and its cycle time, previously spent designing and fabricating custom optics before ramp | Supplier-side capability delivering any pupil shape in minutes, accelerating ramp to yield | Facts 31, 35 |

**Why the migration follows.** Step by step, so any single link can be attacked:

1. Shrink continues to be demanded, and the named buyer states that working with next-generation lithography is in line with its objective of maintaining advanced technology leadership [fact 6]. *(Evidence-supported that the source makes this claim)*
2. At low k1, process tolerances are approaching the limit of manufacturability, and the features wanted are smaller than a scanner resolves in one exposure [facts 21, 34]. *(Evidence-supported)*
3. The disclosed remedy is to split each layer into two or more patterns exposed separately, which imposes much tighter CDU and overlay than single exposure and requires ultra-high throughput to preserve fab productivity [facts 21, 22]. *(Evidence-supported)*
4. The source states that cost-effective adoption of that remedy "requires a high-accuracy, high-productivity lithography scanner," and attaches specific figures to the platform offered [fact 23]. Requirements that were previously separable — accuracy and speed — must now be met simultaneously in one tool. *(Evidence-supported)*
5. Where accuracy, uniformity, and throughput must be met together for the method to be economic, the specification of the scanner determines whether the node is manufacturable at acceptable cost, so value concentrates at that layer rather than at the layers it coordinates. *(Reasoned Inference)*
6. In parallel, the tuning that makes the method work moves off the tool and into software and programmable optics, and the source couples these explicitly: flexible source tuning is "essential for customers making full use of" the optimization software, and the two are described as "complementary ingredients" in one portfolio [facts 25, 30]. Value therefore migrates not to a component but to a coupled set held by one party. *(Reasoned Inference)*

**One migration is asserted by the source and not established by it.** The EUV release states that EUV has "the potential to reduce costs associated with current techniques used to stretch 193-nm immersion lithography" [fact 4]. That is a claim about a future migration away from the very layers that steps 3–6 above describe value migrating toward. At T0 it rests on six systems for development, a customer that is "evaluating," and no disclosed price, performance, or production date [facts 1, 2, 3, 5; §2 Unknown list]. It is recorded as **Hypothesis** and no direction is entered for it in §5. *(Hypothesis, Low)*

**The consequence for magnitude, stated plainly.** If EUV eventually reduces the cost of stretching immersion, it reduces spending on techniques the same supplier sells, while adding a system the same supplier sells. Whether the lithography layer's total captured value rises or falls through that transition cannot be derived from these documents, because no price is disclosed for either path. The direction of the *near-term* migration in the table above is assessable; the direction of the *EUV* migration is **Unknown**, and no arithmetic in this report depends on resolving it.

**Confidence on the migration as a whole: Medium.** *(Reasoned Inference)* The direction is well supported for the near-term migration, because the publisher states the physical constraint, the remedy, the requirement the remedy imposes, and the coupling between its own products [facts 21, 22, 23, 25, 30]. Against that: no price or cost for any element, no competitor named anywhere in three documents, and a stated future path that would displace part of what the migration moves toward. Under `VALUE_CAPTURE_METHODOLOGY.md` §6, undisclosed load-bearing elements cap confidence below High.

**Statement of standing.** Potential value reallocation. Requires later market verification.

---

## 7. Value Capture

Per `VALUE_CAPTURE_METHODOLOGY.md`: value creation is not value capture, revenue growth is not value capture, and technology leadership is not value capture. That features below single-exposure resolution become manufacturable, and that ramp to yield accelerates, are *creation* claims [facts 21, 35]; the question here is who retains the value. Every conclusion below carries an evidence label and a confidence level.

**Step 1 — Industry bottleneck.** Delivering a lithography system that simultaneously achieves the alignment accuracy, uniformity, and throughput that multi-exposure patterning requires. The source states the method is not cost-effective without such a system [facts 22, 23]. *(Reasoned Inference, Medium)*

**Step 2 — Scarce capability.** Supplying that system together with the programmable illumination and the source-mask optimization that the same source states are needed to use it at low k1 [facts 25, 30, 34]. What supports scarcity: the publisher states it was first to introduce immersion lithography in 2004, "remains the worldwide leader," offers "the industry's largest numerical aperture," and is used by 18 of the world's top 20 manufacturers [facts 13, 15, 20]. What limits the assessment: **every one of those statements is made by the seller, and no competing supplier or system is named anywhere in the three documents**, so how widely the capability is held cannot be tested from this evidence. *(Reasoned Inference, Medium)*

**Step 3 — Value migration.** As traced in §6: toward the coupled scanner, illuminator, and optimization-software position, and away from single-exposure patterning and custom diffractive optics.

**Step 4 — Economic profit capture.** No price, cost, margin, revenue, or order value appears in any T0 source, for any product [see the §2 Unknown list]. Economic profit capture is therefore **not measurable** at T0. This report assesses the position from which capture would occur and records the magnitude as Unknown. *(Unknown, Low)*

**Step 5 — Ranking by sustainable capture.**

### Tier 1 — Direct Value Capturer

**ASML** *(Reasoned Inference, Medium)*

Assigned, with an important restriction on what it is assigned for. The retention mechanism nameable from these documents has three parts, and all three are evidenced on **immersion**, not on EUV:

1. **Installed base, quantified by the source.** More than 160 immersion systems shipped, a 100th shipment of one series, use by 18 of the world's top 20 semiconductor manufacturers, an estimated 350 million chips produced monthly on these scanners, and five NXT systems shipped with 17 more in backlog as of December 31, 2009 [facts 12, 14, 15, 17]. Installed base is an explicit retention category under `VALUE_CAPTURE_METHODOLOGY.md`, and it is the only one here supported by disclosed numbers. *(Evidence-supported for the base; Reasoned Inference that it retains value, Medium)*
2. **Coupling across layers the same party supplies.** The illuminator is stated to be "essential for customers making full use of" the optimization software, the software comes from a subsidiary, and the two are described as "complementary ingredients in ASML's holistic lithography portfolio" [facts 25, 29, 30]. A buyer adopting the method described takes a scanner, an illuminator, and software from one supplier, and the source states the illuminator improves "tool-to-tool matching" [fact 27] — a benefit that increases with the share of a fab's tools that come from the same supplier. *(Reasoned Inference, Medium)*
3. **Sole named supply across all disclosed segments.** The publisher states it is now providing EUV systems to Logic, DRAM and NAND flash memory, and Foundry [fact 7], and illuminator orders are stated to come from leading Logic, Memory and Foundry customers [fact 28]. No alternative supplier is named for any layer in any of the three documents. *(Evidence-supported that no alternative is named; Reasoned Inference that this indicates concentration, Medium)*

**Facts that cut against the assignment, recorded rather than set aside.** The publisher describes its own core product line as mature — "Immersion lithography is now a mature technology" [fact 16] — which is not language that implies expanding capture. Every leadership claim is the seller's own and is untested by any named competitor [see §2 Unknown list]. The named customer explicitly hedges, stating it is evaluating "EUV and other lithography technologies" and describing the European community as contributing "through ASML and others" [facts 5, 6] — the source's own acknowledgement that other suppliers exist without naming them. And no price appears anywhere, so nothing distinguishes a strong position from a strong position that is competed away on price. *(Reasoned Inference, Medium)*

**What Tier 1 is *not* assigned for.** It is not assigned for EUV. At T0 the EUV evidence is six pre-production systems for development, hedged capability language, and a customer conducting evaluation [facts 1, 2, 3, 4, 5]. EUV-specific capture is **Unknown**. *(Unknown, Low)*

**Magnitude of capture: Unknown.** *(Unknown, Low)* No cost or price figure exists in the sources, and the one directional statement about future costs points *downward* for the customer [fact 4].

### Tier 2 — Direct Beneficiary

**Vacant.** *(Reasoned Inference, Medium)* No participant other than ASML is shown to have first-order economics improve with partial retention. Brion is named only as ASML's own subsidiary [fact 29] and is not a separate participant. The layers that would populate this tier — light sources, projection optics, micro-mirror arrays, photomasks — are established as necessary and have no company named in any of them [see §5]. Per `VALUE_CAPTURE_METHODOLOGY.md` §3, a tier with no qualifying participant is recorded as vacant; naming a plausible optics or source supplier would be a defect.

### Tier 3 — Indirect Beneficiary

**TSMC** *(Reasoned Inference, Low)* Second-order path, stated in full: TSMC obtains an EUV system and is stated to be "expected to be the first dedicated foundry conducting on-site EUV development," installing it at Fab 12 for development of future nodes [facts 1, 3]. The disclosed benefit is positional and forward — earlier on-site development experience than other foundries — and its own executive frames it as investigation rather than commitment [fact 6]. Retention mechanism: none disclosed. The disclosed transaction is TSMC *taking delivery* of equipment, which at T0 is an outlay, not an improvement in economics; the source discloses neither what it costs nor what it returns. Under `VALUE_CAPTURE_METHODOLOGY.md` §6, exposure without a named retention mechanism is not capture, which is why this is Tier 3 rather than Tier 2.

**Chipmakers using the disclosed immersion capability, unattributed** *(Reasoned Inference, Low)* 18 of the world's top 20 manufacturers are stated to use these scanners to produce the most advanced memory and logic chips in volume [facts 15, 16]. Nineteen of those twenty are unnamed and none is inferred. Their gain is the ability to manufacture at the leading edge; whether it is retained or competed away among them is **Unknown**.

### Tier 4 — Potential Beneficiary

- **The five unnamed recipients of the other NXE:3100 systems** *(Unknown, Low)* The source states six systems go to "worldwide partners and customers" and names one recipient [facts 1, 2]. The other five are not named, not described, and not inferred here. Whether they occupy the same position as the named foundry is **Unknown**.
- **Buyers as candidate capturers of the EUV surplus** *(Hypothesis, Low)* `VALUE_CAPTURE_METHODOLOGY.md` §4 Step 4 requires the buyer to be considered. The EUV release's own economic claim is that EUV has the potential to *reduce costs* for chipmakers [fact 4], and one buyer states it is evaluating options "for their potential to optimize cost-effective manufacturing" [fact 5]. If the cost reduction reaches the buyer, the surplus from the EUV transition accrues to chipmakers rather than to the equipment supplier. This is the principal alternative to the Tier 1 reading and is not excluded by anything in these documents.
- **Photomask, optics, and light-source suppliers, unnamed** *(Unknown, Low)* Multi-patterning implies more masks per layer and co-optimization at the photomask level, and the optical path grows more demanding [facts 21, 29, 35]. No participant is named in any of these layers, so the direction of net effect for them is **Unknown**.
- **Suppliers of diffractive optical elements, unnamed** *(Reasoned Inference, Low)* The source states the programmable alternative eliminates the DOE design-and-fabrication cycle [fact 35], which points against this layer. It is recorded here rather than omitted because a displaced layer with no named participant still belongs in the analysis; §8 records that no company can be entered against it.

**Alternative explanations considered.** That the position is a seller's self-description and the capability is more widely held than three ASML documents can show — not excludable, since no competitor is named *(Unknown, Low)*. That capture at T0 sits with immersion and is genuinely mature, so the position is stable rather than expanding, as the publisher's own word "mature" suggests *(Reasoned Inference, Medium)*. That the durable asset is the coupled software-and-illumination portfolio rather than the scanner, in which case capture attaches to a layer §5 marks `Bottleneck: No` *(Hypothesis, Low)*. That EUV, if adopted, reduces total lithography spend per layer by removing multi-exposure work, making the eventual transition value-destructive at this layer even if the supplier wins it *(Hypothesis, Low)*.

---

## 8. Listed Companies

Publicly listed participants named in the T0 sources. The role carries the §5 layer and the tier assigned in §7. **This table is not ranked by attractiveness, contains no valuation information, and is not a recommendation.**

**Inclusion rule applied.** A company is entered only if a T0 source names it and the named entity is established as the publicly listed entity. Where the source names a business whose listing status it does not establish, the entry is omitted and no parent is inferred — recorded below with the reason.

| Company | Role | Why | Evidence | Confidence |
| --- | --- | --- | --- | --- |
| ASML Holding NV (Euronext Amsterdam and NASDAQ: ASML) | Lithography scanner systems, programmable illumination, computational lithography software — Tier 1 Direct Value Capturer | Supplies the layer §5 marks `Bottleneck: Yes` and the coupled illuminator and SMO layers; quantified immersion installed base; sole named supplier across Logic, DRAM, NAND, and Foundry for the disclosed EUV placements. Tier 1 is for immersion evidence; EUV-specific capture and share retained: Unknown | Facts 7, 10, 11, 12, 14, 15, 17, 20, 23, 25, 29, 30 [A, B, C]; listing status established by the sources themselves [fact 11]; magnitude: Unknown | Medium |
| Taiwan Semiconductor Manufacturing Company (TWSE: 2330, NYSE: TSM) | Leading-edge chip manufacturing — Tier 3 Indirect Beneficiary | Stated expected first dedicated foundry conducting on-site EUV development; installs NXE:3100 at Fab 12 for R&D of future nodes. No retention mechanism disclosed; transaction at T0 is equipment delivery | Facts 1, 3, 6, 8, 9 [A]; listing status established by the source itself [fact 8] | Low |

**Why this table has two rows.** Both companies' listing status is established by the T0 sources themselves [facts 8, 11]. No other participant is both named and established as listed.

**Named in the sources but excluded from this table.**

- **Brion** [fact 29] — named only as ASML's subsidiary supplying Tachyon SMO; not a separate listed participant.
- **WaferTech, TSMC China, SSMC** [fact 9] — named as TSMC subsidiaries or joint venture in capacity boilerplate; no capture path for the industry change is disclosed for any of them as separate entities.
- **The first FlexRay customer** [fact 28] — identified only as "a Logic customer"; no company name appears, and none is inferred.
- **The five unnamed NXE:3100 recipients** [fact 2] — not named; none is inferred.

**Layers with no row in this table.** Light source, precision projection optics, diffractive optical elements, photomask design and manufacture, multi-patterning process integration, and end demand for advanced chips all appear in §5 with no listed participant recorded. No participant is inferred into any of them.

**Displaced participants.** Two layers carry `↓` in §5 — diffractive optical elements and single-exposure patterning at critical layers [facts 16, 21, 35] — and the sources name no participant in either. No competing lithography supplier is named anywhere in the three documents. Which companies, if any, are displaced is therefore **Unknown**.

---

## 9. Risks

### Assumptions that could fail

1. **The immersion extension remains the binding path at T0 and near-term** — supports §5's scanner bottleneck, §6 Steps 3–6, and the §7 Tier 1 assignment. The thesis rests on multi-patterning and programmable illumination as the present method of continued shrink [facts 16, 21, 23, 31]. If fabs abandon multi-patterning for another route before the disclosed volume-production windows, the near-term migration reverses. *(Reasoned Inference)*
2. **No competing supplier holds comparable capability** — supports §7 Step 2 scarcity and Tier 1 mechanism 3. The three documents name no competitor [see the §2 Unknown list]. The named customer refers to "ASML and others" [fact 6], which acknowledges other parties without naming them. If a comparable high-accuracy, high-productivity scanner exists or emerges at similar terms, the concentration claim weakens. *(Unknown at T0)*
3. **EUV does not immediately displace the immersion-extension economics** — supports the separation of Tier 1 (immersion) from EUV-specific capture (Unknown). The EUV release frames EUV as potentially cost-reducing relative to stretching immersion [fact 4]. If production EUV arrives quickly and removes multi-exposure work, value at the lithography layer may fall even if ASML supplies EUV. *(Hypothesis)*
4. **Cost-effective double patterning actually requires the disclosed scanner class** — supports §5 `Bottleneck: Yes` and §6 Step 4. The source states that cost-effective double patterning "requires a high-accuracy, high-productivity lithography scanner" and attaches overlay, CDU, and throughput figures to NXT:1950i [fact 23]. If fabs achieve cost-effective multi-patterning without that class of tool, the bottleneck assessment is misplaced. *(Reasoned Inference)*
5. **Demand for continued shrink is sustained** — supports §3 and §6 Step 1. Evidence is vendor statements plus one foundry executive framing leadership as the objective [facts 6, 15, 16, 31]. If leading-edge demand stalls, the migration shrinks without reversing. *(Hypothesis)*
6. **Monetisation exists at disclosed product layers** — supports the whole of §7. No price, cost, or margin appears for NXE:3100, immersion systems, FlexRay, or Tachyon SMO [see the §2 Unknown list]. A structurally strong position that earns no economic profit is not value capture under this methodology. *(Unknown)*
7. **Leadership claims are not solely self-description** — supports §7 Step 2. "Worldwide leader," "industry's largest numerical aperture," and "18 of the world's top 20" are all publisher statements [facts 13, 15, 20]. No independent confirmation appears in these documents. *(Unknown)*

### What would weaken the thesis

- Immersion remaining mature and competed on price, leaving the direction of migration intact while the share retained by the supplier is modest.
- EUV cost reduction accruing mainly to chipmakers, so that surplus from any eventual transition passes through the equipment supplier.
- Multi-patterning proving temporary and narrowly applied, limiting the scanner bottleneck's economic weight.
- Other lithography routes named by customers as under evaluation [facts 5, 6] gaining adoption without ASML as the supplier.

### What would invalidate the thesis

- **A competing supplier delivering comparable overlay, CDU, and throughput for multi-patterning at scale**, which removes the concentration premise of Tier 1 mechanism 3 and would make the §5 scarcity assessment wrong.
- **Economic profit accruing to buyers or to unnamed optics and source suppliers rather than the scanner supplier**, in which case the Tier 1 designation is mislocated.
- **Production EUV eliminating multi-exposure work while ASML fails to retain the EUV position**, which would invalidate both the near-term immersion capture thesis and any EUV follow-on.
- **Leading-edge manufacturing continuing without the disclosed immersion-extension stack**, which would invalidate the migration in §6 rather than merely reduce it.

Weakening and invalidating conditions are kept separate deliberately: the first four reduce the size of the conclusion, the last four replace it.

---

## 10. Monitoring Signals

Each signal names the P0 source class where it would become visible, a horizon measured from T0, and what its absence by that point would imply.

| # | Signal | Source class | Horizon | Absence implies |
| ---: | --- | --- | --- | --- |
| 1 | Delivery and installation of the TSMC NXE:3100 at Fab 12, and of the other five NXE:3100 systems | ASML and TSMC official announcements; ASML filings | 2–8 quarters | EUV remains announcement rather than installed capability; §4 EUV change stays unconfirmed |
| 2 | Disclosure of NXE:3100 or EUV pricing, order value, or ASML segment economics for EUV | ASML annual and quarterly filings; official pricing or order disclosures | 2–8 quarters | Magnitude of EUV capture stays Unknown; assumption 6 unresolved |
| 3 | Whether immersion ASP, margin, or immersion/NXT backlog grows or contracts after FlexRay and NXT volume ramps | ASML filings and official announcements | 2–8 quarters | Whether the immersion-extension position converts into retained value stays Unknown |
| 4 | Volume production on NXT as stated for Q2 2010, and FlexRay volume shipment as stated for this quarter | ASML official announcements and product documentation | 1–2 quarters | Assumptions 1 and 4 weaken; near-term migration unconfirmed |
| 5 | Identity of the other five NXE:3100 recipients and of the first FlexRay Logic customer | ASML or customer official announcements | 2–8 quarters | Unattributed recipient layers stay Unknown; closes §7 Tier 4 unnamed-recipient item |
| 6 | Disclosure of competing EUV or multi-patterning lithography systems from any other supplier | Official announcements from any vendor | 4–12 quarters | Concentration premise untested; assumption 2 unresolved |
| 7 | Customer statements selecting EUV for production, or selecting continued immersion/multi-patterning instead | TSMC and other customer official announcements and filings | 4–12 quarters | EUV Hypothesis in §6 unresolved; assumption 3 unresolved |
| 8 | Publication of quantified cost comparison between multi-patterning and EUV | ASML or customer technical documentation and filings | 4–12 quarters | §5 EUV value-change cell and §3 problem magnitude stay Unknown |
| 9 | Whether Tachyon SMO / FlexRay attach rates are disclosed as growing with immersion shipments | ASML filings and official product documentation | 2–8 quarters | Coupling retention mechanism in §7 remains unverified |
| 10 | Identification of optics, light-source, or photomask suppliers for NXE or immersion platforms | ASML or supplier filings and announcements | 4–12 quarters | Unattributed supply layers in §5 stay unattributed |
| 11 | Whether DOE suppliers disclose impact from programmable illumination | Supplier filings and announcements | 2–8 quarters | The DOE `↓` remains an inference without a named displaced participant |
| 12 | Whether ASML discloses EUV as a distinct financial unit or product line | ASML filings | 4–12 quarters | EUV-specific capture stays Unknown |

### Closure paths for every open item

Per `RESEARCH_REPORT_STANDARD.md` §10 and `VALUE_CAPTURE_METHODOLOGY.md` §7, every `Hypothesis` and `Unknown` recorded in §§5–8 has a closure path above.

| Open item | Recorded in | Closes via |
| --- | --- | --- |
| Whether EUV is a structural change at T0 (**Unknown**) | §4 | Signals 1, 7 |
| EUV lithography systems layer scarcity, bottleneck, value change (**Unknown**) | §5 EUV row | Signals 1, 2, 7, 8 |
| Light source layer, all assessment cells (**Unknown**) | §5 light-source row | Signal 10 |
| Precision optics supplier identity (**Unknown**) | §5 optics row, §8 | Signal 10 |
| Photomask layer scarcity and bottleneck (**Unknown**) | §5 photomask row | Signals 8, 10 |
| Multi-patterning process integration scarcity and bottleneck (**Unknown**) | §5 multi-patterning row | Signals 4, 7, 8 |
| End-demand layer direction (**Hypothesis**) | §5 end-demand row | Signals 3, 7 |
| Future migration from immersion-extension to EUV (**Hypothesis**) | §6 | Signals 7, 8, 12 |
| Share of economic profit retained / magnitude of capture (**Unknown**) | §1, §7, §8 | Signals 2, 3 |
| EUV-specific capture (**Unknown**) | §7 | Signals 2, 7, 12 |
| Vacant Tier 2 and unnamed supply-layer beneficiaries (**Unknown**) | §7, §8 | Signal 10 |
| Five unnamed NXE:3100 recipients (**Unknown**) | §7 | Signal 5 |
| Buyers as capturers of EUV cost reduction (**Hypothesis**) | §7 | Signals 2, 7, 8 |
| Competing supplier existence and capability (**Unknown**) | §7, §9 assumption 2 | Signal 6 |
| Displaced participants in the two `↓` layers (**Unknown**) | §5, §8 | Signals 6, 11 |
| Customer-problem magnitude (**Unknown**) | §3 | Signal 8 |
| Whether the Form 6-K wrapper risk text (post-T0) would have changed §9 (**Unknown**) | Header source-retrieval note | No closure path available from P0 material dated on or before T0; recorded as a permanent limitation of this report |

With one exception, noted above and carried deliberately, no open item lacks a closure path. No signal requires non-public information. No signal is expressed as a trading trigger, entry condition, or action.

---

*Report produced under `RESEARCH_REPORT_STANDARD.md` v1.1 (repository version; sprint attribution and confidence rules applied). Three P0 sources, T0-locked to 2010-02-22. Contains no investment recommendation, no valuation or securities-price information, and no timing signal. All Unknown items remain Unknown.*
