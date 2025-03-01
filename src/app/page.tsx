import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { HeroSection } from "@/components/hero-section";
import { FeaturesSection } from "@/components/features-section";
import { HowItWorksSection } from "@/components/how-it-works-section";
import { TestimonialsSection } from "@/components/testimonials-section";
import { ResourcesSection } from "@/components/resources-section";
import { CTASection } from "@/components/cta-section";
import { NewsletterSection } from "@/components/newsletter-section";
import { ScrollToTop } from "@/components/scroll-to-top";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-1">
        <HeroSection />
        <FeaturesSection />
        <HowItWorksSection />
        <TestimonialsSection />
        <ResourcesSection />
        <NewsletterSection />
        <CTASection />
      </main>

      <Footer />
      <ScrollToTop />
    </div>
  );
}
