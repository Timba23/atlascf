import { SectionHeader } from "./SectionHeader";

const articles = [
  { tag: "Cash Flow", title: "Why profitable businesses still run out of cash.", read: "6 min read" },
  { tag: "Modeling", title: "Financial modeling mistakes that cost millions.", read: "8 min read" },
  { tag: "Investment", title: "How banks evaluate investment projects.", read: "7 min read" },
  { tag: "Construction", title: "Understanding cash flow in construction businesses.", read: "9 min read" },
];

export function Insights() {
  return (
    <section id="insights" className="py-24 lg:py-32 bg-background">
      <div className="container-x">
        <div className="flex items-end justify-between flex-wrap gap-6">
          <SectionHeader eyebrow="Latest Insights" title="Perspectives from the practice." />
          <a href="#" className="text-[12px] tracking-[0.2em] uppercase text-navy hover:text-gold transition-colors">All Insights →</a>
        </div>

        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
          {articles.map((a) => (
            <a
              key={a.title}
              href="#"
              className="group bg-background p-8 flex flex-col justify-between min-h-[260px] hover:bg-surface transition-colors"
            >
              <span className="text-[11px] tracking-[0.2em] uppercase text-gold">{a.tag}</span>
              <h3 className="mt-6 font-serif text-xl text-navy leading-snug group-hover:text-navy-light">
                {a.title}
              </h3>
              <span className="mt-6 text-xs text-muted-foreground">{a.read} →</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
