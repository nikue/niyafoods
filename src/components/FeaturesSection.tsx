import { Zap, ChefHat, Layers, Flame, Package, Clock } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Toz Formda, Pratik Kullanım",
    desc: "Sadece su ekleyip karıştırın — presleme veya süzme işlemine gerek yok.",
  },
  {
    icon: ChefHat,
    title: "Omlet, Menemen ve Daha Fazlası",
    desc: "Scramble, quiche, menemen ve birçok tarife doğrudan uyum sağlar.",
  },
  {
    icon: Layers,
    title: "Daha Yumurtamsı Deneyim",
    desc: "Tofuya kıyasla yumurta tarzı tariflerde daha tanıdık bir kıvam ve lezzet sunar.",
  },
  {
    icon: Flame,
    title: "Baharatlarla Harika Uyum",
    desc: "Pul biber, kimyon, kekik — sevdiğiniz baharatlarla mükemmel bir aroma profili oluşturur.",
  },
  {
    icon: Package,
    title: "Kolay Depolama",
    desc: "Buzdolabı gerektirmez, uzun raf ömrü. Mutfağınızda her zaman elinizin altında.",
  },
  {
    icon: Clock,
    title: "Hızlı Kahvaltı Çözümü",
    desc: "Dakikalar içinde sıcak, doyurucu bir bitkisel kahvaltı hazırlayın.",
  },
];

const FeaturesSection = () => (
  <section id="ozellikler" className="py-16 md:py-24">
    <div className="container">
      <h2 className="text-3xl md:text-4xl text-center text-foreground mb-4">
        Neden Chirp?
      </h2>
      <p className="text-center text-muted-foreground max-w-xl mx-auto mb-12">
        Pratikliğiyle mutfağınızda yeni bir dönem başlatan bitkisel yumurta
        alternatifi.
      </p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((f) => (
          <div
            key={f.title}
            className="p-6 rounded-xl bg-card border hover:shadow-lg transition-shadow"
            style={{ boxShadow: "var(--shadow-card)" }}
          >
            <div className="w-11 h-11 rounded-lg bg-accent flex items-center justify-center mb-4">
              <f.icon size={22} className="text-primary" />
            </div>
            <h3 className="font-heading text-lg text-foreground mb-2">{f.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default FeaturesSection;
