import whitePan from "@/assets/white-pan-seitan.jpg.asset.json";
import whiteBowl from "@/assets/white-bowl.jpg.asset.json";
import whiteMushroom from "@/assets/white-mushroom.jpg.asset.json";

const dishes = [
  {
    img: whitePan.url,
    title: "Tavada Kızarmış WHITE Lokmaları",
    desc: "Zeytinyağı, karabiber ve tuzla marine edilmiş, lokmalık boyda tavada altın rengi olana kadar kızartılmış klasik seitan.",
  },
  {
    img: whiteBowl.url,
    title: "WHITE Buddha Bowl",
    desc: "Pirinç üzerine avokado, edamame, havuç, mor lahana, mango ve nori ile susamlı, kızarmış WHITE lokmaları.",
  },
  {
    img: whiteMushroom.url,
    title: "Kremalı Mantarlı WHITE",
    desc: "Bitkisel krema ve taze mantarla sote edilmiş yumuşacık WHITE parçaları; sade pilav ile servis.",
  },
];

const WhiteDishesSection = () => (
  <section id="tarifler" className="py-16 md:py-24">
    <div className="container">
      <h2 className="text-3xl md:text-4xl text-center text-foreground mb-4">
        WHITE ile Ne Yapılır?
      </h2>
      <p className="text-center text-muted-foreground max-w-xl mx-auto mb-12">
        Beyaz et tadında, esnek dokusuyla WHITE her mutfağa uyar — bowl'dan
        kremalı soslara, tavadan salatalara.
      </p>

      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {dishes.map((d) => (
          <article
            key={d.title}
            className="rounded-2xl overflow-hidden bg-card border"
            style={{ boxShadow: "var(--shadow-card)" }}
          >
            <div className="aspect-[4/5] overflow-hidden">
              <img
                src={d.img}
                alt={d.title}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="p-5">
              <h3 className="font-heading text-lg text-foreground mb-2">
                {d.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {d.desc}
              </p>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default WhiteDishesSection;
