import { SectionHeader } from "./SectionHeader";

const quotes = [
  {
    q: "Atlas brought the kind of financial clarity our board had been asking for. Their model became the basis for every capital decision we made last year.",
    a: "Owner, Construction Group",
    m: "Revenue 2.4 Bn ₽",
  },
  {
    q: "Working with Atlas felt closer to having a senior CFO in the room than hiring a consultant. The depth of analysis was institutional.",
    a: "Chief Executive Officer, Manufacturing",
    m: "Revenue 650 M ₽",
  },
  {
    q: "Their valuation and project model gave our investment committee the confidence to commit. Rigorous, transparent and defensible.",
    a: "Principal Investor, Energy Sector",
    m: "Project 420 M ₽",
  },
];

export function Testimonials() {
  return (
    <section className="py-24 lg:py-32 bg-navy text-white">
      <div className="container-x">
        <div className="max-w-2xl">
          <div className="flex items-center gap-3 mb-5">
            <span className="gold-rule" />
            <span className="eyebrow">Client Voices</span>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl leading-[1.1] text-white">
            Trusted by owners, executives and investors.
          </h2>
        </div>

        <div className="mt-16 grid lg:grid-cols-3 gap-px bg-white/10">
          {quotes.map((t, i) => (
            <figure key={i} className="bg-navy p-8 lg:p-10 flex flex-col">
              <span className="font-serif text-5xl text-gold leading-none">“</span>
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
