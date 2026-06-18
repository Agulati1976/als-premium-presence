import { motion } from "framer-motion";
import { Target, Eye, CheckCircle2 } from "lucide-react";
import aboutImg from "@/assets/about.jpg";

export function About() {
  return (
    <section id="about" className="relative py-28 overflow-hidden">
      <div className="absolute top-1/2 -right-40 size-[500px] rounded-full bg-primary/10 blur-[140px] -z-10" />
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <div className="relative rounded-3xl overflow-hidden glass p-2">
            <img src={aboutImg} alt="Our team" loading="lazy" className="rounded-2xl w-full h-auto" />
          </div>
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 5, repeat: Infinity }}
            className="absolute -bottom-6 -left-6 glass-strong rounded-2xl p-5 shadow-elevated"
          >
            <div className="text-3xl font-extrabold text-gradient">15+</div>
            <div className="text-xs text-muted-foreground mt-1">Years of Excellence</div>
          </motion.div>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 5, repeat: Infinity, delay: 1 }}
            className="absolute -top-6 -right-6 glass-strong rounded-2xl p-5"
          >
            <div className="flex items-center gap-2 text-primary">
              <CheckCircle2 className="size-5" />
              <span className="text-sm font-semibold">ISO Certified</span>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <div className="text-xs font-semibold tracking-[0.3em] text-primary uppercase">About Us</div>
          <h2 className="mt-3 text-4xl lg:text-5xl font-extrabold leading-tight">
            Diversified business solutions for <span className="text-gradient">modern enterprises</span>
          </h2>
          <p className="mt-5 text-muted-foreground leading-relaxed">
            Asset Light Solutions International is a diversified business solutions company delivering
            innovative services across Real Estate, Construction, Building Installation, BPO, Call
            Centre Operations, Information Technology, Software Development and Digital Marketing.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            We empower businesses with scalable solutions, professional expertise and technology-driven
            growth strategies.
          </p>

          <div className="mt-8 grid sm:grid-cols-2 gap-4">
            {[
              { icon: Target, title: "Our Mission", text: "Provide reliable, efficient and innovative business solutions that help organizations grow sustainably." },
              { icon: Eye, title: "Our Vision", text: "Become India's most trusted partner in outsourcing, technology and business support services." },
            ].map((item) => (
              <div key={item.title} className="glass rounded-2xl p-5 hover:border-primary/40 transition-colors group">
                <div className="inline-flex items-center justify-center size-10 rounded-xl bg-primary/15 text-primary mb-3 group-hover:scale-110 transition-transform">
                  <item.icon className="size-5" />
                </div>
                <div className="font-semibold mb-1">{item.title}</div>
                <p className="text-sm text-muted-foreground">{item.text}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
