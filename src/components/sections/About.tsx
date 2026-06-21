import { motion } from "framer-motion";
import { Target, Eye, CheckCircle2, TrendingUp } from "lucide-react";
import aboutImg from "@/assets/about.webp";

const highlights = [
  "Pan-India operations",
  "ISO 9001:2015 certified",
  "Dedicated account managers",
  "Enterprise-grade SLAs",
];

export function About() {
  return (
    <section id="about" className="relative py-32 overflow-hidden">
      <div className="absolute top-1/2 -right-40 size-[560px] rounded-full bg-primary/10 blur-[160px] -z-10" />
      <div className="absolute top-20 -left-40 size-[400px] rounded-full bg-primary-glow/10 blur-[140px] -z-10" />

      <div className="container mx-auto px-6 grid lg:grid-cols-12 gap-16 items-center">
        {/* Image side */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-6 relative"
        >
          {/* corner brackets */}
          <div className="absolute -top-4 -left-4 size-12 border-l-2 border-t-2 border-primary rounded-tl-2xl" />
          <div className="absolute -bottom-4 -right-4 size-12 border-r-2 border-b-2 border-primary rounded-br-2xl" />

          <div className="relative rounded-3xl overflow-hidden glass p-2 group">
            <div className="relative rounded-2xl overflow-hidden">
              <img
                src={aboutImg}
                alt="ALS leadership team"
                loading="lazy"
                className="w-full h-auto transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
              {/* scan line */}
              <motion.div
                initial={{ y: "-100%" }}
                animate={{ y: "100%" }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                className="absolute inset-x-0 h-32 bg-gradient-to-b from-transparent via-primary/15 to-transparent pointer-events-none"
              />
            </div>
          </div>

          {/* Floating badge top */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 5, repeat: Infinity, delay: 1 }}
            className="absolute -top-6 -right-6 glass-strong rounded-2xl px-5 py-4 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.8)]"
          >
            <div className="flex items-center gap-3">
              <div className="size-10 rounded-xl bg-primary flex items-center justify-center">
                <CheckCircle2 className="size-5 text-primary-foreground" />
              </div>
              <div>
                <div className="text-xs text-muted-foreground">Quality</div>
                <div className="font-bold text-sm">ISO Certified</div>
              </div>
            </div>
          </motion.div>

          {/* Floating badge bottom */}
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 5, repeat: Infinity }}
            className="absolute -bottom-8 -left-6 glass-strong rounded-2xl px-5 py-4 flex items-center gap-3"
          >
            <div className="size-10 rounded-xl bg-primary/15 flex items-center justify-center text-primary">
              <TrendingUp className="size-5" />
            </div>
            <div>
              <div className="text-2xl font-extrabold text-gradient leading-none">15+</div>
              <div className="text-xs text-muted-foreground mt-1">Years Excellence</div>
            </div>
          </motion.div>

          {/* Rotating accent ring */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="absolute -bottom-12 right-10 size-28 rounded-full border border-primary/20 hidden lg:block pointer-events-none"
          >
            <div className="absolute -top-1 left-1/2 -translate-x-1/2 size-2 rounded-full bg-primary shadow-[0_0_15px_#C7F000]" />
          </motion.div>
        </motion.div>

        {/* Text side */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-6"
        >
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.3em] text-primary uppercase">
            <div className="h-px w-8 bg-primary" /> About Us
          </div>
          <h2 className="mt-4 text-4xl lg:text-6xl font-extrabold leading-[1.02] tracking-tight">
            Diversified solutions for <span className="text-gradient">modern enterprises</span>
          </h2>
          <p className="mt-6 text-muted-foreground leading-relaxed">
            Asset Light Solutions International is a diversified business solutions company delivering
            innovative services across Real Estate, Construction, Building Installation, BPO, Call
            Centre Operations, IT, Software Development and Digital Marketing — Since 2022.
          </p>

          {/* Highlights */}
          <div className="mt-6 grid grid-cols-2 gap-3">
            {highlights.map((h) => (
              <div key={h} className="flex items-center gap-2 text-sm">
                <div className="size-1.5 rounded-full bg-primary shrink-0" />
                <span className="text-foreground/80">{h}</span>
              </div>
            ))}
          </div>

          <div className="mt-10 grid sm:grid-cols-2 gap-4">
            {[
              { icon: Target, title: "Our Mission", text: "Reliable, efficient and innovative business solutions that help organizations grow sustainably." },
              { icon: Eye, title: "Our Vision", text: "Become India's most trusted partner in outsourcing, technology and business support services." },
            ].map((item) => (
              <div key={item.title} className="relative glass rounded-2xl p-6 hover:border-primary/40 transition-all duration-500 group hover:-translate-y-1">
                <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="inline-flex items-center justify-center size-11 rounded-xl bg-primary/15 text-primary mb-4 group-hover:bg-primary group-hover:text-primary-foreground group-hover:rotate-[-6deg] transition-all duration-500">
                  <item.icon className="size-5" />
                </div>
                <div className="font-bold mb-1">{item.title}</div>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
