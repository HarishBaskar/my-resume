/* eslint-disable react/no-unescaped-entities */

import React from "react";
import Styles from "./AboutMe.module.scss";

const AboutMe: React.FC = () => {
  return (
    <div className={Styles.aboutme}>
      <h1>About me</h1>
      <p>
        I still remember browsing Apple's official website in 2015 and being
        captivated by its design and functionality. This experience ignited my
        interest in web development, and since then, I have pursued this passion
        with dedication and enthusiasm.
      </p>

      <p>
        Today, as a Front-end Web Developer at IQVIA, I leverage my expertise in
        front-end web technologies such as <strong>HTML</strong>,{" "}
        <strong>CSS</strong>, <strong>JavaScript</strong>,{" "}
        <strong>React.js</strong>, <strong>Redux</strong>, and API development
        frameworks such as <strong>Node.js</strong> and <strong>Express</strong>
        . I have developed modules for a Health Care application that is used by
        users across the globe.
      </p>

      <p>
        Most recently, I have been spearheading the development team to build
        Micro front ends that can function on its own as well as through a shell
        app. In this capacity, I have used the idea of minimal communication
        between <strong>micro front ends</strong>. If communication is required,
        it should happen only through <strong>Microservices</strong>. This
        approach has resulted in significant improvements in the application's
        performance, scalability, and maintainability.
      </p>

      <p>
        Web development using <strong>React.js</strong> and{" "}
        <strong>Redux</strong> is my area of interest, and I am actively seeking
        a Front-end developer role in this field.
      </p>

      <p>
        Thank you for taking the time to review my profile. I look forward to
        the opportunity to contribute my skills and expertise to your
        organization.
      </p>
    </div>
  );
};

export default AboutMe;

