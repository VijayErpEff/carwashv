"use client";

import { motion, useScroll, useSpring, useReducedMotion } from "framer-motion";
import styles from "./ScrollProgress.module.css";

/**
 * A thin wash-progress line that fills as you scroll the page — a soapy blue
 * sweep with a bright leading edge. Suppressed under reduced motion.
 */
export default function ScrollProgress() {
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 130,
    damping: 28,
    mass: 0.3,
  });

  if (reduce) return null;

  return <motion.div className={styles.bar} style={{ scaleX }} aria-hidden="true" />;
}
