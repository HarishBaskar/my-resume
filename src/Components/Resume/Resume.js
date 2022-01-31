import React from "react";
import Header from "./Header/Header";
import AboutMe from "./AboutMe/index";
import Portfolio from "./Portfolio/index";
import Vita from "./Vita/index";
import { Parallax } from "react-parallax";
import Wallpaper1 from "../../Images/wallpaper1.jpg";
import Styles from "./Resume.module.css";
import Footer from "./Footer/index";

const personalInfo = {
  name: "Harish Baskar",
  job: "Front-end Developer",
  skills: "React.js, Redux, Javascript and Typescript",
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
          background: `rgba(75, 67, 219, ${percentage * 0.5})`,
          transform: "scale(4, 3)",
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
          strength={400}
          className={Styles.parallaxcontainer}
          renderLayer={(percentage) => transformElement(percentage)}
        >
          <div style={{ height: 800 }}>
            <div className={Styles.insidestyles}></div>
          </div>
        </Parallax>
        <div className={Styles.whitesection}>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default resume;
