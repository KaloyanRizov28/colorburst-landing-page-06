
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full fixed top-0 z-50 bg-platinum/95 backdrop-blur-sm shadow-sm">
      <div className="container mx-auto px-4 md:px-6">
        <nav className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a href="#" className="flex items-center">
              <img 
                src="/lovable-uploads/0c906054-f39e-494c-b0a4-9ad0c6c8bddf.png" 
                alt="Megdan Logo" 
                className="h-10 text-iris"
              />
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <a href="#features" className="text-ultra-violet hover:text-iris transition-colors">
              Features
            </a>
            <a href="#how-it-works" className="text-ultra-violet hover:text-iris transition-colors">
              How It Works
            </a>
            <a href="#download" className="text-ultra-violet hover:text-iris transition-colors">
              Download
            </a>
            <Button className="bg-iris hover:bg-iris/80 ml-2">Get Started</Button>
          </div>

          {/* Mobile Menu Button */}
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

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 px-4 space-y-4 bg-platinum">
            <a 
              href="#features" 
              className="block py-2 text-ultra-violet hover:text-iris transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Features
            </a>
            <a 
              href="#how-it-works" 
              className="block py-2 text-ultra-violet hover:text-iris transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              How It Works
            </a>
            <a 
              href="#download" 
              className="block py-2 text-ultra-violet hover:text-iris transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Download
            </a>
            <Button 
              className="w-full bg-iris hover:bg-iris/80 mt-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Get Started
            </Button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
