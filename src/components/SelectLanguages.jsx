import React from "react";
import { motion } from "framer-motion";
import { languages } from "../constants";
import { Link } from "react-router-dom";
// import { useTranslation } from "react-i18next";
const SelectLanguages = () => {
  return (
    <div className="mx-0 w-full h-screen flex flex-col">
      <h2 className="bg-primary h-[60px] flex items-center justify-center text-white font-bold text-xl">
        Select a language
      </h2>
      <div className="bg-rgba-white h-full pt-20">
        <ul className="list-none flex flex-col gap-5 ">
          {languages.map((language, index) => {
            const animationVariants = {
              hidden: { opacity: 0, x: -100 },
              visible: { opacity: 1, x: 0 },
            };
            return (
              <motion.li
                key={language.id}
                variants={animationVariants}
                initial="hidden"
                animate="visible"
                transition={{
                  ease: "easeOut",
                  duration: 0.5,
                  delay: index * 0.2,
                }}
                className="bg-rgba-blue px-10 py-4 text-white text-md font-bold flex items-center gap-5"
              >
                <img
                  src={language.icon}
                  alt={language.lang}
                  className="w-9 h-9"
                />
                <Link to="/tours">{language.lang}</Link>
              </motion.li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default SelectLanguages;
