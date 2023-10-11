import React, { useState, useRef, useEffect, Children } from "react";
import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";
import { BsPlayFill, BsPauseFill } from "react-icons/bs";
import { TbMessage, TbMessageX } from "react-icons/tb";
import CustomSlider from "./CustomSlider";

const CustomAudioTracking = ({ src, transcript, images }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showTranscript, setShowTranscript] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef();
  const sliderRef = useRef();

  console.log("@@@audioRef", audioRef);
  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    const updateCurrentTime = () => {
      const time = audioRef.current.currentTime;
      setCurrentTime(time);
    };

    // Update the slider value

    const setInitialDuration = () => {
      const videoDuration = audioRef.current.duration;
      setDuration(videoDuration);
      sliderRef.current.max = videoDuration;
    };

    audioRef.current.addEventListener("timeupdate", updateCurrentTime);
    audioRef.current.addEventListener("loadedmetadata", setInitialDuration); // Lắng nghe sự kiện "loadedmetadata"
  }, []);
  // console.log("@@currentTime", currentTime);
  const handleSliderChange = (values) => {
    // Lấy giá trị mới của thanh trượt
    const newCurrentTime = values[1];
    setCurrentTime(newCurrentTime);
    // console.log("@@@time", newCurrentTime);
  };
  return (
    <>
      <audio
        ref={audioRef}
        src={src}
        className="w-full"
        controls
        style={{ display: "none" }}
      />
      <div className="grow h-full">
        {/* <CustomSlider images={images} /> */}
      </div>
      {showTranscript && (
        <div className="h-full bg-white p-4 ">{transcript}</div>
      )}
      <div className="flex flex-row justify-between items-center gap-2 h-[60px] w-full px-2 bg-blue-600 text-white ">
        <button type="button" onClick={togglePlay}>
          {isPlaying ? <BsPauseFill size={30} /> : <BsPlayFill size={30} />}
        </button>
        <div className="text-center min-w-[40px]">
          {formatTime(currentTime)}
        </div>
        <RangeSlider
          ref={sliderRef}
          className="single-thumb"
          defaultValue={[0, 0]}
          max={duration}
          value={[0, currentTime]}
          thumbsDisabled={[true, false]}
          onInput={handleSliderChange}
        />

        <div className="text-center min-w-[40px]">{formatTime(duration)}</div>
        <button
          type="button"
          onClick={() => setShowTranscript(!showTranscript)}
        >
          {showTranscript ? <TbMessageX size={20} /> : <TbMessage size={20} />}
        </button>
      </div>
    </>
  );
};

function formatTime(time) {
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60);
  return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
}

export default CustomAudioTracking;
