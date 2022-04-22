import React, { Suspense } from "react";
import Header from "./Header/Header";
import AboutMe from "./AboutMe/index";
import Portfolio from "./Portfolio/index";
import Vita from "./Vita/index";
import Styles from "./Resume.module.scss";
import Footer from "./Footer/index";
import LoadingIndicator from "../LoadingIndicator/LoadingIndicator";

const ParallaxElement = React.lazy(() => import("./ParallaxContainer"));

const personalInfo = {
  name: "Harish Baskar",
  job: "Senior Web Developer",
  skills: "React.js, Redux, Javascript and Typescript",
  mail: "mailto:harishbaskar94@gmail.com",
  githuburl: "https://github.com/HarishBaskar",
  linkedinurl: "https://www.linkedin.com/in/harish-baskar-96589a80",
};

const ParallaxItem = () => (
  <div>
    <Suspense fallback={<LoadingIndicator />}>
      <section>
        <ParallaxElement />
      </section>
    </Suspense>
  </div>
);

const resume = () => {
  return (
    <div className={Styles.topresumecontainer}>
      <Header personalInfo={personalInfo} />
      <div className={Styles.resumecontainer}>
        <div className={Styles.whitesection}>
          <AboutMe />
        </div>
        <ParallaxItem />
        <Vita />
        <ParallaxItem />
        <div className={Styles.whitesection}>
          <Portfolio />
        </div>
        <ParallaxItem />
        <div className={Styles.whitesection}>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default resume;
