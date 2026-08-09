/** Parse Decision Brief markdown into structured fields (no runtime translation). */

export function parseBriefMarkdown(markdown) {
  const sections = splitSections(markdown);
  const title = firstHeadingTitle(markdown);
  const meta = parseMetaTable(sections.get(title) ?? sections.get("") ?? "");
  const thesis = cleanParagraph(sectionBody(sections, "Headline"));
  const exec = parseExecutive(sectionBody(sections, "Executive Summary"));
  const changed = parseWhatChanged(sectionBody(sections, "What Changed?"));
  const matters = parseWhyItMatters(sectionBody(sections, "Why It Matters"));
  const value = parseValueMigration(sectionBody(sections, "Where Value Is Moving"));
  const beneficiaries = parseBeneficiaries(sectionBody(sections, "Potential Beneficiaries"));
  const reality = parseReality(sectionBody(sections, "Reality Check"));
  const bottomLine = cleanParagraph(sectionBody(sections, "Bottom Line"));
  const sources = parseSources(sectionBody(sections, "Sources"));

  return {
    title,
    thesis,
    meta,
    executiveSummary: exec,
    whatChanged: changed,
    whyItMatters: matters,
    valueMigration: value,
    beneficiaries,
    realityCheck: reality,
    bottomLine,
    sources,
  };
}

function splitSections(markdown) {
  const map = new Map();
  const parts = markdown.split(/\n(?=# )/g);
  for (const part of parts) {
    const match = part.match(/^# (.+)\n([\s\S]*)$/);
    if (!match) {
      map.set("", part);
      continue;
    }
    map.set(match[1].trim(), match[2].trim());
  }
  return map;
}

function sectionBody(sections, name) {
  return stripHorizontalRules(sections.get(name) ?? "");
}

function stripHorizontalRules(text) {
  return text
    .replace(/^\s*---\s*$/gm, "")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

function firstHeadingTitle(markdown) {
  const match = markdown.match(/^# (.+)$/m);
  return match ? match[1].trim() : "";
}

function parseMetaTable(block) {
  const rows = {};
  for (const line of block.split("\n")) {
    const match = line.match(/^\|\s*([^|]+?)\s*\|\s*([^|]+?)\s*\|$/);
    if (!match) continue;
    const key = match[1].trim();
    const value = match[2].trim().replace(/^`|`$/g, "");
    if (key === "Field" || /^-+$/.test(key) || key === "---") continue;
    rows[key] = value;
  }
  return {
    product: rows.Product ?? "",
    parentResearch: rows["Parent research"] ?? "",
    t0: rows.T0 ?? "",
    readingTime: rows["Reading time"] ?? "",
    source: rows.Source ?? "",
    disclaimer: rows.Disclaimer ?? "",
  };
}

function parseExecutive(body) {
  const text = stripNotes(body);
  const whyMatch = text.match(/^(Why should I care\?|为什么值得关心？)\s*/);
  const label = whyMatch ? whyMatch[1] : "";
  const paragraph = text
    .replace(/^(Why should I care\?|为什么值得关心？)\s*/, "")
    .replace(/\n+/g, " ")
    .replace(/\s+/g, " ")
    .trim();
  return { label, body: paragraph };
}

function parseWhatChanged(body) {
  const text = stripNotes(body);
  const lines = text.split("\n").map((line) => line.trim()).filter(Boolean);
  const intro = lines.find((line) => !line.startsWith("- ")) ?? "";
  const items = lines.filter((line) => line.startsWith("- ")).map((line) => line.slice(2).trim());
  return { intro, items };
}

function parseWhyItMatters(body) {
  const text = stripNotes(body);
  const paragraphs = text.split(/\n\n+/).map((part) => part.trim()).filter(Boolean);
  const shifts = [];
  const prose = [];
  for (const part of paragraphs) {
    if (/^\d+\.\s/.test(part) || /\n\d+\.\s/.test(part)) {
      for (const line of part.split("\n")) {
        const match = line.match(/^\d+\.\s+\*\*(.+?)\*\*\s*[—–-]\s*(.+)$/);
        if (match) shifts.push({ title: match[1], text: match[2] });
      }
    } else {
      prose.push(cleanInlineKeepStrong(part));
    }
  }
  if (shifts.length && prose.length > 0) {
    return {
      before: prose.slice(0, -1),
      shifts,
      after: prose.slice(-1),
    };
  }
  return { before: prose, shifts, after: [] };
}

function parseValueMigration(body) {
  const text = stripNotes(body);
  const nodes = [...text.matchAll(/\[(.+?)\]/g)].map((match) => match[1].trim());
  const readingMatch = text.match(/\*\*Reading\.\*\*\s*([\s\S]+)$/);
  let lede = "";
  let caption = "";
  if (readingMatch) {
    const reading = cleanParagraph(readingMatch[1]);
    const split = reading.split(/(?<=[.。])\s+/);
    lede = split[0] ?? reading;
    caption = split.slice(1).join(" ").trim() || reading;
  }
  return { nodes, lede, caption };
}

function parseBeneficiaries(body) {
  const text = stripNotes(body);
  const beforeTable = text.split("\n|")[0] ?? "";
  const note = cleanInline(beforeTable).replace(/\*\*/g, "");
  const rows = [];
  for (const line of text.split("\n")) {
    if (!line.startsWith("|")) continue;
    const cells = line.split("|").slice(1, -1).map((cell) => cell.trim());
    if (cells.length < 4) continue;
    if (cells[0] === "Company" || /^:?-{3,}/.test(cells[0])) continue;
    rows.push({
      company: cells[0].replace(/\*\*/g, ""),
      reason: cells[1],
      confidence: cells[2],
      unknown: cells[3],
    });
  }
  return { note, rows };
}

function parseReality(body) {
  const text = stripNotes(body);
  const thesis = cleanParagraph(
    (text.match(/\*\*Current thesis\.\*\*\s*([\s\S]*?)(?=\n\n\*\*|$)/) ?? [])[1] ?? "",
  );
  const wrongBlock = (text.match(/\*\*What would prove us wrong\?\*\*\s*([\s\S]*?)(?=\n\n\*\*|$)/) ?? [])[1] ?? "";
  const wrong = wrongBlock
    .split("\n")
    .map((line) => line.trim())
    .filter((line) => line.startsWith("- "))
    .map((line) => line.slice(2).trim());
  const next = cleanParagraph(
    (text.match(/\*\*Next validation point\.\*\*\s*([\s\S]*?)$/) ?? [])[1] ?? "",
  );
  return { thesis, wrong, next };
}

function parseSources(body) {
  const text = stripNotes(body);
  const items = [];
  for (const line of text.split("\n")) {
    const match = line.match(/^-\s+\*\*(.+?)\*\*\s*(.+)$/);
    if (match) {
      let rest = match[2].trim();
      // Convert markdown links to plain "label path" without rewriting research.
      rest = rest.replace(/\[([^\]]+)\]\(([^)]+)\)/g, "$1");
      const pathMatch = rest.match(/\(`?([^`)]+)`?\)\s*$/);
      items.push({
        label: match[1].replace(/:$/, ""),
        text: rest.replace(/\s*\(`?[^`)]+`?\)\s*$/, "").trim(),
        path: pathMatch ? pathMatch[1] : "",
      });
    }
  }
  const note = text
    .split("\n")
    .filter((line) => line.trim() && !line.trim().startsWith("- "))
    .map((line) => line.trim())
    .join(" ");
  return { items, note };
}

function stripNotes(text) {
  return text.replace(/\n?\*\([^)]*\)\*/g, "").trim();
}

function cleanParagraph(text) {
  return cleanInline(text.replace(/\n+/g, " ").replace(/\s+/g, " ").trim());
}

function cleanInline(text) {
  return text
    .replace(/\*\*(.+?)\*\*/g, "$1")
    .replace(/\s+/g, " ")
    .trim();
}

/** Keep **strong** markers for later HTML rendering. */
function cleanInlineKeepStrong(text) {
  return text.replace(/\s+/g, " ").trim();
}
