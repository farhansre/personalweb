import Link from "next/link";
import styles from "./page.module.css";

export default function About() {
  return (
    <main className={styles.page}>
      <div className={styles.card}>
        <Link href="/" className={styles.back}>
          ← Home
        </Link>
        <br></br>
        <h1>About</h1>

        {" Hello. I am Farhan Sreejan. I grew up in The Bronx and am currently finishing up my undergrad @ Boston College. To pass time I program and make sounds either by myself or with my loved ones. Looking ahead to postgraduate studies, employment, and/or venturings that are possible."}

      </div>
    </main>
  );
}