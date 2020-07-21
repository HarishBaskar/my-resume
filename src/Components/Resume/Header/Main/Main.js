import React from "react";
import Styles from "./Main.module.css";

const main = ({ personalInfo }) => {
  return (
    <main className={Styles.about}>
      <h1 className={Styles.name}>{personalInfo.name}</h1>
      <p className={Styles.job}>{personalInfo.job}</p>
      <hr className={Styles.hr} />
      <div className={Styles.description}>
        <p>
          Musicophile
          <span role="img" aria-label="blueheart">
            &#128153;
          </span>
          &nbsp;Cynophilist
          <span role="img" aria-label="dog">
            &#128054;
          </span>
        </p>
        <br />
        <p>Skills/Interests: {personalInfo.skills}</p>
      </div>
      <div className={Styles.contact}>
        <a className={Styles.button} href="mailto:harishbaskar94@gmail.com">
          Get in touch
        </a>
      </div>
      <div>
        <ul className={Styles.social}>
          <li>
            <a href={personalInfo.githuburl}>
              <i className="fab fa-github"></i>
            </a>
          </li>
          <li>
            <a href={personalInfo.linkedinurl}>
              <i className="fab fa-linkedin"></i>
            </a>
          </li>
        </ul>
      </div>
    </main>
  );
};

export default main;
