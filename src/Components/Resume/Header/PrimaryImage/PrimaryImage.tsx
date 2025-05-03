import React from "react";
import Image from "next/image";
import Styles from "./PrimaryImage.module.css";

const PrimaryImage: React.FC = () => {
  return (
    <div className={Styles.imagecontainer}>
      <Image
        src="/images/harish_baskar.JPG"
        alt="Harish Baskar"
        width={200}
        height={200}
        priority
        className={Styles.image}
      />
    </div>
  );
};

export default PrimaryImage;