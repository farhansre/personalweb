import Link from "next/link";
import styles from "./page.module.css";

export default function hear() {
  return (
    <main className={styles.page}>
      <div className={styles.wrapper}>
        <Link href="/" className={styles.back}>
          ← Home
        </Link>

        <h1>Hear</h1>

        <div className={styles.grid}>
          <section className={styles.card}>
            <h2>My Music</h2>

            <p>
              Currently reworking and finding some homes for my songs. Below is
              an open mic I played with two acoustic demos of mine: "Tube Song"
              and "Smock".
            </p>

            <div className={styles.videoEmbed}>
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/IAa1gF51WQc?si=z6iIqGwdJrY3GCg7&start=3125"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>

            <p>
              I also made an EP a couple of years back under "Referral Knit
              Delivery". It could be your thing if you are into what i dub 'Focusrite
              Spoken Word'.
            </p>

            <div className={styles.spotifyEmbed}>
              <iframe
                style={{ borderRadius: "12px" }}
                src="https://open.spotify.com/embed/album/4cP4qLIqiroGVYnJbzn2FZ?utm_source=generator&theme=0&si=2325ac222e6d401d"
                width="100%"
                height="352"
                frameBorder="0"
                allowFullScreen
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
                title="Referral Knit Delivery EP on Spotify"
              />
            </div>
          </section>

          <section className={styles.card}>
            <h2>Audio Work</h2>

            <p>
              I was the audio engineer for WZBC 90.3 Newton, where I specialized
              in mixing over 10 live performances, some on radio and some in
              concert, including this live album.
            </p>

            <div className={styles.spotifyEmbed}>
              <iframe
                style={{ borderRadius: "12px" }}
                src="https://open.spotify.com/embed/album/7yU8Zs7OUK2C246bqNPbHM?utm_source=generator&theme=0&si=cd085c02423b4ce0"
                width="100%"
                height="352"
                frameBorder="0"
                allowFullScreen
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
                title="Live album on Spotify"
              />
            </div>
            <p>
              I also opened for Passion Pit (Solo) as well as 
              Surprise Chef at Brighton Music Hall with DJ sets as an intern at Fenway Recordings. 
              Thanks Mark Kates and Sophie Wilde for the opportunity!
            </p>

            <p className={styles.workNote}>
              Always looking for work!**
            </p>
          </section>

          <section className={styles.card}>
            <h2>yourdovehands</h2>

            <p>
              I am also in a band called your dove hands. It's with my best buddies and I love them very much.
            </p>

            <a
              href="https://yourdovehands.com"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.button}
            >
              we are here
            </a>
          </section>
        </div>
      </div>

      <div className={styles.contact}>
        to work, play, or inquire contact:{" "}
        <a href="mailto:farhansreejansandbox@gmail.com">
          farhansreejansandbox@gmail.com
        </a>
      </div>
    </main>
  );
}