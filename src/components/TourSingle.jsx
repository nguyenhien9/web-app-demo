import React from "react";
import { Link } from "react-router-dom";

const TourSingle = ({ img, name, id }) => {
  return (
    <div className="relative">
      <Link to={`/tours/${id}`}>
        <img src={img} alt={name} className="h-full" />
      </Link>
      <h5 className="absolute bottom-0 text-white font-black px-4 py-2 tracking-wider text-lg">
        {name}
      </h5>
    </div>
  );
};

export default TourSingle;
