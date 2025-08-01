import React from "react";

import ahmedabadArtist from "../assets/cities/ahmedabadArtist.png";
import DelhiArtist from "../assets/cities/DelhiArtist.png";
import kolkataArtist from "../assets/cities/kolkataArtist.png";
import mumbaiArtist from "../assets/cities/mumbaiArtist.png";
import varanasiArtist from "../assets/cities/varanasiArtist.png";
import artistLine from "../assets/cities/artistLine.png";
import gridLine from "../assets/cities/gridArtist.svg";
function Experience() {
  return (
    <div className="w-full py-12 relative overflow-hidden">
      <img src={gridLine} alt="" className="absolute top-0 w-full object-cover"/>
      <div className="max-w-2xl mx-auto">
        <h1
          className="text-center font-extrabold leading-tight text-[40px] sm:text-[56px] md:text-[64px] lg:text-[72px] text-[#EEE6E2] mb-8 tracking-wide"
          style={{ letterSpacing: "0.04em" }}
        >
          EXPERIENCE
        </h1>
        <div className="flex gap-18">
          <div className="flex flex-col items-center justify-start">
            <img
              src={ahmedabadArtist}
              alt="Ahmedabad"
              className="w-22 h-22 mb-2"
              style={{ filter: "drop-shadow(0 0 0 #F3D30E)" }}
            />
            <img src={artistLine} alt="line" className="h-10 sm:h-21 my-1" />
            <img
              src={DelhiArtist}
              alt="Delhi"
              className="w-22 h-22 mb-2"
              style={{ filter: "drop-shadow(0 0 0 #00C2CB)" }}
            />
            <img src={artistLine} alt="line" className="h-10 sm:h-21 my-1" />
            <img
              src={kolkataArtist}
              alt="Kolkata"
              className="w-22 h-22 mb-2"
              style={{ filter: "drop-shadow(0 0 0 #F3A30E)" }}
            />
            <img src={artistLine} alt="line" className="h-10 sm:h-21 my-1" />
            <img
              src={mumbaiArtist}
              alt="Mumbai"
              className="w-22 h-22 mb-2"
              style={{ filter: "drop-shadow(0 0 0 #F33A5A)" }}
            />
            <img src={artistLine} alt="line" className="h-10 sm:h-21 my-1" />
            <img
              src={varanasiArtist}
              alt="Varanasi"
              className="w-22 h-22 mb-2"
              style={{ filter: "drop-shadow(0 0 0 #A3F30E)" }}
            />
          </div>
          <div className="flex flex-col gap-16 sm:gap-25">
            {/* 1 */}

            <div className="text-left mb-2">
              <div className="font-extrabold text-[18px] sm:text-[22px] md:text-[24px] lg:text-[26px]">
                ASSISTANT DESIGN MANAGER
              </div>
              <div className="font-bold text-[11px] sm:text-[13px] md:text-[15px] text-[#EEE6E2]">
                ADZ NETWORK MEDIA (APR 2023 - PRESENT) REMOTE
              </div>
              <div
                className="font-bold text-[11px] sm:text-[13px] md:text-[15px]"
                style={{ color: "#F3D30E" }}
              >
                AHMEDABAD
              </div>
            </div>
            {/* 2 */}
            <div className="text-left mb-2">
              <div className="font-extrabold text-[18px] sm:text-[22px] md:text-[24px] lg:text-[26px]">
                SR. GRAPHIC DESIGNER
              </div>
              <div className="font-bold text-[11px] sm:text-[13px] md:text-[15px] text-[#EEE6E2]">
                SMI INDUSTRIES (MAR 2023 - APR 2023)
              </div>
              <div
                className="font-bold text-[11px] sm:text-[13px] md:text-[15px]"
                style={{ color: "#00C2CB" }}
              >
                DELHI
              </div>
            </div>
            {/* 3 */}
            <div className="text-left mb-2">
              <div className="font-extrabold text-[18px] sm:text-[22px] md:text-[24px] lg:text-[26px]">
                SR. GRAPHIC DESIGNER
              </div>
              <div className="font-bold text-[11px] sm:text-[13px] md:text-[15px] text-[#EEE6E2]">
                ADWELL INTERNATIONAL PVT. LTD. (JAN 2020 - MAR 2022)
              </div>
              <div
                className="font-bold text-[11px] sm:text-[13px] md:text-[15px]"
                style={{ color: "#F3A30E" }}
              >
                KOLKATA, WEST BENGAL
              </div>
            </div>
            {/* 4 */}
            <div className="text-left mb-2">
              <div className="font-extrabold text-[18px] sm:text-[22px] md:text-[24px] lg:text-[26px]">
                GRAPHIC DESIGNER
              </div>
              <div className="font-bold text-[11px] sm:text-[13px] md:text-[15px] text-[#EEE6E2]">
                IMAGINE ART & COMPANY (FEB 2019 - MAY 2020)
              </div>
              <div
                className="font-bold text-[11px] sm:text-[13px] md:text-[15px]"
                style={{ color: "#F33A5A" }}
              >
                MUMBAI, MAHARASHTRA
              </div>
            </div>
            {/* 5 */}
            <div className="text-left mb-2">
              <div className="font-extrabold text-[18px] sm:text-[22px] md:text-[24px] lg:text-[26px]">
                ASSISTANT PHOTOGRAPHER
              </div>
              <div className="font-bold text-[11px] sm:text-[13px] md:text-[15px] text-[#EEE6E2]">
                FILMY FOTO (APR 2018 - JUL 2018)
              </div>
              <div
                className="font-bold text-[11px] sm:text-[13px] md:text-[15px]"
                style={{ color: "#A3F30E" }}
              >
                VARANASI, UTTAR PRADESH
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
