import { SectionHeader } from "./SectionHeader";

const cases = [
  {
    sector: "Строительство",
    label: "Выручка 1,2 млрд ₽",
    title: "Восстановление прозрачности денежных потоков мультипроектного портфеля.",
    results: ["Выявлен кассовый разрыв 42 млн ₽", "Прозрачность по проектам", "Снижение риска финансирования"],
  },
  {
    sector: "Производство",
    label: "Выручка 650 млн ₽",
    title: "Пересборка экономики производства для устойчивой маржинальности.",
    results: ["EBITDA выросла на 11%", "Оптимизирована экономика производства", "Качественные инвестрешения"],
  },
  {
    sector: "Возобновляемая энергетика",
    label: "Инвестиции 420 млн ₽",
    title: "Подготовка банковской модели для долгосрочного энергоактива.",
    results: ["Положительный NPV подтверждён", "Снижен инвестиционный риск", "Чёткая карта финансирования"],
  },
];

export function Cases() {
  return (
    <section id="cases" className="py-24 lg:py-32 bg-background">
      <div className="container-x">
        <div className="flex items-end justify-between flex-wrap gap-6">
          <SectionHeader
            eyebrow="Избранные проекты"
            title="Конфиденциальная работа. Измеримый результат."
          />
          <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground">Названия клиентов скрыты согласно NDA</p>
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
                <span className="eyebrow">Результаты</span>
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
