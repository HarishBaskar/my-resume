import React from "react";
import Header from "./Header/Header";
import "./Resume.css";
import AboutMe from "./AboutMe/index";
import Portfolio from "./Portfolio/index";
import Vita from "./Vita/index";
import Testimonials from "./Testimonials/index";
import Footer from "./Footer/index";
import { Parallax } from "react-parallax";
import Wallpaper1 from "../../Images/wallpaper1.jpg";

const transformElement = (percentage) => {
  return (
    <div>
      <div
        style={{
          position: "absolute",
          background: `rgba(175, 60, 162, ${percentage * 0.5})`,
          transform: "scale(2, 3)",
          borderRadius: "50%",
          width: percentage * 700,
          height: percentage * 700,
        }}
      />
    </div>
  );
};

const resume = ({ personalInfo }) => {
  return (
    <div>
      <Header personalInfo={personalInfo} />
      <div className="resumecontainer">
        <div className="whitesection">
          <AboutMe />
        </div>
        <Parallax
          bgImage={Wallpaper1}
          strength={300}
          className="parallaxcontainer"
          renderLayer={(percentage) => transformElement(percentage)}
        >
          <div style={{ height: 700 }}>
            <div className="insidestyles"></div>
          </div>
        </Parallax>
        <Vita />
        <Parallax
          bgImage={Wallpaper1}
          strength={400}
          className="parallaxcontainer"
          renderLayer={(percentage) => transformElement(percentage)}
        >
          <div style={{ height: 800 }}>
            <div className="insidestyles"></div>
          </div>
        </Parallax>
        <Portfolio />
        <Parallax
          bgImage={Wallpaper1}
          strength={500}
          className="parallaxcontainer"
          renderLayer={(percentage) => transformElement(percentage)}
        >
          <div style={{ height: 800 }}>
            <div className="insidestyles"></div>
          </div>
        </Parallax>
        <Testimonials />
      </div>
      <Footer />
    </div>
  );
};

export default resume;
