
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import BenefitsSection from '@/components/BenefitsSection';
import HowItWorksSection from '@/components/HowItWorksSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import FeaturesSection from '@/components/FeaturesSection';
import FaqSection from '@/components/FaqSection';
import CtaSection from '@/components/CtaSection';
import Footer from '@/components/Footer';
import { useEffect } from 'react';

const Index = () => {
  useEffect(() => {
    // Adiciona uma classe ao body para efeitos globais
    document.body.classList.add('bg-gradient-pattern');
    
    // Limpa ao desmontar
    return () => {
      document.body.classList.remove('bg-gradient-pattern');
    };
  }, []);

  return (
    <div className="min-h-screen font-sans overflow-x-hidden">
      {/* Dynamic background gradient */}
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-chatcapacita-light-purple/10 via-transparent to-chatcapacita-light-blue/5 pointer-events-none -z-10"></div>
      
      {/* Animated background elements - subtle education themed shapes */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-1/4 left-10 w-64 h-64 bg-chatcapacita-light-yellow rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"></div>
        <div className="absolute top-2/3 right-10 w-80 h-80 bg-chatcapacita-light-blue rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-float" style={{animationDuration: '15s'}}></div>
        <div className="absolute bottom-1/4 left-1/3 w-40 h-40 bg-chatcapacita-light-green rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-float" style={{animationDuration: '20s', animationDelay: '2s'}}></div>
      </div>
      
      <Navbar />
      <main>
        <HeroSection />
        <BenefitsSection />
        <HowItWorksSection />
        <TestimonialsSection />
        <FeaturesSection />
        <FaqSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
