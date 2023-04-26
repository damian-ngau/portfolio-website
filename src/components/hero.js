import React from "react";
import * as styles from "../styles/hero.module.css";
import heroImage from "/static/images/undraw_visionary_technology_re_jfp7 (1).svg";

export default function Hero() {
  return (
    <div>
      <div className={styles.bioCard}>
        <div className={styles.body}>
          {"\n"}
          I’m a Software Developer based in Melbourne, Australia. {"\n"}I have a
          passion for software development and creating solutions. {"\n"}
          In my spare time, I enjoy learning new technologies, board game nights
          and rocking out on the guitar.
          {"\n"}
        </div>
      </div>
      <div className={styles.imageContainer}>
        <img src={heroImage} alt="Unavailable" />
      </div>
    </div>
  );
}
