
import { useState } from "react";
import { Smartphone, Shield, Zap, Compass, ChevronRight } from "lucide-react";

const features = [
  {
    icon: <Smartphone className="w-10 h-10 text-iris" />,
    title: "Intuitive Interface",
    description: "Designed with simplicity in mind, our app offers a seamless user experience that feels natural from the first use.",
    details: "Our intuitive interface is crafted with user-centered design principles, ensuring that every interaction feels natural and effortless. The clean layout puts your most important tasks front and center, reducing cognitive load and making navigation a breeze."
  },
  {
    icon: <Shield className="w-10 h-10 text-iris" />,
    title: "Secure Platform",
    description: "Your data is protected with industry-leading encryption and privacy measures to ensure complete security.",
    details: "We implement bank-level 256-bit encryption, regular security audits, and strict data access controls. Your personal information is never shared with third parties, and you maintain full control over your privacy settings."
  },
  {
    icon: <Zap className="w-10 h-10 text-iris" />,
    title: "Lightning Fast",
    description: "Optimized performance ensures the app runs smoothly even during peak usage times with minimal battery drain.",
    details: "Our app is built with performance in mind, using efficient algorithms and optimized code to deliver responses in milliseconds. Background processes are designed to minimize battery usage, giving you hours of additional device uptime."
  },
  {
    icon: <Compass className="w-10 h-10 text-iris" />,
    title: "Smart Navigation",
    description: "Find what you need instantly with our intelligent navigation system and personalized recommendations.",
    details: "The smart navigation system learns from your usage patterns to predict what you're looking for before you even search. AI-powered recommendations adapt to your preferences over time, becoming more accurate with each interaction."
  }
];

const FeaturesSection = () => {
  const [activeFeature, setActiveFeature] = useState<number | null>(null);

  return (
    <section id="features" className="section-padding relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-platinum to-white opacity-50 pointer-events-none"></div>
      
      {/* Animated background elements */}
      <div className="absolute -top-20 right-10 w-64 h-64 rounded-full bg-iris/10 blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 left-10 w-72 h-72 rounded-full bg-screamin-green/10 blur-3xl animate-pulse" style={{ animationDelay: "1.5s" }}></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="sub-header">Powerful Features</h2>
          <p className="text-lg text-ultra-violet/70 max-w-2xl mx-auto">
            Discover what makes our app stand out from the crowd with these carefully crafted features.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className={`bg-white p-6 rounded-xl shadow-md transition-all duration-300 
                          ${activeFeature === index ? 'scale-105 shadow-xl' : 'hover:shadow-lg hover:-translate-y-1'}`}
              onMouseEnter={() => setActiveFeature(index)}
              onMouseLeave={() => setActiveFeature(null)}
            >
              <div className="mb-4 transform transition-transform duration-300 hover:scale-110">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-ultra-violet">{feature.title}</h3>
              <p className="text-ultra-violet/70">{feature.description}</p>
              
              {activeFeature === index && (
                <div className="mt-4 overflow-hidden animate-fade-in">
                  <p className="text-sm text-ultra-violet/80 mb-3">{feature.details}</p>
                  <button className="flex items-center text-iris hover:text-iris/80 transition-colors text-sm font-medium">
                    Learn more <ChevronRight className="w-4 h-4 ml-1" />
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
