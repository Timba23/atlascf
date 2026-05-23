export function FinalCTA() {
  return (
    <section id="contact" className="py-28 lg:py-36 bg-surface border-t border-border">
      <div className="container-x grid lg:grid-cols-12 gap-12 items-end">
        <div className="lg:col-span-8">
          <div className="flex items-center gap-3 mb-6">
            <span className="gold-rule" />
            <span className="eyebrow">Начните проект</span>
          </div>
          <h2 className="font-serif text-4xl md:text-6xl leading-[1.05] text-navy max-w-3xl">
            Получите финансовую уверенность перед следующим
            <span className="text-gold italic font-light"> большим решением.</span>
          </h2>
          <p className="mt-6 max-w-xl text-muted-foreground">
            Обсудите с Atlas Corporate Finance вашу финансовую модель, инвестиционный проект или стратегию роста.
            Все переговоры конфиденциальны.
          </p>
        </div>
        <div className="lg:col-span-4 flex flex-col gap-4">
          <a
            href="mailto:hello@atlas-cf.com"
            className="inline-flex items-center justify-center text-[12px] tracking-[0.2em] uppercase bg-navy text-white px-7 py-5 hover:bg-gold hover:text-navy transition-colors"
          >
            Записаться на консультацию
          </a>
          <a
            href="mailto:hello@atlas-cf.com"
            className="inline-flex items-center justify-center text-[12px] tracking-[0.2em] uppercase border border-navy text-navy px-7 py-5 hover:bg-navy hover:text-white transition-colors"
          >
            Запросить предложение
          </a>
        </div>
      </div>
    </section>
  );
}
