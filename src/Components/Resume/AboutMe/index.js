import React from "react";
import Styles from "./AboutMe.module.css";

const AboutMe = () => {
  return (
    <div className={Styles.aboutme}>
      <h1>About me</h1>
      <p>
        I am a Front-end developer with 5 years of experience in App
        development, Maintenance, testing and implementation of front-end apps.
        Initially, I started my career as a C# developer. Fascinated by
        front-end tech, I taught myself some cool front-end techs and have been
        enjoying the world of front-end development so far.
      </p>
      <div>
        <p>
          In my spare time, I love to spend time with dogs and am very much
          interested in Aqua scaping. Scroll down to learn more about me :)
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
