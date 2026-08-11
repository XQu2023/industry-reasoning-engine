import type { JournalBrief } from "./types";

type Props = {
  data: JournalBrief["changeMind"];
};

export function ChangeMind({ data }: Props) {
  return (
    <section className="journal-section journal-change-mind" aria-label="What Would Change My Mind">
      <h2 className="journal-change-mind__prompt">{data.prompt}</h2>
      <ul className="journal-change-mind__list">
        {data.items.map((item) => (
          <li className="journal-change-mind__item" key={item}>
            <span className="journal-change-mind__box" aria-hidden="true" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
