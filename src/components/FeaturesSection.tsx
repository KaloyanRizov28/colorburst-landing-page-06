
import { useState } from "react";
import { Smartphone, Shield, Zap, Compass, ChevronRight } from "lucide-react";

const features = [
  {
    icon: <Smartphone className="w-10 h-10 text-iris" />,
    title: "Интуитивен Интерфейс",
    description: "Проектиран с простота, нашето приложение предлага безпроблемно потребителско изживяване от първия поглед.",
    details: "Нашият интуитивен интерфейс е създаден с принципи на потребителски-ориентиран дизайн, осигурявайки естествени и лесни взаимодействия. Чистият оформление поставя най-важните задачи на преден план, като намалява когнитивното натоварване."
  },
  {
    icon: <Shield className="w-10 h-10 text-iris" />,
    title: "Сигурна Платформа",
    description: "Вашите данни са защитени с водещо в индустрията криптиране и мерки за поверителност.",
    details: "Прилагаме криптиране на ниво банкови системи с 256-битова защита, редовни security одити и строги контроли за достъп. Вашата лична информация никога не се споделя с трети страни."
  },
  {
    icon: <Zap className="w-10 h-10 text-iris" />,
    title: "Светкавично Бързо",
    description: "Оптимизирана производителност, която осигурява гладка работа дори по време на максимално натоварване.",
    details: "Приложението е разработено с фокус върху производителността, използвайки ефективни алгоритми и оптимизиран код. Процесите са проектирани да минимизират разхода на батерия."
  },
  {
    icon: <Compass className="w-10 h-10 text-iris" />,
    title: "Интелигентна Навигация",
    description: "Намерете каквото ви трябва мигновено с нашата интелигентна навигационна система и персонализирани препоръки.",
    details: "Системата за навигация научава от вашите навици и предвижда какво търсите, преди да сте започнали да търсите. AI-базираните препоръки се адаптират към вашите предпочитания."
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
          <h2 className="sub-header">Мощни Функции</h2>
          <p className="text-lg text-ultra-violet/70 max-w-2xl mx-auto">
            Открийте какво прави нашето приложение да се отличава от останалите с тези внимателно разработени функции.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className={`
                bg-white p-6 rounded-xl shadow-md 
                transform transition-all duration-500 ease-in-out 
                cursor-pointer overflow-hidden
                ${activeFeature === index 
                  ? 'scale-105 shadow-xl bg-gradient-to-br from-white to-iris/5' 
                  : 'hover:scale-105 hover:shadow-xl hover:bg-gradient-to-br hover:from-white hover:to-iris/5'}
                group
              `}
              onMouseEnter={() => setActiveFeature(index)}
              onMouseLeave={() => setActiveFeature(null)}
            >
              <div className="mb-4 transform transition-transform duration-300 ease-out group-hover:scale-110 group-hover:rotate-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-ultra-violet transition-colors duration-300 ease-out group-hover:text-iris">
                {feature.title}
              </h3>
              <p className="text-ultra-violet/70 transition-colors duration-300 ease-out group-hover:text-ultra-violet/90">
                {feature.description}
              </p>
              
              <div 
                className={`
                  mt-4 overflow-hidden transition-all duration-500 ease-in-out
                  ${activeFeature === index 
                    ? 'max-h-96 opacity-100 transform translate-y-0' 
                    : 'max-h-0 opacity-0 transform translate-y-10'}
                `}
              >
                <p className="text-sm text-ultra-violet/80 mb-3">{feature.details}</p>
                <button className="
                  flex items-center 
                  text-iris hover:text-iris/80 
                  transition-all duration-300 
                  text-sm font-medium
                  transform hover:translate-x-1
                ">
                  Научете повече <ChevronRight className="w-4 h-4 ml-1 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
