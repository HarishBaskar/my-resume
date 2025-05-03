import React from "react";
import Styles from "./Footer.module.css";

const Footer: React.FC = () => {
  const handleResumeClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    window.open(
      "https://drive.google.com/file/d/1bY8tkr3ubJq0641e8zKJvyiDEbu7zHQb/view?usp=share_link",
      "_blank",
      "noopener noreferrer"
    );
  };

  return (
    <div className={Styles.footer}>
      <p>
        Passionate about Front-end design and development and I am actively
        looking for Developer role in that area.
      </p>
      <div className={Styles.footerbuttoncontainer}>
        <button
          className={Styles.footerbutton}
          onClick={handleResumeClick}
          aria-label="View Resume"
        >
          View my resume &rarr;
        </button>
      </div>
    </div>
  );
};

export default Footer;