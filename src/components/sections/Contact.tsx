import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MessageCircle, MapPin, Send } from "lucide-react";

export function Contact() {
  const [sent, setSent] = useState(false);
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="contact" className="relative py-28 overflow-hidden">
      <div className="absolute -top-20 left-1/2 -translate-x-1/2 size-[600px] rounded-full bg-primary/10 blur-[140px] -z-10" />
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto"
        >
          <div className="text-xs font-semibold tracking-[0.3em] text-primary uppercase">Contact</div>
          <h2 className="mt-3 text-4xl lg:text-5xl font-extrabold">
            Let's <span className="text-gradient">Build Your Business</span> Together
          </h2>
          <p className="mt-5 text-muted-foreground">Tell us about your project. Our team responds within 24 hours.</p>
        </motion.div>

        <div className="mt-14 grid lg:grid-cols-5 gap-8">
          <motion.form
            onSubmit={onSubmit}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3 glass-strong rounded-3xl p-8 lg:p-10 space-y-5"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <Field label="Full Name" name="name" type="text" required />
              <Field label="Company Name" name="company" type="text" />
              <Field label="Phone Number" name="phone" type="tel" required />
              <Field label="Email" name="email" type="email" required />
            </div>
            <div>
              <label className="text-xs font-semibold text-muted-foreground mb-2 block">Service Required</label>
              <select className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-primary transition-colors">
                <option className="bg-background">Real Estate Services</option>
                <option className="bg-background">BPO / Call Centre</option>
                <option className="bg-background">Software Development</option>
                <option className="bg-background">Digital Marketing</option>
                <option className="bg-background">IT Services</option>
                <option className="bg-background">Other</option>
              </select>
            </div>
            <div>
              <label className="text-xs font-semibold text-muted-foreground mb-2 block">Message</label>
              <textarea rows={4} required className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-primary transition-colors resize-none" />
            </div>
            <button
              type="submit"
              className="group w-full inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-4 font-bold text-primary-foreground hover:shadow-[0_0_40px_rgba(199,240,0,0.5)] transition-all hover:-translate-y-0.5"
            >
              {sent ? "Thank You — We'll Be In Touch" : "Request Consultation"}
              {!sent && <Send className="size-4 group-hover:translate-x-1 transition-transform" />}
            </button>
          </motion.form>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-2 space-y-4"
          >
            {[
              { icon: Phone, label: "Call us", value: "+91 98765 43210", href: "tel:+919876543210" },
              { icon: MessageCircle, label: "WhatsApp", value: "Chat with our team", href: "https://wa.me/919876543210" },
              { icon: Mail, label: "Email us", value: "contact@assetlightsolutions.com", href: "mailto:contact@assetlightsolutions.com" },
              { icon: MapPin, label: "Office", value: "New Delhi, India", href: "#" },
            ].map((c) => (
              <a
                key={c.label}
                href={c.href}
                className="group flex items-start gap-4 glass rounded-2xl p-5 hover:border-primary/40 transition-colors"
              >
                <div className="size-12 rounded-xl bg-primary/15 text-primary flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <c.icon className="size-5" />
                </div>
                <div className="min-w-0">
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">{c.label}</div>
                  <div className="mt-1 font-semibold truncate">{c.value}</div>
                </div>
              </a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Field({ label, name, type, required }: { label: string; name: string; type: string; required?: boolean }) {
  return (
    <div>
      <label className="text-xs font-semibold text-muted-foreground mb-2 block">{label}</label>
      <input
        type={type}
        name={name}
        required={required}
        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-primary transition-colors"
      />
    </div>
  );
}
