import { useParams, Link, Navigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Check, ArrowRight, Phone } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { getServiceBySlug, services } from "@/data/services";
import { useEnquiry } from "@/contexts/EnquiryContext";

export default function ServiceDetail() {
  const { slug } = useParams<{ slug: string }>();
  const service = slug ? getServiceBySlug(slug) : undefined;

  if (!service) return <Navigate to="/services" replace />;

  const Icon = service.icon;
  const related = services.filter((s) => s.slug !== service.slug).slice(0, 3);

  return (
    <>
      <Helmet>
        <title>{`${service.title} | ALS Asset Light Solutions`}</title>
        <meta name="description" content={service.desc} />
        <meta property="og:title" content={`${service.title} | ALS`} />
        <meta property="og:description" content={service.desc} />
      </Helmet>

      <PageHero
        crumb={service.title}
        eyebrow={service.tagline}
        title={service.title.split(" ").slice(0, -1).join(" ") || service.title}
        highlight={service.title.split(" ").slice(-1)[0]}
        description={service.desc}
      />

      {/* Overview */}
      <section className="py-20">
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative rounded-3xl overflow-hidden h-[420px] glass"
          >
            <img src={service.image} alt={service.title} className="absolute inset-0 size-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-tr from-background/70 via-background/20 to-transparent" />
            <div className="absolute bottom-5 left-5 inline-flex items-center gap-3 rounded-2xl glass px-4 py-3">
              <span className="inline-flex size-10 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                <Icon className="size-5" />
              </span>
              <span className="text-sm font-semibold">{service.title}</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-xs font-semibold tracking-[0.3em] text-primary uppercase">Overview</div>
            <h2 className="mt-3 text-3xl lg:text-5xl font-extrabold leading-[1.05] tracking-tight">
              Built for <span className="text-gradient">outcomes</span>, not just deliverables.
            </h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">{service.overview}</p>

            <ul className="mt-7 grid sm:grid-cols-2 gap-3">
              {service.benefits.map((b) => (
                <li key={b} className="flex items-start gap-2 text-sm text-foreground/85">
                  <Check className="size-4 text-primary mt-0.5 shrink-0" />
                  {b}
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3 text-sm font-semibold hover:opacity-90 transition"
              >
                Request a Proposal <ArrowRight className="size-4" />
              </Link>
              <a
                href="tel:+919289975316"
                className="inline-flex items-center gap-2 rounded-full glass px-6 py-3 text-sm font-semibold hover:border-primary/50 transition"
              >
                <Phone className="size-4" /> +91 92899 75316
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Sub-services */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute top-1/3 -left-32 size-[500px] rounded-full bg-primary/8 blur-[160px] -z-10" />
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mb-12"
          >
            <div className="text-xs font-semibold tracking-[0.3em] text-primary uppercase">Sub-services</div>
            <h2 className="mt-3 text-3xl lg:text-5xl font-extrabold leading-[1.05] tracking-tight">
              What's <span className="text-gradient">included</span>
            </h2>
            <p className="mt-4 text-muted-foreground">
              Choose individual modules or take the full stack — every engagement is shaped to your operating model.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6">
            {service.subServices.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: (i % 2) * 0.1 }}
                whileHover={{ y: -6 }}
                className="group relative glass rounded-2xl overflow-hidden hover:border-primary/50 transition-all flex flex-col sm:flex-row"
              >
                <div className="relative sm:w-2/5 h-48 sm:h-auto overflow-hidden shrink-0">
                  <img
                    src={s.image}
                    alt={s.title}
                    loading="lazy"
                    decoding="async"
                    className="absolute inset-0 size-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-background/50" />
                </div>
                <div className="p-6 flex flex-col justify-center flex-1">
                  <div className="text-[10px] font-mono text-primary/70">{String(i + 1).padStart(2, "0")}</div>
                  <h3 className="mt-1 text-lg font-bold tracking-tight">{s.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Related services */}
      <section className="py-20 border-t border-border/40">
        <div className="container mx-auto px-6">
          <div className="flex items-end justify-between mb-10 gap-4 flex-wrap">
            <div>
              <div className="text-xs font-semibold tracking-[0.3em] text-primary uppercase">Explore more</div>
              <h2 className="mt-3 text-3xl lg:text-4xl font-extrabold tracking-tight">Other services</h2>
            </div>
            <Link to="/services" className="text-sm font-semibold text-primary inline-flex items-center gap-1 hover:gap-2 transition-all">
              View all <ArrowRight className="size-4" />
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {related.map((r) => {
              const RIcon = r.icon;
              return (
                <Link
                  key={r.slug}
                  to={`/services/${r.slug}`}
                  className="group relative glass rounded-2xl overflow-hidden hover:border-primary/50 transition-all"
                >
                  <div className="relative h-40 overflow-hidden">
                    <img src={r.image} alt={r.title} loading="lazy" className="absolute inset-0 size-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
                    <div className="absolute bottom-3 left-4 inline-flex size-10 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                      <RIcon className="size-4" />
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="text-base font-bold tracking-tight">{r.title}</h3>
                    <p className="mt-1.5 text-xs text-muted-foreground line-clamp-2">{r.desc}</p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
