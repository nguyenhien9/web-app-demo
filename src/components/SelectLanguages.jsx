import React from "react";
import { languages } from "../constants";
import { Link } from "react-router-dom";
const SelectLanguages = () => {
  return (
    <div className="mx-0 w-full h-screen flex flex-col">
      <h2 className="bg-blue-500 h-[60px] flex items-center justify-center text-white font-bold text-md">
        Select a language
      </h2>
      <div className="bg-rgba-white h-full pt-20">
        <ul className="list-none flex flex-col gap-5 ">
          {languages.map((language) => {
            return (
              <li
                key={language.id}
                className="bg-rgba-blue px-10 py-4 text-white text-md font-bold flex items-center gap-5"
              >
                <img
                  src={language.icon}
                  alt={language.lang}
                  className="w-9 h-9"
                />
                <Link to="/tours">{language.lang}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default SelectLanguages;
