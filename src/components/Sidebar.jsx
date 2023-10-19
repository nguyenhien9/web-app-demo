import React from "react";
import { motion } from "framer-motion";
import { navLinks } from "../constants";
import { Link } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";
import { useSidebarContext } from "../context/sidebarContext";
const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useSidebarContext();
  // console.log("@@@sidebar", isSidebarOpen);

  const sidebarVariants = {
    open: {
      x: 0,
      transition: {
        ease: "easeInOut",
        duration: 0.6,
      },
    },
    closed: {
      x: "100%",
      transition: {
        ease: "easeInOut",
        duration: 0.6,
      },
    },
  };
  return (
    <motion.div
      variants={sidebarVariants}
      initial="closed"
      animate={isSidebarOpen ? "open" : "closed"}
      className={`gap-10 fixed top-0 right-0 h-full w-full z-40 transform bg-sidebar bg-center bg-cover bg-no-repeat
        ${
          isSidebarOpen ? "flex flex-col opacity-1" : "translate-x-full hidden"
        } `}
    >
      <header className="flex items-center justify-end mr-[10px] h-[60px]">
        <button onClick={() => closeSidebar()} className="p-2">
          <AiOutlineClose size={25} />
        </button>
      </header>
      <ul className="flex flex-col grow items-center w-full">
        {navLinks.map((link) => {
          return (
            <li
              key={link.id}
              className="flex items-center justify-center w-full h-[30px] py-6 hover:bg-gray-200 transition duration-300"
            >
              <Link
                to={link.path}
                className="text-2xl"
                onClick={() => closeSidebar()}
              >
                {link.text}
              </Link>
            </li>
          );
        })}
      </ul>
    </motion.div>
  );
};

export default Sidebar;
