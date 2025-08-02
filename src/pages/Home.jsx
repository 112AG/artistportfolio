import React, { useRef, useEffect } from "react";
import Hero from "../components/Hero";
import PageTwo from "../components/PageTwo";
import ClientOverview from "../components/ClientOverview";
import Experience from "../components/Experience";
import Stickers from "./Stickers";
import ArtistRebelThought from "../assets/ArtistRebelThought.mp4";

function Home() {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Play video every time it comes into view
            video.play();
          } else {
            // Pause video when it goes out of view
            video.pause();
          }
        });
      },
      {
        threshold: 0.8, // Trigger when 8% of video is visible
      }
    );

    observer.observe(video);

    return () => {
      observer.unobserve(video);
    };
  }, []);

  return (
    <div className="w-full">
      <Hero />
      <PageTwo />
      <ClientOverview />
      <Experience />
      <h1 className="text-4xl text-white text-center">
        Building Brands, Designing Experiences.
      </h1>
      
      {/* Video Section */}
      <div className="mt-8 sm:mt-12 flex justify-center">
        <video
          ref={videoRef}
          className="w-full max-w-[600px] rounded-lg shadow-lg"
          muted
          playsInline
        >
          <source src={ArtistRebelThought} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <Stickers />
      
    </div>
  );
}

export default Home;
