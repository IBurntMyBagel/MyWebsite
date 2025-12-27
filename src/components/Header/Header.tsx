import Link from "next/link";
import styles from "./Header.module.css"; // or create a separate CSS module for header

export default function Header() {
  return (
    <header className={styles.header}>
      <nav>
        <ul className={styles.navList}>
          <li>
            <Link className={styles.navItem} href="/">
              Home
            </Link>
          </li>
          <li>
            <Link className={styles.navItem} href="/testingpage">
              Testing Page
            </Link>
          </li>
          <li>
            <a
              className={styles.navItem}
              href="https://github.com/IBurntMyBagel"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </li>
          <li>
            <a
              className={styles.navItem}
              href="https://www.linkedin.com/in/ryan-tsang-rpi2026/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
