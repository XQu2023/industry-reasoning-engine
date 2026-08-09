# SRE-102 — Amazon EC2 Beta

| Field | Value |
| --- | --- |
| Subject | Amazon Elastic Compute Cloud (Amazon EC2), limited beta |
| T0 (frozen date) | 2006-08-24 |
| Industry domain | Cloud Infrastructure |
| T0 source | Amazon Web Services, official announcement post, 2006-08-24 — "Amazon EC2 Beta", AWS News Blog, by Jeff Barr (`aws.amazon.com/blogs/aws/amazon_ec2_beta/`) |
| Standards applied | `SRE_PRODUCT_SPEC.md` v1.0, `RESEARCH_REPORT_STANDARD.md` v1.1, `VALUE_CAPTURE_METHODOLOGY.md` v1.0, `SRE_GLOSSARY.md` v1.0 |

Single-source report. All content derives from the one P0 document above, cited throughout as **[AWS, official announcement, 2006-08-24]**. Nothing published after T0 is used.

**Source-integrity note.** The retrieved page carries a publisher notice dated 2020-10-23 stating that expired links in the post were updated or removed from the original. The notice is limited to links. Whether any substantive wording differs from the 2006-08-24 original is **Unknown**, and no claim in this report rests on link text.

Evidence labels used: Evidence-supported, Reasoned Inference, Hypothesis, Unknown (`SRE_GLOSSARY.md` v1.0). Confidence levels: High, Medium, Low (`VALUE_CAPTURE_METHODOLOGY.md` §6).

---

## 1. Executive Summary

Amazon announced EC2 as a limited beta in which a developer obtains a virtual computing environment through web service calls and pays ten cents per clock hour, with no advance hardware acquisition [AWS, official announcement, 2006-08-24]. The document is explicit about the prior state it displaces: buyers previously had to forecast and pay in advance for enough hardware, storage, and bandwidth to cover both organic growth and traffic bursts, and were left with idle hardware if they over-provisioned or a "site too busy" message if they under-provisioned. What changes is the unit of purchase — from a server acquired ahead of demand to an hour of compute acquired during demand — and the mechanism of acquisition, from a procurement cycle to an API call. *(Evidence-supported for the change; Reasoned Inference for its significance)*

**Key conclusion.** Value migrates from advance-purchased server capacity, where the buyer absorbs forecasting risk, toward a metered compute platform that absorbs it in exchange for a per-hour price, with a secondary migration toward the platform's own storage complement because machine images are stored as objects in it and reachable without transfer charges. *(Reasoned Inference, Medium)*

**No participant is established as a durable value capturer at T0, and the Tier 1 position is vacant.** This is a finding rather than a gap in the analysis. The source discloses a platform assembled from inputs it describes as obtainable elsewhere — a virtual machine monitor named Xen, and a virtual CPU benchmarked against a commodity server processor class — sold at a published price, under a beta that caps each account at twenty instances. Nothing in the document establishes a switching cost, a scarce input, a standard the platform owns, or any other mechanism by which the surplus would be retained rather than competed away. Under `VALUE_CAPTURE_METHODOLOGY.md` §3 rule 5, surplus that accrues to buyers or is competed away is a legitimate answer, and it is the answer this source supports. *(Reasoned Inference, Medium)*

**Top companies for further research — not recommendations, not ranked by attractiveness.** This list identifies where the reasoning in §§6–7 lands. It contains no view on price, valuation, or timing.

- **Amazon.com** — operates the metered compute platform and the storage complement that machine images depend on. Tier 2 Direct Beneficiary; durable capture not established at T0. *(Reasoned Inference, Medium)*

The list has one entry because the T0 document names no other participant with a capture path. The layers that would matter most to a capture thesis — physical facilities, server processors, network capacity — are established as necessary by the disclosed design but have no company named in them, and none is inferred. See §8.

Market blind spot: the announcement's most quoted element is the ten-cent hourly price, while two structural details sit unremarked. First, machine images are stored as objects in the platform's own storage service with free fast-path access, which couples adoption of the compute service to the storage service. Second, the document invites third parties to build the automatic scaling monitor that would make elasticity automatic rather than manual — the platform ships the ability to change capacity but not the ability to change it unattended. *(Reasoned Inference, Medium)*

---

## 2. Evidence

Verified facts only. Each is stated in the T0 source without interpretation. Customer statements reproduced inside the announcement are recorded as statements the publisher reproduced, which is what the source establishes.

1. Amazon announced the Amazon Elastic Compute Cloud, Amazon EC2, as "now open for limited beta testing, with more beta slots to open soon." [AWS, official announcement, 2006-08-24]
2. EC2 gives access to a virtual computing environment. [AWS, official announcement, 2006-08-24]
3. Applications run on a "virtual CPU" stated as the equivalent of a 1.7 GHz Xeon processor, 1.75 GB of RAM, 160 GB of local disk, and 250 Mb/second of network bandwidth. [AWS, official announcement, 2006-08-24]
4. The stated price is 10 cents per clock hour, billed to the customer's Amazon Web Services account. [AWS, official announcement, 2006-08-24]
5. The announcement states the customer "can get as many virtual CPUs as you need." [AWS, official announcement, 2006-08-24]
6. The announcement states that during the beta a customer can run up to 20 virtual servers per account, or more by special arrangement. [AWS, official announcement, 2006-08-24]
7. Amazon states EC2 was built using a virtual machine monitor named Xen. [AWS, official announcement, 2006-08-24]
8. EC2 works in terms of AMIs, or Amazon Machine Images. [AWS, official announcement, 2006-08-24]
9. Each AMI is described as a pre-configured boot disk — a packaged-up operating system stored as an Amazon S3 object. [AWS, official announcement, 2006-08-24]
10. There are web service calls to create images and to assign them to virtual CPUs to run an application. [AWS, official announcement, 2006-08-24]
11. For an application consisting of web server, business logic, and database tiers, distinct AMIs can be built for each tier and one or more instances of each type spawned based on load. [AWS, official announcement, 2006-08-24]
12. EC2 gives the ability to control network access on a fine-grained basis — for example, permitting the outside world to reach the web servers but not the business logic or database server, and permitting the web server to reach the business logic and the business logic to reach the database. [AWS, official announcement, 2006-08-24]
13. The announcement states customers get free, fast-path access to Amazon S3, described as a natural place to store raw data and results. [AWS, official announcement, 2006-08-24]
14. The announcement states that before EC2, a buyer had to buy or rent sufficient servers to cover present needs, and had to anticipate, forecast, and pay in advance for enough hardware, storage, and network bandwidth to accommodate organic growth as well as traffic bursts. [AWS, official announcement, 2006-08-24]
15. The announcement states that over-generous planning leaves hardware idle, and too-frugal planning results in would-be users receiving a "site too busy" message. [AWS, official announcement, 2006-08-24]
16. The announcement states that with EC2, hardware need not be acquired in advance of need; capacity is increased by spawning more virtual CPUs as processing needs grow. [AWS, official announcement, 2006-08-24]
17. The announcement states that sometimes a large amount of processing power is needed only for a limited time, giving number crunching, in-depth text processing, scientific research, end-of-month accounting, and short-lived algorithm experiments as situations in which acquiring sufficient hardware for the high-water mark of usage "would definitely not be economical." [AWS, official announcement, 2006-08-24]
18. The announcement reproduces a statement from a forum user identified as Daniel Drucker describing planned use for functional MRI analysis, with large datasets requiring a cluster of 15–20 machines needed for only a couple of hours every few weeks. [AWS, official announcement, 2006-08-24]
19. The announcement reproduces a statement from a forum user identified as spanglu describing a web-based back-office inventory application used only from 7am to 7pm, stating server costs could be cut by 50%, and describing starting an instance only when the application is needed. [AWS, official announcement, 2006-08-24]
20. The announcement states that "time is another interesting axis of scalability." [AWS, official announcement, 2006-08-24]
21. The announcement recommends developers look at higher-level packages to decompose large computational tasks for parallel processing, names Google's MapReduce framework as an example, and points to Doug Cutting's open source version of MapReduce and to Starfish, an implementation of MapReduce in Ruby. [AWS, official announcement, 2006-08-24]
22. The announcement invites developers to build specialized AMIs and sell them to other developers, including AMIs preloaded with a popular open source stack, subject to respecting redistribution prohibitions in software licenses. [AWS, official announcement, 2006-08-24]
23. The announcement invites developers to build an advanced monitoring system that spools up additional machine images in times of heavy load and winds them down after the load goes away. [AWS, official announcement, 2006-08-24]
24. The announcement states that without services like Amazon EC2, Amazon SQS, and Amazon S3, a developer would need to invest a lot of capital and take significant financial risk to test whether an idea works, and that with these services the risk is smaller while the potential reward is not diminished. [AWS, official announcement, 2006-08-24]
25. The announcement recommends Cal Henderson's book *Building Scalable Web Sites*, describing Henderson as one of the engineers behind Flickr. [AWS, official announcement, 2006-08-24]
26. The announcement is published on the AWS News Blog under the name Jeff Barr. [AWS, official announcement, 2006-08-24]

**Not stated in the T0 source, and therefore Unknown:** any service level agreement, availability commitment, or durability guarantee; the identity of any server, processor, storage, networking, or facility supplier; the location, number, or capacity of data centers; Amazon's cost to deliver an instance-hour, and therefore any margin; data transfer or storage pricing; total beta capacity or number of beta participants; the general-availability date or the criteria for exiting beta; any named competing service or competitor; operating system support beyond the statement that an AMI is a packaged operating system; and any customer commitment, contract term, or switching cost. *(Unknown)*

---

## 3. Customer Problem

**What end-user problem changed.** The buyer's problem was that capacity had to be committed before demand was known. The source states this directly: a buyer had to buy or rent enough servers for present needs and additionally anticipate, forecast, and pay in advance for hardware, storage, and bandwidth sufficient for organic growth and for traffic bursts [fact 14]. The source also states the two-sided penalty for getting the forecast wrong — idle hardware when over-provisioned, and users turned away with "site too busy" when under-provisioned [fact 15]. *(Evidence-supported)*

Two components of the problem are distinguishable in the source:

- **Forecasting risk borne by the buyer.** The cost of a wrong forecast fell entirely on the buyer, in either direction, and had to be paid before the outcome was known [facts 14, 15]. *(Evidence-supported)*
- **Demand that is intermittent rather than merely growing.** The source states that a large amount of processing power is sometimes needed only for a limited time, and calls provisioning for the high-water mark in that situation "definitely not economical," listing number crunching, text processing, scientific research, month-end accounting, and short experiments [fact 17]. It reproduces two customer statements of exactly this shape: a cluster of 15–20 machines needed for a couple of hours every few weeks, and an application used twelve hours a day [facts 18, 19]. The source names the underlying insight as time being an axis of scalability [fact 20]. *(Evidence-supported)*

**Who is worse off without it:** developers and organizations whose compute demand is intermittent or unforecastable, and specifically those without the capital to provision for peak — the source describes the alternative as investing significant capital and taking financial risk merely to test whether an idea works [fact 24]. *(Evidence-supported)*

The source does not disclose how many buyers have this demand shape, how much they previously spent, or what fraction of workloads are intermittent. The two reproduced customer statements are self-selected forum posts republished by the vendor [facts 18, 19]. The size of the customer problem is therefore **Unknown**.

---

## 4. Industry Change

**The concrete change.** Compute capacity becomes a metered service acquired through web service calls and billed by the clock hour, with no advance acquisition of hardware [facts 4, 10, 16]. *(Evidence-supported)*

**Which system requirement shifts.** Three requirements move together in the source:

1. **The unit of purchase.** From a server, acquired ahead of demand under a forecast, to an instance-hour at ten cents, acquired during demand [facts 4, 14, 16]. *(Evidence-supported)*
2. **The mechanism of acquisition.** From a procurement action to a web service call that creates an image and assigns it to a virtual CPU [fact 10]. Capacity becomes addressable by software rather than by purchasing. *(Evidence-supported)*
3. **Where forecasting risk sits.** The buyer no longer pays in advance for peak capacity [facts 14, 16]; the party holding capacity ahead of demand is now the platform operator. The source does not describe this transfer in those terms, and does not disclose how the operator manages it. *(Reasoned Inference)*

**Why the prior solution becomes insufficient.** The prior solution was not slow or low-specification; it was mispriced against a demand shape. For intermittent workloads, capacity provisioned to the high-water mark is idle most of the time, which the source calls not economical, and the reproduced customer statements quantify the mismatch in one case as a cluster needed for hours every few weeks [facts 17, 18]. Where demand is intermittent, ownership charges the buyer for the peak and delivers the average. Metered hourly access removes the gap between the two by construction. *(Reasoned Inference)*

**Structural or cyclical.** Structural. The change alters what participants must do — capacity becomes an operating decision made by software during demand, rather than a capital decision made by forecast ahead of it [facts 10, 14, 16] — rather than altering volumes at constant requirements. *(Reasoned Inference)*

**A tension inside the source, recorded rather than resolved.** The document states both that a customer "can get as many virtual CPUs as you need" [fact 5] and that during the beta an account is limited to 20 virtual servers, or more by special arrangement [fact 6]. The two statements are not reconciled in the document. Whether the elasticity being announced is a present capability or a stated direction is therefore **Unknown** at T0.

---

## 5. Value Chain Analysis

**Purpose.** Map how value flows through the value chain after the change described in §4. This section is a map, not a conclusion: it identifies no winner and names no capturer. Layer existence and role are drawn from §2 facts; scarcity, bottleneck, and direction of value change are reasoning, labeled per row.

Granularity is one functional layer per row, ordered from physical infrastructure through end demand.

| Layer | Role | Scarcity | Bottleneck | Expected Value Change | Evidence Label |
| --- | --- | --- | --- | --- | --- |
| Physical compute and facilities | Hosts the virtual computing environment that the service exposes [facts 2, 3] | Unknown | Unknown | Unknown | Unknown |
| Server processor supply | Supplies the processor class the virtual CPU is benchmarked against — stated as the equivalent of a 1.7 GHz Xeon processor [fact 3] | Unknown | Unknown | Unknown | Unknown |
| Network capacity | Supplies the 250 Mb/second of bandwidth stated per instance [fact 3] | Unknown | Unknown | Unknown | Unknown |
| Virtualization (virtual machine monitor) | Partitions physical machines into virtual CPUs; the service is stated to be built using a virtual machine monitor named Xen [fact 7] | No | No | → | Reasoned Inference |
| Metered compute platform | Allocates virtual CPUs on demand through web service calls and bills by the clock hour [facts 4, 10, 16] | Unknown | Yes | ↑ | Reasoned Inference |
| Object storage | Stores machine images as objects and is reachable from instances by free fast-path access [facts 9, 13] | Unknown | No | ↑ | Reasoned Inference |
| Message queuing | Named as part of the same service line available to developers [fact 24] | Unknown | No | Unknown | Unknown |
| Machine image packaging and distribution | Packages operating systems and software stacks as bootable images; third parties are invited to build and sell them [facts 8, 9, 22] | Unknown | No | ↑ | Hypothesis |
| Elasticity and load-management tooling | Starts and stops instances in response to load; described in the source as something a developer could build, not as something supplied [fact 23] | Unknown | Unknown | ↑ | Hypothesis |
| Parallel processing frameworks | Decompose large computational tasks for parallel execution across instances [fact 21] | No | No | ↑ | Hypothesis |
| Advance server procurement | Supplies capacity by forecast-based purchase or rental ahead of demand [facts 14, 15] | No | No | ↓ | Reasoned Inference |
| Application development and operation | Builds and runs the applications that consume capacity, and bears or sheds the cost of the forecast [facts 17, 24] | No | No | ↑ | Reasoned Inference |

**Layers with no participant named in the T0 source.** Physical compute and facilities, server processor supply, and network capacity are each established as necessary by the disclosed service — a virtual CPU with stated processor, memory, disk, and bandwidth characteristics must run on physical equipment somewhere [facts 2, 3] — but the source names no company in any of them. Per `RESEARCH_REPORT_STANDARD.md` §5, these layers are recorded and left unattributed. Elasticity tooling and parallel processing frameworks likewise have no commercial participant named; the source names a framework owned by Google, an open source version, and a Ruby implementation as examples for developers to investigate [fact 21], which places software artifacts rather than beneficiaries.

**Reading notes, held separate from the table.**

- Exactly one layer is marked `Bottleneck: Yes` — the metered compute platform itself — and the assessment is `Reasoned Inference` from a stated fact: the service is in limited beta with more slots "to open soon," and an account may run at most 20 virtual servers [facts 1, 6]. At T0 the binding constraint on value creation is access to the platform, imposed by the platform. This is an unusual bottleneck in that it is administrative rather than physical, and it is expected to be temporary, which is why §10 tracks its removal as the first signal.
- Three layers marked `Unknown` across all three assessments — physical facilities, processors, network — are the layers a capture thesis would most need. The source is silent on all of them. Their silence is why §7 cannot exclude the possibility that surplus accrues to inputs rather than to the platform.
- `Virtualization` is the only layer marked `→`. The source states the platform was built using an existing, externally named virtual machine monitor rather than a bespoke one [fact 7], which indicates the capability was obtainable at T0 rather than scarce. A layer that a new entrant can adopt off the shelf is not a layer where value concentrates.
- `Advance server procurement` is the only layer marked `↓`, and the direction comes from the source's own account of what it replaces [facts 14, 15, 16]. No participant is named in this layer, so no company is recorded as displaced.
- Two layers are marked `↑` on `Hypothesis` because the source proposes them rather than establishing them: third-party machine images and automatic scaling tooling are both framed as opportunities for developers to build [facts 22, 23]. That an invitation was issued is a fact; that a market followed is not established at T0.

No winner is identified in this section. Which participants capture value from the layers marked `↑` is addressed in §§7–8.

---

## 6. Value Migration

**Purpose.** State where value moves, and why it must. Origins and destinations use the layers established in §5.

**Where value moves — origin and destination both named.**

| From (origin layer) | To (destination layer) | Basis |
| --- | --- | --- |
| Advance server procurement, where capacity is bought or rented ahead of demand against a forecast | Metered compute platform, where capacity is obtained by web service call during demand and billed by the hour | Facts 4, 10, 14, 16 |
| Advance server procurement for intermittent workloads specifically, where the buyer pays for the peak and uses the average | Application development and operation, which sheds the cost of the unused peak | Facts 15, 17, 18, 19 |
| Independently chosen storage for application data and system images | The platform's own object storage, in which machine images are stored and which instances reach by free fast-path access | Facts 9, 13 |
| Buyer-owned capacity planning, performed by forecast before demand | Elasticity and load-management tooling, performed by software during demand | Facts 16, 23 |

**Why the migration follows.** Step by step, so any single link can be attacked:

1. For intermittent demand, capacity provisioned to the high-water mark is idle most of the time, which the source states is not economical and which the reproduced customer statements quantify as machines needed for hours every few weeks, or twelve hours a day [facts 17, 18, 19]. *(Evidence-supported that the source makes this claim)*
2. If that mismatch is the buyer's binding cost, the capability that becomes valuable is the ability to supply capacity for the duration of demand only, and to make it addressable when demand appears rather than when it is forecast [facts 10, 16, 20]. *(Reasoned Inference)*
3. Supplying capacity that way requires someone to hold capacity ahead of demand across many buyers. The platform operator takes that position; the source describes no other party doing so and does not describe how the position is managed. *(Reasoned Inference)*
4. Where a cost that buyers previously bore individually is absorbed by a shared operator and resold by the hour, spend moves from buyer-owned capacity to the operator, and the forecasting function moves with it. *(Reasoned Inference)*
5. A second, smaller migration follows from a design choice rather than from economics: machine images are stored as objects in the platform's own storage service, reachable without transfer charge [facts 9, 13], so adopting the compute service entails using that storage service. *(Reasoned Inference)*

**Two links are explicitly not established.** Step 3 assumes the operator can hold pooled capacity economically, which requires that buyers' demand peaks do not coincide. The source discloses nothing about pooling, utilization, or cost [see the §2 Unknown list], so the economics of the operator's position are **Unknown**. Step 4 assumes the migration reaches meaningful scale, while the source caps each account at 20 instances during a limited beta [facts 1, 6], so scale at T0 is **Unknown**.

**Confidence on the migration as a whole: Medium.** *(Reasoned Inference)* The direction is well supported, because the source itself states the prior state, its two failure modes, and the mechanism that removes them [facts 14, 15, 16]. The magnitude is not established, the operator's economics are undisclosed, and the beta cap leaves realized scale unknown. Under `VALUE_CAPTURE_METHODOLOGY.md` §6, an undisclosed load-bearing element caps confidence below High.

**Statement of standing.** Potential value reallocation. Requires later market verification.

---

## 7. Value Capture

Per `VALUE_CAPTURE_METHODOLOGY.md`: value creation is not value capture, revenue growth is not value capture, and technology leadership is not value capture. That intermittent workloads become cheaper to serve is a *creation* claim [facts 17, 19]; the question here is who retains it.

### Tier 1 — Direct Value Capturer: vacant at T0

No participant qualifies. Tier 1 requires a named, durable retention mechanism, and the source supplies none. Applying `VALUE_CAPTURE_METHODOLOGY.md` §4 Step 2, the test is what capability is scarce and why it is not widely held:

- The virtualization layer is stated to be an externally named virtual machine monitor [fact 7], so the partitioning capability was obtainable at T0.
- The compute unit is benchmarked against a commodity server processor class [fact 3], and no scarce input, custom process, or proprietary interface is disclosed anywhere in the document.
- The price is published at ten cents per clock hour [fact 4], and no contract term, commitment, or switching cost is disclosed [see the §2 Unknown list].
- No standard is owned, no installed base is claimed, and no certification or regulatory barrier is named.

Under `VALUE_CAPTURE_METHODOLOGY.md` §3 rule 5, the absence of a demonstrable sustainable capturer is itself a valid finding: on this evidence the surplus may accrue to buyers as lower cost per unit of work, or be competed away. Recording a Tier 1 participant here would require a retention mechanism the source does not provide. *(Reasoned Inference, Medium)*

### Direct beneficiaries

**Amazon.com — Tier 2, Direct Beneficiary.** *(Reasoned Inference, Medium)*

First-order economics improve: the company operates the metered compute platform, the layer §5 marks `↑`, and charges a stated price for it [facts 4, 10]. It also operates the object storage layer that machine images are stored in and that instances reach by free fast-path access [facts 9, 13], so adoption of the compute service pulls usage into a second service the same company operates.

Retention is partial and its mechanism is weak, which is why this is Tier 2 rather than Tier 1. The one mechanism nameable from the source is complement coupling: images live as objects in the operator's storage service, which creates a reason to stay that grows with the number of images a customer maintains [facts 9, 13]. The source does not disclose whether moving images elsewhere is difficult, so the strength of that coupling is **Unknown**. Against it stand three disclosed facts: an off-the-shelf virtualization layer [fact 7], a commodity-class compute unit [fact 3], and a published price with no commitment [fact 4] — none of which impedes a competitor or retains a customer.

Whether Amazon.com retains a disproportionate share of the value created is **Unknown** at T0. Confidence is Medium on the beneficiary designation and the direction; durability is not assessed at any confidence level because the source contains nothing to assess.

### Indirect beneficiaries

None named. The layers where second-order gains would accrue — machine image packaging, elasticity tooling, parallel processing frameworks — are marked `↑` on `Hypothesis` in §5 because the source invites participants into them rather than naming any [facts 21, 22, 23]. Per the report standard, no company is entered against an invitation, and none is inferred. These paths are routed to §10 for closure. *(Hypothesis, Low)*

### Potential beneficiaries

**Application developers and operators — Tier 4, Potential Beneficiary, unattributed.** *(Hypothesis, Low)* This layer is marked `↑` in §5 and is a genuine candidate capturer under `VALUE_CAPTURE_METHODOLOGY.md` §4 Step 4, which requires the buyer to be considered: with a published price, no commitment, and no disclosed switching cost, buyers are positioned to retain the savings the platform creates rather than surrender them. The source reproduces one customer statement claiming server costs could be cut by 50% [fact 19]. No company is named in this layer — the source identifies two forum users by name or handle [facts 18, 19] and cites Flickr only in connection with a book's author [fact 25] — so no participant is recorded. Resolving condition, routed to §10: whether the published hourly price holds, rises, or falls as the service leaves beta.

### The central open question

The source discloses the price of the service [fact 4] but not the cost of delivering it, nor utilization, pooling, or any other element of the operator's economics [see the §2 Unknown list]. Whether ten cents per clock hour represents durable capture, a promotional rate, or a price that competition will erode is therefore **Unknown**. This is the mirror image of the usual gap: the price is known and the cost is not, so the direction of the surplus cannot be determined from this document either way.

---

## 8. Listed Companies

Publicly listed participants named in the T0 source. The role carries the §5 layer and the tier assigned in §7. **This table is not ranked by attractiveness, contains no price or valuation information, and is not a recommendation.**

| Company | Role | Why | Evidence | Confidence |
| --- | --- | --- | --- | --- |
| Amazon.com | Metered compute platform and object storage — Tier 2 Direct Beneficiary | Operates the layer §5 marks `Bottleneck: Yes` and `↑`, charges a stated ten cents per clock hour, and operates the storage service in which machine images are stored and reachable by free fast-path access. No durable retention mechanism disclosed | Facts 4, 9, 10, 13, 16 [AWS, official announcement, 2006-08-24]; durability of capture: Unknown | Medium |

**Why this table has one row.** The T0 document names no other participant with a capture path. This is a consequence of the source, not an omission: an announcement of a service describes the service and its customers, and this one names no supplier of any physical input.

**Layers with no row in this table.** Physical compute and facilities, server processor supply, network capacity, machine image packaging, elasticity tooling, and parallel processing frameworks all appear in §5 with no company named, because the source names none. No participant is inferred into any of them. In particular, the source states that the virtual CPU is the equivalent of a 1.7 GHz Xeon processor [fact 3] without naming a processor vendor, and states that the platform was built using a virtual machine monitor named Xen [fact 7] without naming a commercial supplier of it.

**Named in the source but excluded from this table.** Google is named as the owner of the MapReduce framework, offered as an example of software developers might emulate [fact 21]; the source establishes no path by which EC2 reallocates value to it, and under the report standard a thin thesis on a large name is worse than its omission. Flickr is named only as the former employer of a book's author [fact 25]. Digg and Slashdot are named as examples of sites that generate traffic bursts, not as participants. Starfish and the open source MapReduce implementation are software artifacts, not listed entities [fact 21].

**Displaced participants.** The advance server procurement layer is marked `↓` in §5 on the source's own account of the prior state [facts 14, 15, 16]. The source names no server vendor, reseller, hosting provider, or other participant in that layer, so no displaced company is named here. *(Unknown)*

---

## 9. Risks

### Assumptions that could fail

1. **The service works at scale beyond the beta** — supports §§4–7. The source describes a limited beta with more slots to open soon and a cap of 20 virtual servers per account [facts 1, 6], while also stating that a customer can get as many virtual CPUs as needed [fact 5]. The two statements are unreconciled in the document. If the cap reflects a capacity or engineering limit rather than a rollout choice, the elasticity that the entire thesis rests on is not yet a present capability. *(Unknown at T0)*
2. **The platform's pooled economics are viable** — supports §6 Step 3. Reselling by the hour requires holding capacity ahead of demand across buyers whose peaks do not coincide. The source discloses no cost, utilization, or pooling information [see the §2 Unknown list]. If the operator's economics do not work at the published price, the migration stalls regardless of buyer demand. *(Unknown)*
3. **Nothing in the platform is replicable at low cost** — supports the §7 Tier 1 assessment, and is the assumption that most clearly fails on this evidence. The source names an off-the-shelf virtualization layer [fact 7] and a commodity-class compute unit [fact 3], and discloses no proprietary input. This is why Tier 1 is recorded as vacant rather than assigned. *(Reasoned Inference)*
4. **Demand of the intermittent shape is widespread** — supports §3 and §6 Step 1. The evidence for this shape is the vendor's own list of situations plus two self-selected forum statements the vendor reproduced [facts 17, 18, 19]. If intermittent demand is a narrow niche, the migration is real but small. *(Hypothesis)*
5. **Production workloads can run without disclosed guarantees** — supports §§6–7. The source discloses no service level agreement, availability commitment, or durability guarantee [see the §2 Unknown list]. If buyers will not place production systems on a service without them, adoption stays confined to the experimental and batch uses the source describes [facts 17, 18]. *(Unknown)*
6. **Complement coupling is a real retention mechanism** — supports the §7 Tier 2 designation. Machine images stored as objects in the operator's storage service [facts 9, 13] create a reason to stay only if moving them is costly, which the source does not address. *(Unknown)*

### What would weaken the thesis

- The published hourly price falling under competitive pressure, leaving the migration intact while the surplus passes to buyers.
- Intermittent demand proving narrower than the source's list of situations suggests, reducing the size of the migration without reversing it.
- The beta cap persisting long enough that buyers build capacity-planning practices around the limit rather than around elasticity.
- Third parties failing to build the image and scaling layers the source invites [facts 22, 23], leaving the platform harder to use than the announcement implies.

### What would invalidate the thesis

- **Metered hourly compute becoming available from multiple operators at similar prices with no switching cost**, in which case no participant captures durably and the surplus accrues to buyers. On the evidence in §7, this is the most likely of the invalidating conditions rather than the least.
- **Economic profit accruing to an input layer instead** — if physical facilities, server processors, or network capacity prove to be the scarce inputs, the participants who capture are ones this source does not name, and the §5 bottleneck assessment was placed on an administrative limit rather than an economic one.
- **The metered unit failing to become a unit of purchase**, with buyers continuing to acquire capacity in advance because guarantees, security, or control requirements are not met by the service as disclosed.
- **The elasticity being announced proving not to exist at scale**, if the 20-instance cap reflects a limit rather than a rollout stage, which would remove the capability the migration depends on.

Weakening and invalidating conditions are kept separate deliberately: the first four reduce the size of the conclusion, the last four replace it.

---

## 10. Monitoring Signals

Each signal names the P0 source class where it would become visible, a horizon measured from T0, and what its absence by that point would imply.

| # | Signal | Source class | Horizon | Absence implies |
| ---: | --- | --- | --- | --- |
| 1 | Removal of the 20-instance-per-account cap and exit from limited beta | AWS official announcements and service documentation | 2–8 quarters | The cap reflects a capacity or engineering limit, not a rollout stage; assumption 1 failing |
| 2 | Publication of a service level agreement or availability commitment | AWS official announcements and service documentation | 2–8 quarters | Production suitability unresolved; assumption 5 unresolved |
| 3 | Whether the ten-cents-per-clock-hour price holds, rises, or falls, and whether commitment or reserved pricing appears | AWS official pricing documentation and announcements | 2–8 quarters | The direction of the surplus between operator and buyer stays Unknown; closes the §7 central question |
| 4 | Disclosure of web services revenue, cost, or margin at segment level | Amazon.com annual and quarterly filings | 4–12 quarters | The operator's pooled economics remain undisclosed; assumption 2 unresolved |
| 5 | Announcement of comparable metered hourly compute by another operator | Official announcements from any provider | 4–12 quarters | Replicability untested in the market; bears directly on the vacant Tier 1 position and assumption 3 |
| 6 | Introduction of additional instance types, sizes, or regions | AWS official announcements and documentation | 2–8 quarters | The single fixed instance specification persists, limiting the range of workloads that can migrate |
| 7 | Whether AWS itself ships automatic scaling and load-management rather than leaving it to developers | AWS official announcements and documentation | 4–12 quarters | The elasticity tooling layer stays unfilled; closes the §5 `Hypothesis` on that layer |
| 8 | Whether a market for third-party machine images appears, including any AWS mechanism for distributing or selling them | AWS official announcements and documentation | 4–12 quarters | The image packaging layer's `↑` remains an invitation rather than a market; closes the §5 `Hypothesis` on that layer |
| 9 | Whether storage usage is disclosed as growing alongside compute adoption | Amazon.com filings; AWS official announcements | 4–12 quarters | The complement-coupling retention mechanism in §7 remains unverified; assumption 6 unresolved |
| 10 | Named organizations disclosing production use, as distinct from experimental or batch use | Official customer announcements and filings | 2–8 quarters | Adoption confined to the intermittent and experimental uses in the source; assumption 4 unresolved |
| 11 | Any disclosure identifying suppliers of facilities, processors, or network capacity for the service | Amazon.com or supplier filings and announcements | 4–12 quarters | The three fully-Unknown input layers in §5 stay unattributed, and the input-capture alternative in §9 stays open |

### Closure paths for every open item

Per `RESEARCH_REPORT_STANDARD.md` §10 and `VALUE_CAPTURE_METHODOLOGY.md` §7, every `Hypothesis` and `Unknown` recorded in §§5–8 has a closure path above.

| Open item | Recorded in | Closes via |
| --- | --- | --- |
| Whether stated elasticity is a present capability or a direction (**Unknown**) | §4 tension, §9 assumption 1 | Signal 1 |
| Physical facilities layer: scarcity, bottleneck, direction (**Unknown**) | §5 facilities row | Signal 11 |
| Server processor layer: scarcity, bottleneck, direction (**Unknown**) | §5 processor row | Signal 11 |
| Network capacity layer: scarcity, bottleneck, direction (**Unknown**) | §5 network row | Signal 11 |
| Message queuing layer direction (**Unknown**) | §5 messaging row | Signals 3, 4 |
| Machine image packaging layer direction (**Hypothesis**) | §5 image row, §7 | Signal 8 |
| Elasticity tooling layer direction (**Hypothesis**) | §5 tooling row, §7 | Signal 7 |
| Parallel processing framework layer direction (**Hypothesis**) | §5 framework row, §7 | Signals 6, 10 |
| Operator's pooled economics and cost to serve (**Unknown**) | §6 Step 3, §9 assumption 2 | Signals 3, 4 |
| Realized scale of the migration under the beta cap (**Unknown**) | §6 Step 4 | Signals 1, 10 |
| Vacant Tier 1 position and replicability of the platform (**Reasoned Inference**, durability **Unknown**) | §7 | Signals 3, 5 |
| Strength of complement coupling as a retention mechanism (**Unknown**) | §7, §9 assumption 6 | Signal 9 |
| Whether Amazon.com retains a disproportionate share (**Unknown**) | §7, §8 | Signals 3, 4, 5 |
| Buyers as candidate capturers of the surplus (**Hypothesis**) | §7 | Signals 3, 5 |
| Breadth of intermittent demand (**Hypothesis**) | §3, §9 assumption 4 | Signals 6, 10 |
| Production suitability without disclosed guarantees (**Unknown**) | §9 assumption 5 | Signals 2, 10 |
| Displaced participants in advance server procurement (**Unknown**) | §8 | Signal 5, plus supplier and vendor filings |
| Whether source wording differs from the 2006 original beyond links (**Unknown**) | Header source-integrity note | No closure path available from P0 material; recorded as a permanent limitation of this report |

With one exception, noted above and carried deliberately, no open item lacks a closure path. No signal requires non-public information. No signal is expressed as a trading trigger, entry condition, or action.

---

*Report produced under `RESEARCH_REPORT_STANDARD.md` v1.1. Single P0 source, T0-locked to 2006-08-24. Contains no investment recommendation, no price or valuation information about any security, and no timing signal. All Unknown items remain Unknown.*
