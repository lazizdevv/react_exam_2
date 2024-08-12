import React from "react";

export const Loading = () => {
  return (
    <>
      <div className="w-screen h-screen flex justify-center items-center bg-white z-50 fixed top-0 left-0 transition-all">
        <div class="flex flex-row gap-2">
          <div class="w-4 h-4 rounded-full bg-primary animate-bounce"></div>
          <div class="w-4 h-4 rounded-full bg-primary animate-bounce [animation-delay:-.3s]"></div>
          <div class="w-4 h-4 rounded-full bg-primary animate-bounce [animation-delay:-.5s]"></div>
        </div>
      </div>
    </>
  );
};
