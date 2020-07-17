import React from "react";
import Styles from "./Vita.module.css";
import cx from "classnames";

const Vita = () => {
  return (
    <div className={Styles.vita}>
      <div className={Styles.header}>My Professional story</div>
      <div className={Styles.timeline}>
        <div className={cx(Styles.container, Styles.left)}>
          <div className={Styles.content}>
            <h2>
              <strong>2012 - 2016</strong>
            </h2>
            <h2>
              <strong>Bachelor of Engineering</strong>
            </h2>
            <h1>
              Sri Krishna College of Engineering and Technology, Coimbatore
            </h1>
            <p>
              I graduated with Bachelor of Engineering degree in Electronics and
              Communication Engineering.
            </p>
          </div>
        </div>
        <div className={cx(Styles.container, Styles.right)}>
          <div className={Styles.content}>
            <h2>
              <strong>2016 - 2017</strong>
            </h2>
            <h2>
              <strong>Systems Engineer Trainee</strong>
            </h2>
            <h1>Infosys, Mysore</h1>
            <p>Description</p>
          </div>
        </div>
        <div className={cx(Styles.container, Styles.left)}>
          <div className={Styles.content}>
            <h2>
              <strong>2017 - 2018</strong>
            </h2>
            <h2>
              <strong>Systems Engineer</strong>
            </h2>
            <h1>Infosys, Bangalore</h1>
            <p>Description</p>
          </div>
        </div>
        <div className={cx(Styles.container, Styles.right)}>
          <div className={Styles.content}>
            <h2>
              <strong>2018 - 2019</strong>
            </h2>
            <h2>
              <strong>Senior Systems Engineer</strong>
            </h2>
            <h1>Infosys, Bangalore</h1>
            <p>Description</p>
          </div>
        </div>
        <div className={cx(Styles.container, Styles.left)}>
          <div className={Styles.content}>
            <h2>
              <strong>2019 - Present</strong>
            </h2>
            <h2>
              <strong>Software Engineer</strong>
            </h2>
            <h1>Thomson Reuters, Bangalore</h1>
            <p>Description</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vita;
