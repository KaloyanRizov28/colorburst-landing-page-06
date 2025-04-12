
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const steps = [
  {
    number: "01",
    title: "Download the App",
    description: "Get our app from the App Store or Google Play Store with just one click."
  },
  {
    number: "02",
    title: "Create an Account",
    description: "Set up your profile in seconds and customize your preferences."
  },
  {
    number: "03",
    title: "Explore Features",
    description: "Discover all the tools and features available to enhance your experience."
  }
];

const benefits = [
  "Save up to 10 hours each week",
  "Reduce stress with automated organization",
  "Connect with your network seamlessly",
  "Access important information instantly"
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="section-padding bg-ultra-violet text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6">How It Works</h2>
            <p className="text-white/80 mb-8 text-lg">
              Getting started is simple. Follow these steps to transform your mobile experience today.
            </p>
            
            <div className="space-y-8">
              {steps.map((step, index) => (
                <div key={index} className="flex">
                  <div className="mr-6">
                    <div className="w-12 h-12 rounded-full bg-iris flex items-center justify-center font-bold text-white">
                      {step.number}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                    <p className="text-white/70">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-iris/10 p-8 rounded-xl border border-iris/30">
            <h3 className="text-2xl font-semibold mb-6">Why Choose Our App?</h3>
            
            <div className="space-y-4 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start">
                  <div className="mr-3 mt-1">
                    <Check className="w-5 h-5 text-screamin-green" />
                  </div>
                  <p>{benefit}</p>
                </div>
              ))}
            </div>
            
            <Button className="w-full bg-screamin-green hover:bg-screamin-green/90 text-ultra-violet">
              Get Started Today
            </Button>
          </div>
        </div>
      </div>
      
      {/* Decorative element */}
      <div className="absolute -bottom-20 -right-20 w-64 h-64 rounded-full bg-iris/20 blur-3xl"></div>
    </section>
  );
};

export default HowItWorksSection;
