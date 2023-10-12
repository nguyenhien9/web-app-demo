import React, { useEffect, useState } from "react";

import SingleAudio from "./SingleAudio";

const CustomList = ({ img, lists, openModal }) => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 60) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
      console.log(scrollTop);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className="component-height flex flex-col overflow-auto ">
      <div>
        <img
          src={img}
          alt=""
          className={` w-full object-cover opacity-30 ${
            scrolled ? "sticky top" : ""
          }`}
        />
        <ul
          className={`list-none ${
            scrolled ? "flex flex-col" : "flex-1 flex flex-col gap-2"
          }`}
        >
          {lists.map((singleAudio) => {
            return (
              <SingleAudio
                key={singleAudio.id}
                singleAudio={singleAudio}
                openModal={openModal}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default CustomList;
