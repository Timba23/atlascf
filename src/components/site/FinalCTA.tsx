export function FinalCTA() {
  return (
    <section id="contact" className="py-28 lg:py-36 bg-surface border-t border-border">
      <div className="container-x grid lg:grid-cols-12 gap-12 items-end">
        <div className="lg:col-span-8">
          <div className="flex items-center gap-3 mb-6">
            <span className="gold-rule" />
            <span className="eyebrow">Begin an Engagement</span>
          </div>
          <h2 className="font-serif text-4xl md:text-6xl leading-[1.05] text-navy max-w-3xl">
            Build financial confidence before making your next
            <span className="text-gold italic font-light"> big decision.</span>
          </h2>
          <p className="mt-6 max-w-xl text-muted-foreground">
            Talk to Atlas Corporate Finance about your financial model, investment project or growth strategy.
            All conversations are confidential.
          </p>
        </div>
        <div className="lg:col-span-4 flex flex-col gap-4">
          <a
            href="mailto:hello@atlas-cf.com"
            className="inline-flex items-center justify-center text-[12px] tracking-[0.2em] uppercase bg-navy text-white px-7 py-5 hover:bg-gold hover:text-navy transition-colors"
          >
            Book a Consultation
          </a>
          <a
            href="mailto:hello@atlas-cf.com"
            className="inline-flex items-center justify-center text-[12px] tracking-[0.2em] uppercase border border-navy text-navy px-7 py-5 hover:bg-navy hover:text-white transition-colors"
          >
            Request Proposal
          </a>
        </div>
      </div>
    </section>
  );
}
