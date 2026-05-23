const quotes = [
  {
    q: "Atlas принёс ту финансовую ясность, которую давно ждал совет директоров. Их модель легла в основу всех решений по капиталу за последний год.",
    a: "Собственник, строительная группа",
    m: "Выручка 2,4 млрд ₽",
  },
  {
    q: "Работа с Atlas скорее напоминала наличие senior CFO в команде, чем сотрудничество с консультантом. Глубина анализа институционального уровня.",
    a: "Генеральный директор, производство",
    m: "Выручка 650 млн ₽",
  },
  {
    q: "Их оценка и проектная модель дали инвесткомитету уверенность принять решение. Строго, прозрачно и обоснованно.",
    a: "Принципал, энергетический инвестор",
    m: "Проект 420 млн ₽",
  },
];

export function Testimonials() {
  return (
    <section className="py-24 lg:py-32 bg-navy text-white">
      <div className="container-x">
        <div className="max-w-2xl">
          <div className="flex items-center gap-3 mb-5">
            <span className="gold-rule" />
            <span className="eyebrow">Отзывы клиентов</span>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl leading-[1.1] text-white">
            Нам доверяют собственники, руководители и инвесторы.
          </h2>
        </div>

        <div className="mt-16 grid lg:grid-cols-3 gap-px bg-white/10">
          {quotes.map((t, i) => (
            <figure key={i} className="bg-navy p-8 lg:p-10 flex flex-col">
              <span className="font-serif text-5xl text-gold leading-none">«</span>
              <blockquote className="mt-4 font-serif text-xl text-white/90 leading-snug flex-1">
                {t.q}
              </blockquote>
              <figcaption className="mt-8 pt-6 border-t border-white/10">
                <div className="text-sm text-white">{t.a}</div>
                <div className="text-[11px] tracking-[0.2em] uppercase text-gold mt-1">{t.m}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
