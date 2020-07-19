import React from "react";
import Header from "./Header/Header";
import Aux from "../HOC/_Aux";
import "./Resume.css";
import AboutMe from "./AboutMe/index";
import Portfolio from "./Portfolio/index";
import Vita from "./Vita/index";
import Testimonials from "./Testimonials/index";
import Footer from "./Footer/index";
import { Parallax } from "react-parallax";

const image1 =
  "https://images.unsplash.com/photo-1498092651296-641e88c3b057?auto=format&fit=crop&w=1778&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D";
const image2 =
  "https://img00.deviantart.net/2bd0/i/2009/276/c/9/magic_forrest_wallpaper_by_goergen.jpg";
const image3 =
  "https://brightcove04pmdo-a.akamaihd.net/5104226627001/5104226627001_5297440765001_5280261645001-vs.jpg?pubId=5104226627001&videoId=5280261645001";
const image4 =
  "https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/empire-state-building-black-and-white-square-format-john-farnan.jpg";

const insideStyles = {
  background: "transparent",
  position: "absolute",
  top: "60vh",
  left: "50%",
  bottom: "70%",
  height: "100vh",
  transform: "translate(-50%,-50%)",
};

const resume = ({ personalInfo }) => {
  return (
    <div className="resumecontainer">
      <Header personalInfo={personalInfo} />
      <Parallax
        bgImage={image1}
        strength={500}
        className="parallaxcontainer"
        renderLayer={(percentage) => (
          <div>
            <div
              style={{
                position: "absolute",
                background: `rgba(255, 0, 0, ${percentage * 0.5})`,
                transform: "scale(2, 3)",
                borderRadius: "50%",
                width: percentage * 700,
                height: percentage * 700,
              }}
            />
          </div>
        )}
      >
        <div style={{ height: 700 }} className="aboutmecontainer">
          <div style={insideStyles} className="insideaboutme">
            <AboutMe />
          </div>
        </div>
      </Parallax>
      <Vita />
      <Parallax bgImage={image3} strength={500} className="parallaxcontainer">
        <div style={{ height: 800 }}>
          <div style={insideStyles}>
            <Portfolio />
          </div>
        </div>
      </Parallax>
      <Testimonials />
      <Footer />
    </div>
  );
};

export default resume;
