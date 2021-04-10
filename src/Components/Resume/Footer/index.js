import React from "react";
import Styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={Styles.footer}>
      <p>
        Passionate about Front-end design and development and I am actively
        looking for Developer role in that area.
      </p>
      <div className={Styles.footerbuttoncontainer}>
        <button className={Styles.footerbutton}>View my resume &rarr;</button>
      </div>
    </div>
  );
};

export default Footer;
