import { Leaf, Sparkles, MapPin } from "lucide-react";

const badges = [
  { icon: Leaf, label: "%100 Bitkisel" },
  { icon: Sparkles, label: "Pratik & Lezzetli" },
  { icon: MapPin, label: "Yerli Üretim" },
];

const NiyaHeroSection = () => (
  <section
    id="niya"
    className="pt-28 pb-16 md:pt-36 md:pb-24"
    style={{ background: "var(--gradient-hero)" }}
  >
    <div className="container max-w-3xl text-center space-y-6">
      <h1 className="text-4xl md:text-5xl lg:text-6xl leading-tight text-foreground">
        Niya Foods
      </h1>
      <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
        Bitkisel mutfağı herkes için pratik ve lezzetli hale getiriyoruz.
        Veganlar tarafından, herkes için tasarlanmış yerli üretim ürünler.
      </p>

      <div className="flex flex-wrap justify-center gap-2 pt-2">
        {badges.map((b) => (
          <span
            key={b.label}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-accent text-accent-foreground text-xs font-medium"
          >
            <b.icon size={14} />
            {b.label}
          </span>
        ))}
      </div>

      <div className="flex flex-wrap justify-center gap-3 pt-2">
        <a
          href="#urunler"
          className="inline-flex items-center px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity"
        >
          Ürünlerimizi Keşfet
        </a>
        <a
          href="#satis-noktalari"
          className="inline-flex items-center px-6 py-3 rounded-lg border-2 border-foreground/15 text-foreground font-semibold hover:bg-accent transition-colors"
        >
          Satış Noktaları
        </a>
      </div>
    </div>
  </section>
);

export default NiyaHeroSection;
