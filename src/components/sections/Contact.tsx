import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MessageCircle, MapPin, Send, CheckCircle2 } from "lucide-react";

export function Contact() {
  const [sent, setSent] = useState(false);
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="contact" className="relative py-32 overflow-hidden">
      <div className="absolute -top-20 left-1/2 -translate-x-1/2 size-[600px] rounded-full bg-primary/10 blur-[160px] -z-10" />
      <div className="absolute bottom-0 right-0 size-[400px] rounded-full bg-primary-glow/10 blur-[140px] -z-10" />

      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.3em] text-primary uppercase">
            <div className="h-px w-8 bg-primary" /> Contact <div className="h-px w-8 bg-primary" />
          </div>
          <h2 className="mt-4 text-4xl lg:text-6xl font-extrabold tracking-tight leading-[1.02]">
            Let's <span className="text-gradient">Build Your Business</span> Together
          </h2>
          <p className="mt-5 text-muted-foreground">Tell us about your project. Our team responds within 24 hours.</p>
        </motion.div>

        <div className="mt-16 grid lg:grid-cols-5 gap-8">
          {/* Form */}
          <motion.form
            onSubmit={onSubmit}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3 relative glass-strong rounded-3xl p-8 lg:p-10 space-y-5 overflow-hidden noise"
          >
            <div className="absolute -top-20 -right-20 size-60 rounded-full bg-primary/15 blur-3xl pointer-events-none" />
            <div className="relative grid sm:grid-cols-2 gap-5">
              <Field label="Full Name" name="name" type="text" required />
              <Field label="Company Name" name="company" type="text" />
              <Field label="Phone Number" name="phone" type="tel" required />
              <Field label="Email Address" name="email" type="email" required />
            </div>
            <div className="relative">
              <label className="text-xs font-semibold text-muted-foreground mb-2 block uppercase tracking-wider">Service Required</label>
              <select className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-foreground focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all">
                <option className="bg-background">Real Estate Services</option>
                <option className="bg-background">BPO / Call Centre</option>
                <option className="bg-background">Software Development</option>
                <option className="bg-background">Digital Marketing</option>
                <option className="bg-background">IT Services</option>
                <option className="bg-background">Other</option>
              </select>
            </div>
            <div className="relative">
              <label className="text-xs font-semibold text-muted-foreground mb-2 block uppercase tracking-wider">How can we help?</label>
              <textarea
                rows={4}
                required
                placeholder="Tell us about your project..."
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all resize-none"
              />
            </div>
            <button
              type="submit"
              className="group relative w-full inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-4 font-bold text-primary-foreground hover:shadow-[0_20px_60px_-10px_rgba(199,240,0,0.6)] transition-all hover:-translate-y-0.5 overflow-hidden"
            >
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent group-hover:translate-x-full transition-transform duration-700" />
              {sent ? (
                <><CheckCircle2 className="size-5 relative" /><span className="relative">Thank you — we'll be in touch</span></>
              ) : (
                <><span className="relative">Request Consultation</span><Send className="size-4 relative group-hover:translate-x-1 transition-transform" /></>
              )}
            </button>
          </motion.form>

          {/* Contact cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-2 space-y-4"
          >
            {[
              { icon: Phone, label: "Call us", value: "+91 98765 43210", href: "tel:+919876543210", accent: "Mon–Sat, 9AM–7PM" },
              { icon: MessageCircle, label: "WhatsApp", value: "Chat with our team", href: "https://wa.me/919876543210", accent: "Replies in minutes" },
              { icon: Mail, label: "Email us", value: "contact@assetlightsolutions.com", href: "mailto:contact@assetlightsolutions.com", accent: "24-hour response" },
              { icon: MapPin, label: "Visit office", value: "New Delhi, India", href: "#", accent: "Pan-India presence" },
            ].map((c) => (
              <motion.a
                key={c.label}
                href={c.href}
                whileHover={{ y: -4 }}
                className="group relative flex items-start gap-4 glass rounded-2xl p-5 hover:border-primary/50 transition-all duration-500 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative size-12 rounded-xl bg-primary/15 text-primary flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-primary-foreground group-hover:rotate-[-6deg] transition-all duration-500">
                  <c.icon className="size-5" />
                </div>
                <div className="relative min-w-0 flex-1">
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">{c.label}</div>
                  <div className="mt-1 font-semibold truncate group-hover:text-primary transition-colors">{c.value}</div>
                  <div className="text-xs text-muted-foreground mt-1">{c.accent}</div>
                </div>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Field({ label, name, type, required }: { label: string; name: string; type: string; required?: boolean }) {
  return (
    <div className="relative">
      <label className="text-xs font-semibold text-muted-foreground mb-2 block uppercase tracking-wider">{label}</label>
      <input
        type={type}
        name={name}
        required={required}
        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-foreground focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
      />
    </div>
  );
}
