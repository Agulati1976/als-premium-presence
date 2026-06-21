import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Sparkles, ShieldCheck, Award } from "lucide-react";
import heroBg from "@/assets/hero-premium.webp";
import { Counter } from "../Counter";
import { useRef } from "react";
import { useEnquiry } from "@/contexts/EnquiryContext";

const stats = [
  { value: 100, suffix: "+", label: "Projects Delivered" },
  { value: 50, suffix: "+", label: "Enterprise Clients" },
  { value: 10, suffix: "+", label: "Industries Served" },
  { value: 24, suffix: "/7", label: "Global Support" },
];

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

  return (
    <section ref={sectionRef} id="home" className="relative isolate min-h-screen flex items-center overflow-hidden pt-28">
      {/* BG image with Ken Burns + parallax */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <motion.img
          src={heroBg}
          alt=""
          className="size-full object-cover opacity-85 saturate-150 contrast-125 brightness-110"
          style={{ y: bgY, scale: bgScale }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/45 to-background/10" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-transparent to-background" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_76%_34%,_rgba(199,240,0,0.24),_transparent_42%)]" />
        <div className="absolute inset-0 grid-bg opacity-25" />
        {/* Animated gradient mesh */}
        <motion.div
          className="absolute inset-0 opacity-35 animate-gradient-x"
          style={{
            background:
              "radial-gradient(circle at 20% 30%, rgba(199,240,0,0.12), transparent 35%), radial-gradient(circle at 82% 30%, rgba(168,214,0,0.28), transparent 36%), radial-gradient(circle at 64% 82%, rgba(199,240,0,0.14), transparent 35%)",
          }}
        />
      </div>

      <div className="absolute inset-0 z-[2] overflow-hidden pointer-events-none hidden md:block">
        {[...Array(12)].map((_, i) => (
          <motion.span
            key={i}
            className="absolute rounded-full bg-primary"
            style={{
              left: `${(i * 53) % 100}%`,
              top: `${(i * 37) % 100}%`,
              width: `${(i % 3) + 2}px`,
              height: `${(i % 3) + 2}px`,
              opacity: 0.4,
              boxShadow: "0 0 12px rgba(199,240,0,0.8)",
            }}
            animate={{ y: [0, -60, 0], opacity: [0.2, 0.9, 0.2] }}
            transition={{ duration: 4 + (i % 5), repeat: Infinity, delay: i * 0.2 }}
          />
        ))}
      </div>

      {/* Glow orbs */}
      <div className="absolute top-1/4 -left-40 size-[520px] rounded-full bg-primary/20 blur-[140px] z-[2] animate-pulse-glow pointer-events-none" />
      <div className="absolute bottom-0 right-0 size-[480px] rounded-full bg-primary-glow/15 blur-[140px] z-[2] pointer-events-none" />

      <div className="container mx-auto px-6 py-20 grid lg:grid-cols-12 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-7"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 rounded-full glass px-4 py-2 mb-6 text-xs font-medium"
          >
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full rounded-full bg-primary opacity-75" style={{ animation: "ping-ring 2s cubic-bezier(0,0,0.2,1) infinite" }} />
              <span className="relative inline-flex size-2 rounded-full bg-primary" />
            </span>
            <Sparkles className="size-3.5 text-primary" />
            <span className="text-foreground/80">India's Trusted Business Solutions Partner — Operating Globally</span>
          </motion.div>

          <h1 className="text-[2.5rem] sm:text-5xl lg:text-7xl xl:text-[5.5rem] font-extrabold leading-[0.98] tracking-[-0.03em]">
            <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="block">
              Leading
            </motion.span>
            <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 }} className="block">
              <span className="text-gradient">Real Estate, BPO</span>
            </motion.span>
            <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="block">
              <span className="text-gradient">& IT</span> Solutions
            </motion.span>
            <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.55 }} className="block">
              in India <span className="text-gradient">— Functioning Globally</span>
            </motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }}
            className="mt-7 text-base lg:text-lg text-muted-foreground max-w-2xl leading-relaxed"
          >
            Delivering excellence in Building Installation, Call Centre Operations, Outsourcing
            Services, Software Development and Digital Transformation.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.85 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <RequestConsultationButton />
            <a
              href="#services"
              className="group inline-flex items-center gap-2 rounded-full glass px-8 py-4 font-semibold hover:border-primary/50 hover:text-primary transition-all"
            >
              Explore Services
              <span className="size-1.5 rounded-full bg-primary group-hover:scale-150 transition-transform" />
            </a>
          </motion.div>

          {/* Trust badges */}
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}
            className="mt-10 flex flex-wrap items-center gap-6 text-xs text-muted-foreground"
          >
            <div className="flex items-center gap-2"><ShieldCheck className="size-4 text-primary" /> ISO 9001:2015</div>
            <div className="flex items-center gap-2"><Award className="size-4 text-primary" /> 15+ Years</div>
            <div className="flex items-center gap-2"><Sparkles className="size-4 text-primary" /> Pan-India Presence</div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="lg:col-span-5 grid grid-cols-2 gap-4"
        >
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="glass rounded-2xl p-6 relative overflow-hidden group"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute -top-10 -right-10 size-24 rounded-full bg-primary/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative">
                <div className="text-4xl lg:text-5xl font-extrabold text-gradient">
                  <Counter to={s.value} suffix={s.suffix} />
                </div>
                <div className="mt-2 text-sm text-muted-foreground">{s.label}</div>
              </div>
            </motion.div>
          ))}
          {/* Decorative ring */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
            className="absolute -top-10 -right-10 size-40 rounded-full border border-primary/20 hidden lg:block pointer-events-none"
          >
            <div className="absolute -top-1 left-1/2 -translate-x-1/2 size-2 rounded-full bg-primary shadow-[0_0_20px_#C7F000]" />
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{ opacity: { delay: 1.5 }, y: { duration: 2, repeat: Infinity } }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-xs text-muted-foreground"
      >
        <span className="tracking-[0.3em] uppercase">Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-primary to-transparent" />
      </motion.div>
    </section>
  );
}

function RequestConsultationButton() {
  const { openEnquiry } = useEnquiry();
  return (
    <button
      onClick={openEnquiry}
      className="group relative inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 font-bold text-primary-foreground transition-all hover:-translate-y-1 hover:shadow-[0_20px_60px_-10px_rgba(199,240,0,0.6)] overflow-hidden"
    >
      <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent group-hover:translate-x-full transition-transform duration-700" />
      <span className="relative">Request Consultation</span>
      <ArrowRight className="size-4 relative group-hover:translate-x-1 transition-transform" />
    </button>
  );
}
