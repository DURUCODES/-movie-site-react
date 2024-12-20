import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";
import Search from "../search/Search";
import { FaRegUserCircle } from "react-icons/fa";
import Modal from "../modal/Modal";
import User from "../User/User";

export const navLinks = [
  {
    id: 1,
    url: "/",
    label: "Home",
  },

  {
    id: 2,
    url: "/trending",
    label: "Trending",
  },

  {
    id: 3,
    url: "/browsemovies",
    label: "Browse Movies",
  },

  {
    id: 4,
    url: "/tv",
    label: "Tv Show",
  },

  {
    id: 5,
    url: "/popular",
    label: "Popular Movies",
  },
];
const MobileNav = ({ isOpen, closeNavBar }) => {
  const navOpen = isOpen ? "translate-x-0" : "-translate-x-full";
  const navigate = useNavigate();

  const handleLinkClick = (url) => {
    navigate(url);
    closeNavBar();
  };

  return (
    <div>
      {/* Overlay */}
      <div
        className={`transform  transition-all duration-500 inset-0 z-10 h-screen bg-black fixed opacity-70 ${
          isOpen ? "block" : "hidden"
        }`}
      ></div>
      {/* Nav links */}

      <div
        className={`text-white bg-black transform transition-all duration-500 delay-300 top-0 fixed flex flex-col justify-center h-full w-[80%] sm:w-[60%] space-y-6 z-[10] py-2  border border-transparent text-center  ${navOpen}`}
        style={{ height: "100%" }} // Ensure it covers full height
      >
        <div className="absolute top-10 flex items-center">
          <div className="flex items-center cursor-pointer transition-all duration-200 text-white space-x-2 hover:text-red-400">
            <Search closeNavBar={closeNavBar} />
          </div>
        </div>
        {navLinks.slice(0, 5).map((navlink) => (
          <Link key={navlink.id} to={navlink.url}>
            <p
              onClick={() => handleLinkClick(navlink.url)}
              className="text-white text-[20px] ml-12 font-medium hover:text-yellow-300 pb-1 w-fit border-b-[1.5px]"
            >
              {navlink.label}
            </p>
          </Link>
        ))}
        <AiOutlineClose
          onClick={closeNavBar}
          className="absolute top-[0.7rem] right-[1.4rem] sm:w-8 sm:h-8 w-6 h-6 text-white cursor-pointer"
        />
      </div>
    </div>
  );
};

export default MobileNav;
