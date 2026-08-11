import type { JournalBrief } from "../types.ts";
import { CONTINUE_READING, JOURNAL_FOOTER } from "./shared.ts";

/** DB-012 journal content — layout migration only; wording preserved from the Brief. */
export const db012JournalZh: JournalBrief = {
  slug: "db-012",
  locale: "zh",
  productId: "DB-012",
  homeHref: "/zh",
  hero: {
    quoteLines: [
      "真正赚钱的公司，并不是站在聚光灯下的那一家。",
      "而是站在聚光灯后面的那一家。",
    ],
    title: "为什么我开始关注一种很少有人讨论的材料",
    summary:
      "这一次，我开始把目光放到了一个很多投资者几乎不会主动研究的名字——磷化铟（InP）。",
    meta: {
      id: "DB-012",
      readingTime: "5 min",
      industry: "AI Infrastructure",
    },
  },
  question: {
    text: "如果整个行业继续增长，谁会最先供不应求？",
  },
  story: {
    paragraphs: [
      "过去一年，如果有人问：AI 最大的受益者是谁？",
      "大多数人的答案都差不多。GPU。HBM。光模块。",
      "这些都没有错。",
      "但每次产业升级，我都会问自己另一个问题。",
      "很多时候，真正赚钱的公司，并不是站在聚光灯下的那一家。",
      "而是站在聚光灯后面的那一家。",
      "原因其实很简单。",
      "AI 数据中心越来越快。",
      "服务器之间需要交换的数据越来越多。",
      "于是，光模块开始升级。",
      "从 800G。到 1.6T。未来还会继续升级。",
      "如果把 AI 数据中心比作高速公路。",
      "GPU 是汽车。光模块是道路。",
      "那么磷化铟，就是铺设高速道路时不可缺少的一种材料。",
      "以前路修得不多。没人关心。",
      "现在高速公路越修越快。这个材料的重要性开始发生变化。",
    ],
  },
  diagram: {
    nodes: ["GPU", "光模块", "磷化铟（InP）"],
    caption: "高速公路：汽车 → 道路 → 铺路材料",
  },
  keyInsight: {
    sentence: "需求可以很快翻倍，供给却不能。",
  },
  analysis: {
    paragraphs: [
      "真正让我感兴趣的，不是需求。需求增长，每个人都能看到。",
      "真正让我停下来思考的是另一件事：供给。",
      "报告指出，磷化铟不是一个可以快速扩产的行业。",
      "建设产线需要时间。提高良率需要时间。客户认证也需要时间。",
      "去年。HBM。大家后来发现：真正限制 AI 的，不是 GPU。而是 HBM。",
      "于是价值开始重新分配。",
      "今天看到磷化铟。我脑子里立刻出现同一个问题：它会不会成为光通信里的 HBM？",
      "我不知道。现在还不能下结论。但它已经值得进入我们的观察名单。",
      "我真正寻找的，从来不是哪家公司明天涨停。",
      "而是价值开始移动的第一步。",
      "因为价值一旦开始移动，通常不会一天结束。它可能持续几个月，甚至几年。",
      "那现在可以买了吗？不知道。这是很多研报不会写的一句话。",
      "产业逻辑，和投资机会，不是一回事。",
      "这份研究很好地解释了：为什么需求会增长，为什么供给扩不出来，为什么行业值得关注。",
      "但它回答不了另外几个问题：市场是不是已经知道？这些预期是不是已经反映在股价里？还有没有预期差？",
      "如果没有这些答案，我不会直接得出投资结论。",
      "接下来，我只关心四件事。",
      "第一。AI 光模块会不会继续升级？",
      "第二。磷化铟价格还能不能维持高位？",
      "第三。新增产能什么时候真正释放？",
      "第四。客户认证是不是比市场想象得更慢？",
      "如果这些答案越来越清晰，这条产业链的价值迁移，也会越来越清晰。",
    ],
  },
  worldModel: {
    title: "World Model",
    principle: "不要只看需求增长。先问自己：谁最难扩产？",
    applyLabel: "Where else can this apply?",
    applyTo: ["AI", "HBM", "机器人", "电网", "核电"],
  },
  changeMind: {
    prompt: "什么会改变今天的结论？",
    items: [
      "AI 光模块升级不再持续",
      "磷化铟价格无法继续维持高位",
      "新增产能很快真正释放",
      "客户认证比市场想象得更快",
    ],
  },
  continueThinking: {
    title: CONTINUE_READING,
    items: [
      {
        id: "DB-011",
        slug: "db-011",
        title: "美光 HBM3E：AI 稀缺上移到高带宽内存",
        href: "/zh/briefs/db-011",
      },
      {
        id: "DB-008",
        slug: "db-008",
        title: "MI300：竞争看 HBM3 与 ROCm，不看峰值 FLOPs",
        href: "/zh/briefs/db-008",
      },
      {
        id: "DB-001",
        slug: "db-001",
        title: "英伟达把 AI 算力从芯片推进到机柜",
        href: "/zh/briefs/db-001",
      },
    ],
  },
  footer: JOURNAL_FOOTER,
};
