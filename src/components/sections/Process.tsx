import { motion } from "framer-motion";
import { Search, PenTool, Rocket, LineChart } from "lucide-react";

const steps = [
  { n: "01", icon: Search, title: "Discover", subtitle: "Understand Requirements", desc: "Deep discovery to map every business objective, constraint and success metric." },
  { n: "02", icon: PenTool, title: "Design", subtitle: "Planning & Strategy", desc: "Tailored roadmap, resourcing plan and KPIs aligned to your goals." },
  { n: "03", icon: Rocket, title: "Deliver", subtitle: "Implementation", desc: "Agile delivery with weekly sprints and transparent reporting." },
  { n: "04", icon: LineChart, title: "Scale", subtitle: "Monitoring & Support", desc: "24/7 monitoring, optimization and dedicated account management." },
];

export function Process() {
  return (
    <section className="relative py-32 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 size-[600px] rounded-full bg-primary/8 blur-[160px] -z-10" />

      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.3em] text-primary uppercase">
            <div className="h-px w-8 bg-primary" /> Our Process <div className="h-px w-8 bg-primary" />
          </div>
          <h2 className="mt-4 text-4xl lg:text-6xl font-extrabold tracking-tight leading-[1.02]">
            A proven <span className="text-gradient">4-step approach</span>
          </h2>
        </motion.div>

        <div className="mt-20 relative">
          {/* Connecting line */}
          <div className="hidden lg:block absolute top-[60px] left-[8%] right-[8%] h-px">
            <div className="relative h-full bg-white/10">
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.6, ease: "easeInOut" }}
                style={{ transformOrigin: "0%" }}
                className="absolute inset-0 bg-gradient-to-r from-primary via-primary-glow to-primary"
              />
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {steps.map((s, i) => (
              <motion.div
                key={s.n}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="relative group"
              >
                {/* Step indicator on line */}
                <div className="hidden lg:flex absolute top-[52px] left-1/2 -translate-x-1/2 size-5 rounded-full bg-background border-2 border-primary items-center justify-center z-10">
                  <div className="size-2 rounded-full bg-primary group-hover:scale-150 transition-transform" />
                </div>

                <div className="text-center">
                  {/* Icon orb */}
                  <div className="relative inline-flex items-center justify-center mb-8">
                    <div className="absolute inset-0 rounded-full bg-primary/15 blur-xl group-hover:bg-primary/30 transition-colors" />
                    <div className="relative size-[120px] rounded-full glass flex items-center justify-center group-hover:border-primary transition-colors">
                      <s.icon className="size-9 text-primary group-hover:scale-110 transition-transform" />
                    </div>
                    <div className="absolute -bottom-2 -right-2 size-9 rounded-full bg-primary text-primary-foreground font-extrabold text-xs flex items-center justify-center shadow-[0_0_20px_rgba(199,240,0,0.5)]">
                      {s.n}
                    </div>
                  </div>

                  <div className="text-xs font-semibold tracking-[0.2em] text-primary uppercase mb-2">{s.title}</div>
                  <h3 className="text-xl font-bold tracking-tight">{s.subtitle}</h3>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed max-w-xs mx-auto">{s.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
