import { createFileRoute, Link } from "@tanstack/react-router";
import { Footer } from "@/components/site/Footer";
import { SectionHeader } from "@/components/site/SectionHeader";

export const Route = createFileRoute("/services/financial-modeling")({
  component: FinancialModelingPage,
  head: () => ({
    meta: [
      { title: "Финансовое моделирование — Atlas Corporate Finance" },
      {
        name: "description",
        content:
          "Финансовые модели институционального уровня для собственников бизнеса, инвесторов и банков. Строительство, производство, энергетика, HoReCa. От 120 000 до 600 000 ₽ за проект.",
      },
      { property: "og:title", content: "Финансовое моделирование — Atlas Corporate Finance" },
      {
        property: "og:description",
        content:
          "Финансовые модели, на которых инвесткомитеты и банки принимают решения о капитале.",
      },
    ],
  }),
});

const problems = [
  {
    t: "Решение о капитале без опоры на цифры",
    d: "Собственник принимает решение об инвестициях, заёмном финансировании или новом проекте, опираясь на интуицию и Excel-таблицы менеджмента.",
  },
  {
    t: "Прибыль есть, денег нет",
    d: "Компания показывает прибыль в управленческой отчётности, но регулярно сталкивается с кассовыми разрывами и срывом графика платежей.",
  },
  {
    t: "Банк или инвестор отказывает в финансировании",
    d: "Поданная модель не проходит due diligence: отсутствует структура, не подтверждены допущения, не выдерживает сценарного анализа.",
  },
  {
    t: "Непонятна экономика проектов и направлений",
    d: "Мультипроектный или мультипродуктовый бизнес не видит, какие проекты создают стоимость, а какие её разрушают.",
  },
  {
    t: "Нет инструмента для управленческих решений",
    d: "Модель не пересобирается под сценарии «что если»: рост цен на сырьё, изменение ставки, перенос ввода объекта, потеря ключевого клиента.",
  },
  {
    t: "Покупка, продажа или партнёрство без оценки",
    d: "Сделка M&A, вход партнёра или выход из бизнеса обсуждаются без независимой финансовой модели и обоснованной оценки.",
  },
];

const included = [
  { n: "01", t: "Финансовая диагностика", d: "Анализ управленческой и бухгалтерской отчётности, бизнес-процессов и драйверов выручки." },
  { n: "02", t: "Архитектура модели", d: "Разработка структуры под цели проекта: операционная модель, инвестиционная, банковская или модель сделки." },
  { n: "03", t: "Сборка операционного блока", d: "Выручка, себестоимость, постоянные затраты, налоги — с детализацией по продуктам, объектам или бизнес-единицам." },
  { n: "04", t: "Инвестиционный и финансовый блок", d: "CAPEX, оборотный капитал, график финансирования, обслуживание долга, ковенанты." },
  { n: "05", t: "Сценарный анализ", d: "Базовый, оптимистичный и стресс-сценарий. Анализ чувствительности по ключевым переменным." },
  { n: "06", t: "Защита перед банком и инвестором", d: "Сопровождение на встречах с кредитным комитетом, инвестором или советом директоров." },
];

const components = [
  { t: "P&L", d: "Отчёт о финансовом результате с разбивкой по сегментам и периодам." },
  { t: "Cash Flow", d: "Прямой и косвенный денежный поток. Помесячный горизонт на проектный период." },
  { t: "Balance Sheet", d: "Баланс с автоматической сходимостью активов и пассивов." },
  { t: "CAPEX-график", d: "Календарный план капитальных вложений с привязкой к этапам проекта." },
  { t: "Debt Schedule", d: "Графики выборки и погашения кредитов, расчёт процентов, проверка ковенантов." },
  { t: "Working Capital", d: "Модель оборотного капитала: дебиторская, кредиторская задолженность, запасы." },
  { t: "Unit-экономика", d: "Экономика проекта, объекта или продукта на единицу: маржинальность, окупаемость." },
  { t: "NPV, IRR, Payback", d: "Расчёт ключевых инвестиционных метрик и анализ чувствительности к ставке дисконтирования." },
  { t: "Сценарии и стресс-тесты", d: "Переключаемые сценарии, проверка устойчивости к изменению цен, спроса и стоимости денег." },
];

const industries = [
  { t: "Строительство и девелопмент", d: "Жилые и коммерческие проекты, инфраструктура, мультипроектные портфели." },
  { t: "Производство", d: "Дискретное и непрерывное производство, контрактное производство, переработка." },
  { t: "Энергетика", d: "Традиционная и возобновляемая генерация, инфраструктурные энергопроекты." },
  { t: "HoReCa", d: "Гостиничные комплексы, рестораны, сетевые форматы, сервисные апартаменты." },
];

const cases = [
  {
    sector: "Строительство",
    label: "Выручка 1,2 млрд ₽",
    title: "Банковская модель мультипроектного девелопера для проектного финансирования.",
    results: ["Одобрен лимит на 380 млн ₽", "Подтверждены ковенанты", "Снижена ставка на 1,8 п.п."],
  },
  {
    sector: "Производство",
    label: "Выручка 650 млн ₽",
    title: "Модель экономики производства для инвесткомитета акционеров.",
    results: ["EBITDA-маржа +4,2 п.п.", "Решение о CAPEX 180 млн ₽", "Окупаемость подтверждена"],
  },
  {
    sector: "Энергетика",
    label: "Проект 420 млн ₽",
    title: "Инвестиционная модель ВИЭ-проекта для пула инвесторов.",
    results: ["IRR проекта 18,4%", "Положительный NPV", "Сделка закрыта в срок"],
  },
];

const tiers = [
  {
    name: "Операционная модель",
    price: "120 000 – 250 000 ₽",
    desc: "Управленческая финансовая модель для собственника и менеджмента. Бюджетирование, контроль и сценарии.",
    suited: ["Действующий бизнес 100 – 800 млн ₽", "Производство, HoReCa, торговля", "Срок 2–3 недели"],
  },
  {
    name: "Банковская модель",
    price: "200 000 – 450 000 ₽",
    desc: "Модель уровня кредитного комитета: ковенанты, графики долга, стресс-сценарии, защита перед банком.",
    suited: ["Проектное и инвестиционное финансирование", "Строительство, энергетика, производство", "Срок 3–5 недель"],
    featured: true,
  },
  {
    name: "Инвестиционная модель",
    price: "300 000 – 600 000 ₽",
    desc: "Модель для инвестора, сделки M&A или входа партнёра. NPV, IRR, оценка бизнеса, переговорная позиция.",
    suited: ["Сделки 200 млн – 3 млрд ₽", "Девелопмент, ВИЭ, портфельные активы", "Срок 4–6 недель"],
  },
];

const faq = [
  {
    q: "Сколько времени занимает разработка модели?",
    a: "От 2 до 6 недель в зависимости от типа модели, количества бизнес-единиц и доступности исходных данных. Точный срок фиксируется в коммерческом предложении после установочной встречи.",
  },
  {
    q: "В каком формате передаётся модель?",
    a: "Модель передаётся в Microsoft Excel с открытыми формулами, прозрачной структурой и кратким руководством пользователя. Допущения вынесены на отдельный лист и могут изменяться менеджментом.",
  },
  {
    q: "Какие данные нужны для старта работы?",
    a: "Управленческая и бухгалтерская отчётность за 2–3 года, действующий бюджет, ключевые договоры, информация о CAPEX и долговом портфеле. Полный перечень фиксируется на установочной встрече.",
  },
  {
    q: "Подписывается ли NDA?",
    a: "Да. Соглашение о конфиденциальности подписывается до передачи любых материалов. Все проекты ведутся под NDA, имена клиентов не раскрываются без письменного согласия.",
  },
  {
    q: "Сопровождаете ли вы переговоры с банком или инвестором?",
    a: "Да. По запросу мы участвуем во встречах с кредитным комитетом банка, инвестиционным комитетом или советом директоров — защищаем допущения и отвечаем на вопросы по модели.",
  },
  {
    q: "Можно ли вносить изменения после сдачи модели?",
    a: "В течение 30 дней после сдачи мы бесплатно корректируем модель в рамках первоначального ТЗ. Дальнейшее сопровождение возможно в формате CFO-ретейнера.",
  },
];

function FinancialModelingPage() {
  return (
    <main className="bg-background text-foreground">
      {/* Top nav for inner pages — dark on light */}
      <header className="border-b border-border">
        <div className="container-x flex items-center justify-between py-6">
          <Link to="/" className="flex items-center gap-3">
            <span className="inline-block w-7 h-7 border border-gold rotate-45" aria-hidden />
            <span className="font-serif text-xl text-navy tracking-tight">
              Atlas <span className="text-gold">Corporate Finance</span>
            </span>
          </Link>
          <nav className="hidden lg:flex items-center gap-9">
            <Link to="/" hash="services" className="text-[13px] tracking-wide text-navy/70 hover:text-gold transition-colors">Услуги</Link>
            <Link to="/" hash="industries" className="text-[13px] tracking-wide text-navy/70 hover:text-gold transition-colors">Отрасли</Link>
            <Link to="/" hash="cases" className="text-[13px] tracking-wide text-navy/70 hover:text-gold transition-colors">Кейсы</Link>
            <Link to="/" hash="contact" className="text-[13px] tracking-wide text-navy/70 hover:text-gold transition-colors">Контакты</Link>
          </nav>
          <Link
            to="/"
            hash="contact"
            className="hidden lg:inline-flex items-center text-[12px] tracking-[0.18em] uppercase border border-navy/30 text-navy px-5 py-2.5 hover:bg-navy hover:text-white transition-colors"
          >
            Записаться на консультацию
          </Link>
        </div>
      </header>

      {/* 1. Hero */}
      <section className="relative bg-navy text-white overflow-hidden">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            background:
              "radial-gradient(circle at 80% 20%, rgba(212,175,55,0.25), transparent 55%), linear-gradient(180deg, rgba(15,23,42,0) 0%, rgba(15,23,42,1) 100%)",
          }}
        />
        <div className="container-x relative pt-24 pb-24 lg:pt-32 lg:pb-32 grid lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-8">
            <div className="flex items-center gap-3 mb-6">
              <span className="gold-rule" />
              <span className="eyebrow">Услуга · Финансовое моделирование</span>
            </div>
            <h1 className="font-serif text-[clamp(2.2rem,4.8vw,4rem)] leading-[1.05] tracking-tight">
              Финансовые модели, на которых
              <span className="text-gold italic font-light"> принимают решения </span>
              инвесткомитеты и банки.
            </h1>
            <p className="mt-8 max-w-2xl text-base lg:text-lg text-white/70 leading-relaxed">
              Разрабатываем финансовые модели институционального уровня для собственников среднего и крупного бизнеса,
              инвесторов и кредиторов. Каждая модель выдерживает due diligence и используется как рабочий инструмент управления.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/"
                hash="contact"
                className="inline-flex items-center text-[12px] tracking-[0.2em] uppercase bg-gold text-navy px-7 py-4 hover:bg-white transition-colors"
              >
                Записаться на консультацию
              </Link>
              <Link
                to="/"
                hash="contact"
                className="inline-flex items-center text-[12px] tracking-[0.2em] uppercase border border-white/30 text-white px-7 py-4 hover:border-gold hover:text-gold transition-colors"
              >
                Запросить предложение
              </Link>
            </div>
          </div>
          <div className="lg:col-span-4 lg:pl-8 lg:border-l lg:border-white/10">
            <ul className="space-y-4 text-sm text-white/80">
              {[
                "Стоимость проекта 120 000 – 600 000 ₽",
                "Срок разработки 2–6 недель",
                "100+ моделей в практике",
                "Все проекты под NDA",
              ].map((t) => (
                <li key={t} className="flex items-start gap-3">
                  <span className="mt-2 inline-block w-2 h-px bg-gold flex-none" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 2. Business Problems We Solve */}
      <section className="py-24 lg:py-32 bg-background">
        <div className="container-x">
          <SectionHeader
            eyebrow="Задачи бизнеса"
            title="Когда собственнику нужна финансовая модель."
            description="Шесть типичных ситуаций, в которых менеджерского Excel уже недостаточно, а решение касается капитала, долга или сделки."
          />
          <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 border-t border-l border-border">
            {problems.map((p, i) => (
              <div key={p.t} className="p-8 lg:p-10 border-r border-b border-border bg-background">
                <span className="font-serif text-3xl text-navy/25">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-6 font-serif text-xl text-navy leading-snug">{p.t}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{p.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. What Is Included */}
      <section className="py-24 lg:py-32 bg-surface">
        <div className="container-x">
          <SectionHeader
            eyebrow="Что входит в проект"
            title="Полный цикл — от диагностики до защиты."
            description="Работа строится как последовательный консалтинговый проект с фиксированными результатами на каждом этапе."
          />
          <div className="mt-16 grid lg:grid-cols-2 gap-px bg-border">
            {included.map((s) => (
              <div key={s.n} className="bg-surface p-8 lg:p-10 flex gap-6">
                <span className="font-serif text-3xl text-gold flex-none">{s.n}</span>
                <div>
                  <h3 className="font-serif text-xl text-navy">{s.t}</h3>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{s.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Financial Model Components */}
      <section className="py-24 lg:py-32 bg-background">
        <div className="container-x">
          <SectionHeader
            eyebrow="Состав модели"
            title="Компоненты финансовой модели."
            description="Стандартный набор блоков. В зависимости от целей проекта расширяется или адаптируется под отраслевую специфику."
          />
          <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 border-t border-l border-border">
            {components.map((c) => (
              <article key={c.t} className="p-8 lg:p-10 border-r border-b border-border bg-background">
                <h3 className="font-serif text-2xl text-navy">{c.t}</h3>
                <div className="mt-4 h-px w-8 bg-gold" />
                <p className="mt-5 text-sm text-muted-foreground leading-relaxed">{c.d}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Industries We Serve */}
      <section className="py-24 lg:py-32 bg-navy text-white">
        <div className="container-x">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-5">
              <span className="gold-rule" />
              <span className="eyebrow">Отраслевая экспертиза</span>
            </div>
            <h2 className="font-serif text-4xl md:text-5xl leading-[1.1] text-white">
              Отрасли, в которых мы работаем.
            </h2>
          </div>
          <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10">
            {industries.map((s) => (
              <div key={s.t} className="bg-navy p-8 lg:p-10">
                <h3 className="font-serif text-xl text-white">{s.t}</h3>
                <div className="mt-4 h-px w-8 bg-gold" />
                <p className="mt-5 text-sm text-white/70 leading-relaxed">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Case Studies */}
      <section className="py-24 lg:py-32 bg-background">
        <div className="container-x">
          <div className="flex items-end justify-between flex-wrap gap-6">
            <SectionHeader
              eyebrow="Кейсы"
              title="Реализованные проекты по финансовому моделированию."
            />
            <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground">
              Названия клиентов скрыты согласно NDA
            </p>
          </div>
          <div className="mt-16 grid lg:grid-cols-3 gap-px bg-border">
            {cases.map((c) => (
              <article key={c.title} className="bg-background p-8 lg:p-10 flex flex-col">
                <div className="flex items-center justify-between text-[11px] tracking-[0.2em] uppercase">
                  <span className="text-navy">{c.sector}</span>
                  <span className="text-gold">{c.label}</span>
                </div>
                <h3 className="mt-8 font-serif text-2xl text-navy leading-snug flex-1">{c.title}</h3>
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

      {/* 7. Pricing */}
      <section className="py-24 lg:py-32 bg-surface">
        <div className="container-x">
          <SectionHeader
            eyebrow="Стоимость"
            title="Прозрачные форматы работы."
            description="Стоимость зависит от типа модели, количества бизнес-единиц и требуемой глубины проработки."
          />
          <div className="mt-16 grid lg:grid-cols-3 gap-6">
            {tiers.map((t) => (
              <div
                key={t.name}
                className={`p-10 border flex flex-col ${
                  t.featured ? "bg-navy text-white border-navy" : "bg-background border-border"
                }`}
              >
                <h3 className={`font-serif text-2xl ${t.featured ? "text-white" : "text-navy"}`}>
                  {t.name}
                </h3>
                <div className="mt-2 text-[11px] tracking-[0.2em] uppercase text-gold">
                  Ориентировочный диапазон
                </div>
                <p className={`mt-6 font-serif text-3xl ${t.featured ? "text-white" : "text-navy"}`}>
                  {t.price}
                </p>
                <p className={`mt-5 text-sm leading-relaxed ${t.featured ? "text-white/80" : "text-muted-foreground"}`}>
                  {t.desc}
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
                <Link
                  to="/"
                  hash="contact"
                  className={`mt-10 inline-flex items-center text-[12px] tracking-[0.2em] uppercase ${
                    t.featured ? "text-gold hover:text-white" : "text-navy hover:text-gold"
                  } transition-colors`}
                >
                  Запросить предложение →
                </Link>
              </div>
            ))}
          </div>
          <p className="mt-10 text-xs text-muted-foreground max-w-2xl">
            NDA подписывается до передачи любых материалов. Итоговая стоимость фиксируется в коммерческом предложении после установочной встречи.
          </p>
        </div>
      </section>

      {/* 8. FAQ */}
      <section className="py-24 lg:py-32 bg-background">
        <div className="container-x grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <SectionHeader
              eyebrow="Частые вопросы"
              title="Что важно знать до старта проекта."
              description="Если у вас остались вопросы — обсудим их на установочной встрече. Все переговоры конфиденциальны."
            />
          </div>
          <div className="lg:col-span-7">
            <div className="border-t border-border">
              {faq.map((f) => (
                <details key={f.q} className="group border-b border-border py-6">
                  <summary className="flex items-start justify-between gap-6 cursor-pointer list-none">
                    <h3 className="font-serif text-lg text-navy leading-snug">{f.q}</h3>
                    <span className="font-serif text-2xl text-gold leading-none transition-transform group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <p className="mt-4 text-sm text-muted-foreground leading-relaxed max-w-2xl">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 9. CTA */}
      <section className="py-28 lg:py-36 bg-surface border-t border-border">
        <div className="container-x grid lg:grid-cols-12 gap-12 items-end">
          <div className="lg:col-span-8">
            <div className="flex items-center gap-3 mb-6">
              <span className="gold-rule" />
              <span className="eyebrow">Начните проект</span>
            </div>
            <h2 className="font-serif text-4xl md:text-6xl leading-[1.05] text-navy max-w-3xl">
              Получите финансовую модель,
              <span className="text-gold italic font-light"> на которой будут приниматься решения.</span>
            </h2>
            <p className="mt-6 max-w-xl text-muted-foreground">
              Установочная встреча — 45 минут, без обязательств. Подписываем NDA, обсуждаем задачу
              и в течение пяти рабочих дней направляем коммерческое предложение.
            </p>
          </div>
          <div className="lg:col-span-4 flex flex-col gap-4">
            <Link
              to="/"
              hash="contact"
              className="inline-flex items-center justify-center text-[12px] tracking-[0.2em] uppercase bg-navy text-white px-7 py-5 hover:bg-gold hover:text-navy transition-colors"
            >
              Записаться на консультацию
            </Link>
            <Link
              to="/"
              hash="contact"
              className="inline-flex items-center justify-center text-[12px] tracking-[0.2em] uppercase border border-navy text-navy px-7 py-5 hover:bg-navy hover:text-white transition-colors"
            >
              Запросить предложение
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
