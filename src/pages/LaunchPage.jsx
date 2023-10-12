import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const animationVariants = {
  hidden: { opacity: 0, y: 100 },
  visible: { opacity: 1, y: 0 },
};
const LaunchPage = () => {
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      navigate("/langs");
    }, 2000);
  }, [navigate]);

  return (
    <div
      className="max-w-lg mx-auto w-screen bg-launch-page
      bg-cover bg-center bg-no-repeat min-h-screen 
      flex items-center justify-center"
    >
      <motion.h1
        initial="hidden"
        animate="visible"
        variants={animationVariants}
        transition={{
          ease: "easeOut",
          duration: 0.5,
        }}
        className="text-center text-white font-bold tracking-wider"
      >
        <span className="text-5xl ">Paris</span>
        <span className="block text-4xl">Multimedia Guide Tour</span>
      </motion.h1>
    </div>
  );
};

export default LaunchPage;
