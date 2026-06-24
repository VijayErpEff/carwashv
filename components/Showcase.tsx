import Image from "next/image";
import { images } from "@/lib/images";
import Reveal from "./Reveal";
import styles from "./Showcase.module.css";

const points = [
  "Seats, carpets and mats extracted, not just vacuumed",
  "Leather cleaned, fed and protected against cracking",
  "Dashboard, vents and every seam steamed by hand",
  "Glass cleared inside so night driving stays sharp",
];

export default function Showcase() {
  return (
    <section className={`section ${styles.wrap}`} aria-labelledby="inside-h">
      <div className={`shell ${styles.inner}`}>
        <Reveal mode="wipe" className={styles.media}>
          <div className={styles.frame}>
            <Image
              src={images.interior.src}
              alt={images.interior.alt}
              fill
              sizes="(max-width: 900px) 100vw, 48vw"
              className={styles.photo}
            />
            <span className={styles.shine} aria-hidden="true" />
          </div>
        </Reveal>

        <div className={styles.body}>
          <Reveal>
            <h2 id="inside-h" className={styles.h}>
              It’s the inside that gives a car away.
            </h2>
          </Reveal>
          <Reveal i={1}>
            <p className="lede">
              Anyone can rinse a bonnet. The difference is in the footwells, the
              stitching and the air when you open the door. That’s where we spend
              the time.
            </p>
          </Reveal>
          <Reveal i={2} as="ul" className={styles.points}>
            {points.map((p) => (
              <li key={p}>
                <Check />
                {p}
              </li>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Check() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="m5 13 4 4L19 7" stroke="var(--brand)" strokeWidth="2.4"
        strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
