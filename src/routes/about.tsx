import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { About } from "@/components/sections/About";
import { Stats } from "@/components/sections/Stats";
import { WhyUs } from "@/components/sections/WhyUs";
import { CtaBanner } from "@/components/sections/CtaBanner";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us | Asset Light Solutions International" },
      { name: "description", content: "Learn about Asset Light Solutions International — a diversified Indian enterprise delivering Real Estate, BPO, IT and Digital Transformation services with 15+ years of trust." },
      { property: "og:title", content: "About ALS | Diversified Business Solutions in India" },
      { property: "og:description", content: "15+ years of pan-India excellence across Real Estate, BPO, IT and Digital Marketing." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <PageHero
        crumb="About"
        eyebrow="Who We Are"
        title="Building India's Most Trusted"
        highlight="Asset Light Enterprise"
        description="A diversified business solutions partner delivering Real Estate, BPO, Call Centre, Software Development and Digital Marketing services to enterprises across India for over 15 years."
      />
      <About />
      <Stats />
      <WhyUs />
      <CtaBanner />
    </>
  );
}
