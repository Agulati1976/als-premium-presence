import { Logo } from "../Logo";

const SocialIcon = ({ d }: { d: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="size-4"><path d={d} /></svg>
);
const socials = [
  { label: "Facebook", d: "M13.5 21v-7h2.4l.4-3h-2.8V9.1c0-.9.3-1.5 1.6-1.5H16.5V5c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3V11H7.5v3H9.8v7h3.7z" },
  { label: "Twitter", d: "M18.3 5h2.7l-5.9 6.7L22 21h-5.4l-4.2-5.5L7.5 21H4.8l6.3-7.2L4 5h5.5l3.8 5 5-5zm-.9 14.3h1.5L9.2 6.6H7.6l9.8 12.7z" },
  { label: "Instagram", d: "M12 2c2.7 0 3 0 4.1.1 1 0 1.9.2 2.7.5.7.3 1.4.7 2 1.3.6.6 1 1.3 1.3 2 .3.8.5 1.7.5 2.7C22 9.7 22 10 22 12s0 2.3-.1 3.4c0 1-.2 1.9-.5 2.7-.3.7-.7 1.4-1.3 2-.6.6-1.3 1-2 1.3-.8.3-1.7.5-2.7.5C14.3 22 14 22 12 22s-2.3 0-3.4-.1c-1 0-1.9-.2-2.7-.5-.7-.3-1.4-.7-2-1.3-.6-.6-1-1.3-1.3-2-.3-.8-.5-1.7-.5-2.7C2 14.3 2 14 2 12s0-2.3.1-3.4c0-1 .2-1.9.5-2.7.3-.7.7-1.4 1.3-2 .6-.6 1.3-1 2-1.3.8-.3 1.7-.5 2.7-.5C9.7 2 10 2 12 2zm0 5a5 5 0 100 10 5 5 0 000-10zm6.5-.5a1.2 1.2 0 100 2.4 1.2 1.2 0 000-2.4zM12 9a3 3 0 110 6 3 3 0 010-6z" },
  { label: "LinkedIn", d: "M19 3a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h14zM8.3 18.3v-7.6H5.7v7.6h2.6zM7 9.4a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm11.3 8.9v-4.2c0-2.3-1.2-3.3-2.9-3.3-1.3 0-1.9.7-2.3 1.2v-1H10.5c0 .8 0 7.6 0 7.6h2.6v-4.2c0-.2 0-.4.1-.6.2-.4.6-.9 1.3-.9 1 0 1.3.7 1.3 1.8v4h2.5z" },
];


export function Footer() {
  return (
    <footer className="relative border-t border-white/10 pt-16 pb-8">
      <div className="container mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <Logo className="h-14 w-auto" />
          <p className="mt-5 text-sm text-muted-foreground leading-relaxed">
            Diversified business solutions across Real Estate, BPO, IT and Digital Transformation.
          </p>
          <div className="mt-5 flex gap-3">
            {socials.map((s) => (
              <a
                key={s.label}
                href="#"
                aria-label={s.label}
                className="size-9 rounded-full glass flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all hover:-translate-y-1"
              >
                <SocialIcon d={s.d} />
              </a>
            ))}
          </div>
        </div>

        <FooterCol title="Quick Links" items={["Home", "About Us", "Services", "Industries", "Why Choose Us", "Contact"]} />
        <FooterCol title="Services" items={["Real Estate", "BPO Services", "Call Centre", "Software Development", "Digital Marketing", "IT Services"]} />

        <div>
          <h4 className="font-bold mb-5">Contact Info</h4>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li>New Delhi, India</li>
            <li><a href="tel:+919876543210" className="hover:text-primary">+91 98765 43210</a></li>
            <li><a href="mailto:contact@assetlightsolutions.com" className="hover:text-primary break-all">contact@assetlightsolutions.com</a></li>
          </ul>
        </div>
      </div>

      <div className="container mx-auto px-6 mt-14 pt-6 border-t border-white/10 text-center text-xs text-muted-foreground">
        © 2026 Asset Light Solutions International. All Rights Reserved.
      </div>
    </footer>
  );
}

function FooterCol({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h4 className="font-bold mb-5">{title}</h4>
      <ul className="space-y-3 text-sm text-muted-foreground">
        {items.map((it) => (
          <li key={it}>
            <a href="#" className="hover:text-primary transition-colors">{it}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
