import type { JournalBrief } from "../types.ts";
import { CONTINUE_READING, JOURNAL_FOOTER } from "./shared.ts";

/** DB-011 — Public Beta Sprint 1 editorial rewrite; facts and reasoning unchanged. Chinese-only. */
export const db011JournalZh: JournalBrief = {
  slug: "db-011",
  locale: "zh",
  productId: "DB-011",
  homeHref: "/zh",
  hero: {
    quoteLines: [
      "AI 稀缺，并不总停留在 GPU。",
      "它会上移到谁能把高带宽内存送进具名平台。",
    ],
    title: "美光 HBM3E：AI 稀缺上移到高带宽内存",
    summary: "2024 年 2 月 26 日，美光宣布 HBM3E 量产，并写入 NVIDIA H200 出货路径。",
    meta: { id: "DB-011", readingTime: "5 min", industry: "Semiconductors" },
  },
  question: {
    text: "如果 AI 算力扩张受制于 HBM 的带宽、容量与功耗，价值迁向谁？",
  },
  story: {
    paragraphs: [
      "过去一年，如果有人问：AI 最大的瓶颈在哪？",
      "很多人会说：GPU。",
      "这并不错。",
      "但生成式 AI 训练与推理，往往不只卡在算术单元。",
      "模型变大以后，单颗加速器更依赖更高带宽、更大容量、更可控功耗的 HBM。",
      "美光这次公告，把三件事钉在一起。",
      "HBM3E 已能量产。",
      "产品被写进 NVIDIA H200。",
      "H200 计划于 2024 年第二季度开始出货。",
      "稀缺不再只是抽象的行业展望。",
      "它和具名平台绑定。",
      "竞争维度也在变。",
      "不只报容量——还看功耗与带宽。",
    ],
  },
  diagram: {
    nodes: ["AI GPU 带宽 / 容量约束", "HBM3E 量产", "H200 出货路径"],
    caption: "稀缺上移：算力需求 → 内存量产 → 具名 GPU 平台",
  },
  keyInsight: {
    sentence: "算力扩张若卡在 HBM，价值就迁向能把 HBM3E 送进具名 GPU 平台的供应商。",
  },
  analysis: {
    paragraphs: [
      "2024 年 2 月 26 日。",
      "HBM3E 量产。",
      "具名规格：24GB 8 高（8H）。",
      "将用于 NVIDIA H200 Tensor Core GPU。",
      "H200“将于 2024 年第二季度开始出货”（美光转述）。",
      "厂商宣称：相对竞品约低 30% 功耗；带宽超过 1.2 TB/s；引脚速率超过 9.2 Gb/s。",
      "36GB 12 高计划 2024 年 3 月送样；并提及 HBM4 路线图。",
      "来源点名美光为 H200 路径上的量产方，故为该层 Tier 1 候选。",
      "NVIDIA 为具名采用平台。",
      "价格、ASP、利润率、出货量，以及相对其他 HBM 厂商的份额，仍属 Unknown。",
      "方向清楚：AI 稀缺叙事从“更快的 GPU”，推进到“谁能量产并导入 HBM3E”。",
      "幅度未定。",
      "宣称属美光；他处验证前不作独立事实。",
    ],
  },
  worldModel: {
    title: "World Model",
    principle: "不要只看下游平台谁更亮。先问自己：谁卡住了带宽、容量与功耗，又谁能量产并写入具名平台？",
    applyLabel: "Where else can this apply?",
    applyTo: ["HBM / AI 内存", "GPU 平台出货", "先进封装", "云 AI 算力", "功耗受限加速器"],
  },
  changeMind: {
    prompt: "什么会改变今天的结论？",
    items: [
      "H200 出货大幅延迟，或很少采用美光 HBM3E",
      "盈余主要留在 GPU 平台或其他未点名瓶颈层",
      "功耗与带宽宣称在独立生产环境中不成立",
      "其他供应商以更低成本或更高份额拿走 HBM3E 供应",
    ],
  },
  continueThinking: {
    title: CONTINUE_READING,
    items: [
      { id: "DB-001", slug: "db-001", title: "英伟达把 AI 算力从芯片推进到机柜", href: "/zh/briefs/db-001" },
      { id: "DB-012", slug: "db-012", title: "为什么我开始关注一种很少有人讨论的材料", href: "/zh/briefs/db-012" },
      { id: "DB-008", slug: "db-008", title: "MI300：竞争看 HBM3 与 ROCm，不看峰值 FLOPs", href: "/zh/briefs/db-008" },
    ],
  },
  footer: JOURNAL_FOOTER,
};
