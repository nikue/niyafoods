const ingredients =
  "Buğday glüteni, buğday unu, tuz, şeker, maya ekstraktı, aroma verici, nişasta.";

const nutrition = [
  { label: "Enerji", value: "1516 kJ / 362 kcal" },
  { label: "Yağ", value: "1,7 g" },
  { label: "Doymuş yağ", value: "0,3 g" },
  { label: "Karbonhidrat", value: "28,0 g" },
  { label: "Şekerler", value: "0,5 g" },
  { label: "Protein", value: "59,0 g" },
  { label: "Tuz", value: "0,9 g" },
];

const WhiteNutritionSection = () => (
  <section id="icindekiler" className="py-16 md:py-24">
    <div className="container max-w-4xl">
      <h2 className="text-3xl md:text-4xl text-center text-foreground mb-12">
        İçindekiler ve Beslenme Değerleri
      </h2>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="rounded-lg border bg-card p-6">
          <h3 className="font-heading text-xl text-primary mb-3">İçindekiler</h3>
          <p className="text-foreground leading-relaxed">{ingredients}</p>
          <p className="text-foreground leading-relaxed mt-4">
            WHITE, yüksek proteinli, yağsız ve tamamen bitkisel bir beyaz et
            alternatifidir. Sade içeriğiyle alternatiflerine göre daha ekonomik
            bir seçenek sunar ve ek hazırlık süresi gerektirmez. 90g kuru
            karışım, yaklaşık 200g hazırlanmış seitan verir.
          </p>
        </div>

        <div className="rounded-lg border bg-card p-6">
          <h3 className="font-heading text-xl text-primary mb-3">
            Beslenme Değerleri
          </h3>
          <p className="text-sm text-muted-foreground mb-3">100 g için</p>
          <table className="w-full text-sm">
            <tbody>
              {nutrition.map((n) => (
                <tr key={n.label} className="border-b last:border-0">
                  <td className="py-2 text-foreground">{n.label}</td>
                  <td className="py-2 text-right font-medium text-foreground">
                    {n.value}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </section>
);

export default WhiteNutritionSection;
