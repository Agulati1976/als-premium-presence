import { motion } from "framer-motion";
import { Users, Wallet, TrendingUp, Cpu, BadgeCheck, Heart } from "lucide-react";

const features = [
  { icon: Users, title: "Experienced Team", desc: "Professional and skilled workforce." },
  { icon: Wallet, title: "Cost Effective", desc: "Affordable business solutions." },
  { icon: TrendingUp, title: "Scalable Services", desc: "Grow as your business grows." },
  { icon: Cpu, title: "Technology Driven", desc: "Modern tools and automation." },
  { icon: BadgeCheck, title: "Quality Assurance", desc: "Reliable and consistent service." },
  { icon: Heart, title: "Customer Focused", desc: "Long-term client relationships." },
];

export function WhyUs() {
  return (
    <section id="why" className="relative py-28">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto"
        >
          <div className="text-xs font-semibold tracking-[0.3em] text-primary uppercase">Why Choose Us</div>
          <h2 className="mt-3 text-4xl lg:text-5xl font-extrabold">
            Built for <span className="text-gradient">Enterprise Trust</span>
          </h2>
        </motion.div>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
              whileHover={{ y: -6 }}
              className="group glass rounded-2xl p-7 hover:border-primary/40 transition-colors"
            >
              <div className="inline-flex items-center justify-center size-12 rounded-xl bg-primary text-primary-foreground mb-5 group-hover:scale-110 group-hover:shadow-[0_0_30px_rgba(199,240,0,0.5)] transition-all">
                <f.icon className="size-6" />
              </div>
              <h3 className="text-lg font-bold">{f.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
