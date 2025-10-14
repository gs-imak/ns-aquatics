import { Navigation } from "@/components/navigation";
import { HeroSection } from "@/components/hero-section";
import { ServicesSection } from "@/components/services-section";
import { SuccessStories } from "@/components/success-stories";
import { PricingSection } from "@/components/pricing-section";
import { ProgramGenerator } from "@/components/program-generator";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <ServicesSection />
      <SuccessStories />
      <PricingSection />
      <ProgramGenerator />
      <ContactSection />
      <Footer />
    </main>
  );
}
