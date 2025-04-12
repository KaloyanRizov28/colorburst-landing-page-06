
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full fixed top-0 z-50 bg-platinum/95 backdrop-blur-sm shadow-sm">
      <div className="container mx-auto px-4 md:px-6">
        <nav className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Logo />
          </div>

          <div className="hidden md:flex items-center space-x-6">
            <a href="#features" className="text-ultra-violet hover:text-iris transition-colors">
              Университети
            </a>
            <a href="#how-it-works" className="text-ultra-violet hover:text-iris transition-colors">
              Кандидат-студенти
            </a>
            <a href="#download" className="text-ultra-violet hover:text-iris transition-colors">
              Изтегляне
            </a>
            <Button className="bg-iris hover:bg-iris/80 ml-2">Започнете</Button>
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
            <a 
              href="#features" 
              className="block py-2 text-ultra-violet hover:text-iris transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Университети
            </a>
            <a 
              href="#how-it-works" 
              className="block py-2 text-ultra-violet hover:text-iris transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Кандидат-студенти
            </a>
            <a 
              href="#download" 
              className="block py-2 text-ultra-violet hover:text-iris transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Изтегляне
            </a>
            <Button 
              className="w-full bg-iris hover:bg-iris/80 mt-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Започнете
            </Button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
