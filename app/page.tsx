import HeroSection from "@/components/home/hero-section";
import PartnerLogos from "@/components/home/partner-logos";
import CoursesSection from "@/components/home/courses-section";
import LearningPathsSection from "@/components/home/learning-paths-section";
import ProfessionalGrowthSection from "@/components/home/professional-growth-section";
import CreatorCta from "@/components/home/creator-cta";
import TestimonialsSection from "@/components/home/testimonials-section";
import SiteFooter from "@/components/layout/site-footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <HeroSection />
      <PartnerLogos />
      <CoursesSection />
      <LearningPathsSection />
      <ProfessionalGrowthSection />
      <CreatorCta />
      <TestimonialsSection />
      <SiteFooter />
    </main>
  );
}
