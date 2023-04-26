import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";
import {
  faPython,
  faRProject,
  faJs,
  faReact,
  faLinux,
  faDocker,
  faGit,
} from "@fortawesome/free-brands-svg-icons";
import * as styles from "../styles/tech.module.css";

export default function Tech() {
  return (
    <section id="tech">
      <div>
        <div className={styles.tech}>
          <div className={styles.subheading}>
            <FontAwesomeIcon icon={faPython} size="2x" /> Python
          </div>

          <div className={styles.subheading}>
            <FontAwesomeIcon icon={faRProject} size="2x" /> R
          </div>

          <div className={styles.subheading}>
            <FontAwesomeIcon icon={faDatabase} size="2x" /> SQL
          </div>

          <div className={styles.subheading}>
            <FontAwesomeIcon icon={faJs} size="2x" /> Javascript
          </div>

          <div className={styles.subheading}>
            <FontAwesomeIcon icon={faReact} size="2x" /> React
          </div>

          <div className={styles.subheading}>
            <FontAwesomeIcon icon={faLinux} size="2x" /> Linux
          </div>

          <div className={styles.subheading}>
            <FontAwesomeIcon icon={faGit} size="2x" /> Git
          </div>

          <div className={styles.subheading}>
            <FontAwesomeIcon icon={faDocker} size="2x" /> Docker
          </div>
        </div>
      </div>
    </section>
  );
}
