import styles from "./Logo.module.css";

type Props = { className?: string; height?: number };

/**
 * Terminal Car Wash RM — a fresh, premium redraw that keeps the main aspects:
 * a sleek sports car, the pressure-wash jet + spray + foam, and the TERMINAL
 * CAR WASH RM lockup. Drawn in the site's ink + electric-blue so it's native
 * to the light theme. The wordmark glints on load/hover.
 */
export default function Logo({ className, height = 34 }: Props) {
  return (
    <span
      className={`${styles.lockup} ${className ?? ""}`}
      style={{ ["--h" as string]: `${height}px` }}
    >
      <Emblem />
      <span className={styles.words} aria-hidden="true">
        <span className={styles.wordmark}>Terminal</span>
        <span className={styles.sub}>
          <span className={styles.carwash}>Car&nbsp;Wash</span>
          <span className={styles.rm}>RM</span>
        </span>
      </span>
      <span className={styles.srOnly}>Terminal Car Wash RM</span>
    </span>
  );
}

function Emblem() {
  return (
    <svg className={styles.emblem} viewBox="0 0 156 96" fill="none" aria-hidden="true">
      <defs>
        <linearGradient id="tcw-car" x1="0" y1="30" x2="0" y2="74" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#2c3550" />
          <stop offset="0.55" stopColor="#1c2336" />
          <stop offset="1" stopColor="#121826" />
        </linearGradient>
        <linearGradient id="tcw-glass" x1="0" y1="36" x2="0" y2="50" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#bfe0ff" />
          <stop offset="1" stopColor="#6fa8e6" />
        </linearGradient>
        <linearGradient id="tcw-jet" x1="126" y1="16" x2="74" y2="50" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#9bd4ff" />
          <stop offset="1" stopColor="#1f74ff" />
        </linearGradient>
        <radialGradient id="tcw-cone" cx="0.85" cy="0.2" r="0.9">
          <stop offset="0" stopColor="#5cb4ff" stopOpacity="0.5" />
          <stop offset="1" stopColor="#5cb4ff" stopOpacity="0" />
        </radialGradient>
      </defs>

      <ellipse cx="78" cy="78" rx="66" ry="5" fill="#1c2336" opacity="0.12" />

      <path
        d="M 10 71 C 9 63 14 59 23 58 C 39 57 53 55 61 50 L 71 42 C 75 38 81 37 91 37 L 105 38 C 111 39 115 43 120 48 C 125 53 132 55 141 57 C 146 58 148 64 146 71 L 121 71 A 12.5 12.5 0 0 0 96 71 L 49 71 A 12.5 12.5 0 0 0 24 71 Z"
        fill="url(#tcw-car)"
      />

      <path
        d="M 72 44 L 77 39 C 80 37 85 37 92 37 L 103 38 C 107 41 110 44 112 48 Z"
        fill="url(#tcw-glass)"
        opacity="0.92"
      />
      <path d="M 90 37 L 91 48" stroke="#1c2336" strokeWidth="1.6" opacity="0.5" />

      <path
        d="M 24 57 C 40 55 54 53 62 48 L 72 40 C 76 37 82 36 91 36"
        fill="none"
        stroke="#9fb4d4"
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.55"
      />
      <path d="M 30 64 C 60 62 96 62 132 64" fill="none" stroke="#0e1320" strokeWidth="1.4" opacity="0.5" />

      <circle cx="37" cy="71" r="12.5" fill="#0e1320" />
      <circle cx="37" cy="71" r="6.6" fill="none" stroke="#2f8cff" strokeWidth="2.6" />
      <circle cx="37" cy="71" r="1.9" fill="#bfe0ff" />
      <circle cx="108" cy="71" r="12.5" fill="#0e1320" />
      <circle cx="108" cy="71" r="6.6" fill="none" stroke="#2f8cff" strokeWidth="2.6" />
      <circle cx="108" cy="71" r="1.9" fill="#bfe0ff" />

      {/* pressure wash */}
      <path d="M 128 18 L 70 40 L 92 52 Z" fill="url(#tcw-cone)" />
      <g transform="rotate(-30 132 17)">
        <rect x="128" y="14.5" width="9" height="6" rx="2" fill="#6b7689" />
      </g>
      <circle cx="128" cy="19" r="2.2" fill="#aeb8c8" />
      <g fill="none" stroke="url(#tcw-jet)" strokeLinecap="round">
        <path d="M 126 20 C 108 30 94 36 80 41" strokeWidth="2.6" />
        <path d="M 126 20 C 110 34 98 42 86 48" strokeWidth="2" />
      </g>
      <g fill="#2f8cff">
        <circle cx="96" cy="34" r="1.7" />
        <circle cx="104" cy="41" r="1.3" />
        <circle cx="85" cy="45" r="1.5" />
        <circle cx="112" cy="31" r="1.2" />
        <circle cx="78" cy="38" r="1.2" fill="#7cc4ff" />
        <circle cx="99" cy="49" r="1.4" fill="#7cc4ff" />
      </g>
      <g fill="#cfe6ff">
        <circle cx="60" cy="70" r="3.1" />
        <circle cx="66" cy="72" r="2.2" />
        <circle cx="53" cy="72" r="2.5" />
        <circle cx="71" cy="71" r="2" />
      </g>
    </svg>
  );
}
