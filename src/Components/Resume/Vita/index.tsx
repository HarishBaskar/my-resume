import React from "react";
import Styles from "./Vita.module.scss";
import cx from "classnames";

interface Experience {
  period: string;
  title: string;
  company: {
    name: string;
    url: string;
  };
  description: string;
  keyResponsibilities: string[];
  technologies: string[];
  domain: string;
  highlights?: string[];
}

interface Education {
  period: string;
  degree: string;
  institution: {
    name: string;
    url: string;
  };
  description: string;
  highlights: string[];
}

const experiences: Experience[] = [
  {
    period: "2021 - Present",
    title: "Lead Software Developer",
    company: {
      name: "IQVIA, Bangalore",
      url: "https://www.iqvia.com/"
    },
    description: "Led the development of a critical web application for clinical data analysis, overseeing the design and implementation of scalable features. Directed project planning, collaborated with stakeholders to refine requirements, and ensured timely delivery through iterative releases. Championed high standards of code quality and application robustness.",
    keyResponsibilities: [
      "Directed the development of a high-performance web application for clinical data analysis.",
      "Designed and implemented a Micro Frontend architecture to support modular and independent feature deployment.",
      "Worked with business users to refine requirements and develop automated analysis tools.",
      "Managed an iterative development cycle, delivering software updates every 3 weeks.",
      "Ensured code quality through rigorous testing and adherence to best practices.",
      "Oversaw code quality improvement and vulnerability management to maintain a robust application."
    ],
    technologies: ["React.js", "Redux", "JavaScript", "HTML", "CSS", "Git", "Datadog", "JIRA", "Typescript"],
    domain: "Health Care"
  },
  {
    period: "2019 - 2021",
    title: "Senior Software Engineer",
    company: {
      name: "Thomson Reuters, Bangalore",
      url: "https://www.thomsonreuters.com/en/about-us.html"
    },
    description: "Specialized in React.js, I built and optimized scalable front-end solutions, led project planning and requirements analysis, and ensured high-quality, timely global releases of the News Tech application. I engaged with users to address issues and mentored junior developers to achieve project goals.",
    keyResponsibilities: [
      "Led the design and implementation of front-end features using React.js, ensuring high performance and responsiveness.",
      "Coordinated with cross-functional teams to define project requirements, manage timelines, and deliver solutions that meet user needs.",
      "Conducted code reviews and provided constructive feedback to maintain code quality and consistency.",
      "Developed and maintained comprehensive documentation for application features and technical processes.",
      "Implemented best practices for version control and continuous integration using Git and related tools."
    ],
    technologies: ["React.js", "Redux", "JavaScript", "HTML", "CSS", "Git", "Datadog", "JIRA"],
    domain: "News Technology"
  },
  {
    period: "2016 - 2019",
    title: "Senior Software Engineer",
    company: {
      name: "Infosys, Bangalore",
      url: "https://www.infosys.com/about.html"
    },
    description: "As a Senior Software Engineer at Infosys, Bangalore, I was instrumental in designing and developing scalable web applications for the healthcare domain. My role involved both technical leadership and hands-on development, focusing on delivering high-quality solutions to meet client needs.",
    keyResponsibilities: [
      "Led the development of end-to-end web applications, ensuring scalability and performance in healthcare systems.",
      "Mentored junior developers, providing guidance on implementing front-end modules and best practices.",
      "Played a pivotal role in the design and development of web applications using React.js and Redux."
    ],
    technologies: ["Javascript", "React.js", "Redux", "HTML", "CSS"],
    domain: "Health care"
  }
];

const education: Education = {
  period: "2012 - 2016",
  degree: "Bachelor of Engineering",
  institution: {
    name: "Sri Krishna College of Engineering and Technology, Coimbatore",
    url: "http://www.skcet.ac.in/index.html"
  },
  description: "I earned a Bachelor of Engineering degree in Electronics and Communication Engineering from Sri Krishna College of Engineering and Technology, Coimbatore.",
  highlights: [
    "Developed innovative web applications to support and enhance college events.",
    "Ranked 4th out of 230 students in the Electronics and Communication Engineering department.",
    "Achieved a commendable CGPA of 9.17."
  ]
};

const TimelineItem: React.FC<{ isLeft: boolean; content: Experience | Education }> = ({ isLeft, content }) => {
  return (
    <div className={cx(Styles.container, isLeft ? Styles.left : Styles.right)}>
      <div className={Styles.vitacontent}>
        <h2>
          <strong>{content.period}</strong>
        </h2>
        <h2>
          <strong>{'degree' in content ? content.degree : content.title}</strong>
        </h2>
        <h1>
          <a
            href={"institution" in content ? content.institution.url : content.company.url}
            target="_blank"
            title={"institution" in content ? content.institution.name : content.company.name}
            rel="noopener noreferrer"
          >
            {"institution" in content ? content.institution.name : content.company.name}
          </a>
        </h1>
        <div className={Styles.descriptioncontainer}>
          <p>{content.description}</p>
        </div>
        {'keyResponsibilities' in content && (
          <div className={Styles.highlightscontainer}>
            <strong>Key Responsibilities:</strong>
            <ul className={Styles.descriptioncontainer}>
              {content.keyResponsibilities.map((resp, index) => (
                <li key={index}>{resp}</li>
              ))}
            </ul>
            <strong>Technologies Used:</strong>
            <ul>
              <li>{content.technologies.join(', ')}</li>
            </ul>
            <strong>Domain:</strong>
            <ul>
              <li>{content.domain}</li>
            </ul>
          </div>
        )}
        {content.highlights && (
          <div className={Styles.highlightscontainer}>
            <strong>Highlights:</strong>
            <ul>
              {content.highlights.map((highlight, index) => (
                <li key={index}>{highlight}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

const Vita: React.FC = () => {
  return (
    <div className={Styles.vita}>
      <div className={Styles.header}>My Professional story</div>
      <div className={Styles.timeline}>
        <TimelineItem isLeft={true} content={education} />
        {experiences.map((exp, index) => (
          <TimelineItem key={exp.period} isLeft={index % 2 === 1} content={exp} />
        ))}
      </div>
    </div>
  );
};

export default Vita;