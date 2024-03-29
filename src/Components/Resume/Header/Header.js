import React from "react";
import PrimaryImage from "./PrimaryImage/PrimaryImage";
import Main from "./Main/Main";
import Styles from "./Header.module.css";

const Header = ({ personalInfo }) => {
  return (
    <div>
      <div className={Styles.content}>
        <PrimaryImage />
        <Main personalInfo={personalInfo} />
      </div>
      <div className={Styles.arrowcontainer}>
        <i className={Styles.downarrow}></i>
      </div>
    </div>
  );
};

export default Header;
