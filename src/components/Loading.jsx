import React from "react";
import { motion } from "framer-motion";
import logo from "../assets/logo.png";
const Loading = () => {
  return (
    <div className="h-screen w-full flex items-center justify-center">
      <motion.div
        animate={{
          scale: [1, 2, 2, 1, 1],
          rotate: [0, 0, 360, 360, 0],
          borderRadius: ["0%", "0%", "50%", "50%", "0%"],
        }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          times: [0, 0.2, 0.5, 0.8, 1],
          repeat: Infinity,
          repeatDelay: 1,
        }}
        className=" bg-rgba-white h-20 w-20 rounded-2xl"
      >
        <img src={logo} alt="" className="h-full w-full object-cover " />
      </motion.div>
    </div>
  );
};

export default Loading;
