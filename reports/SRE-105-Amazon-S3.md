# SRE-105 — Amazon S3

| Field | Value |
| --- | --- |
| Subject | Amazon S3 (Simple Storage Service) launch |
| T0 (frozen date) | 2006-03-14 |
| Industry domain | Cloud Infrastructure |
| T0 source A | Amazon Web Services, official press release, 2006-03-14 — "Amazon Web Services Launches Amazon S3", subhead "S3 Provides Application Programming Interface for Highly Scalable, Reliable, Low-Latency Storage at Very Low Costs" (Amazon press center) |
| T0 source B | Amazon Web Services, official announcement post, 2006-03-14 — "Amazon S3", AWS News Blog, by Jeff Barr (`aws.amazon.com/blogs/aws`) |
| Standards applied | `SRE_PRODUCT_SPEC.md` v1.0, `RESEARCH_REPORT_STANDARD.md` v1.1, `VALUE_CAPTURE_METHODOLOGY.md` v1.0, `SRE_GLOSSARY.md` v1.0 |

Two P0 documents, both first-party Amazon publications dated 2006-03-14, cited as **[AWS, press release, 2006-03-14]** and **[AWS, announcement post, 2006-03-14]**. Nothing published after T0 is used. The announcement post refers readers to third-party coverage; none of it is used here.

**Source-retrieval note.** Source A was retrieved from Amazon's own press center and cross-checked against an archived capture of the original Amazon press-release page; the two agree on all content used. The press-center rendering truncates the headline to "Amazon Web Services Launches"; the archived copy carries the same body, dateline, quotes, boilerplate, and forward-looking-statements section.

Evidence labels used: Evidence-supported, Reasoned Inference, Hypothesis, Unknown (`SRE_GLOSSARY.md` v1.0). Confidence levels: High, Medium, Low (`VALUE_CAPTURE_METHODOLOGY.md` §6).

---

## 1. Executive Summary

Amazon announced S3 as metered object storage reachable over standard web interfaces, priced at fifteen cents per gigabyte-month and twenty cents per gigabyte transferred, with no minimum fee and no limit on the number of objects [AWS, press release, 2006-03-14]. Two disclosed design decisions matter more than the price. The system is stated to be "built from inexpensive commodity hardware components" and required to be "hardware-agnostic, so that savings can be captured as Amazon continues to drive down infrastructure costs" — an explicit statement that the supplier layer is to be interchangeable and that falling hardware costs accrue to the operator. And the access interfaces are "standards-based REST and SOAP interfaces designed to work with any Internet-development toolkit," with an "intentionally minimal feature set," which is a deliberate decision *not* to build technical lock-in at the interface. *(Evidence-supported)*

**Key conclusion.** Value migrates from customer-owned storage infrastructure, provisioned ahead of need, toward a metered service whose operator absorbs the difficulty of building it — and, within the supply chain, from interchangeable hardware suppliers toward the operator that designed for their interchangeability. *(Reasoned Inference, Medium)*

**Tier 1 is assigned, and it rests on data gravity rather than on technology.** The mechanism nameable from these documents is that stored data accumulates and that moving it out is priced per gigabyte, so the cost of leaving grows with use — a switching cost the customer builds for the operator by using the service. Supporting it are the stated scale position, a design whose stated purpose includes capturing declining hardware costs, and a disclosed base of more than 150,000 developers signed up to AWS since 2002. Cutting against it are the standards-based interfaces, the intentionally minimal feature set, commodity hardware, a published price with no minimum, and no disclosed service level agreement. The position is evidenced; the share retained is **Unknown**, because no cost figure appears and the press release states the service "aims to maximize benefits of scale and to pass those benefits on to developers." *(Reasoned Inference for the position, Medium; Unknown for the share)*

**Top companies for further research — not recommendations, not ranked by attractiveness.** This list identifies where the reasoning in §§6–7 lands. It contains no view on valuation or timing.

- **Amazon.com** — operates the storage service, is identified in the source as Nasdaq-listed, and states a design intent of capturing falling infrastructure costs. Tier 1; share retained Unknown. *(Reasoned Inference, Medium)*

The list has one entry. The three early adopters named in the release are a university research project and two private companies; none is established as a listed entity, and none is entered in §8. See §8.

Market blind spot: attention attaches to the fifteen-cent storage price, while the two structurally decisive lines are the hardware-agnostic clause, which pushes value away from suppliers by design, and the twenty-cent transfer charge, which is the only disclosed friction against a customer ever leaving. *(Reasoned Inference, Medium)*

---

## 2. Evidence

Verified facts only. Each is stated in one of the two T0 sources without interpretation. Customer statements reproduced inside the release are recorded as statements the publisher reproduced, which is what the source establishes.

1. Amazon Web Services announced Amazon S3, described as "a simple storage service that offers software developers a highly scalable, reliable, and low-latency data storage infrastructure at very low costs," stated to be available that day. [AWS, press release, 2006-03-14]
2. The release is datelined Seattle, March 14, 2006, and identifies the source as Amazon.com, Inc. [AWS, press release, 2006-03-14]
3. The announcement post states: "Earlier today we rolled out Amazon S3, our reliable, highly scalable, low-latency data storage service." [AWS, announcement post, 2006-03-14]
4. S3 is described as "storage for the Internet," "designed to make web-scale computing easier for developers," providing "a simple web services interface that can be used to store and retrieve any amount of data, at any time, from anywhere on the web." [AWS, press release, 2006-03-14]
5. The release states S3 "gives any developer access to the same highly scalable, reliable, fast, inexpensive data storage infrastructure that Amazon uses to run its own global network of web sites." [AWS, press release, 2006-03-14]
6. The release states: "The service aims to maximize benefits of scale and to pass those benefits on to developers." [AWS, press release, 2006-03-14]
7. The release states S3 "is intentionally built with a minimal feature set," with the focus "on simplicity and robustness." [AWS, press release, 2006-03-14]
8. Functionality stated: write, read, and delete objects containing from 1 byte to 5 gigabytes of data each, with an unlimited number of objects. [AWS, press release, 2006-03-14]
9. Each object is stored and retrieved via a unique developer-assigned key. [AWS, press release, 2006-03-14]
10. Objects can be made private or public, and rights can be assigned to specific users. [AWS, press release, 2006-03-14]
11. S3 "uses standards-based REST and SOAP interfaces designed to work with any Internet-development toolkit." [AWS, press release, 2006-03-14]
12. The announcement post states each block is associated with "a user-defined key and additional key/value metadata pairs," and that each block is protected by an Access Control List allowing the developer to keep the data private, share it for reading, or share it for reading and writing. [AWS, announcement post, 2006-03-14]
13. Stated design requirement — Scalable: S3 "can scale in terms of storage, request rate, and users to support an unlimited number of web-scale applications," and "uses scale as an advantage: adding nodes to the system increases, not decreases, its availability, speed, throughput, capacity, and robustness." [AWS, press release, 2006-03-14]
14. Stated design requirement — Reliable: "Store data durably, with 99.99% availability. There can be no single points of failure. All failures must be tolerated or repaired by the system without any downtime." [AWS, press release, 2006-03-14]
15. The announcement post states: "The system was designed to provide a data availability factor of 99.99%; all data is transparently stored in multiple locations." [AWS, announcement post, 2006-03-14]
16. Stated design requirement — Fast: server-side latency "must be insignificant relative to Internet latency," and "any performance bottlenecks can be fixed by simply adding nodes to the system." [AWS, press release, 2006-03-14]
17. Stated design requirement — Inexpensive: S3 "is built from inexpensive commodity hardware components," so "frequent node failure is the norm and must not affect the overall system," and "it must be hardware-agnostic, so that savings can be captured as Amazon continues to drive down infrastructure costs." [AWS, press release, 2006-03-14]
18. Stated design requirement — Simple: "Building highly scalable, reliable, fast, and inexpensive storage is difficult. Doing so in a way that makes it easy to use for any application anywhere is more difficult. Amazon S3 must do both." [AWS, press release, 2006-03-14]
19. The release states that "a forcing function for the design was that a single Amazon S3 distributed system must support the needs of both internal Amazon applications and external developers of any application," meaning it "must be fast and reliable enough to run Amazon.com's web sites, while flexible enough that any developer can use it for any data storage need." [AWS, press release, 2006-03-14]
20. Ten design principles are listed: decentralization, asynchrony, autonomy, local responsibility, controlled concurrency, failure tolerance, controlled parallelism, decomposition into small well-understood building blocks, symmetry, and simplicity. [AWS, press release, 2006-03-14]
21. Andy Jassy, vice president of Amazon Web Services, is quoted: "Amazon S3 is based on the idea that quality Internet-based storage should be taken for granted," that it "helps free developers from worrying about where they are going to store data, whether it will be safe and secure, if it will be available when they need it, the costs associated with server maintenance, or whether they have enough storage available," and that it "enables developers to focus on innovating with data, rather than figuring out how to store it." [AWS, press release, 2006-03-14]
22. Pricing: developers "pay only for what they consume and there is no minimum fee"; "$0.15 per gigabyte of storage per month and $0.20 per gigabyte of data transferred." [AWS, press release, 2006-03-14]
23. The announcement post states storing 1 GB of data for 1 month "costs just 15 cents," and that "transferring data in and out of the system costs 20 cents per GB," describing the model as "pay-as-you-go." [AWS, announcement post, 2006-03-14]
24. The announcement post states there is also a BitTorrent interface, attributing the observation to a named individual, Colin Faulkingham. [AWS, announcement post, 2006-03-14]
25. Early application — the University of California Berkeley science team responsible for NASA's "Stardust@Home" project is stated to be using S3 to store and deliver 60 million images from a dust particle aerogel experiment, to be delivered to 100,000 volunteers worldwide. [AWS, press release, 2006-03-14]
26. Andrew Westphal, project director of Stardust@Home, is quoted stating the team "quickly ran into challenges when we started the project using our own infrastructure," that S3 "allowed us to proceed without having to worry about building out the massive storage infrastructure we realized that we needed," that the data examination phase is expected "to take only a few months," and that "we can quickly ramp up and back down again without a huge investment." [AWS, press release, 2006-03-14]
27. Early application — CastingWords, a podcast transcription service stated to transcribe audio at $0.42 per minute of audio, is using S3 to store and retrieve original audio files and transcribed texts, and uses Amazon Mechanical Turk to access a network of humans to transcribe the podcasts. [AWS, press release, 2006-03-14]
28. Nathan McFarland, founder of CastingWords, is quoted stating S3 "provides CastingWords with easy-to-use, reliable storage that allows us to concentrate on building our business and not worry about storage solutions," and that "its reliability and Internet accessibility mean that it's always there when and where we need it." [AWS, press release, 2006-03-14]
29. Early application — FilmmakerLIVE.com, a developer of storyboarding software for the motion picture industry, is using S3 to store and share digital storyboard elements with customers worldwide, and its development manager Don Alvarez is stated to be building a further service he expects to announce "this summer." [AWS, press release, 2006-03-14]
30. Alvarez is quoted stating that building a data center for online filmmakers is "serious business when you consider the redundant hardware, racks of hard drives, filtered power lines, 24x7 monitoring, and all the other necessary components," that with S3 "we have instant access to a virtual data center that was far beyond anything we could have hoped to build ourselves," and that S3 lets the company "concentrate our resources on what we do best." [AWS, press release, 2006-03-14]
31. The release states the Amazon Web Services platform launched in July 2002 and that "more than 150,000 developers have signed up to use Amazon Web Services since its inception." [AWS, press release, 2006-03-14]
32. The release states developers "make money by selling the applications they build, charging for the services they offer, or generating referral fees from the Associates sites they build," and that Amazon Web Services "is a division of Amazon Digital Services, Inc." [AWS, press release, 2006-03-14]
33. The release identifies Amazon.com, Inc. as "(Nasdaq:AMZN), a Fortune 500 company based in Seattle." [AWS, press release, 2006-03-14]
34. The forward-looking-statements section lists risks including competition, management of growth, potential fluctuations in operating results, system interruption, limited operating history, government regulation and taxation, payments, fraud, and new business areas. [AWS, press release, 2006-03-14]

**Not stated in either T0 source, and therefore Unknown:** any service level agreement or contractual availability or durability commitment, as distinct from the stated design requirement; any separate durability figure; Amazon's cost to store or transfer a gigabyte, and therefore any margin; any request or operation charge, as distinct from storage and transfer charges; the number, location, or identity of the multiple locations in which data is stored; any hardware, drive, facility, or network supplier; total stored data, object counts, or customer counts for S3; how many of the 150,000 signed-up developers use S3; any encryption or security control beyond the stated access-rights model; any competing service or competitor; any commercial term between Amazon and any company named; and any statement about how a customer would move data out of the service other than the per-gigabyte transfer charge. *(Unknown)*

---

## 3. Customer Problem

**What end-user problem changed.** The buyer had to build storage capacity before knowing whether the project would need it, and the build was a data-centre problem rather than a storage-purchase problem. Both named commercial adopters describe exactly this. FilmmakerLIVE's development manager enumerates what building it entails — "redundant hardware, racks of hard drives, filtered power lines, 24x7 monitoring, and all the other necessary components" — and states the result was "far beyond anything we could have hoped to build ourselves" [fact 30]. The Stardust@Home project director states the team "quickly ran into challenges when we started the project using our own infrastructure" and that the service let it proceed "without having to worry about building out the massive storage infrastructure we realized that we needed" [fact 26]. *(Evidence-supported)*

Three components of the problem are distinguishable in the sources:

- **Capacity committed ahead of knowledge.** Jassy's statement names the specific worries removed: where data will be stored, whether it will be safe and secure, whether it will be available when needed, "the costs associated with server maintenance," and "whether they have enough storage available" [fact 21]. *(Evidence-supported)*
- **Demand with a short or uncertain life.** Stardust@Home expects its data examination phase "to take only a few months" and values being able to "quickly ramp up and back down again without a huge investment" [fact 26]. Capacity bought for a few months of use is capacity mostly wasted. *(Evidence-supported)*
- **Attention diverted from the actual product.** Both commercial adopters frame the gain as concentration rather than cost: S3 "allows us to concentrate on building our business and not worry about storage solutions" [fact 28], and lets the company "concentrate our resources on what we do best" [fact 30]. Jassy's framing matches — developers "focus on innovating with data, rather than figuring out how to store it" [fact 21]. *(Evidence-supported)*

**Who is worse off without it:** developers and projects with data-intensive workloads and no appetite for building storage infrastructure — a research project distributing 60 million images to 100,000 volunteers, a transcription service holding audio and text, and a storyboarding tool sharing assets with customers worldwide [facts 25, 27, 29]. *(Evidence-supported)*

The sources do not disclose what any of these parties previously spent, what capacity they needed, or how many organisations share this problem. The three adopters are selected and published by the vendor. The magnitude of the customer problem is therefore **Unknown**.

---

## 4. Industry Change

**The concrete change.** Storage becomes a metered service addressed over standard web interfaces, with no minimum fee, no limit on object count, and per-gigabyte charges for capacity held and data moved [facts 8, 11, 22]. *(Evidence-supported)*

**Which system requirement shifts.** Three requirements move together in the sources:

1. **The unit of purchase and the moment of purchase.** From provisioned capacity acquired ahead of need to a gigabyte-month consumed and billed after the fact, with no minimum [facts 22, 23]. *(Evidence-supported)*
2. **Who bears the engineering difficulty.** The release states plainly that "building highly scalable, reliable, fast, and inexpensive storage is difficult" and that making it easy to use for any application "is more difficult" [fact 18]. That difficulty moves from each buyer to one operator, which amortises it across internal Amazon applications and external developers under a stated forcing function [fact 19]. *(Evidence-supported)*
3. **Where hardware sits in the value chain.** The system is required to be built from inexpensive commodity components and to be "hardware-agnostic, so that savings can be captured as Amazon continues to drive down infrastructure costs" [fact 17]. Component suppliers become interchangeable inputs by design, and the design states where their falling prices are meant to land. *(Evidence-supported)*

**Why the prior solution becomes insufficient.** Owning storage requires solving a distributed-systems problem the sources describe as difficult, and paying for it in advance of use. For workloads whose life is short — a few months of image examination — or whose scale is unknown at the outset, the prior approach charges the buyer for peak capacity, permanent infrastructure, and continuous operation to serve temporary or uncertain demand [facts 18, 26, 30]. A design in which "adding nodes to the system increases, not decreases, its availability, speed, throughput, capacity, and robustness" [fact 13] is the property an individual buyer's small deployment cannot have. *(Reasoned Inference)*

**Structural or cyclical.** Structural. The change alters what participants must do: a developer stores objects through a web-service call against a key it assigns, rather than acquiring, housing, powering, and monitoring equipment [facts 9, 11, 30]. This is a change in the mechanism of provision, not in its volume. *(Reasoned Inference)*

**What the sources do not settle.** The stated 99.99% figure is a *design requirement* and, in the announcement post, an explicit design goal — "the system was designed to provide a data availability factor of 99.99%" [facts 14, 15]. No service level agreement or contractual commitment appears in either document [see the §2 Unknown list]. The release also pairs the word "durably" with an availability percentage and gives no separate durability figure [fact 14]. Whether a buyer had any enforceable assurance at T0 is **Unknown**.

---

## 5. Value Chain Analysis

**Purpose.** Map how value flows through the value chain after the change described in §4. This section is a map, not a conclusion: it identifies no winner and names no capturer. Layer existence and role are drawn from §2 facts; scarcity, bottleneck, and direction of value change are reasoning, labeled per row.

Granularity is one functional layer per row, ordered from components through end demand.

| Layer | Role | Scarcity | Bottleneck | Expected Value Change | Evidence Label |
| --- | --- | --- | --- | --- | --- |
| Commodity hardware components | Supply the drives and nodes the system is built from; the design requires hardware-agnosticism so that savings accrue as infrastructure costs fall [fact 17] | No | No | ↓ | Reasoned Inference |
| Data centre facilities, power, and monitoring | House, power, and watch the equipment; enumerated in a customer statement as what building it would require [fact 30] | Unknown | Unknown | Unknown | Unknown |
| Network transit and data transfer | Carries data in and out of the system; priced at twenty cents per gigabyte, with server-side latency stated to be insignificant relative to Internet latency [facts 16, 22, 23] | Unknown | Unknown | ↑ | Reasoned Inference |
| Distributed storage system engineering and operation | Builds and runs the decentralised, failure-tolerant system; the sources state doing this is difficult and doing it usably is more difficult [facts 13, 18, 20] | Yes | Yes | ↑ | Reasoned Inference |
| Metered object storage service | Sells capacity by the gigabyte-month with no minimum fee, unlimited object count, and developer-assigned keys [facts 8, 9, 22] | Unknown | No | ↑ | Reasoned Inference |
| Access interfaces and access control | Expose the service through standards-based REST and SOAP interfaces intended to work with any toolkit, plus access-control lists and a BitTorrent interface [facts 11, 12, 24] | No | No | → | Reasoned Inference |
| Complementary platform services | Compose with storage in a customer workflow; one adopter is stated to use Amazon Mechanical Turk alongside S3 [fact 27] | Unknown | No | ↑ | Reasoned Inference |
| Customer-owned storage provisioning | Previously supplied capacity by purchase and self-operation ahead of need [facts 21, 26, 30] | No | No | ↓ | Reasoned Inference |
| Application development | Builds the applications that store and serve data; more than 150,000 developers are stated to have signed up to the platform since 2002 [facts 31, 32] | No | No | ↑ | Reasoned Inference |
| End users of data-intensive services | Consume the applications — volunteers scanning images, transcription customers, filmmakers sharing storyboards [facts 25, 27, 29] | No | No | ↑ | Hypothesis |

**Layers with no participant named in the T0 sources.** Commodity hardware components, data centre facilities and power, network transit, and customer-owned storage provisioning are each established as necessary or displaced by the disclosed design and by customer statements [facts 17, 22, 30], yet no company is named in any of them. The release states that data is "transparently stored in multiple locations" [fact 15] without identifying one. Per `RESEARCH_REPORT_STANDARD.md` §5, these layers are recorded and left unattributed.

**Reading notes, held separate from the table.**

- Exactly one layer is marked `Bottleneck: Yes` — distributed storage system engineering and operation — and the assessment is `Reasoned Inference` drawn from an unusually direct statement: the sources assert that building this class of system is difficult, and that building it in a form usable by any application is more difficult still [fact 18]. Difficulty stated by the party that did it is not proof of scarcity, but it is the only bottleneck candidate either document supports.
- The `Commodity hardware components` row is the most consequential in this table, and its `↓` is close to being stated outright. The design requirement says the system must be hardware-agnostic "so that savings can be captured as Amazon continues to drive down infrastructure costs" [fact 17]. A buyer that designs for supplier interchangeability and names where the savings land has described a value shift away from that layer. The label remains `Reasoned Inference` because the source describes a design intent, not a realised outcome.
- `Access interfaces and access control` is marked `→` and `Scarcity: No`, which is a deliberate choice by the operator rather than a weakness in the analysis. Interfaces are "standards-based" and "designed to work with any Internet-development toolkit," and the feature set is "intentionally" minimal [facts 7, 11]. This is a layer where lock-in could have been built and was not, which is why §7 does not rest its capture argument there.
- Two layers carry `↓`: hardware components and customer-owned storage provisioning. The second is the demand-side displacement the customer statements describe [facts 26, 30]; the first is a supply-side displacement the design requirements describe [fact 17]. Value moving away from both, toward the operator between them, is the shape of this case.
- `End users of data-intensive services` carries `Hypothesis` because their gain is stated only through the vendor's selected adopters and their forward-looking descriptions [facts 26, 28, 30], not through any disclosed outcome.
- The `Metered object storage service` row is marked `Bottleneck: No`. No capacity cap, quota, beta limit, or access restriction is disclosed: the release states an unlimited number of objects, no minimum fee, and availability that day [facts 1, 8, 22]. The layer is where the value is priced, but nothing in the sources shows it constraining the system.

No winner is identified in this section. Which participants capture value from the layers marked `↑` is addressed in §§7–8.

---

## 6. Value Migration

**Where value is moving.** Four movements are supportable from the T0 sources. Each names its origin, its destination, and the facts it rests on.

| # | From | To | Basis | Evidence Label |
| --- | --- | --- | --- | --- |
| 1 | Customer-owned storage infrastructure, built and operated ahead of need | A metered service billed per gigabyte-month with no minimum fee | Customer statements describing infrastructure they did not have to build [facts 26, 30]; Jassy's enumeration of removed worries [fact 21]; pricing terms [fact 22] | Reasoned Inference |
| 2 | Commodity hardware suppliers' share of the value of storage | The operator that designed for their interchangeability | Design requirement that the system be built from inexpensive commodity components and be "hardware-agnostic, so that savings can be captured as Amazon continues to drive down infrastructure costs" [fact 17] | Reasoned Inference |
| 3 | Capital committed in advance of demand | Operating spend that tracks consumption, including down | "Pay only for what they consume," no minimum fee [fact 22]; ability to "ramp up and back down again without a huge investment" [fact 26] | Reasoned Inference |
| 4 | Storage engineering performed separately by each developer | One distributed system amortised across internal Amazon applications and external developers | Stated forcing function that a single system serve both [fact 19]; stated difficulty of building such a system [fact 18] | Reasoned Inference |

**Why value moves — the reasoning steps, each input fact cited.**

1. Data-intensive projects were blocked or burdened by having to build storage infrastructure before using it, and the burden is described as a data-centre burden, not a purchase [facts 21, 26, 30]. *(Evidence-supported that the sources state this)*
2. Building a system with the stated properties is difficult, and building it in a form any application can use is stated to be harder [fact 18]. *(Evidence-supported)*
3. One operator can amortise that difficulty across internal and external demand under a stated forcing function [fact 19], while using commodity components whose falling prices its design is meant to capture [fact 17]. *(Evidence-supported that these are the stated design properties)*
4. Where the difficulty is absorbed centrally and the result is priced per gigabyte with no minimum, the buyer's rational choice moves from building to renting for workloads whose scale or duration is uncertain — which is what the named adopters describe choosing [facts 22, 26, 30]. *(Reasoned Inference)*
5. Once objects accumulate in the service, removing them is a metered event at twenty cents per gigabyte transferred [facts 22, 23]. The cost of leaving therefore rises with the amount stored, and the customer increases it by using the service as intended. *(Reasoned Inference)*
6. Step 5 is the mechanism that converts a migration into a retained position, and it is the only such mechanism these documents support. It is a pricing property, not a technical one: the interfaces are deliberately standard and the feature set deliberately minimal [facts 7, 11]. *(Reasoned Inference)*

**What the migration does not establish.** The sources give the price the buyer pays and no cost the operator bears, so whether movement of value corresponds to retention of profit is **Unknown**. The release states the service "aims to maximize benefits of scale and to pass those benefits on to developers" [fact 6] — a first-party statement that the intended destination of the scale surplus is at least partly the buyer. This is recorded as a disclosed tension with movement 2, not resolved: the same document states that hardware savings are to be "captured" and that scale benefits are to be "passed on." Which dominates is not determinable at T0. *(Unknown)*

---

## 7. Value Capture

Applying `VALUE_CAPTURE_METHODOLOGY.md`. Value creation is not value capture, and neither price disclosure nor technical achievement is evidence of capture.

**Step 1 — Industry bottleneck.** Building and operating a decentralised, failure-tolerant storage system that is simultaneously scalable, reliable, fast, inexpensive, and usable by any application. The sources state this is difficult and that the combination is harder still [facts 13, 18, 20]. *(Reasoned Inference, Medium)*

**Step 2 — Scarce capability.** Operating one such system at a scale where adding nodes improves availability, speed, throughput, capacity, and robustness [fact 13], amortised across both Amazon's own global network of web sites and external developers [facts 5, 19]. What is scarce is not the hardware — the design requires it to be commodity and interchangeable [fact 17] — nor the interface, which is standards-based by choice [fact 11]. *(Reasoned Inference, Medium)*

**Step 3 — Value migration.** As traced in §6: away from customer-owned infrastructure and away from interchangeable component suppliers, toward the operator between them.

**Step 4 — Economic profit capture.** No cost, margin, or revenue figure for the service appears in either T0 source. Price is disclosed at fifteen cents per gigabyte-month and twenty cents per gigabyte transferred [facts 22, 23], with no request charge disclosed. Economic profit capture is therefore **not measurable** at T0. This report assesses the *position* from which capture would occur and records the *magnitude* as Unknown. *(Unknown)*

**Step 5 — Ranking by sustainable capture.**

### Tier 1 — Direct Value Capturer

**Amazon.com** *(Reasoned Inference, Medium)*

Assigned. Amazon operates the service, controls the layer §5 marks as the bottleneck, and has a nameable mechanism by which its position strengthens rather than decays with use. Three components support the assignment:

1. **Data gravity priced into the tariff.** Stored data accumulates under developer-assigned keys inside customer applications [facts 8, 9], and data moved out is charged at twenty cents per gigabyte [facts 22, 23]. The cost of departure is proportional to the value already entrusted, and the customer raises it by normal use. This is a switching cost the operator did not have to build. *(Reasoned Inference)*
2. **A cost position designed to absorb supplier deflation.** The system must be hardware-agnostic "so that savings can be captured as Amazon continues to drive down infrastructure costs" [fact 17], and it runs as one system serving both Amazon's own sites and external developers [facts 5, 19]. *(Reasoned Inference from an explicit design statement)*
3. **An existing route to demand.** More than 150,000 developers are stated to have signed up to the platform since 2002 [fact 31], and the platform's economics already give them reasons to build on it [fact 32]. *(Reasoned Inference)*

**Facts that cut against the assignment, recorded rather than set aside.** The interfaces are standards-based and intended to work with any toolkit [fact 11]; the feature set is intentionally minimal [fact 7]; the hardware is commodity by requirement [fact 17]; the price is published with no minimum fee [fact 22]; no service level agreement is disclosed [§2 Unknown list]; and the release itself states the aim of passing scale benefits on to developers [fact 6]. Every one of these lowers the barrier to a competing operator or to a customer negotiating the surplus away. This is why confidence is **Medium** and not High, and why the mechanism is stated as data gravity rather than as technology or interface control.

**Magnitude of capture: Unknown.** The share of created value retained cannot be derived without a cost figure, and none is disclosed. A defensible position and a large retained share are different claims, and only the first is supported here.

### Tier 2 — Direct Beneficiary

**Vacant.** No participant other than Amazon is named in these documents whose economics improve first-order from the change and who is shown to retain part of the improvement. Amazon Digital Services, Inc. is named as the division operating the platform [fact 32]; it is not a separate participant. Amazon Mechanical Turk is named as a complementary service used alongside S3 by one adopter [fact 27]; it is also Amazon's. Component suppliers, facility operators, and network providers would occupy this tier if named, and none is [see §5]. Per `RESEARCH_REPORT_STANDARD.md`, a tier left empty stays empty; supplying a plausible name would be a defect. *(Unknown)*

### Tier 3 — Indirect Beneficiary

Three adopters are named, each benefiting through use of the service rather than through the change itself:

- **University of California, Berkeley Stardust@Home team** — stated to store and deliver 60 million images to 100,000 volunteers, having run into challenges with its own infrastructure [facts 25, 26]. A university research project associated with a NASA mission, not a commercial participant. *(Evidence-supported that it is an adopter; Reasoned Inference, Medium that it benefits)*
- **CastingWords** — a transcription service storing audio and text in S3 and composing it with Mechanical Turk [facts 27, 28]. *(Reasoned Inference, Medium)*
- **FilmmakerLIVE.com** — a storyboarding software developer sharing assets with customers worldwide, stated to be building a further service on the same basis [facts 29, 30]. *(Reasoned Inference, Medium)*

Each benefit is stated by the party itself inside a vendor announcement, and none is quantified. NASA is named only as the project's mission context [fact 25] and is not a participant in this analysis.

### Tier 4 — Potential Beneficiary

- **Developers in aggregate, unattributed.** The stated aim is to pass the benefits of scale on to developers [fact 6], and more than 150,000 are signed up to the platform [fact 31]. If that intent holds, buyers rather than the operator capture much of the surplus — which is the principal alternative explanation to the Tier 1 assignment above, and is not excluded by anything in these documents. *(Hypothesis, Low)*
- **Unnamed component, facility, and network suppliers.** They gain volume as centralised operation grows, while the disclosed design works against their pricing power [fact 17]. Direction of net effect is **Unknown**.
- **Providers of complementary services composed with storage.** One instance is disclosed and it is Amazon's own [fact 27]; whether third parties occupy this position is **Unknown**.

**Alternative explanations considered.** That the price is simply below cost and buys share without capture — cost is undisclosed, so not excludable *(Unknown)*. That the standards-based interfaces make the service a commodity from the start, leaving no defensible position — argued against by data gravity but not refuted *(Hypothesis)*. That the durable asset is the 150,000-developer relationship rather than the storage system, in which case capture attaches to the platform rather than to this service *(Hypothesis, Low)*. That capture ultimately accrues to Amazon's own retail operations through cheaper infrastructure for its "global network of web sites" [fact 5] rather than to the service's own economics *(Hypothesis, Low)*.

---

## 8. Listed Companies

Companies whose listed status is established by the T0 sources. Inclusion identifies a subject for further research and is not a recommendation. No valuation, price, or timing appears in this section.

| Company | Role | Why | Evidence | Confidence |
| --- | --- | --- | --- | --- |
| Amazon.com, Inc. (Nasdaq: AMZN) | Operates Amazon S3 through its Amazon Web Services division | Controls the layer §5 identifies as the bottleneck; holds a position that strengthens with use through per-gigabyte transfer pricing against accumulated stored data; states a design intent of capturing falling infrastructure costs. Share of value retained is Unknown | Facts 1, 5, 8, 9, 13, 17, 18, 19, 22, 23, 31, 33 | Medium |

**Why this table has one row.** Only one company's listed status is established by the T0 sources: the release identifies Amazon.com, Inc. as "(Nasdaq:AMZN), a Fortune 500 company based in Seattle" [fact 33]. Of the other parties named — the University of California, Berkeley Stardust@Home team, NASA, CastingWords, FilmmakerLIVE.com, and Amazon Digital Services, Inc. — none is stated to be listed, and three are not companies at all or are subsidiaries. Establishing listed status for any of them would require sources outside T0, which the sprint constraints exclude. The four value-chain layers with no named participant [see §5] contribute no rows for the same reason: the sources establish that those layers must exist without naming anyone in them.

**Explicitly excluded from this table.** Any company not named in the two T0 documents. Storage hardware vendors, drive manufacturers, network operators, facility operators, and competing storage providers are absent from the sources, and none may be inferred into this table from the existence of the layers they would occupy.

---

## 9. Risks

Assumptions that could fail, and the evidence that would invalidate the reasoning in §§6–7. Per `VALUE_CAPTURE_METHODOLOGY.md` §7, each thesis states what would strengthen, weaken, and invalidate it.

**R1 — The retention mechanism is a price, and prices change.** Tier 1 rests principally on data gravity created by a twenty-cent-per-gigabyte transfer charge against accumulated stored data [facts 22, 23]. Unlike a proprietary interface or a scarce input, a tariff can be cut by the operator, undercut by a competitor, or bypassed by cheap bulk migration. *(Reasoned Inference)*
- Strengthens: transfer pricing persists while stored volumes grow; migration away from the service proves costly in practice.
- Weakens: transfer charges fall sharply or are waived for outbound migration.
- Invalidates: low-friction, low-cost bulk migration between equivalent services becomes normal, leaving no switching cost.

**R2 — The design deliberately forgoes technical lock-in, so replication may be cheap.** Interfaces are standards-based and intended to work with any toolkit, the feature set is intentionally minimal, and hardware is commodity by requirement [facts 7, 11, 17]. Nothing disclosed prevents another operator with scale from offering an equivalent service. No competitor is named in either source. *(Reasoned Inference)*
- Strengthens: no equivalent standards-based object storage service appears from another operator, or later entrants fail to reach comparable scale.
- Weakens: comparable services appear at similar prices.
- Invalidates: multiple operators offer interchangeable object storage at similar prices with low switching friction, competing the surplus away and locating capture with buyers.

**R3 — The stated surplus destination may be the buyer, not the operator.** The release states the service "aims to maximize benefits of scale and to pass those benefits on to developers" [fact 6]. If pass-through dominates, the Tier 4 hypothesis in §7 is correct and the Tier 1 assignment overstates retention. *(Hypothesis)*
- Strengthens: prices hold while the operator's costs fall.
- Weakens: repeated price reductions track or outpace cost declines.
- Invalidates: sustained pricing at or near cost, with the economic surplus visibly accruing to customers.

**R4 — Margin is unmeasured, so the position may be unprofitable.** No cost, revenue, or margin figure appears in either document, and no request charge is disclosed alongside storage and transfer charges [facts 22, 23; §2 Unknown list]. A defensible position that never earns economic profit is not value capture under this methodology. *(Unknown)*
- Strengthens: disclosure showing the service earns economic profit.
- Weakens: disclosure showing sustained losses or margins below the cost of capital.
- Invalidates: durable negative economic profit.

**R5 — Reliability is a design requirement, not a commitment.** The 99.99% figure is stated as a design requirement and as what the system "was designed to provide," with no service level agreement, no contractual commitment, and no separate durability figure [facts 14, 15]. If production workloads will not move without an enforceable assurance, migration stalls at experimental use. *(Reasoned Inference)*
- Strengthens: publication of an SLA or contractual durability commitment; production adoption without one.
- Weakens: visible data-loss or availability incidents; adoption confined to non-critical workloads.
- Invalidates: reliability materially below the stated design goal, preventing production migration.

**R6 — Demand evidence is vendor-curated and thin.** Three adopters are named, all selected and published by the vendor; one is a research project with a stated horizon of "only a few months," and one describes a service it has not yet announced [facts 25, 26, 29]. None discloses spend or volume. *(Evidence-supported that this is the extent of the evidence)*
- Strengthens: adoption disclosed beyond the named three; the named adopters continuing use beyond their stated horizons.
- Weakens: no further adoption disclosed; named adopters discontinuing.
- Invalidates: adoption confined to short-lived projects, so stored volume never accumulates — which would also remove the R1 mechanism.

**R7 — Transfer pricing cuts both ways.** The same twenty-cent charge that creates switching cost is also a charge on delivery. One named adopter intends to deliver 60 million images to 100,000 volunteers [fact 25]. For delivery-heavy workloads, transfer cost may dominate storage cost and deter adoption. Whether the tariff attracts or repels the heaviest users is **Unknown**. *(Unknown)*
- Strengthens: delivery-heavy workloads adopt at the disclosed price.
- Weakens: delivery-heavy adopters move egress elsewhere.
- Invalidates: transfer pricing proving prohibitive for the workloads that would otherwise accumulate the most stored data.

**R8 — Supplier interchangeability is an intent, not a demonstrated outcome.** Movement 2 in §6 rests on a design requirement stating that savings are to be captured as infrastructure costs fall [fact 17]. Whether component suppliers in fact lose share of value is not observable in these documents, and no supplier is named. *(Unknown)*
- Strengthens: evidence of supplier substitution without service disruption.
- Weakens: dependence on a specific supplier or component becoming visible.
- Invalidates: a scarce component whose supplier holds pricing power over the operator.

---

## 10. Monitoring Signals

Future indicators and verification milestones, each with the evidence that would close it. Items marked ○ correspond to an Unknown or a Hypothesis recorded above; per `RESEARCH_REPORT_STANDARD.md`, each open item names the evidence that would close it.

**Closing the recorded Unknowns**

| ○ | Open item | Evidence that would close it | Bears on |
| --- | --- | --- | --- |
| ○ | No SLA or contractual availability/durability commitment | Publication of a service level agreement or durability commitment in official documentation | R5 |
| ○ | Cost and margin undisclosed | Segment-level or service-level disclosure in Amazon.com filings | Step 4, R4 |
| ○ | Whether charges beyond storage and transfer exist | Official pricing documentation introducing request or operation charges | Step 4, R7 |
| ○ | Number and identity of the "multiple locations" | Official documentation naming regions or facilities | §5 unattributed layers |
| ○ | No supplier of any kind named | Disclosure by Amazon or by a supplier identifying the relationship | R8 |
| ○ | No competing service named | An official announcement of comparable object storage by another operator | R2 |
| ○ | Adoption beyond three named adopters | Disclosure of stored volume, object counts, or customer counts | R6 |
| ○ | Whether scale benefits are passed to buyers or retained | Price changes measured against disclosed cost movement | R3, Tier 4 hypothesis |

**Verification milestones**

1. **Whether the disclosed prices move.** Fifteen cents per gigabyte-month and twenty cents per gigabyte transferred are the T0 baseline [facts 22, 23]. Direction and frequency of change, read against cost disclosure, separates retention from pass-through. Source: official AWS pricing documentation.
2. **Whether transfer pricing is preserved, split, or waived.** Any divergence between inbound and outbound charges, or any waiver for outbound migration, directly tests the mechanism the Tier 1 assignment rests on. Source: official AWS pricing documentation.
3. **Whether a service level agreement appears.** Converts the 99.99% design requirement into a commitment, or shows that production adoption proceeded without one. Source: official AWS documentation.
4. **Whether the stated object and size limits change.** One byte to five gigabytes per object with unlimited object count is the T0 boundary [fact 8]. Source: official AWS documentation.
5. **Whether the intentionally minimal feature set stays minimal.** Additions beyond write, read, delete, keys, access rights, and the BitTorrent interface [facts 7, 8, 10, 12, 24] would indicate the operator building differentiation the T0 design deliberately omitted — relevant to R2.
6. **Whether the standards-based interface commitment holds.** Movement toward proprietary interfaces would change the basis of the capture argument from data gravity to interface control. Source: official AWS documentation.
7. **Whether the internal/external forcing function persists.** The claim that developers use "the same" infrastructure as Amazon's own sites [facts 5, 19] is testable against later official statements about how the system is operated.
8. **Whether AWS is reported as a distinct financial unit.** At T0, AWS is described as a division of Amazon Digital Services, Inc. [fact 32]. Segment reporting would close the margin Unknown. Source: Amazon.com filings.
9. **Whether the developer base grows beyond the disclosed figure.** More than 150,000 signed up since 2002 [fact 31], with the S3 share unstated. Source: official AWS announcements.
10. **Whether the named early adopters continue.** Stardust@Home stated a horizon of "only a few months" [fact 26], and FilmmakerLIVE.com stated it would announce a further service "this summer" [fact 29]. Both are datable checks on R6. Source: announcements by those parties.
11. **Whether complementary services are composed with storage by third parties.** One composition is disclosed and it is Amazon's own [fact 27]. Source: official announcements.
12. **Whether reliability incidents become visible.** Bears on R5 and on whether the design goal is met in operation. Source: official status or incident communications.

---

## Compliance Record

| Requirement | Status |
| --- | --- |
| Section order per `RESEARCH_REPORT_STANDARD.md` v1.1 §§1–10 | Followed |
| P0 sources only, both dated T0 (2006-03-14) | Two first-party Amazon documents; no post-T0 material |
| Facts separated from reasoning | §2 facts only; §§3–7 reasoning, labeled |
| Every conclusion carries exactly one evidence label | Yes |
| Unknown remains Unknown | 8 items recorded in §10 with closing evidence named; magnitude of capture left Unknown |
| No inferred participants | 4 value-chain layers left unattributed; no supplier, facility, network, or competitor named |
| Tier 1 | Assigned to Amazon.com (Reasoned Inference, Medium); counter-evidence recorded |
| Tier 2 | Vacant; left vacant |
| No investment recommendation | None |
| No stock price discussion | None; Nasdaq listing cited only to establish listed status |
| Confidence per `VALUE_CAPTURE_METHODOLOGY.md` §6 | High / Medium / Low only |
| Falsification per `VALUE_CAPTURE_METHODOLOGY.md` §7 | 8 risks, each with strengthen / weaken / invalidate |
| Exclusions per `VALUE_CAPTURE_METHODOLOGY.md` §8 | No stock price, sentiment, technical analysis, or short-term movement |
