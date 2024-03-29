import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";
import { BsPlayFill, BsPauseFill } from "react-icons/bs";
import { TbMessage, TbMessageX } from "react-icons/tb";

const CustomAudioTracking = ({ src, transcript, image }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showTranscript, setShowTranscript] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef();
  const sliderRef = useRef();

  // console.log("@@@audioRef", audioRef);
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
      if (audioRef.current) {
        const time = audioRef.current.currentTime;
        setCurrentTime(time);
      }
    };

    // Update the slider value

    const setInitialDuration = () => {
      if (audioRef.current) {
        const videoDuration = audioRef.current.duration;
        setDuration(videoDuration);
        sliderRef.current.max = videoDuration;
      }
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

      <div className="flex flex-col justify-between grow h-full">
        <motion.img
          src={image}
          alt=""
          className={`h-full grow object-cover ${
            showTranscript ? "image-transition" : ""
          } `}
        />
        <AnimatePresence>
          {showTranscript && (
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 100 }}
              transition={{ type: "spring", duration: 0.4 }}
              className="h-full bg-white p-4 tracking-[1px] "
            >
              {transcript}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

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
