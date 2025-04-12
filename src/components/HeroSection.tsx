
import { useState, useEffect } from "react";
import { ArrowDown } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";

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

  return (
    <section className="pt-24 pb-16 md:pt-32 md:pb-24 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1 animate-fade-in" style={{
            animationDelay: "0.2s"
          }}>
            <h1 className="main-header">Твоят университет на едно място</h1>
            <p className="text-lg md:text-xl mb-8 max-w-lg text-ultra-violet/80">Студентската платформа за свързаност, ангажираност и информираност.</p>
          </div>
          <div className="order-1 md:order-2 flex justify-center animate-fade-in" style={{
            animationDelay: "0.4s"
          }}>
            <div className={`phone-container relative w-64 h-[530px] md:w-72 md:h-[600px] rounded-[3rem] border-8 border-ultra-violet overflow-hidden shadow-xl transition-all duration-500 ${animatePhone ? 'transform-none' : 'translate-y-8 opacity-80'}`}>
              <div className="absolute inset-0 bg-gradient-to-br from-iris via-myrtle-green to-iris opacity-70"></div>
              
              {/* Phone interface with app screenshot */}
              <div className="absolute inset-0 p-3">
                <div className="h-full w-full bg-white/90 rounded-3xl overflow-hidden flex flex-col">
                  {/* Phone status bar */}
                  <div className="h-6 bg-ultra-violet/10 flex items-center justify-between px-4">
                    <div className="text-[10px] font-medium">12:45</div>
                    <div className="flex space-x-1">
                      <div className="w-3 h-3 rounded-full bg-ultra-violet/20"></div>
                      <div className="w-3 h-3 rounded-full bg-ultra-violet/20"></div>
                    </div>
                  </div>
                  
                  {/* Content area with app screenshot image */}
                  <div className="flex-1 p-2">
                    <AspectRatio ratio={9 / 16} className="bg-white rounded-lg overflow-hidden shadow-sm">
                      <img 
                        src="/lovable-uploads/50228073-0a91-4175-9f96-f37efd705353.png" 
                        alt="megdan App Interface" 
                        className="w-full h-full object-cover"
                      />
                    </AspectRatio>
                  </div>
                  
                  {/* Bottom navigation */}
                  <div className="h-12 bg-ultra-violet/5 flex justify-evenly items-center px-2">
                    <div className="w-8 h-8 rounded-full bg-ultra-violet/10 flex items-center justify-center">
                      <div className="w-3 h-3 rounded-sm bg-iris/60"></div>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-ultra-violet/10 flex items-center justify-center">
                      <div className="w-3 h-3 rounded-full bg-iris/60"></div>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-ultra-violet/10 flex items-center justify-center">
                      <div className="w-3 h-3 bg-iris/60" style={{
                        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 50% 65%, 0% 100%)"
                      }}></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={`absolute inset-0 flex flex-col items-center justify-center text-white transition-all duration-700 ${isScrolled ? 'opacity-0' : 'opacity-100'}`}>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="flex justify-center mt-16 animate-fade-in" style={{
        animationDelay: "0.6s"
      }}>
        <a href="#features" className="flex flex-col items-center text-ultra-violet hover:text-iris transition-colors group">
          <span className="mb-2 group-hover:transform group-hover:translate-y-1 transition-transform">Научете Повече</span>
          <ArrowDown className="animate-bounce" />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
