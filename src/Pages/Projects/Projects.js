import React from "react";
import Styles from "./Projects.module.scss";

const OnboardingDesc = () => {
  return (
    <div className={Styles.container}>
      <ul>
        <li>
          Developed a web application for onboarding new users and assigning
          training based on departmental needs.
        </li>
        <li>
          Utilized{" "}
          <strong>
            JavaScript, React.js, Redux, Redux Toolkit, and Redux-Saga
          </strong>{" "}
          for front-end development.
        </li>
        <li>
          Implemented <strong>Micro Frontend architecture</strong> using Module
          Federation for modular and scalable development.
        </li>
        <li>
          Managed both onboarding and offboarding processes within the
          application.
        </li>
        <li>Assigned roles to users based on business requirements.</li>
        <li>
          Developed and deployed the application according to client
          specifications, ensuring successful integration in the production
          environment.
        </li>
        <li>
          Replaced a third-party tool, achieving an annual cost saving of{" "}
          <strong>$3,000</strong>.
        </li>
      </ul>
    </div>
  );
};

const NewsDesc = () => {
  return (
    <div className={Styles.container}>
      <ul>
        <li>
          Developed a dynamic web application for News Editors, enabling
          real-time news filing and content publishing.
        </li>
        <li>
          Created multiple modules leveraging{" "}
          <strong>React.js, Redux, and TypeScript</strong> for a robust and
          scalable front-end.
        </li>
        <li>
          Implemented seamless support for both online and offline usage,
          enhancing accessibility and user experience.
        </li>
        <li>
          Designed and integrated custom authentication and authorization
          mechanisms using proprietary API methods.
        </li>
        <li>
          Utilized <strong>GitHub Actions</strong> for streamlined deployment
          and continuous testing of various application modules.
        </li>
        <li>
          Deployed the application on AWS, utilizing <strong>S3 buckets</strong>{" "}
          and <strong>Cache behaviors</strong> for optimized storage and
          performance.
        </li>
        <li>
          Achieved comprehensive unit testing with a combination of{" "}
          <strong>React Testing Library</strong> and <strong>Jest</strong>,
          reaching a code coverage of 90%.
        </li>
        <li>
          The application supports over 400 active users, delivering features
          with minimal latency and high efficiency.
        </li>
      </ul>
    </div>
  );
};

const DatabaseDesc = () => {
  return (
    <div className={Styles.container}>
      <ul>
        <li>
          A web application designed for adding new 'News' items/entities to the
          database.
        </li>
        <li>Restricted access to this functionality to Admins only.</li>
        <li>
          Developed the user interface using{" "}
          <strong>React.js, Redux, and TypeScript</strong>.
        </li>
        <li>
          Implemented authentication and authorization using a token-based
          method.
        </li>
        <li>
          Secured the Web API with <strong>JWT</strong> for robust security.
        </li>
        <li>
          Integrated the database with the back-end code using modern
          approaches.
        </li>
        <li>
          Utilized <strong>GitHub</strong> for source control and version
          management.
        </li>
        <li>
          Incorporated <strong>Swagger UI</strong> to visualize and interact
          with the API resources.
        </li>
      </ul>
    </div>
  );
};

const YouTHereDesc = () => {
  return (
    <div className={Styles.container}>
      <ul>
        <li>
          Developed a web application for an NGO to facilitate sending and
          receiving donations for people in need.
        </li>
        <li>
          Designed the user interface using{" "}
          <strong>React.js and JavaScript</strong>.
        </li>
        <li>
          Created a <strong>RESTful Web API</strong> for front-end integration
          with <strong>ASP.NET Web API</strong>.
        </li>
        <li>
          Managed the development of the database, including tables and other
          components.
        </li>
        <li>
          Integrated the database with the back-end code using the{" "}
          <strong>EF 6 Code First</strong> approach.
        </li>
        <li>
          Implemented authentication and authorization using{" "}
          <strong>Firebase</strong>.
        </li>
        <li>
          Utilized <strong>GitHub</strong> for source control and version
          management.
        </li>
        <li>
          Applied business logic with <strong>C#</strong> and{" "}
          <strong>LINQ</strong> for database operations.
        </li>
        <li>
          Incorporated <strong>Swagger UI</strong> to visualize and interact
          with API resources.
        </li>
      </ul>
    </div>
  );
};

const Projects = () => {
  const projects = [
    {
      projectname: "News filing app",
      modelused: "Agile model",
      desctype: "news",
      roles:
        "Proposed and implemented features like Github Actions for deployment. Also, implemented various user modules using React JS.",
    },
    {
      projectname: "Onboarding Tool",
      modelused: "Agile model",
      desctype: "onboarding",
      roles: (
        <ul>
          <li>
            Directed the development team throughout the project lifecycle, from
            design to implementation.
          </li>
          <li>
            Engineered the front-end logic with <strong>React.js</strong>, and
            managed state using <strong>Redux</strong> and{" "}
            <strong>Redux Toolkit</strong>.
          </li>
          <li>
            Utilized <strong>Redux-Saga</strong> for handling complex side
            effects and asynchronous operations.
          </li>
          <li>
            Implemented <strong>Micro Frontend architecture</strong> with{" "}
            <strong>Module Federation</strong> for modular and scalable
            development.
          </li>
          <li>
            Coordinated with the client to customize the application to meet
            specific needs and ensured its successful deployment in the
            production environment.
          </li>
        </ul>
      ),
    },
    {
      projectname: "Database tool",
      modelused: "Agile model",
      desctype: "database",
      roles:
        "Played an important role in architecture discussions and implemented multiple modules both in front-end and back-end code.",
    },
    {
      projectname: "YouThere",
      modelused: "Agile model",
      desctype: "youthere",
      roles:
        "Developed multiple Front-end modules and complete back end API and DB development. Active Involvement right from design phase till implementation. ",
    },
  ];

  const projectList = projects.map((project, index) => {
    return (
      <div id={project.desctype} className={Styles.card}>
        <div className={Styles.container}>
          <h2>{project.projectname}</h2>
          <h3>Description:</h3>
          {(() => {
            switch (project.desctype) {
              case "onboarding":
                return <OnboardingDesc />;
              case "news":
                return <NewsDesc />;
              case "database":
                return <DatabaseDesc />;
              case "youthere":
                return <YouTHereDesc />;
              default:
                return null;
            }
          })()}
          <h3>Model used:</h3>
          <p>{project.modelused}</p>
          <h3>Roles and responsibilities:</h3>
          <p>{project.roles}</p>
        </div>
      </div>
    );
  });

  return (
    <div className={Styles.topcontainer}>
      <h1>Projects</h1>
      <div className={Styles.projects}>{projectList}</div>
    </div>
  );
};

export default Projects;
