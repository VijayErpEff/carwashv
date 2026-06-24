import styles from "./Logo.module.css";

type Props = { className?: string; height?: number };

/**
 * Terminal Car Wash RM logo. The crest is authored for dark, so on the light
 * theme it sits on a dark brushed-metal plate (on-brand: a metal tag), with a
 * specular sheen that sweeps on load and on hover — so it actually shines.
 */
export default function Logo({ className, height = 44 }: Props) {
  return (
    <span
      className={`${styles.badge} ${className ?? ""}`}
      style={{ ["--h" as string]: `${height}px` }}
      aria-label="Terminal Car Wash RM"
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img className={styles.img} src="/logo.png" alt="Terminal Car Wash RM" draggable={false} />
      <span className={styles.sheen} aria-hidden="true" />
    </span>
  );
}
