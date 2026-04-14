import { ShoppingBag, Store, Utensils } from "lucide-react";
import veganIstasyonLogo from "@/assets/vegan-istasyon-logo.png";

const retailers = [
  { name: "Vegan İstasyon", address: "veganistasyon.com", link: "https://veganistasyon.com", logo: veganIstasyonLogo },
  { name: "Yakında eklenecek", address: "—", link: "#", logo: null },
  { name: "Yakında eklenecek", address: "—", link: "#", logo: null },
];

const restaurants = [
  { name: "Yakında eklenecek", address: "—", link: "#" },
  { name: "Yakında eklenecek", address: "—", link: "#" },
  { name: "Yakında eklenecek", address: "—", link: "#" },
];

const SalesSection = () => (
  <section id="satis-noktalari" className="py-16 md:py-24 bg-accent/40">
    <div className="container">
      <h2 className="text-3xl md:text-4xl text-center text-foreground mb-4">
        Nereden Alınır?
      </h2>
      <p className="text-center text-muted-foreground max-w-xl mx-auto mb-12">
        Chirp'ü online veya size en yakın satış noktasından temin edebilirsiniz.
      </p>

      {/* Trendyol CTA */}
      <div
        className="max-w-md mx-auto mb-14 p-6 rounded-xl bg-card border text-center"
        style={{ boxShadow: "var(--shadow-card)" }}
      >
        <ShoppingBag size={32} className="mx-auto mb-3 text-primary" />
        <h3 className="font-heading text-xl text-foreground mb-2">
          Trendyol Mağazası
        </h3>
        <p className="text-sm text-muted-foreground mb-4">
          Chirp'ü hemen Trendyol üzerinden sipariş verin.
        </p>
        <a
          href="https://www.trendyol.com/PLACEHOLDER"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity"
        >
          Trendyol'dan Satın Al
        </a>
      </div>

      {/* Retailers & Restaurants */}
      <div className="grid md:grid-cols-2 gap-10">
        <div>
          <div className="flex items-center gap-2 mb-6">
            <Store size={20} className="text-primary" />
            <h3 className="font-heading text-xl text-foreground">
              Perakende Satış Noktaları
            </h3>
          </div>
          <div className="space-y-3">
            {retailers.map((r, i) => (
              <a
                key={i}
                href={r.link}
                target={r.link.startsWith("http") ? "_blank" : undefined}
                rel={r.link.startsWith("http") ? "noopener noreferrer" : undefined}
                className="flex items-center justify-center p-4 rounded-lg bg-card border hover:shadow-md transition-shadow"
              >
                {r.logo ? (
                  <img src={r.logo} alt={r.name} className="h-16 md:h-20 w-auto object-contain" loading="lazy" />
                ) : (
                  <p className="font-medium text-muted-foreground">{r.name}</p>
                )}
              </a>
            ))}
          </div>
        </div>

        <div>
          <div className="flex items-center gap-2 mb-6">
            <Utensils size={20} className="text-primary" />
            <h3 className="font-heading text-xl text-foreground">
              Restoranlar & İşletmeler
            </h3>
          </div>
          <div className="space-y-3">
            {restaurants.map((r, i) => (
              <a
                key={i}
                href={r.link}
                className="flex items-center justify-between p-4 rounded-lg bg-card border hover:shadow-md transition-shadow"
              >
                <div>
                  <p className="font-medium text-foreground">{r.name}</p>
                  <p className="text-xs text-muted-foreground">{r.address}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default SalesSection;
