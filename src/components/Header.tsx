
import React from 'react';

interface HeaderProps {
  time?: string;
}

export const Header: React.FC<HeaderProps> = ({ time = "7:11" }) => {
  return (
    <header className="self-center flex w-full max-w-[267px] items-center gap-4 sm:gap-5 md:gap-[23px] overflow-hidden px-2 sm:px-0">
      <div className="text-white text-sm sm:text-base md:text-[17px] font-semibold leading-none tracking-[-0.5px] text-center self-stretch grow my-auto">
        {time}
      </div>
      <div className="bg-black self-stretch flex w-20 sm:w-28 md:w-[124px] shrink-0 h-7 sm:h-8 md:h-[35px] rounded-[18px]" />
      <div className="self-stretch flex items-stretch gap-1.5 sm:gap-2 md:gap-[7px] my-auto">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/25b6f327ff424639b45449f8a174839d/3080fcfd7ae92ea9c700917900fbfa9e183911e8?placeholderIfAbsent=true"
          className="aspect-[1.58] object-contain w-4 sm:w-5 md:w-[19px] shrink-0"
          alt="Signal indicator"
        />
        <img
          src="https://cdn.builder.io/api/v1/image/assets/25b6f327ff424639b45449f8a174839d/b3c729613c0df9416416de87962647c2f6840585?placeholderIfAbsent=true"
          className="aspect-[1.42] object-contain w-3.5 sm:w-4 md:w-[17px] shrink-0"
          alt="Battery indicator"
        />
      </div>
    </header>
  );
};
