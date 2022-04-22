import React from "react";
import Styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <div className={Styles.footer}>
      <p>
        Passionate about Front-end design and development and I am actively
        looking for Developer role in that area.
      </p>
      <div className={Styles.footerbuttoncontainer}>
        <button
          className={Styles.footerbutton}
          onClick={(e) => {
            e.preventDefault();
            window.open(
              "https://drive.google.com/file/d/1RFoaLlwqseoQuSPLXLrr444C1OFKUAiW/view?usp=sharing",
              "_blank"
            );
          }}
        >
          View my resume &rarr;
        </button>
      </div>
    </div>
  );
};

export default Footer;
