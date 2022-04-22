import React from "react";
import Styles from "./AboutMe.module.scss";

const AboutMe = () => {
  return (
    <div className={Styles.aboutme}>
      <h1>About me</h1>
      <p>
        I still remember browsing Apple's official website in 2015 and wonder
        "is this some kind of wizardry"? I was fascinated by their web page and
        wanted to immediately try web development. As I started practicing web
        development, it was like magic, being able to create attractive designs
        and responsive user interactions. I realized, "Web development" is my
        passion. Over the years, I have carried forward this passion and remains
        with me.
      </p>
      <div>
        <p>
          Today, I am a Senior software Engineer at Thomson Reuters developing
          modules for a News Tech application used by News Tech users globally.
          I have decent hands on experience in front-end web technologies like
          HTML, CSS, Javascript, React.js, Redux and API development frameworks
          like Entity Framework and ASP.NET Web API.
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
