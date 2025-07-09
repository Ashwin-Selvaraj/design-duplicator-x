
import React, { useState } from 'react';
import { Flame, Shield, UserPlus, Users, CheckSquare, Gamepad2, Trophy, ShoppingCart } from 'lucide-react';

const menuItems = [
  { icon: Flame, label: 'STREAK' },
  { icon: Shield, label: 'STAKE' },
  { icon: UserPlus, label: 'INVITE' },
  { icon: Users, label: 'SQUAD' },
  { icon: CheckSquare, label: 'TASK' },
  { icon: Gamepad2, label: 'GAMES' },
  { icon: Trophy, label: 'RANK' },
  { icon: ShoppingCart, label: 'MARKET' },
];

export const QuickMenu: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleMenuClick = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50">
      <button 
        className={`bg-[rgba(123,32,237,1)] shadow-[0px_12px_24px_rgba(0,0,0,0.91)] flex gap-2 text-lg sm:text-xl text-white font-bold px-6 sm:px-8 md:px-[30px] py-3 sm:py-4 md:py-[15px] rounded-[64px] hover:bg-[rgba(123,32,237,0.9)] transition-all ${isExpanded ? 'scale-105' : ''}`}
        onClick={handleMenuClick}
      >
        <span>Quick Menu</span>
      </button>
      
      {isExpanded && (
        <div className="absolute bottom-full mb-4 left-1/2 transform -translate-x-1/2 bg-[rgba(32,32,32,0.95)] backdrop-blur-sm rounded-2xl p-6 shadow-[0px_8px_32px_rgba(0,0,0,0.3)] border border-[rgba(255,255,255,0.1)]">
          <div className="grid grid-cols-4 gap-6 w-[320px]">
            {menuItems.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <button
                  key={index}
                  className="flex flex-col items-center gap-2 p-3 rounded-xl hover:bg-[rgba(255,255,255,0.1)] transition-all duration-200 group"
                >
                  <div className="w-10 h-10 rounded-lg bg-[rgba(255,255,255,0.1)] flex items-center justify-center group-hover:bg-[rgba(255,255,255,0.2)] transition-all">
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-xs font-semibold text-white uppercase tracking-wide">
                    {item.label}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
