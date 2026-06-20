import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight, Check } from "lucide-react";
import { services } from "@/data/services";

export function Services() {
  return (
    <section id="services" className="relative py-20 sm:py-28 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 size-[600px] rounded-full bg-primary/8 blur-[160px] -z-10" />
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14"
        >
          <div className="max-w-xl">
            <div className="text-xs font-semibold tracking-[0.3em] text-primary uppercase">What We Offer</div>
            <h2 className="mt-3 text-4xl lg:text-6xl font-extrabold leading-[1.02] tracking-tight">
              Comprehensive <span className="text-gradient">Business Services</span>
            </h2>
          </div>
          <p className="text-muted-foreground max-w-md lg:text-right">
            A full spectrum of outsourcing, technology and infrastructure services engineered to scale with your enterprise.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
                whileHover={{ y: -10 }}
                className="group relative glass rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-500 flex flex-col"
              >
                <Link to={`/services/${s.slug}`} className="contents">
                  <div className="relative h-44 overflow-hidden">
                    <img
                      src={s.image}
                      alt={s.title}
                      loading="lazy"
                      decoding="async"
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
                    <div className="absolute top-3 right-4 text-xs font-mono text-white/70">
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    <div className="absolute bottom-3 left-4 inline-flex items-center justify-center size-12 rounded-xl bg-primary text-primary-foreground shadow-[0_0_30px_rgba(199,240,0,0.4)]">
                      <Icon className="size-5" />
                    </div>
                  </div>

                  <div className="relative p-6 flex flex-col flex-1">
                    <h3 className="text-lg font-bold tracking-tight">{s.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>

                    <ul className="mt-4 space-y-1.5">
                      {s.points.map((p) => (
                        <li key={p} className="flex items-center gap-2 text-xs text-foreground/80">
                          <Check className="size-3.5 text-primary shrink-0" />
                          {p}
                        </li>
                      ))}
                    </ul>

                    <div className="mt-5 flex items-center gap-1 text-xs font-semibold text-primary opacity-70 group-hover:opacity-100 transition-all duration-300">
                      Learn more <ArrowUpRight className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>
                  </div>
                </Link>

                <div className="absolute -bottom-px left-6 right-6 h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
