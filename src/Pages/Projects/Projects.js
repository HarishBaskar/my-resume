import React from "react";
import Styles from "./Projects.module.css";

const Projects = () => {
  const projects = [
    {
      projectname: "Onboarding Tool",
      modelused: "Agile model",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy textever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      roles:
        "Played a prominent role in the team and also involved myself right from design phase till implementation.",
    },
    {
      projectname: "News filing app",
      modelused: "Agile model",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy textever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      roles: "Lorem Ipsum is simply dummy",
    },
    {
      projectname: "Database tool",
      modelused: "Agile model",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy textever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      roles: "Lorem Ipsum is simply dummy",
    },
    {
      projectname: "Portfolio website",
      modelused: "Agile model",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy textever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      roles: "Lorem Ipsum is simply dummy",
    },
  ];

  const projectList = projects.map((project, index) => {
    return (
      <div className={Styles.card}>
        <div className={Styles.container}>
          <h2>{project.projectname}</h2>
          <h3>Description:</h3>
          <p>{project.description}</p>
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
