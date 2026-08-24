import Link from "next/link";
import styles from "./page.module.css";

export default function DoingDid() {
  return (
    <main className={styles.page}>
      <div className={styles.wrapper}>
        <Link href="/" className={styles.back}>
          ← Home
        </Link>

        <h1>Doing / Did</h1>

        <div className={styles.list}>
          <section className={styles.card}>
            <h2>Irish Automatic Speech Recognition</h2>

            <p>
              I recently was awarded an Advanced Study Grant as well as a grant
              through the Winston Center for Leadership and Ethics to study
              Irish Automatic Speech Recognition models, both through a
              technical and sociological lens.
            </p>

            <p>
              This allowed me to interview Gaeilgeoirí all across the Gaeltacht
              regions in Ireland.
            </p>

            <p className={styles.note}>
              Stay tuned for a writeup!
            </p>
          </section>

          <section className={styles.card}>
            <h2>Data Within Reach</h2>

            <p>
              I am also currently a research assistant at the{" "}
              <a
                href="https://dwr.bc.edu/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Data Within Reach group ↗
              </a>
              , where I'm building Python data collection and analysis
              pipelines to gain insights on AI-assisted scholarship, with the
              hope of developing visualization prototypes that inform study
              design and research hypotheses.
            </p>
          </section>

          <section className={styles.card}>
            <h2>Gateway Initiative</h2>

            <p>
              I am a data researcher in Boston College's School of Social Work
              through the Gateway Initiative.
            </p>

            <p>
              Currently I'm building documentation and automation for public
              safety data analytics for proactive community interventions for
              the city of Lawrence, MA.
            </p>

            <div className={styles.links}>
              <a
                href="https://issuu.com/bcssw/docs/the_gateway_initiative_mobilizing_community_chang?fr=xKAE9_-_v7w"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.button}
              >
                Read about the initiative ↗
              </a>

              <a
                href="https://gatewayinitiative-lawrencepd.onrender.com/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.button}
              >
                View visualizations ↗
              </a>
            </div>
          </section>

          <section className={styles.card}>
            <h2>McMullen Museum of Art</h2>

            <p>
              I'm the co-chair of the marketing committee at the McMullen
              Museum of Art, where I spearheaded the Work of the Week campaign
              for:
            </p>

            <ul className={styles.projectList}>
              <li>
                <a
                  href="https://mcmullenmuseum.bc.edu/collaborating-in-conflict-the-yeats-family-and-the-public-arts/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Collaborating in Conflict: The Yeats Family and the Public
                  Arts ↗
                </a>
              </li>

              <li>
                <a
                  href="https://mcmullenmuseum.bc.edu/wonders/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Wonders of Creation: Art, Science, and Innovation in the
                  Islamic World  ↗
                </a>
              </li>

              <li>
                <a
                  href="https://mcmullenmuseum.bc.edu/states/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  States of Becoming ↗
                </a>
              </li>

              <li>
                <a
                  href="https://mcmullenmuseum.bc.edu/shadows-and-light/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Shadows and Light: Symbolist Art in Belgium; Works from the
                  Hearn Family Trust (upcoming!! Come to the museum and check it out!) ↗
                </a>
              </li>
            </ul>
          </section>

          <section className={styles.card}>
            <h2>Research Presentations</h2>

            <p>
              I also recently presented at the ACC Meeting of the Minds
              Conference, as well as the UCLA McNair Scholars Conference, on
              my research on Formosan Automatic Speech Recognition, which was
              advised by Dr. Emily Prud'hommeaux.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}