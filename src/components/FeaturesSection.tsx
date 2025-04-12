
import { Smartphone, Shield, Zap, Compass } from "lucide-react";

const features = [
  {
    icon: <Smartphone className="w-10 h-10 text-iris" />,
    title: "Intuitive Interface",
    description: "Designed with simplicity in mind, our app offers a seamless user experience that feels natural from the first use."
  },
  {
    icon: <Shield className="w-10 h-10 text-iris" />,
    title: "Secure Platform",
    description: "Your data is protected with industry-leading encryption and privacy measures to ensure complete security."
  },
  {
    icon: <Zap className="w-10 h-10 text-iris" />,
    title: "Lightning Fast",
    description: "Optimized performance ensures the app runs smoothly even during peak usage times with minimal battery drain."
  },
  {
    icon: <Compass className="w-10 h-10 text-iris" />,
    title: "Smart Navigation",
    description: "Find what you need instantly with our intelligent navigation system and personalized recommendations."
  }
];

const FeaturesSection = () => {
  return (
    <section id="features" className="section-padding">
      <div className="container mx-auto px-4 md:px-6">
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
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all hover:-translate-y-1"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-ultra-violet">{feature.title}</h3>
              <p className="text-ultra-violet/70">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
