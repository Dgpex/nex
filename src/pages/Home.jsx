import React from "react";
import TechnologySection from "./TechnologySection";
import Work from "./Work";
import Services from "./Services";
import About from "./About";
import Section1 from "./Section1";
import Stats from "./Stats";

function Home() {
  return (
    <div>
      <Section1 />
      <About />
      <Services />
      <Stats />
      <Work />
      <TechnologySection />
    </div>
  );
}

export default Home;
