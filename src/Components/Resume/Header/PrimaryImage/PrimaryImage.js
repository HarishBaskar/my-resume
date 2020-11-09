import React from "react";
import Portrait from "../../../../Images/harish_baskar.JPG";
import Styles from "./PrimaryImage.module.css";

const primaryImage = () => {
  return (
    <aside className={Styles.side}>
      <figure className={Styles.picture}>
        <div className={Styles.pictureshadow}></div>
        <img
          id="pictureImage"
          className={Styles.pictureimage}
          title="Harish Baskar"
          src={Portrait}
          alt="Portrait of Harish Baskar"
        />
      </figure>
    </aside>
  );
};

export default primaryImage;
