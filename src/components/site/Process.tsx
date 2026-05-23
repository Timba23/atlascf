import { SectionHeader } from "./SectionHeader";

const steps = [
  { t: "Discovery Call", d: "Understanding goals, business structure and challenges." },
  { t: "Financial Analysis", d: "Reviewing current operations and financial performance." },
  { t: "Model Development", d: "Building customised financial models and scenarios." },
  { t: "Strategic Recommendations", d: "Providing actionable, decision-ready insights." },
  { t: "Ongoing Advisory", d: "Optional quarterly or monthly support." },
];

export function Process() {
  return (
    <section id="process" className="py-24 lg:py-32 bg-surface">
      <div className="container-x">
        <SectionHeader eyebrow="Our Process" title="A deliberate, five-step engagement." />
        <ol className="mt-16 grid md:grid-cols-2 lg:grid-cols-5 gap-px bg-border">
          {steps.map((s, i) => (
            <li key={s.t} className="bg-surface p-8 relative">
              <div className="flex items-center gap-3 mb-6">
                <span className="font-serif text-3xl text-gold">{String(i + 1).padStart(2, "0")}</span>
                <span className="h-px flex-1 bg-border" />
              </div>
              <h3 className="font-serif text-lg text-navy mb-2">{s.t}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.d}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
