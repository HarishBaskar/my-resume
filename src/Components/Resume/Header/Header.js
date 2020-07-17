import React from "react";
import PrimaryImage from "./PrimaryImage/PrimaryImage";
import Main from "./Main/Main";
import Aux from "../../HOC/_Aux";
import "./Header.css";

const Header = ({ personalInfo }) => {
  return (
    <Aux>
      <div className="wallpaper"></div>
      <div className="content">
        <PrimaryImage />
        <Main personalInfo={personalInfo} />
      </div>
    </Aux>
  );
};

export default Header;
