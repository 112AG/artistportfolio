import React from "react";

import backgroundTwo from "../assets/clientOverview/artist-rebel-background2.svg";
import AfterEffects from "../assets/clientOverview/AfterEffects.png";
import Blender from "../assets/clientOverview/Blender.png";
import corelDraw from "../assets/clientOverview/corelDraw.png";
import experienceBox from "../assets/clientOverview/experienceBox.png";
import Figma from "../assets/clientOverview/Figma.png";
import Illustrator from "../assets/clientOverview/Illustrator.png";
import Photoshop from "../assets/clientOverview/Photoshop.png";
import PremierePro from "../assets/clientOverview/PremierePro.png";
import completebox from "../assets/clientOverview/projectCompletionBox.png";
import brandbox from "../assets/clientOverview/Rectangle.png";
import Xd from "../assets/clientOverview/Xd.png";

const clientOverviewImages = [
  AfterEffects,
  Blender,
  corelDraw,
  Figma,
  Illustrator,
  Photoshop,
  PremierePro,
  Xd,
];

function ClientOverview() {
  return (
    <div className="w-full max-w-6xl mx-auto pb-24 lg:pb-[322px]">
      <h1 className="w-full break-words text-center font-extrabold leading-tight text-[22px] sm:text-[18px] md:text-[32px] lg:text-[56px] text-[#EEE6E2] mb-8">
        CLIENT OVERVIEW
      </h1>

      <div className="relative w-full flex justify-center">
        <img
          src={backgroundTwo}
          alt="Background-Grid"
          className="w-full max-w-[900px] mx-auto"
        />
        <div className="absolute top-2 xs:top-4 sm:top-8 left-1/2 -translate-x-1/2 w-full max-w-[95vw] xs:max-w-[354px] sm:max-w-[654px] md:max-w-[864px] px-1 xs:px-2">
          <div className="flex flex-wrap justify-center items-center gap-2 md:gap-4 lg:gap-6 pb-1 xs:pb-2 md:pb-6">
            {clientOverviewImages.map((img, idx) => (
              <div key={idx} className="flex-shrink-0">
                <img
                  src={img}
                  alt={`client-overview-${idx + 1}`}
                  className="w-[32px] py-2 sm:py-0 xs:w-[25px] sm:w-[36px] md:w-[42px] lg:w-[58px]"
                  loading="lazy"
                />
              </div>
            ))}
          </div>

          <p className="text-center font-bold text-[24px] md:text-[34px] lg:text-[clamp(28px,1,8vw,54px)] leading-[22px] sm:leading-8 text-[#0A0A0A] mb-4 sm:mb-8 whitespace-normal break-words px-1">
            I AM AN ART DIRECTOR WITH <br/> A PASSION OF CREATIVE <br/> INNOVATION
          </p>
          <div>
 
            <h2 className="absolute top-58 lg:top-58 z-20 left-28 lg:left-18  text-black font-extrabold text-xl sm:text-6xl lg:text-8xl rotate-[18deg]">
              06+
            </h2>
            <p className="absolute top-72 lg:top-80 z-20 left-20 lg:left-10 xl:left-12 text-black font-extrabold text-xl lg:text-2xl rotate-[18deg] text-center">
              YEARS <br />
              EXPERIANCE
            </p>

            <h2 className="absolute top-[128%] lg:top-62 z-20 left-[40.5%] lg:left-78 text-black font-extrabold sm:text-6xl lg:text-[90px] rotate-[0deg]">
              100+{" "}
            </h2>
            <p className="absolute top-[158%] lg:top-86 z-20 left-[38.5%] lg:left-84 text-black font-extrabold text-xl rotate-[0deg] text-center">
              NATIONAL <br />
              INTERNATIONAL <br />
              BRANDS
            </p>

            <h2 className="absolute top-54 lg:top-52 z-20 left-[71%] lg:left-146 xl:left-146 text-black font-extrabold sm:text-[58px] lg:text-[90px] rotate-[-18deg]">
              999+{" "}
            </h2>
            <p className="absolute top-[144%] lg:top-78 z-20 left-[82%] lg:left-[83%] -translate-x-1/2 text-black font-extrabold text-xl lg:text-2xl text-center rotate-[-20deg]">
              PROJECT <br />
              COMPLETED
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ClientOverview;
