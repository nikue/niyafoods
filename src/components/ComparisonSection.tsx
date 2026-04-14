import { Check, Minus, Circle } from "lucide-react";

const rows = [
  {
    label: "Hazırlık kolaylığı",
    chirp: "Su ekle, karıştır — hazır",
    tofu: "Presleme ve ufalama gerekir",
    chickpea: "Karıştırma yeterli, ama kıvam denemesi gerekebilir",
  },
  {
    label: "Omlet / menemen uyumu",
    chirp: "Doğrudan hazırlanabilir",
    tofu: "Kıvam farkı olabilir",
    chickpea: "Krep benzeri sonuç verebilir",
  },
  {
    label: "Kıvam kontrolü",
    chirp: "Su oranıyla kolayca ayarlanır",
    tofu: "Sertlik değişkenlik gösterebilir",
    chickpea: "Yoğunluk ayarı zor olabilir",
  },
  {
    label: "Baharatla uyum",
    chirp: "Aromaları iyi emer",
    tofu: "Marine süresi gerekebilir",
    chickpea: "Nohut aroması baskın kalabilir",
  },
  {
    label: "Depolama / pratiklik",
    chirp: "Kuru, oda sıcaklığında saklanır",
    tofu: "Buzdolabı gerektirir",
    chickpea: "Kuru, oda sıcaklığında saklanır",
  },
  {
    label: "Tarif standardizasyonu",
    chirp: "Her seferinde tutarlı sonuç",
    tofu: "Markaya göre değişebilir",
    chickpea: "Oran ayarı pratik gerektirir",
  },
];

const ComparisonSection = () => (
  <section id="ozellikler" className="py-16 md:py-24 bg-accent/40">
    <div className="container">
      <h2 className="text-3xl md:text-4xl text-center text-foreground mb-4">
        Neden Chirp?
      </h2>
      <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
        Omlet, menemen ve scramble gibi yumurta tarzı tariflerde en çok
        kullanılan üç bitkisel alternatifi yan yana karşılaştırdık. Her
        malzemenin güçlü yanları var — Chirp özellikle pratiklik ve tutarlı
        sonuç konusunda öne çıkıyor.
      </p>

      <div className="overflow-x-auto -mx-4 px-4">
        <table className="w-full max-w-4xl mx-auto text-sm">
          <thead>
            <tr className="border-b">
              <th className="text-left py-3 pr-4 text-muted-foreground font-medium" />
              <th className="py-3 px-4 font-heading text-lg text-primary">
                Chirp
              </th>
              <th className="py-3 px-4 font-heading text-lg text-muted-foreground">
                Tofu
              </th>
              <th className="py-3 pl-4 font-heading text-lg text-muted-foreground">
                Nohut Unu
              </th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.label} className="border-b last:border-0">
                <td className="py-3.5 pr-4 font-medium text-foreground whitespace-nowrap">
                  {r.label}
                </td>
                <td className="py-3.5 px-4 text-foreground">
                  <span className="flex items-start gap-2">
                    <Check
                      size={16}
                      className="text-secondary mt-0.5 shrink-0"
                    />
                    {r.chirp}
                  </span>
                </td>
                <td className="py-3.5 px-4 text-muted-foreground">
                  <span className="flex items-start gap-2">
                    <Minus size={16} className="mt-0.5 shrink-0" />
                    {r.tofu}
                  </span>
                </td>
                <td className="py-3.5 pl-4 text-muted-foreground">
                  <span className="flex items-start gap-2">
                    <Circle size={14} className="mt-0.5 shrink-0" />
                    {r.chickpea}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </section>
);

export default ComparisonSection;
