import { testimonials } from "@/lib/site";
import Reveal from "./Reveal";
import styles from "./Testimonials.module.css";

export default function Testimonials() {
  return (
    <section id="proof" className={`section ${styles.wrap}`} aria-labelledby="proof-h">
      <div className="shell">
        <div className={styles.head}>
          <Reveal>
            <h2 id="proof-h" className={styles.h}>
              Cars our neighbours trusted us with.
            </h2>
          </Reveal>
          <Reveal i={1} className={styles.rating}>
            <span className={styles.stars} aria-hidden="true">
              ★★★★★
            </span>
            <span className={styles.ratingText}>
              4.9 / 5 · <span className={styles.muted}>312 Google reviews</span>
            </span>
          </Reveal>
        </div>

        <ul className={styles.grid}>
          {testimonials.map((t, i) => (
            <Reveal as="li" i={i} key={t.name} className={styles.card}>
              <blockquote className={styles.quote}>“{t.quote}”</blockquote>
              <footer className={styles.foot}>
                <span className={styles.avatar} aria-hidden="true">
                  {t.name.charAt(0)}
                </span>
                <span>
                  <span className={styles.name}>{t.name}</span>
                  <span className={styles.meta}>{t.meta}</span>
                </span>
              </footer>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
