import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import WhiteHeroSection from "@/components/WhiteHeroSection";
import WhiteNutritionSection from "@/components/WhiteNutritionSection";
import WhiteHowToPrepareSection from "@/components/WhiteHowToPrepareSection";
import WhiteDishesSection from "@/components/WhiteDishesSection";
import Footer from "@/components/Footer";

const White = () => {
  useEffect(() => {
    document.title = "WHITE – Seitan Toz Karışımı | Niya Foods";
  }, []);

  return (
    <>
      <Navbar />
      <WhiteHeroSection />
      <WhiteNutritionSection />
      <WhiteHowToPrepareSection />
      <WhiteDishesSection />
      <Footer />
    </>
  );
};

export default White;
