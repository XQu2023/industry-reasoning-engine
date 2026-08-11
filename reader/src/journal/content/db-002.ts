import type { JournalBrief } from "../types.ts";
import { CONTINUE_READING, JOURNAL_FOOTER } from "./shared.ts";

/** DB-002 — Public Beta Sprint 1 editorial rewrite; facts and reasoning unchanged. */
export const db002JournalZh: JournalBrief = {
  slug: "db-002",
  locale: "zh",
  productId: "DB-002",
  homeHref: "/zh",
  hero: {
    quoteLines: [
      "真正稀缺的，不是更快的显卡。",
      "而是通往可协作 GPU 计算的那条编程路径。",
    ],
    title: "CUDA：稀缺点在编程模型，不在显卡速度",
    summary: "2006 年 11 月 8 日，英伟达发布 CUDA：硬件让核心协作，C 编译路径进入该硬件。",
    meta: { id: "DB-002", readingTime: "5 min", industry: "AI Computing" },
  },
  question: {
    text: "如果可协作 GPU 计算必须经通用语言进入单一厂商 GPU，价值归谁？",
  },
  story: {
    paragraphs: [
      "很多人记得 CUDA，是因为它让 GPU 算得更快。",
      "那只说对了一半。",
      "真正变的是入口。",
      "CPU 扛不住的负载，旧 GPU 路径也接不住。",
      "旧路径走流式语言和图形接口。",
      "核心之间，无法像通用机器那样协作。",
      "CUDA 的解法是两条线绑死。",
      "硬件：让核心通信、同步、共享数据。",
      "软件：C 编译路径进入该硬件。",
      "编程模型上移。",
      "流式语言让位给 C 编译器，外加独立计算驱动。",
      "入口受控。",
      "SDK 走注册开发者计划——不是开放、厂商中立栈。",
    ],
  },
  diagram: {
    nodes: ["流式语言 / 图形 API", "可协作 GPU 核心", "C 编译器 + 受控 SDK"],
    caption: "入口上移：旧路径 → 协作硬件 → 厂商专属编程模型",
  },
  keyInsight: {
    sentence: "可协作 GPU 计算若必须经单一厂商编程路径进入，价值归编程模型所有者。",
  },
  analysis: {
    paragraphs: [
      "2006 年 11 月 8 日。",
      "CUDA：英伟达 GPU 上的新计算架构，外加面向 GPU 的 C 编译开发环境。",
      "含 Parallel Data Cache。",
      "入口为独立计算驱动 + NVIDIA C 编译器。",
      "英伟达称该编译器将淘汰面向 GPU 计算的流式语言。",
      "产品面：GeForce 8800 及后续 Quadro 可用。",
      "SDK 经注册开发者计划发放。",
      "厂商宣称相较传统方法最高约 100 倍。",
      "客户引言点名 Acceleware、SPEAG、Headwave（电磁仿真、地震分析等相关负载）。",
      "分工固化：GPU 做细粒度、数据密集计算；多核 CPU 做粗粒度控制与数据管理。",
      "代码能否移植到别家 GPU，仍属 Unknown。",
      "来源报告里，英伟达是最清晰的结构性受益方。",
      "价格、许可、代码能否离开英伟达硬件，仍属 Unknown。",
      "收益大小未定。故事方向已定。",
    ],
  },
  worldModel: {
    title: "World Model",
    principle: "不要只看芯片谁更快。先问自己：谁控制通往新能力的编程入口？",
    applyLabel: "Where else can this apply?",
    applyTo: ["GPU 计算平台", "AI 软件栈", "开发者工具链", "跨厂商可移植标准", "仿真与技术计算"],
  },
  changeMind: {
    prompt: "什么会改变今天的结论？",
    items: [
      "出现跨厂商可移植编程模型，达到同等可协作 GPU 能力",
      "盈余主要落在应用层或终端用户，而非平台方",
      "CPU 在点名负载上抹平性能差距",
      "计算能力可不经英伟达受控 SDK 获得",
    ],
  },
  continueThinking: {
    title: CONTINUE_READING,
    items: [
      { id: "DB-001", slug: "db-001", title: "英伟达把 AI 算力从芯片推进到机柜", href: "/zh/briefs/db-001" },
      { id: "DB-011", slug: "db-011", title: "美光 HBM3E：AI 稀缺上移到高带宽内存", href: "/zh/briefs/db-011" },
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
      "The scarce thing is not a faster graphics chip.",
      "It is the programming path into cooperative GPU compute.",
    ],
    title: "NVIDIA Turns the GPU Into a Programmable Compute Platform",
    summary:
      "On 8 November 2006, NVIDIA unveiled CUDA: hardware that lets cores cooperate, and a C-compiler path into that hardware.",
    meta: { id: "DB-002", readingTime: "5 min", industry: "AI Computing" },
  },
  question: {
    text: "If cooperative GPU compute requires a general-purpose language path into one vendor’s GPUs, where does value migrate?",
  },
  story: {
    paragraphs: [
      "Many people remember CUDA as “GPUs got faster.”",
      "That is only half the story.",
      "What changed was the entry point.",
      "Some workloads outran CPUs.",
      "Earlier GPU paths ran through stream languages and graphics interfaces.",
      "Cores could not cooperate as a general-purpose machine.",
      "CUDA answers with two linked moves.",
      "Hardware: cores that communicate, synchronise, and share data.",
      "Software: a C-compiler path into that hardware.",
      "The programming model moves up.",
      "Streaming languages give way to a C compiler plus a separate compute driver.",
      "Access is gated.",
      "The SDK ships through a registered developer program — not an open, vendor-neutral stack.",
    ],
  },
  diagram: {
    nodes: ["Streaming languages / graphics APIs", "Cooperative GPU cores", "C compiler + gated SDK"],
    caption: "Access moves up: old path → cooperative hardware → vendor programming model",
  },
  keyInsight: {
    sentence:
      "If cooperative GPU compute must enter through one vendor’s programming path, value migrates to the owner of that model.",
  },
  analysis: {
    paragraphs: [
      "8 November 2006.",
      "CUDA: a new architecture for computing on NVIDIA GPUs, plus a C-compiler development environment for the GPU.",
      "Parallel Data Cache so on-chip cores can cooperate.",
      "Access via a separate computing driver and NVIDIA C compiler.",
      "NVIDIA says this obsoletes streaming languages for GPU computing.",
      "Available on GeForce 8800 and future Quadro.",
      "SDK through the registered developer program.",
      "Vendor claim: “up to 100 times faster than traditional approaches.”",
      "Named customers/ISVs: Acceleware, SPEAG, Headwave (EM simulation, seismic analysis, related workloads).",
      "Division of labour hardens: GPU for fine-grained data-intensive work; multi-core CPUs for coarse control and data management.",
      "Portability to other vendors’ GPUs is still Unknown.",
      "NVIDIA is the clearest structural beneficiary in the source report.",
      "Prices, licence terms, and whether code can leave NVIDIA hardware are still Unknown.",
      "Direction clearer than magnitude.",
    ],
  },
  worldModel: {
    title: "World Model",
    principle:
      "Don’t only ask which chip is faster. Ask first: who controls the programming path into the new capability?",
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
      "A portable cross-vendor model reaches the same cooperative-GPU capability",
      "Surplus accrues mainly to applications or end users, not the platform owner",
      "CPUs close the performance gap for the named workloads",
      "Compute features become reachable without NVIDIA’s gated SDK",
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
