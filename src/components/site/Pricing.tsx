import { SectionHeader } from "./SectionHeader";

const tiers = [
  {
    name: "Financial Model",
    price: "120,000 – 350,000 ₽",
    suited: ["Construction", "HoReCa", "Manufacturing"],
  },
  {
    name: "Investment & Business Planning",
    price: "180,000 – 600,000 ₽",
    suited: ["Investors", "Banks", "Development projects"],
    featured: true,
  },
  {
    name: "CFO Advisory",
    price: "120,000 – 350,000 ₽ / month",
    suited: ["Growing companies", "Multi-project businesses", "Owners needing financial leadership"],
  },
];

export function Pricing() {
  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="container-x">
        <SectionHeader eyebrow="Typical Engagements" title="Transparent indicative pricing." />

        <div className="mt-16 grid lg:grid-cols-3 gap-6">
          {tiers.map((t) => (
            <div
              key={t.name}
              className={`p-10 border ${
                t.featured
                  ? "bg-navy text-white border-navy"
                  : "bg-background border-border"
              }`}
            >
              <h3 className={`font-serif text-2xl ${t.featured ? "text-white" : "text-navy"}`}>
                {t.name}
              </h3>
              <div className={`mt-2 text-[11px] tracking-[0.2em] uppercase ${t.featured ? "text-gold" : "text-gold"}`}>
                Indicative Range
              </div>
              <p className={`mt-6 font-serif text-3xl ${t.featured ? "text-white" : "text-navy"}`}>
                {t.price}
              </p>

              <div className="mt-8 pt-6 border-t border-current/15">
                <span className={`text-[11px] tracking-[0.2em] uppercase ${t.featured ? "text-white/60" : "text-muted-foreground"}`}>
                  Suitable for
                </span>
                <ul className="mt-4 space-y-2">
                  {t.suited.map((s) => (
                    <li key={s} className={`text-sm ${t.featured ? "text-white/85" : "text-foreground/80"}`}>— {s}</li>
                  ))}
                </ul>
              </div>

              <a
                href="#contact"
                className={`mt-10 inline-flex items-center text-[12px] tracking-[0.2em] uppercase ${
                  t.featured ? "text-gold hover:text-white" : "text-navy hover:text-gold"
                } transition-colors`}
              >
                Request Proposal →
              </a>
            </div>
          ))}
        </div>

        <p className="mt-10 text-xs text-muted-foreground max-w-2xl">
          Final fees depend on project complexity, number of business units and the depth of analysis required.
        </p>
      </div>
    </section>
  );
}
