import { motion } from "framer-motion";
import { Trophy, Users, Briefcase, Clock } from "lucide-react";
import { Counter } from "../Counter";

const stats = [
  { icon: Trophy, value: 100, suffix: "+", label: "Successful Projects" },
  { icon: Users, value: 50, suffix: "+", label: "Business Clients" },
  { icon: Briefcase, value: 10, suffix: "+", label: "Industries Served" },
  { icon: Clock, value: 24, suffix: "/7", label: "Client Support" },
];

export function Stats() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative glass-strong rounded-[2rem] p-10 lg:p-16 overflow-hidden noise"
        >
          {/* Background glow */}
          <div className="absolute -top-20 -right-20 size-72 rounded-full bg-primary/20 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 size-72 rounded-full bg-primary-glow/15 blur-3xl" />
          <div className="absolute inset-0 grid-bg opacity-30" />

          <div className="relative grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-4">
              <div className="text-xs font-semibold tracking-[0.3em] text-primary uppercase mb-3">By the Numbers</div>
              <h3 className="text-3xl lg:text-4xl font-extrabold tracking-tight leading-[1.05]">
                A track record built on <span className="text-gradient">measurable impact</span>
              </h3>
            </div>

            <div className="lg:col-span-8 grid grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="group"
                >
                  <div className="size-11 rounded-xl bg-primary/15 text-primary flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground group-hover:rotate-[-6deg] transition-all duration-500">
                    <s.icon className="size-5" />
                  </div>
                  <div className="text-4xl lg:text-5xl font-extrabold text-gradient leading-none">
                    <Counter to={s.value} suffix={s.suffix} />
                  </div>
                  <div className="mt-2 text-sm text-muted-foreground">{s.label}</div>
                  <div className="mt-3 h-px w-8 bg-primary/40 group-hover:w-16 transition-all duration-500" />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
