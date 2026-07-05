const steps = [
  {
    n: 1,
    title: "Karıştır",
    text: "90g WHITE tozunu 110 mL su ile bir kaseye alın. Hamur topu oluşana kadar kaşıkla karıştırmaya devam edin.",
  },
  {
    n: 2,
    title: "Yoğur",
    text: "Hamuru elinizle, tüm kuru noktalar kaybolana kadar kasede birkaç kez yoğurun.",
  },
  {
    n: 3,
    title: "Parçalara Ayır",
    text: "Hamuru küçük, lokmalık parçalara ayırın. Böylece dışı güzelce kızarır, içi lif lif olur.",
  },
  {
    n: 4,
    title: "Tavada Pişir",
    text: "1 yemek kaşığı yağ ile orta-yüksek ateşte her iki yüzünü 3–5 dakika, kızarana kadar tavada pişirin.",
  },
  {
    n: 5,
    title: "Buharda Dinlendir",
    text: "Ardından kapağını kapatıp kısık ateşte 5–10 dakika buharda pişmeye bırakın. Servise hazır.",
  },
];

const WhiteHowToPrepareSection = () => (
  <section id="nasil-hazirlanir" className="py-16 md:py-24 bg-accent/40">
    <div className="container max-w-3xl">
      <h2 className="text-3xl md:text-4xl text-center text-foreground mb-4">
        WHITE Nasıl Hazırlanır?
      </h2>
      <p className="text-center text-muted-foreground mb-10">
        90 g kuru karışım + 110 mL su. Yaklaşık 15 dakikada, 200g hazır seitan.
      </p>

      <ol className="space-y-4">
        {steps.map((s) => (
          <li
            key={s.n}
            className="flex gap-4 rounded-xl border bg-card p-5"
          >
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-primary-foreground font-heading text-lg flex items-center justify-center">
              {s.n}
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-1">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {s.text}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  </section>
);

export default WhiteHowToPrepareSection;
