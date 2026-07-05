import whitePackage from "@/assets/white-package.png.asset.json";
import whitePan from "@/assets/white-pan-seitan.jpg.asset.json";
import { Leaf, Clock, Dumbbell, MapPin } from "lucide-react";

const badges = [
  { icon: Dumbbell, label: "Porsiyon başına 34g Protein" },
  { icon: Clock, label: "15 Dakikada Hazır" },
  { icon: Leaf, label: "Vegan" },
  { icon: MapPin, label: "Yerli Üretim" },
];

const WhiteHeroSection = () => (
  <section
    id="urun"
    className="pt-24 pb-16 md:pt-32 md:pb-24"
    style={{ background: "var(--gradient-hero)" }}
  >
    <div className="container grid md:grid-cols-2 gap-10 items-center">
      <div className="relative flex flex-col items-center gap-6">
        <img
          src={whitePan.url}
          alt="WHITE seitan karışımı ile tavada pişirilmiş beyaz et tadında lezzetli lokmalar"
          width={1140}
          height={1520}
          className="rounded-2xl shadow-lg object-cover w-full aspect-[4/5]"
        />
        <img
          src={whitePackage.url}
          alt="WHITE bitkisel seitan toz karışımı ambalajı"
          className="absolute -bottom-8 -left-4 w-32 md:w-44 drop-shadow-2xl object-contain"
        />
      </div>

      <div className="space-y-6">
        <h1 className="text-4xl md:text-5xl lg:text-6xl leading-tight text-foreground">
          WHITE
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-lg">
          Beyaz et tadında, yüksek proteinli bitkisel seitan toz karışımı. Su
          ekle, yoğur, tavada pişir — 15 dakikada porsiyon başına 34g protein
          içeren, ekonomik ve pratik bir vegan alternatif.
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
            href="/#satis-noktalari"
            className="inline-flex items-center px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity"
          >
            Satın Al
          </a>
          <a
            href="#nasil-hazirlanir"
            className="inline-flex items-center px-6 py-3 rounded-lg border-2 border-foreground/15 text-foreground font-semibold hover:bg-accent transition-colors"
          >
            Nasıl Hazırlanır?
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default WhiteHeroSection;
