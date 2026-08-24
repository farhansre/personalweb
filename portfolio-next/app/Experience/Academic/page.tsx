import Link from "next/link";
import styles from "./page.module.css";

export default function ExperienceAcademic() {
  return (
    <main className={styles.page}>
      <div className={styles.card}>
        <Link href="/" className={styles.back}>
          ← Home
        </Link>

        <h1>Experience / Academic</h1>

        <p className={styles.intro}>
          My academic background and professional experience (This is now in Times New Roman to denote that I am serious.)

        </p>

        <div className={styles.links}>
          <a
            href="/Farhan-Sreejan-Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.button}
          >
            Open Sesame/Resume ↗
          </a>

          <a
            href="https://www.linkedin.com/in/farhansreejan"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.button}
          >
            LinkedIn ↗
          </a>

          <a
            href="https://github.com/farhansre"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.button}
          >
            GitHub ↗
          </a>
        </div>
      </div>
    </main>
  );
}
