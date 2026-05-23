import { SectionHeader } from "./SectionHeader";

const services = [
  { n: "01", title: "Financial Modeling", desc: "Financial models for business growth, investment decisions, lenders and investors.", price: "from 120,000 ₽" },
  { n: "02", title: "Investment Analysis", desc: "NPV, IRR, sensitivity analysis and payback period calculations.", price: "from 150,000 ₽" },
  { n: "03", title: "Business Plans", desc: "Investor-ready and bank-ready business plans built to institutional standards.", price: "from 180,000 ₽" },
  { n: "04", title: "Business Valuation", desc: "Market, income and asset-based valuation approaches.", price: "from 100,000 ₽" },
  { n: "05", title: "CFO as a Service", desc: "Strategic financial management without hiring a full-time CFO.", price: "from 120,000 ₽ / month" },
  { n: "06", title: "Cash Flow & Profitability", desc: "Budgeting, forecasting and cash flow optimisation.", price: "from 80,000 ₽" },
];

export function Services() {
  return (
    <section id="services" className="py-24 lg:py-32 bg-background">
      <div className="container-x">
        <SectionHeader
          eyebrow="Services"
          title="Advisory built around financial precision."
          description="A focused service offering for owners, CEOs and CFOs of medium and large businesses."
        />

        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 border-t border-l border-border">
          {services.map((s) => (
            <article
              key={s.n}
              className="group relative p-8 lg:p-10 border-r border-b border-border bg-background hover:bg-surface transition-colors"
            >
              <div className="flex items-baseline justify-between mb-8">
                <span className="font-serif text-3xl text-navy/30">{s.n}</span>
                <span className="text-[10px] tracking-[0.2em] uppercase text-gold">{s.price}</span>
              </div>
              <h3 className="font-serif text-2xl text-navy mb-3">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              <div className="mt-8 h-px w-8 bg-gold group-hover:w-16 transition-all" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
