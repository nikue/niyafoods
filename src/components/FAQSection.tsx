import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Chirp nedir?",
    a: "Chirp, bitkisel kaynaklardan üretilen toz formda bir vegan yumurta karışımıdır. Su eklenerek omlet, menemen, scramble ve benzeri yumurta tarzı tarifler için kullanılabilir.",
  },
  {
    q: "Nasıl kullanılır?",
    a: "Ambalaj üzerindeki ölçülere göre Chirp tozunu suyla karıştırın, birkaç dakika bekletin ve ardından tıpkı yumurta gibi tavada pişirin. Tarifine göre oran ayarlaması yapabilirsiniz.",
  },
  {
    q: "Tofu yerine neden tercih edebilirim?",
    a: "Tofu harika bir bitkisel protein kaynağıdır. Ancak yumurta taklidi tariflerde Chirp, presleme gerektirmeden doğrudan kullanılabilir ve yumurtaya daha yakın bir kıvam ile lezzet sunar.",
  },
  {
    q: "Hangi tariflerde kullanılabilir?",
    a: "Omlet, menemen, scramble, sucuklu yumurta, kiş (quiche), frittata ve benzeri yumurta bazlı tariflerin bitkisel versiyonlarında rahatlıkla kullanabilirsiniz.",
  },
  {
    q: "Nereden satın alabilirim?",
    a: "Chirp'ü Trendyol mağazamızdan online sipariş edebilirsiniz. Perakende satış noktaları ve iş birliği yapılan restoranlar yakında bu sayfada paylaşılacaktır.",
  },
  {
    q: "Saklama koşulları nedir?",
    a: "Açılmamış ambalajı serin ve kuru bir ortamda saklayın. Açıldıktan sonra ağzını sıkıca kapatarak oda sıcaklığında muhafaza edebilirsiniz. Buzdolabı gerektirmez.",
  },
];

const FAQSection = () => (
  <section id="sss" className="py-16 md:py-24 bg-accent/40">
    <div className="container max-w-2xl">
      <h2 className="text-3xl md:text-4xl text-center text-foreground mb-10">
        Sıkça Sorulan Sorular
      </h2>

      <Accordion type="single" collapsible className="space-y-2">
        {faqs.map((f, i) => (
          <AccordionItem
            key={i}
            value={`faq-${i}`}
            className="bg-card border rounded-lg px-5"
          >
            <AccordionTrigger className="text-left font-medium text-foreground hover:no-underline">
              {f.q}
            </AccordionTrigger>
            <AccordionContent className="text-sm text-muted-foreground leading-relaxed">
              {f.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </section>
);

export default FAQSection;
