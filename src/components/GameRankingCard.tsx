
import React from 'react';

interface GameRankingCardProps {
  imageUrl: string;
  title: string;
  maxPoints: string;
  rank: string;
}

export const GameRankingCard: React.FC<GameRankingCardProps> = ({
  imageUrl,
  title,
  maxPoints,
  rank
}) => {
  return (
    <article className="bg-[rgba(21,20,20,0.52)] flex w-full items-stretch gap-2 sm:gap-3 overflow-hidden px-3 sm:px-4 md:px-[17px] py-3 sm:py-4 rounded-lg hover:bg-[rgba(21,20,20,0.65)] transition-colors">
      <img
        src={imageUrl}
        className="aspect-[1] object-contain w-16 sm:w-18 md:w-20 shrink-0 rounded-xl"
        alt={title}
      />
      <div className="flex flex-col flex-1 min-w-0">
        <h3 className="text-white text-sm sm:text-base font-bold truncate">
          {title}
        </h3>
        <p className="text-[rgba(201,193,193,1)] text-xs font-normal">
          Max Point{" "}
          <span style={{ fontWeight: 600, color: 'rgba(213,255,0,1)' }}>
            {maxPoints}
          </span>
        </p>
        <div className="bg-white self-stretch flex items-stretch gap-3 sm:gap-5 text-[9px] sm:text-[10px] text-black font-semibold uppercase leading-none justify-between mt-2 px-3 sm:px-5 py-2 sm:py-2.5 rounded-[3px]">
          <span>Your rank</span>
          <span>{rank}</span>
        </div>
      </div>
    </article>
  );
};
