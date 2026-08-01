"use client";

import { useState } from "react";
import styles from "./FaqAccordion.module.css";

export default function FaqAccordion({ items }: { items: { question: string; answer: string }[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className={styles.list}>
      {items.map((item, i) => {
        const open = openIndex === i;
        return (
          <div key={item.question} className={styles.item}>
            <button
              type="button"
              onClick={() => setOpenIndex(open ? null : i)}
              aria-expanded={open}
              className={styles.question}
            >
              {item.question}
              <span className={`${styles.icon} ${open ? styles.iconOpen : ""}`}>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M8 1v14M1 8h14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                </svg>
              </span>
            </button>
            <div className={`${styles.answer} ${open ? styles.answerOpen : ""}`}>
              <p className={styles.answerInner}>{item.answer}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
