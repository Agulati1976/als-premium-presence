import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { Contact } from "@/components/sections/Contact";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us | Asset Light Solutions International" },
      { name: "description", content: "Get in touch with Asset Light Solutions International for Real Estate, BPO, IT and Digital Marketing services across India. Call, WhatsApp or send us a message." },
      { property: "og:title", content: "Contact ALS | Let's Build Something Great" },
      { property: "og:description", content: "Reach our team for consultations, partnerships and enterprise engagements." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <PageHero
        crumb="Contact"
        eyebrow="Let's Talk"
        title="Get In Touch With"
        highlight="Our Experts"
        description="Tell us about your project. Our team will respond within one business day with a tailored proposal."
      />
      <Contact />
    </>
  );
}
