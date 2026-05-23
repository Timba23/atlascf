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
      { title: "Atlas Corporate Finance — Бутиковый финансовый консалтинг" },
      {
        name: "description",
        content:
          "Бутиковый корпоративно-финансовый и стратегический консалтинг. Финансовое моделирование, инвестиционный анализ, оценка бизнеса и CFO-сопровождение для среднего и крупного бизнеса.",
      },
      { property: "og:title", content: "Atlas Corporate Finance" },
      {
        property: "og:description",
        content:
          "Помогаем собственникам принимать финансовые решения на основе фактов, а не предположений.",
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
