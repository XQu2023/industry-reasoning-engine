import type { JournalBrief } from "../types.ts";
import { CONTINUE_READING, JOURNAL_FOOTER } from "./shared.ts";

/** DB-011 — layout migration only; facts and reasoning preserved. Chinese-only. */
export const db011JournalZh: JournalBrief = {
  slug: "db-011",
  locale: "zh",
  productId: "DB-011",
  homeHref: "/zh",
  hero: {
    quoteLines: [
      "AI 稀缺从“只要更快的 GPU”，上移到谁能交付高带宽内存。",
      "内存层进入量产叙事。",
    ],
    title: "美光 HBM3E：AI 稀缺上移到高带宽内存",
    summary:
      "2024 年 2 月 26 日，美光宣布已开始量产 HBM3E；其 24GB 8 高 HBM3E 将进入 NVIDIA H200，且 H200 计划于 2024 年第二季度开始出货。若生成式 AI 受制于 HBM 层的带宽、容量与功耗，价值压力迁向能把 HBM3E 送进具名 GPU 平台的供应商。价格、出货量与份额仍属 Unknown。",
    meta: { id: "DB-011", readingTime: "5 min", industry: "Semiconductors" },
  },
  question: {
    text: "若 AI 算力扩张受制于 HBM 带宽、容量与功耗，价值迁向谁？",
  },
  story: {
    paragraphs: [
      "生成式 AI 训练与推理，往往不只卡在算术单元。",
      "模型变大后，单颗加速器更依赖更高带宽、更大容量、更可控功耗的 HBM。",
      "美光这次公告把三件事钉在一起：HBM3E 已能量产交付。",
      "稀缺与具名平台绑定——产品被写进 NVIDIA H200，而不是抽象的行业展望。",
      "竞争维度转向功耗与带宽，而不只报容量。",
    ],
  },
  diagram: {
    nodes: [
      "AI GPU 对带宽与容量的硬约束",
      "HBM3E 量产与平台导入",
      "具名 GPU（H200）出货路径",
      "云与 AI 建设者的可用算力",
    ],
    caption: "价值压力迁向能把 HBM3E 送进主流 AI GPU 的内存供应商",
  },
  keyInsight: {
    sentence:
      "若 AI 算力扩张受制于 HBM 带宽、容量与功耗，价值迁向能把 HBM3E 送进具名 GPU 平台的供应商。",
  },
  analysis: {
    paragraphs: [
      "2024 年 2 月 26 日：HBM3E 量产；具名规格 24GB 8 高（8H）；将用于 NVIDIA H200 Tensor Core GPU；H200“将于 2024 年第二季度开始出货”（美光转述）。",
      "厂商宣称：相对竞品约低 30% 功耗；带宽超过 1.2 TB/s；引脚速率超过 9.2 Gb/s。36GB 12 高计划 2024 年 3 月送样；并提及 HBM4 路线图。",
      "来源点名美光为 H200 路径上的量产方，故为该层 Tier 1 候选；NVIDIA 为具名采用平台。价格、ASP、利润率、出货量，以及相对其他 HBM 厂商的份额，仍属 Unknown。",
      "方向清楚：AI 稀缺叙事从“更快的 GPU”推进到“谁能量产并导入 HBM3E”。幅度未定；宣称属美光，他处验证前不作独立事实。",
    ],
  },
  worldModel: {
    title: "World Model",
    principle:
      "当下游平台扩张受制于某一配套层的带宽、容量与功耗时，价值压力上移到能把该层量产并写入具名平台的供应商。",
    applyLabel: "Where else can this apply?",
    applyTo: ["HBM / AI 内存", "GPU 平台出货", "先进封装", "云 AI 算力", "功耗受限的加速器设计"],
  },
  changeMind: {
    prompt: "什么会改变今天的结论？",
    items: [
      "H200 出货大幅延迟，或最终很少采用美光 HBM3E",
      "盈余主要留在 GPU 平台或其他未点名瓶颈层，内存层无法定价",
      "功耗与带宽宣称在独立生产环境中不成立",
      "其他供应商以更低成本或更高份额拿走 HBM3E 供应",
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
