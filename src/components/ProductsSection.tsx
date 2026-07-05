import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import chirpPackage from "@/assets/chirp-package.png";

const products = [
  {
    name: "CHIRP",
    tagline: "Bitkisel Yumurta Karışımı",
    description:
      "Toz formda, pratik bir vegan yumurta alternatifi. Su ekleyin; omlet, menemen, scramble ve daha fazlasını hazırlayın.",
    image: chirpPackage,
    to: "/chirp",
    available: true,
  },
];

const ProductsSection = () => (
  <section id="urunler" className="py-16 md:py-24">
    <div className="container">
      <h2 className="text-3xl md:text-4xl text-center text-foreground mb-4">
        Ürünlerimiz
      </h2>
      <p className="text-center text-muted-foreground max-w-xl mx-auto mb-12">
        Bitkisel mutfağı kolaylaştıran ürün ailemiz sürekli büyüyor.
      </p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {products.map((p) => (
          <Link
            key={p.name}
            to={p.to}
            className="group rounded-2xl border bg-card p-6 hover:shadow-lg transition-shadow flex flex-col"
            style={{ boxShadow: "var(--shadow-card)" }}
          >
            <div className="aspect-square rounded-xl bg-accent/40 flex items-center justify-center mb-5 overflow-hidden">
              <img
                src={p.image}
                alt={`${p.name} ambalajı`}
                className="w-2/3 h-2/3 object-contain group-hover:scale-105 transition-transform"
                loading="lazy"
              />
            </div>
            <h3 className="font-heading text-2xl text-foreground mb-1">{p.name}</h3>
            <p className="text-sm text-primary font-medium mb-3">{p.tagline}</p>
            <p className="text-sm text-muted-foreground leading-relaxed mb-5 flex-1">
              {p.description}
            </p>
            <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-foreground group-hover:gap-2.5 transition-all">
              Detaylar <ArrowRight size={16} />
            </span>
          </Link>
        ))}

        <div className="rounded-2xl border-2 border-dashed border-foreground/15 p-6 flex flex-col items-center justify-center text-center min-h-[280px]">
          <p className="font-heading text-xl text-foreground mb-2">Yakında</p>
          <p className="text-sm text-muted-foreground">
            Yeni bitkisel ürünlerimiz için bizi takip edin.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default ProductsSection;
