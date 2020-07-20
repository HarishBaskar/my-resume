import React from "react";
import PrimaryImage from "./PrimaryImage/PrimaryImage";
import Main from "./Main/Main";
import "./Header.css";
import Navigation from "../Navigation/index";

const Header = ({ personalInfo }) => {
  return (
    <div>
      <div className="wallpaper"></div>
      <Navigation />
      <div className="content">
        <PrimaryImage />
        <Main personalInfo={personalInfo} />
      </div>
      <div className="arrowcontainer">
        <i className="downarrow"></i>
      </div>
    </div>
  );
};

export default Header;
