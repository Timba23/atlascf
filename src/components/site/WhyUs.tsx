import { SectionHeader } from "./SectionHeader";

const reasons = [
  { t: "Decision-Making Confidence", d: "Know the financial consequences before committing capital." },
  { t: "Growth Through Data", d: "Identify profitable opportunities and hidden inefficiencies." },
  { t: "Investor & Bank Readiness", d: "Build financial models trusted by investors and lenders." },
  { t: "Executive-Level Advisory", d: "Insights comparable to an in-house CFO, without the overhead." },
];

export function WhyUs() {
  return (
    <section className="py-24 lg:py-32 bg-surface">
      <div className="container-x grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-5">
          <SectionHeader
            eyebrow="Why Atlas"
            title="A partner accountable to your numbers."
            description="We work alongside owners and executive teams to bring institutional rigour to every financial decision."
          />
        </div>
        <div className="lg:col-span-7 grid sm:grid-cols-2 gap-px bg-border">
          {reasons.map((r, i) => (
            <div key={r.t} className="bg-surface p-8 lg:p-10">
              <span className="font-serif text-xl text-gold">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="mt-4 font-serif text-xl text-navy">{r.t}</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{r.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
