import { services } from "@/lib/site";
import Reveal from "./Reveal";
import styles from "./Services.module.css";

export default function Services() {
  return (
    <section id="services" className={`section ${styles.wrap}`} aria-labelledby="services-h">
      <div className="shell">
        <div className={styles.head}>
          <Reveal>
            <h2 id="services-h" className={styles.h}>
              Three ways to get your car back to its best.
            </h2>
          </Reveal>
          <Reveal i={1}>
            <p className="lede">
              Every job is done by hand on your drive. Pick the depth you need —
              from a sharp fortnightly wash to multi-year ceramic protection.
            </p>
          </Reveal>
        </div>

        <ul className={styles.grid}>
          {services.map((s, idx) => (
            <Reveal
              as="li"
              i={idx}
              key={s.id}
              className={`${styles.card} ${s.featured ? styles.featured : ""}`}
            >
              {s.featured && <span className={styles.most}>Most booked</span>}

              <h3 className={styles.name}>{s.name}</h3>
              <p className={styles.blurb}>{s.blurb}</p>

              <ul className={styles.feats}>
                {s.features.map((f) => (
                  <li key={f}>
                    <Check />
                    {f}
                  </li>
                ))}
              </ul>

              <div className={styles.cardFoot}>
                <div className={styles.price}>
                  <span className={styles.from}>from</span>
                  <span className={styles.amount}>£{s.from}</span>
                  <span className={styles.dur}>· {s.duration}</span>
                </div>
                <a href="#book" className={s.featured ? "btn btn-primary" : "btn btn-ghost"}>
                  Book this
                </a>
              </div>
            </Reveal>
          ))}
        </ul>

        <Reveal i={1}>
          <div className={styles.fleet}>
            <div>
              <h3 className={styles.fleetH}>Running a fleet, or want it on repeat?</h3>
              <p className={styles.fleetP}>
                Memberships and business fleet accounts get standing slots, a
                recurring rate and one tidy monthly invoice.
              </p>
            </div>
            <a href="#book" className="btn btn-ghost">
              Talk fleet &amp; memberships
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Check() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="m5 13 4 4L19 7"
        stroke="var(--brand)"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
