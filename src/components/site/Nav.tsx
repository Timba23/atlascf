export function Nav() {
  const links = [
    { href: "#services", label: "Services" },
    { href: "#industries", label: "Industries" },
    { href: "#cases", label: "Case Studies" },
    { href: "#process", label: "Process" },
    { href: "#insights", label: "Insights" },
    { href: "#contact", label: "Contact" },
  ];
  return (
    <header className="absolute top-0 left-0 right-0 z-30">
      <div className="container-x flex items-center justify-between py-6">
        <a href="#" className="flex items-center gap-3">
          <span className="inline-block w-7 h-7 border border-gold rotate-45" aria-hidden />
          <span className="font-serif text-xl text-white tracking-tight">
            Atlas <span className="text-gold">Corporate Finance</span>
          </span>
        </a>
        <nav className="hidden lg:flex items-center gap-9">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[13px] tracking-wide text-white/75 hover:text-gold transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="hidden lg:inline-flex items-center text-[12px] tracking-[0.18em] uppercase border border-gold/60 text-gold px-5 py-2.5 hover:bg-gold hover:text-navy transition-colors"
        >
          Book a Consultation
        </a>
      </div>
    </header>
  );
}
