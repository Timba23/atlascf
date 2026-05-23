import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { Services } from "@/components/site/Services";
import { Industries } from "@/components/site/Industries";
import { WhyUs } from "@/components/site/WhyUs";
import { Cases } from "@/components/site/Cases";
import { Process } from "@/components/site/Process";
import { Pricing } from "@/components/site/Pricing";
import { Testimonials } from "@/components/site/Testimonials";
import { Insights } from "@/components/site/Insights";
import { FinalCTA } from "@/components/site/FinalCTA";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Atlas Corporate Finance — Boutique Financial Advisory" },
      {
        name: "description",
        content:
          "Boutique corporate finance and strategic advisory. Financial modeling, investment analysis, business valuation and CFO advisory for medium and large businesses.",
      },
      { property: "og:title", content: "Atlas Corporate Finance" },
      {
        property: "og:description",
        content:
          "Helping business owners make financial decisions based on facts, not assumptions.",
      },
    ],
  }),
});

function Index() {
  return (
    <main className="bg-background text-foreground">
      <Nav />
      <Hero />
      <Services />
      <Industries />
      <WhyUs />
      <Cases />
      <Process />
      <Pricing />
      <Testimonials />
      <Insights />
      <FinalCTA />
      <Footer />
    </main>
  );
}
