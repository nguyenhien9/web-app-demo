import React from "react";

const CustomKeyboard = () => {
  return (
    <div className="flex flex-col justify-between component-height bg-[#0090FF] h-full">
      <div className="text-white text-center py-2">
        Enter the keycode of the content you want to see
      </div>
      <div className="flex-1 flex flex-col  mx-auto w-full h-full">
        <p className="h-[60px] bg-white rou"></p>
      </div>

      <button type="block" className="h-[50px] bg-white">
        OK
      </button>
    </div>
  );
};

export default CustomKeyboard;
