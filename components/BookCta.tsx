"use client";

import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { services, faqs, site } from "@/lib/site";
import styles from "./BookCta.module.css";

type Status = "idle" | "loading" | "done";
type Errors = Partial<Record<"name" | "postcode" | "vehicle", string>>;

export default function BookCta() {
  const reduce = useReducedMotion();
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Errors>({});
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const next: Errors = {};
    if (!String(data.get("name") ?? "").trim()) next.name = "We’ll need a name for the booking.";
    const pc = String(data.get("postcode") ?? "").trim();
    if (!pc) next.postcode = "Add a postcode so we can confirm coverage.";
    else if (pc.length < 4) next.postcode = "That postcode looks too short.";
    if (!String(data.get("vehicle") ?? "").trim()) next.vehicle = "Which car are we detailing?";
    setErrors(next);
    if (Object.keys(next).length) return;

    setStatus("loading");
    // Front-end demo: simulate a request. Wire to your backend / booking API here.
    window.setTimeout(() => setStatus("done"), 1100);
  }

  return (
    <section id="book" className={`section ${styles.wrap}`} aria-labelledby="book-h">
      <div className={`shell ${styles.inner}`}>
        {/* left: reassurance + FAQ */}
        <div className={styles.left}>
          <p className="kicker">Book your slot</p>
          <h2 id="book-h" className={styles.h}>
            Pick a window. We’ll bring the&nbsp;<span className={styles.gleam}>shine</span>.
          </h2>
          <p className="lede">
            Tell us a little about your car and where it lives. We’ll confirm
            coverage and a time by text within the hour — no deposit to reserve.
          </p>

          <div className={styles.assure}>
            <Item>Fully insured &amp; self-contained</Item>
            <Item>Eco-conscious, low-water process</Item>
            <Item>Satisfaction re-do, no quibble</Item>
          </div>

          <div className={styles.faq}>
            {faqs.map((f, i) => {
              const open = openFaq === i;
              return (
                <div key={f.q} className={styles.faqItem}>
                  <button
                    className={styles.faqQ}
                    aria-expanded={open}
                    onClick={() => setOpenFaq(open ? null : i)}
                  >
                    <span>{f.q}</span>
                    <span className={styles.faqIcon} data-open={open} aria-hidden="true" />
                  </button>
                  <AnimatePresence initial={false}>
                    {open && (
                      <motion.div
                        className={styles.faqA}
                        initial={reduce ? undefined : { height: 0, opacity: 0 }}
                        animate={reduce ? undefined : { height: "auto", opacity: 1 }}
                        exit={reduce ? undefined : { height: 0, opacity: 0 }}
                        transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
                      >
                        <p>{f.a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>

        {/* right: the form */}
        <div className={styles.card}>
          <AnimatePresence mode="wait">
            {status === "done" ? (
              <motion.div
                key="done"
                className={styles.done}
                initial={reduce ? undefined : { opacity: 0, scale: 0.96 }}
                animate={reduce ? undefined : { opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              >
                <span className={styles.doneMark} aria-hidden="true">
                  <svg width="30" height="30" viewBox="0 0 24 24" fill="none">
                    <path
                      d="m5 13 4 4L19 7"
                      stroke="var(--brand-ink)"
                      strokeWidth="2.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <h3 className={styles.doneH}>Request in. Nice car.</h3>
                <p className={styles.doneP}>
                  We’ve got your details and we’ll text {site.phone} a confirmed
                  window within the hour. Keep an eye on your phone.
                </p>
                <button className="btn btn-ghost" onClick={() => setStatus("idle")}>
                  Book another car
                </button>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                className={styles.form}
                onSubmit={onSubmit}
                noValidate
                initial={reduce ? undefined : { opacity: 0 }}
                animate={reduce ? undefined : { opacity: 1 }}
                exit={reduce ? undefined : { opacity: 0 }}
              >
                <p className={styles.formLead}>Get a confirmed time</p>

                <Field label="Your name" error={errors.name} htmlFor="name">
                  <input id="name" name="name" className={styles.input} placeholder="Jordan Mercer"
                    aria-invalid={!!errors.name} autoComplete="name" />
                </Field>

                <div className={styles.row}>
                  <Field label="Vehicle" error={errors.vehicle} htmlFor="vehicle">
                    <input id="vehicle" name="vehicle" className={styles.input}
                      placeholder="2021 Audi Q5" aria-invalid={!!errors.vehicle} />
                  </Field>
                  <Field label="Postcode" error={errors.postcode} htmlFor="postcode">
                    <input id="postcode" name="postcode" className={styles.input}
                      placeholder="94110" aria-invalid={!!errors.postcode}
                      autoComplete="postal-code" inputMode="text" />
                  </Field>
                </div>

                <Field label="Service" htmlFor="service">
                  <div className={styles.selectWrap}>
                    <select id="service" name="service" className={styles.input} defaultValue="full">
                      {services.map((s) => (
                        <option key={s.id} value={s.id}>
                          {s.name} — from ${s.from}
                        </option>
                      ))}
                      <option value="fleet">Fleet / membership enquiry</option>
                    </select>
                    <span className={styles.caret} aria-hidden="true" />
                  </div>
                </Field>

                <button
                  type="submit"
                  className={`btn btn-primary ${styles.submit}`}
                  data-loading={status === "loading"}
                  disabled={status === "loading"}
                >
                  {status === "loading" ? (
                    <>
                      <span className={styles.spinner} aria-hidden="true" />
                      Sending…
                    </>
                  ) : (
                    <>Request my window</>
                  )}
                </button>
                <p className={styles.fine}>
                  No deposit · free to cancel · we never share your details.
                </p>
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  htmlFor,
  error,
  children,
}: {
  label: string;
  htmlFor: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className={styles.field} htmlFor={htmlFor}>
      <span className={styles.label}>{label}</span>
      {children}
      {error && (
        <span className={styles.error} role="alert">
          {error}
        </span>
      )}
    </label>
  );
}

function Item({ children }: { children: React.ReactNode }) {
  return (
    <span className={styles.assureItem}>
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="m5 13 4 4L19 7" stroke="var(--brand)" strokeWidth="2.4"
          strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      {children}
    </span>
  );
}
