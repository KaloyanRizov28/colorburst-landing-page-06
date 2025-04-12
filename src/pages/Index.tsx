
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import DownloadSection from "@/components/DownloadSection";
import Footer from "@/components/Footer";
import { useEffect } from "react";

const Index = () => {
  // Simple reveal animation on scroll
  useEffect(() => {
    const handleScroll = () => {
      const reveals = document.querySelectorAll('.reveal');
      
      reveals.forEach((reveal) => {
        const windowHeight = window.innerHeight;
        const elementTop = reveal.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
          reveal.classList.add('active');
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Trigger on initial load
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <div className="reveal">
          <FeaturesSection />
        </div>
        <div className="reveal">
          <HowItWorksSection />
        </div>
        <div className="reveal">
          <DownloadSection />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
