import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { Industries } from "@/components/sections/Industries";
import { Testimonials } from "@/components/sections/Testimonials";
import { CtaBanner } from "@/components/sections/CtaBanner";

export const Route = createFileRoute("/industries")({
  head: () => ({
    meta: [
      { title: "Industries We Serve | Asset Light Solutions International" },
      { name: "description", content: "ALS partners with enterprises across Real Estate, Retail, Healthcare, BFSI, Telecom, IT, Manufacturing and more — delivering tailored business solutions at scale." },
      { property: "og:title", content: "Industries We Serve | ALS" },
      { property: "og:description", content: "Cross-sector expertise built on 15+ years of delivery." },
    ],
  }),
  component: IndustriesPage,
});

function IndustriesPage() {
  return (
    <>
      <PageHero
        crumb="Industries"
        eyebrow="Sectors We Power"
        title="Domain Expertise For"
        highlight="Every Industry"
        description="Tailored, outcome-driven engagements across Real Estate, Retail, Healthcare, BFSI, Telecom, Manufacturing and IT."
      />
      <Industries />
      <Testimonials />
      <CtaBanner />
    </>
  );
}
