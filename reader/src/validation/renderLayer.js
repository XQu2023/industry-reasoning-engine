/** HTML for Validation Layer — no brief-body imports (safe under Node tests). */

export function renderValidationLayer(layer, ui) {
  if (!layer) return "";
  const v = ui.validation;

  return `
    <section class="section section--validation" aria-labelledby="validation-title">
      <h2 id="validation-title">${escapeHtml(v.title)}</h2>
      <p class="validation__lede">${escapeHtml(v.lede)}</p>

      <div class="validation-block" aria-labelledby="validation-timeline-title">
        <h3 id="validation-timeline-title">${escapeHtml(v.timelineTitle)}</h3>
        <ol class="validation-timeline">
          ${layer.timeline
            .map(
              (item) => `
            <li class="validation-timeline__item validation-timeline__item--${escapeAttr(item.status)}">
              <time class="validation-timeline__date" datetime="${escapeAttr(item.date)}">${escapeHtml(item.date)}</time>
              <div class="validation-timeline__body">
                <p class="validation-timeline__label">${escapeHtml(item.label)}</p>
                <p class="validation-timeline__detail">${escapeHtml(item.detail)}</p>
              </div>
              <p class="validation-timeline__status">${escapeHtml(statusLabel(item.status, v))}</p>
            </li>`,
            )
            .join("")}
        </ol>
        <p class="validation__note">${escapeHtml(v.nextWatch)} ${escapeHtml(layer.nextValidation)}</p>
      </div>

      <div class="validation-block" aria-labelledby="validation-lineage-title">
        <h3 id="validation-lineage-title">${escapeHtml(v.lineageTitle)}</h3>
        <ol class="validation-lineage">
          <li>
            <span class="validation-lineage__role">${escapeHtml(v.lineageSource)}</span>
            <span class="validation-lineage__value">${escapeHtml(layer.lineage.primarySource)}</span>
          </li>
          <li>
            <span class="validation-lineage__role">${escapeHtml(v.lineageResearch)}</span>
            <span class="validation-lineage__value">${escapeHtml(layer.lineage.research.id)} · ${escapeHtml(layer.lineage.research.path)} · T0 ${escapeHtml(layer.lineage.research.t0)}</span>
          </li>
          <li>
            <span class="validation-lineage__role">${escapeHtml(v.lineageBrief)}</span>
            <span class="validation-lineage__value">${escapeHtml(layer.lineage.brief.id)} · ${escapeHtml(v.version)} ${escapeHtml(layer.lineage.brief.version)} · ${escapeHtml(v.bodyFrozen)}</span>
          </li>
          <li>
            <span class="validation-lineage__role">${escapeHtml(v.lineageValidation)}</span>
            <span class="validation-lineage__value">${
              layer.lineage.validations.length
                ? layer.lineage.validations
                    .map(
                      (run) =>
                        `${escapeHtml(run.id)} (${escapeHtml(run.horizon)}, ${escapeHtml(run.date)}, ${escapeHtml(v.score)} ${run.predictionAccuracy})`,
                    )
                    .join(" · ")
                : escapeHtml(v.noValidationYet)
            }</span>
          </li>
          <li>
            <span class="validation-lineage__role">${escapeHtml(v.lineageKnowledge)}</span>
            <span class="validation-lineage__value">${
              layer.lineage.knowledge.length
                ? escapeHtml(layer.lineage.knowledge.join(", "))
                : escapeHtml(v.noKnowledgeYet)
            }</span>
          </li>
        </ol>
      </div>

      <div class="validation-block" aria-labelledby="validation-unknowns-title">
        <h3 id="validation-unknowns-title">${escapeHtml(v.unknownTitle)}</h3>
        <p class="validation__note">${escapeHtml(
          v.unknownSummary
            .replace("{open}", String(layer.unknowns.openCount))
            .replace("{partial}", String(layer.unknowns.partialCount))
            .replace("{resolved}", String(layer.unknowns.resolvedCount))
            .replace("{total}", String(layer.unknowns.total)),
        )}</p>
        <ul class="validation-unknowns">
          ${layer.unknowns.items
            .map(
              (item) => `
            <li class="validation-unknowns__item validation-unknowns__item--${escapeAttr(item.status)}">
              <div class="validation-unknowns__head">
                <span class="validation-unknowns__id">${escapeHtml(item.id)}</span>
                <span class="validation-unknowns__status">${escapeHtml(unknownStatusLabel(item.status, v))}</span>
              </div>
              <p class="validation-unknowns__text">${escapeHtml(item.text)}</p>
              ${item.note ? `<p class="validation-unknowns__note">${escapeHtml(item.note)}</p>` : ""}
            </li>`,
            )
            .join("")}
        </ul>
      </div>

      <div class="validation-block" aria-labelledby="validation-versions-title">
        <h3 id="validation-versions-title">${escapeHtml(v.versionsTitle)}</h3>
        <ol class="validation-versions">
          ${layer.versions
            .map(
              (item) => `
            <li>
              <p class="validation-versions__meta">
                <span class="validation-versions__ver">${escapeHtml(item.version)}</span>
                <time datetime="${escapeAttr(item.date)}">${escapeHtml(item.date)}</time>
              </p>
              <p class="validation-versions__event">${escapeHtml(item.event)}</p>
              <p class="validation-versions__note">${escapeHtml(item.note)}</p>
            </li>`,
            )
            .join("")}
        </ol>
      </div>

      <div class="validation-block validation-block--score" aria-labelledby="validation-score-title">
        <h3 id="validation-score-title">${escapeHtml(v.scoreTitle)}</h3>
        ${renderEvidenceScore(layer.evidenceScore, v)}
      </div>
    </section>
  `;
}

function renderEvidenceScore(score, v) {
  if (score.status === "scored") {
    const dims = (score.dimensions ?? [])
      .map(
        (dim) => `
        <tr>
          <th scope="row">${escapeHtml(dim.code)} ${escapeHtml(dim.name)}</th>
          <td>${escapeHtml(dim.outcome)}</td>
          <td>${escapeHtml(String(dim.weight))}</td>
        </tr>`,
      )
      .join("");
    return `
      <p class="validation-score__value">
        <span class="validation-score__number">${escapeHtml(String(score.predictionAccuracy))}</span>
        <span class="validation-score__scale">${escapeHtml(v.scoreScale)}</span>
      </p>
      <p class="validation-score__meta">${escapeHtml(v.score)} · ${escapeHtml(score.horizon)} · ${escapeHtml(score.validatedOn)}</p>
      <p class="validation-score__line">${escapeHtml(score.statusLine ?? "")}</p>
      ${
        dims
          ? `<div class="table-wrap" role="region" aria-label="${escapeAttr(v.scoreTitle)}" tabindex="0">
        <table class="validation-score__table">
          <thead>
            <tr>
              <th scope="col">${escapeHtml(v.dimension)}</th>
              <th scope="col">${escapeHtml(v.outcome)}</th>
              <th scope="col">${escapeHtml(v.weight)}</th>
            </tr>
          </thead>
          <tbody>${dims}</tbody>
        </table>
      </div>`
          : ""
      }
      <p class="validation__note">${escapeHtml(v.researchConfidence)}: ${escapeHtml(score.researchConfidence)}</p>
    `;
  }

  return `
    <p class="validation-score__awaiting">${escapeHtml(v.scoreAwaiting)}</p>
    <p class="validation-score__meta">${escapeHtml(v.researchConfidence)}: ${escapeHtml(score.researchConfidence)}${
      score.horizon ? ` · ${escapeHtml(v.nextHorizon)}: ${escapeHtml(score.horizon)}` : ""
    }</p>
  `;
}

function statusLabel(status, v) {
  if (status === "completed") return v.statusCompleted;
  if (status === "due") return v.statusDue;
  return v.statusPending;
}

function unknownStatusLabel(status, v) {
  if (status === "resolved") return v.unknownResolved;
  if (status === "partial") return v.unknownPartial;
  return v.unknownOpen;
}

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function escapeAttr(value) {
  return escapeHtml(value).replaceAll("'", "&#39;");
}
