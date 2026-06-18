const items = [
  "Real Estate", "BPO Services", "Call Centre", "Software Development",
  "Digital Marketing", "IT Consulting", "Data Entry", "Construction",
  "Building Installation", "Insurance", "Legal Support", "Finance",
];

export function Marquee() {
  const row = [...items, ...items];
  return (
    <section className="relative py-10 border-y border-white/10 overflow-hidden bg-black/40">
      <div className="flex gap-12 animate-marquee whitespace-nowrap">
        {row.map((t, i) => (
          <div key={i} className="flex items-center gap-12 text-2xl lg:text-3xl font-extrabold tracking-tight">
            <span className="text-foreground/40 hover:text-primary transition-colors">{t}</span>
            <span className="size-2 rounded-full bg-primary shrink-0" />
          </div>
        ))}
      </div>
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent" />
    </section>
  );
}
