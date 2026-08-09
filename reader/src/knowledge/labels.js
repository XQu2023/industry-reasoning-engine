/** Knowledge Network chrome strings (kept local — i18n.js is out of scope). */

export const KN_LABELS = {
  en: {
    title: "Knowledge Network",
    lede: "Open a tag to see linked briefs.",
    relatedTitle: "Related",
    conceptsTitle: "Concepts",
    companyTitle: "Company",
    technologyTitle: "Technology",
    industryTitle: "Industry",
    conceptBriefs: "Briefs",
    closeConcept: "Close",
    noRelated: "No related briefs.",
  },
  zh: {
    title: "知识网络",
    lede: "点击标签查看关联简报。",
    relatedTitle: "相关",
    conceptsTitle: "概念",
    companyTitle: "公司",
    technologyTitle: "技术",
    industryTitle: "行业",
    conceptBriefs: "简报",
    closeConcept: "关闭",
    noRelated: "暂无相关简报。",
  },
};

export function knLabels(locale) {
  return KN_LABELS[locale] ?? KN_LABELS.en;
}
