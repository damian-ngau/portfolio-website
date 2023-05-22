import React from "react";
import Layout from "../components/layout";
import Bio from "../components/bio";
import Projects from "../components/projects";
import Contacts from "../components/contacts";
import * as styles from "../styles/index.module.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import ReactGA from "react-ga4";

export default function Home() {
  ReactGA.initialize("G-EHCR2GY7LB");

  return (
    <Layout>
      <head>
        <title>Damian Ngau</title>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        ></link>
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        ></link>
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        ></link>
        <link rel="manifest" href="/site.webmanifest"></link>
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
