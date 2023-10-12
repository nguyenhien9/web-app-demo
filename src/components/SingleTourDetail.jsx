import React from "react";
import { motion } from "framer-motion";
import { buttons } from "../constants";
import { Link } from "react-router-dom";
import { Spin } from "antd";
const SingleTourDetail = ({ singleTour }) => {
  return (
    <motion.div
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", duration: 1 }}
      className="flex flex-col h-full grow text-gray-500 "
    >
      <div className="relative w-full h-[400px]">
        <img src={singleTour?.img} alt={singleTour?.name} className="h-full" />
        <h2 className="absolute -bottom-4 left-1/2 -translate-x-1/2 px-5 bg-white w-4/5 h-[60px] leading-[60px] text-xl font-bold">
          {singleTour?.name}
        </h2>
      </div>
      <div className="bg-white grow flex flex-col justify-between w-full py-2 mx-auto">
        <p className="flex-1 mx-auto px-5 py-2 mb-4 max-h-full w-4/5 font-semibold tracking-wide overflow-hidden">
          {singleTour?.desc}
        </p>
        <ul className="flex items-center justify-between gap-2 min-w-full mx-auto px-2">
          {buttons.map((btn) => {
            return (
              <li key={btn.id} className="flex justify-between w-full">
                <Link
                  className=" flex items-center justify-center gap-2 bg-blue-500 text-white min-w-full py-2 rounded-md text-sm "
                  to={`/tours/${singleTour?.id}/detail`}
                >
                  <span>{btn.icon}</span>
                  <span>{btn.text}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </motion.div>
  );
};

export default SingleTourDetail;
