import React from "react";
import * as styles from "../styles/card.module.css";

export default function Card(props) {
  let project = props.project;
  return (
    <div className={styles.card} key={project.link}>
      <div className={styles.title}>{project.title}</div>
      <div className={styles.cardImageContainer}>
        <img src={project.image} alt="Unavailable" />
      </div>
      <div className={styles.body}>{project.desc}</div>
      {buttons(project)}
    </div>
  );
}

function buttons(project) {
  return (
    <div className={styles.buttons}>
      {project.link === "" ? (
        <div></div>
      ) : (
        <div>
          <a
            className={styles.button}
            href={project.link}
            target="_blank"
            rel="noreferrer"
          >
            source
          </a>
        </div>
      )}
      {project.view === "" ? (
        <div></div>
      ) : (
        <div>
          <a
            className={styles.button}
            href={project.view}
            target="_blank"
            rel="noreferrer"
          >
            view project
          </a>
        </div>
      )}
    </div>
  );
}
