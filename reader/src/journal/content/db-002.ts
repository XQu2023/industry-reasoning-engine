import type { JournalBrief } from "../types.ts";
import { CONTINUE_READING, JOURNAL_FOOTER } from "./shared.ts";

/** DB-002 — layout migration only; facts and reasoning preserved. */
export const db002JournalZh: JournalBrief = {
  slug: "db-002",
  locale: "zh",
  productId: "DB-002",
  homeHref: "/zh",
  hero: {
    quoteLines: ["稀缺点在编程路径，不在单颗芯片。", "卖点不是更快的显卡。"],
    title: "CUDA：稀缺点在编程模型，不在显卡速度",
    summary:
      "2006 年 11 月 8 日，英伟达发布 CUDA：GPU 核心可通信、可同步、可共享数据，并配套其所谓业界首个面向 GPU 的 C 编译环境。重型仿真与分析若必须经通用语言调用可协作 GPU 核心，入口由英伟达为自家 GPU 定义。价格、许可与跨硬件移植仍属 Unknown。",
    meta: { id: "DB-002", readingTime: "5 min", industry: "AI Computing" },
  },
  question: {
    text: "可协作 GPU 计算若必须经通用语言进入单一厂商 GPU，价值归谁？",
  },
  story: {
    paragraphs: [
      "变的是入口，不只是性能数字。",
      "CPU 扛不住的负载，旧 GPU 路径也接不住——旧路径走流式语言和图形接口，核心之间无法像通用机器协作。",
      "CUDA 的解法是两条线绑死：硬件让核心协作；C 编译路径进入该硬件。",
      "编程模型上移：流式语言让位给 C 编译器 + 独立计算驱动。",
      "入口受控：SDK 走注册开发者计划，非开放、厂商中立栈。",
    ],
  },
  diagram: {
    nodes: [
      "流式语言 / 图形 API 的 GPU 路径",
      "可协作的 GPU 核心 + Parallel Data Cache",
      "英伟达 C 编译器 + 计算驱动 + 受控 SDK",
      "仿真、分析与技术计算应用",
    ],
    caption: "价值迁向通往可协作 GPU 计算的厂商专属编程路径所有者",
  },
  keyInsight: {
    sentence: "可协作 GPU 计算若必须经通用语言进入单一厂商 GPU，价值归编程模型所有者。",
  },
  analysis: {
    paragraphs: [
      "2006 年 11 月 8 日：CUDA 为英伟达 GPU 上的新计算架构，外加面向 GPU 的 C 编译开发环境；含 Parallel Data Cache；入口为独立计算驱动 + NVIDIA C 编译器。英伟达称该编译器将淘汰面向 GPU 计算的流式语言。",
      "产品面：GeForce 8800 及后续 Quadro 可用；SDK 经注册开发者计划发放。厂商宣称相较传统方法最高约 100 倍。客户引言点名 Acceleware、SPEAG、Headwave（电磁仿真、地震分析等相关负载）。",
      "结构变化还包括分工固化：GPU 做细粒度、数据密集计算；多核 CPU 做粗粒度控制与数据管理。代码能否移植到别家 GPU，仍属 Unknown。",
      "来源报告里英伟达是最清晰的结构性受益方。价格、许可、代码能否离开英伟达硬件仍属 Unknown；收益大小未定，故事方向已定。",
    ],
  },
  worldModel: {
    title: "World Model",
    principle:
      "当新能力必须经厂商专属编程模型（编译器、驱动、受控 SDK）才能到达硬件时，价值迁向该入口的所有者，而不只是更快的芯片。",
    applyLabel: "Where else can this apply?",
    applyTo: ["GPU 计算平台", "AI 软件栈", "开发者工具链", "跨厂商可移植标准", "仿真与技术计算"],
  },
  changeMind: {
    prompt: "什么会改变今天的结论？",
    items: [
      "出现跨厂商可移植编程模型，不依赖英伟达编译器与驱动，却达到同等可协作 GPU 能力",
      "盈余主要落在应用层或终端用户，而非平台方",
      "CPU 在点名负载上抹平性能差距",
      "计算能力可不经英伟达受控 SDK 获得",
    ],
  },
  continueThinking: {
    title: CONTINUE_READING,
    items: [
      { id: "DB-001", slug: "db-001", title: "英伟达把 AI 算力从芯片推进到机柜", href: "/zh/briefs/db-001" },
      { id: "DB-008", slug: "db-008", title: "MI300：竞争看 HBM3 与 ROCm，不看峰值 FLOPs", href: "/zh/briefs/db-008" },
      { id: "DB-007", slug: "db-007", title: "Copilot：编码辅助进编辑器，Tier 1 空着", href: "/zh/briefs/db-007" },
    ],
  },
  footer: JOURNAL_FOOTER,
};

export const db002JournalEn: JournalBrief = {
  slug: "db-002",
  locale: "en",
  productId: "DB-002",
  homeHref: "/",
  hero: {
    quoteLines: [
      "The scarce route is that programming model — not a faster graphics chip.",
      "GPU compute sold as a gated programming model.",
    ],
    title: "NVIDIA Turns the GPU Into a Programmable Compute Platform",
    summary:
      "On 8 November 2006, NVIDIA unveiled CUDA: a GPU architecture whose cores can communicate, synchronise, and share data, plus what it called the industry’s first C-compiler environment for the GPU. If heavy simulation and analysis need cooperative GPU cores reached through a general-purpose language, NVIDIA defines that scarce route for its own GPUs. Price, licence terms, and portability remain Unknown.",
    meta: { id: "DB-002", readingTime: "5 min", industry: "AI Computing" },
  },
  question: {
    text: "If cooperative GPU compute requires a general-purpose language path into one vendor’s GPUs, where does value migrate?",
  },
  story: {
    paragraphs: [
      "Some compute-heavy work outruns what CPUs alone can deliver at the needed size or speed.",
      "Earlier GPU paths ran through stream languages and graphics interfaces; cores could not cooperate as a general-purpose machine.",
      "CUDA answers with two linked moves: hardware that lets cores cooperate, and a C-compiler path into that hardware.",
      "The programming model moves up toward a C compiler plus a separate compute driver.",
      "Access is gated: the SDK ships through NVIDIA’s registered developer program, not as an open, vendor-neutral stack.",
    ],
  },
  diagram: {
    nodes: [
      "Streaming languages / graphics-API GPU paths",
      "Cooperative GPU cores + Parallel Data Cache",
      "NVIDIA C compiler + compute driver + gated SDK",
      "Simulation, analysis, and technical-computing apps",
    ],
    caption: "Value moves toward whoever owns the vendor-specific programming model",
  },
  keyInsight: {
    sentence:
      "If cooperative GPU compute requires a general-purpose language path into one vendor’s GPUs, value migrates to the owner of that programming model.",
  },
  analysis: {
    paragraphs: [
      "8 November 2006: CUDA as a new architecture for computing on NVIDIA GPUs and a C-compiler development environment; Parallel Data Cache so on-chip cores can cooperate; access via a separate computing driver and NVIDIA C compiler, which NVIDIA says obsoletes streaming languages for GPU computing.",
      "Available on GeForce 8800 and future Quadro; SDK through the registered developer program. Vendor claim: “up to 100 times faster than traditional approaches.” Named customers/ISVs: Acceleware, SPEAG, Headwave (EM simulation, seismic analysis, related workloads).",
      "Division of labour hardens: GPU for fine-grained data-intensive work; multi-core CPUs for coarse control and data management. Portability to other vendors’ GPUs is still Unknown.",
      "NVIDIA is the clearest structural beneficiary in the source report. Prices, licence terms, and whether code can leave NVIDIA hardware are still Unknown — direction clearer than magnitude.",
    ],
  },
  worldModel: {
    title: "World Model",
    principle:
      "When new capability is reachable only through a vendor-specific programming model — compiler, driver, and gated SDK — value migrates to the owner of that access path, not merely to whoever ships a faster chip.",
    applyLabel: "Where else can this apply?",
    applyTo: [
      "GPU compute platforms",
      "AI software stacks",
      "Developer toolchains",
      "Cross-vendor portable standards",
      "Simulation & technical computing",
    ],
  },
  changeMind: {
    prompt: "What would change today’s conclusion?",
    items: [
      "A portable cross-vendor programming model that reaches the same cooperative-GPU capability without NVIDIA’s compiler and driver",
      "Proof that surplus accrues mainly to applications or end users rather than the platform owner",
      "CPUs closing the performance gap for the named workloads",
      "Compute features reachable without NVIDIA’s gated SDK path",
    ],
  },
  continueThinking: {
    title: CONTINUE_READING,
    items: [
      {
        id: "DB-001",
        slug: "db-001",
        title: "NVIDIA Moves AI Computing From the Chip to the Rack",
        href: "/briefs/db-001",
      },
      {
        id: "DB-008",
        slug: "db-008",
        title: "AMD Positions MI300 as High-Memory Instinct Compute for LLMs and HPC",
        href: "/briefs/db-008",
      },
      {
        id: "DB-007",
        slug: "db-007",
        title: "GitHub Copilot Moves Coding Help Into the Editor — Without a Tier 1 Capturer Yet",
        href: "/briefs/db-007",
      },
    ],
  },
  footer: JOURNAL_FOOTER,
};
