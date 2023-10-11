import React from "react";
const SingleTab = ({ icon, text }) => {
  return (
    <button
      type="button"
      className="flex flex-col items-center justify-center w-full h-full z-100 transition ease-in-out"
    >
      <span>{icon}</span>
      <span>{text}</span>
    </button>
  );
};

export default SingleTab;
