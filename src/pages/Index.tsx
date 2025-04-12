
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ExpectationsSection from "@/components/ExpectationsSection";
import FeaturesSection from "@/components/FeaturesSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import DownloadSection from "@/components/DownloadSection";
import Footer from "@/components/Footer";
import { useEffect, useState, useRef } from "react";

const Index = () => {
  const [activeSection, setActiveSection] = useState("hero");
  const sectionsRef = useRef<{
    [key: string]: HTMLElement | null;
  }>({});

  useEffect(() => {
    sectionsRef.current = {
      hero: document.getElementById("hero"),
      expectations: document.getElementById("expectations"),
      features: document.getElementById("features"),
      howItWorks: document.getElementById("how-it-works"),
      download: document.getElementById("download")
    };

    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1
    };
    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          const sectionId = entry.target.id;
          if (sectionId) setActiveSection(sectionId);
        }
      });
    };
    const observer = new IntersectionObserver(handleIntersect, observerOptions);
    const reveals = document.querySelectorAll('.reveal');
    reveals.forEach(reveal => observer.observe(reveal));

    const handleScroll = () => {
      const parallaxElements = document.querySelectorAll('.parallax');
      parallaxElements.forEach(element => {
        const speed = element.getAttribute('data-speed') || "0.5";
        const scrollTop = window.scrollY || document.documentElement.scrollTop;
        const yPos = -(scrollTop * parseFloat(speed));
        element.setAttribute('style', `transform: translateY(${yPos}px)`);
      });
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      reveals.forEach(reveal => observer.unobserve(reveal));
    };
  }, []);

  return <div className="min-h-screen bg-gradient-to-b from-platinum to-white relative overflow-hidden">
      <div className="fixed -top-20 -right-20 w-96 h-96 rounded-full bg-screamin-green/10 blur-3xl animate-pulse parallax" data-speed="0.2"></div>
      <div className="fixed top-1/2 -left-20 w-80 h-80 rounded-full bg-iris/10 blur-3xl animate-pulse parallax" data-speed="0.3" style={{
      animationDelay: "1s"
    }}></div>
      <div className="fixed bottom-0 right-1/4 w-64 h-64 rounded-full bg-myrtle-green/10 blur-3xl animate-pulse parallax" data-speed="0.4" style={{
      animationDelay: "2s"
    }}></div>
      
      <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-50 hidden md:flex flex-col gap-4">
        {["hero", "expectations", "features", "how-it-works", "download"].map(section => <a key={section} href={`#${section}`} className={`w-3 h-3 rounded-full border border-iris transition-all duration-300 ${activeSection === section ? "bg-iris scale-125" : "bg-transparent hover:bg-iris/50"}`} aria-label={`Jump to ${section.replace(/-/g, " ")} section`} />)}
      </div>
      
      <Navbar />
      <main>
        <div className="relative">
          <div id="hero" className="reveal active">
            <HeroSection />
          </div>
          
          <div className="reveal" id="expectations">
            <ExpectationsSection />
          </div>
          
          <div className="reveal" id="features">
            <FeaturesSection />
          </div>
          
          <div className="reveal" id="how-it-works">
            <HowItWorksSection />
          </div>
          <div className="reveal" id="download">
            <DownloadSection />
          </div>
        </div>
      </main>
      <Footer />
    </div>;
};

export default Index;
