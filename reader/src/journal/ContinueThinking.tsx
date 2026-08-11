import type { JournalBrief } from "./types";

type Props = {
  data: JournalBrief["continueThinking"];
};

export function ContinueThinking({ data }: Props) {
  return (
    <section className="journal-section journal-continue" aria-label="Continue Thinking">
      <h2 className="journal-title">{data.title}</h2>
      <ol className="journal-continue__list">
        {data.items.map((item) => (
          <li key={item.id}>
            <a className="journal-continue__link" href={item.href}>
              <span className="journal-caption journal-continue__id">{item.id}</span>
              <span className="journal-continue__title">{item.title}</span>
            </a>
          </li>
        ))}
      </ol>
    </section>
  );
}
