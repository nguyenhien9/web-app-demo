import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchSingleTour } from "../actions/tourAction";
import { useTourContext } from "../context/tourContext";
import { SingleTourDetail, Navbar } from "../components";
const TourDetailPage = () => {
  const { id } = useParams();
  // console.log("@@@id", id);
  const { dispatch, singleTour } = useTourContext();

  useEffect(() => {
    fetchSingleTour(dispatch, id);
  }, [id]);
  // console.log("@@@name", singleTour);
  return (
    <div className="max-w-lg mx-auto w-screen min-h-screen flex flex-col">
      <Navbar title={singleTour?.name} />
      <SingleTourDetail singleTour={singleTour} />
    </div>
  );
};

export default TourDetailPage;
