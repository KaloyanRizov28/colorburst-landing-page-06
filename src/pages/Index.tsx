
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import DownloadSection from "@/components/DownloadSection";
import Footer from "@/components/Footer";
import { useEffect, useState } from "react";

const Index = () => {
  const [scrollWidth, setScrollWidth] = useState(0);

  // Scroll animations and scroll progress indicator
  useEffect(() => {
    // Reveal animation on scroll
    const handleScroll = () => {
      const reveals = document.querySelectorAll('.reveal');
      const windowHeight = window.innerHeight;
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const totalHeight = document.documentElement.scrollHeight - windowHeight;
      const scrollProgress = (scrollTop / totalHeight) * 100;
      
      setScrollWidth(scrollProgress);
      
      reveals.forEach((reveal) => {
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
      {/* Scroll progress indicator */}
      <div className="scroll-indicator" style={{ width: `${scrollWidth}%` }}></div>
      
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
