# SRE-118 — Databricks Lakehouse

| Field | Value |
| --- | --- |
| Subject | Databricks Lakehouse — open data management architecture combining lakes and warehouses |
| T0 (frozen date) | 2020-01-30 |
| Industry domain | Cloud Infrastructure / Data platforms |
| T0 source | Databricks Blog — Ben Lorica, Michael Armbrust, Reynold Xin, Matei Zaharia, and Ali Ghodsi, “What Is a Lakehouse?”, January 30, 2020 (`databricks.com/blog/2020/01/30/what-is-a-data-lakehouse.html`) |
| Standards applied | `SRE_PRODUCT_SPEC.md` v1.0, `RESEARCH_REPORT_STANDARD.md` v1.1 (repository; sprint attribution / confidence / traceability rules applied as stated for this run), `VALUE_CAPTURE_METHODOLOGY.md` v1.0, `SRE_GLOSSARY.md` v1.0, `MISSION.md` |

Single-source report. All content derives from the one P0 Databricks announcement above — the earliest official Databricks post defining the lakehouse architecture — cited throughout as **[Databricks, What Is a Lakehouse?, 2020-01-30]**. Nothing published after T0 is used. Later Databricks SQL / “lakehouse realized” posts and the CIDR research paper linked from the page are excluded unless restated in this T0 body.

**Source-retrieval note.** The frozen case date is **2020-01-30**. Facts below are taken from the official Databricks Blog post of that date. Live-site chrome dated after T0 (for example footer copyright year) is not used as evidence. Whether any character-level difference exists versus the page as first served is **Unknown**; the retrieved body is used as the official T0 text.

Evidence labels used: Evidence-supported, Reasoned Inference, Hypothesis, Unknown (`SRE_GLOSSARY.md` v1.0). Confidence levels: High, Medium, Low (`VALUE_CAPTURE_METHODOLOGY.md` §6).

---

## 1. Executive Summary

Databricks announced the lakehouse as “a new, open architecture that combines the best elements of data lakes and data warehouses,” enabled by implementing warehouse-like data structures and management features on low-cost cloud object storage in open formats [facts 1, 8, 9]. Databricks states warehouses handle structured BI poorly for unstructured/semi-structured, high-variety data and are not the most cost efficient, while data lakes lack transactions, data quality, and consistency/isolation for mixed appends/reads and batch/streaming — pushing enterprises to multi-system stacks with copy delay [facts 2–7]. Key lakehouse features listed include ACID transactions, schema enforcement/governance, BI on source data, decoupled storage and compute, openness (e.g. Parquet APIs), diverse data types and workloads, and end-to-end streaming [facts 10–17]. Databricks states the Databricks Lakehouse Platform has these architectural features; names Microsoft’s Azure Synapse Analytics (integrating with Azure Databricks) as enabling a similar pattern; says BigQuery and Redshift Spectrum have some features focused on BI/SQL; and points builders to open formats Delta Lake, Apache Iceberg, and Apache Hudi [facts 20–22]. *(Evidence-supported)*

**Key conclusion.** Value migrates from multi-system lake-plus-warehouse (and specialized) stacks toward a single open lakehouse repository on cloud object storage — if enterprises adopt the pattern and implementations mature past acknowledged performance and UX gaps. *(Reasoned Inference, Medium)*

**Tier 1 is vacant; magnitude is not established.** Databricks presents an open architecture with multiple early examples (its own platform, Azure Synapse pattern, partial BigQuery/Redshift Spectrum features, and DIY open formats) [facts 9, 20–22]. No exclusive control, pricing, or switching-cost mechanism is disclosed [see the §2 Unknown list]. Under `VALUE_CAPTURE_METHODOLOGY.md`, vacant Tier 1 is a valid finding. Share of economic profit retained by any party is **Unknown**. *(Reasoned Inference for vacancy, Medium; Unknown for the share)*

**Top companies for further research — not recommendations, not ranked by attractiveness.**

- **Databricks, Inc.** — authors the lakehouse framing; states Databricks Lakehouse Platform has lakehouse features. Tier 2 candidate in §7. Listing status not established. *(Reasoned Inference, Medium)*
- **Microsoft** — Azure Synapse Analytics / Azure Databricks named as enabling a similar lakehouse pattern. *(Hypothesis, Low)*

Market blind spot: treating the post as branding for a Databricks product only while underweighting the structural claim — warehouse management features on open, low-cost object-store lakes as a category architecture that Databricks says others can also implement. *(Reasoned Inference, Medium)*

---

## 2. Evidence

Verified facts only. Each is stated in the T0 Databricks source without interpretation. Future-tense content appears only where Databricks states it, attributed to Databricks.

1. The post is titled “What Is a Lakehouse?”, dated January 30, 2020, on the Databricks Blog, by Ben Lorica, Michael Armbrust, Reynold Xin, Matei Zaharia, and Ali Ghodsi. [Databricks, What Is a Lakehouse?, 2020-01-30]
2. Databricks states that over the past few years it has seen a new data management architecture emerge independently across many customers and use cases: the lakehouse. [Databricks, What Is a Lakehouse?, 2020-01-30]
3. Databricks states data warehouses have a long history in decision support and BI; MPP architectures handled larger data sizes; warehouses were great for structured data; but modern enterprises deal with unstructured and semi-structured data and data with high variety, velocity, and volume for which warehouses are not suited and “are certainly not the most cost efficient.” [Databricks, What Is a Lakehouse?, 2020-01-30]
4. Databricks states that about a decade ago companies began building data lakes — repositories for raw data in a variety of formats. [Databricks, What Is a Lakehouse?, 2020-01-30]
5. Databricks states data lakes “do not support transactions, they do not enforce data quality, and their lack of consistency / isolation makes it almost impossible to mix appends and reads, and batch and streaming jobs,” and that many promises of data lakes have not materialized, in many cases losing benefits of data warehouses. [Databricks, What Is a Lakehouse?, 2020-01-30]
6. Databricks states companies require systems for diverse applications including SQL analytics, real-time monitoring, data science, and machine learning, and that recent AI advances process unstructured data (text, images, video, audio) that warehouses are not optimized for. [Databricks, What Is a Lakehouse?, 2020-01-30]
7. Databricks states a common approach is to use multiple systems — a data lake, several data warehouses, and specialized systems such as streaming, time-series, graph, and image databases — which “introduces complexity and more importantly, introduces delay as data professionals invariably need to move or copy data between different systems.” [Databricks, What Is a Lakehouse?, 2020-01-30]
8. Databricks states new systems are beginning to emerge that address data-lake limitations. [Databricks, What Is a Lakehouse?, 2020-01-30]
9. Databricks states: “A lakehouse is a new, open architecture that combines the best elements of data lakes and data warehouses,” enabled by “implementing similar data structures and data management features to those in a data warehouse directly on top of low cost cloud storage in open formats,” likened to redesigning warehouses now that “cheap and highly reliable storage (in the form of object stores) are available.” [Databricks, What Is a Lakehouse?, 2020-01-30]
10. Databricks states a lakehouse has transaction support: ACID transactions ensure consistency as multiple parties concurrently read or write data, typically using SQL. [Databricks, What Is a Lakehouse?, 2020-01-30]
11. Databricks states a lakehouse should support schema enforcement and evolution (including star/snowflake-schemas), reason about data integrity, and have robust governance and auditing mechanisms. [Databricks, What Is a Lakehouse?, 2020-01-30]
12. Databricks states lakehouses enable using BI tools directly on the source data, which “reduces staleness and improves recency, reduces latency, and lowers the cost of having to operationalize two copies of the data in both a data lake and a warehouse.” [Databricks, What Is a Lakehouse?, 2020-01-30]
13. Databricks states storage is decoupled from compute via separate clusters, scaling to more concurrent users and larger data sizes, and that some modern data warehouses also have this property. [Databricks, What Is a Lakehouse?, 2020-01-30]
14. Databricks states openness: storage formats are open and standardized, “such as Parquet,” with an API so tools and engines including machine learning and Python/R libraries can access data directly. [Databricks, What Is a Lakehouse?, 2020-01-30]
15. Databricks states support for diverse data types from unstructured to structured, including images, video, audio, semi-structured data, and text. [Databricks, What Is a Lakehouse?, 2020-01-30]
16. Databricks states support for diverse workloads including data science, machine learning, and SQL and analytics, with multiple tools possibly needed but all relying on the same data repository. [Databricks, What Is a Lakehouse?, 2020-01-30]
17. Databricks states end-to-end streaming support “eliminates the need for separate systems dedicated to serving real-time data applications.” [Databricks, What Is a Lakehouse?, 2020-01-30]
18. Databricks states enterprise-grade systems also need security and access control, governance (auditing, retention, lineage) especially given privacy regulations, and discovery tools such as data catalogs and usage metrics, and that with a lakehouse such features “only need to be implemented, tested, and administered for a single system.” [Databricks, What Is a Lakehouse?, 2020-01-30]
19. Databricks points readers to “the full research paper on the inner workings of the Lakehouse” and to an FAQ on Data Lakehouse. [Databricks, What Is a Lakehouse?, 2020-01-30]
20. Databricks states: “The Databricks Lakehouse Platform has the architectural features of a lakehouse.” [Databricks, What Is a Lakehouse?, 2020-01-30]
21. Databricks states Microsoft’s Azure Synapse Analytics service, which integrates with Azure Databricks, “enables a similar lakehouse pattern.” [Databricks, What Is a Lakehouse?, 2020-01-30]
22. Databricks states other managed services such as BigQuery and Redshift Spectrum “have some of the lakehouse features listed above, but they are examples that focus primarily on BI and other SQL applications,” and that companies building their own systems have open source file formats Delta Lake, Apache Iceberg, and Apache Hudi “that are suitable for building a lakehouse.” [Databricks, What Is a Lakehouse?, 2020-01-30]
23. Databricks states merging lakes and warehouses into a single system means data teams “can move faster as they are able use data without needing to access multiple systems.” [Databricks, What Is a Lakehouse?, 2020-01-30]
24. Databricks states SQL support and BI-tool integration among early lakehouses are “generally sufficient for most enterprise data warehouses,” while materialized views and stored procedures “are available but users may need to employ other mechanisms that aren’t equivalent to those found in traditional data warehouses,” especially for “lift and shift scenarios” needing near-identical semantics to older commercial warehouses. [Databricks, What Is a Lakehouse?, 2020-01-30]
25. Databricks states lakehouse users have access to standard tools (Spark, Python, R, machine learning libraries) for non-BI workloads, and that “Delta Lake is designed to let users incrementally improve the quality of data in their lakehouse until it is ready for consumption.” [Databricks, What Is a Lakehouse?, 2020-01-30]
26. Databricks states that while distributed file systems can be used, “objects stores are more commonly used in lakehouses,” providing “low cost, highly available storage, that excel at massively parallel reads.” [Databricks, What Is a Lakehouse?, 2020-01-30]
27. Databricks states the lakehouse “radically simplifies enterprise data infrastructure and accelerates innovation” as machine learning disrupts industries, and that a lakehouse gives “data versioning, governance, security and ACID properties that are needed even for unstructured data,” unlike a data lake alone for AI. [Databricks, What Is a Lakehouse?, 2020-01-30]
28. Databricks states current lakehouses “reduce cost but their performance can still lag specialized systems (such as data warehouses)” with years of investment behind them, and that lakehouses will need to improve UX and connectors to popular tools. [Databricks, What Is a Lakehouse?, 2020-01-30]
29. Databricks attributes to itself: “These and other issues will be addressed as the technology continues to mature and develop. Over time lakehouses will close these gaps while retaining the core properties of being simpler, more cost efficient, and more capable of serving diverse data applications.” [Databricks, What Is a Lakehouse?, 2020-01-30]
30. The page footer identifies “Databricks Inc.” with a San Francisco address. [Databricks, What Is a Lakehouse?, 2020-01-30]

**Not stated in the T0 source, and therefore Unknown:** any Databricks list price, consumption fee, or margin; any exclusive IP claim over the lakehouse pattern; customer counts or case-study economics; public-listing or ticker status for Databricks, Microsoft, or any other firm; corporate owners of BigQuery or Redshift Spectrum beyond the product names; and whether open-format DIY lakehouses retain surplus differently from managed platforms. *(Unknown)*

---

## 3. Customer Problem

**What end-user problem changed.** Enterprises need one flexible, high-performance system for SQL/BI, real-time monitoring, data science, and ML — including unstructured AI data — without the cost/fit limits of warehouses or the transaction/quality/consistency gaps of lakes, and without multi-system copy delay. Databricks states warehouses are unsuited and not most cost efficient for modern data shapes; lakes lack critical warehouse-like guarantees; multi-system stacks introduce complexity and delay [facts 3, 5–7]. *(Evidence-supported)*

Three components are distinguishable:

- **Warehouse limits on unstructured / high-variety data and cost.** [facts 3, 6]. *(Evidence-supported)*
- **Lake limits on transactions, quality, and consistency.** [fact 5]. *(Evidence-supported)*
- **Multi-system copy/move delay.** [fact 7]. *(Evidence-supported)*

**Who is worse off without it:** enterprise data teams and architects running mixed BI and AI workloads across lakes, warehouses, and specialty stores — the audience Databricks describes [facts 2, 6, 7, 23]. How many such enterprises exist and what they spend is not disclosed. Magnitude of the customer problem is **Unknown**.

---

## 4. Industry Change

**The concrete change.** Databricks defines and advocates the lakehouse: an open architecture placing warehouse-like management features on low-cost cloud object storage in open formats, with the Databricks Lakehouse Platform cited as having those features and other named systems as partial or similar examples [facts 8–9, 20–22]. *(Evidence-supported)*

**Which system requirement shifts.**

1. **From separate lake and warehouse copies to BI directly on source lakehouse data.** Staleness, latency, and dual-copy cost claims [fact 12]. *(Evidence-supported as Databricks’s claim)*
2. **From multi-system specialty stacks to one repository supporting diverse workloads and data types.** [facts 15–17, 23]. *(Evidence-supported as Databricks’s claim)*
3. **From closed warehouse storage models toward open formats and direct API access (e.g. Parquet) on object stores.** [facts 9, 14, 26]. *(Evidence-supported)*
4. **From lake-without-ACID toward transactional, governed lake storage (including for unstructured AI data).** [facts 10, 11, 27]. *(Evidence-supported as Databricks’s claim)*

**Why the prior solution becomes insufficient.** Databricks argues warehouses and lakes each fail parts of the modern requirement set and that multi-system designs impose delay [facts 3, 5, 7]. It also states current lakehouses still lag specialized warehouse performance and need UX/connector work [fact 28]. *(Reasoned Inference)*

**Structural or cyclical.** Structural if lakehouse becomes the default enterprise data platform pattern: one open repository for BI and AI with decoupled storage/compute [facts 9, 13, 16, 27]. At T0 this is an architecture announcement with early examples; adoption scale and monetization are undisclosed [facts 2, 20–22]. *(Reasoned Inference)*

---

## 5. Value Chain Analysis

**Purpose.** Map how value flows after §4. No winner is identified here.

| Layer | Role | Scarcity | Bottleneck | Expected Value Change | Evidence Label |
| --- | --- | --- | --- | --- | --- |
| Cloud object storage | Low-cost, highly available storage for lakehouse data; massively parallel reads [facts 9, 26] | Unknown | No | ↑ | Reasoned Inference |
| Open table/file formats (Parquet; Delta Lake; Apache Iceberg; Apache Hudi) | Open storage formats suitable for building a lakehouse [facts 14, 22] | No | Yes | ↑ | Reasoned Inference |
| Lakehouse platform / query & governance services | ACID, schema, BI, streaming, security, catalogs on the lake [facts 10–18, 20] | Unknown | Yes | ↑ | Reasoned Inference |
| Traditional data warehouses (structured BI) | Prior path limited on unstructured/semi-structured cost/fit [fact 3] | No | No | ↓ | Reasoned Inference |
| Standalone data lakes (without warehouse features) | Prior path lacking transactions/quality/consistency [facts 4, 5] | No | No | ↓ | Reasoned Inference |
| Multi-system specialty stores (streaming, time-series, graph, image DBs) as separate silos | Prior common approach causing copy delay [fact 7] | No | No | ↓ | Reasoned Inference |
| BI tools / DS-ML tools (Spark, Python, R, ML libraries) | Consume lakehouse data directly [facts 12, 14, 25] | No | No | ↑ | Hypothesis |
| Enterprise data teams / end customers | Faster use of unified data; cost claims [facts 12, 23, 28] | No | No | ↑ | Hypothesis |

**Layers with no participant named.** Object-storage cloud providers are unattributed beyond “object stores” [fact 26]. Corporate owners of BigQuery and Redshift Spectrum are not named [fact 22]. Per `RESEARCH_REPORT_STANDARD.md` §5, none is inferred.

**Reading notes.**

- Bottleneck layers labeled `Yes` as `Reasoned Inference`: open formats that make warehouse features portable on lakes, and the lakehouse platform services that deliver ACID/governance/BI/streaming [facts 10–18, 22]. Open formats are `Scarcity: No` because Databricks stresses openness and multiple format options [facts 9, 14, 22].
- Warehouse, raw-lake, and multi-silo specialty paths carry `↓` [facts 3, 5, 7].
- Databricks does not identify a single exclusive bottleneck owner.

No winner is identified in this section.

---

## 6. Value Migration

**Where value moves — origin and destination both named.**

| From (origin layer) | To (destination layer) | Basis |
| --- | --- | --- |
| Traditional warehouses + separate lakes (dual copies) | Unified lakehouse on object storage | Facts 3–5, 9, 12 |
| Multi-system specialty stacks with data copy/move | Single repository for diverse workloads | Facts 7, 16, 17, 23 |
| Closed warehouse-centric storage designs | Open formats / direct engine access | Facts 9, 14, 22 |

**Why the migration follows.**

1. Databricks states warehouses and lakes each fail critical modern requirements and multi-system designs delay work [facts 3, 5, 7]. *(Evidence-supported)*
2. It defines lakehouse as warehouse features on low-cost open object storage [fact 9]. *(Evidence-supported)*
3. It cites early implementations including Databricks Lakehouse Platform, a Microsoft Azure Synapse pattern, partial BigQuery/Redshift Spectrum features, and DIY open formats [facts 20–22]. *(Evidence-supported)*
4. Therefore value migrates toward open lakehouse architectures — if performance/UX gaps close as Databricks states they will over time. *(Reasoned Inference)*

**Links not established.** Magnitude of profit migration is **Unknown**. Whether object-storage providers capture most surplus is **Unknown**. Whether Databricks captures more than open-format DIY paths is **Unknown**. *(Unknown)*

**Confidence on the migration as a whole: Medium.** *(Reasoned Inference)* Direction matches Databricks’s problem/remedy structure. Against that: acknowledged performance lag vs warehouses, open/replicable design, and no pricing. Under `VALUE_CAPTURE_METHODOLOGY.md` §6, those gaps cap confidence below High.

**Statement of standing.** Potential value reallocation. Requires later market verification.

---

## 7. Value Capture

Per `VALUE_CAPTURE_METHODOLOGY.md`: value creation is not value capture. Simplification and cost reduction are *creation* claims [facts 12, 23, 27]; the question is who retains surplus. Every conclusion below carries exactly one evidence label and one confidence level.

**Step 1 — Industry bottleneck.** Delivering warehouse-grade management (ACID, schema, governance, BI performance path) on low-cost open lake storage for mixed BI and AI workloads without multi-system copies [facts 7, 9–12, 27]. *(Reasoned Inference, Medium)*

**Step 2 — Scarce capability.** Implementing that stack as a usable platform. Databricks names its Lakehouse Platform, but also Microsoft’s similar pattern, partial features in BigQuery/Redshift Spectrum, and open formats for self-build [facts 20–22]. Scarcity of any one vendor’s capability is **Unknown**; openness argues against narrow scarcity. *(Reasoned Inference, Medium)*

**Step 3 — Value migration.** As in §6: toward open lakehouses; away from dual lake/warehouse and multi-silo stacks.

**Step 4 — Economic profit capture.** No price or margin disclosed. Magnitude of capture is **Unknown**. *(Unknown, Low)*

**Step 5 — Ranking.**

### Tier 1 — Direct Value Capturer

**Vacant.** *(Reasoned Inference, Medium)*

No participant is shown to control the bottleneck *and* retain a disproportionate share of economic profit under a durable, disclosed retention mechanism. The architecture is explicitly open; multiple implementations are named; DIY open formats are endorsed [facts 9, 20–22]. Under `VALUE_CAPTURE_METHODOLOGY.md`, absence of a Tier 1 capturer is a valid finding.

**Magnitude of capture: Unknown.** *(Unknown, Low)*

### Tier 2 — Direct Beneficiary

**Databricks, Inc.** *(Reasoned Inference, Medium)*

Retention mechanism, in two parts — each partial:

1. **Operates a named Lakehouse Platform.** Databricks states its platform has the architectural features of a lakehouse [fact 20]. *(Evidence-supported for the claim; Reasoned Inference that this is a capture surface, Medium)*
2. **Thought leadership / standard-setting adjacency.** Databricks authors the defining post and lists Delta Lake among open formats suitable for lakehouses [facts 1, 22, 25]. Openness also enables substitutes. *(Reasoned Inference, Low)*

**Counter-evidence recorded.** Open architecture and multiple named alternatives [facts 9, 21, 22]; performance still lags specialized warehouses [fact 28]; no pricing or lock-in terms. These keep Databricks at Tier 2, not Tier 1. *(Reasoned Inference, Medium)*

### Tier 3 — Indirect Beneficiary

**Microsoft** *(Hypothesis, Low)* Azure Synapse Analytics integrating with Azure Databricks enables a similar lakehouse pattern [fact 21]. Path is second-order via cloud analytics services; retention Unknown.

### Tier 4 — Potential Beneficiary

- **Enterprise customers** *(Hypothesis, Low)* May retain surplus via lower dual-copy cost and faster access [facts 12, 23, 28].
- **Providers of BigQuery / Redshift Spectrum** *(Unknown, Low)* Products named with partial lakehouse features [fact 22]; corporate issuers not named.
- **Object-storage providers (unnamed)** *(Unknown, Low)* Common lakehouse storage substrate [fact 26].
- **Open-format communities (Delta Lake / Iceberg / Hudi)** *(Unknown, Low)* Suitable for DIY lakehouses [fact 22]; not commercial capturers as stated.

**Alternative explanations.** That cloud object-storage rents capture most surplus — possible [fact 26] *(Hypothesis, Low)*. That traditional warehouses retain BI share because lakehouse performance lags — consistent with fact 28 *(Hypothesis, Low)*. That DIY open formats commoditize platforms so no vendor retains surplus — consistent with openness [facts 9, 22] *(Hypothesis, Low)*.

---

## 8. Listed Companies

Publicly listed participants named in the T0 source. **Not ranked; not a recommendation; no valuation.**

**Inclusion rule.** Enter only if the T0 source names the entity and establishes it as the publicly listed company.

| Company | Role | Why | Evidence | Confidence |
| --- | --- | --- | --- | --- |

**Why this table has zero rows.** The source names Databricks / Databricks Inc.; Microsoft (Azure Synapse Analytics / Azure Databricks); products BigQuery and Redshift Spectrum; and open projects Delta Lake, Apache Iceberg, Apache Hudi, Spark/Parquet [facts 20–22, 25, 30]. None of the text states that any named entity is publicly listed or supplies a ticker/exchange designation. Inferring listing status would violate the inclusion rule used in prior compliant reports.

**Named in the source but excluded from this table.**

- **Databricks, Inc.** [facts 20, 30] — Tier 2 operator in §7; listing not established.
- **Microsoft** [fact 21] — Azure Synapse / Azure Databricks pattern; listing not established in this text.
- **BigQuery / Redshift Spectrum** [fact 22] — product names only; corporate parents not named; omitted as issuers.
- **Apache Software Foundation marks** appear in site footer trademark language for Spark/Iceberg; no capture path; omitted.

**Displaced participants.** Traditional warehouse and raw-lake *functions* are marked `↓` in §5. No warehouse vendor company is named as the displaced incumbent. *(Unknown)*

---

## 9. Risks

### Assumptions that could fail

1. **Enterprises adopt lakehouse as the default over multi-system stacks** — supports §§4–7 [facts 7, 9, 23]. Adoption scale Unknown. *(Unknown at T0)*
2. **Lakehouse performance and UX close gaps versus specialized warehouses** — supports durable migration; Databricks states current lag and future closure [facts 28, 29]. *(Hypothesis)*
3. **Openness does not fully commodity-compete away managed-platform surplus** — supports Databricks Tier 2 [facts 9, 22]. *(Hypothesis)*
4. **BI-on-source-data cost/staleness benefits materialize in production** — supports §3–§6 [fact 12]. *(Hypothesis)*
5. **No single closed platform later establishes exclusive Tier 1 control of the pattern** — supports Tier 1 vacancy. *(Hypothesis)*
6. **Object-storage economics remain favorable for lakehouse designs** — supports architecture premise [facts 9, 26]. *(Unknown)*

### What would weaken the thesis

- Continued warehouse outperformance keeping BI off the lake.
- Multi-system architectures remaining preferred despite copy costs.
- Managed lakehouse vendors competing away Databricks’s Tier 2 position.
- DIY Iceberg/Hudi/Delta stacks making platforms interchangeable.

### What would invalidate the thesis

- **Enterprises abandoning the lakehouse pattern**, returning to durable lake/warehouse dual stacks as the default.
- **Economic profit from lakehouse workloads accruing only to unnamed storage or tool layers**, such that Databricks does not retain Tier 2 surplus.
- **Open formats failing while closed warehouses re-absorb unstructured/AI data**, reversing the migration in §6.
- **A single proprietary stack establishing exclusive control**, replacing vacant Tier 1 with a different capture map.

Weakening and invalidating conditions are kept separate deliberately: the first set reduces the size of the conclusion; the last set replaces it.

---

## 10. Monitoring Signals

Each signal names the P0 source class where it would become visible, a horizon measured from T0, and what its absence by that point would imply.

| # | Signal | Source class | Horizon | Absence implies |
| ---: | --- | --- | --- | --- |
| 1 | Enterprise case studies migrating from lake+warehouse to lakehouse | Databricks and customer official posts | 2–12 quarters | Assumption 1 unresolved |
| 2 | Published Databricks Lakehouse Platform pricing or consumption terms | Databricks official pricing pages | 1–8 quarters | Magnitude of capture stays Unknown |
| 3 | Independent or vendor benchmarks of lakehouse SQL vs warehouses | Technical publications; vendor official posts | 2–8 quarters | Assumption 2 unresolved |
| 4 | Growth of Delta Lake / Iceberg / Hudi production adoption | Project and vendor official announcements | 2–12 quarters | Open-format path / Assumption 3 untested |
| 5 | Microsoft Azure Synapse / Azure Databricks lakehouse product expansions | Microsoft and Databricks official announcements | 2–8 quarters | Tier 3 path static |
| 6 | Competing managed “lakehouse” product launches | Competitor official announcements | 2–12 quarters | Tier 2 contestability untested |
| 7 | BI-tool connector / UX improvements Databricks said would be needed | Databricks official product blogs/docs | 2–8 quarters | Fact 28 gap unclosed |
| 8 | Disclosure of revenue, customers, or usage for lakehouse workloads | Databricks official announcements or (if later public) filings | 4–12 quarters | Step 4 magnitude stays Unknown |
| 9 | Any listing / IPO disclosure establishing Databricks or others as public | Official offering documents / exchange notices | Any time | §8 remains empty on listing grounds |
| 10 | Object-storage pricing or architecture changes affecting lakehouse TCO | Cloud-provider official pricing/docs | 2–12 quarters | Assumption 6 unresolved |
| 11 | Evidence of switching costs or proprietary lock-in on Databricks Lakehouse Platform | Databricks official terms/product docs | 4–12 quarters | Tier 1 vacancy vs enclosure untested |
| 12 | Warehouse vendors adding open-lake / unstructured AI features | Warehouse-vendor official announcements | 2–12 quarters | Displaced-incumbent Hypothesis tested |

### Closure paths for every open item

Per `RESEARCH_REPORT_STANDARD.md` §10 and `VALUE_CAPTURE_METHODOLOGY.md` §7, every `Hypothesis` and `Unknown` recorded in §§5–8 has a closure path above.

| Open item | Recorded in | Closes via |
| --- | --- | --- |
| Object-storage direction / surplus (**Unknown**) | §5, §7 Tier 4 | Signal 10 |
| Open-format bottleneck without scarcity (**Reasoned Inference** / DIY **Unknown**) | §5, §7 | Signals 4, 6 |
| BI/DS tool surplus (**Hypothesis**) | §5 | Signals 7, 1 |
| Customer surplus (**Hypothesis**) | §5, §7 Tier 4 | Signals 1, 2, 8 |
| Magnitude of capture (**Unknown**) | §1, §7 Step 4 | Signals 2, 8 |
| Adoption of pattern (**Unknown**) | §4, §9 assumption 1 | Signals 1, 4 |
| Performance/UX gap closure (**Hypothesis**) | §9 assumption 2 | Signals 3, 7 |
| Openness vs platform surplus (**Hypothesis**) | §9 assumption 3 | Signals 4, 6, 11 |
| BI-on-source benefits (**Hypothesis**) | §9 assumption 4 | Signals 1, 3 |
| Tier 1 vacancy vs later enclosure (**Hypothesis**) | §7, §9 assumption 5 | Signals 6, 11 |
| Object-store economics (**Unknown**) | §9 assumption 6 | Signal 10 |
| Microsoft Tier 3 path (**Hypothesis**) | §7 | Signal 5 |
| BigQuery / Redshift Spectrum parent paths (**Unknown**) | §7 Tier 4 | Signals 6, 12 |
| Listing status for §8 (**Unknown**) | §8 | Signal 9 |
| Displaced warehouse vendor identity (**Unknown**) | §5, §8 | Signal 12 |
| Customer-problem magnitude (**Unknown**) | §3 | Signals 1, 8 |

No open item lacks a closure path. No signal requires non-public information. No signal is expressed as a trading trigger, entry condition, or action.

---

*Report produced under `RESEARCH_REPORT_STANDARD.md` v1.1 (repository version; sprint attribution and confidence rules applied) and `MISSION.md`. Single P0 Databricks source, T0-locked to 2020-01-30 earliest official Lakehouse announcement. Contains no investment recommendation, no valuation or securities-price information, and no timing signal. All Unknown items remain Unknown.*
