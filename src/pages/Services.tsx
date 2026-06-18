import { Helmet } from "react-helmet-async";
import { PageHero } from "@/components/PageHero";
import { Services as ServicesSection } from "@/components/sections/Services";
import { Process } from "@/components/sections/Process";
import { Marquee } from "@/components/sections/Marquee";
import { CtaBanner } from "@/components/sections/CtaBanner";

export default function Services() {
  return (
    <>
      <Helmet>
        <title>Our Services | Real Estate, BPO, IT & Digital Solutions — ALS</title>
        <meta name="description" content="Explore ALS services: Real Estate, Construction, Building Installation, BPO, Call Centre, Data Entry, Software Development, Digital Marketing and IT Services." />
        <meta property="og:title" content="ALS Services | Real Estate · BPO · IT · Digital" />
        <meta property="og:description" content="End-to-end enterprise solutions across five practice areas, engineered for outcomes." />
      </Helmet>
      <PageHero
        crumb="Services"
        eyebrow="What We Do"
        title="Enterprise-grade Solutions"
        highlight="Across 5 Verticals"
        description="From construction and building installation to call centres, software development and digital marketing — one partner, fully accountable."
      />
      <Marquee />
      <ServicesSection />
      <Process />
      <CtaBanner />
    </>
  );
}
