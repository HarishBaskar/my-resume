import React from "react";
import "./Main.css";

const main = ({ personalInfo }) => {
  return (
    <main className="about">
      <h1 className="name">{personalInfo.name}</h1>
      <p className="job">{personalInfo.job}</p>
      <hr className="hr" />
      <div className="description">
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
      <div className="contact">
        <a className="button" href="mailto:harishbaskar94@gmail.com">
          Get in touch
        </a>
      </div>
      <div>
        <ul className="social">
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
