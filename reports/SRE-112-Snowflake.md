# SRE-112 — Snowflake

| Field | Value |
| --- | --- |
| Subject | Snowflake Elastic Data Warehouse (cloud data warehouse service) — emergence from stealth |
| T0 (frozen date) | 2014-10-21 |
| Industry domain | Cloud Infrastructure / Data Warehousing |
| T0 source A | Snowflake Computing, official press release via Marketwired / GlobeNewswire, 2014-10-21 — “Snowflake Raises $26M in Funding to Reinvent the Data Warehouse” (`globenewswire.com` news-release; Source: Snowflake Computing) |
| T0 source B | Snowflake Computing, official press release via Marketwired, 2014-10-21 — “Snowflake Reinvents the Data Warehouse for the Cloud” (Marketwired wire text; same-day product announcement cross-referenced in Source A) |
| Standards applied | `SRE_PRODUCT_SPEC.md` v1.0, `RESEARCH_REPORT_STANDARD.md` v1.1 (repository; sprint attribution / confidence / traceability rules applied as stated for this run), `VALUE_CAPTURE_METHODOLOGY.md` v1.0, `SRE_GLOSSARY.md` v1.0, `MISSION.md` |

Two P0 documents, both first-party Snowflake Computing announcements dated **October 21, 2014**, cited as **[A]** and **[B]**. Source A is the funding / stealth-exit release that also unveils the product; Source B is the same-day product release that details architecture, capabilities, beta availability, and customer quotes. Nothing published after T0 is used.

**Source-retrieval note.** Both texts are Marketwired releases attributed to Snowflake Computing. Source A was retrieved from GlobeNewswire’s hosting of that wire. Source B’s Marketwired body was retrieved from a contemporaneous wire republication that preserves the Marketwired dateline, Snowflake attribution, and full release body. Whether any character-level difference exists versus the page as originally served on snowflake.net is **Unknown**; claims used below appear in the attributed Snowflake Computing wire text.

Evidence labels used: Evidence-supported, Reasoned Inference, Hypothesis, Unknown (`SRE_GLOSSARY.md` v1.0). Confidence levels: High, Medium, Low (`VALUE_CAPTURE_METHODOLOGY.md` §6).

---

## 1. Executive Summary

Snowflake Computing emerged from stealth on October 21, 2014, announcing the Snowflake Elastic Data Warehouse™ as a data warehouse built from the ground up as a cloud service, alongside $26 million in funding from Redpoint Ventures, Sutter Hill Ventures, and Wing Ventures [facts 1–4, 10, 11]. Snowflake states a patent-pending architecture that brings together all users, all data, and all workloads in a single SQL data warehouse, delivering SQL data warehousing, big-data flexibility, and cloud elasticity at a claimed 90 percent lower cost than on-premises data warehouses [facts 5–7, 12, 13]. Source B states the architecture decouples storage from compute; offers data warehousing as a service with multidimensional elasticity; and natively stores and queries semi-structured data alongside structured data in one relational SQL system; the service is available in beta for qualified organizations [facts 14–20]. *(Evidence-supported)*

**Key conclusion.** Value migrates from complex, inflexible, expensive on-premises data warehouses (and from specialist-operated “big data” platforms not designed for the cloud) toward a cloud-native elastic SQL data warehouse service that separates storage from compute and combines structured and semi-structured data in one system — if beta customers convert and the cost/elasticity claims hold. *(Reasoned Inference, Medium)*

**Tier 1 is assigned; magnitude is not established.** Snowflake occupies the position: it owns the cloud service, discloses a patent-pending storage/compute-decoupled architecture, and sells warehousing as a service rather than as customer-managed infrastructure [facts 4, 5, 14–17]. No price list, margin, or contract term appears beyond customer language about pay-for-what-you-use and a vendor 90% cost claim [facts 7, 22]. The position is evidenced; the share of economic profit retained is **Unknown**. *(Reasoned Inference for the position, Medium; Unknown for the share)*

**Top companies for further research — not recommendations, not ranked by attractiveness.**

- **Snowflake Computing** — operates the Elastic Data Warehouse cloud service. Tier 1; share retained Unknown. Listing status not established by the T0 sources. *(Reasoned Inference, Medium)*

Market blind spot: treating the launch as another big-data or Hadoop-adjacent tool while underweighting SQL warehouse displacement to a cloud service that claims to remove database administration and independently scale users, data, and workloads. *(Reasoned Inference, Medium)*

---

## 2. Evidence

Verified facts only. Each is stated in one of the two T0 sources without interpretation. Customer and investor statements reproduced in the releases are recorded as statements Snowflake published. Future-tense content appears only where the source states it, attributed to Snowflake or the quoted party.

**From Source A — funding and stealth exit**

1. Snowflake Computing, described as the cloud data warehousing company, announced on October 21, 2014 (Marketwired, San Mateo, CA) that it has raised a total of $26 million in funding from Redpoint Ventures, Sutter Hill Ventures, and Wing Ventures. [A]
2. Snowflake states the funding will be used to expand its team to accelerate product development, build out customer and partner ecosystems, and deliver on the vision to reinvent the data warehouse for the cloud. [A]
3. Bob Muglia, CEO of Snowflake, is quoted stating there has been “shockingly little innovation in data warehousing in a decade,” creating a “huge and largely unaddressed market opportunity” to create a data warehouse designed for today’s and tomorrow’s data, analytics, and technology innovations, and that the funding will further accelerate product innovation and support go-to-market strategy and investments. [A]
4. Snowflake states that today it emerged from stealth to announce the Snowflake Elastic Data Warehouse™, “a completely new data warehouse built from the ground up as a cloud service.” [A]
5. Snowflake states the Elastic Data Warehouse introduces an architecture “uniquely able to bring together all users, all data and all workloads in a single SQL data warehouse.” [A]
6. Snowflake states its patent-pending architecture delivers “the power of SQL data warehousing, the flexibility of big data platforms and the elasticity of the cloud.” [A]
7. Snowflake states this is delivered “at a 90 percent lower cost than on-premises data warehouses.” [A]
8. Snowflake states its team includes data experts from companies including Actian, Cloudera, Google, Microsoft, Oracle, and Teradata, and holds over 120 patents in databases and data processing. [A]
9. Snowflake states its most recent Series B was led by Redpoint Ventures and joined by Sutter Hill Ventures (seed and Series A lead) and Wing Ventures; John Walecka of Redpoint joined the board; the board also includes Mike Speiser of Sutter Hill Ventures and John McMahon. [A]
10. Snowflake states it was founded in 2012, is headquartered in Silicon Valley, and can be found online at www.snowflake.net. [A]

**From Source B — product announcement**

11. Snowflake Computing today announced the Snowflake Elastic Data Warehouse™ as “the first data warehouse built from the ground up for the cloud.” [B]
12. Snowflake states that while data and how it is used have changed dramatically, traditional data warehouses remain too complex, inflexible, and expensive, and that newer “big data” platforms still require specialized expertise of operations and data science experts. [B]
13. Snowflake states that because none of these solutions were designed for the cloud, they are unable to leverage the full power of cloud computing. [B]
14. Snowflake states the Elastic Data Warehouse’s patent-pending architecture “decouples data storage from compute,” making it “uniquely able to take advantage of the elasticity, scalability and flexibility of the cloud.” [B]
15. Snowflake states that as a native relational database with full support for standard SQL, it empowers any analyst with self-service access to data so organizations can use tools and skills they already have. [B]
16. Muglia is quoted stating today’s solutions are based on architectures that date back almost 30 years; that analytics infrastructure requirements are prohibitive; that the cloud enables a different approach requiring starting from scratch; and that from day one Snowflake focused on a software service bringing together transactional and machine-generated data. [B]
17. Snowflake states the service uniquely delivers “Data warehousing as a service,” eliminating pains of managing and tuning a database so analysts can focus on getting value from data rather than managing hardware and software. [B]
18. Snowflake states “Multidimensional elasticity”: elastic scaling technology makes it possible to independently scale users, data, and workloads; simultaneous load and query because every user and workload can have exactly the resources needed without contention. [B]
19. Snowflake states “Single service for all business data”: native storage of semi-structured data in a relational database that understands and optimizes querying of that data, so analysts can query structured and semi-structured data in a single system without compromise. [B]
20. Snowflake states the Elastic Data Warehouse is currently available in beta for qualified organizations, with contact at customer@snowflake.net. [B]
21. Source B states that in a separate announcement the same day, Snowflake disclosed $26 million in funding from Redpoint, Sutter Hill, and Wing Ventures. [B]
22. Justin Glatz of Condé Nast is quoted stating the traditional data warehouse environment is a “permanent and perpetual cost,” that Snowflake is introducing the “pay-for-what-you-use model” for their business, and that Snowflake provides a cloud foundation for data warehouses enabling more iterative questions of data. [B]
23. David Weinstein of Adobe is quoted stating Adobe evaluated several data warehousing offerings for Adobe AudienceManager; that flexibility from separating compute from storage provides on-demand access at required performance and scale; and that testing indicated Snowflake’s cost/performance ratio could exceed alternate cloud-based solutions. [B]
24. James Rooney of Accordant Media is quoted stating partnering with Snowflake enables answering harder questions on large datasets, with responses in about five minutes instead of an hour. [B]
25. Tamer Hassan of White Ops is quoted stating Snowflake unlocks large datasets so business analysts, developers, and account managers can ask questions directly of the data. [B]
26. Jeff Shukis of VoiceBase is quoted stating Snowflake offers zero administration, extremely fast loading of JSON data directly from Amazon’s S3 cloud storage, elastic scale-up and scale-down of storage and compute with no downtime, and a true SQL interface with analytic functions, calling it the first analytic database that really leverages the power of the cloud. [B]
27. John L. Myers of EMA is quoted stating relational data warehouses have a critical role but conventional approaches can be too expensive, complex, and inflexible, and that Snowflake addresses these issues with a unique cloud approach. [B]

**Not stated in either T0 source, and therefore Unknown:** any published price list, rate card, or unit price for the service; any Snowflake margin or cost of delivery; any general-availability date; any service level agreement; the methodology behind the “90 percent lower cost” claim; any named competing product by Snowflake itself (customers refer generically to alternate cloud-based solutions); public-listing or ticker status for Snowflake or any named company; any contract term, minimum commit, or switching cost; and any statement that storage/compute decoupling cannot be replicated by others. *(Unknown)*

---

## 3. Customer Problem

**What end-user problem changed.** Organizations need analytic access to growing, mixed data without the cost, complexity, and inflexibility of traditional data warehouses and without staffing specialist “big data” platforms. Snowflake states traditional warehouses remain too complex, inflexible, and expensive; big-data platforms still need specialized ops/data-science expertise; and neither class was designed for the cloud [facts 12, 13, 16]. Muglia frames infrastructure requirements for analytics as prohibitive [fact 16]. *(Evidence-supported)*

Three components are distinguishable:

- **Cost and administration burden.** On-premises comparison at 90% lower cost; warehousing as a service eliminating manage/tune work; customer “pay-for-what-you-use” language [facts 7, 17, 22]. *(Evidence-supported that sources make these claims)*
- **Elasticity / contention.** Independent scale of users, data, and workloads; simultaneous load and query without contention [fact 18]. *(Evidence-supported)*
- **Mixed data in one SQL system.** Structured and semi-structured (including JSON) in one relational SQL service [facts 15, 19, 26]. *(Evidence-supported)*

**Who is worse off without it:** analysts and organizations blocked by warehouse cost/complexity or by specialist-only big-data stacks — the audience Snowflake and quoted customers describe [facts 12, 15, 22–26]. Absolute willingness-to-pay and population size are not disclosed. Magnitude of the customer problem is **Unknown**.

---

## 4. Industry Change

**The concrete change.** A SQL data warehouse is offered as a cloud service built from the ground up for the cloud, with patent-pending decoupling of storage from compute, entering beta for qualified organizations [facts 4, 11, 14, 17, 20]. *(Evidence-supported)*

**Which system requirement shifts.**

1. **From on-premises / non-cloud-designed warehouses to cloud-native warehousing as a service.** Built from the ground up as/for the cloud; DWaaS eliminating hardware/software management [facts 4, 11, 13, 17]. *(Evidence-supported)*
2. **From coupled scale-up of warehouse resources to independent scaling of storage, compute, users, and workloads.** Decoupling and multidimensional elasticity [facts 14, 18]. *(Evidence-supported)*
3. **From separate structured DW vs specialist big-data stacks toward one SQL system for structured and semi-structured data.** Single service claim [facts 5, 12, 19]. *(Evidence-supported)*

**Why the prior solution becomes insufficient.** Snowflake argues traditional warehouses are too complex/inflexible/expensive and big-data platforms require specialists, and that neither leverages cloud fully because they were not designed for it [facts 12, 13, 16]. *(Evidence-supported as Snowflake’s claim; Reasoned Inference for industry implication)*

**Structural or cyclical.** Structural if the service model sticks: buyers purchase elastic cloud warehouse capacity rather than owning/tuning warehouse infrastructure, and query mixed data types through standard SQL [facts 15, 17, 18, 20]. At T0 the offering is beta only [fact 20]. *(Reasoned Inference)*

---

## 5. Value Chain Analysis

**Purpose.** Map how value flows after §4. No winner is identified here.

| Layer | Role | Scarcity | Bottleneck | Expected Value Change | Evidence Label |
| --- | --- | --- | --- | --- | --- |
| Cloud object storage (e.g. Amazon S3 as used by a customer) | Source for loading JSON / data into the warehouse [fact 26] | Unknown | No | ↑ | Hypothesis |
| Cloud compute / elastic infrastructure | Underpins cloud elasticity Snowflake claims to exploit [facts 6, 13, 14] | Unknown | No | ↑ | Hypothesis |
| On-premises / traditional data warehouse systems | Prior complex, inflexible, expensive path [facts 7, 12, 16] | No | No | ↓ | Reasoned Inference |
| Specialist “big data” platforms | Prior path requiring ops/data-science experts [fact 12] | Unknown | No | ↓ | Reasoned Inference |
| Cloud-native elastic SQL data warehouse service (Snowflake) | DWaaS; storage/compute decoupling; SQL; mixed data; beta [facts 4, 14, 15, 17–20] | Unknown | Yes | ↑ | Reasoned Inference |
| Patent-pending database architecture / IP | Architecture Snowflake describes as patent-pending [facts 6, 14] | Unknown | No | ↑ | Hypothesis |
| Existing SQL / BI analyst tools and skills | Consumed via standard SQL self-service [facts 15, 25] | No | No | ↑ | Reasoned Inference |
| Early design-partner / beta customers | Condé Nast, Adobe, Accordant Media, White Ops, VoiceBase quoted [facts 22–26] | No | No | ↑ | Hypothesis |
| Venture funding / go-to-market capacity | $26M to expand team, product, ecosystems [facts 1, 2] | Unknown | No | ↑ | Hypothesis |

**Layers with no company named as supplier.** Cloud compute fabric and general cloud IaaS are implied by “cloud service” language but no infrastructure vendor is named by Snowflake as a partner (Amazon S3 appears only inside a customer quote) [facts 4, 26]. No competing warehouse vendor is named by Snowflake. Per `RESEARCH_REPORT_STANDARD.md` §5, none is inferred.

**Reading notes.**

- Exactly one layer is `Bottleneck: Yes` — the cloud-native elastic SQL DW service — as `Reasoned Inference` from Snowflake’s claim that prior warehouses and big-data platforms fail cost/flexibility/cloud-design tests and that its service uniquely combines SQL, elasticity, and mixed data [facts 12–19]. Scarcity of that layer is **Unknown** (no exclusivity proof).
- Two layers carry `↓`: traditional on-premises warehouses and specialist big-data platforms [facts 7, 12].
- Cloud object storage / compute are `↑` only as `Hypothesis` from customer and architecture language.

No winner is identified in this section.

---

## 6. Value Migration

**Where value moves — origin and destination both named.**

| From (origin layer) | To (destination layer) | Basis |
| --- | --- | --- |
| On-premises / traditional data warehouse systems | Cloud-native elastic SQL data warehouse service (Snowflake) | Facts 4, 7, 11–13, 17 |
| Specialist “big data” platforms requiring experts | Single SQL service for structured and semi-structured data | Facts 12, 15, 19 |
| Coupled warehouse capacity management / tuning | Independently elastic storage, compute, users, and workloads (DWaaS) | Facts 14, 17, 18 |
| Capex-like permanent warehouse cost | Metered / pay-for-what-you-use cloud warehouse consumption (as customers describe) | Facts 7, 22 |

**Why the migration follows.**

1. Snowflake states traditional warehouses and non-cloud-designed big-data platforms leave cost, complexity, flexibility, and cloud-leverage gaps [facts 12, 13, 16]. *(Evidence-supported as claim)*
2. It offers a cloud-built SQL warehouse with storage/compute decoupling, DWaaS, and mixed-data SQL [facts 4, 14, 15, 17–19]. *(Evidence-supported)*
3. It prices the comparison as dramatically lower cost versus on-premises and enters beta [facts 7, 20]. *(Evidence-supported as claim)*
4. Therefore value migrates toward cloud-native elastic SQL warehouse services and away from owned traditional warehouses and specialist-only big-data stacks — if adoption follows. *(Reasoned Inference)*

**Links not established.** Magnitude of profit migration is **Unknown** (no price list; 90% figure unexplained). Whether beta becomes GA is not stated. *(Unknown)*

**Confidence on the migration as a whole: Medium.** *(Reasoned Inference)* Direction is well supported by problem/remedy structure and customer quotes. Against that: beta-only availability, vendor cost claim without methodology, and no named competitor. Under `VALUE_CAPTURE_METHODOLOGY.md` §6, undisclosed load-bearing elements cap confidence below High.

**Statement of standing.** Potential value reallocation. Requires later market verification.

---

## 7. Value Capture

Per `VALUE_CAPTURE_METHODOLOGY.md`: value creation is not value capture. Faster queries and lower warehouse cost are *creation* claims [facts 7, 24]; the question is who retains surplus. Every conclusion below carries exactly one evidence label and one confidence level.

**Step 1 — Industry bottleneck.** Delivering SQL data warehousing that is elastic in the cloud, administratively light, and able to handle structured and semi-structured data without specialist big-data stacks [facts 12–19]. *(Reasoned Inference, Medium)*

**Step 2 — Scarce capability.** Snowflake’s combination of a cloud-native service with patent-pending storage/compute decoupling and mixed-data SQL in one warehouse [facts 4, 14, 19]. Whether that combination is narrowly held is **Unknown** (patent-pending is stated; exclusivity is not). *(Reasoned Inference, Medium)*

**Step 3 — Value migration.** As in §6: toward cloud-native elastic SQL DW services; away from traditional on-premises warehouses and specialist big-data platforms.

**Step 4 — Economic profit capture.** No rate card or margin is disclosed. Customer “pay-for-what-you-use” language and the 90% cost claim do not measure retained economic profit [facts 7, 22]. Magnitude is **Unknown**. *(Unknown, Low)*

**Step 5 — Ranking.**

### Tier 1 — Direct Value Capturer

**Snowflake Computing** *(Reasoned Inference, Medium)*

Retention mechanism, in three parts:

1. **Owns the service productization path.** Elastic Data Warehouse is Snowflake’s cloud service, available in beta through Snowflake [facts 4, 11, 17, 20]. *(Reasoned Inference, Medium)*
2. **Architecture control.** Patent-pending decoupling of storage from compute and multidimensional elasticity are disclosed as Snowflake’s design [facts 6, 14, 18]. *(Reasoned Inference, Medium)*
3. **Switching via accumulated warehouse data and SQL workloads in the service.** Customers describe iterative querying and loading (including from external object storage) into Snowflake [facts 22–26]. Durability of that switching cost is not proven at T0. *(Reasoned Inference, Low)*

**Counter-evidence recorded.** Service is beta-only [fact 20]; 90% cost claim lacks methodology [fact 7]; Adobe compared alternate cloud-based solutions [fact 23]; patents are “patent-pending,” not adjudicated exclusivity [facts 6, 14]; no price or margin appears. These keep confidence at Medium and magnitude at Unknown. *(Reasoned Inference, Medium)*

**Magnitude of capture: Unknown.** *(Unknown, Low)*

### Tier 2 — Direct Beneficiary

**Vacant.** *(Reasoned Inference, Medium)* Cloud IaaS/object-storage providers would be natural candidates from architecture and the VoiceBase S3 quote [facts 14, 26], but Snowflake does not name a commercial infrastructure partner or show first-order retained surplus for any such firm. Naming Amazon as Tier 2 from a customer quote alone would be an inferred participant upgrade and is forbidden.

### Tier 3 — Indirect Beneficiary

**Early quoted customers (Condé Nast, Adobe, Accordant Media, White Ops, VoiceBase)** *(Reasoned Inference, Low)* Second-order path: they gain query speed, elasticity, or pay-for-use economics using the service [facts 22–26]. Retention mechanism: none disclosed; they are buyers, not capturers of platform surplus. Under the methodology, exposure without retention is not capture — recorded as Tier 3 only for completeness of named users, not as preferred research targets.

### Tier 4 — Potential Beneficiary

- **Cloud infrastructure / object-storage operators (unattributed except S3 mention)** *(Hypothesis, Low)* Elastic DW may increase cloud consumption [facts 14, 26]. Identity and terms Unknown.
- **Redpoint / Sutter Hill / Wing Ventures** *(Unknown, Low)* Named as funders [facts 1, 9]; no product capture path.
- **End-user analysts more broadly** *(Hypothesis, Low)* Self-service SQL claims [facts 15, 17] may pass surplus to buyers via lower cost.

**Alternative explanations.** That cloud hyperscalers replicate storage/compute-decoupled SQL DW and capture the category — possible; not excluded [fact 23] *(Hypothesis, Low)*. That most surplus accrues to customers via 90% cost reduction — consistent with creation language and not excluded *(Hypothesis, Low)*. That beta never reaches durable GA adoption — possible *(Unknown, Low)*.

---

## 8. Listed Companies

Publicly listed participants named in the T0 sources. **Not ranked; not a recommendation; no valuation.**

**Inclusion rule.** Enter only if the T0 source names the entity and that named entity is established by the T0 source as the publicly listed company (not an inferred parent). Thin alumni or quote-only names are omitted when listing is not established.

| Company | Role | Why | Evidence | Confidence |
| --- | --- | --- | --- | --- |

**Why this table has zero rows.** The sources name Snowflake Computing; investors Redpoint, Sutter Hill, and Wing; alumni employers Actian, Cloudera, Google, Microsoft, Oracle, and Teradata; customers Condé Nast, Adobe, Accordant Media, White Ops, and VoiceBase; EMA; and Amazon (S3) inside a customer quote [facts 1, 8, 9, 22–27]. None of these texts states that any named entity is publicly listed or supplies a ticker/exchange designation. Inferring listing status would violate the inclusion rule used in prior compliant reports.

**Named in the sources but excluded from this table.**

- **Snowflake Computing** [facts 1, 4, 10, 11] — Tier 1 operator in §7; listing not established.
- **Adobe** [fact 23] — early customer quote; listing not established; no capture path as platform owner.
- **Microsoft, Oracle, Google, Teradata, Cloudera, Actian** [fact 8] — alumni employers only; omitted.
- **Amazon** [fact 26] — appears only as S3 in a customer quote; omitted as thin infrastructure adjacency.
- **Condé Nast, Accordant Media, White Ops, VoiceBase** [facts 22, 24–26] — customers; listing not established.
- **Redpoint Ventures, Sutter Hill Ventures, Wing Ventures** [facts 1, 9] — investors; omitted.
- **Parametric Technology Corporation (PTC), BMC Software, BladeLogic, Pure Storage, Platfora, Sumo Logic, Sybase, Documentum, Datameer** [fact 9 / Source A board bios] — appear only in investor/board career or prior-investment context; no Snowflake capture path; omitted.

**Layers with no row.** Cloud compute fabric and competing warehouse vendors remain unattributed.

**Displaced participants.** Traditional on-premises warehouse and specialist big-data platform *functions* are marked `↓` in §5. No company is named by Snowflake as the displaced incumbent. *(Unknown)*

---

## 9. Risks

### Assumptions that could fail

1. **Beta converts to sustained production use** — supports §§4–7. Availability is beta for qualified organizations only [fact 20]. *(Unknown at T0)*
2. **90% lower cost versus on-premises holds under customer TCO** — supports migration and creation claims [fact 7]. Methodology undisclosed. *(Unknown)*
3. **Storage/compute decoupling remains a differentiating scarce design** — supports Tier 1 mechanism 2 [facts 14, 18]. Replicable by others: Unknown. *(Hypothesis)*
4. **Customers accept pay-for-what-you-use cloud warehouse economics** — supports migration to metered consumption [fact 22]. *(Reasoned Inference)*
5. **Standard SQL self-service actually displaces specialist stacks for mixed data** — supports §4 shift 3 [facts 15, 19]. *(Hypothesis)*
6. **Patent-pending claims mature into enforceable retention** — supports scarcity narrative [facts 6, 14]. *(Unknown)*

### What would weaken the thesis

- Beta stalling without GA-scale adoption.
- Realized savings far below the 90% claim.
- Hyperscaler cloud warehouses matching storage/compute decoupling and SQL mixed-data features at similar cost.
- Most surplus accruing to customers via price competition while Snowflake remains a low-margin conduit.

### What would invalidate the thesis

- **Snowflake abandoning the Elastic Data Warehouse or failing to operate it as a cloud service**, so the migration destination does not exist.
- **Economic profit from cloud elastic SQL warehousing accruing primarily to an unnamed infrastructure layer**, such that Snowflake does not retain Tier 1 surplus.
- **Traditional on-premises warehouses remaining the dominant analytic store for the workloads Snowflake targets**, reversing the migration.
- **A portable standard or open architecture making Snowflake’s service interchangeable with no switching cost**, removing the retention mechanism.

Weakening and invalidating conditions are kept separate deliberately: the first set reduces the size of the conclusion; the last set replaces it.

---

## 10. Monitoring Signals

Each signal names the P0 source class where it would become visible, a horizon measured from T0, and what its absence by that point would imply.

| # | Signal | Source class | Horizon | Absence implies |
| ---: | --- | --- | --- | --- |
| 1 | General availability announcement of Elastic Data Warehouse | Snowflake official announcements / wires | 2–8 quarters | Assumption 1 unresolved; remains beta-only |
| 2 | Published pricing / rate card or usage billing terms | Snowflake official site and announcements | 1–4 quarters | Magnitude of capture stays Unknown |
| 3 | Customer production case studies beyond launch quotes | Snowflake and customer official announcements | 2–8 quarters | Early-adopter Hypothesis unresolved |
| 4 | Disclosure of revenue, billings, or usage growth | Snowflake official announcements or (if later public) filings | 4–12 quarters | Step 4 magnitude stays Unknown |
| 5 | Competing cloud SQL DW launches claiming storage/compute decoupling | Competitor official announcements | 2–12 quarters | Assumption 3 / differentiation untested |
| 6 | Patent grants covering the announced architecture | Patent office / Snowflake official statements | 4–20 quarters | Assumption 6 unresolved |
| 7 | Partner ecosystem announcements (BI, ETL, cloud marketplaces) | Snowflake and partner official announcements | 2–8 quarters | Funding use-of-proceeds ecosystem claim [fact 2] unverified |
| 8 | Independent or customer TCO vs on-premises / alternate cloud DW | Customer disclosures; technical publications | 2–8 quarters | Assumption 2 unresolved |
| 9 | Semi-structured / JSON workload share vs structured-only use | Snowflake official product metrics or case studies | 4–12 quarters | Mixed-data migration link unverified |
| 10 | Any listing / IPO disclosure establishing Snowflake as public | Official offering documents / exchange notices | Any time | §8 remains empty on listing grounds |
| 11 | Service reliability / SLA commitments | Snowflake official terms | 2–8 quarters | Production suitability beyond beta unstated |
| 12 | Evidence of multi-cloud or on-prem deployment options vs pure cloud service | Snowflake official documentation | 4–12 quarters | Cloud-native lock-in / scope clarified |

### Closure paths for every open item

Per `RESEARCH_REPORT_STANDARD.md` §10 and `VALUE_CAPTURE_METHODOLOGY.md` §7, every `Hypothesis` and `Unknown` recorded in §§5–8 has a closure path above.

| Open item | Recorded in | Closes via |
| --- | --- | --- |
| Cloud object storage / compute direction (**Hypothesis**) | §5, §7 Tier 2 vacant | Signals 5, 12 |
| Architecture IP scarcity (**Hypothesis** / **Unknown**) | §5, §9 assumption 6 | Signal 6 |
| Early-customer surplus (**Hypothesis**) | §5, §7 Tier 3 | Signals 3, 8 |
| Funding/ecosystem path (**Hypothesis**) | §5 | Signal 7 |
| End-user analyst surplus (**Hypothesis**) | §7 Tier 4 | Signals 2, 8 |
| Magnitude of capture (**Unknown**) | §1, §7 Step 4 | Signals 2, 4, 8 |
| Beta → durable adoption (**Unknown**) | §4, §9 assumption 1 | Signals 1, 3, 11 |
| 90% cost claim (**Unknown**) | §9 assumption 2 | Signal 8 |
| Differentiation durability (**Hypothesis**) | §9 assumption 3 | Signals 5, 6 |
| Listing status for §8 (**Unknown**) | §8 | Signal 10 |
| Customer-problem magnitude (**Unknown**) | §3 | Signals 3, 4, 8 |
| Displaced incumbent identity (**Unknown**) | §5, §8 | Signal 5 |

No open item lacks a closure path. No signal requires non-public information. No signal is expressed as a trading trigger, entry condition, or action.

---

*Report produced under `RESEARCH_REPORT_STANDARD.md` v1.1 (repository version; sprint attribution and confidence rules applied) and `MISSION.md`. Two P0 Snowflake Computing announcements, T0-locked to 2014-10-21. Contains no investment recommendation, no valuation or securities-price information, and no timing signal. Cost-percentage claims appear only as facts stated by the source. All Unknown items remain Unknown.*
