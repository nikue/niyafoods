import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ComparisonSection from "@/components/ComparisonSection";
import NutritionSection from "@/components/NutritionSection";
import HowToPrepareSection from "@/components/HowToPrepareSection";
import RecipesSection from "@/components/RecipesSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";

const Chirp = () => {
  useEffect(() => {
    document.title = "CHIRP – Bitkisel Yumurta Karışımı | Niya Foods";
  }, []);

  return (
    <>
      <Navbar />
      <HeroSection />
      <ComparisonSection />
      <NutritionSection />
      <HowToPrepareSection />
      <RecipesSection />
      <FAQSection />
      <Footer />
    </>
  );
};

export default Chirp;
