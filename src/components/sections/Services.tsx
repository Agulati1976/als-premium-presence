import { motion } from "framer-motion";
import {
  Building2, HardHat, Wrench, Shield, LineChart, Scale,
  Headset, Briefcase, Database, Code2, Megaphone, Server,
} from "lucide-react";

const services = [
  { icon: Building2, title: "Real Estate Services", desc: "Professional support for real estate operations, project coordination and property management." },
  { icon: HardHat, title: "Construction Services", desc: "End-to-end construction support and infrastructure solutions." },
  { icon: Wrench, title: "Building Installation", desc: "Specialized installation services for residential and commercial projects." },
  { icon: Shield, title: "Insurance Services", desc: "Business and client insurance assistance solutions." },
  { icon: LineChart, title: "Financial Services", desc: "Professional financial process support and business solutions." },
  { icon: Scale, title: "Legal Support Services", desc: "Documentation, compliance and business legal support." },
  { icon: Headset, title: "Call Centre Services", desc: "Inbound customer support and outbound lead generation, telemarketing and sales campaigns." },
  { icon: Briefcase, title: "BPO Services", desc: "Business Process Outsourcing solutions for companies worldwide." },
  { icon: Database, title: "Data Entry Services", desc: "Accurate and secure data processing services." },
  { icon: Code2, title: "Software Development", desc: "Custom software, web applications and enterprise solutions." },
  { icon: Megaphone, title: "Digital Marketing", desc: "SEO, PPC, Social Media Marketing, Branding and Lead Generation." },
  { icon: Server, title: "Information Technology", desc: "IT consulting, support services and digital transformation." },
];

export function Services() {
  return (
    <section id="services" className="relative py-28">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto"
        >
          <div className="text-xs font-semibold tracking-[0.3em] text-primary uppercase">What We Offer</div>
          <h2 className="mt-3 text-4xl lg:text-5xl font-extrabold">
            Comprehensive <span className="text-gradient">Business Services</span>
          </h2>
          <p className="mt-5 text-muted-foreground">
            A full spectrum of outsourcing, technology and infrastructure services tailored to scale with your enterprise.
          </p>
        </motion.div>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
              whileHover={{ y: -8 }}
              className="group relative glass rounded-2xl p-7 overflow-hidden hover:border-primary/40 transition-colors"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative">
                <div className="inline-flex items-center justify-center size-14 rounded-2xl bg-primary/15 text-primary mb-5 group-hover:bg-primary group-hover:text-primary-foreground transition-all group-hover:scale-110">
                  <s.icon className="size-6" />
                </div>
                <h3 className="text-lg font-bold">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
              <div className="absolute -bottom-px left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
