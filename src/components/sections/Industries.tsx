import { motion } from "framer-motion";
import {
  Building2, HardHat, ShieldCheck, Landmark, Scale, Cpu,
  Headphones, PhoneCall, Code2, Rocket, Briefcase, Globe2,
  ArrowUpRight,
} from "lucide-react";

const industries = [
  { name: "Real Estate", icon: Building2, blurb: "Property advisory, leasing & asset management.", featured: true },
  { name: "Construction", icon: HardHat, blurb: "Building installation & project delivery." },
  { name: "Insurance", icon: ShieldCheck, blurb: "Operations & claims support." },
  { name: "Finance", icon: Landmark, blurb: "BFSI process outsourcing at scale.", featured: true },
  { name: "Legal", icon: Scale, blurb: "Legal process support & documentation." },
  { name: "IT & ITES", icon: Cpu, blurb: "End‑to‑end IT services & engineering.", featured: true },
  { name: "BPO", icon: Headphones, blurb: "24/7 multilingual back‑office." },
  { name: "Call Centres", icon: PhoneCall, blurb: "Inbound, outbound & omnichannel." },
  { name: "Software", icon: Code2, blurb: "Custom product engineering." },
  { name: "Startups", icon: Rocket, blurb: "Lean teams, fast experiments." },
  { name: "SMEs", icon: Briefcase, blurb: "Right‑sized solutions for growing firms." },
  { name: "Enterprise", icon: Globe2, blurb: "Global delivery, governance‑first." },
];

export function Industries() {
  return (
    <section id="industries" className="relative py-20 sm:py-28 overflow-hidden">
      {/* Atmosphere */}
      <div className="absolute inset-0 grid-bg opacity-25 -z-10" />
      <div className="absolute top-1/3 -left-40 size-[520px] rounded-full bg-primary-glow/10 blur-[140px] -z-10" />
      <div className="absolute bottom-0 -right-40 size-[520px] rounded-full bg-primary/10 blur-[140px] -z-10" />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 opacity-[0.07]"
        style={{
          backgroundImage:
            "radial-gradient(rgba(199,240,0,0.6) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      <div className="container mx-auto px-5 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 rounded-full glass px-3 py-1.5 text-[10px] sm:text-xs font-semibold tracking-[0.25em] text-primary uppercase">
            <span className="size-1.5 rounded-full bg-primary animate-pulse-glow" />
            Industries
          </div>
          <h2 className="mt-4 text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.05]">
            Domain expertise for <span className="text-gradient">every industry</span>
          </h2>
          <p className="mt-4 sm:mt-5 text-sm sm:text-base text-muted-foreground max-w-2xl">
            From ambitious startups to global enterprises — we deliver outcome‑driven
            engagements across every business vertical.
          </p>
        </motion.div>

        {/* Bento grid */}
        <div className="mt-10 sm:mt-14 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 auto-rows-[140px] sm:auto-rows-[160px] gap-3 sm:gap-4">
          {industries.map((item, i) => {
            const Icon = item.icon;
            const featured = item.featured;
            return (
              <motion.a
                key={item.name}
                href="/industries"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.45, delay: (i % 6) * 0.05 }}
                whileHover={{ y: -4 }}
                className={`group relative overflow-hidden rounded-2xl glass border border-white/10 hover:border-primary/50 transition-all duration-500 ${
                  featured ? "sm:col-span-1 sm:row-span-2" : ""
                }`}
              >
                {/* Hover wash */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/15 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                {/* Corner glow */}
                <div className="absolute -top-16 -right-16 size-40 rounded-full bg-primary/25 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                {/* Diagonal sheen */}
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out bg-gradient-to-r from-transparent via-white/5 to-transparent" />

                <div className={`relative h-full flex flex-col justify-between p-4 sm:p-5 ${featured ? "sm:p-6" : ""}`}>
                  <div className="flex items-start justify-between gap-2">
                    <div
                      className={`inline-flex items-center justify-center rounded-xl bg-primary/10 border border-primary/20 text-primary group-hover:bg-primary group-hover:text-primary-foreground group-hover:shadow-[0_0_24px_rgba(199,240,0,0.5)] transition-all duration-500 ${
                        featured ? "size-12 sm:size-14" : "size-10 sm:size-11"
                      }`}
                    >
                      <Icon className={featured ? "size-6 sm:size-7" : "size-5"} strokeWidth={1.75} />
                    </div>
                    <ArrowUpRight className="size-4 text-muted-foreground/60 group-hover:text-primary group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all" />
                  </div>

                  <div>
                    <div
                      className={`font-bold tracking-tight group-hover:text-primary transition-colors ${
                        featured ? "text-lg sm:text-2xl" : "text-sm sm:text-base"
                      }`}
                    >
                      {item.name}
                    </div>
                    <p
                      className={`mt-1.5 text-muted-foreground leading-snug ${
                        featured ? "text-xs sm:text-sm line-clamp-2" : "text-[11px] sm:text-xs line-clamp-2"
                      }`}
                    >
                      {item.blurb}
                    </p>
                    <div className="mt-3 h-px w-8 bg-primary/40 group-hover:w-full group-hover:bg-primary transition-all duration-500" />
                  </div>
                </div>
              </motion.a>
            );
          })}
        </div>

        {/* Marquee strip */}
        <div className="relative mt-10 sm:mt-14 overflow-hidden rounded-2xl glass border border-white/10 py-4">
          <div className="absolute inset-y-0 left-0 w-16 sm:w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-16 sm:w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
          <div className="flex gap-10 sm:gap-14 animate-marquee whitespace-nowrap text-xs sm:text-sm font-semibold tracking-[0.25em] uppercase text-muted-foreground/70">
            {[...industries, ...industries].map((it, idx) => (
              <span key={idx} className="inline-flex items-center gap-2">
                <span className="size-1.5 rounded-full bg-primary" />
                {it.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
