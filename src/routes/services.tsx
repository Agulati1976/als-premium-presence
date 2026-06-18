import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { Services } from "@/components/sections/Services";
import { Process } from "@/components/sections/Process";
import { Marquee } from "@/components/sections/Marquee";
import { CtaBanner } from "@/components/sections/CtaBanner";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Our Services | Real Estate, BPO, IT & Digital Solutions — ALS" },
      { name: "description", content: "Explore ALS services: Real Estate, Construction, Building Installation, BPO, Call Centre, Data Entry, Software Development, Digital Marketing and IT Services." },
      { property: "og:title", content: "ALS Services | Real Estate · BPO · IT · Digital" },
      { property: "og:description", content: "End-to-end enterprise solutions across five practice areas, engineered for outcomes." },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <PageHero
        crumb="Services"
        eyebrow="What We Do"
        title="Enterprise-grade Solutions"
        highlight="Across 5 Verticals"
        description="From construction and building installation to call centres, software development and digital marketing — one partner, fully accountable."
      />
      <Marquee />
      <Services />
      <Process />
      <CtaBanner />
    </>
  );
}
