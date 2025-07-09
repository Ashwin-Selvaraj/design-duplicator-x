import React from 'react';

interface GameCardProps {
  imageUrl: string;
  title: string;
  className?: string;
}

export const GameCard: React.FC<GameCardProps> = ({ imageUrl, title, className = "" }) => {
  return (
    <div className={`shadow-[0px_5px_4px_rgba(0,0,0,0.25)] self-stretch w-[119px] my-auto rounded-[7px] ${className}`}>
      <div className="bg-[rgba(248,248,248,0.05)] flex items-stretch overflow-hidden px-px rounded-[7px]">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/25b6f327ff424639b45449f8a174839d/8559cde1d85afa8752521dd1ea31d0054ba77f05?placeholderIfAbsent=true"
          className="aspect-[0.99] object-contain w-[100px] mr-[-68px] shrink-0 max-w-full mt-[9px]"
          alt=""
        />
        <div className="bg-[rgba(248,248,248,0.05)] flex flex-col overflow-hidden items-stretch flex-1 p-[9px] rounded-[7px]">
          <img
            src={imageUrl}
            className="aspect-[1] object-contain w-[100px]"
            alt={title}
          />
          <div className="self-center mt-[7px] text-[9px] text-[rgba(224,221,221,1)] font-semibold leading-none">
            {title}
          </div>
        </div>
      </div>
    </div>
  );
};
