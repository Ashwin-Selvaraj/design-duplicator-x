import React from 'react';
import { GameCard } from './GameCard';

export const ArcadeGames: React.FC = () => {
  const games = [
    { id: 1, imageUrl: "https://cdn.builder.io/api/v1/image/assets/25b6f327ff424639b45449f8a174839d/8559cde1d85afa8752521dd1ea31d0054ba77f05?placeholderIfAbsent=true", title: "RACE CAR" },
    { id: 2, imageUrl: "https://cdn.builder.io/api/v1/image/assets/25b6f327ff424639b45449f8a174839d/8559cde1d85afa8752521dd1ea31d0054ba77f05?placeholderIfAbsent=true", title: "RACE CAR" },
    { id: 3, imageUrl: "https://cdn.builder.io/api/v1/image/assets/25b6f327ff424639b45449f8a174839d/8559cde1d85afa8752521dd1ea31d0054ba77f05?placeholderIfAbsent=true", title: "RACE CAR" },
  ];

  return (
    <section className="text-center mt-5">
      <div className="flex min-h-[174px] w-full max-w-[363px] flex-col items-stretch justify-center">
        <header className="flex items-center gap-[40px_162px] text-sm text-white font-extrabold leading-none justify-center">
          <h2 className="self-stretch my-auto">
            Arcade Games
          </h2>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/25b6f327ff424639b45449f8a174839d/ec9ef3904e312a02e200cacd92c320674bed1811?placeholderIfAbsent=true"
            className="aspect-[1.15] object-contain w-[15px] self-stretch shrink-0 my-auto"
            alt="More options"
          />
        </header>
        <div className="overflow-x-auto flex w-full items-center gap-3 overflow-hidden text-[9px] text-[rgba(224,221,221,1)] font-semibold leading-none mt-[22px]">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/25b6f327ff424639b45449f8a174839d/ea54e3b17fa496c9badf2af47c8ce26e5e900d9b?placeholderIfAbsent=true"
            className="aspect-[0.99] object-contain w-[135px] shadow-[0px_5px_4px_rgba(0,0,0,0.25)] self-stretch shrink-0 my-auto rounded-[7px]"
            alt="Featured game"
          />
          <img
            src="https://cdn.builder.io/api/v1/image/assets/25b6f327ff424639b45449f8a174839d/fe0f2f7faebd74e0f2f59e0e46e786dddd1ac1b8?placeholderIfAbsent=true"
            className="aspect-[0.87] object-contain w-[119px] shadow-[0px_5px_4px_rgba(0,0,0,0.25)] self-stretch shrink-0 my-auto rounded-[7px]"
            alt="Game 2"
          />
          <img
            src="https://cdn.builder.io/api/v1/image/assets/25b6f327ff424639b45449f8a174839d/50ca4690cbd0a62ddd8ca08198536299e14e5526?placeholderIfAbsent=true"
            className="aspect-[0.87] object-contain w-[119px] shadow-[0px_5px_4px_rgba(0,0,0,0.25)] self-stretch shrink-0 my-auto rounded-[7px]"
            alt="Game 3"
          />
          {games.map((game) => (
            <GameCard
              key={game.id}
              imageUrl={game.imageUrl}
              title={game.title}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
