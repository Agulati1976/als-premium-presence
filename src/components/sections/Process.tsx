import { motion } from "framer-motion";

const steps = [
  { n: "01", title: "Understand Requirements", desc: "Deep discovery sessions to map every business objective and constraint." },
  { n: "02", title: "Planning & Strategy", desc: "Tailored roadmap, resourcing and KPIs built around your goals." },
  { n: "03", title: "Implementation", desc: "Agile delivery with weekly sprints and transparent reporting." },
  { n: "04", title: "Monitoring & Support", desc: "24/7 monitoring, optimization and dedicated account management." },
];

export function Process() {
  return (
    <section className="relative py-28">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto"
        >
          <div className="text-xs font-semibold tracking-[0.3em] text-primary uppercase">Our Process</div>
          <h2 className="mt-3 text-4xl lg:text-5xl font-extrabold">
            A proven <span className="text-gradient">4-step approach</span>
          </h2>
        </motion.div>

        <div className="mt-16 relative">
          <div className="hidden lg:block absolute top-12 left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((s, i) => (
              <motion.div
                key={s.n}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="relative"
              >
                <div className="glass rounded-2xl p-6 h-full hover:border-primary/40 transition-colors group">
                  <div className="size-12 rounded-full bg-primary text-primary-foreground font-extrabold text-lg flex items-center justify-center mb-4 group-hover:shadow-[0_0_30px_rgba(199,240,0,0.5)] transition-shadow">
                    {s.n}
                  </div>
                  <h3 className="text-lg font-bold">{s.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
