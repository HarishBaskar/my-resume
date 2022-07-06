import React from "react";
import Styles from "./Portfolio.module.scss";
import ProjectPic from "../../../Images/coffee.jpg";
import ProjectWebPPic from "../../../Images/coffee.webp";
import NewsPic from "../../../Images/news.jpg";
import NewsWebPPic from "../../../Images/news.webp";
import DatabasePic from "../../../Images/database.jpg";
import DatabaseWebPPic from "../../../Images/database.webp";
import OnboardingPic from "../../../Images/onboarding.jpg";
import OnboardingWebPPic from "../../../Images/onboarding.webp";

const Projects = () => {
  const projects = [
    {
      projectname: "News filing app",
      link: "/projects",
      picture: NewsPic,
      webPPicture: NewsWebPPic,
      description:
        "A web app developed for News Editors to file news and publish content on the fly....",
    },
    {
      projectname: "Onboarding tool",
      link: "/projects",
      picture: OnboardingPic,
      webPPicture: OnboardingWebPPic,
      description:
        "A web application developed to onboard new users and assign training according to depart....",
    },
    {
      projectname: "Database tool",
      link: "/projects",
      picture: DatabasePic,
      webPPicture: DatabaseWebPPic,
      description:
        "A web app developed to add new 'News' items/entities to DB. This action is restricted to....",
    },
    {
      projectname: "YouThere app",
      link: "/projects",
      picture: ProjectPic,
      webPPicture: ProjectWebPPic,
      description:
        "A web app developed to send and get donations to help people in need....",
    },
  ];

  const colleagues = projects.map((project, index) => {
    return (
      <div className={Styles.card} key={`Project-${project.projectname}`}>
        <div className={Styles.colleagueimage}>
          <picture>
            <source type="image/webp" srcset={project.webPPicture} />
            <source type="image/jpeg" srcset={project.picture} />
            <img src={project.webPPicture} alt="Project" />
          </picture>
        </div>
        <div className={Styles.container}>
          <h2>{project.projectname}</h2>
          <p>
            {project.description}
            {(() => {
              switch (project.projectname) {
                case "Onboarding tool":
                  return (
                    <p>
                      learn more about{" "}
                      <a href="/projects#onboarding" title="Learn more">
                        Onboarding tool
                      </a>
                    </p>
                  );
                case "News filing app":
                  return (
                    <p>
                      learn more about{" "}
                      <a href="/projects#news" title="Learn more">
                        News filing app
                      </a>
                    </p>
                  );
                case "Database tool":
                  return (
                    <p>
                      learn more about{" "}
                      <a href="/projects#database" title="Learn more">
                        Database tool
                      </a>
                    </p>
                  );
                case "YouThere app":
                  return (
                    <p>
                      learn more about{" "}
                      <a href="/projects#youthere" title="Learn more">
                        YouThere app
                      </a>
                    </p>
                  );
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
