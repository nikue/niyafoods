import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "@/components/Navbar";
import NiyaHeroSection from "@/components/NiyaHeroSection";
import ProductsSection from "@/components/ProductsSection";
import SalesSection from "@/components/SalesSection";
import SocialSection from "@/components/SocialSection";
import Footer from "@/components/Footer";

const Index = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (!hash) return;
    const el = document.querySelector(hash);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [hash]);

  return (
    <>
      <Navbar />
      <NiyaHeroSection />
      <ProductsSection />
      <SalesSection />
      <SocialSection />
      <Footer />
    </>
  );
};

export default Index;
