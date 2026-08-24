import Link from "next/link";
import ButtonClient from "./ButtonClient";
import styles from "./page.module.css";

export default function ButtonPage() {
  return (
    <main className={styles.page}>
      <Link href="/" className={styles.back}>
        ← Home
      </Link>

      <ButtonClient />
    </main>
  );
}