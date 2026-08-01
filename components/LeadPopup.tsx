"use client";

import { useEffect, useState } from "react";
import { business } from "@/lib/routes";
import { SERVICE_OPTIONS } from "@/lib/lead-options";
import styles from "./LeadPopup.module.css";

const DISMISSED_KEY = "bolan-lead-popup-dismissed";
const SHOW_DELAY_MS = 9000;

export default function LeadPopup() {
  const [visible, setVisible] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem(DISMISSED_KEY)) return;
    const timer = setTimeout(() => setVisible(true), SHOW_DELAY_MS);
    return () => clearTimeout(timer);
  }, []);

  const dismiss = () => {
    setVisible(false);
    sessionStorage.setItem(DISMISSED_KEY, "1");
  };

  if (!visible) return null;

  return (
    <div className={styles.backdrop} onClick={dismiss}>
      <div className={styles.card} onClick={(e) => e.stopPropagation()}>
        <button type="button" onClick={dismiss} aria-label="Close" className={styles.closeBtn}>
          ✕
        </button>
        {submitted ? (
          <div className={styles.success}>
            <div className={styles.successIcon}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h2 className={styles.successTitle}>Got It!</h2>
            <p className={styles.successBody}>
              We&apos;ll call you back shortly. For anything urgent, call {business.phone} now.
            </p>
          </div>
        ) : (
          <>
            <div className={styles.eyebrow}>Free Quote</div>
            <h2 className={styles.title}>Get a Fast, Honest Quote</h2>
            <p className={styles.subtitle}>Leave your info and we&apos;ll call you back — usually same day.</p>
            <form
              className={styles.form}
              onSubmit={(e) => {
                e.preventDefault();
                setSubmitted(true);
                sessionStorage.setItem(DISMISSED_KEY, "1");
              }}
            >
              <input required type="text" placeholder="Full name" className={styles.field} />
              <input required type="tel" placeholder="Phone number" className={styles.field} />
              <select required defaultValue="" className={styles.field}>
                <option value="" disabled>
                  Service needed
                </option>
                {SERVICE_OPTIONS.map((s) => (
                  <option key={s}>{s}</option>
                ))}
              </select>
              <button type="submit" className={styles.submit}>
                Get My Quote
              </button>
            </form>
            <p className={styles.disclaimer}>No spam. We only call about your septic request.</p>
          </>
        )}
      </div>
    </div>
  );
}
