import AboutSection from "@/components/parts/about-section";
import { Achievements } from "@/components/parts/achievements";
import {HeroSection} from "@/components/parts/hero-section";

export default function Home() {
  return (
    <>
      <HeroSection/>
      <Achievements />
      <AboutSection />
    </>
  );
}
