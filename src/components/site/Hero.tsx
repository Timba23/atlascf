import heroBg from "@/assets/hero-bg.jpg";

export function Hero() {
  const trust = [
    "15+ лет совокупного опыта",
    "100+ финансовых моделей реализовано",
    "Проанализировано проектов на 5+ млрд ₽",
    "Работаем под NDA",
  ];
  return (
    <section className="relative min-h-[100svh] flex items-end overflow-hidden bg-navy text-white">
      <img
        src={heroBg}
        alt=""
        width={1920}
        height={1080}
        className="absolute inset-0 w-full h-full object-cover opacity-55"
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(15,23,42,0.85) 0%, rgba(15,23,42,0.55) 40%, rgba(15,23,42,0.95) 100%)",
        }}
      />

      <div className="container-x relative pt-40 pb-20 lg:pb-28 grid lg:grid-cols-12 gap-10 items-end">
        <div className="lg:col-span-8 fade-up">
          <div className="flex items-center gap-3 mb-8">
            <span className="gold-rule" />
            <span className="eyebrow">Корпоративные финансы и стратегический консалтинг</span>
          </div>
          <h1 className="font-serif text-[clamp(2.4rem,5.4vw,4.6rem)] leading-[1.05] tracking-tight text-white">
            Помогаем собственникам принимать финансовые решения
            <span className="text-gold italic font-light"> на основе фактов</span>,
            <br className="hidden md:block" /> а не предположений.
          </h1>
          <p className="mt-8 max-w-2xl text-base lg:text-lg text-white/70 leading-relaxed">
            Финансовое моделирование, корпоративные финансы, инвестиционный анализ и CFO-консалтинг
            для строительства, производства, энергетики и растущего бизнеса.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="inline-flex items-center text-[12px] tracking-[0.2em] uppercase bg-gold text-navy px-7 py-4 hover:bg-white transition-colors"
            >
              Записаться на консультацию
            </a>
            <a
              href="#cases"
              className="inline-flex items-center text-[12px] tracking-[0.2em] uppercase border border-white/30 text-white px-7 py-4 hover:border-gold hover:text-gold transition-colors"
            >
              Смотреть кейсы
            </a>
          </div>
        </div>

        <div className="lg:col-span-4 lg:pl-8 lg:border-l lg:border-white/10 fade-up">
          <ul className="space-y-4">
            {trust.map((t) => (
              <li key={t} className="flex items-start gap-3 text-sm text-white/80">
                <span className="mt-2 inline-block w-2 h-px bg-gold flex-none" />
                <span>{t}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 border-t border-white/10">
        <div className="container-x flex flex-wrap items-center justify-between gap-6 py-5 text-[11px] tracking-[0.2em] uppercase text-white/40">
          <span>Москва · СНГ</span>
          <span className="hidden md:inline">Бутиковый консалтинг · Конфиденциальные проекты</span>
          <span>Частная практика</span>
        </div>
      </div>
    </section>
  );
}
