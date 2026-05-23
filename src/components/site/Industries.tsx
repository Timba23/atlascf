const industries = [
  { name: "Строительство", points: ["Рентабельность проектов", "Прогноз денежных потоков", "Анализ работы подрядчиков"] },
  { name: "Производство", points: ["Оптимизация структуры затрат", "Экономика производства", "Оценка CAPEX"] },
  { name: "Энергетика и ВИЭ", points: ["Солнечные и ветровые проекты", "Энергетическая инфраструктура", "Проектное финансирование"] },
  { name: "HoReCa", points: ["Юнит-экономика", "Планирование экспансии", "Рентабельность локаций"] },
  { name: "Логистика", points: ["Экономика автопарка", "Рентабельность маршрутов", "Управление оборотным капиталом"] },
];

export function Industries() {
  return (
    <section id="industries" className="py-24 lg:py-32 bg-navy text-white">
      <div className="container-x">
        <div className="max-w-2xl">
          <div className="flex items-center gap-3 mb-5">
            <span className="gold-rule" />
            <span className="eyebrow">Отрасли</span>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl leading-[1.1] text-white">
            Отраслевая экспертиза в капиталоёмких и фондоёмких бизнесах.
          </h2>
        </div>

        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10">
          {industries.map((i, idx) => (
            <div
              key={i.name}
              className="bg-navy p-8 lg:p-10 hover:bg-navy-light transition-colors"
            >
              <div className="flex items-baseline justify-between mb-6">
                <h3 className="font-serif text-2xl text-white">{i.name}</h3>
                <span className="text-[11px] tracking-[0.2em] text-gold">{String(idx + 1).padStart(2, "0")}</span>
              </div>
              <ul className="space-y-3">
                {i.points.map((p) => (
                  <li key={p} className="flex items-start gap-3 text-sm text-white/70">
                    <span className="mt-2 inline-block w-2 h-px bg-gold flex-none" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div className="bg-navy p-8 lg:p-10 flex flex-col justify-between">
            <p className="text-sm text-white/60 leading-relaxed">
              Каждый проект адаптируется под операционные реалии отрасли и решения, которые предстоит принять клиенту.
            </p>
            <a href="#contact" className="mt-6 inline-flex items-center text-[12px] tracking-[0.2em] uppercase text-gold hover:text-white transition-colors">
              Обсудить ваш сектор →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
