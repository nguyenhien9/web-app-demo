import React, { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { FaDeleteLeft } from "react-icons/fa6";
import { InvalidModal } from "../components";
import { useTourContext } from "../context/tourContext";
const CustomKeyboard = () => {
  const [openInvalidModal, setOpenInvalidModal] = useState(false);
  const { audio } = useTourContext();

  const navigate = useNavigate();
  const [input, setInput] = useState("");
  const handlePressKey = (key) => {
    setInput((prev) => prev + key);
  };
  // console.log("@@@input", typeof input);
  const handleDelete = () => {
    setInput(input.slice(0, -1));
  };

  const audioIds = useMemo(() => {
    return audio.map((elem) => elem.id);
  }, [audio]);

  const handleOk = () => {
    if (audioIds.includes(parseInt(input))) {
      navigate(`/${input}`);
    } else {
      setTimeout(() => {
        setOpenInvalidModal(true);
      }, 1000);
    }
  };
  console.log("@@@open", openInvalidModal);

  return (
    <div>
      <div className="flex flex-col justify-between component-height blue-gradient h-full">
        <div className="text-white text-center py-2 text-sm">
          Enter the keycode of the content you want to see
        </div>
        <div className="flex-1 flex flex-col mx-auto w-full h-full">
          <input
            type="text"
            readOnly
            className=" h-[60px] text-center text-white text-3xl bg-transparent "
            value={input}
          />
          <div className="grid grid-cols-3 grow items-center text-3xl">
            <button
              className="keyboard cursor-none"
              onClick={() => handlePressKey("1")}
            >
              1
            </button>
            <button
              className="keyboard cursor-none"
              onClick={() => handlePressKey("2")}
            >
              2
            </button>
            <button
              className="keyboard cursor-none"
              onClick={() => handlePressKey("3")}
            >
              3
            </button>
            <button
              className="keyboard cursor-none"
              onClick={() => handlePressKey("4")}
            >
              4
            </button>
            <button
              className="keyboard cursor-none"
              onClick={() => handlePressKey("5")}
            >
              5
            </button>
            <button
              className="keyboard cursor-none"
              onClick={() => handlePressKey("6")}
            >
              6
            </button>
            <button
              className="keyboard cursor-none"
              onClick={() => handlePressKey("7")}
            >
              7
            </button>
            <button
              className="keyboard cursor-none"
              onClick={() => handlePressKey("8")}
            >
              8
            </button>
            <button
              className="keyboard cursor-none"
              onClick={() => handlePressKey("9")}
            >
              9
            </button>
            <div></div>
            <button className="keyboard " onClick={() => handlePressKey("0")}>
              0
            </button>
            <button
              className="flex items-center justify-center"
              onClick={handleDelete}
            >
              <FaDeleteLeft size={30} color="white" />
            </button>
          </div>
        </div>
        <button type="block" className="h-[50px] bg-white" onClick={handleOk}>
          OK
        </button>
      </div>

      {openInvalidModal && (
        <InvalidModal
          open={openInvalidModal}
          close={() => setOpenInvalidModal(false)}
        />
      )}
    </div>
  );
};

export default CustomKeyboard;
