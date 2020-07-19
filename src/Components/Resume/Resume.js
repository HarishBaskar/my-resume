import React from "react";
import Header from "./Header/Header";
import Aux from "../HOC/_Aux";
import "./Resume.css";
import AboutMe from "./AboutMe/index";
import Portfolio from "./Portfolio/index";
import Vita from "./Vita/index";
import Testimonials from "./Testimonials/index";
import Footer from "./Footer/index";

const resume = ({ personalInfo }) => {
  return (
    <Aux>
      <Header personalInfo={personalInfo} />
      <AboutMe />
      <Vita />
      <Portfolio />
      <Testimonials />
      <Footer />
    </Aux>
  );
};

export default resume;
