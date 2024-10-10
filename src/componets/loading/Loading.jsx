import React from "react";

const Loading = () => {
  return (
    <div className="flex items-center justify-center  py-10">
      <div class="text-center">
        <div class="w-36 h-36 border-4 border-dashed rounded-full animate-spin bg-gradient-to-tr from-cyan-600 to-cyan-400 mx-auto"></div>
        <h2 class="text-zinc-900 dark:text-black mt-4">Loading...</h2>
      </div>
    </div>
  );
};

export default Loading;
