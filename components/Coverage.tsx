import { coverage, site } from "@/lib/site";
import Reveal from "./Reveal";
import styles from "./Coverage.module.css";

export default function Coverage() {
  return (
    <section id="coverage" className={`section ${styles.wrap}`} aria-labelledby="cov-h">
      <div className={`shell ${styles.inner}`}>
        <Reveal className={styles.left}>
          <p className="kicker">Where we roll</p>
          <h2 id="cov-h" className={styles.h}>
            On the road across {site.baseCity}.
          </h2>
          <p className="lede">
            If you’re inside our service ring we’ll come to you — home, office,
            or the kerb outside your favourite cafe. Not sure if you’re covered?
            Drop your postcode in the booking form and we’ll confirm on the spot.
          </p>

          <ul className={styles.places}>
            {coverage.map((c) => (
              <li key={c} className={styles.place}>
                <Pin />
                {c}
              </li>
            ))}
          </ul>

          <p className={styles.note}>
            Outside the ring? We run weekend trips further out for full details
            and ceramic work — <a href="#book" className={styles.inlineLink}>ask us</a>.
          </p>
        </Reveal>

        <Reveal i={1} className={styles.right}>
          <div className={styles.radar} aria-hidden="true">
            <span className={styles.ring} style={{ ["--d" as string]: "1" }} />
            <span className={styles.ring} style={{ ["--d" as string]: "2" }} />
            <span className={styles.ring} style={{ ["--d" as string]: "3" }} />
            <span className={styles.sweep} />
            <span className={styles.core} />
            {[
              { top: "26%", left: "62%" },
              { top: "40%", left: "30%" },
              { top: "60%", left: "70%" },
              { top: "70%", left: "42%" },
              { top: "33%", left: "44%" },
            ].map((p, i) => (
              <span
                key={i}
                className={styles.blip}
                style={{ top: p.top, left: p.left, ["--i" as string]: i }}
              />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Pin() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 21s7-5.6 7-11a7 7 0 1 0-14 0c0 5.4 7 11 7 11Z"
        stroke="var(--brand)"
        strokeWidth="1.8"
      />
      <circle cx="12" cy="10" r="2.4" fill="var(--brand)" />
    </svg>
  );
}
