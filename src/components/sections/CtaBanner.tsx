import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function CtaBanner() {
  return (
    <section className="relative py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-[2rem] noise"
          style={{
            background: "linear-gradient(135deg, #C7F000 0%, #A8D600 100%)",
          }}
        >
          <div className="absolute inset-0 opacity-30" style={{
            backgroundImage:
              "radial-gradient(circle at 20% 20%, rgba(255,255,255,0.5), transparent 40%), radial-gradient(circle at 80% 80%, rgba(0,0,0,0.2), transparent 40%)",
          }} />
          <div className="relative grid lg:grid-cols-2 gap-8 p-10 lg:p-16 items-center">
            <div>
              <h2 className="text-4xl lg:text-5xl font-extrabold text-black leading-[1.05]">
                Ready to scale your<br />business with ALS?
              </h2>
              <p className="mt-4 text-black/70 text-lg max-w-md">
                Join 50+ enterprises that trust us with their growth, operations and digital transformation.
              </p>
            </div>
            <div className="flex flex-wrap gap-4 lg:justify-end">
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 rounded-full bg-black px-8 py-4 font-bold text-primary hover:bg-neutral-900 transition-all hover:-translate-y-1"
              >
                Start a Project
                <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="tel:+919876543210"
                className="inline-flex items-center gap-2 rounded-full border-2 border-black/80 px-8 py-4 font-bold text-black hover:bg-black hover:text-primary transition-all"
              >
                Call Sales
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
