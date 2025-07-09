import React from 'react';
import { Header } from '@/components/Header';
import { UserGreeting } from '@/components/UserGreeting';
import { ChallengeFriends } from '@/components/ChallengeFriends';
import { Leaderboard } from '@/components/Leaderboard';
import { TaskCompletion } from '@/components/TaskCompletion';
import { ArcadeGames } from '@/components/ArcadeGames';
import { QuickMenu } from '@/components/QuickMenu';
import { TapperModes } from '@/components/TapperModes';
import { GameRankingCard } from '@/components/GameRankingCard';

const Index = () => {
  const gameRankings = [
    {
      id: 1,
      imageUrl: "https://cdn.builder.io/api/v1/image/assets/25b6f327ff424639b45449f8a174839d/3303d591192e27916d170f18ca73a4708dd8717e?placeholderIfAbsent=true",
      title: "Meme Matching",
      maxPoints: "5000 $MEMETV",
      rank: "#264"
    },
    {
      id: 2,
      imageUrl: "https://cdn.builder.io/api/v1/image/assets/25b6f327ff424639b45449f8a174839d/13d5eccd27008156bdcaf103f428aa5475df5c3f?placeholderIfAbsent=true",
      title: "Meme Matching",
      maxPoints: "5000 $MEMETV",
      rank: "#264"
    },
    {
      id: 3,
      imageUrl: "https://cdn.builder.io/api/v1/image/assets/25b6f327ff424639b45449f8a174839d/209115064977d9ce48e1f76d303497a3dbb2f124?placeholderIfAbsent=true",
      title: "Meme Matching",
      maxPoints: "5000 $MEMETV",
      rank: "#264"
    }
  ];

  return (
    <div className="bg-black flex max-w-[480px] w-full flex-col overflow-hidden items-center mx-auto py-[15px] rounded-xl">
      <div className="self-stretch flex w-full flex-col items-stretch pb-[47px] px-[15px]">
        <Header />
        
        <UserGreeting />
        
        <ChallengeFriends />
        
        <div className="w-[120px] shrink-0 h-0 mt-5" />
        
        <main className="flex min-h-[213px] gap-3">
          <Leaderboard />
          <TaskCompletion />
        </main>
        
        <ArcadeGames />
        
        <QuickMenu />
      </div>
      
      <TapperModes />
      
      <section className="w-full max-w-[363px] text-center leading-loose mt-5">
        {gameRankings.map((game, index) => (
          <div key={game.id} className={index > 0 ? "mt-[13px]" : ""}>
            <GameRankingCard
              imageUrl={game.imageUrl}
              title={game.title}
              maxPoints={game.maxPoints}
              rank={game.rank}
            />
          </div>
        ))}
      </section>
    </div>
  );
};

export default Index;
