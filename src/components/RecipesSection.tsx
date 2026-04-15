import { useState } from "react";
import scrambleImg from "@/assets/recipe-scramble.jpg";
import omletImg from "@/assets/recipe-omlet.jpg";
import menemenImg from "@/assets/recipe-menemen.jpg";
import sucukluImg from "@/assets/recipe-sucuklu.jpg";
import quicheImg from "@/assets/recipe-quiche.jpg";
import frittataImg from "@/assets/recipe-frittata.jpg";
import { ChevronDown, ChevronUp } from "lucide-react";

interface Recipe {
  id: string;
  title: string;
  teaser: string;
  img: string;
  ingredients: string[];
  steps: string[];
}

const recipes: Recipe[] = [
  {
    id: "scramble",
    title: "Sebzeli Scramble",
    teaser: "Renkli sebzelerle hafif ve doyurucu bir bitkisel kahvaltı.",
    img: scrambleImg,
    ingredients: [
      "3 yemek kaşığı (45 ml) Chirp tozu",
      "9 yemek kaşığı (135 ml) soğuk su (buzdolabından veya su sebilinden)",
      "1/2 kırmızı biber (küp doğranmış)",
      "1 avuç ıspanak",
      "4-5 mantar (dilimlenmiş)",
      "1 yemek kaşığı zeytinyağı",
      "Tuz, karabiber, zerdeçal",
    ],
    steps: [
      "Chirp tozunu su ile pürüzsüz olana dek karıştırın.",
      "Tavada zeytinyağını kızdırın, sebzeleri 2-3 dk soteleyin.",
      "Karışımı ekleyin, spatula ile karıştırarak scramble kıvamına getirin.",
      "Baharatlarla tatlandırıp sıcak servis edin.",
    ],
  },
  {
    id: "omlet",
    title: "Mantarlı & Vegan Peynirli Omlet",
    teaser: "Altın rengi, kabarık ve peynirli — klasik omletin bitkisel hali.",
    img: omletImg,
    ingredients: [
      "4 yemek kaşığı (60 ml) Chirp tozu",
      "12 yemek kaşığı (180 ml) soğuk su (buzdolabından veya su sebilinden)",
      "5-6 mantar (dilimlenmiş)",
      "2 yemek kaşığı vegan peynir (rendelenmiş)",
      "1 yemek kaşığı zeytinyağı",
      "Tuz, karabiber",
    ],
    steps: [
      "Chirp tozunu su ile iyice çırpın.",
      "Tavada yağı kızdırıp mantarları soteleyin, kenara alın.",
      "Aynı tavaya karışımı dökün, kısık ateşte pişirin.",
      "Üzerine mantar ve vegan peynir ekleyip ikiye katlayın.",
      "1-2 dk daha pişirip servis edin.",
    ],
  },
  {
    id: "menemen",
    title: "Menemen",
    teaser: "Türk kahvaltısının vazgeçilmezi, bitkisel versiyonuyla.",
    img: menemenImg,
    ingredients: [
      "3 yemek kaşığı (45 ml) Chirp tozu",
      "9 yemek kaşığı (135 ml) soğuk su (buzdolabından veya su sebilinden)",
      "2 domates (küp doğranmış)",
      "2 sivri biber (ince doğranmış)",
      "1 soğan (ince doğranmış)",
      "1 yemek kaşığı zeytinyağı",
      "Pul biber, tuz",
    ],
    steps: [
      "Soğan ve biberleri zeytinyağında kavurun.",
      "Domatesleri ekleyin, suyunu salıp yumuşayana dek pişirin.",
      "Chirp tozunu su ile karıştırıp tavaya ekleyin.",
      "Karıştırarak menemen kıvamına getirin, pul biber serpin.",
    ],
  },
  {
    id: "sucuklu",
    title: "Vegan Sucuklu Yumurta",
    teaser: "Baharatlı vegan sucukla buluşan klasik lezzet.",
    img: sucukluImg,
    ingredients: [
      "3 yemek kaşığı (45 ml) Chirp tozu",
      "9 yemek kaşığı (135 ml) soğuk su (buzdolabından veya su sebilinden)",
      "4-5 dilim vegan sucuk",
      "1 yemek kaşığı zeytinyağı",
      "Pul biber, kekik",
    ],
    steps: [
      "Vegan sucuğu tavada her iki yüzü kızarana dek pişirin.",
      "Chirp tozunu su ile çırpın.",
      "Sucukların arasına karışımı dökün.",
      "Kısık ateşte, hafif karıştırarak pişirin.",
      "Pul biber ve kekik ile servis edin.",
    ],
  },
  {
    id: "quiche",
    title: "Sebzeli Kiş (Quiche)",
    teaser: "Brunch sofralarının yıldızı, çıtır hamurda bitkisel dolgu.",
    img: quicheImg,
    ingredients: [
      "5 yemek kaşığı (75 ml) Chirp tozu",
      "15 yemek kaşığı (225 ml) soğuk su (buzdolabından veya su sebilinden)",
      "100 ml bitkisel krema",
      "1 hazır kiş hamuru",
      "1 avuç ıspanak, 1/2 biber, 1/4 soğan",
      "Tuz, karabiber, muskat",
    ],
    steps: [
      "Fırını 180°C'ye ısıtın. Hamuru kalıba yerleştirin.",
      "Sebzeleri küçük doğrayıp hafifçe soteleyin.",
      "Chirp tozunu su ve bitkisel krema ile karıştırın.",
      "Sebzeleri hamura yerleştirin, karışımı üzerine dökün.",
      "30-35 dk altın rengi olana dek pişirin.",
    ],
  },
];

const RecipesSection = () => {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <section id="tarifler" className="py-16 md:py-24">
      <div className="container">
        <h2 className="text-3xl md:text-4xl text-center text-foreground mb-4">
          Tarif İlhamı
        </h2>
        <p className="text-center text-muted-foreground max-w-xl mx-auto mb-12">
          Chirp ile hazırlayabileceğiniz lezzetli tarifler.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {recipes.map((r) => {
            const isOpen = openId === r.id;
            return (
              <div
                key={r.id}
                className="rounded-xl bg-card border overflow-hidden flex flex-col transition-shadow hover:shadow-lg"
                style={{ boxShadow: "var(--shadow-card)" }}
              >
                <img
                  src={r.img}
                  alt={r.title}
                  loading="lazy"
                  width={640}
                  height={640}
                  className="w-full aspect-square object-cover"
                />
                <div className="p-5 flex flex-col flex-1">
                  <h3 className="font-heading text-lg text-foreground mb-1">
                    {r.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 flex-1">
                    {r.teaser}
                  </p>

                  <button
                    onClick={() => setOpenId(isOpen ? null : r.id)}
                    className="inline-flex items-center gap-1 text-sm font-semibold text-primary hover:opacity-80 transition-opacity"
                  >
                    {isOpen ? "Kapat" : "Tarifi İncele"}
                    {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                  </button>

                  {isOpen && (
                    <div className="mt-4 pt-4 border-t text-sm space-y-3 animate-fade-in-up">
                      <div>
                        <h4 className="font-semibold text-foreground mb-1 font-body">
                          Malzemeler
                        </h4>
                        <ul className="list-disc list-inside text-muted-foreground space-y-0.5">
                          {r.ingredients.map((i, idx) => (
                            <li key={idx}>{i}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1 font-body">
                          Hazırlanışı
                        </h4>
                        <ol className="list-decimal list-inside text-muted-foreground space-y-0.5">
                          {r.steps.map((s, idx) => (
                            <li key={idx}>{s}</li>
                          ))}
                        </ol>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default RecipesSection;
