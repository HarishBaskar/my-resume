import React from "react";
import Picture from "../../../../Images/harish_baskar.JPG";
import "./PrimaryImage.css";

const primaryImage = () => {
  return (
    <aside className="side">
      <figure className="picture">
        <div className="picture-shadow"></div>
        <img
          id="pictureImage"
          className="picture-image"
          src={Picture}
          alt="Portrait of Harish Baskar"
          width="320"
          height="320"
        />
      </figure>
    </aside>
  );
};

export default primaryImage;
