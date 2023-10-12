import React, { useEffect } from "react";

import { useParams } from "react-router-dom";
import { useTourContext } from "../context/tourContext";
import { fetchSingleAudio } from "../actions/tourAction";
import { Navbar } from "../components";
import CustomAudioTracking from "../components/CustomAudioTracking";

const AudioPage = () => {
  const { audioId } = useParams();
  const { singleAudio, dispatch } = useTourContext();

  useEffect(() => {
    fetchSingleAudio(dispatch, audioId);
  }, [audioId]);
  console.log("@@@singleAudio", singleAudio);

  return (
    <div className="flex flex-col mx-auto max-w-lg min-h-screen ">
      <div className="flex-none h-full">
        <Navbar title="Audio" />
      </div>
      <div className="flex flex-col grow h-full">
        <CustomAudioTracking
          src={singleAudio.src}
          transcript={singleAudio.scripts}
          image={singleAudio.thumb}
        />
      </div>
    </div>
  );
};

export default AudioPage;
