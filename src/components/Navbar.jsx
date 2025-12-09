import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { LuPhone } from "react-icons/lu";
import { MdKeyboardArrowDown } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { FiShoppingBag } from "react-icons/fi";
import { NavLink } from "react-router-dom"; // ✅ use NavLink

import { navbarImages } from "../data/data";
import "../App.css";

export const Navbar = () => {
  return (
    <>
      {/* 🔥 STICKY NAVBAR TOP */}
      <div className="w-full sticky top-0 z-50">

        {/* TOP BLACK BAR */}
        <div className="upper-sec w-full bg-[#373636] flex items-center justify-center p-5 relative">
          <p className="text-[#D9D9D9] font-medium text-[17px]">
            Your first 5 minutes instant call is free.
          </p>

          <button className="bg-[#3A643B] flex items-center gap-3 text-white px-28 py-3 rounded-xl absolute right-28 font-semibold cursor-pointer">
            <FaPhoneAlt className="mt-1" />
            Try Instant Free Call Now
          </button>
        </div>

        {/* MAIN NAVBAR */}
        <div className="w-full bg-[#FFF7E2] pb-5 flex flex-col items-center relative shadow-md">

          {/* PHONE LEFT */}
          <p className="flex gap-3 items-center absolute left-7 top-5 text-[#3A643C]">
            <LuPhone />
            <span className="text-[17px]">+91 9826352321</span>
          </p>

          {/* LOGO */}
          <img src={navbarImages.logo} className="h-[40px] w-[280px] mt-5" alt="Logo" />

          {/* NAV LINKS */}
          <div className="flex items-center gap-12 mt-5 text-[#3A643B] font-semibold">

            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "pb-1 border-b-2 border-[#3A643B] text-[#3A643B]"
                  : "hover:text-green-700"
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/doctor"
              className={({ isActive }) =>
                isActive
                  ? "pb-1 border-b-2 border-[#3A643B] text-[#3A643B]"
                  : "hover:text-green-700"
              }
            >
              Find Doctor
            </NavLink>

            <NavLink
              to="/lab"
              className={({ isActive }) =>
                isActive
                  ? "pb-1 border-b-2 border-[#3A643B] text-[#3A643B]"
                  : "hover:text-green-700"
              }
            >
              Lab Tests
            </NavLink>

            <NavLink
              to="/shop"
              className={({ isActive }) =>
                isActive
                  ? "pb-1 border-b-2 border-[#3A643B] text-[#3A643B]"
                  : "hover:text-green-700"
              }
            >
              Shop
            </NavLink>

            <NavLink
              to="/forum"
              className={({ isActive }) =>
                isActive
                  ? "pb-1 border-b-2 border-[#3A643B] text-[#3A643B]"
                  : "hover:text-green-700"
              }
            >
              Forum
            </NavLink>

            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive
                  ? "pb-1 border-b-2 border-[#3A643B] text-green-700"
                  : "hover:text-green-700"
              }
            >
              About Us
            </NavLink>

            {/* ICONS */}
            <div className="flex gap-4 absolute right-40 items-center">
              <div className="relative">
                <img src={navbarImages.cartIcon} className="w-9 h-9 bg-[#D2D9D2] rounded-full p-2" />
                <span className="absolute -top-2 -right-2 font-[Poppins] bg-[#3A643C] text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                  ₹2
                </span>
              </div>

              <div className="relative">
                <img src={navbarImages.bellIcon} className="w-9 h-9 bg-[#D2D9D2] rounded-full p-2" />
                <span className="absolute -top-2 -right-2 font-[Poppins] bg-[#3A643C] text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                  1
                </span>
              </div>

              <img src={navbarImages.profileIcon} className="w-9 h-9 bg-[#D2D9D2] rounded-full p-2" />
              <img src={navbarImages.menuArrow} className="w-9 h-9 bg-[#D2D9D2] rounded-full p-2" />

              <MdKeyboardArrowDown className="text-[17px] cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
