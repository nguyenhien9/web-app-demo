import React from "react";
import { motion } from "framer-motion";
import TourSingle from "./TourSingle";
const Tours = ({ tours }) => {
  return (
    <ul className="min-h-full list-none flex flex-col item-center justify-center">
      {tours.map((tour, index) => {
        const animationVariants = {
          hidden: { opacity: 0, y: -100 },
          visible: { opacity: 1, y: 0 },
        };
        return (
          <motion.li
            key={tour.id}
            variants={animationVariants}
            initial="hidden"
            animate="visible"
            transition={{
              ease: "easeOut",
              duration: 0.5,
              delay: index * 0.2,
            }}
            className="h-full"
          >
            <TourSingle img={tour.img} name={tour.name} id={tour.id} />
          </motion.li>
        );
      })}
    </ul>
  );
};

export default Tours;
