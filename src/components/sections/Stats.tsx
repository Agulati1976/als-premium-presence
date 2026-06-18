import { motion } from "framer-motion";
import { Counter } from "../Counter";

const stats = [
  { value: 100, suffix: "+", label: "Successful Projects" },
  { value: 50, suffix: "+", label: "Business Clients" },
  { value: 10, suffix: "+", label: "Industries Served" },
  { value: 24, suffix: "/7", label: "Client Support" },
];

export function Stats() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-primary-glow/10" />
        <div className="absolute inset-0 grid-bg opacity-60" />
      </div>
      <div className="container mx-auto px-6">
        <div className="glass-strong rounded-3xl p-10 lg:p-14 relative overflow-hidden">
          <div className="absolute -top-20 -right-20 size-72 rounded-full bg-primary/20 blur-3xl" />
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-center lg:text-left"
              >
                <div className="text-5xl lg:text-6xl font-extrabold text-gradient">
                  <Counter to={s.value} suffix={s.suffix} />
                </div>
                <div className="mt-2 text-sm text-muted-foreground font-medium">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
