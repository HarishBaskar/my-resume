import React, { Suspense } from "react";
import dynamic from 'next/dynamic';
import Header from "./Header/Header";
import AboutMe from "./AboutMe";
import Portfolio from "./Portfolio";
import Vita from "./Vita";
import Styles from "./Resume.module.css";
import Footer from "./Footer";
import LoadingIndicator from "../LoadingIndicator/LoadingIndicator";
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";
import { useAnalytics } from "../../lib/useAnalytics";

const ParallaxElement = dynamic(() => import("./ParallaxContainer"), {
  ssr: false,
  loading: () => <LoadingIndicator />
});

interface PersonalInfo {
  name: string;
  job: string;
  skills: string;
  mail: string;
  githuburl: string;
  linkedinurl: string;
}

const personalInfo: PersonalInfo = {
  name: "Harish Baskar",
  job: "Lead Web Developer",
  skills: "React.js, Redux, Javascript and Typescript",
  mail: "mailto:harishbaskar94@gmail.com",
  githuburl: "https://github.com/HarishBaskar",
  linkedinurl: "https://www.linkedin.com/in/harish-baskar-96589a80",
};

const ParallaxItem = () => (
  <ErrorBoundary fallback={<div className={Styles.fallbackContainer}>Failed to load parallax effect</div>}>
    <div>
      <section>
        <ParallaxElement />
      </section>
    </div>
  </ErrorBoundary>
);

const SectionWithFallback: React.FC<{
  children: React.ReactNode;
  name: string;
}> = ({ children, name }) => (
  <ErrorBoundary fallback={<div className={Styles.fallbackContainer}>Failed to load {name} section</div>}>
    <Suspense fallback={<LoadingIndicator />}>
      {children}
    </Suspense>
  </ErrorBoundary>
);

const Resume = () => {
  const { trackEvent } = useAnalytics();

  React.useEffect(() => {
    trackEvent('resume_view', {
      timestamp: new Date().toISOString()
    });
  }, [trackEvent]);

  return (
    <div className={Styles.topresumecontainer}>
      <SectionWithFallback name="header">
        <Header personalInfo={personalInfo} />
      </SectionWithFallback>

      <div className={Styles.resumecontainer}>
        <div className={Styles.whitesection}>
          <SectionWithFallback name="about">
            <AboutMe />
          </SectionWithFallback>
        </div>

        <ParallaxItem />

        <SectionWithFallback name="experience">
          <Vita />
        </SectionWithFallback>

        <ParallaxItem />

        <div className={Styles.whitesection}>
          <SectionWithFallback name="portfolio">
            <Portfolio />
          </SectionWithFallback>
        </div>

        <ParallaxItem />

        <div className={Styles.whitesection}>
          <SectionWithFallback name="footer">
            <Footer />
          </SectionWithFallback>
        </div>
      </div>
    </div>
  );
};

export default Resume;