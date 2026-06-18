import { Helmet } from "react-helmet-async";
import { PageHero } from "@/components/PageHero";
import { WhyUs as WhyUsSection } from "@/components/sections/WhyUs";
import { Stats } from "@/components/sections/Stats";
import { Process } from "@/components/sections/Process";
import { Testimonials } from "@/components/sections/Testimonials";
import { CtaBanner } from "@/components/sections/CtaBanner";

export default function WhyUs() {
  return (
    <>
      <Helmet>
        <title>Why Choose ALS | Trusted Business Solutions Partner in India</title>
        <meta name="description" content="ISO-certified, 15+ years of pan-India delivery, 100+ projects and 50+ enterprise clients. Discover what makes Asset Light Solutions International different." />
        <meta property="og:title" content="Why Choose ALS | India's Trusted Business Partner" />
        <meta property="og:description" content="Quality, transparency and outcomes — the ALS difference." />
      </Helmet>
      <PageHero
        crumb="Why Us"
        eyebrow="The ALS Difference"
        title="Built On Trust,"
        highlight="Delivered With Precision"
        description="An ISO-certified team, transparent processes and a relentless focus on outcomes — that's how we've earned the trust of 50+ enterprise clients across India."
      />
      <WhyUsSection />
      <Stats />
      <Process />
      <Testimonials />
      <CtaBanner />
    </>
  );
}
