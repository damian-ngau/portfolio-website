import React from "react";
import { Link } from "gatsby";
import * as styles from "../styles/layout.module.css";

export default function Layout({ children }) {
  return (
    <div className={styles.app}>
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

      <div>{children}</div>
    </div>
  );
}
