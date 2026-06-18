import { motion } from "framer-motion";

const industries = [
  "Real Estate", "Construction", "Insurance", "Finance", "Legal", "IT & ITES",
  "BPO", "Call Centres", "Software Companies", "Startups", "SMEs", "Enterprise",
];

export function Industries() {
  return (
    <section id="industries" className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-40 -z-10" />
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto"
        >
          <div className="text-xs font-semibold tracking-[0.3em] text-primary uppercase">Industries</div>
          <h2 className="mt-3 text-4xl lg:text-5xl font-extrabold">
            Industries <span className="text-gradient">We Serve</span>
          </h2>
        </motion.div>

        <div className="mt-14 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {industries.map((name, i) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: (i % 4) * 0.06 }}
              whileHover={{ y: -4, borderColor: "rgba(199,240,0,0.5)" }}
              className="glass rounded-xl p-5 text-center font-semibold cursor-default hover:text-primary transition-colors"
            >
              {name}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
