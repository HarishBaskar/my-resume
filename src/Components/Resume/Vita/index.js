import React from "react";
import Styles from "./Vita.module.css";
import cx from "classnames";

const Vita = () => {
  return (
    <div className={Styles.vita}>
      <div className={Styles.header}>My Professional story</div>
      <div className={Styles.timeline}>
        <div className={cx(Styles.container, Styles.left)}>
          <div className={Styles.vitacontent}>
            <h2>
              <strong>2012 - 2016</strong>
            </h2>
            <h2>
              <strong>Bachelor of Engineering</strong>
            </h2>
            <h1>
              <a
                href="http://www.skcet.ac.in/index.html"
                target="_blank"
                title="SKCET"
                rel="noopener noreferrer"
              >
                Sri Krishna College of Engineering and Technology, Coimbatore
              </a>
            </h1>
            <React.Fragment>
              <ul className={Styles.descriptioncontainer}>
                <li>
                  I graduated with Bachelor of Engineering degree in Electronics
                  and Communication Engineering.
                </li>
              </ul>
              <div className={Styles.highlightscontainer}>
                <strong>Highlights:</strong>
                <ul>
                  <li>Developed Web applications for college events</li>
                  <li>
                    ECE Department topper(4th place - out of 230 students)
                  </li>
                  <li>CGPA: 9.17</li>
                </ul>
              </div>
            </React.Fragment>
          </div>
        </div>
        <div className={cx(Styles.container, Styles.right)}>
          <div className={Styles.vitacontent}>
            <h2>
              <strong>2016 - 2019</strong>
            </h2>
            <h2>
              <strong>Senior Software Engineer</strong>
            </h2>
            <h1>
              <a
                href="https://www.infosys.com/about.html"
                target="_blank"
                title="Infosys"
                rel="noopener noreferrer"
              >
                Infosys, Bangalore
              </a>
            </h1>
            <React.Fragment>
              <ul className={Styles.descriptioncontainer}>
                <li>
                  I started as a software engineer in bangalore and developed
                  end to end scalable web applications for health care systems.
                </li>
                <li>
                  Mentored my Juniors and helped them to implement front-end
                  modules.
                </li>
                <li>
                  Involved myself in design and development of Web apps using
                  React JS, Redux.
                </li>
              </ul>
              <div className={Styles.highlightscontainer}>
                <strong>Technologies used:</strong>
                <ul>
                  <li>Javascript, React.js, Redux, HTML and CSS</li>
                </ul>
                <strong>Domain:</strong>
                <ul>
                  <li>Health care</li>
                </ul>
              </div>
            </React.Fragment>
          </div>
        </div>
        <div className={cx(Styles.container, Styles.left)}>
          <div className={Styles.vitacontent}>
            <h2>
              <strong>2019 - 2021</strong>
            </h2>
            <h2>
              <strong>Senior Software Engineer</strong>
            </h2>
            <h1>
              <a
                href="https://www.thomsonreuters.com/en/about-us.html"
                target="_blank"
                title="Thomson Reuters"
                rel="noopener noreferrer"
              >
                Thomson Reuters, Bangalore
              </a>
            </h1>
            <React.Fragment>
              <ul className={Styles.descriptioncontainer}>
                <li>
                  Here at TR, I expertised in front-end framework React.js.
                </li>
                <li>
                  Participate in project planning sessions with team members to
                  analyze development requirements, provide work breakdown and
                  estimates of work
                </li>
                <li>
                  Enhance and maintain News Tech application and deliver global
                  release candidates with no compromise in quality.
                </li>
                <li>
                  Communicate with News Tech users to exchange information,
                  understand requirements and solve problems.
                </li>
                <li>Mentoring my juniors and leading the team.</li>
              </ul>
              <div className={Styles.highlightscontainer}>
                <strong>Technologies used:</strong>
                <ul>
                  <li>
                    React.js, Redux, Javascript, HTML, CSS, Git, Datadog, JIRA
                  </li>
                </ul>
                <strong>Domain:</strong>
                <ul>
                  <li>News Technology</li>
                </ul>
              </div>
            </React.Fragment>
          </div>
        </div>
        <div className={cx(Styles.container, Styles.right)}>
          <div className={Styles.vitacontent}>
            <h2>
              <strong>2021 - Present</strong>
            </h2>
            <h2>
              <strong>Senior Software Developer</strong>
            </h2>
            <h1>
              <a
                href="https://www.iqvia.com/"
                target="_blank"
                title="IQVIA"
                rel="noopener noreferrer"
              >
                IQVIA, Bangalore
              </a>
            </h1>
            <React.Fragment>
              <ul className={Styles.descriptioncontainer}>
                <li>Built web application for Clinical Data analysts.</li>
                <li>
                  Developed transaction-based model using React.js(v17), Redux
                  and Typescript.
                </li>
                <li>
                  Created enhanced login experience and online/offline
                  experience.
                </li>
                <li>
                  Handled team of 6 members and played a prominent role in
                  requirement planning.
                </li>
                <li>
                  Extensively used <strong>React testing library</strong> and
                  <strong> Jest</strong> to achieve code coverage more than 85%.
                </li>
              </ul>
              <div className={Styles.highlightscontainer}>
                <strong>Technologies used:</strong>
                <ul>
                  <li>
                    React.js, Redux, Javascript, Typescript, RTL, Jest and
                    SonarQube
                  </li>
                </ul>
                <strong>Domain:</strong>
                <ul>
                  <li>Health Care</li>
                </ul>
              </div>
            </React.Fragment>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vita;
