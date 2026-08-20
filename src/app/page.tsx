import { BarcelonaSection } from "@/components/sections/barcelona-section";
import { BookingSection } from "@/components/sections/booking-section";
import { DuoSection } from "@/components/sections/duo-section";
import { ExperienceSection } from "@/components/sections/experience-section";
import { GallerySection } from "@/components/sections/gallery-section";
import { HeroSection } from "@/components/sections/hero-section";
import { PrestigeSection } from "@/components/sections/prestige-section";
import { ShowSection } from "@/components/sections/show-section";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ShowSection />
      <DuoSection />
      <ExperienceSection />
      <PrestigeSection />
      <GallerySection />
      <BarcelonaSection />
      <BookingSection />
    </>
  );
}
