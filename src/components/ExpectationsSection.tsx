
import React from "react";

const ExpectationsSection = () => {
  return (
    <section id="expectations" className="section-padding bg-white">
      <div className="container mx-auto px-4 md:px-6 py-12 relative overflow-hidden">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="flex justify-center perspective">
            <div className="relative w-64 h-[530px] md:w-72 md:h-[600px] rounded-[3rem] border-8 border-ultra-violet overflow-hidden shadow-xl transform -rotate-6 hover:rotate-0 transition-transform duration-500">
              {/* Add the app screenshot inside the phone frame */}
              <img 
                src="/lovable-uploads/7c70572d-45f3-42ab-b188-3682561a5c82.png"
                alt="Megdan App Interface"
                className="w-full h-full object-cover"
              />
              
              {/* Optional overlay gradient to match the phone styling in HeroSection */}
              <div className="absolute inset-0 bg-gradient-to-br from-iris/10 via-transparent to-iris/10 opacity-30 pointer-events-none"></div>
            </div>
          </div>
          <div>
            <h2 className="sub-header">Какво да очаквате?</h2>
            <p className="mb-6 text-ultra-violet/80 text-lg font-normal text-left">💬 Чат в реално време с твоите групи</p>
            <p className="mb-6 text-ultra-violet/80 text-lg font-normal text-left">📅 Личен календар със събития от групите ти</p>
            <p className="mb-6 text-ultra-violet/80 text-lg font-normal text-left">🔍 Стажове при партньори по интереси и специалност</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpectationsSection;
