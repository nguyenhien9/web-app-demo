import React, { useEffect, useState } from "react";
import {
  AudioModal,
  CustomAudio,
  CustomKeyboard,
  CustomList,
  IntroductionModal,
  MapComponent,
  Navbar,
  Tabs,
} from "../components";
import audio from "../assets/audio/Thuận Theo Ý Trời - Bùi Anh Tuấn - Cover Hay Nhất Việt Nam - Master of Flute(1).mp3";
import { useTourContext } from "../context/tourContext";
import { useParams } from "react-router-dom";
import { fetchSingleTour, fetchAudio } from "../actions/tourAction";
import { tabs } from "../constants";

const SingleTourDetailPage = () => {
  const { id } = useParams();
  const { singleTour, dispatch, audio } = useTourContext();
  const [openIntroModal, setOpenIntroModal] = useState(false);
  const [activeTab, setActiveTab] = useState("map");

  useEffect(() => {
    setTimeout(() => {
      // setOpenIntroModal(true);
    }, 1000);
  }, []);

  const handleCloseModal = () => {
    setOpenIntroModal(false);
  };

  useEffect(() => {
    fetchSingleTour(dispatch, id);
  }, [id]);

  useEffect(() => {
    fetchAudio(dispatch);
  }, []);
  // console.log("@@@audioId", audio.id);
  const handleTabChange = (tabName) => {
    setActiveTab(tabName);
  };

  // console.log("@@@singleTour", singleTour);
  return (
    <div className="flex flex-col max-w-lg mx-auto w-screen min-h-screen">
      <Navbar title={activeTab} />
      <div className="flex-1">
        {activeTab === "map" ? (
          <MapComponent tour={singleTour} />
        ) : activeTab === "list" ? (
          <CustomList img={singleTour.img} lists={audio} />
        ) : (
          <CustomKeyboard />
        )}
        <div>
          <Tabs
            tabs={tabs}
            activeTab={activeTab}
            onTabChange={handleTabChange}
          />
        </div>
      </div>
      <div>
        {openIntroModal && (
          <IntroductionModal
            open={openIntroModal}
            close={handleCloseModal}
            images={singleTour.images}
          />
        )}
      </div>
    </div>
  );
};

export default SingleTourDetailPage;
