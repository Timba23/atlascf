import { SectionHeader } from "./SectionHeader";

const articles = [
  { tag: "Денежный поток", title: "Почему прибыльный бизнес остаётся без денег.", read: "6 мин чтения" },
  { tag: "Моделирование", title: "Ошибки в финансовых моделях, которые стоят миллионы.", read: "8 мин чтения" },
  { tag: "Инвестиции", title: "Как банки оценивают инвестиционные проекты.", read: "7 мин чтения" },
  { tag: "Строительство", title: "Денежные потоки в строительном бизнесе.", read: "9 мин чтения" },
];

export function Insights() {
  return (
    <section id="insights" className="py-24 lg:py-32 bg-background">
      <div className="container-x">
        <div className="flex items-end justify-between flex-wrap gap-6">
          <SectionHeader eyebrow="Последние материалы" title="Взгляд из практики." />
          <a href="#" className="text-[12px] tracking-[0.2em] uppercase text-navy hover:text-gold transition-colors">Все материалы →</a>
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
