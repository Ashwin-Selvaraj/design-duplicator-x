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
    <article className="bg-[rgba(21,20,20,0.52)] flex w-full items-stretch gap-3 overflow-hidden px-[17px] py-4 rounded-lg hover:bg-[rgba(21,20,20,0.65)] transition-colors">
      <img
        src={imageUrl}
        className="aspect-[1] object-contain w-20 shrink-0 rounded-xl"
        alt={title}
      />
      <div className="flex flex-col">
        <h3 className="text-white text-base font-bold">
          {title}
        </h3>
        <p className="text-[rgba(201,193,193,1)] text-xs font-normal">
          Max Point{" "}
          <span style={{ fontWeight: 600, color: 'rgba(213,255,0,1)' }}>
            {maxPoints}
          </span>
        </p>
        <div className="bg-white self-stretch flex items-stretch gap-5 text-[10px] text-black font-semibold uppercase leading-none justify-between mt-2 px-5 py-2.5 rounded-[3px]">
          <span>Your rank</span>
          <span>{rank}</span>
        </div>
      </div>
    </article>
  );
};
