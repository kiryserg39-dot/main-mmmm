import { HeroSection } from "@/components/home/HeroSection";
import { InulinSection } from "@/components/home/InulinSection";
import { AdvantagesSection } from "@/components/home/AdvantagesSection";
import { CategoriesSection } from "@/components/home/CategoriesSection";
import { BestsellersSection } from "@/components/home/BestsellersSection";
import { ReviewsSection } from "@/components/home/ReviewsSection";
import { CtaSection } from "@/components/home/CtaSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <InulinSection />
      <AdvantagesSection />
      <CategoriesSection />
      <BestsellersSection />
      <ReviewsSection />
      <CtaSection />
    </>
  );
}
