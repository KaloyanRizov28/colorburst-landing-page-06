
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="w-full fixed top-0 z-50 bg-platinum/95 backdrop-blur-sm shadow-sm">
      <div className="container mx-auto px-4 md:px-6">
        <nav className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Logo />
          </div>

          <div className="hidden md:flex items-center space-x-6">
            <button 
              onClick={() => scrollToSection('features')}
              className="text-ultra-violet hover:text-iris transition-colors"
            >
              Университети
            </button>
            <a href="#how-it-works" className="text-ultra-violet hover:text-iris transition-colors">
              Кандидат-студенти
            </a>
            <Button 
              asChild 
              className="bg-iris hover:bg-iris/80"
            >
              <a href="#download">Изтегляне</a>
            </Button>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-ultra-violet p-2"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>

        {isMenuOpen && (
          <div className="md:hidden py-4 px-4 space-y-4 bg-platinum">
            <button 
              onClick={() => scrollToSection('features')}
              className="block py-2 text-ultra-violet hover:text-iris transition-colors w-full text-left"
            >
              Университети
            </button>
            <a 
              href="#how-it-works" 
              className="block py-2 text-ultra-violet hover:text-iris transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Кандидат-студенти
            </a>
            <Button 
              asChild 
              className="w-full bg-iris hover:bg-iris/80"
              onClick={() => setIsMenuOpen(false)}
            >
              <a href="#download">Изтегляне</a>
            </Button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
