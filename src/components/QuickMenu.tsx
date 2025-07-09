
import React, { useState } from 'react';

export const QuickMenu: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleMenuClick = () => {
    setIsExpanded(!isExpanded);
    // Add quick menu logic here
  };

  return (
    <button 
      className={`bg-[rgba(123,32,237,1)] shadow-[0px_12px_24px_rgba(0,0,0,0.91)] self-center z-10 flex mt-[-80px] sm:mt-[-90px] md:mt-[-101px] gap-2 text-lg sm:text-xl text-white font-bold px-6 sm:px-8 md:px-[30px] py-3 sm:py-4 md:py-[15px] rounded-[64px] hover:bg-[rgba(123,32,237,0.9)] transition-all ${isExpanded ? 'scale-105' : ''}`}
      onClick={handleMenuClick}
    >
      <span>Quick Menu</span>
    </button>
  );
};
