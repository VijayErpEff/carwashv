import Image from "next/image";
import { images } from "@/lib/images";
import Reveal from "./Reveal";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero} aria-labelledby="hero-h">
      <div className={`shell ${styles.inner}`}>
        <div className={styles.copy}>
          <Reveal i={1} as="h1" className={styles.h1}>
            <span id="hero-h">
              Your car, handed back
              <br />
              <em className={`chrome ${styles.gleam}`}>immaculate</em>.
            </span>
          </Reveal>

          <Reveal i={2} as="p" className={`lede ${styles.lede}`}>
            We bring a fully-equipped detailing bay to your driveway across West
            London and the Heathrow terminals — our own water, power and
            professional kit, and a finish that turns heads on the school run.
          </Reveal>

          <Reveal i={3} className={styles.cta}>
            <a href="#book" className="btn btn-primary">
              Book a detail
              <Arrow />
            </a>
            <a href="#services" className="btn btn-ghost">
              View packages &amp; prices
            </a>
          </Reveal>

          <Reveal i={4} className={styles.specs}>
            <span className={styles.spec}>
              <Star /> <strong>4.9</strong> on Google
            </span>
            <span className={styles.line} aria-hidden="true" />
            <span className={styles.spec}>9H ceramic protection</span>
            <span className={styles.line} aria-hidden="true" />
            <span className={styles.spec}>Fully insured &amp; DBS-checked</span>
          </Reveal>
        </div>

        <Reveal i={2} mode="wipe" className={styles.media}>
          <div className={styles.frame}>
            <Image
              src={images.heroCar.src}
              alt={images.heroCar.alt}
              fill
              priority
              sizes="(max-width: 980px) 100vw, 52vw"
              className={styles.photo}
            />
            <span className={styles.shine} aria-hidden="true" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Arrow() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M5 12h14m0 0-5.5-5.5M19 12l-5.5 5.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function Star() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="var(--brand)" aria-hidden="true">
      <path d="M12 2.5l2.9 5.9 6.5.95-4.7 4.6 1.1 6.45L12 17.9l-5.8 3.05 1.1-6.45-4.7-4.6 6.5-.95z" />
    </svg>
  );
}
