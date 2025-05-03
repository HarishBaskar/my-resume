import React from "react";
import { Parallax } from "react-parallax";
import Styles from "./Resume.module.css";
import type { CSSProperties, JSX } from 'react';

interface TransformElementProps {
  percentage: number;
}

const transformElement = ({ percentage }: TransformElementProps): JSX.Element => {
  const size = percentage * 600;
  const opacity = percentage * 0.5;

  const style: CSSProperties = {
    position: "absolute",
    background: `rgba(0, 138, 230, ${opacity})`,
    borderRadius: "50%",
    width: size,
    height: size,
    top: "50%",
    left: "50%",
    transform: `translate(-50%, -50%) scale(${1 + percentage * 2})`,
    transition: "transform 0.3s ease-out, background 0.3s ease-out",
    zIndex: 1,
  };

  return <div style={style} />;
};

const ParallaxElement: React.FC = () => {
  return (
    <Parallax
      bgImage="/images/wallpaper1.jpg"
      strength={300}
      className={Styles.parallaxcontainer}
      renderLayer={(percentage) => (
        <>
          {transformElement({ percentage })}
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
              zIndex: 0,
            }}
          />
        </>
      )}
    >
      <div style={{ height: "80vh", position: "relative" }}>
        <div className={Styles.insidestyles}>
          <h1>Your Content Here</h1>
          <p>Engaging content that fits with the parallax background.</p>
        </div>
      </div>
    </Parallax>
  );
};

export default ParallaxElement;