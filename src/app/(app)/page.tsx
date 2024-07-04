import AboutSection from "@/components/parts/about-section";
import { Achievements } from "@/components/parts/achievements";
import {HeroSection} from "@/components/parts/hero-section";
import ProjectSection from "@/components/parts/project-section";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <>
      <HeroSection/>
      <Achievements />
      <AboutSection />
      <ProjectSection />
    </>
  );
}
