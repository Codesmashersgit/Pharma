
import React from "react";
import "../App.css";

import { downloadImages, benefits } from "../data/data";

const DownloadSection = () => {
  return (
    <div className="upper-left-sec border-t-2 border-[#DCD8CD] mt-20 flex justify-around relative pb-28">

      {/* LEFT SIDE CONTENT */}
      <div className="flex flex-col pt-20">
        
        <div className="font-[DM Sans1] w-[530px] font-bold text-[36px] text-[#3A643B]">
          Download Amrutam Ayurveda App Now
        </div>

        <p className="w-[474px] leading-8 mt-5 font-[Poppins1] opacity-70 text-[16px]">
          The Amrutam Ayurveda App is your one-stop app for all things Ayurveda! Apart from mimicking the website, the app has added benefits
        </p>

        {/* BENEFITS GRID */}
        <div className="w-[530px] flex flex-wrap gap-x-7 gap-y-4 mt-10">

          {benefits.map((item, index) => (
            <div
              key={index}
              className="box flex items-center gap-3 border border-[#DCD8CD] rounded-xl w-[220px] px-3 py-2"
            >
              <img
                src={downloadImages.benefitIcon}
                className="w-[40px] h-[40px]"
              />
              <p className="font-[DM Sans3] text-[16px] text-[#3A643B]">
                {item}
              </p>
            </div>
          ))}

          {/* DOWNLOAD BUTTONS */}
          <div className="flex gap-3 w-[503px] h-[71px] mt-24">
            <img src={downloadImages.playStore} alt="Play Store" />
            <img src={downloadImages.appStore} alt="App Store" />
          </div>

        </div>
      </div>

    
      <div>
        <img src={downloadImages.deco1} className="absolute top-40 right-96" />
        <img src={downloadImages.deco2} className="absolute top-24 right-24" />
        <img src={downloadImages.deco3} className="absolute top-64 right-[28%]" />
        <img src={downloadImages.deco4} className="absolute top-[60%] right-[20%]" />
        <img src={downloadImages.deco5} className="absolute top-[58%] right-[15%]" />
      </div>

    </div>
  );
};

export default DownloadSection;
