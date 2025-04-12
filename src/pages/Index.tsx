
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
        <div className="reveal" id="features">
          {/* Second phone on the left side before Features section */}
          <div className="container mx-auto px-4 md:px-6 py-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="flex justify-center">
                <div className="relative w-64 h-[530px] md:w-72 md:h-[600px] rounded-[3rem] border-8 border-ultra-violet overflow-hidden shadow-xl transform -rotate-6">
                  <div className="absolute inset-0 bg-gradient-to-tr from-screamin-green via-myrtle-green to-iris opacity-70"></div>
                  <div className="absolute inset-0 flex items-center justify-center text-white text-xl font-semibold">
                    Feature Overview
                  </div>
                </div>
              </div>
              <div>
                <h2 className="sub-header">Discover Amazing Features</h2>
                <p className="text-lg mb-6 text-ultra-violet/80">
                  Our app is packed with powerful features to enhance your mobile experience. 
                  Explore the intuitive interface and seamless functionality designed with you in mind.
                </p>
              </div>
            </div>
          </div>
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
