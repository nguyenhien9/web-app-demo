import { Modal } from "antd";
import React from "react";
import CustomSlider from "./CustomSlider";
import { AiOutlineClose } from "react-icons/ai";
const IntroductionModal = ({ open, close, images }) => {
  return (
    <Modal open={open} centered width={450} closable={false}>
      <div className="relative flex flex-col justify-between h-full ">
        <div className="flex items-center justify-between bg-blue-600">
          <div></div>
          <h2 className="-mr-4 flex items-center justify-center w-full h-[50px] text-white text-xl font-bold z-10">
            Introduction
          </h2>
          <button
            type="button"
            className="px-2 bg-none text-white text-xl font-bold "
            onClick={close}
          >
            <AiOutlineClose />
          </button>
        </div>
        <div className="grow z-0">
          <CustomSlider images={images} />
        </div>
        <div className="absolute bottom-[60px] flex items-center justify-center w-full z-1000">
          <button className="px-6 py-2 bg-white rounded-md" onClick={close}>
            Skip Intro
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default IntroductionModal;
