import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { SubHero } from "@/components/SubHero";
import { ProductSwiper } from "@/components/ProductSwiper";
import { FocusGrid } from "@/components/FocusGrid";
import { ItalianHeart } from "@/components/ItalianHeart";
import { MosaicGrid } from "@/components/MosaicGrid";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <SubHero />
        <ProductSwiper />
        <FocusGrid />
        <ItalianHeart />
        <MosaicGrid />
      </main>
      <Footer />
    </>
  );
}
