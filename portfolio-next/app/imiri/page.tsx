import Link from "next/link";
import styles from "./page.module.css";

export default function Imirí() {
  return (
    <main className={styles.page}>
      <div className={styles.card}>
        <Link href="/" className={styles.back}>
          ← Home
        </Link>
        <br></br>
        <h1>Imirí</h1>

        {"Check back in later."}

      </div>
    </main>
  );
}