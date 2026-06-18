import { site, stats } from "@/lib/site";
import Reveal from "./Reveal";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero} aria-labelledby="hero-h">
      {/* ambient studio light */}
      <div className={styles.glow} aria-hidden="true" />
      <div className={styles.grid} aria-hidden="true" />

      <div className={`shell ${styles.inner}`}>
        <div className={styles.copy}>
          <Reveal i={0} as="p" className={`kicker ${styles.kick}`}>
            Mobile car detailing · {site.baseCity}
          </Reveal>

          <Reveal i={1} as="h1" className={styles.h1}>
            <span id="hero-h">
              We bring the
              <br />
              <span className={styles.gleam}>showroom</span>{" "}
              <em className={styles.em}>shine</em>
              <br />
              to your driveway.
            </span>
          </Reveal>

          <Reveal i={2} as="p" className={`lede ${styles.lede}`}>
            No queues, no lost Saturday. A self-contained detail bay rolls up to
            your home or office — water, power and pro hands included — and leaves
            your car looking the way you remember it.
          </Reveal>

          <Reveal i={3} className={styles.cta}>
            <a href="#book" className="btn btn-primary">
              Book a wash
              <Arrow />
            </a>
            <a href="#services" className="btn btn-ghost">
              See what we do
            </a>
          </Reveal>

          <Reveal i={4} as="dl" className={styles.stats}>
            {stats.map((s) => (
              <div key={s.label} className={styles.stat}>
                <dt className={styles.statVal}>
                  {s.value}
                  {"suffix" in s && s.suffix ? (
                    <span className={styles.statSuffix}>{s.suffix}</span>
                  ) : null}
                </dt>
                <dd className={styles.statLabel}>{s.label}</dd>
              </div>
            ))}
          </Reveal>
        </div>

        {/* The stage: a glossy panel catching a moving sheen (pure CSS) */}
        <div className={styles.stage} aria-hidden="true">
          <div className={styles.panel}>
            <div className={styles.reflection} />
            <div className={styles.sheen} />
            <div className={styles.horizon} />
            <div className={styles.beads}>
              {Array.from({ length: 7 }).map((_, i) => (
                <span key={i} style={{ ["--i" as string]: i }} />
              ))}
            </div>
          </div>
          <div className={styles.contact} />
          <span className={styles.badge}>
            <span className={styles.badgeDot} />
            Available this week
          </span>
        </div>
      </div>

      <a href="#services" className={styles.scroll} aria-label="Scroll to services">
        <span>Scroll</span>
        <span className={styles.scrollLine} />
      </a>
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
