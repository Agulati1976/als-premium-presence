import { motion } from "framer-motion";
import {
  Building2, HardHat, Wrench, Shield, LineChart, Scale,
  Headset, Briefcase, Database, Code2, Megaphone, Server,
  ArrowUpRight, Check,
} from "lucide-react";

const services = [
  {
    icon: Building2,
    title: "Real Estate Services",
    desc: "Project coordination, property management and operations support for residential & commercial portfolios.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=70&auto=format&fit=crop",
    points: ["Property advisory", "Leasing & sales", "Portfolio operations"],
  },
  {
    icon: HardHat,
    title: "Construction Services",
    desc: "End-to-end construction and infrastructure execution from design coordination to handover.",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=70&auto=format&fit=crop",
    points: ["Site execution", "Civil & structural", "Turnkey delivery"],
  },
  {
    icon: Wrench,
    title: "Building Installation",
    desc: "Specialized MEP and finishing installation for residential, commercial and industrial spaces.",
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&q=70&auto=format&fit=crop",
    points: ["Electrical & HVAC", "Plumbing & fittings", "Smart-building tech"],
  },
  {
    icon: Shield,
    title: "Insurance Services",
    desc: "Tailored business and client insurance assistance with claim and policy support.",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=70&auto=format&fit=crop",
    points: ["Risk assessment", "Policy advisory", "Claims handling"],
  },
  {
    icon: LineChart,
    title: "Financial Services",
    desc: "Financial process outsourcing, reporting and business advisory for growing enterprises.",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=70&auto=format&fit=crop",
    points: ["Bookkeeping & AR/AP", "MIS & reporting", "Advisory"],
  },
  {
    icon: Scale,
    title: "Legal Support",
    desc: "Documentation, compliance and ongoing legal back-office support for businesses.",
    image: "https://images.unsplash.com/photo-1589994965851-a8f479c573a9?w=800&q=70&auto=format&fit=crop",
    points: ["Contract drafting", "Compliance", "Legal research"],
  },
  {
    icon: Headset,
    title: "Call Centre",
    desc: "24/7 inbound support, outbound telemarketing and sales across voice and chat.",
    image: "https://images.unsplash.com/photo-1553775282-20af80779df7?w=800&q=70&auto=format&fit=crop",
    points: ["Customer support", "Telesales", "Omnichannel"],
  },
  {
    icon: Briefcase,
    title: "BPO Services",
    desc: "Business Process Outsourcing for global companies — back office, front office and KPO.",
    image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&q=70&auto=format&fit=crop",
    points: ["Back-office ops", "Process automation", "Quality assurance"],
  },
  {
    icon: Database,
    title: "Data Entry",
    desc: "Accurate, secure and high-volume data processing with strict SLA-driven quality.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=70&auto=format&fit=crop",
    points: ["High-volume entry", "Data cleansing", "Document digitization"],
  },
  {
    icon: Code2,
    title: "Software Development",
    desc: "Custom software, web apps and enterprise systems built with modern, scalable stacks.",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&q=70&auto=format&fit=crop",
    points: ["Web & mobile apps", "SaaS platforms", "API integrations"],
  },
  {
    icon: Megaphone,
    title: "Digital Marketing",
    desc: "SEO, PPC, social media, branding and lead generation engineered for measurable ROI.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=70&auto=format&fit=crop",
    points: ["SEO & content", "Paid ads", "Lead generation"],
  },
  {
    icon: Server,
    title: "Information Technology",
    desc: "IT consulting, infrastructure management and digital transformation services.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=70&auto=format&fit=crop",
    points: ["Cloud & DevOps", "IT support", "Cybersecurity"],
  },
];

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
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
              whileHover={{ y: -10 }}
              className="group relative glass rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-500 flex flex-col"
            >
              {/* image */}
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
                  <s.icon className="size-5" />
                </div>
              </div>

              {/* content */}
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

              <div className="absolute -bottom-px left-6 right-6 h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
