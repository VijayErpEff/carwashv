import { steps } from "@/lib/site";
import Reveal from "./Reveal";
import styles from "./Process.module.css";

export default function Process() {
  return (
    <section id="how" className={`section ${styles.wrap}`} aria-labelledby="how-h">
      <div className="shell">
        <div className={styles.head}>
          <Reveal>
            <p className="kicker">How it works</p>
          </Reveal>
          <Reveal i={1}>
            <h2 id="how-h" className={styles.h}>
              From booking to brilliant in three moves —{" "}
              <span className={styles.dim}>and you don’t lift a finger.</span>
            </h2>
          </Reveal>
        </div>

        <ol className={styles.steps}>
          {steps.map((s, i) => (
            <Reveal as="li" i={i} key={s.n} className={styles.step}>
              <div className={styles.rail} aria-hidden="true">
                <span className={styles.num}>{s.n}</span>
                <span className={styles.line} />
              </div>
              <div className={styles.body}>
                <h3 className={styles.stepH}>{s.title}</h3>
                <p className={styles.stepP}>{s.body}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
