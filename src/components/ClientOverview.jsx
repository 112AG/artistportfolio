import React from "react";

import backgroundTwo from "../assets/clientOverview/artist-rebel-background2.svg";
import AfterEffects from "../assets/clientOverview/AfterEffects.png";
import Blender from "../assets/clientOverview/Blender.png";
import corelDraw from "../assets/clientOverview/corelDraw.png";
import Figma from "../assets/clientOverview/Figma.png";
import Illustrator from "../assets/clientOverview/Illustrator.png";
import Photoshop from "../assets/clientOverview/Photoshop.png";
import PremierePro from "../assets/clientOverview/PremierePro.png";
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
    <div className="w-full max-w-6xl mx-auto">
      <h1 className="w-full break-words text-center font-extrabold leading-tight text-[30px] xs:text-[22px] sm:text-[53px] md:text-[62px] lg:text-[84px] xl:text-[94px] text-[#EEE6E2] mb-8 font-presser-bold">
        CLIENT OVERVIEW
      </h1>

      <div className="relative w-full flex justify-center">
        <img
          src={backgroundTwo}
          alt="Background-Grid"
          className="w-full max-w-[900px] mx-auto"
        />
        <div className="absolute top-2 xs:top-4 sm:top-8 left-1/2 -translate-x-1/2 w-full px-1 xs:px-2">
          <div className="flex flex-wrap justify-center items-center gap-2 md:gap-4">
            {clientOverviewImages.map((img, idx) => (
              <div key={idx} className="flex-shrink-0">
                <img
                  src={img}
                  alt={`client-overview-${idx + 1}`}
                  className="w-[24px] py-2 sm:py-0 xs:w-[25px] sm:w-[36px] md:w-[42px] lg:w-[58px]"
                  loading="lazy"
                />
              </div>
            ))}
          </div>

          <p className="text-center font-bold leading-[12.5px] text-[14px] sm:leading-[26px] sm:text-[26px] lg:text-[28px] pt-2 lg:pt-6  text-[#0A0A0A] mb-4 sm:mb-8 whitespace-normal break-words px-1">
            I AM AN ART DIRECTOR WITH <br/> A PASSION OF CREATIVE <br/> INNOVATION
          </p>

        </div>
      </div>
    </div>
  );
}

export default ClientOverview;
