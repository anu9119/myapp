import AboutSection from "@/components/parts/about-section";
import { Achievements } from "@/components/parts/achievements";
import { ContactSection } from "@/components/parts/contact-section";
import {HeroSection} from "@/components/parts/hero-section";
import ProjectSection from "@/components/parts/project-section";

export default function Home() {
  return (
    <>
      <HeroSection/>
      <Achievements />
      <AboutSection />
      <ProjectSection />
      <ContactSection />
    </>
  );
}
