import { Helmet } from "react-helmet-async";
import { PageHero } from "@/components/PageHero";
import { Industries as IndustriesSection } from "@/components/sections/Industries";
import { Testimonials } from "@/components/sections/Testimonials";
import { CtaBanner } from "@/components/sections/CtaBanner";

export default function Industries() {
  return (
    <>
      <Helmet>
        <title>Industries We Serve | Asset Light Solutions International</title>
        <meta name="description" content="ALS partners with enterprises across Real Estate, Retail, Healthcare, BFSI, Telecom, IT, Manufacturing and more — delivering tailored business solutions at scale." />
        <meta property="og:title" content="Industries We Serve | ALS" />
        <meta property="og:description" content="Cross-sector expertise built on 15+ years of delivery." />
      </Helmet>
      <PageHero
        crumb="Industries"
        eyebrow="Sectors We Power"
        title="Domain Expertise For"
        highlight="Every Industry"
        description="Tailored, outcome-driven engagements across Real Estate, Retail, Healthcare, BFSI, Telecom, Manufacturing and IT."
      />
      <IndustriesSection />
      <Testimonials />
      <CtaBanner />
    </>
  );
}
