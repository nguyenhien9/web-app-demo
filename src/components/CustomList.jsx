import React from "react";

import SingleAudio from "./SingleAudio";

const CustomList = ({ img, lists, openModal }) => {
  return (
    <div className="component-height flex flex-col overflow-auto ">
      <div>
        <img src={img} alt="" className=" w-full object-cover opacity-30" />
        <ul className="list-none flex-1 flex flex-col gap-2 ">
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
