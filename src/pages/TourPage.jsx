import React, { useState } from "react";
import { useTourContext } from "../context/tourContext";
import { Loading, Navbar, Tours } from "../components";

const TourPage = () => {
  const [loading, setLoading] = useState(true);
  const { tours } = useTourContext();
  setTimeout(() => {
    setLoading(false);
  }, 2500);
  return (
    <div className="max-w-lg mx-auto w-screen">
      <Navbar title="Select a tour" />
      {loading ? <Loading /> : <Tours tours={tours} />}
    </div>
  );
};

export default TourPage;
