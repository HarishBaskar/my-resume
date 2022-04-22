import React from "react";
import { Parallax } from "react-parallax";
import Wallpaper1 from "../../Images/wallpaper1.jpg";
import Styles from "./Resume.module.scss";

const transformElement = (percentage) => {
  return (
    <div>
      <div
        style={{
          position: "absolute",
          background: `rgba(0, 138, 230, ${percentage * 0.5})`,
          transform: "scale(4, 3)",
          borderRadius: "50%",
          width: percentage * 700,
          height: percentage * 700,
        }}
      />
    </div>
  );
};

const ParallaxElement = () => {
  return (
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
  );
};

export default ParallaxElement;
