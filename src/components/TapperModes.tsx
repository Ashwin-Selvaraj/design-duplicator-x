
import React from 'react';

export const TapperModes: React.FC = () => {
  return (
    <section className="bg-[rgba(33,33,33,0.77)] flex min-h-36 sm:min-h-40 md:min-h-44 w-full max-w-[363px] flex-col mt-3 sm:mt-4 md:mt-5 px-2 sm:px-3 md:px-[11px] py-4 sm:py-5 md:py-[21px] rounded-[9px]">
      <header className="w-full text-xs sm:text-sm text-white font-extrabold text-center leading-none">
        <div className="bg-[rgba(33,33,33,0.77)] flex items-center gap-8 sm:gap-20 md:gap-[162px] justify-center">
          <h2 className="self-stretch my-auto">
            TAPPER MODES
          </h2>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/25b6f327ff424639b45449f8a174839d/dcbb55d6345388192df3e9f48f56ab65625281f0?placeholderIfAbsent=true"
            className="aspect-[1.15] object-contain w-3 sm:w-4 md:w-[15px] self-stretch shrink-0 my-auto"
            alt="More options"
          />
        </div>
      </header>
      <div className="bg-[rgba(33,33,33,0.77)] flex min-h-20 sm:min-h-24 md:min-h-[100px] w-full items-center gap-1.5 sm:gap-2 md:gap-2.5 mt-4 sm:mt-5 md:mt-[21px] justify-center">
        <button className="hover:scale-105 transition-transform">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/25b6f327ff424639b45449f8a174839d/dc6be586248beb43a7f7d8f1837374c2e8c0ca11?placeholderIfAbsent=true"
            className="aspect-[1.03] object-contain w-20 sm:w-24 md:w-[103px] self-stretch shrink-0 my-auto rounded-md"
            alt="Tapper mode 1"
          />
        </button>
        <button className="hover:scale-105 transition-transform">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/25b6f327ff424639b45449f8a174839d/ef701c2df038351fc1d7e3ff1ba5d4ccc39554ad?placeholderIfAbsent=true"
            className="aspect-[1.03] object-contain w-20 sm:w-24 md:w-[103px] self-stretch shrink-0 my-auto rounded-md"
            alt="Tapper mode 2"
          />
        </button>
        <button className="hover:scale-105 transition-transform">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/25b6f327ff424639b45449f8a174839d/3b7a2e8a2eb62adab1a9064e5d5bec6328f82736?placeholderIfAbsent=true"
            className="aspect-[1.03] object-contain w-20 sm:w-24 md:w-[103px] self-stretch shrink-0 my-auto rounded-md"
            alt="Tapper mode 3"
          />
        </button>
      </div>
    </section>
  );
};
