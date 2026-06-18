import React from "react";
import "../App.css";

import { downloadImages, benefits } from "../data/data";

const DownloadSection = () => {
  return (
    <div className="upper-left-sec border-t-2 border-[#DCD8CD] mt-10 md:mt-20 flex flex-col lg:flex-row justify-center lg:justify-around items-center relative pb-10 md:pb-28 px-4 sm:px-10 overflow-hidden">

      {/* LEFT SIDE CONTENT */}
      <div className="flex flex-col pt-10 md:pt-20 w-full lg:w-1/2 z-10">
        
        <div className="font-[DM Sans1] font-bold text-[28px] sm:text-[36px] text-[#3A643B] text-center lg:text-left">
          Download Amrutam Ayurveda App Now
        </div>

        <p className="w-full lg:max-w-[474px] leading-7 sm:leading-8 mt-5 font-[Poppins1] opacity-70 text-[14px] sm:text-[16px] text-center lg:text-left mx-auto lg:mx-0">
          The Amrutam Ayurveda App is your one-stop app for all things Ayurveda! Apart from mimicking the website, the app has added benefits
        </p>

        {/* BENEFITS GRID */}
        <div className="flex flex-wrap justify-center lg:justify-start gap-4 sm:gap-7 mt-8 sm:mt-10">

          {benefits.map((item, index) => (
            <div
              key={index}
              className="box flex items-center gap-3 border border-[#DCD8CD] rounded-xl w-full sm:w-[220px] px-3 py-2 bg-[#FFF7E2]"
            >
              <img
                src={downloadImages.benefitIcon}
                className="w-[30px] h-[30px] sm:w-[40px] sm:h-[40px]"
                alt="Benefit Icon"
              />
              <p className="font-[DM Sans3] text-[14px] sm:text-[16px] text-[#3A643B]">
                {item}
              </p>
            </div>
          ))}

          {/* DOWNLOAD BUTTONS */}
          <div className="flex flex-col sm:flex-row gap-3 mt-10 sm:mt-24 justify-center lg:justify-start w-full">
            <img src={downloadImages.playStore} alt="Play Store" className="h-12 sm:h-16 object-contain cursor-pointer" />
            <img src={downloadImages.appStore} alt="App Store" className="h-12 sm:h-16 object-contain cursor-pointer" />
          </div>

        </div>
      </div>

      {/* RIGHT SIDE DECORATIONS - Hidden on mobile, visible on desktop */}
      <div className="hidden lg:block w-1/2 relative min-h-[400px]">
        {/* We can place the decorations using percentage so it scales better */}
        <img src={downloadImages.deco1} className="absolute top-10 right-20 w-[15%]" alt="decoration" />
        <img src={downloadImages.deco2} className="absolute top-4 right-4 w-[25%]" alt="decoration" />
        <img src={downloadImages.deco3} className="absolute top-40 right-[30%] w-[20%]" alt="decoration" />
        <img src={downloadImages.deco4} className="absolute bottom-10 right-[20%] w-[18%]" alt="decoration" />
        <img src={downloadImages.deco5} className="absolute bottom-20 right-10 w-[15%]" alt="decoration" />
      </div>

    </div>
  );
};

export default DownloadSection;
