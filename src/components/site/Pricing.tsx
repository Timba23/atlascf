import { SectionHeader } from "./SectionHeader";

const tiers = [
  {
    name: "Финансовая модель",
    price: "120 000 – 350 000 ₽",
    suited: ["Строительство", "HoReCa", "Производство"],
  },
  {
    name: "Инвестиционное и бизнес-планирование",
    price: "180 000 – 600 000 ₽",
    suited: ["Инвесторы", "Банки", "Девелоперские проекты"],
    featured: true,
  },
  {
    name: "CFO-сопровождение",
    price: "120 000 – 350 000 ₽ / мес.",
    suited: ["Растущие компании", "Мультипроектный бизнес", "Собственники, которым нужно финансовое лидерство"],
  },
];

export function Pricing() {
  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="container-x">
        <SectionHeader eyebrow="Типовые проекты" title="Прозрачные ориентиры по стоимости." />

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
                Ориентировочный диапазон
              </div>
              <p className={`mt-6 font-serif text-3xl ${t.featured ? "text-white" : "text-navy"}`}>
                {t.price}
              </p>

              <div className="mt-8 pt-6 border-t border-current/15">
                <span className={`text-[11px] tracking-[0.2em] uppercase ${t.featured ? "text-white/60" : "text-muted-foreground"}`}>
                  Подходит для
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
                Запросить предложение →
              </a>
            </div>
          ))}
        </div>

        <p className="mt-10 text-xs text-muted-foreground max-w-2xl">
          Итоговая стоимость зависит от сложности проекта, количества бизнес-единиц и требуемой глубины анализа.
        </p>
      </div>
    </section>
  );
}
