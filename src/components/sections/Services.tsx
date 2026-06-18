import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { useRef, useState, MouseEvent } from "react";
import {
  Building2, HardHat, Wrench, Shield, TrendingUp, Scale,
  Headset, Database, Code2, Megaphone, Server,
  ArrowUpRight, Sparkles,
} from "lucide-react";
import { Link } from "react-router-dom";

type Service = {
  icon: any;
  title: string;
  desc: string;
  bullets: string[];
  span: string; // tailwind grid span classes
  featured?: boolean;
  accent?: string;
};

const services: Service[] = [
  {
    icon: Building2,
    title: "Real Estate Solutions",
    desc: "End-to-end real estate operations engineered for institutional-grade portfolios.",
    bullets: ["Property Management", "Project Coordination", "Asset Operations", "Investment Support"],
    span: "md:col-span-2 md:row-span-2",
    featured: true,
  },
  {
    icon: HardHat,
    title: "Construction Services",
    desc: "Infrastructure development with disciplined engineering and delivery oversight.",
    bullets: ["Infrastructure Development", "Construction Management", "Engineering Support"],
    span: "md:col-span-2",
  },
  {
    icon: Wrench,
    title: "Building Installation",
    desc: "Residential and commercial installation with lifecycle maintenance.",
    bullets: ["Residential Installation", "Commercial Installation", "Maintenance Solutions"],
    span: "",
  },
  {
    icon: Shield,
    title: "Insurance Services",
    desc: "Corporate cover and client protection with proactive risk management.",
    bullets: ["Corporate Insurance", "Client Protection", "Risk Management"],
    span: "",
  },
  {
    icon: Headset,
    title: "BPO & Call Centre",
    desc: "Inbound, outbound and sales operations engineered for global enterprises.",
    bullets: ["Inbound Process", "Outbound Process", "Customer Support", "Sales Operations"],
    span: "md:col-span-2 md:row-span-2",
    featured: true,
  },
  {
    icon: TrendingUp,
    title: "Financial Services",
    desc: "Financial process management with executive-grade advisory.",
    bullets: ["Financial Process Management", "Business Advisory", "Investment Support"],
    span: "",
  },
  {
    icon: Scale,
    title: "Legal Support",
    desc: "Documentation, compliance and corporate legal infrastructure.",
    bullets: ["Compliance", "Documentation", "Corporate Legal Support"],
    span: "",
  },
  {
    icon: Database,
    title: "Data Entry Services",
    desc: "High-accuracy data processing on secure pipelines.",
    bullets: ["Accurate Processing", "Secure Data Management", "Digital Documentation"],
    span: "md:col-span-2",
  },
  {
    icon: Code2,
    title: "Software Development",
    desc: "Custom applications and enterprise platforms built to scale.",
    bullets: ["Custom Applications", "Web Development", "Enterprise Software"],
    span: "",
  },
  {
    icon: Megaphone,
    title: "Digital Marketing",
    desc: "Performance marketing that compounds — SEO, PPC, social and lead gen.",
    bullets: ["SEO", "PPC", "Social Media", "Lead Generation"],
    span: "",
  },
  {
    icon: Server,
    title: "Information Technology",
    desc: "Cloud, infrastructure and digital transformation for resilient operations.",
    bullets: ["Cloud Solutions", "IT Support", "Infrastructure Management", "Digital Transformation"],
    span: "md:col-span-2",
    featured: true,
  },
];

function TiltCard({ service, index }: { service: Service; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mxPct = useMotionValue(50);
  const myPct = useMotionValue(50);

  const rotX = useSpring(useTransform(y, [-0.5, 0.5], [8, -8]), { stiffness: 200, damping: 18 });
  const rotY = useSpring(useTransform(x, [-0.5, 0.5], [-8, 8]), { stiffness: 200, damping: 18 });

  const handleMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    x.set(px - 0.5);
    y.set(py - 0.5);
    mxPct.set(px * 100);
    myPct.set(py * 100);
  };

  const handleLeave = () => {
    x.set(0);
    y.set(0);
    setHovered(false);
  };

  const Icon = service.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay: (index % 4) * 0.1, ease: [0.22, 1, 0.36, 1] }}
      onMouseMove={handleMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={handleLeave}
      style={{ rotateX: rotX, rotateY: rotY, transformPerspective: 1000 }}
      className={`group relative overflow-hidden ${service.span} min-h-[260px] md:min-h-[280px]`}
    >
      <motion.div
        animate={{ scale: hovered ? 1.02 : 1 }}
        transition={{ duration: 0.4 }}
        className="relative h-full w-full rounded-[30px] p-6 md:p-8 flex flex-col justify-between overflow-hidden"
        style={{
          background: "rgba(255,255,255,0.03)",
          backdropFilter: "blur(20px) saturate(140%)",
          border: "1px solid rgba(199,240,0,0.15)",
          boxShadow: hovered
            ? "0 30px 80px -20px rgba(199,240,0,0.35), inset 0 1px 0 rgba(255,255,255,0.08)"
            : "0 20px 60px -30px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.05)",
          transformStyle: "preserve-3d",
        }}
      >
        {/* Mouse-follow spotlight */}
        <motion.div
          className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: useTransform(
              [mxPct, myPct] as any,
              ([mx, my]: any) =>
                `radial-gradient(500px circle at ${mx}% ${my}%, rgba(199,240,0,0.18), transparent 55%)`
            ) as any,
          }}
        />

        {/* Animated grid */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.05] group-hover:opacity-[0.12] transition-opacity"
          style={{
            backgroundImage:
              "linear-gradient(rgba(199,240,0,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(199,240,0,0.5) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        {/* Featured backdrop glow */}
        {service.featured && (
          <div
            className="pointer-events-none absolute -top-24 -right-24 size-72 rounded-full blur-[100px] opacity-30"
            style={{ background: "radial-gradient(circle, #C7F000 0%, transparent 70%)" }}
          />
        )}

        {/* Traveling border light */}
        <span
          className="pointer-events-none absolute inset-0 rounded-[30px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            padding: "1px",
            background:
              "conic-gradient(from var(--angle,0deg), transparent 0%, #C7F000 20%, transparent 40%)",
            WebkitMask:
              "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
            WebkitMaskComposite: "xor" as any,
            mask: "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
            maskComposite: "exclude" as any,
            animation: "spin 4s linear infinite",
          }}
        />

        <div className="relative z-10 flex items-start justify-between">
          <motion.div
            animate={{ rotate: hovered ? -8 : 0, scale: hovered ? 1.1 : 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            className="relative inline-flex items-center justify-center size-14 md:size-16 rounded-2xl"
            style={{
              background:
                "linear-gradient(135deg, rgba(199,240,0,0.18), rgba(199,240,0,0.04))",
              border: "1px solid rgba(199,240,0,0.3)",
              boxShadow: hovered ? "0 0 40px rgba(199,240,0,0.5)" : "none",
            }}
          >
            <Icon className="size-7 md:size-8 text-primary" strokeWidth={1.6} />
          </motion.div>

          <span className="text-[10px] font-mono tracking-widest text-muted-foreground/60">
            {String(index + 1).padStart(2, "0")} / 11
          </span>
        </div>

        <div className="relative z-10 mt-6">
          <h3 className={`font-display font-bold tracking-tight ${service.featured ? "text-2xl md:text-4xl" : "text-xl md:text-2xl"}`}>
            {service.title}
          </h3>
          <p className="mt-3 text-sm md:text-[15px] text-muted-foreground leading-relaxed max-w-md">
            {service.desc}
          </p>

          <ul className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2">
            {service.bullets.map((b) => (
              <li key={b} className="flex items-center gap-2 text-xs md:text-sm text-foreground/80">
                <span className="size-1.5 rounded-full bg-primary shadow-[0_0_8px_rgba(199,240,0,0.8)]" />
                {b}
              </li>
            ))}
          </ul>

          <motion.div
            animate={{ x: hovered ? 0 : -8, opacity: hovered ? 1 : 0.5 }}
            transition={{ duration: 0.3 }}
            className="mt-6 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-primary"
          >
            Explore <ArrowUpRight className="size-4" />
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}

const headlineWords = ["Comprehensive"];
const headlineWords2 = ["Business", "Solutions"];

export function Services() {
  return (
    <section
      id="services"
      className="relative min-h-[90vh] py-28 md:py-36 overflow-hidden"
      style={{ background: "#050505" }}
    >
      {/* Ambient floating lights */}
      <motion.div
        animate={{ y: [0, -40, 0], x: [0, 20, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute top-20 -left-32 size-[500px] rounded-full blur-[160px] opacity-40"
        style={{ background: "radial-gradient(circle, #C7F000 0%, transparent 70%)" }}
      />
      <motion.div
        animate={{ y: [0, 50, 0], x: [0, -30, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute bottom-20 -right-32 size-[600px] rounded-full blur-[180px] opacity-30"
        style={{ background: "radial-gradient(circle, #A8D600 0%, transparent 70%)" }}
      />

      {/* Animated grid background */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(#C7F000 1px, transparent 1px), linear-gradient(90deg, #C7F000 1px, transparent 1px)",
          backgroundSize: "80px 80px",
          maskImage: "radial-gradient(ellipse at center, black 40%, transparent 80%)",
        }}
      />

      {/* Floating particles */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          className="pointer-events-none absolute size-1 rounded-full bg-primary"
          style={{
            left: `${(i * 83) % 100}%`,
            top: `${(i * 47) % 100}%`,
            boxShadow: "0 0 12px rgba(199,240,0,0.8)",
          }}
          animate={{ y: [0, -60, 0], opacity: [0.2, 0.8, 0.2] }}
          transition={{ duration: 6 + (i % 5), repeat: Infinity, delay: i * 0.4, ease: "easeInOut" }}
        />
      ))}

      <div className="container relative mx-auto px-6">
        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-end mb-16 md:mb-20">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase text-primary"
              style={{ letterSpacing: "4px" }}
            >
              <Sparkles className="size-3.5" /> What We Offer
            </motion.div>

            <h2 className="mt-6 font-display font-extrabold leading-[0.95] tracking-tight text-[40px] md:text-[60px] lg:text-[80px]">
              <span className="block overflow-hidden">
                {headlineWords.map((w, i) => (
                  <motion.span
                    key={w}
                    initial={{ y: "110%", opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.1 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                    className="inline-block mr-4 text-foreground"
                  >
                    {w}
                  </motion.span>
                ))}
              </span>
              <span className="block overflow-hidden">
                {headlineWords2.map((w, i) => (
                  <motion.span
                    key={w}
                    initial={{ y: "110%", opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.3 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                    className="inline-block mr-4 text-gradient"
                  >
                    {w}
                  </motion.span>
                ))}
              </span>
            </h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="lg:pb-4"
          >
            <div className="h-px w-16 bg-primary mb-6" />
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-md lg:ml-auto">
              Empowering businesses with innovative outsourcing, technology, infrastructure and operational excellence solutions designed for sustainable growth.
            </p>
          </motion.div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 auto-rows-[260px] gap-5">
          {services.map((s, i) => (
            <TiltCard key={s.title} service={s} index={i} />
          ))}
        </div>

        {/* CTA Strip */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative mt-20 md:mt-28 rounded-[36px] overflow-hidden"
        >
          <div
            className="absolute inset-0 animate-gradient-x"
            style={{
              background:
                "linear-gradient(120deg, #C7F000 0%, #A8D600 30%, #050505 60%, #A8D600 90%, #C7F000 100%)",
              backgroundSize: "300% 300%",
            }}
          />
          <div className="absolute inset-0 bg-black/30" />
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage:
                "linear-gradient(rgba(0,0,0,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.4) 1px, transparent 1px)",
              backgroundSize: "30px 30px",
            }}
          />

          <div className="relative flex flex-col md:flex-row items-center justify-between gap-8 p-8 md:p-14">
            <div className="text-center md:text-left">
              <div className="text-xs font-semibold uppercase text-black/80" style={{ letterSpacing: "3px" }}>
                Let's Build Together
              </div>
              <h3 className="mt-3 font-display font-extrabold text-3xl md:text-5xl text-black tracking-tight leading-[1.05]">
                Ready to Transform <br className="hidden md:block" /> Your Business?
              </h3>
            </div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
              <Link
                to="/contact"
                className="relative inline-flex items-center gap-3 px-8 py-5 rounded-full bg-black text-primary font-semibold tracking-wide group overflow-hidden"
                style={{ animation: "pulse-glow 3s ease-in-out infinite" }}
              >
                <span className="relative z-10">Schedule Consultation</span>
                <ArrowUpRight className="relative z-10 size-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                <span
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{ background: "linear-gradient(135deg, #1a1a1a, #050505)" }}
                />
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
