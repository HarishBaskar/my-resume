import React from "react";
import Image from "next/image";
import Styles from "./Projects.module.scss";

interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  image: string;
  role: string;
  responsibilities: string[];
}

const projects: Project[] = [
  {
    id: "news",
    title: "News Filing Application",
    description: "A comprehensive web application for news editors to file and publish content efficiently. The application streamlines the news publishing workflow and improves editorial productivity.",
    technologies: ["React.js", "Redux", "TypeScript", "Material-UI", "Node.js"],
    image: "/images/news.jpg",
    role: "Lead Developer",
    responsibilities: [
      "Led the development of the front-end architecture",
      "Implemented real-time content updates using WebSocket",
      "Optimized application performance and loading times",
      "Integrated with multiple content management systems"
    ]
  },
  {
    id: "onboarding",
    title: "User Onboarding Tool",
    description: "A sophisticated onboarding platform that automates the process of new user training and department assignment. Features include progress tracking and dynamic training paths.",
    technologies: ["React.js", "Redux", "Node.js", "Express", "MongoDB"],
    image: "/images/onboarding.jpg",
    role: "Senior Developer",
    responsibilities: [
      "Designed and implemented the user interface",
      "Created a dynamic training module system",
      "Integrated with HR management systems",
      "Implemented automated progress tracking"
    ]
  },
  {
    id: "database",
    title: "Database Management Tool",
    description: "A specialized tool for managing news items and entities in the database. Features include batch operations, content validation, and audit logging.",
    technologies: ["React.js", "TypeScript", "GraphQL", "PostgreSQL"],
    image: "/images/database.jpg",
    role: "Technical Lead",
    responsibilities: [
      "Architected the database schema",
      "Implemented GraphQL API integration",
      "Created advanced search and filtering capabilities",
      "Built audit logging and security features"
    ]
  },
  {
    id: "youthere",
    title: "YouThere Donation Platform",
    description: "A web platform connecting donors with people in need. Features include secure payment processing, user verification, and donation tracking.",
    technologies: ["React.js", "Firebase", "Stripe", "Material-UI"],
    image: "/images/coffee.jpg",
    role: "Full Stack Developer",
    responsibilities: [
      "Developed the entire frontend application",
      "Integrated payment processing system",
      "Implemented user authentication and verification",
      "Created donation tracking and reporting features"
    ]
  }
];

const Projects: React.FC = () => {
  return (
    <div className={Styles.projects}>
      <h1>My Projects</h1>
      <div className={Styles.projectsGrid}>
        {projects.map((project) => (
          <div key={project.id} id={project.id} className={Styles.projectCard}>
            <div className={Styles.imageContainer}>
              <Image
                src={project.image}
                alt={project.title}
                width={400}
                height={300}
                className={Styles.projectImage}
              />
            </div>
            <div className={Styles.projectContent}>
              <h2>{project.title}</h2>
              <p className={Styles.description}>{project.description}</p>
              <div className={Styles.role}>
                <strong>Role:</strong> {project.role}
              </div>
              <div className={Styles.technologies}>
                <strong>Technologies:</strong>
                <div className={Styles.techStack}>
                  {project.technologies.map((tech) => (
                    <span key={tech} className={Styles.techTag}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className={Styles.responsibilities}>
                <strong>Key Responsibilities:</strong>
                <ul>
                  {project.responsibilities.map((resp, index) => (
                    <li key={index}>{resp}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;