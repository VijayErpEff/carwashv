import styles from "./Logo.module.css";

type Props = { className?: string; height?: number };

/**
 * The original Terminal Car Wash RM logo, colours redone for the light theme —
 * the chrome/text/car shifted to a dark gunmetal (gloss & bevels preserved) and
 * the spray kept electric blue, with the black background knocked out. Same
 * artwork, just recoloured so it reads on white. A masked sheen makes it glint.
 */
export default function Logo({ className, height = 48 }: Props) {
  return (
    <span
      className={`${styles.lockup} ${className ?? ""}`}
      style={{ ["--h" as string]: `${height}px` }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        className={styles.img}
        src="/logo-light.png"
        alt=""
        aria-hidden="true"
        draggable={false}
      />
      <span className={styles.sheen} aria-hidden="true" />
      <span className={styles.srOnly}>Terminal Car Wash RM</span>
    </span>
  );
}
