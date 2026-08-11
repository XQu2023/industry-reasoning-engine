import type { JournalBrief } from "./types";

type Props = {
  data: JournalBrief["worldModel"];
};

export function WorldModel({ data }: Props) {
  return (
    <section className="journal-section journal-world-model" aria-label="World Model">
      <h2 className="journal-title">{data.title}</h2>
      <div className="journal-world-model__card">
        <p className="journal-world-model__principle">{data.principle}</p>
        <p className="journal-caption journal-world-model__apply-label">{data.applyLabel}</p>
        <ul className="journal-world-model__apply">
          {data.applyTo.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
