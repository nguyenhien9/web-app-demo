import React, { useEffect, useState } from "react";
import { IoArrowBackOutline } from "react-icons/io5";
import { AiOutlineMenu } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { Sidebar } from "./index";
import { useSidebarContext } from "../context/sidebarContext";
const Navbar = ({ title }) => {
  const { isSidebarOpen, openSidebar } = useSidebarContext();
  // console.log("@@@sidebar", isSidebarOpen);

  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
      // console.log(scrollTop);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };

  return (
    <div
      className={`w-full h-[60px] z-20 flex items-center justify-between px-4 bg-primary ${
        scrolled ? "sticky top-0 bg-rgba-blue w-full bg-rgba-blue" : ""
      } `}
    >
      <button type="button" onClick={() => goBack()}>
        <IoArrowBackOutline className="text-white text-2xl" />
      </button>
      <h5 className="text-white font-bold text-xl tracking-wide capitalize">
        {title}
      </h5>
      <button className="text-white text-xl" onClick={() => openSidebar()}>
        <AiOutlineMenu />
      </button>
    </div>
  );
};

export default Navbar;
