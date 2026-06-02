const HowToPrepareSection = () => (
  <section id="nasil-hazirlanir" className="py-16 md:py-24 bg-accent/40">
    <div className="container max-w-2xl">
      <h2 className="text-3xl md:text-4xl text-center text-foreground mb-4">
        Chirp Nasıl Hazırlanır?
      </h2>
      <p className="text-center text-muted-foreground mb-10">
        Sadece soğuk su ekleyin ve karıştırın — birkaç dakikada hazır.
      </p>

      <div
        className="relative mx-auto rounded-xl overflow-hidden border bg-card"
        style={{ aspectRatio: "9 / 16", maxWidth: "360px" }}
      >
        <iframe
          src="https://www.youtube.com/embed/JR38eRdh0jM"
          title="Chirp Nasıl Hazırlanır"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="absolute inset-0 w-full h-full"
        />
      </div>
    </div>
  </section>
);

export default HowToPrepareSection;
