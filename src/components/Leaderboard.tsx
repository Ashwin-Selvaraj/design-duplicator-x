
import React from 'react';

interface LeaderboardProps {
  rank?: number;
}

export const Leaderboard: React.FC<LeaderboardProps> = ({ rank = 564 }) => {
  return (
    <article className="flex flex-col items-center font-extrabold uppercase w-full sm:w-[214px] max-w-[300px] pt-px pb-4 sm:pb-[19px] rounded-[0px_0px_0px_0px]">
      <div className="bg-gradient-to-b from-white/20 to-white/10 backdrop-blur-sm flex w-28 sm:w-32 md:w-[140px] shrink-0 h-7 sm:h-8 md:h-[33px] rounded-[50%] border border-white/20" />
      <div className="bg-white/10 backdrop-blur-md border border-white/20 self-stretch z-10 flex mt-[-28px] sm:mt-[-32px] md:mt-[-34px] min-h-[160px] sm:min-h-[180px] md:min-h-[195px] flex-col items-stretch justify-center px-2 sm:px-3 md:px-[13px] py-4 sm:py-5 md:py-[19px] rounded-[10px] shadow-lg">
        <div className="flex min-h-[120px] sm:min-h-[140px] md:min-h-[157px] w-full flex-col items-stretch justify-center">
          <header className="flex w-full items-center gap-1 sm:gap-1.5 md:gap-[5px] text-[10px] sm:text-xs text-[rgba(244,243,237,1)] tracking-[0.06px] leading-none justify-center flex-1 h-full">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/25b6f327ff424639b45449f8a174839d/51325c5c6007c07c27ad1e2d45893c309bba4df0?placeholderIfAbsent=true"
              className="aspect-[1] object-contain w-6 sm:w-7 md:w-[33px] self-stretch shrink-0 my-auto drop-shadow-sm"
              alt="Trophy icon"
            />
            <h3 className="self-stretch my-auto">
              Leaderboard
            </h3>
          </header>
          <div className="w-full mt-3 sm:mt-4">
            <div className="w-full">
              <div className="flex w-full flex-col items-center justify-center px-8 sm:px-12 md:px-[50px] py-2 sm:py-2.5 rounded-[5px]">
                <div className="flex w-full max-w-[88px] flex-col items-center justify-center">
                  <div className="text-white text-2xl sm:text-3xl md:text-[34px] leading-[0] tracking-[0.17px] drop-shadow-md">
                    {rank}
                  </div>
                  <div className="text-[#d6d6d6] text-[7px] sm:text-[8px] leading-[12px] sm:leading-[14px] tracking-[0.04px] text-center mt-1">
                    OVERALL RANK
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex w-full items-stretch gap-1 sm:gap-1.5 text-[7px] sm:text-[8px] text-[rgba(20,20,20,1)] font-semibold whitespace-nowrap text-center leading-none mt-3 sm:mt-4 rounded-[3px]">
            <button className="bg-white/90 backdrop-blur-sm flex min-h-6 sm:min-h-7 items-center gap-1 sm:gap-2 md:gap-[9px] justify-center flex-1 px-2 sm:px-3 py-2 sm:py-[9px] rounded-[3px] hover:bg-white transition-colors border border-white/30 shadow-sm">
              <span className="self-stretch my-auto text-[6px] sm:text-[7px] md:text-[8px]">
                MINIGAMES
              </span>
              <img
                src="https://cdn.builder.io/api/v1/image/assets/25b6f327ff424639b45449f8a174839d/6dc975d7510cc012e14339d68e0d2508a9e37092?placeholderIfAbsent=true"
                className="aspect-[0.67] object-contain w-0.5 sm:w-1 self-stretch shrink-0 my-auto"
                alt="Arrow icon"
              />
            </button>
            <button className="bg-white/90 backdrop-blur-sm flex min-h-6 sm:min-h-7 items-center gap-1 sm:gap-2 md:gap-[9px] justify-center flex-1 px-2 sm:px-3 py-2 sm:py-[9px] rounded-[3px] hover:bg-white transition-colors border border-white/30 shadow-sm">
              <span className="self-stretch my-auto text-[6px] sm:text-[7px] md:text-[8px]">
                SQUAD
              </span>
              <img
                src="https://cdn.builder.io/api/v1/image/assets/25b6f327ff424639b45449f8a174839d/1ae05685470b88e98916a20955b017054262a17a?placeholderIfAbsent=true"
                className="aspect-[0.67] object-contain w-0.5 sm:w-1 self-stretch shrink-0 my-auto"
                alt="Arrow icon"
              />
            </button>
          </div>
        </div>
      </div>
      <div className="bg-gradient-to-t from-blue-600/80 to-blue-500/60 backdrop-blur-sm flex w-28 sm:w-32 md:w-[140px] shrink-0 h-7 sm:h-8 md:h-[35px] -mt-7 sm:-mt-8 md:-mt-9 rounded-[50%] border border-blue-400/30 shadow-lg" />
    </article>
  );
};
