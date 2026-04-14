import { Instagram } from "lucide-react";

const TikTokIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1 0-5.78 2.92 2.92 0 0 1 .88.13v-3.5a6.37 6.37 0 0 0-.88-.07 6.34 6.34 0 0 0 0 12.68 6.34 6.34 0 0 0 6.34-6.34V9.06a8.16 8.16 0 0 0 3.76.92V6.69Z" />
  </svg>
);

const LinkedInIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.47 2H3.53A1.45 1.45 0 0 0 2 3.47v17.06A1.45 1.45 0 0 0 3.53 22h16.94A1.45 1.45 0 0 0 22 20.53V3.47A1.45 1.45 0 0 0 20.47 2ZM8.09 18.74h-3v-9h3v9ZM6.59 8.48a1.56 1.56 0 1 1 0-3.12 1.56 1.56 0 0 1 0 3.12Zm12.32 10.26h-3v-4.83c0-1.21-.43-2-1.52-2A1.65 1.65 0 0 0 12.85 13a2 2 0 0 0-.1.73v5h-3v-9h3v1.2a3 3 0 0 1 2.71-1.5c2 0 3.45 1.29 3.45 4.06v5.25Z" />
  </svg>
);

const socials = [
  { icon: Instagram, label: "Instagram", href: "https://instagram.com/PLACEHOLDER" },
  { icon: TikTokIcon, label: "TikTok", href: "https://tiktok.com/@PLACEHOLDER" },
  { icon: LinkedInIcon, label: "LinkedIn", href: "https://linkedin.com/company/PLACEHOLDER" },
];

const SocialSection = () => (
  <section className="py-16 md:py-20">
    <div className="container text-center">
      <h2 className="text-3xl md:text-4xl text-foreground mb-4">
        Bizi Takip Edin
      </h2>
      <p className="text-muted-foreground max-w-md mx-auto mb-8">
        Yeni tarifler, satış noktaları ve ürün haberleri için sosyal medya
        hesaplarımızı takip edin.
      </p>
      <div className="flex justify-center gap-4">
        {socials.map((s) => (
          <a
            key={s.label}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full bg-accent flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
            aria-label={s.label}
          >
            <s.icon />
          </a>
        ))}
      </div>
    </div>
  </section>
);

export default SocialSection;
