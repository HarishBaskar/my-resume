import React from "react";
import Header from "./Header/Header";
import AboutMe from "./AboutMe/index";
import Portfolio from "./Portfolio/index";
import Vita from "./Vita/index";
import Testimonials from "./Testimonials/index";
import Footer from "./Footer/index";
import { Parallax } from "react-parallax";
import Wallpaper1 from "../../Images/wallpaper1.jpg";
import Styles from "./Resume.module.css";

const personalInfo = {
  name: "Harish Baskar",
  job: "Software Developer",
  skills: "React.js, Redux, Rest API, AWS",
  mail: "mailto:harishbaskar94@gmail.com",
  githuburl: "https://github.com/HarishBaskar",
  linkedinurl: "https://www.linkedin.com/in/harish-baskar-96589a80",
};

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

const resume = () => {
  return (
    <div className={Styles.topresumecontainer}>
      <Header personalInfo={personalInfo} />
      <div className={Styles.resumecontainer}>
        <div className={Styles.whitesection}>
          <AboutMe />
        </div>
        <Parallax
          bgImage={Wallpaper1}
          strength={300}
          className={Styles.parallaxcontainer}
          renderLayer={(percentage) => transformElement(percentage)}
        >
          <div style={{ height: 700 }}>
            <div className={Styles.insidestyles}></div>
          </div>
        </Parallax>
        <Vita />
        <Parallax
          bgImage={Wallpaper1}
          strength={400}
          className={Styles.parallaxcontainer}
          renderLayer={(percentage) => transformElement(percentage)}
        >
          <div style={{ height: 800 }}>
            <div className={Styles.insidestyles}></div>
          </div>
        </Parallax>
        <div className={Styles.whitesection}>
          <Portfolio />
        </div>
        <Parallax
          bgImage={Wallpaper1}
          strength={500}
          className={Styles.parallaxcontainer}
          renderLayer={(percentage) => transformElement(percentage)}
        >
          <div style={{ height: 800 }}>
            <div className={Styles.insidestyles}></div>
          </div>
        </Parallax>
        <Testimonials />
      </div>
      <Footer />
    </div>
  );
};

export default resume;
