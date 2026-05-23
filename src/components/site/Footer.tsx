export function Footer() {
  const cols = [
    { h: "Practice", links: ["Services", "Industries", "Case Studies", "Insights"] },
    { h: "Firm", links: ["About", "Contacts", "Legal", "Confidentiality"] },
    { h: "Connect", links: ["LinkedIn", "Telegram", "Email", "Phone"] },
  ];
  return (
    <footer className="bg-navy text-white">
      <div className="container-x py-20 grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-5">
          <div className="flex items-center gap-3">
            <span className="inline-block w-7 h-7 border border-gold rotate-45" aria-hidden />
            <span className="font-serif text-2xl">Atlas <span className="text-gold">Corporate Finance</span></span>
          </div>
          <p className="mt-6 max-w-sm text-sm text-white/60 leading-relaxed">
            Boutique corporate finance and strategic advisory for owners of medium and large businesses across Russia and the CIS.
          </p>
          <div className="mt-8 text-[11px] tracking-[0.2em] uppercase text-gold">hello@atlas-cf.com</div>
        </div>
        {cols.map((c) => (
          <div key={c.h} className="lg:col-span-2">
            <div className="eyebrow mb-5">{c.h}</div>
            <ul className="space-y-3">
              {c.links.map((l) => (
                <li key={l}>
                  <a href="#" className="text-sm text-white/75 hover:text-gold transition-colors">{l}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
        <div className="lg:col-span-1" />
      </div>
      <div className="border-t border-white/10">
        <div className="container-x py-6 flex flex-wrap items-center justify-between gap-4 text-[11px] tracking-[0.18em] uppercase text-white/40">
          <span>© {new Date().getFullYear()} Atlas Corporate Finance</span>
          <span>All Engagements Confidential · NDA Available</span>
        </div>
      </div>
    </footer>
  );
}
