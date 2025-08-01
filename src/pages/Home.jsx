import React from "react";
import Hero from "../components/Hero";
import PageTwo from "../components/PageTwo";
import ClientOverview from "../components/ClientOverview";
import Experience from "../components/Experience";
import Stickers from "./Stickers";

function Home() {
  return (
    <div className="w-full">
      <Hero />
      <PageTwo />
      <ClientOverview />
      <Experience />
      <h1 className="text-4xl text-white text-center">
        Building Brands, Designing Experiences.
      </h1>
{/* Cramblem Paper */}
<Stickers />
      
    </div>
  );
}

export default Home;
