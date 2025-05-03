import React from "react";
import Styles from "./LoadingIndicator.module.css";

const LoadingIndicator: React.FC = () => {
  return <div className={Styles.loader}></div>;
};

export default LoadingIndicator;