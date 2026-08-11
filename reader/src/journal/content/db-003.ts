import type { JournalBrief } from "../types.ts";
import { CONTINUE_READING, JOURNAL_FOOTER } from "./shared.ts";

/** DB-003 — Public Beta Sprint 2 editorial rewrite; facts and reasoning unchanged. */
export const db003JournalZh: JournalBrief = {
  slug: "db-003",
  locale: "zh",
  productId: "DB-003",
  homeHref: "/zh",
  hero: {
    quoteLines: [
      "头条是 EUV 进客户。",
      "T0 可抓取的，仍是浸没延寿组合。",
    ],
    title: "ASML：T0 抓取在浸没延寿，不在 EUV 已落地",
    summary:
      "2010 年 2 月 22 日，ASML 宣布台积电将安装 NXE:3100 用于研发，并报出第 100 台 XT:19x0 与 NXT 爬坡。",
    meta: { id: "DB-003", readingTime: "5 min", industry: "Semiconductors" },
  },
  question: {
    text: "若近端稀缺层是让多重曝光可制造的扫描仪—照明器—SMO 耦合栈，价值迁向谁？",
  },
  story: {
    paragraphs: [
      "先进制程还得造得出来。",
      "浸没撞上低 k1 极限与多重曝光。",
      "套刻、CDU、产能一起收紧。",
      "继续靠浸没缩微，又贵又慢。",
      "买方要的是两件事同时成立。",
      "浸没还能撑住。",
      "EUV 继续发育。",
      "ASML 在 T0 的答案，不是“EUV 今天全面替换”。",
      "而是耦合栈：浸没产能（XT/NXT）+ 可编程照明与 SMO + EUV 作研发落点。",
      "真正在出货的，是浸没延寿。",
      "EUV 被框为潜在降本路径。",
      "量产 EUV 最终抬高还是压低光刻层价值，仍属 Unknown。",
    ],
  },
  diagram: {
    nodes: ["多重曝光压力", "浸没延寿（XT/NXT + FlexRay + SMO）", "EUV 研发落点（NXE）"],
    caption: "近端抓取：耦合栈让多重曝光可制造；EUV 是落点，不是当日替换",
  },
  keyInsight: {
    sentence: "稀缺点在浸没延寿组合，不在 EUV 已量产。",
  },
  analysis: {
    paragraphs: [
      "2010 年 2 月 22 日。",
      "同日三份相关公告。",
      "台积电接收 NXE:3100 用于研发；计划共六台开发工具。",
      "第 100 台 XT:19x0 浸没出货；NXT 继续爬坡。",
      "FlexRay 与 SMO 定位为多重曝光下延寿浸没。",
      "EUV 被讨论为相对继续硬撑浸没的潜在降本路径。",
      "量产时点与性能承诺在 T0 未成为闭合事实。",
      "若近端稀缺层是让多重曝光可制造的扫描仪—照明器—SMO 耦合栈，ASML 处在该组合中心。",
      "来源报告里 ASML 是该浸没组合上最清晰的结构性受益方（Tier 1）。",
      "Tier 2 空位。",
      "台积电为现场 EUV 研发 Tier 3。",
      "价格、其他 NXE 接收方、EUV 抬高还是压低光刻层价值，仍属 Unknown。",
      "近端机制清楚，长期收益大小未定。",
    ],
  },
  worldModel: {
    title: "World Model",
    principle: "不要只看下一代工具进了客户。先问自己：近端谁拥有让旧路径仍可制造的耦合栈？",
    applyLabel: "Where else can this apply?",
    applyTo: ["先进制程光刻", "多重曝光可制造性", "浸没延寿工具链", "EUV 研发落点", "扫描仪—照明—SMO 组合"],
  },
  changeMind: {
    prompt: "什么会改变今天的结论？",
    items: [
      "对手多重曝光扫描仪匹配套刻、CDU、产能，却不靠 ASML 耦合栈",
      "盈余主要落在买方或光学/光源供应商，而非扫描仪厂商",
      "量产 EUV 结束多重曝光，且 ASML 丢掉 EUV 卡位",
      "先进制造可不靠浸没延寿组合继续推进",
    ],
  },
  continueThinking: {
    title: CONTINUE_READING,
    items: [
      { id: "DB-001", slug: "db-001", title: "英伟达把 AI 算力从芯片推进到机柜", href: "/zh/briefs/db-001" },
      { id: "DB-008", slug: "db-008", title: "MI300：竞争看 HBM3 与 ROCm，不看峰值 FLOPs", href: "/zh/briefs/db-008" },
      { id: "DB-002", slug: "db-002", title: "CUDA：稀缺点在编程模型，不在显卡速度", href: "/zh/briefs/db-002" },
    ],
  },
  footer: JOURNAL_FOOTER,
};

/** DB-003 — Public Beta Sprint 2 editorial rewrite; facts and reasoning unchanged. */
export const db003JournalEn: JournalBrief = {
  slug: "db-003",
  locale: "en",
  productId: "DB-003",
  homeHref: "/",
  hero: {
    quoteLines: [
      "The headline is EUV at customers.",
      "Durable T0 capture is still immersion extension.",
    ],
    title: "ASML Places EUV Tools While Immersion Extension Still Carries the Capture Story",
    summary:
      "On 22 February 2010, ASML said TSMC would install an NXE:3100 for R&D, and reported the 100th XT:19x0 plus NXT ramp.",
    meta: { id: "DB-003", readingTime: "5 min", industry: "Semiconductors" },
  },
  question: {
    text: "If the near-term scarce layer is the coupled scanner–illuminator–SMO stack that makes multi-exposure manufacturable, where does value migrate?",
  },
  story: {
    paragraphs: [
      "Leading-edge shrink still has to be manufacturable.",
      "Immersion hits low-k1 limits and multi-patterning.",
      "Overlay, CDU, and throughput tighten together.",
      "Continued immersion shrink is costly and slow.",
      "Buyers need two things at once.",
      "Immersion must stay viable.",
      "EUV must keep developing.",
      "ASML’s answer at T0 is not “EUV replaces everything today.”",
      "It is a coupled stack: immersion productivity (XT/NXT) + programmable illumination and SMO + EUV as development placement.",
      "What is shipping is immersion extension.",
      "EUV is framed as a potential cost reducer.",
      "Whether production EUV ultimately raises or lowers lithography-layer value is still Unknown.",
    ],
  },
  diagram: {
    nodes: [
      "Multi-patterning pressure",
      "Immersion extension (XT/NXT + FlexRay + SMO)",
      "EUV development placement (NXE)",
    ],
    caption: "Near-term capture: the coupled stack that makes multi-exposure manufacturable; EUV is placement, not same-day replacement",
  },
  keyInsight: {
    sentence: "Near-term scarcity is immersion extension — not EUV already in production.",
  },
  analysis: {
    paragraphs: [
      "22 February 2010.",
      "Three related releases the same day.",
      "TSMC to receive NXE:3100 for R&D; six development tools in the program.",
      "100th XT:19x0 immersion shipment; NXT ramp continues.",
      "FlexRay and SMO positioned to extend immersion under multi-patterning.",
      "EUV is discussed as a potential path to lower cost versus stretching immersion further.",
      "Production timing and performance commitments are not closed facts at T0.",
      "If the near-term scarce layer is the coupled scanner–illuminator–SMO stack that makes multi-exposure manufacturable, ASML sits at the centre of that portfolio.",
      "ASML is the clearest structural beneficiary on that immersion portfolio (Tier 1).",
      "Tier 2 vacant.",
      "TSMC Tier 3 for on-site EUV R&D.",
      "Prices, other NXE recipients, and whether EUV increases or decreases lithography-layer value remain Unknown.",
      "Near-term mechanism clearer than long-run size of anyone’s gain.",
    ],
  },
  worldModel: {
    title: "World Model",
    principle:
      "Don’t only watch the next-generation tool arrive at customers. Ask first: who owns the coupled stack that keeps the old path manufacturable near term?",
    applyLabel: "Where else can this apply?",
    applyTo: [
      "Leading-edge lithography",
      "Multi-patterning manufacturability",
      "Immersion-extension toolchains",
      "EUV development placements",
      "Scanner–illuminator–SMO portfolios",
    ],
  },
  changeMind: {
    prompt: "What would change today’s conclusion?",
    items: [
      "A rival multi-patterning scanner matching overlay, CDU, and throughput without ASML’s coupled stack",
      "Surplus accruing to buyers or optics/source suppliers rather than the scanner vendor",
      "Production EUV ending multi-exposure and ASML losing the EUV position",
      "Leading-edge manufacturing proceeding without the immersion-extension portfolio",
    ],
  },
  continueThinking: {
    title: CONTINUE_READING,
    items: [
      { id: "DB-001", slug: "db-001", title: "NVIDIA Moves AI Computing From the Chip to the Rack", href: "/briefs/db-001" },
      { id: "DB-008", slug: "db-008", title: "AMD Positions MI300 as High-Memory Instinct Compute for LLMs and HPC", href: "/briefs/db-008" },
      { id: "DB-002", slug: "db-002", title: "NVIDIA Turns the GPU Into a Programmable Compute Platform", href: "/briefs/db-002" },
    ],
  },
  footer: JOURNAL_FOOTER,
};
