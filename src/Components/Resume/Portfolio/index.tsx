import React, { JSX } from "react";
import Image from 'next/image';
import Styles from "./Portfolio.module.scss";

interface Project {
  projectname: string;
  link: string;
  picture: string;
  description: string;
}

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      projectname: "News filing app",
      link: "/projects",
      picture: "/images/news.jpg",
      description:
        "A web app developed for News Editors to file news and publish content on the fly....",
    },
    {
      projectname: "Onboarding tool",
      link: "/projects",
      picture: "/images/onboarding.jpg",
      description:
        "A web application developed to onboard new users and assign training according to depart....",
    },
    {
      projectname: "Database tool",
      link: "/projects",
      picture: "/images/database.jpg",
      description:
        "A web app developed to add new 'News' items/entities to DB. This action is restricted to....",
    },
    {
      projectname: "YouThere app",
      link: "/projects",
      picture: "/images/coffee.jpg",
      description:
        "A web app developed to send and get donations to help people in need....",
    },
  ];

  const renderLearnMoreLink = (projectName: string): JSX.Element | null => {
    const projectAnchors: Record<string, string> = {
      "Onboarding tool": "onboarding",
      "News filing app": "news",
      "Database tool": "database",
      "YouThere app": "youthere"
    };

    const anchor = projectAnchors[projectName];
    return anchor ? (
      <a href={`/projects#${anchor}`} title="Learn more">
        Learn more
      </a>
    ) : null;
  };

  return (
    <div className={Styles.topcontainer}>
      <h1>Portfolio</h1>
      <div className={Styles.projects}>
        {projects.map((project) => (
          <div className={Styles.card} key={`Project-${project.projectname}`}>
            <div className={Styles.colleagueimage}>
              <Image
                src={project.picture}
                alt={`${project.projectname} preview`}
                width={400}
                height={300}
                layout="responsive"
                objectFit="cover"
              />
            </div>
            <div className={Styles.container}>
              <h2>{project.projectname}</h2>
              <p>
                {project.description}
                {renderLearnMoreLink(project.projectname)}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;