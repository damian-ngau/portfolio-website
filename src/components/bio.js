import React from "react";
import * as styles from "../styles/bio.module.css";
import bioImage from "/static/images/undraw_programming_re_kg9v.svg";

export default function Bio() {
  return (
    <div>
      <div className={styles.bioCard}>
        <div className={styles.body}>
          {"\n"}
          Hi there !{"\n"}I'm Damian, a Software Developer based in Melbourne,
          Australia.{"\n"}
          {"\n"}I have a passion for software development and creating
          solutions.{"\n"}
          Specifically, I love the world of AI, deep learning and data science.
          {"\n"}
          {"\n"}In my spare time, I enjoy playing video games, spending board
          game nights with friends and rocking out on the guitar.
          {"\n"}
          {"\n"}
        </div>
      </div>
      <div className={styles.bioImageContainer}>
        <img src={bioImage} alt="Unavailable" />
      </div>
    </div>
  );
}
