"use client";

import { useState } from "react";
import { business } from "@/lib/routes";
import styles from "./RequestServiceForm.module.css";

const SERVICES_NEEDED = [
  "Septic Pumping",
  "Septic Inspection (Real Estate/OSS)",
  "Repair / Drain Field",
  "New Installation",
  "Emergency — System Backed Up",
  "Not Sure",
];

const URGENCY = ["Emergency — need help today", "This week", "Just planning ahead"];

export default function RequestServiceForm() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div id="request-form" className={styles.card}>
      {submitted ? (
        <div className={styles.success}>
          <h2 className={styles.successTitle}>Request Received</h2>
          <p className={styles.successBody}>
            Thanks — Ricky&apos;s team will call you back shortly. For anything urgent, call{" "}
            <a href={business.phoneHref} className={styles.successPhone}>
              {business.phone}
            </a>{" "}
            now.
          </p>
        </div>
      ) : (
        <>
          <h2 className={styles.title}>Request Service</h2>
          <p className={styles.subtitle}>We&apos;ll call you back to confirm a time — usually same day.</p>
          <form
            className={styles.form}
            onSubmit={(e) => {
              e.preventDefault();
              setSubmitted(true);
            }}
          >
            <input required type="text" placeholder="Full name" className={styles.field} />
            <input required type="tel" placeholder="Phone number" className={styles.field} />
            <input required type="text" placeholder="Service address" className={styles.field} />
            <select required defaultValue="" className={styles.field}>
              <option value="" disabled>
                Service needed
              </option>
              {SERVICES_NEEDED.map((s) => (
                <option key={s}>{s}</option>
              ))}
            </select>
            <select required defaultValue="" className={styles.field}>
              <option value="" disabled>
                How urgent is this?
              </option>
              {URGENCY.map((u) => (
                <option key={u}>{u}</option>
              ))}
            </select>
            <button type="submit" className={styles.submit}>
              Send Request
            </button>
          </form>
        </>
      )}
    </div>
  );
}
