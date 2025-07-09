import React from 'react';

export const TaskCompletion: React.FC = () => {
  const handleGoClick = () => {
    // Add navigation to tasks logic here
  };

  return (
    <article className="flex min-h-[193px] flex-col items-center text-[11px] text-center w-[137px]">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/25b6f327ff424639b45449f8a174839d/c2624a08e72837954617c7118bc8dccfda663172?placeholderIfAbsent=true"
        className="aspect-[1.23] object-contain w-[137px] max-w-full"
        alt="Task completion illustration"
      />
      <p className="text-[rgba(230,223,223,1)] font-medium tracking-[-0.11px] mt-1.5">
        Complete your task & get Metals
      </p>
      <button 
        className="bg-[rgba(255,180,68,1)] flex min-h-[34px] w-[115px] max-w-full items-center gap-2.5 text-white font-semibold whitespace-nowrap uppercase leading-none justify-center mt-1.5 px-[34px] py-[9px] rounded-[3px] hover:bg-[rgba(255,180,68,0.9)] transition-colors"
        onClick={handleGoClick}
      >
        <span className="self-stretch my-auto">
          go
        </span>
      </button>
    </article>
  );
};
