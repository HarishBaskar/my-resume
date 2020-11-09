import React from "react";
import Styles from "./Portfolio.module.css";
import ProjectPic from "../../../Images/coffee.jpg";
import NewsPic from "../../../Images/news.jpg";
import DatabasePic from "../../../Images/database.jpg";
import OnboardingPic from "../../../Images/onboarding.jpg"

const Projects = () => {
  const projects = [
    {
      projectname: "Onboarding tool",
      link: "/projects",
      picture: OnboardingPic,
      description:
        "A web application developed to onboard new users and assign training according to depart....",
    },
    {
      projectname: "News filing app",
      link: "/projects",
      picture: NewsPic,
      description:
        "A web app developed for News Editors to file news and publish content on the fly....",
    },
    {
      projectname: "Database tool",
      link: "/projects",
      picture: DatabasePic,
      description:
        "A web app developed to add new 'News' items/entities to DB. This action is restricted to....",
    },
    {
      projectname: "YouThere app",
      link: "/projects",
      picture: ProjectPic,
      description:
        "A web app developed to send and get donations to help people in need....",
    },
  ];

  const colleagues = projects.map((project, index) => {
    return (
      <div className={Styles.card}>
        <div className={Styles.colleagueimage}>
          <img id="pictureImage" src={project.picture} alt="Portrait" />
        </div>
        <div className={Styles.container}>
          <h2>{project.projectname}</h2>
          <p>{project.description}
            {(() => {
            switch (project.projectname) {
              case 'Onboarding tool':
                return <a href="/projects#onboarding" title="Learn more">Learn more</a>;
              case 'News filing app':
                return <a href="/projects#news" title="Learn more">Learn more</a>;
              case 'Database tool':
                return <a href="/projects#database" title="Learn more">Learn more</a>;
              case 'YouThere app':
                return <a href="/projects#youthere" title="Learn more">Learn more</a>;
              default:
                return null;
            }
          })()}
          </p>
        </div>
      </div>
    );
  });

  return (
    <div className={Styles.topcontainer}>
      <h1>Portfolio</h1>
      <div className={Styles.projects}>{colleagues}</div>
    </div>
  );
};

export default Projects;
