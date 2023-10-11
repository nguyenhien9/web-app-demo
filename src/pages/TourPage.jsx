import React from "react";
import { useTourContext } from "../context/tourContext";
import { Navbar, Tours } from "../components";

const TourPage = () => {
  const { tours } = useTourContext();

  return (
    <div className="max-w-lg mx-auto w-screen">
      <Navbar title="Select a tour" />
      <Tours tours={tours} />
    </div>
  );
};

export default TourPage;
