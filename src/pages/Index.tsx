import { Helmet } from "react-helmet-async";
import { Hero } from "@/components/sections/Hero";
import { Marquee } from "@/components/sections/Marquee";
import { About } from "@/components/sections/About";
import { Services } from "@/components/sections/Services";
import { Industries } from "@/components/sections/Industries";
import { WhyUs } from "@/components/sections/WhyUs";
import { Stats } from "@/components/sections/Stats";
import { Process } from "@/components/sections/Process";
import { Testimonials } from "@/components/sections/Testimonials";
import { CtaBanner } from "@/components/sections/CtaBanner";

export default function Index() {
  return (
    <>
      <Helmet>
        <title>Asset Light Solutions International | Real Estate, BPO & IT Services Company</title>
<meta name="description" content="Leading Real Estate, BPO & IT Solutions in India functioning globally." />
        <meta property="og:title" content="Asset Light Solutions International | Real Estate, BPO & IT Services" />
        <meta property="og:description" content="Leading Real Estate, BPO & IT Solutions in India functioning globally." />
      </Helmet>
      <Hero />
      <Marquee />
      <About />
      <Services />
      <Industries />
      <WhyUs />
      <Stats />
      <Process />
      <Testimonials />
      <CtaBanner />
    </>
  );
}
