import React from "react";
import { useState } from "react";
import { FaTimes } from "react-icons/fa";
const CustomKeyboard = () => {
  return (
    <div className="flex flex-col justify-between component-height bg-[#0090FF] h-full">
      <div className="text-white text-center py-2 text-sm">
        Enter the keycode of the content you want to see
      </div>
      <div className="flex-1 flex flex-col mx-auto w-full h-full">
        <p className="flex items-center justify-center text-white text-3xl h-[100px] "></p>
        <div className="flex flex-col grow justify-evenly w-full h-4/6 py-2 ">
          <div className="flex gap-10 items-center justify-evenly justify-items-end h-full">
            <p className="w-[80px] h-[80px] flex items-center justify-center  border-2 border-white text-white text-3xl rounded-full">
              1
            </p>
            <p className="w-[80px] h-[80px] flex items-center justify-center border-2 border-white text-white text-3xl  rounded-full">
              2
            </p>
            <p className="w-[80px] h-[80px] flex items-center justify-center border-2 border-white text-white text-3xl  rounded-full">
              3
            </p>
          </div>
          <div className="flex gap-10 items-center justify-evenly  h-full ">
            <p className="w-[80px] h-[80px] flex items-center justify-center border-2 border-white text-white text-3xl  rounded-full">
              4
            </p>
            <p className="w-[80px] h-[80px] flex items-center justify-center border-2 border-white text-white text-3xl  rounded-full">
              5
            </p>
            <p className="w-[80px] h-[80px] flex items-center justify-center border-2 border-white text-white text-3xl  rounded-full">
              6
            </p>
          </div>
          <div className="flex gap-10 items-center justify-evenly h-full ">
            <p className="w-[80px] h-[80px] flex items-center justify-center border-2 border-white text-white text-3xl  rounded-full">
              7
            </p>
            <p className="w-[80px] h-[80px] flex items-center justify-center border-2 border-white text-white text-3xl  rounded-full">
              8
            </p>
            <p className="w-[80px] h-[80px] flex items-center justify-center border-2 border-white text-white text-3xl  rounded-full">
              9
            </p>
          </div>
          <div className="flex gap-10 items-center justify-evenly  h-full ">
            <p className="w-[80px] h-[80px] flex items-center justify-center "></p>
            <p className="w-[80px] h-[80px] flex items-center justify-center border-2 border-white text-white text-3xl  rounded-full">
              0
            </p>
            <p className="w-[80px] h-[80px] flex items-center justify-evenly ">
              <span className=" flex items-center justify-center w-[30px] h-[20px] text-blue-600 delete-icon bg-white">
                <FaTimes size={14} />
              </span>
            </p>
          </div>
        </div>
      </div>

      <button type="block" className="h-[50px] bg-white">
        OK
      </button>
    </div>
  );
};

export default CustomKeyboard;
