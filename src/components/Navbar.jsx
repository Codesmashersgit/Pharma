import React from 'react'
import { FaPhoneAlt } from "react-icons/fa";
import pic from "../assets/Amrutam.png"
import { LuPhone } from "react-icons/lu";
import pic1 from "../assets/Frame 1171275545.png"
import pic2 from "../assets/Frame 1000007496.png"
import pic3 from "../assets/Untitled-1 [Recovered]-04 2.png"
import pic4 from "../assets/Frame 1171275530.png"
import { MdKeyboardArrowDown } from "react-icons/md";
import pic5 from "../assets/Model.png";
import { CiSearch } from "react-icons/ci";
import "../App.css"
import { FiShoppingBag } from "react-icons/fi";
import pic6 from "../assets/All.svg"
import pic7 from "../assets/Hair.svg"
import pic8 from "../assets/Skin care.svg"
import pic9 from "../assets/Stomach.svg"
import pic10 from "../assets/Bones.svg"
import pic11 from "../assets/Immunity.svg"
import pic12 from "../assets/hair care.svg"

export const Navbar = () => {

  return (
    <>
   <div className="upper-sec fixed w-full bg-[#373636] flex items-center justify-center p-5">
    <p className="content text-[#D9D9D9] font-[DM Sans1] font-medium text-[17px]">
      Your first 5 minutes instant call is free.
    </p>
    
    <button className="bg-[#3A643B] flex items-center justify-center gap-3 text-[16px] text-white px-28 py-3 rounded-xl absolute right-28 font-[DM Sans2] font-semibold cursor-pointer ">
        <FaPhoneAlt className='text-center mt-1'/>
      Try Instant Free Call Now
    </button>
</div>

<div className="middle-sec py-16 fixed w-full ">
  <div className="w-full bg-[#FFF7E2] h-screen flex flex-col items-center relative">
      
    {/* PHONE LEFT */}
    <p className="phone flex gap-3 items-center absolute left-7 top-5">
      <LuPhone />
      <span className="font-[DM Sans] text-[17px]">+91 9826352321</span>
    </p>

    {/* LOGO CENTER */}
    <img 
      src={pic} 
      className="h-[40px] w-[280px] mt-5" 
      alt="Logo" 
    />

    {/* LINKS + ICONS */}
    <div className="links flex items-center gap-12 mt-5 text-[#3A643B] font-[DM Sans] font-semibold">

      <a href="">Home</a>
      <a href="">Find Doctor</a>
      <a href="">Lab Tests</a>

      {/* SHOP underline niche */}
      <a href="" className="pb-1 border-b-2 border-[#3A643B]">Shop</a>

      <a href="">Forum</a>
      <a href="">About Us</a>

      {/* ICONS RIGHT */}
      <div className="icon flex gap-4 absolute right-40 items-center">
        
        {/* Icon 1 with badge */}
        <div className="relative">
          <img src={pic1} className="w-9 h-9 bg-[#D2D9D2] rounded-full py-2 px-2 " />
          <span className="absolute -top-2 -right-2 bg-[#3A643C] text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
            ₹2
          </span>
        </div>

        {/* Icon 2 with badge */}
        <div className="relative">
          <img src={pic2} className="w-9 h-9 bg-[#D2D9D2] rounded-full py-2 px-2" />
          <span className="absolute -top-2 -right-2 bg-[#3A643C] text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
            1
          </span>
        </div>

        {/* Icon 3 */}
        <img src={pic3} className="w-9 h-9 bg-[#D2D9D2] rounded-full py-2 px-2" />
        {/* Icon 4 */}
        <img src={pic4} className="w-9 h-9 bg-[#D2D9D2] rounded-full py-2 px-2" />

        {/* Dropdown arrow */}
        <MdKeyboardArrowDown className='font-bold text-[17px] cursor-pointer'/>

      </div>

    </div>
    <div className='pt-5 relative'>
  <img src={pic5} className='h-[202px] object-cover w-screen'/>
  
  <p className='absolute inset-0 gap-14 top-10 font-[Poppins] flex justify-center text-black text-3xl font-semibold leading-tight-2 '>

    Store
  </p>
    <div className="absolute inset-x-0 bottom-20 flex items-center gap-7 justify-center mb-[-25px]">
  <div className="relative w-[50%] md:w-[40%]">
    {/* Input field */}
    <input
      type="search"
      placeholder="Search for Kuntal Care"
      className="w-full p-3 pl-10 border border-gray-300 shadow-md rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
    />

    {/* Search icon */}
    <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-black text-[20px] font-extrabold">
      <CiSearch />
    </span>
    
  </div>
  <div className='bg-[#FFFFFF] px-2 py-2 rounded-md'>
  <FiShoppingBag className='text-[30px] cursor-pointer'/>
  </div>
</div>

</div>

     <div className='flex gap-7'>
        <img src={pic6} alt="hello" className='w-[84px] h-[201px]'/>
        <img src={pic7} alt="" className='w-[84px] h-[201px]'/>
        <img src={pic8} alt="" className='w-[84px] h-[201px]'/>
        <img src={pic9} alt="" className='w-[84px] h-[201px]'/>
        <img src={pic10} alt="" className='w-[84px] h-[201px]'/>
        <img src={pic11} alt="" className='w-[84px] h-[201px]'/>
        <img src={pic12} alt="" className='w-[84px] h-[201px]'/>
     </div>
  </div>

   
</div>



</>

  )
}
