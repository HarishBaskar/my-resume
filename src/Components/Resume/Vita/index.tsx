import React from "react";
import Styles from "./Vita.module.scss";
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
                  I earned a Bachelor of Engineering degree in Electronics and
                  Communication Engineering from Sri Krishna College of
                  Engineering and Technology, Coimbatore.
                </li>
              </ul>
              <div className={Styles.highlightscontainer}>
                <strong>Highlights:</strong>
                <ul>
                  <li>
                    Developed innovative web applications to support and enhance
                    college events.
                  </li>
                  <li>
                    Ranked <span className="highlight">4th</span> out of{" "}
                    <span className="highlight">230</span> students in the
                    Electronics and Communication Engineering department.
                  </li>
                  <li>
                    Achieved a commendable CGPA of{" "}
                    <span className="highlight">9.17</span>.
                  </li>
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
              <div className={Styles.descriptioncontainer}>
                <p>
                  As a Senior Software Engineer at Infosys, Bangalore, I was
                  instrumental in designing and developing scalable web
                  applications for the healthcare domain. My role involved both
                  technical leadership and hands-on development, focusing on
                  delivering high-quality solutions to meet client needs.
                </p>
              </div>
              <div className={Styles.highlightscontainer}>
                <strong>Key Responsibilities:</strong>
              </div>
              <ul className={Styles.descriptioncontainer}>
                <li>
                  Led the development of end-to-end web applications, ensuring
                  scalability and performance in healthcare systems.
                </li>
                <li>
                  Mentored junior developers, providing guidance on implementing
                  front-end modules and best practices.
                </li>
                <li>
                  Played a pivotal role in the design and development of web
                  applications using <strong>React.js</strong> and{" "}
                  <strong>Redux</strong>.
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
              <div className={Styles.descriptioncontainer}>
                <p>
                  Specialized in React.js, I built and optimized scalable
                  front-end solutions, led project planning and requirements
                  analysis, and ensured high-quality, timely global releases of
                  the News Tech application. I engaged with users to address
                  issues and mentored junior developers to achieve project
                  goals.
                </p>
              </div>

              <div className={Styles.highlightscontainer}>
                <strong>Key Responsibilities:</strong>
                <ul>
                  <li>
                    Led the design and implementation of front-end features
                    using React.js, ensuring high performance and
                    responsiveness.
                  </li>
                  <li>
                    Coordinated with cross-functional teams to define project
                    requirements, manage timelines, and deliver solutions that
                    meet user needs.
                  </li>
                  <li>
                    Conducted code reviews and provided constructive feedback to
                    maintain code quality and consistency.
                  </li>
                  <li>
                    Developed and maintained comprehensive documentation for
                    application features and technical processes.
                  </li>
                  <li>
                    Implemented best practices for version control and
                    continuous integration using Git and related tools.
                  </li>
                </ul>

                <strong>Technologies Used:</strong>
                <ul>
                  <li>
                    React.js, Redux, JavaScript, HTML, CSS, Git, Datadog, JIRA
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
              <strong>Lead Software Developer</strong>
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
              <div className={Styles.descriptioncontainer}>
                <p>
                  Led the development of a critical web application for clinical
                  data analysis, overseeing the design and implementation of
                  scalable features. Directed project planning, collaborated
                  with stakeholders to refine requirements, and ensured timely
                  delivery through iterative releases. Championed high standards
                  of code quality and application robustness.
                </p>
              </div>

              <div className={Styles.highlightscontainer}>
                <strong>Key Responsibilities:</strong>
                <ul className={Styles.descriptioncontainer}>
                  <li>
                    Directed the development of a high-performance web
                    application for clinical data analysis.
                  </li>
                  <li>
                    Designed and implemented a Micro Frontend architecture to
                    support modular and independent feature deployment.
                  </li>
                  <li>
                    Worked with business users to refine requirements and
                    develop automated analysis tools.
                  </li>
                  <li>
                    Managed an iterative development cycle, delivering software
                    updates every 3 weeks.
                  </li>
                  <li>
                    Ensured code quality through rigorous testing and adherence
                    to best practices.
                  </li>
                  <li>
                    Oversaw code quality improvement and vulnerability
                    management to maintain a robust application.
                  </li>
                </ul>

                <strong>Technologies Used:</strong>
                <ul>
                  <li>
                    React.js, Redux, JavaScript, HTML, CSS, Git, Datadog, JIRA,
                    Typescript
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