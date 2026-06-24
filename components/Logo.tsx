import styles from "./Logo.module.css";

type Props = { className?: string; height?: number };

/**
 * Terminal Car Wash · RM — a clean vector lockup drawn in the site's own
 * ink + electric-blue palette, so it sits natively on the light theme (no
 * bolted-on dark plate). Faithful to the brand: the water-jet emblem, the
 * TERMINAL wordmark with its dynamic slant, and the RM number-plate chip.
 * An electric glint sweeps the wordmark on load and on hover — it shines.
 */
export default function Logo({ className, height = 30 }: Props) {
  return (
    <span
      className={`${styles.lockup} ${className ?? ""}`}
      style={{ ["--h" as string]: `${height}px` }}
    >
      {/* decorative, stylised lockup — named for AT by the sr-only text below */}
      <span className={styles.words} aria-hidden="true">
        <Emblem />
        <span className={styles.text}>
          <span className={styles.wordmark}>Terminal</span>
          <span className={styles.sub}>
            <span className={styles.carwash}>Car&nbsp;Wash</span>
            <span className={styles.rm}>RM</span>
          </span>
        </span>
      </span>
      <span className={styles.srOnly}>Terminal Car Wash RM</span>
    </span>
  );
}

function Emblem() {
  return (
    <svg
      className={styles.emblem}
      viewBox="0 0 32 34"
      fill="none"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="tcw-drop" x1="16" y1="5" x2="16" y2="30" gradientUnits="userSpaceOnUse">
          <stop stopColor="var(--brand-bright)" />
          <stop offset="1" stopColor="var(--brand-deep)" />
        </linearGradient>
      </defs>
      {/* spray trail — droplets fanning in, like a pressure wash */}
      <circle cx="4" cy="14" r="1.5" fill="var(--brand)" opacity="0.45" />
      <circle cx="7" cy="10" r="1.9" fill="var(--brand)" opacity="0.65" />
      <circle cx="10.5" cy="7" r="1.3" fill="var(--brand)" opacity="0.5" />
      {/* the jet droplet */}
      <path
        d="M16 5c4 5.4 6.6 9.2 6.6 12.4A6.6 6.6 0 1 1 9.4 17.4C9.4 14.2 12 10.4 16 5Z"
        fill="url(#tcw-drop)"
      />
      {/* specular highlight */}
      <path
        d="M13.4 18.2c0-2 0.9-3.9 2.2-5.6"
        stroke="oklch(0.99 0.01 240)"
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.9"
      />
    </svg>
  );
}
