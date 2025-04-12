
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowDown, Download, Info } from "lucide-react";

const HeroSection = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [animatePhone, setAnimatePhone] = useState(false);

  useEffect(() => {
    // Start phone animation after a delay
    const phoneTimer = setTimeout(() => {
      setAnimatePhone(true);
    }, 800);

    // Handle scroll for parallax effect
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(phoneTimer);
    };
  }, []);

  const handleDownloadClick = () => {
    // Animation effect when button is clicked
    document.querySelector('.phone-container')?.classList.add('scale-105');
    setTimeout(() => {
      document.querySelector('.phone-container')?.classList.remove('scale-105');
    }, 300);
  };

  return (
    <section className="pt-24 pb-16 md:pt-32 md:pb-24 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <h1 className="main-header">
              Трансформирайте Вашето Мобилно Преживяване
            </h1>
            <p className="text-lg md:text-xl mb-8 max-w-lg text-ultra-violet/80">
              Нашето иновативно приложение ви помага да останете свързани, организирани и продуктивни с интуитивни функции, проектирани за модерния живот.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                className="cta-btn-primary group relative overflow-hidden"
                onClick={handleDownloadClick}
              >
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-iris to-ultra-violet opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                <span className="relative flex items-center">
                  <Download className="mr-2 h-5 w-5 transition-transform group-hover:translate-y-1" />
                  Изтеглете Сега
                </span>
              </Button>
              <Button className="bg-transparent border border-iris text-iris hover:bg-iris/10 transition-all duration-300 relative group">
                <span className="relative z-10 flex items-center">
                  <Info className="mr-2 h-5 w-5 transition-transform group-hover:rotate-12" />
                  Научете Повече
                </span>
              </Button>
            </div>
          </div>
          <div className="order-1 md:order-2 flex justify-center animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <div 
              className={`phone-container relative w-64 h-[530px] md:w-72 md:h-[600px] rounded-[3rem] border-8 border-ultra-violet overflow-hidden shadow-xl transition-all duration-500 ${animatePhone ? 'transform-none' : 'translate-y-8 opacity-80'}`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-iris via-myrtle-green to-iris opacity-70"></div>
              <div className={`absolute inset-0 flex flex-col items-center justify-center text-white transition-all duration-700 ${isScrolled ? 'opacity-0' : 'opacity-100'}`}>
                <span className="text-xl font-semibold mb-4">Интерфейс на Приложението</span>
                <div className="w-16 h-1 bg-white rounded-full mb-4"></div>
                <div className="grid grid-cols-3 gap-3 p-4">
                  {[1, 2, 3, 4, 5, 6].map((item) => (
                    <div 
                      key={item} 
                      className="w-12 h-12 bg-white/20 rounded-lg backdrop-blur-sm hover:bg-white/30 transition-all duration-300"
                      style={{ animationDelay: `${item * 0.1}s` }}
                    ></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex justify-center mt-16 animate-fade-in" style={{ animationDelay: "0.6s" }}>
          <a 
            href="#features" 
            className="flex flex-col items-center text-ultra-violet hover:text-iris transition-colors group"
          >
            <span className="mb-2 group-hover:transform group-hover:translate-y-1 transition-transform">Научете Повече</span>
            <ArrowDown className="animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
