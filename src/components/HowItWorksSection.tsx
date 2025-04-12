
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const steps = [
  {
    number: "01",
    title: "Изтеглете Приложението",
    description: "Вземете нашето приложение от App Store или Google Play Store само с един клик."
  },
  {
    number: "02",
    title: "Създайте Акаунт",
    description: "Настройте профила си за секунди и персонализирайте предпочитанията си."
  },
  {
    number: "03",
    title: "Разгледайте Функциите",
    description: "Открийте всички инструменти и функции, налични за подобряване на вашето изживяване."
  }
];

const benefits = [
  "Спестете до 10 часа всяка седмица",
  "Намалете стреса с автоматизирана организация",
  "Свържете се с вашата мрежа безпроблемно",
  "Достъп до важна информация моментално"
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="section-padding bg-ultra-violet text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6">Как Работи</h2>
            <p className="text-white/80 mb-8 text-lg">
              Започването е просто. Следвайте тези стъпки, за да трансформирате мобилното си изживяване днес.
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
            <h3 className="text-2xl font-semibold mb-6">Защо Да Изберете Нашето Приложение?</h3>
            
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
              Започнете Днес
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
