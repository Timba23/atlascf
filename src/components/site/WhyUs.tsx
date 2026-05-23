import { SectionHeader } from "./SectionHeader";

const reasons = [
  { t: "Уверенность в решениях", d: "Понимайте финансовые последствия до того, как вкладывать капитал." },
  { t: "Рост через данные", d: "Выявляем прибыльные возможности и скрытые неэффективности." },
  { t: "Готовность к инвесторам и банкам", d: "Финансовые модели, которым доверяют инвесторы и кредиторы." },
  { t: "Экспертиза уровня СEO", d: "Инсайты, сопоставимые с внутренним CFO, без накладных расходов." },
];

export function WhyUs() {
  return (
    <section className="py-24 lg:py-32 bg-surface">
      <div className="container-x grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-5">
          <SectionHeader
            eyebrow="Почему Atlas"
            title="Партнёр, отвечающий за ваши цифры."
            description="Мы работаем вместе с собственниками и топ-менеджментом, привнося институциональную строгость в каждое финансовое решение."
          />
        </div>
        <div className="lg:col-span-7 grid sm:grid-cols-2 gap-px bg-border">
          {reasons.map((r, i) => (
            <div key={r.t} className="bg-surface p-8 lg:p-10">
              <span className="font-serif text-xl text-gold">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="mt-4 font-serif text-xl text-navy">{r.t}</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{r.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
