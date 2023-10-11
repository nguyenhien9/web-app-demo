import React from "react";
import TourSingle from "./TourSingle";
const Tours = ({ tours }) => {
  return (
    <ul className="min-h-full list-none flex flex-col item-center justify-center">
      {tours.map((tour) => {
        return (
          <li key={tour.id} className="h-full">
            <TourSingle img={tour.img} name={tour.name} id={tour.id} />
          </li>
        );
      })}
    </ul>
  );
};

export default Tours;
