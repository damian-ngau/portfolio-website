import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFileAlt, faEnvelope} from "@fortawesome/free-solid-svg-icons"
import { faGithub, faLinkedin} from "@fortawesome/free-brands-svg-icons"
import * as styles from "../styles/contacts.module.css"

export default function Contacts() {
  let resumeLink =
    "https://drive.google.com/file/d/1JluOwOYR-wMNSo29L1p5cZUsR6asBxpo/view?usp=sharing"
    

  return (
    <section id="Contacts">
      <div>
        <div className={styles.heading}>Contact Me</div>
        <div className={styles.contacts}>
          <a className={styles.link} href={resumeLink}>
            <FontAwesomeIcon icon={faFileAlt} size="3x"/> Resume
          </a>
          <a className={styles.link} href="https://www.linkedin.com/in/damianngau/">
            <FontAwesomeIcon icon={faLinkedin} size="3x"/> LinkedIn
          </a>
          <a className={styles.link} href="https://github.com/damian-ngau">
            <FontAwesomeIcon icon={faGithub} size="3x"/> Github
          </a>
          <a className={styles.link} href="mailto:damianngau@gmail.com">
            <FontAwesomeIcon icon={faEnvelope} size="3x"/> Email
          </a>
        </div>
      </div>
    </section>
  )
}