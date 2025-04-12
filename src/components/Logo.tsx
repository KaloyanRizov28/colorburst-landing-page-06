
import React from "react";

const Logo = () => {
  return (
    <a href="/" className="flex items-center">
      <img 
        src="/lovable-uploads/0c906054-f39e-494c-b0a4-9ad0c6c8bddf.png" 
        alt="Megdan Logo" 
        className="h-24 w-auto object-contain" // Increased from h-16 to h-24
      />
    </a>
  );
};

export default Logo;
