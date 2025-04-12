import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import DownloadSection from "@/components/DownloadSection";
import Footer from "@/components/Footer";
import { useEffect, useState, useRef } from "react";
const Index = () => {
  const [scrollWidth, setScrollWidth] = useState(0);
  const [activeSection, setActiveSection] = useState("hero");
  const sectionsRef = useRef<{
    [key: string]: HTMLElement | null;
  }>({});

  // More interactive scroll animations
  useEffect(() => {
    // Register sections for intersection observer
    sectionsRef.current = {
      hero: document.getElementById("hero"),
      features: document.getElementById("features"),
      howItWorks: document.getElementById("how-it-works"),
      download: document.getElementById("download")
    };

    // Reveal animation on scroll with Intersection Observer
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

    // Scroll progress indicator
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollProgress = scrollTop / totalHeight * 100;
      setScrollWidth(scrollProgress);

      // Parallax effect for background elements
      const parallaxElements = document.querySelectorAll('.parallax');
      parallaxElements.forEach(element => {
        const speed = element.getAttribute('data-speed') || "0.5";
        const yPos = -(scrollTop * parseFloat(speed));
        element.setAttribute('style', `transform: translateY(${yPos}px)`);
      });
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Trigger on initial load

    return () => {
      window.removeEventListener('scroll', handleScroll);
      reveals.forEach(reveal => observer.unobserve(reveal));
    };
  }, []);
  return <div className="min-h-screen bg-gradient-to-b from-platinum to-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="fixed -top-20 -right-20 w-96 h-96 rounded-full bg-screamin-green/10 blur-3xl animate-pulse parallax" data-speed="0.2"></div>
      <div className="fixed top-1/2 -left-20 w-80 h-80 rounded-full bg-iris/10 blur-3xl animate-pulse parallax" data-speed="0.3" style={{
      animationDelay: "1s"
    }}></div>
      <div className="fixed bottom-0 right-1/4 w-64 h-64 rounded-full bg-myrtle-green/10 blur-3xl animate-pulse parallax" data-speed="0.4" style={{
      animationDelay: "2s"
    }}></div>
      
      {/* Scroll progress indicator */}
      <div className="scroll-indicator" style={{
      width: `${scrollWidth}%`
    }}></div>
      
      {/* Navigation dots for section indication */}
      <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-50 hidden md:flex flex-col gap-4">
        {["hero", "features", "how-it-works", "download"].map(section => <a key={section} href={`#${section}`} className={`w-3 h-3 rounded-full border border-iris transition-all duration-300 ${activeSection === section ? "bg-iris scale-125" : "bg-transparent hover:bg-iris/50"}`} aria-label={`Jump to ${section.replace(/-/g, " ")} section`} />)}
      </div>
      
      <Navbar />
      <main>
        <div className="relative">
          <div id="hero" className="reveal active">
            <HeroSection />
          </div>
          
          <div className="reveal" id="features">
            {/* Second phone on the left side before Features section */}
            <div className="container mx-auto px-4 md:px-6 py-12 relative overflow-hidden">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="flex justify-center perspective">
                  <div className="relative w-64 h-[530px] md:w-72 md:h-[600px] rounded-[3rem] border-8 border-ultra-violet overflow-hidden shadow-xl transform -rotate-6 hover:rotate-0 transition-transform duration-500">
                    <div className="absolute inset-0 bg-gradient-to-tr from-screamin-green via-myrtle-green to-iris opacity-70"></div>
                    <div className="absolute inset-0 flex items-center justify-center text-white text-xl font-semibold">
                      Преглед на Функциите
                    </div>
                  </div>
                </div>
                <div>
                  <h2 className="sub-header">Какво да очаквате?</h2>
                  <p className="mb-6 text-ultra-violet/80 text-lg font-normal text-left">🎯 Университетски админ панел</p>
                  <p className="mb-6 text-ultra-violet/80 text-lg font-normal text-left">📱 Мобилно приложение за студенти</p>
                  <p className="mb-6 text-ultra-violet/80 text-lg font-normal text-left">🔍 Стажове при партньори по интереси и специалност</p>
                </div>
              </div>
            </div>
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