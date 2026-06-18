import { motion } from "framer-motion";
import { Users, Wallet, TrendingUp, Cpu, BadgeCheck, Heart } from "lucide-react";

const features = [
  { icon: Users, title: "Experienced Team", desc: "Professional, certified and continuously trained workforce.", num: "01" },
  { icon: Wallet, title: "Cost Effective", desc: "Transparent pricing and flexible engagement models.", num: "02" },
  { icon: TrendingUp, title: "Scalable Services", desc: "From 5-seat pilots to 500-seat operations — we scale with you.", num: "03" },
  { icon: Cpu, title: "Technology Driven", desc: "Modern tooling, automation and AI-augmented workflows.", num: "04" },
  { icon: BadgeCheck, title: "Quality Assurance", desc: "ISO-aligned QA, audits and SLA-backed delivery.", num: "05" },
  { icon: Heart, title: "Customer Focused", desc: "Dedicated account leadership and long-term partnerships.", num: "06" },
];

export function WhyUs() {
  return (
    <section id="why" className="relative py-32 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-[600px] rounded-full bg-primary/8 blur-[160px] -z-10" />

      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.3em] text-primary uppercase">
            <div className="h-px w-8 bg-primary" /> Why Choose Us <div className="h-px w-8 bg-primary" />
          </div>
          <h2 className="mt-4 text-4xl lg:text-6xl font-extrabold tracking-tight leading-[1.02]">
            Built for <span className="text-gradient">Enterprise Trust</span>
          </h2>
          <p className="mt-5 text-muted-foreground">Six principles that define every engagement.</p>
        </motion.div>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5 rounded-3xl overflow-hidden glass">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
              className="group relative bg-background/60 p-8 lg:p-10 hover:bg-background/30 transition-all duration-500 overflow-hidden"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                   style={{ background: "radial-gradient(400px circle at var(--mx,50%) var(--my,0%), rgba(199,240,0,0.12), transparent 60%)" }} />
              <div className="absolute top-6 right-6 text-xs font-mono text-muted-foreground/40 group-hover:text-primary transition-colors">
                {f.num}
              </div>
              <div className="relative">
                <div className="inline-flex items-center justify-center size-14 rounded-2xl bg-primary text-primary-foreground mb-6 transition-all duration-500 group-hover:scale-110 group-hover:rotate-[-6deg] group-hover:shadow-[0_0_30px_rgba(199,240,0,0.5)]">
                  <f.icon className="size-6" />
                </div>
                <h3 className="text-xl font-bold tracking-tight">{f.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
                <div className="mt-6 h-px w-10 bg-primary/40 group-hover:w-20 transition-all duration-500" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
