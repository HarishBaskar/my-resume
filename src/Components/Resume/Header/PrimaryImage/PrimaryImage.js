import React from "react";
import Portrait from "../../../../Images/harish_baskar.JPG";
import "./PrimaryImage.css";

const primaryImage = () => {
  return (
    <aside className="side">
      <figure className="picture">
        <div className="picture-shadow"></div>
        <img
          id="pictureImage"
          className="picture-image"
          title="Harish Baskar"
          src={Portrait}
          alt="Portrait of Harish Baskar"
        />
      </figure>
    </aside>
  );
};

export default primaryImage;
