
import { Facebook, Twitter, Instagram, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-platinum py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-xl font-bold text-iris mb-4">AppName</h3>
            <p className="text-ultra-violet/70 mb-4 max-w-sm">
              Our mission is to deliver an exceptional mobile experience that enhances your daily life through innovative technology.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-iris hover:text-iris/80 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-iris hover:text-iris/80 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-iris hover:text-iris/80 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-iris hover:text-iris/80 transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-ultra-violet mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#features" className="text-ultra-violet/70 hover:text-iris transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="text-ultra-violet/70 hover:text-iris transition-colors">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#download" className="text-ultra-violet/70 hover:text-iris transition-colors">
                  Download
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-ultra-violet mb-4">Support</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-ultra-violet/70 hover:text-iris transition-colors">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="text-ultra-violet/70 hover:text-iris transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-ultra-violet/70 hover:text-iris transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-ultra-violet/70 hover:text-iris transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-ultra-violet/10 mt-12 pt-6 text-center text-ultra-violet/60">
          <p>&copy; {new Date().getFullYear()} AppName. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
