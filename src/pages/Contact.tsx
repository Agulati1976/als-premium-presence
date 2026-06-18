import { Helmet } from "react-helmet-async";
import { PageHero } from "@/components/PageHero";
import { Contact as ContactSection } from "@/components/sections/Contact";

export default function Contact() {
  return (
    <>
      <Helmet>
        <title>Contact Us | Asset Light Solutions International</title>
        <meta name="description" content="Get in touch with Asset Light Solutions International for Real Estate, BPO, IT and Digital Marketing services across India. Call, WhatsApp or send us a message." />
        <meta property="og:title" content="Contact ALS | Let's Build Something Great" />
        <meta property="og:description" content="Reach our team for consultations, partnerships and enterprise engagements." />
      </Helmet>
      <PageHero
        crumb="Contact"
        eyebrow="Let's Talk"
        title="Get In Touch With"
        highlight="Our Experts"
        description="Tell us about your project. Our team will respond within one business day with a tailored proposal."
      />
      <ContactSection />
    </>
  );
}
