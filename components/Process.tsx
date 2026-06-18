import Image from "next/image";
import { steps } from "@/lib/site";
import { images } from "@/lib/images";
import Reveal from "./Reveal";
import styles from "./Process.module.css";

export default function Process() {
  return (
    <section id="how" className={`section ${styles.wrap}`} aria-labelledby="how-h">
      <div className={`shell ${styles.inner}`}>
        <div className={styles.left}>
          <Reveal>
            <h2 id="how-h" className={styles.h}>
              From booking to brilliant in three steps.
            </h2>
          </Reveal>
          <Reveal i={1}>
            <p className={styles.sub}>
              You don’t lift a finger — and you don’t lose a Saturday to the car
              wash queue.
            </p>
          </Reveal>
          <Reveal i={2} className={styles.media}>
            <div className={styles.frame}>
              <Image
                src={images.atWork.src}
                alt={images.atWork.alt}
                fill
                sizes="(max-width: 900px) 100vw, 42vw"
                className={styles.photo}
              />
            </div>
          </Reveal>
        </div>

        <ol className={styles.steps}>
          {steps.map((s, i) => (
            <Reveal as="li" i={i} key={s.n} className={styles.step}>
              <span className={styles.num}>{s.n}</span>
              <div>
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
