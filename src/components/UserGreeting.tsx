import React from 'react';

interface UserGreetingProps {
  userName?: string;
  points?: string;
}

export const UserGreeting: React.FC<UserGreetingProps> = ({ 
  userName = "ASHWIN", 
  points = "257K" 
}) => {
  return (
    <section className="flex w-full items-stretch gap-5 justify-between mt-6">
      <div className="flex flex-col text-white whitespace-nowrap text-center my-auto">
        <div className="text-xl font-normal leading-none">
          Hey
        </div>
        <div className="text-xs font-extrabold leading-none">
          {userName}
        </div>
      </div>
      <div className="flex items-center gap-1.5 justify-center">
        <div className="justify-center backdrop-blur-[31.51702880859375px] self-stretch flex min-h-9 flex-col text-sm text-white font-extrabold whitespace-nowrap text-center leading-none w-[103px] bg-[rgba(255,255,255,0.16)] my-auto pl-0.5 pr-2 py-[3px] rounded-[18px_5px_5px_18px] border-[0.5px] border-solid border-[rgba(255,255,255,0.60)]">
          <div className="flex w-[87px] flex-col justify-center px-2.5 py-[5px]">
            <div>{points}</div>
          </div>
        </div>
        <button className="justify-center items-center backdrop-blur-[31.51702880859375px] self-stretch flex min-h-9 flex-col w-9 h-9 bg-[rgba(255,255,255,0.16)] my-auto px-1.5 rounded-[5px] border-[0.5px] border-solid border-[rgba(255,255,255,0.60)] hover:bg-[rgba(255,255,255,0.24)] transition-colors">
          <div className="flex min-h-6 w-6 flex-col items-center justify-center px-[3px] py-1">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/25b6f327ff424639b45449f8a174839d/abaa54f7d16d1ce081e690a49a26db510ea6b1cc?placeholderIfAbsent=true"
              className="aspect-[1.12] object-contain w-full rounded-[0px_0px_0px_0px]"
              alt="Notification icon"
            />
          </div>
        </button>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/25b6f327ff424639b45449f8a174839d/9782386ef2f03a5595bc7e9d882f5a5206d02a57?placeholderIfAbsent=true"
          className="aspect-[1] object-contain w-9 self-stretch shrink-0 my-auto rounded-[0px_0px_0px_0px]"
          alt="Profile avatar"
        />
      </div>
    </section>
  );
};
