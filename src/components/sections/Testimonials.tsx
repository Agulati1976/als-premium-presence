import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    quote: "ALS transformed our back-office operations completely. Their BPO team is responsive, professional and consistently exceeds our KPIs.",
    name: "Rajiv Mehra", role: "COO, Horizon Realty", initials: "RM",
  },
  {
    quote: "From software development to digital marketing, ALS has been a one-stop partner. The quality and turnaround are genuinely enterprise-grade.",
    name: "Anita Desai", role: "Founder, FinPro Advisory", initials: "AD",
  },
  {
    quote: "Their call centre operations scaled with us seamlessly from 20 to 200 seats. The leadership team truly understands customer experience.",
    name: "Vikram Sethi", role: "VP Operations, NexaCloud", initials: "VS",
  },
];

export function Testimonials() {
  const [i, setI] = useState(0);
  const [dir, setDir] = useState(1);

  useEffect(() => {
    const id = setInterval(() => { setDir(1); setI((p) => (p + 1) % testimonials.length); }, 7000);
    return () => clearInterval(id);
  }, []);

  const go = (d: number) => { setDir(d); setI((p) => (p + d + testimonials.length) % testimonials.length); };
  const t = testimonials[i];

  return (
    <section className="relative py-32 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-[600px] rounded-full bg-primary/10 blur-[160px] -z-10" />
      <div className="absolute inset-0 grid-bg opacity-30 -z-10" />

      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.3em] text-primary uppercase">
            <div className="h-px w-8 bg-primary" /> Testimonials <div className="h-px w-8 bg-primary" />
          </div>
          <h2 className="mt-4 text-4xl lg:text-6xl font-extrabold tracking-tight leading-[1.02]">
            Trusted by <span className="text-gradient">industry leaders</span>
          </h2>
        </motion.div>

        <div className="mt-16 max-w-4xl mx-auto">
          <div className="relative glass-strong rounded-[2rem] p-10 lg:p-16 overflow-hidden noise">
            <Quote className="absolute top-10 left-10 size-20 text-primary/15" />
            <div className="absolute -top-20 -right-20 size-60 rounded-full bg-primary/20 blur-3xl" />

            <div className="relative min-h-[260px]">
              <AnimatePresence mode="wait" custom={dir}>
                <motion.div
                  key={i}
                  custom={dir}
                  initial={{ opacity: 0, x: dir * 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: dir * -40 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="flex gap-1 mb-6 text-primary">
                    {[...Array(5)].map((_, k) => <Star key={k} className="size-5 fill-current" />)}
                  </div>
                  <p className="text-xl lg:text-3xl font-medium leading-[1.4] tracking-tight">"{t.quote}"</p>
                  <div className="mt-8 pt-8 border-t border-white/10 flex items-center gap-4">
                    <div className="size-12 rounded-full bg-gradient-to-br from-primary to-primary-glow text-primary-foreground font-extrabold flex items-center justify-center">
                      {t.initials}
                    </div>
                    <div>
                      <div className="font-bold">{t.name}</div>
                      <div className="text-sm text-muted-foreground">{t.role}</div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Controls */}
            <div className="absolute bottom-8 right-8 flex gap-2">
              <button
                onClick={() => go(-1)}
                aria-label="Previous"
                className="size-11 rounded-full glass flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <ChevronLeft className="size-5" />
              </button>
              <button
                onClick={() => go(1)}
                aria-label="Next"
                className="size-11 rounded-full glass flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <ChevronRight className="size-5" />
              </button>
            </div>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, k) => (
              <button
                key={k}
                onClick={() => { setDir(k > i ? 1 : -1); setI(k); }}
                aria-label={`Testimonial ${k + 1}`}
                className={`h-1.5 rounded-full transition-all duration-500 ${k === i ? "w-10 bg-primary" : "w-1.5 bg-white/20 hover:bg-white/40"}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
