import { Check, Minus } from "lucide-react";

const rows = [
  { label: "Hazırlık kolaylığı", chirp: "Su ekle, karıştır — hazır", tofu: "Presleme ve ufalama gerekir" },
  { label: "Omlet / menemen uyumu", chirp: "Doğrudan hazırlanabilir", tofu: "Kıvam farkı olabilir" },
  { label: "Kıvam kontrolü", chirp: "Su oranıyla kolayca ayarlanır", tofu: "Sertlik değişkenlik gösterebilir" },
  { label: "Baharatla uyum", chirp: "Aromaları iyi emer", tofu: "Marine süresi gerekebilir" },
  { label: "Depolama / pratiklik", chirp: "Kuru, oda sıcaklığında saklanır", tofu: "Buzdolabı gerektirir" },
  { label: "Tarif standardizasyonu", chirp: "Her seferinde tutarlı sonuç", tofu: "Markaya göre değişebilir" },
];

const ComparisonSection = () => (
  <section className="py-16 md:py-24 bg-accent/40">
    <div className="container">
      <h2 className="text-3xl md:text-4xl text-center text-foreground mb-4">
        Neden Tofu Yerine Chirp?
      </h2>
      <p className="text-center text-muted-foreground max-w-xl mx-auto mb-12">
        Yumurta tarzı tarifler için pratik bir karşılaştırma. Tofu harika bir
        malzeme — ama yumurta taklidi söz konusu olduğunda Chirp farklı bir
        deneyim sunar.
      </p>

      <div className="overflow-x-auto">
        <table className="w-full max-w-3xl mx-auto text-sm">
          <thead>
            <tr className="border-b">
              <th className="text-left py-3 pr-4 text-muted-foreground font-medium"></th>
              <th className="py-3 px-4 font-heading text-lg text-primary">Chirp</th>
              <th className="py-3 pl-4 font-heading text-lg text-muted-foreground">Tofu</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.label} className="border-b last:border-0">
                <td className="py-3.5 pr-4 font-medium text-foreground">{r.label}</td>
                <td className="py-3.5 px-4 text-foreground">
                  <span className="flex items-start gap-2">
                    <Check size={16} className="text-secondary mt-0.5 shrink-0" />
                    {r.chirp}
                  </span>
                </td>
                <td className="py-3.5 pl-4 text-muted-foreground">
                  <span className="flex items-start gap-2">
                    <Minus size={16} className="mt-0.5 shrink-0" />
                    {r.tofu}
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
