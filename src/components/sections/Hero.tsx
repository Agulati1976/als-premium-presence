import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import { Counter } from "../Counter";

const stats = [
  { value: 100, suffix: "+", label: "Projects" },
  { value: 50, suffix: "+", label: "Clients" },
  { value: 10, suffix: "+", label: "Industries" },
  { value: 24, suffix: "/7", label: "Support" },
];

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden pt-24">
      {/* BG image */}
      <div className="absolute inset-0 -z-10">
        <img src={heroBg} alt="" className="size-full object-cover opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/70 to-background" />
        <div className="absolute inset-0 grid-bg opacity-40" />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        {[...Array(18)].map((_, i) => (
          <motion.span
            key={i}
            className="absolute size-1.5 rounded-full bg-primary/60"
            style={{ left: `${(i * 53) % 100}%`, top: `${(i * 37) % 100}%` }}
            animate={{
              y: [0, -40, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 4 + (i % 5),
              repeat: Infinity,
              delay: i * 0.3,
            }}
          />
        ))}
      </div>

      {/* Glow orbs */}
      <div className="absolute top-1/4 -left-32 size-[480px] rounded-full bg-primary/15 blur-[120px] -z-10" />
      <div className="absolute bottom-0 right-0 size-[420px] rounded-full bg-primary-glow/10 blur-[120px] -z-10" />

      <div className="container mx-auto px-6 py-20 grid lg:grid-cols-12 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-7"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 mb-6 text-xs font-medium text-primary"
          >
            <Sparkles className="size-3.5" />
            India's Trusted Business Solutions Partner
          </motion.div>

          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold leading-[1.05] tracking-tight">
            Leading{" "}
            <span className="text-gradient">Real Estate, BPO & IT</span>{" "}
            Solutions Company in India
          </h1>

          <p className="mt-6 text-lg text-muted-foreground max-w-2xl leading-relaxed">
            Delivering excellence in Building Installation, Call Centre Operations, Outsourcing
            Services, Software Development and Digital Transformation.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 font-semibold text-primary-foreground hover:shadow-[0_0_40px_rgba(199,240,0,0.5)] transition-all hover:-translate-y-0.5"
            >
              Request Consultation
              <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#services"
              className="inline-flex items-center gap-2 rounded-full glass px-7 py-3.5 font-semibold hover:border-primary/40 transition-all"
            >
              Explore Services
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="lg:col-span-5 grid grid-cols-2 gap-4"
        >
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              whileHover={{ y: -6 }}
              className="glass rounded-2xl p-6 relative overflow-hidden group"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="text-4xl font-extrabold text-gradient">
                <Counter to={s.value} suffix={s.suffix} />
              </div>
              <div className="mt-2 text-sm text-muted-foreground">{s.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
