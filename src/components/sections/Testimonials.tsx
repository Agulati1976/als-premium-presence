import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    quote: "ALS transformed our back-office operations completely. Their BPO team is responsive, professional and consistently exceeds our KPIs.",
    name: "Rajiv Mehra",
    role: "COO, Horizon Realty",
  },
  {
    quote: "From software development to digital marketing, ALS has been a one-stop partner. The quality and turnaround are genuinely enterprise-grade.",
    name: "Anita Desai",
    role: "Founder, FinPro Advisory",
  },
  {
    quote: "Their call centre operations scaled with us seamlessly from 20 to 200 seats. The leadership team truly understands customer experience.",
    name: "Vikram Sethi",
    role: "VP Operations, NexaCloud",
  },
];

export function Testimonials() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setI((p) => (p + 1) % testimonials.length), 6000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative py-28 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-[500px] rounded-full bg-primary/10 blur-[140px] -z-10" />
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto"
        >
          <div className="text-xs font-semibold tracking-[0.3em] text-primary uppercase">Testimonials</div>
          <h2 className="mt-3 text-4xl lg:text-5xl font-extrabold">
            Trusted by <span className="text-gradient">industry leaders</span>
          </h2>
        </motion.div>

        <div className="mt-14 max-w-3xl mx-auto">
          <div className="glass-strong rounded-3xl p-10 lg:p-14 relative min-h-[280px]">
            <Quote className="absolute top-8 left-8 size-12 text-primary/30" />
            <AnimatePresence mode="wait">
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="relative pt-6"
              >
                <div className="flex gap-1 mb-4 text-primary">
                  {[...Array(5)].map((_, k) => <Star key={k} className="size-4 fill-current" />)}
                </div>
                <p className="text-xl lg:text-2xl font-medium leading-relaxed">"{testimonials[i].quote}"</p>
                <div className="mt-6 pt-6 border-t border-white/10">
                  <div className="font-bold">{testimonials[i].name}</div>
                  <div className="text-sm text-muted-foreground">{testimonials[i].role}</div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, k) => (
              <button
                key={k}
                onClick={() => setI(k)}
                aria-label={`Testimonial ${k + 1}`}
                className={`h-2 rounded-full transition-all ${k === i ? "w-8 bg-primary" : "w-2 bg-white/20"}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
