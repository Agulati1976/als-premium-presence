import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { Logo } from "../Logo";

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
            {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
              <a
                key={i}
                href="#"
                aria-label="Social link"
                className="size-9 rounded-full glass flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all hover:-translate-y-1"
              >
                <Icon className="size-4" />
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
