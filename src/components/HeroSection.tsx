
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="pt-24 pb-16 md:pt-32 md:pb-24 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <h1 className="main-header">
              Transform Your Mobile Experience
            </h1>
            <p className="text-lg md:text-xl mb-8 max-w-lg text-ultra-violet/80">
              Our innovative app helps you stay connected, organized, and productive with intuitive features designed for modern life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="cta-btn-primary">
                Download Now
              </Button>
              <Button className="bg-transparent border border-iris text-iris hover:bg-iris/10">
                Learn More
              </Button>
            </div>
          </div>
          <div className="order-1 md:order-2 flex justify-center animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <div className="relative w-64 h-[530px] md:w-72 md:h-[600px] rounded-[3rem] border-8 border-ultra-violet overflow-hidden shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-br from-iris via-myrtle-green to-iris opacity-70"></div>
              <div className="absolute inset-0 flex items-center justify-center text-white text-xl font-semibold">
                App Interface
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex justify-center mt-16 animate-fade-in" style={{ animationDelay: "0.6s" }}>
          <a 
            href="#features" 
            className="flex flex-col items-center text-ultra-violet hover:text-iris transition-colors"
          >
            <span className="mb-2">Learn More</span>
            <ArrowDown className="animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
