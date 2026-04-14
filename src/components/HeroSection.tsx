import heroImg from "@/assets/hero-food.jpg";
import { Leaf, Clock, Package, MapPin } from "lucide-react";

const badges = [
  { icon: Leaf, label: "Vegan" },
  { icon: Clock, label: "Pratik" },
  { icon: Package, label: "Uzun Raf Ömrü" },
  { icon: MapPin, label: "Yerli Üretim" },
];

const HeroSection = () => (
  <section
    id="urun"
    className="pt-24 pb-16 md:pt-32 md:pb-24"
    style={{ background: "var(--gradient-hero)" }}
  >
    <div className="container grid md:grid-cols-2 gap-10 items-center">
      <div className="space-y-6">
        <p className="text-sm font-semibold tracking-widest uppercase text-primary">
          Niya Foods
        </p>
        <h1 className="text-4xl md:text-5xl lg:text-6xl leading-tight text-foreground">
          Chirp
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-lg">
          Pratik, lezzetli, bitkisel yumurta karışımı. Toz formda, su ekle ve
          omlet, menemen, scramble veya sucuklu yumurta tariflerini kolayca
          hazırla.
        </p>

        <div className="flex flex-wrap gap-2">
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

        <div className="flex flex-wrap gap-3 pt-2">
          <a
            href="https://www.trendyol.com/PLACEHOLDER"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity"
          >
            Trendyol'dan Satın Al
          </a>
          <a
            href="#satis-noktalari"
            className="inline-flex items-center px-6 py-3 rounded-lg border-2 border-foreground/15 text-foreground font-semibold hover:bg-accent transition-colors"
          >
            Satış Noktaları
          </a>
        </div>
      </div>

      <div className="relative">
        <img
          src={heroImg}
          alt="Chirp bitkisel yumurta karışımı ile hazırlanmış lezzetli bir kahvaltı tabağı"
          width={1280}
          height={960}
          className="rounded-2xl shadow-lg object-cover w-full aspect-[4/3]"
        />
      </div>
    </div>
  </section>
);

export default HeroSection;
