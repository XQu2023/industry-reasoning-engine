import type { JournalBrief } from "../types.ts";
import { CONTINUE_READING, JOURNAL_FOOTER } from "./shared.ts";

/** DB-003 — layout migration only; facts and reasoning preserved. */
export const db003JournalZh: JournalBrief = {
  slug: "db-003",
  locale: "zh",
  productId: "DB-003",
  homeHref: "/zh",
  hero: {
    quoteLines: [
      "稀缺点在浸没延寿组合，不在 EUV 已量产。",
      "头条是 EUV 进客户，T0 抓取仍是浸没延寿。",
    ],
    title: "ASML：T0 抓取在浸没延寿，不在 EUV 已落地",
    summary:
      "2010 年 2 月 22 日，ASML 宣布台积电将安装 NXE:3100 EUV 系统用于研发，同时报出第 100 台 XT:19x0 浸没机出货与 NXT 爬坡，并强调 FlexRay 照明器与源掩模优化（SMO）。浸没继续缩微在多重曝光压力下又贵又慢；EUV 被框为潜在降本路径，真正在出货的是浸没延寿。若近端稀缺层是让多重曝光可制造的扫描仪—照明器—SMO 耦合栈，ASML 处在该组合中心。量产 EUV 会抬高还是压低光刻层价值、价格、另五台 NXE 接收方，仍属 Unknown。",
    meta: { id: "DB-003", readingTime: "5 min", industry: "Semiconductors" },
  },
  question: {
    text: "若近端稀缺层是让多重曝光可制造的扫描仪—照明器—SMO 耦合栈，价值迁向谁？",
  },
  story: {
    paragraphs: [
      "变的是组合动作，不是单一 EUV 叙事。",
      "先进制程还得造得出来：浸没撞上低 k1 极限与多重曝光，要求更紧的套刻/CDU 与极高产能。",
      "买方要的是：浸没还能撑住，同时 EUV 继续发育。",
      "ASML 在 T0 的答案不是“EUV 今天全面替换”，而是耦合栈：浸没产能（XT/NXT）+ 可编程照明与 SMO + EUV 作研发落点。",
      "量产 EUV 最终抬高还是压低光刻层经济价值，仍属 Unknown。",
    ],
  },
  diagram: {
    nodes: [
      "单次曝光浸没缩微",
      "多重曝光套刻 / CDU / 产能压力",
      "高产能浸没扫描仪（XT / NXT）",
      "FlexRay 照明器 + SMO",
      "客户现场的 EUV NXE 开发工具",
    ],
    caption: "近端价值迁向同时拥有扫描仪、可编程照明器与 SMO、并以一套组合服务多重曝光制造的供应商",
  },
  keyInsight: {
    sentence: "头条是 EUV 进客户；T0 可持久抓取仍是浸没延寿——扫描仪 + 照明器 + SMO；ASML 结构上位居该位。",
  },
  analysis: {
    paragraphs: [
      "2010 年 2 月 22 日同日三份相关公告：台积电接收 NXE:3100 用于研发（计划共六台开发工具）；第 100 台 XT:19x0 浸没出货，NXT 继续爬坡；FlexRay 与 SMO 定位为多重曝光下延寿浸没。",
      "EUV 被讨论为相对继续硬撑浸没的潜在降本路径；量产时点与性能承诺在 T0 未成为闭合事实。",
      "来源报告里 ASML 是该浸没组合上最清晰的结构性受益方（Tier 1）；Tier 2 空位；台积电为现场 EUV 研发 Tier 3。",
      "价格、其他 NXE 接收方、EUV 抬高还是压低光刻层价值，仍属 Unknown。近端机制清楚，长期收益大小未定。",
    ],
  },
  worldModel: {
    title: "World Model",
    principle:
      "当近端稀缺层是让多重曝光可制造的扫描仪—照明器—SMO 耦合栈时，价值迁向同时拥有该组合并以一套产品服务制造的供应商，而不是已落地的下一代工具叙事。",
    applyLabel: "Where else can this apply?",
    applyTo: [
      "先进制程光刻",
      "多重曝光可制造性",
      "浸没延寿工具链",
      "EUV 研发落点",
      "扫描仪—照明—SMO 组合",
    ],
  },
  changeMind: {
    prompt: "什么会改变今天的结论？",
    items: [
      "出现对手多重曝光扫描仪，在套刻、CDU、产能上匹配，却不依赖 ASML 耦合栈",
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

/** DB-003 — layout migration only; facts and reasoning preserved. */
export const db003JournalEn: JournalBrief = {
  slug: "db-003",
  locale: "en",
  productId: "DB-003",
  homeHref: "/",
  hero: {
    quoteLines: [
      "Near-term scarcity is immersion extension — not EUV already in production.",
      "Headline is EUV at customers; T0 capture is still immersion extension.",
    ],
    title: "ASML Places EUV Tools While Immersion Extension Still Carries the Capture Story",
    summary:
      "On 22 February 2010, ASML said TSMC would install an NXE:3100 EUV system for R&D, reported the 100th XT:19x0 immersion shipment and NXT ramp, and highlighted FlexRay illuminators with source-mask optimisation (SMO). Continued shrink via immersion is costly and slow under multi-patterning pressure; EUV is framed as a potential cost reducer, while immersion extension is what is shipping. If the near-term scarce layer is the coupled scanner–illuminator–SMO stack that makes multi-exposure manufacturable, ASML sits at the centre of that portfolio. Whether production EUV will raise or lower lithography-layer value, prices, and the other five NXE recipients remain Unknown.",
    meta: { id: "DB-003", readingTime: "5 min", industry: "Semiconductors" },
  },
  question: {
    text: "If the near-term scarce layer is the coupled scanner–illuminator–SMO stack that makes multi-exposure manufacturable, where does value migrate?",
  },
  story: {
    paragraphs: [
      "Same-day announcements put the first NXE:3100 EUV systems with customers — but durable capture at T0 is still immersion extension.",
      "Leading-edge shrink still has to be manufacturable under low-k1 limits and multi-patterning.",
      "Buyers need a portfolio that keeps immersion viable while EUV develops.",
      "ASML’s answer at T0 is not “EUV replaces everything today”: immersion productivity (XT/NXT) + programmable illumination and SMO + EUV as development placement.",
      "Whether EUV ultimately raises or lowers the economic value of the lithography layer is still Unknown.",
    ],
  },
  diagram: {
    nodes: [
      "Single-exposure immersion shrink",
      "Multi-patterning overlay / CDU / throughput pressure",
      "High-productivity immersion scanners (XT / NXT)",
      "FlexRay illuminators + SMO as coupled portfolio",
      "EUV NXE development tools at customer sites",
    ],
    caption: "Near-term value moves toward the supplier that owns scanner, programmable illuminator, and SMO as one portfolio for multi-exposure manufacturing",
  },
  keyInsight: {
    sentence: "The headline news is EUV tools at customers; the T0 capture story is still immersion extension — scanner plus illuminator plus SMO — and ASML is structurally placed there.",
  },
  analysis: {
    paragraphs: [
      "22 February 2010: three related releases — TSMC to receive NXE:3100 for R&D (six development tools in the program); 100th XT:19x0 immersion shipment and NXT ramp; FlexRay and SMO positioned to extend immersion under multi-patterning.",
      "EUV is discussed as a potential path to lower cost versus stretching immersion further; production timing and performance commitments are not closed facts at T0.",
      "ASML is the clearest structural beneficiary on that immersion portfolio (Tier 1); Tier 2 vacant; TSMC Tier 3 for on-site EUV R&D.",
      "Prices, other NXE recipients, and whether EUV increases or decreases lithography-layer value remain Unknown — near-term mechanism clearer than long-run size of anyone’s gain.",
    ],
  },
  worldModel: {
    title: "World Model",
    principle:
      "When the near-term scarce layer is a coupled scanner–illuminator–SMO stack that makes multi-exposure manufacturable, value migrates to the supplier that owns that portfolio — not to whoever headlines a next-generation tool placement.",
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
