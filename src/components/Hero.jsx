import React from "react";
import { Link } from "react-router-dom";
import background from "../assets/main-images/artist-rebel-background.svg";
import camera from "../assets/Artist/camera.svg";
import motionGraphics from "../assets/Artist/motion-graphics.svg";
import uiUx from "../assets/Artist/ui-ux-design.svg";
import printDesign from "../assets/Artist/print-design.svg";
import productPhotographer from "../assets/Artist/product-photographer.svg";
import videoEditing from "../assets/Artist/video-editing.svg";
import brandIdentity from "../assets/Artist/brand-identity-design.svg";
import artistRebel from "../assets/main-images/artist-rebel-image.svg";

function Hero() {
  return (
    <div>
      <div className="w-full max-w-6xl mx-auto">
        <h1 className="w-full break-words text-center font-extrabold leading-tight text-[48px] sm:text-[72px] md:text-[104px] lg:text-[154px]">
          ART DIRECTOR
        </h1>
        <div className="flex gap-6 lg:gap-12 flex-col sm:flex-row justify-center items-center">
          <p className="text-[14px] sm:text-[16px] w-full sm:w-[40%]">
            With 6+ years of experience and 100+ brands globally, I create
            unique, trend-driven designs across branding, advertising, web, and
            packaging. From Mumbai, Kolkata, Varanasi, and Delhi to Ahmedabad,
            my journey shapes designs that captivate and exceed expectations.
          </p>
          <p className="text-[14px] sm:text-[16px] w-full sm:w-[40%]">
            Based in Ahmedabad, I work as an Assistant Design Manager at ADZ
            Network Media, a multinational design agency in Oman. I create
            impactful designs across branding, advertising, UI/UX, and packaging
            that resonate with audiences and build memorable brand identities.
          </p>
          <div className="text-[14px] sm:text-[16px] w-full sm:w-[20%] sm:h-[18vh] flex items-end justify-end">
            <Link className="whitespace-nowrap border-b-[1.6px] leading-[14px]" to="/contact">
              LET'S CONNECT{" "}
              <i
                className="ri-arrow-right-line"
                aria-label="arrow right"
              ></i>
            </Link>
          </div>
        </div>
      </div>

      <div className="py-8 relative max-w-7xl w-full mx-auto">
        <img
          src={background}
          alt="Artistic rebel background"
          className="w-[164vw] xl:max-w-[1160px] relative left-[-6%] top-0"
          loading="eager"
        />
        <img
          src={artistRebel}
          alt="image"
          className="absolute top-2 w-[32vw] xl:w-[400px] left-[1/2] translate-x-[110%]"
          loading="lazy"
        />
        <img
          src={brandIdentity}
          alt="Brand Identity Design Sticker"
          className="absolute top-5 sm:top-2 w-[14vw] xl:w-[162px] left-[18.5%] translate-x-0 translate-y-0"
          loading="lazy"
        />
        <img
          src={uiUx}
          alt="UI/UX Design Sticker"
          className="absolute top-[46%] left-[7%] w-[17vw] xl:w-[224px] translate-x-0 translate-y-[-10%]"
          loading="lazy"
        />
        <img
          src={motionGraphics}
          alt="Motion Graphics Sticker"
          className="absolute top-[68%] left-[24%] w-[12vw] xl:w-[144px] translate-y-[-22%] sm:translate-y-0"
          loading="lazy"
        />
        <img
          src={videoEditing}
          alt="Video Editing Sticker"
          className="absolute top-[30%] sm:top-[20%] left-[68.5%] w-[14vw] xl:w-[144px] translate-y-[-22%] sm:translate-y-0"
          loading="lazy"
        />
        <img
          src={printDesign}
          alt="Print Design Sticker"
          className="absolute top-[40%] sm:top-[32%] left-[83%] lg:left-[81%] w-[18vw] lg:w-[214px]"
          loading="lazy"
        />
        <img
          src={camera}
          alt="Camera Sticker"
          className="absolute bottom-0 left-[70%] w-[14vw] lg:w-[156px]"
          loading="lazy"
        />
        <img
          src={productPhotographer}
          alt="Product Photographer Sticker"
          className="absolute bottom-0 left-[70%] w-[14vw] lg:w-[156px]"
          loading="lazy"
        />
      </div>
    </div>
  );
}

export default Hero;
