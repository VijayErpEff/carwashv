"use client";

import { useEffect, useState } from "react";
import Logo from "./Logo";
import { site } from "@/lib/site";
import styles from "./Nav.module.css";

const links = [
  { href: "#services", label: "Services" },
  { href: "#how", label: "How it works" },
  { href: "#coverage", label: "Coverage" },
  { href: "#proof", label: "Reviews" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className={`${styles.nav} ${scrolled ? styles.solid : ""}`}>
      <div className={`shell ${styles.inner}`}>
        <a href="#main" className={styles.brand} aria-label="Onyx — home">
          <Logo />
        </a>

        <nav className={styles.links} aria-label="Primary">
          {links.map((l) => (
            <a key={l.href} href={l.href} className={styles.link}>
              {l.label}
            </a>
          ))}
        </nav>

        <div className={styles.actions}>
          <a href={site.phoneHref} className={styles.phone}>
            {site.phone}
          </a>
          <a href="#book" className="btn btn-primary">
            Book a wash
          </a>
        </div>

        <button
          className={styles.burger}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span data-open={open} />
          <span data-open={open} />
        </button>
      </div>

      {open && (
        <div className={styles.sheet} onClick={() => setOpen(false)}>
          <nav className={styles.sheetInner} aria-label="Mobile">
            {links.map((l) => (
              <a key={l.href} href={l.href} className={styles.sheetLink}>
                {l.label}
              </a>
            ))}
            <hr className="divider" />
            <a href={site.phoneHref} className={styles.sheetLink}>
              {site.phone}
            </a>
            <a href="#book" className="btn btn-primary" style={{ marginTop: "0.5rem" }}>
              Book a wash
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
