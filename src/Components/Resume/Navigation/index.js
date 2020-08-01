import React from "react";
import styles from "./Navigation.module.css";
import { Link } from "react-router-dom";
import * as ROUTES from "../../../Constants/Routes";

const Navigation = () => {
  return (
    <nav className={styles.navigation}>
      <ul className={styles.menu}>
        <li className={styles.item}>
          <Link to={ROUTES.HOME_PAGE}>Home</Link>
        </li>
        <li className={styles.item}>
          <Link to={ROUTES.PROJECTS_PAGE}>Projects</Link>
        </li>
        <li className={styles.item}>
          <Link to={ROUTES.ABOUT_PAGE}>About</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
