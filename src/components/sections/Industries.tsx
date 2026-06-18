import { motion } from "framer-motion";

const industries = [
  "Real Estate", "Construction", "Insurance", "Finance", "Legal", "IT & ITES",
  "BPO", "Call Centres", "Software Companies", "Startups", "SMEs", "Enterprise",
];

export function Industries() {
  return (
    <section id="industries" className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-30 -z-10" />
      <div className="absolute top-1/2 -left-40 size-[500px] rounded-full bg-primary-glow/10 blur-[140px] -z-10" />

      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto"
        >
          <div className="text-xs font-semibold tracking-[0.3em] text-primary uppercase">Industries</div>
          <h2 className="mt-3 text-4xl lg:text-6xl font-extrabold tracking-tight">
            Industries <span className="text-gradient">We Serve</span>
          </h2>
          <p className="mt-5 text-muted-foreground">From startups to enterprise — we deliver across every business vertical.</p>
        </motion.div>

        <div className="mt-14 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {industries.map((name, i) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: (i % 4) * 0.05 }}
              whileHover={{ y: -6, scale: 1.03 }}
              className="group relative glass rounded-xl p-6 text-center font-semibold cursor-default overflow-hidden hover:border-primary/50 transition-all duration-500"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/15 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute -top-1/2 left-1/2 -translate-x-1/2 size-32 rounded-full bg-primary/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <span className="relative group-hover:text-primary transition-colors">{name}</span>
              <div className="relative mt-2 mx-auto h-px w-8 bg-primary/30 group-hover:w-16 group-hover:bg-primary transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
