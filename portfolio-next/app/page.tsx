import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.home}>
      <div className={styles.map}>
        <svg
          className={styles.connections}
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          {/* center -> outer nodes */}
          <line x1="50" y1="50" x2="20" y2="20" />
          <line x1="50" y1="50" x2="82" y2="22" />
          <line x1="50" y1="50" x2="18" y2="80" />
          <line x1="50" y1="50" x2="80" y2="83" />
          <line x1="50" y1="50" x2="50" y2="12" />

          {/* outer nodes connected to each other */}
          <line x1="20" y1="20" x2="50" y2="12" />
          <line x1="50" y1="12" x2="82" y2="22" />
          <line x1="82" y1="22" x2="80" y2="83" />
          <line x1="80" y1="83" x2="18" y2="80" />
          <line x1="18" y1="80" x2="20" y2="20" />
        </svg>

        <div className={`${styles.node} ${styles.nameNode}`}>
          <h1>Farhan Sreejan</h1>
          <p></p>
        </div>

        <Link href="/about" className={`${styles.node} ${styles.about}`}>
          About
        </Link>

        <Link href="/Doing/Did" className={`${styles.node} ${styles.works}`}>
          Doing/Did
        </Link>

        <Link href="/hear" className={`${styles.node} ${styles.music}`}>
          Hear
        </Link>

        <Link
          href="/Experience/Academic"
          className={`${styles.node} ${styles.experience}`}
        >
          Experience/Academic
        </Link>

        <Link
          href="/imiri"
          className={`${styles.node} ${styles.ireland}`}
        >
          Imirí
        </Link>
      </div>
    <div className={styles.socials}>
  <a
    href="https://x.com/functap"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="X"
  >
    𝕏
  </a>

  <a
    href="https://www.instagram.com/farhansreejan/"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Instagram"
  >
    ◎
  </a>
  <a
    href="https://farhansreejan.bandcamp.com/"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Bandcamp"
  >
    ♫
  </a>
</div>
<div className={styles.contact}>
  contact:{" "}
  <a href="mailto:farhansreejansandbox@gmail.com">
    farhansreejansandbox@gmail.com
  </a>
</div>
    </main>
  );
}