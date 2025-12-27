import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { WhyChooseSection } from './components/WhyChooseSection';
import { DemoSection } from './components/DemoSection';
import { HowItWorksSection } from './components/HowItWorksSection';
import { PricingSection } from './components/PricingSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
export default function App() {
  return (
    <div className="min-h-screen bg-gray-950">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <WhyChooseSection />
        <DemoSection />
        <HowItWorksSection />
        <PricingSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}