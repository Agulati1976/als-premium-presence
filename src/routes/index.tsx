import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Services } from "@/components/sections/Services";
import { Industries } from "@/components/sections/Industries";
import { WhyUs } from "@/components/sections/WhyUs";
import { Stats } from "@/components/sections/Stats";
import { Process } from "@/components/sections/Process";
import { Testimonials } from "@/components/sections/Testimonials";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Asset Light Solutions International | Real Estate, BPO & IT Services Company" },
      { name: "description", content: "Asset Light Solutions International provides Real Estate, Construction, Building Installation, BPO, Call Centre, Data Entry, Software Development, Digital Marketing and IT Services across India." },
      { property: "og:title", content: "Asset Light Solutions International | Real Estate, BPO & IT Services" },
      { property: "og:description", content: "Diversified business solutions across Real Estate, BPO, Call Centre, Software Development and Digital Marketing." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Industries />
        <WhyUs />
        <Stats />
        <Process />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
