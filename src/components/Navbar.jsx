import React, { useState } from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { LuPhone, LuMenu, LuX } from "react-icons/lu";
import { MdKeyboardArrowDown } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { FiShoppingBag } from "react-icons/fi";
import { NavLink } from "react-router-dom";

import { navbarImages } from "../data/data";
import "../App.css";

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Find Doctor", path: "/doctor" },
    { name: "Lab Tests", path: "/lab" },
    { name: "Shop", path: "/shop" },
    { name: "Forum", path: "/forum" },
    { name: "About Us", path: "/contact" }
  ];

  return (
    <>
      {/* 🔥 STICKY NAVBAR TOP */}
      <div className="w-full sticky top-0 z-50 shadow-md">
        
        {/* TOP BLACK BAR */}
        <div className="upper-sec w-full bg-[#373636] flex flex-col sm:flex-row items-center justify-center p-3 gap-3 sm:gap-8 relative">
          <p className="text-[#D9D9D9] font-medium text-sm sm:text-[17px] text-center">
            Your first 5 minutes instant call is free.
          </p>
          <button className="bg-[#3A643B] flex items-center gap-2 text-white px-4 py-2 sm:px-8 sm:py-3 rounded-xl font-semibold cursor-pointer text-sm sm:text-base hover:bg-green-800 transition-colors">
            <FaPhoneAlt className="mt-1" />
            Try Instant Free Call Now
          </button>
        </div>

        {/* MAIN NAVBAR */}
        <div className="w-full bg-[#FFF7E2] pb-2 sm:pb-5 px-4 sm:px-8 flex flex-col relative">
          
          <div className="flex items-center justify-between mt-5">
            {/* PHONE LEFT - Hidden on very small screens */}
            <p className="hidden lg:flex gap-2 items-center text-[#3A643C]">
              <LuPhone />
              <span className="text-[15px] xl:text-[17px] font-medium">+91 9826352321</span>
            </p>

            {/* LOGO */}
            <div className="flex-shrink-0 mx-auto lg:mx-0">
              <img src={navbarImages.logo} className="h-[30px] sm:h-[40px] w-auto object-contain" alt="Logo" />
            </div>

            {/* MOBILE MENU TOGGLE */}
            <div className="lg:hidden flex items-center">
               <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-[#3A643B] text-2xl focus:outline-none">
                 {isMobileMenuOpen ? <LuX /> : <LuMenu />}
               </button>
            </div>

            {/* NAV LINKS & ICONS - Desktop */}
            <div className="hidden lg:flex items-center gap-6 xl:gap-10 text-[#3A643B] font-semibold">
              <div className="flex gap-6 xl:gap-8">
                {navLinks.map((link) => (
                  <NavLink
                    key={link.path}
                    to={link.path}
                    className={({ isActive }) =>
                      isActive
                        ? "pb-1 border-b-2 border-[#3A643B] text-[#3A643B]"
                        : "hover:text-green-700 transition-colors"
                    }
                  >
                    {link.name}
                  </NavLink>
                ))}
              </div>

              {/* ICONS */}
              <div className="flex gap-3 xl:gap-4 items-center">
                <div className="relative cursor-pointer hover:opacity-80 transition-opacity">
                  <img src={navbarImages.cartIcon} className="w-8 h-8 xl:w-9 xl:h-9 bg-[#D2D9D2] rounded-full p-2" alt="Cart" />
                  <span className="absolute -top-1 -right-1 xl:-top-2 xl:-right-2 font-[Poppins] bg-[#3A643C] text-white text-[10px] xl:text-xs w-4 h-4 xl:w-5 xl:h-5 rounded-full flex items-center justify-center">
                    ₹2
                  </span>
                </div>

                <div className="relative cursor-pointer hover:opacity-80 transition-opacity">
                  <img src={navbarImages.bellIcon} className="w-8 h-8 xl:w-9 xl:h-9 bg-[#D2D9D2] rounded-full p-2" alt="Notifications" />
                  <span className="absolute -top-1 -right-1 xl:-top-2 xl:-right-2 font-[Poppins] bg-[#3A643C] text-white text-[10px] xl:text-xs w-4 h-4 xl:w-5 xl:h-5 rounded-full flex items-center justify-center">
                    1
                  </span>
                </div>

                <img src={navbarImages.profileIcon} className="w-8 h-8 xl:w-9 xl:h-9 bg-[#D2D9D2] rounded-full p-2 cursor-pointer hover:opacity-80 transition-opacity" alt="Profile" />
                <img src={navbarImages.menuArrow} className="w-8 h-8 xl:w-9 xl:h-9 bg-[#D2D9D2] rounded-full p-2 cursor-pointer hover:opacity-80 transition-opacity" alt="Menu" />
                
                <MdKeyboardArrowDown className="text-[17px] cursor-pointer hover:text-green-800" />
              </div>
            </div>
          </div>

          {/* MOBILE NAV MENU */}
          {isMobileMenuOpen && (
            <div className="lg:hidden flex flex-col gap-4 mt-4 bg-[#FFF7E2] rounded-lg p-4 border border-[#e2d5b8] shadow-sm">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    `block py-2 text-lg font-semibold border-b border-[#e2d5b8] ${isActive ? "text-[#3A643B]" : "text-gray-700 hover:text-green-700"}`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
              
              <div className="flex gap-4 items-center justify-center mt-2">
                 <div className="relative">
                  <img src={navbarImages.cartIcon} className="w-10 h-10 bg-[#D2D9D2] rounded-full p-2" alt="Cart" />
                  <span className="absolute -top-1 -right-1 bg-[#3A643C] text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
                    2
                  </span>
                </div>
                <div className="relative">
                  <img src={navbarImages.bellIcon} className="w-10 h-10 bg-[#D2D9D2] rounded-full p-2" alt="Notifications" />
                  <span className="absolute -top-1 -right-1 bg-[#3A643C] text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
                    1
                  </span>
                </div>
                <img src={navbarImages.profileIcon} className="w-10 h-10 bg-[#D2D9D2] rounded-full p-2" alt="Profile" />
              </div>
            </div>
          )}

        </div>
      </div>
    </>
  );
};
