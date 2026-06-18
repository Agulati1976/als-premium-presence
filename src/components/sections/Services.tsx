import { motion } from "framer-motion";
import {
  Building2, HardHat, Wrench, Shield, LineChart, Scale,
  Headset, Briefcase, Database, Code2, Megaphone, Server,
  ArrowUpRight,
} from "lucide-react";

const services = [
  { icon: Building2, title: "Real Estate Services", desc: "Project coordination, property management and operations support." },
  { icon: HardHat, title: "Construction Services", desc: "End-to-end construction and infrastructure solutions." },
  { icon: Wrench, title: "Building Installation", desc: "Specialized installation for residential and commercial." },
  { icon: Shield, title: "Insurance Services", desc: "Business and client insurance assistance." },
  { icon: LineChart, title: "Financial Services", desc: "Financial process support and business advisory." },
  { icon: Scale, title: "Legal Support", desc: "Documentation, compliance and legal support." },
  { icon: Headset, title: "Call Centre", desc: "Inbound support, outbound telemarketing and sales." },
  { icon: Briefcase, title: "BPO Services", desc: "Business Process Outsourcing for global companies." },
  { icon: Database, title: "Data Entry", desc: "Accurate and secure data processing services." },
  { icon: Code2, title: "Software Development", desc: "Custom software, web apps and enterprise systems." },
  { icon: Megaphone, title: "Digital Marketing", desc: "SEO, PPC, Social Media, Branding and Lead Gen." },
  { icon: Server, title: "Information Technology", desc: "IT consulting and digital transformation." },
];

export function Services() {
  return (
    <section id="services" className="relative py-28 overflow-hidden">
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
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
              whileHover={{ y: -10 }}
              className="group relative glass rounded-2xl p-7 overflow-hidden hover:border-primary/50 transition-all duration-500"
            >
              {/* corner number */}
              <div className="absolute top-4 right-5 text-xs font-mono text-muted-foreground/40 group-hover:text-primary transition-colors">
                {String(i + 1).padStart(2, "0")}
              </div>

              {/* glow on hover */}
              <div className="absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                   style={{ background: "radial-gradient(400px circle at 50% 0%, rgba(199,240,0,0.15), transparent 60%)" }} />

              {/* icon */}
              <div className="relative inline-flex items-center justify-center size-14 rounded-2xl bg-primary/10 text-primary mb-6 transition-all duration-500 group-hover:bg-primary group-hover:text-primary-foreground group-hover:rotate-[-6deg] group-hover:scale-110 group-hover:shadow-[0_0_30px_rgba(199,240,0,0.5)]">
                <s.icon className="size-6" />
              </div>

              <h3 className="text-lg font-bold tracking-tight">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>

              <div className="mt-5 flex items-center gap-1 text-xs font-semibold text-primary opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300">
                Learn more <ArrowUpRight className="size-3.5" />
              </div>

              {/* bottom shine */}
              <div className="absolute -bottom-px left-6 right-6 h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
