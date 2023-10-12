import React from "react";
import SingleTab from "./SingleTab";

const Tabs = ({ tabs, activeTab, onTabChange }) => {
  return (
    <>
      <ul className="bg-primary w-full h-[60px] flex items-center justify-between ">
        {tabs.map((tab) => {
          return (
            <li
              key={tab.id}
              className={`w-full h-full flex items-center justify-center ${
                tab.id === activeTab ? "text-white" : "text-slate-400 "
              }`}
              onClick={() => onTabChange(tab.id)}
            >
              <SingleTab icon={tab?.icon} text={tab?.text} />
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Tabs;
