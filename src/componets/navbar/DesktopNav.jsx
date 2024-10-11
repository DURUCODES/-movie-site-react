import React, { useEffect, useState } from "react";
import { FaHouse } from "react-icons/fa6";
import { FaRegUserCircle } from "react-icons/fa";
import { HiBars3BottomRight } from "react-icons/hi2";
import { Link, NavLink } from "react-router-dom";
import Search from "../search/Search";
import Modal from "../modal/Modal";
import Login from "../User/Login";
import SignUp from "../User/SignUp";
import User from "../User/User";

export const navLinks = [
  { id: 1, url: "/", label: "Home" },
  { id: 2, url: "/trending", label: "Trending" },
  { id: 3, url: "/browsemovies", label: " Movies Genre" },
  { id: 4, url: "/tv", label: "Tv show" },
  { id: 5, url: "/popular", label: "Popular Movies" },
];

const DesktopNav = ({ opennavbar }) => {
  const [navbg, setNavBg] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  useEffect(() => {
    const handler = () => {
      if (window.scrollY >= 90) {
        setNavBg(true);
      } else {
        setNavBg(false);
      }
    };

    window.addEventListener("scroll", handler);
    return () => {
      window.removeEventListener("scroll", handler);
    };
  }, []);

  return (
    <div
      className={`${
        navbg
          ? "bg-gradient-to-tr from-cyan-600 to-cyan-400 "
          : "bg-transparent"
      } h-[10ch] z-[100] w-full flex items-center transition-all duration-200`}
    >
      <div className="flex  items-center h-full justify-between w-[95%] sm:w-[100%] xl:w-[100%] mx-auto md:px-4 sm:px-4     bg-slate-800 py-2 px-3 border border-transparent text-center shadow-md focus:bg-slate-700 focus:shadow-none active:bg-slate-70">
        {/* LOGO */}
        <div className="flex items-center space-x-2 ">
          <div className="md:w-10 md:h-10 w-6 h-6 rounded-full bg-gradient-to-tr from-cyan-600 to-cyan-400  flex text-white  items-center justify-center flex-col">
            <Link to="/">
              <FaHouse className="text-xs" />
            </Link>
          </div>
          <Link to="/">
            <h1 className="font-bold text-xs sm:text-base md:text-xl text-white">
              Movie Hub
            </h1>
          </Link>
          <div className=" hidden md:block">
            <Search />
          </div>
        </div>
        {/* navlink */}
        <div className="space-x-14 items-center hidden lg:flex">
          {navLinks.map((navlink) => (
            <NavLink
              key={navlink.id}
              to={navlink.url}
              className={({ isActive }) =>
                `text-black font-medium hover:text-red-300 ${
                  isActive ? "text-red-300 font-bold" : "text-white"
                }`
              }
            >
              {navlink.label}
            </NavLink>
          ))}
        </div>

        {/* Login and hamburger menu */}
        <div className="flex items-center space-x-4">
          {/* Login button */}
          <div className="items-center cursor-pointer  flex   transition-all duration-200 text-white space-x-2">
            <FaRegUserCircle className="w-5 h-5" onClick={openModal} />
            <p className="font-bold text-xs sm:text-base  hover:text-red-400">
              Login / Signup
            </p>
            <Modal isOpen={isModalOpen} onClose={closeModal}>
              <User />
            </Modal>
          </div>
          {/* Hamburger Menu */}
          <HiBars3BottomRight
            onClick={opennavbar}
            className="sm:w-8 sm:h-8 w-6 h-6 cursor-pointer text-white lg:hidden"
          />
        </div>
      </div>
    </div>
  );
};

export default DesktopNav;
