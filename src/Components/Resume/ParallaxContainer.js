import React from "react";
import { Parallax } from "react-parallax";
import Wallpaper1 from "../../Images/wallpaper1.jpg";
import Styles from "./Resume.module.css";

const transformElement = (percentage) => {
  const size = percentage * 600; // Adjust size for more dynamic effect
  const opacity = percentage * 0.5; // Adjust opacity for subtle effect

  return (
    <div
      style={{
        position: "absolute",
        background: `rgba(0, 138, 230, ${opacity})`,
        borderRadius: "50%",
        width: size,
        height: size,
        top: "50%",
        left: "50%",
        transform: `translate(-50%, -50%) scale(${1 + percentage * 2})`,
        transition: "transform 0.3s ease-out, background 0.3s ease-out", // Smooth transitions
        zIndex: 1, // Ensure it appears above other content
      }}
    />
  );
};

const ParallaxElement = () => {
  return (
    <Parallax
      bgImage={Wallpaper1}
      strength={300} // Adjust to control the depth of the effect
      className={Styles.parallaxcontainer}
      renderLayer={(percentage) => (
        <>
          {transformElement(percentage)}
          <div
            style={{
              position: "absolute",
              background: `rgba(255, 100, 100, ${percentage * 0.3})`,
              borderRadius: "50%",
              width: percentage * 400,
              height: percentage * 400,
              top: "20%",
              left: "80%",
              transform: `translate(-50%, -50%) scale(${1 + percentage * 1.5})`,
              transition: "transform 0.3s ease-out, background 0.3s ease-out",
              zIndex: 0, // Ensure it appears behind other content
            }}
          />
        </>
      )}
    >
      <div style={{ height: "80vh", position: "relative" }}>
        <div className={Styles.insidestyles}>
          <h1>Your Content Here</h1> {/* Example content */}
          <p>Engaging content that fits with the parallax background.</p>
        </div>
      </div>
    </Parallax>
  );
};

export default ParallaxElement;
