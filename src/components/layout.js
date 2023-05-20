import React from "react";
import { Link } from "gatsby";
import * as styles from "../styles/layout.module.css";

export default function Layout({ children }) {
  return (
    <div>
      <div className={styles.navBar}>
        <div className={styles.links}>
          <Link className={styles.link} to="/">
            Home
          </Link>

          <Link className={styles.link} to="/#Projects">
            Projects
          </Link>

          <Link className={styles.link} href="/#Contacts">
            Contact
          </Link>
        </div>
      </div>
      <div className={styles.app}>
        <div>{children}</div>
      </div>
      <div className={styles.footer}>
        <div className={styles.footerText}>
          Ⓒ Damian Ngau | damianngau@gmail.com
        </div>
      </div>
    </div>
  );
}
