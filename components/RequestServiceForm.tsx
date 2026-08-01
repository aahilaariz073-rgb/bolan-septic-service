"use client";

import { useState } from "react";
import { business } from "@/lib/routes";
import { SERVICE_OPTIONS, URGENCY_OPTIONS } from "@/lib/lead-options";
import styles from "./RequestServiceForm.module.css";

export default function RequestServiceForm() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className={styles.card}>
      {submitted ? (
        <div className={styles.success}>
          <h2 className={styles.successTitle}>Request Received</h2>
          <p className={styles.successBody}>
            Thanks — we&apos;ll call you back shortly. For anything urgent, call{" "}
            <a href={business.phoneHref} className={styles.successPhone}>
              {business.phone}
            </a>{" "}
            now.
          </p>
        </div>
      ) : (
        <>
          <h2 className={styles.title}>Tell Us What You Need</h2>
          <form
            className={styles.form}
            onSubmit={(e) => {
              e.preventDefault();
              setSubmitted(true);
            }}
          >
            <label className={styles.label}>
              Full name
              <input required type="text" className={styles.field} />
            </label>
            <label className={styles.label}>
              Phone number
              <input required type="tel" className={styles.field} />
            </label>
            <label className={styles.label}>
              Service address
              <input required type="text" className={styles.field} />
            </label>
            <label className={styles.label}>
              Service needed
              <select required defaultValue="" className={styles.field}>
                <option value="" disabled>
                  Select a service
                </option>
                {SERVICE_OPTIONS.map((s) => (
                  <option key={s}>{s}</option>
                ))}
              </select>
            </label>
            <label className={styles.label}>
              Urgency
              <select required defaultValue="" className={styles.field}>
                <option value="" disabled>
                  How urgent is this?
                </option>
                {URGENCY_OPTIONS.map((u) => (
                  <option key={u}>{u}</option>
                ))}
              </select>
            </label>
            <button type="submit" className={styles.submit}>
              Send Request
            </button>
          </form>
        </>
      )}
    </div>
  );
}
