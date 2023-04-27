import React from "react";
import Layout from "../components/layout";
import Bio from "../components/bio";
import Projects from "../components/projects";
import Contacts from "../components/contacts";
import * as styles from "../styles/index.module.css";
import "@fortawesome/fontawesome-svg-core/styles.css";

export default function Home() {
  return (
    <Layout>
      <head>
        <title>Damian Ngau</title>
      </head>
      <div className={styles.main}>
        <div className={styles.heading}>Damian Ngau</div>
        <div className={styles.subheading}>Software Developer{"\n"}</div>
        <Bio />
        <div className={styles.blankSpace}></div>
        <Projects />
        <div className={styles.blankSpace}></div>
        <Contacts />
        <div className={styles.blankSpace}></div>
      </div>
    </Layout>
  );
}
