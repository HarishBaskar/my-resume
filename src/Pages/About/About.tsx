import React from "react";
import Styles from "./About.module.css";

const About: React.FC = () => {
  return (
    <div className={Styles.about}>
      <h1>About Me</h1>
      <div className={Styles.content}>
        <p>
          As a Lead Frontend Developer at IQVIA, I specialize in creating scalable and 
          efficient web applications using React.js, TypeScript, and modern web technologies. 
          My journey in web development began with a fascination for user interface design 
          and has evolved into a passion for building robust, user-friendly applications.
        </p>
        
        <h2>Technical Expertise</h2>
        <ul>
          <li>Frontend Development: React.js, TypeScript, Next.js</li>
          <li>State Management: Redux, Context API</li>
          <li>UI/UX Design: CSS3, SASS, Material-UI</li>
          <li>Version Control: Git, GitHub</li>
          <li>Testing: Jest, React Testing Library</li>
          <li>CI/CD: Jenkins, GitHub Actions</li>
        </ul>

        <h2>Professional Philosophy</h2>
        <p>
          I believe in writing clean, maintainable code and creating intuitive user 
          experiences. My approach combines technical excellence with a deep understanding 
          of user needs, ensuring that every project I work on delivers both functionality 
          and value.
        </p>

        <h2>Current Focus</h2>
        <p>
          Currently, I&apos;m focused on building micro-frontend architectures and optimizing 
          web application performance. I&apos;m also passionate about mentoring junior developers 
          and contributing to open-source projects in my spare time.
        </p>

        <h2>Beyond Coding</h2>
        <p>
          When I&apos;m not coding, you&apos;ll find me exploring new music or spending time with 
          my dog. I believe in maintaining a healthy work-life balance and continuously 
          learning new technologies and approaches in web development.
        </p>
      </div>
    </div>
  );
};

export default About;