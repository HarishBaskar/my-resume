import React from "react";
import Styles from "./Projects.module.css";

const OnboardingDesc = () => {
  return (
    <div className={Styles.container}>
      <ul>
          <li>A web application developed to onboard new users and assign training according to their department.</li>
          <li>Developed using <strong>JavaScript, React JS, and C#</strong>.</li>
          <li>Used <strong>Entity Framework</strong> to establish mapping with SQL Server Database.</li>
          <li>Worked on the modules for implementing the Front-end logic using React JS.</li>
          <li>The application deals with on-boarding and off-boarding users.</li>
          <li>Users will be assigned with roles based on business requirement. </li>
          <li>The project was developed as per the inputs given by the Client and the web application was successfully deployed in production environment.</li>
          <li>The web application served its purpose by replacing a third-party application, eventually saving <strong>$3000</strong> per year.</li>
      </ul>
    </div>
  )
}

const NewsDesc = () => {
  return (
    <div className={Styles.container}>
      <ul>
        <li>A web app developed for News Editors to file news and publish content on the fly.</li>
        <li>Developed multiple modules using <strong>React JS</strong>.</li>
        <li>Authentication and Authorization was implemented using home grown methods.</li>
        <li>Effectively used <strong>Github Actions</strong> for deployment and simultaneous testing of various modules.</li>
        <li>The app is hosted in AWS using a combination of <strong>S3 bucket</strong> and <strong>Cache behaviors</strong>.</li>
        <li>Implemented backend service using home grown Web API hosted in AWS EC2 servers</li>
        <li>The Web app is actively used by more than 400 users and provides features at the cost of very low latency</li>
      </ul>
    </div>
  )
}

const DatabaseDesc = () => {
  return (
    <div className={Styles.container}>
      <ul>
        <li>A web app developed to add new 'News' items/entities to DB.</li>
        <li>This action is restricted to Admins only.</li>
        <li>The user interface was developed using React JS.</li>
        <li>Authentication and Authorization was implemented using Token based method.</li>
        <li>Implemented Web API security using JWT.</li>
        <li>Integrated DB with Back end code using <strong>EF 6 Code First</strong> approach.</li>
        <li>Usage of <strong>GITHUB</strong> as source control and version management.</li>
        <li>Incorporated <strong>Swagger UI</strong> to visualize and interact with the API resources.</li>
      </ul>
    </div>
  )
}

const YouTHereDesc = () => {
  return (
    <div className={Styles.container}>
      <ul>
        <li>A web app developed for a NGO organization to send and get donations for people in need.</li>
        <li>Developed User Interface using <strong>React JS</strong>.</li>
        <li>Developed <strong>RESTFUL Web API</strong> for front end consumption using <strong>ASP.NET Web API.</strong></li>
        <li>Development of Database, Tables and other DB components.</li>
        <li>Integrated DB with Back end code using <strong>EF 6 Code First</strong> approach.</li>
        <li>Authentication and Authorization was implemented using <strong>Firebase.</strong></li>
        <li>Usage of <strong>GITHUB</strong> as source control and version management.</li>
        <li>Business logic implementation using <strong>C#</strong> and <strong>LINQ</strong> for DB changes.</li> 
        <li>Incorporated <strong>Swagger UI</strong> to visualize and interact with the API resources.</li>
      </ul>
    </div>
  )
}

const Projects = () => {
  const projects = [
    {
      projectname: "Onboarding Tool",
      modelused: "Agile model",
      desctype: "onboarding",
      roles:
        "Played a prominent role in the team and also involved myself right from design phase till implementation.",
    },
    {
      projectname: "News filing app",
      modelused: "Agile model",
      desctype: "news",
      roles: "Proposed and implemented features like Github Actions for deployment. Also, implemented various user modules using React JS.",
    },
    {
      projectname: "Database tool",
      modelused: "Agile model",
      desctype: "database",
      roles: "Played an important role in architecture discussions and implemented multiple modules both in front-end and back-end code.",
    },
    {
      projectname: "YouThere",
      modelused: "Agile model",
      desctype: "youthere",
      roles: "Developed multiple Front-end modules and complete back end API and DB development. Active Involvement right from design phase till implementation. ",
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
              case 'onboarding':
                return <OnboardingDesc/>;
              case 'news':
                return <NewsDesc/>;
              case 'database':
                return <DatabaseDesc/>;
              case 'youthere':
                return <YouTHereDesc/>;
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
