import { SectionHeader } from "./SectionHeader";

const cases = [
  {
    sector: "Construction",
    label: "Revenue 1.2 Bn ₽",
    title: "Restoring cash visibility across a multi-project portfolio.",
    results: ["Identified 42 M ₽ cash gap", "Improved project visibility", "Reduced financing risk"],
  },
  {
    sector: "Manufacturing",
    label: "Revenue 650 M ₽",
    title: "Re-engineering production economics for sustained margin.",
    results: ["EBITDA improved by 11%", "Optimised production economics", "Better investment decisions"],
  },
  {
    sector: "Renewable Energy",
    label: "Investment 420 M ₽",
    title: "Structuring a bankable case for a long-horizon energy asset.",
    results: ["Positive NPV identified", "Reduced investment risk", "Clear financing roadmap"],
  },
];

export function Cases() {
  return (
    <section id="cases" className="py-24 lg:py-32 bg-background">
      <div className="container-x">
        <div className="flex items-end justify-between flex-wrap gap-6">
          <SectionHeader
            eyebrow="Selected Engagements"
            title="Confidential work. Measurable outcomes."
          />
          <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground">Client names withheld under NDA</p>
        </div>

        <div className="mt-16 grid lg:grid-cols-3 gap-px bg-border">
          {cases.map((c) => (
            <article key={c.title} className="bg-background p-8 lg:p-10 flex flex-col">
              <div className="flex items-center justify-between text-[11px] tracking-[0.2em] uppercase">
                <span className="text-navy">{c.sector}</span>
                <span className="text-gold">{c.label}</span>
              </div>
              <h3 className="mt-8 font-serif text-2xl text-navy leading-snug flex-1">
                {c.title}
              </h3>
              <div className="mt-8 pt-6 border-t border-border">
                <span className="eyebrow">Outcomes</span>
                <ul className="mt-4 space-y-2">
                  {c.results.map((r) => (
                    <li key={r} className="text-sm text-foreground/80">— {r}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
