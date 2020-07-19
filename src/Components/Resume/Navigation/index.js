import React from "react";
import styles from "./Navigation.module.css";

const Navigation = () => {
  return (
    <nav className={styles.navigation}>
      <ul className={styles.menu}>
        <li className={styles.item}>
          <a href="#home">Home</a>
        </li>
        <li className={styles.item}>
          <a href="#home">Test1</a>
        </li>
        <li className={styles.item}>
          <a href="#home">Test2</a>
        </li>
        <li className={styles.item}>
          <a href="#home">Test3</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
