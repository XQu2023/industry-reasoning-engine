import type { JournalBrief } from "./types";

type Props = {
  data: JournalBrief["diagram"];
};

export function Diagram({ data }: Props) {
  const items: Array<{ type: "node" | "arrow"; value: string; key: string }> = [];
  data.nodes.forEach((node, index) => {
    items.push({ type: "node", value: node, key: `node-${index}-${node}` });
    if (index < data.nodes.length - 1) {
      items.push({ type: "arrow", value: "→", key: `arrow-${index}` });
    }
  });

  return (
    <section className="journal-section journal-section--wide journal-diagram" aria-label="Diagram">
      <div className="journal-section__inner">
        <h2 className="journal-title">Diagram</h2>
        <ol className="journal-diagram__flow">
          {items.map((item) =>
            item.type === "node" ? (
              <li className="journal-diagram__node" key={item.key}>
                {item.value}
              </li>
            ) : (
              <li className="journal-diagram__arrow" aria-hidden="true" key={item.key}>
                {item.value}
              </li>
            ),
          )}
        </ol>
        {data.caption ? <p className="journal-caption journal-diagram__caption">{data.caption}</p> : null}
      </div>
    </section>
  );
}
