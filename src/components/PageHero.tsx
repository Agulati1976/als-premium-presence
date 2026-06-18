import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronRight, Sparkles } from "lucide-react";
import heroBg from "@/assets/hero-premium.webp";

interface PageHeroProps {
  eyebrow?: string;
  title: string;
  highlight?: string;
  description?: string;
  crumb: string;
}

export function PageHero({ eyebrow = "Asset Light Solutions", title, highlight, description, crumb }: PageHeroProps) {
  return (
    <section className="relative pt-40 pb-24 overflow-hidden">
      <div className="absolute inset-0 -z-20">
        <img src={heroBg} alt="" className="size-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/80 to-background" />
        <div className="absolute inset-0 grid-bg opacity-40" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(199,240,0,0.10),_transparent_70%)]" />
      </div>
      <div className="absolute -top-20 -left-32 size-[460px] rounded-full bg-primary/15 blur-[140px] -z-10 animate-pulse-glow" />
      <div className="absolute bottom-0 right-0 size-[380px] rounded-full bg-primary-glow/10 blur-[140px] -z-10" />

      {/* Floating particles */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        {[...Array(14)].map((_, i) => (
          <motion.span
            key={i}
            className="absolute rounded-full bg-primary"
            style={{
              left: `${(i * 67) % 100}%`,
              top: `${(i * 43) % 100}%`,
              width: `${(i % 3) + 2}px`,
              height: `${(i % 3) + 2}px`,
              opacity: 0.35,
              boxShadow: "0 0 12px rgba(199,240,0,0.8)",
            }}
            animate={{ y: [0, -50, 0], opacity: [0.2, 0.8, 0.2] }}
            transition={{ duration: 5 + (i % 5), repeat: Infinity, delay: i * 0.25 }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative">
        <motion.nav
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-2 text-xs uppercase tracking-widest text-muted-foreground mb-6"
        >
          <Link to="/" className="hover:text-primary transition-colors">Home</Link>
          <ChevronRight className="size-3" />
          <span className="text-primary">{crumb}</span>
        </motion.nav>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1 }}
          className="inline-flex items-center gap-2 rounded-full glass px-4 py-2 mb-6 text-xs font-medium"
        >
          <Sparkles className="size-3.5 text-primary" />
          <span className="text-foreground/80">{eyebrow}</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="text-4xl sm:text-5xl lg:text-7xl font-extrabold leading-[1.02] tracking-[-0.03em] max-w-4xl"
        >
          {title}{" "}
          {highlight && <span className="text-gradient">{highlight}</span>}
        </motion.h1>

        {description && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-6 max-w-2xl text-base lg:text-lg text-muted-foreground leading-relaxed"
          >
            {description}
          </motion.p>
        )}
      </div>
    </section>
  );
}
