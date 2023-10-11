import React from "react";
import { Link } from "react-router-dom";

const SingleAudio = ({ singleAudio, openModal }) => {
  return (
    <Link key={singleAudio?.id} to={`/${singleAudio?.id}`}>
      <li
        className="flex items-center gap-4 w-full pl-4 py-4 h-[80px] bg-[#444444] cursor-pointer"
        onClick={openModal}
      >
        <div className="h-10 w-10 bg-slate-400 rounded-lg" />
        <p className="text-white ">
          <span>{singleAudio?.id}</span>
          <span> - </span>
          <span>{singleAudio.title}</span>
        </p>
      </li>
    </Link>
  );
};

export default SingleAudio;
