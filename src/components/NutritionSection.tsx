const ingredients =
  "Mısır nişastası, pirinç proteini, kıvamlaştırıcı: metilselüloz, jelleştirici: kappa karagenan, kala namak, besin mayası, renklendirici: beta-karoten.";

const nutrition = [
  { label: "Enerji", value: "1330 kJ / 318 kcal" },
  { label: "Yağ", value: "1,6 g" },
  { label: "Doymuş yağ", value: "0,5 g" },
  { label: "Karbonhidrat", value: "41,6 g" },
  { label: "Şekerler", value: "0,1 g" },
  { label: "Protein", value: "23,2 g" },
  { label: "Tuz", value: "10,7 g" },
];

const NutritionSection = () => (
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
            CHIRP yüksek proteinli, yağsız ve tamamen bitkisel bir yumurta
            alternatifidir. Yaygın alerjenler içermez; rengini doğal
            beta-karotenden, yumurtamsı aromasını ise kala namak ve besin
            mayasından alır. Sade içeriğiyle kahvaltılarda, tariflerde ve
            profesyonel mutfaklarda pratik bir çözüm sunar.
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

export default NutritionSection;
