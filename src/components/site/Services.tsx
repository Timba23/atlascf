import { Link } from "@tanstack/react-router";
import { SectionHeader } from "./SectionHeader";

const services = [
  { n: "01", title: "Финансовое моделирование", desc: "Финансовые модели для роста бизнеса, инвестиционных решений, банков и инвесторов.", price: "от 120 000 ₽", to: "/services/financial-modeling" },
  { n: "02", title: "Инвестиционный анализ", desc: "NPV, IRR, анализ чувствительности и расчёт сроков окупаемости.", price: "от 150 000 ₽" },
  { n: "03", title: "Бизнес-планы", desc: "Бизнес-планы для инвесторов и банков, подготовленные по институциональным стандартам.", price: "от 180 000 ₽" },
  { n: "04", title: "Оценка бизнеса", desc: "Рыночный, доходный и затратный подходы к оценке.", price: "от 100 000 ₽" },
  { n: "05", title: "CFO как сервис", desc: "Стратегическое финансовое управление без найма штатного финансового директора.", price: "от 120 000 ₽ / мес." },
  { n: "06", title: "Денежный поток и рентабельность", desc: "Бюджетирование, прогнозирование и оптимизация cash flow.", price: "от 80 000 ₽" },
];

export function Services() {
  return (
    <section id="services" className="py-24 lg:py-32 bg-background">
      <div className="container-x">
        <SectionHeader
          eyebrow="Услуги"
          title="Консалтинг, построенный на финансовой точности."
          description="Сфокусированный набор услуг для собственников, генеральных и финансовых директоров среднего и крупного бизнеса."
        />

        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 border-t border-l border-border">
          {services.map((s) => {
            const Card = (
              <>
                <div className="flex items-baseline justify-between mb-8">
                  <span className="font-serif text-3xl text-navy/30">{s.n}</span>
                  <span className="text-[10px] tracking-[0.2em] uppercase text-gold">{s.price}</span>
                </div>
                <h3 className="font-serif text-2xl text-navy mb-3">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                <div className="mt-8 flex items-center justify-between">
                  <div className="h-px w-8 bg-gold group-hover:w-16 transition-all" />
                  {s.to && (
                    <span className="text-[11px] tracking-[0.15em] uppercase text-gold opacity-0 group-hover:opacity-100 transition-opacity">
                      Подробнее →
                    </span>
                  )}
                </div>
              </>
            );
            return s.to ? (
              <Link
                key={s.n}
                to={s.to}
                className="group relative p-8 lg:p-10 border-r border-b border-border bg-background hover:bg-surface transition-colors cursor-pointer"
              >
                {Card}
              </Link>
            ) : (
              <article
                key={s.n}
                className="group relative p-8 lg:p-10 border-r border-b border-border bg-background hover:bg-surface transition-colors"
              >
                {Card}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
