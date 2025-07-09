
import React, { useState } from 'react';

export const ChallengeFriends: React.FC = () => {
  const [selectedAction, setSelectedAction] = useState<'join' | 'create' | null>(null);

  const handleJoinLeague = () => {
    setSelectedAction('join');
    // Add join league logic here
  };

  const handleCreateLeague = () => {
    setSelectedAction('create');
    // Add create league logic here
  };

  return (
    <section className="self-center relative flex w-full max-w-[253px] flex-col items-stretch mt-2 sm:mt-2.5 px-2 sm:px-0">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/25b6f327ff424639b45449f8a174839d/a3b6b10dd1141e03cec069fee6ecb99ffc792f93?placeholderIfAbsent=true"
        className="aspect-[0.95] object-contain w-40 sm:w-44 md:w-[185px] self-center z-0 max-w-full"
        alt="Challenge friends illustration"
      />
      <div className="z-0 w-full text-center mt-3 sm:mt-4">
        <div className="flex w-full flex-col">
          <h2 className="text-white text-sm sm:text-base font-extrabold leading-none">
            CHALLENGE FRIENDS
          </h2>
          <p className="text-[rgba(205,203,203,1)] text-xs font-medium leading-[15px] sm:leading-[17px] mt-1 px-2 sm:px-0">
            Create a private league with your friends for the whole series.
          </p>
        </div>
        <div className="flex w-full gap-2 sm:gap-3 text-[9px] sm:text-[10px] font-semibold uppercase leading-none mt-2">
          <button 
            className={`bg-white flex min-h-7 sm:min-h-8 md:min-h-[33px] items-center gap-2 sm:gap-[9px] text-black justify-center flex-1 shrink basis-[0%] px-4 sm:px-6 md:pl-[27px] md:pr-7 py-2 sm:py-2.5 rounded-[3px] hover:bg-gray-100 transition-colors ${selectedAction === 'join' ? 'ring-2 ring-blue-500' : ''}`}
            onClick={handleJoinLeague}
          >
            <div className="self-stretch my-auto">
              Join league
            </div>
          </button>
          <button 
            className={`justify-center items-center flex min-h-7 sm:min-h-8 gap-2 sm:gap-[9px] text-white flex-1 shrink basis-[17px] px-3 sm:px-4 md:px-[19px] py-2 sm:py-[9px] rounded-[3.007px] hover:bg-[rgba(255,255,255,0.1)] transition-colors ${selectedAction === 'create' ? 'ring-2 ring-white' : ''}`}
            onClick={handleCreateLeague}
          >
            <div className="self-stretch my-auto">
              Create league
            </div>
          </button>
        </div>
      </div>
      <div className="absolute z-0 flex w-60 sm:w-72 md:w-[311px] items-center justify-center -translate-x-2/4 translate-y-[0%] left-2/4 bottom-20 sm:bottom-24 md:bottom-[124px]">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/25b6f327ff424639b45449f8a174839d/dd68ed3955f1fe41246f3a29543a232deac86e1f?placeholderIfAbsent=true"
          className="aspect-[1] object-contain w-5 sm:w-6 self-stretch shrink-0 my-auto rounded-sm"
          alt="Friend avatar 1"
        />
        <img
          src="https://cdn.builder.io/api/v1/image/assets/25b6f327ff424639b45449f8a174839d/7e85624e58c18101b255e5cd13adcd1909ecee86?placeholderIfAbsent=true"
          className="aspect-[1] object-contain w-5 sm:w-6 self-stretch shrink-0 my-auto rounded-sm"
          alt="Friend avatar 2"
        />
      </div>
    </section>
  );
};
