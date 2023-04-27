import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import * as styles from "../styles/contacts.module.css";
import contactsImage from "/static/images/undraw_personal_text_re_vqj3.svg";

export default function Contacts() {
  return (
    <section id="Contacts">
      <div>
        <div className={styles.heading}>Contact Me</div>
        <div className={styles.contacts}>
          <a
            className={styles.link}
            href="https://www.linkedin.com/in/damianngau/"
          >
            <FontAwesomeIcon icon={faLinkedin} size="2x" /> LinkedIn
          </a>
          <a className={styles.link} href="https://github.com/damian-ngau">
            <FontAwesomeIcon icon={faGithub} size="2x" /> Github
          </a>
          <a className={styles.link} href="mailto:damianngau@gmail.com">
            <FontAwesomeIcon icon={faEnvelope} size="2x" /> Email
          </a>
        </div>
        <div className={styles.contactsImageContainer}>
          <img src={contactsImage} alt="Unavailable" />
        </div>
      </div>
    </section>
  );
}
