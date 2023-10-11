import React from "react";

const Loading = () => {
  return (
    <div className="h-screen w-full flex items-center justify-center">
      <div className="animate-spin border-t-4 rounded-full bg-rgba-white border-blue-600 h-14 w-14"></div>
    </div>
  );
};

export default Loading;
