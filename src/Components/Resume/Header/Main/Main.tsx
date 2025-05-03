import React from "react";
import Styles from "./Main.module.scss";

interface PersonalInfo {
  name: string;
  job: string;
  skills: string;
  githuburl: string;
  linkedinurl: string;
}

interface MainProps {
  personalInfo: PersonalInfo;
}

const Main: React.FC<MainProps> = ({ personalInfo }) => {
  const renderDescription = () => (
    <section className={Styles.description}>
      <p>
        Musicophile
        <span role="img" aria-label="blue heart">
          &#128153;
        </span>
        &nbsp;Cynophilist
        <span role="img" aria-label="dog">
          &#128054;
        </span>
      </p>
      <p>Skills/Interests: {personalInfo.skills}</p>
    </section>
  );

  const renderContact = () => (
    <section className={Styles.contact}>
      <a
        className={Styles.button}
        href="mailto:harishbaskar94@gmail.com"
        aria-label="Send an email to Harish Baskar"
      >
        Get in touch
      </a>
    </section>
  );

  const renderSocialLinks = () => (
    <footer>
      <ul className={Styles.social}>
        <li>
          <a
            href={personalInfo.githuburl}
            aria-label="Visit GitHub Profile"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-github"></i>
          </a>
        </li>
        <li>
          <a
            href={personalInfo.linkedinurl}
            aria-label="Visit LinkedIn Profile"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-linkedin"></i>
          </a>
        </li>
      </ul>
    </footer>
  );

  return (
    <main className={Styles.about}>
      <header>
        <h1 className={Styles.name}>{personalInfo.name}</h1>
        <p className={Styles.job}>{personalInfo.job}</p>
      </header>
      <hr className={Styles.hr} />
      {renderDescription()}
      {renderContact()}
      {renderSocialLinks()}
    </main>
  );
};

export default Main;