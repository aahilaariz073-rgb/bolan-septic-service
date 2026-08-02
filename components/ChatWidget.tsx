"use client";

import { useEffect, useRef, useState } from "react";
import { business } from "@/lib/routes";
import { SERVICE_OPTIONS } from "@/lib/lead-options";
import styles from "./ChatWidget.module.css";

type Stage = "form" | "done";
type Message = { from: "bot" | "user"; text: string };

const GREETING = "Hi! 👋 Fill in your info below and I'll pass it straight to Rick's team so they can call you back.";

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [stage, setStage] = useState<Stage>("form");
  const [messages, setMessages] = useState<Message[]>([]);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (open && messages.length === 0) {
      setMessages([{ from: "bot", text: GREETING }]);
    }
  }, [open, messages.length]);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, stage]);

  const submit = () => {
    if (!name.trim() || !phone.trim() || !service) return;
    setMessages((prev) => [
      ...prev,
      { from: "user", text: `${name} · ${phone} · ${service}` },
      {
        from: "bot",
        text: `Thanks, ${name}! Rick's team will call you at ${phone} about ${service.toLowerCase()}. Talk soon!`,
      },
    ]);
    setStage("done");
  };

  const restart = () => {
    setMessages([{ from: "bot", text: GREETING }]);
    setStage("form");
    setName("");
    setPhone("");
    setService("");
  };

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Close chat" : "Open chat"}
        aria-expanded={open}
        className={styles.launcher}
      >
        {open ? (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        ) : (
          <>
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path
                d="M4 12a8 8 0 1 1 3.2 6.4L4 20l1.2-3.6A7.96 7.96 0 0 1 4 12z"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinejoin="round"
              />
            </svg>
            <span className={styles.launcherBadge} />
          </>
        )}
      </button>

      {open && (
        <div className={styles.panel}>
          <div className={styles.header}>
            <div className={styles.headerAvatar}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path
                  d="M4 12a8 8 0 1 1 3.2 6.4L4 20l1.2-3.6A7.96 7.96 0 0 1 4 12z"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className={styles.headerText}>
              <div className={styles.headerTitle}>Bolan Septic</div>
              <div className={styles.headerStatus}>
                <span className={styles.statusDot} />
                Usually replies same day
              </div>
            </div>
            <button type="button" onClick={() => setOpen(false)} aria-label="Close chat" className={styles.headerClose}>
              ✕
            </button>
          </div>

          <div className={styles.messages} ref={scrollRef}>
            {messages.map((m, i) => (
              <div key={i} className={`${styles.bubbleRow} ${m.from === "bot" ? styles.bubbleRowBot : styles.bubbleRowUser}`}>
                <div className={`${styles.bubble} ${m.from === "bot" ? styles.bubbleBot : styles.bubbleUser}`}>{m.text}</div>
              </div>
            ))}

            {stage === "form" && (
              <form
                className={styles.leadForm}
                onSubmit={(e) => {
                  e.preventDefault();
                  submit();
                }}
              >
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your name"
                  className={styles.input}
                  required
                />
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Your phone number"
                  className={styles.input}
                  required
                />
                <select
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className={styles.input}
                  required
                >
                  <option value="" disabled>
                    Service needed
                  </option>
                  {SERVICE_OPTIONS.map((s) => (
                    <option key={s}>{s}</option>
                  ))}
                </select>
                <button type="submit" className={styles.leadFormSubmit}>
                  Send
                </button>
              </form>
            )}
          </div>

          {stage === "done" && (
            <div className={styles.doneRow}>
              <a href={business.phoneHref} className={styles.callBtn}>
                Call {business.phone} now
              </a>
              <button type="button" onClick={restart} className={styles.restartBtn}>
                Start over
              </button>
            </div>
          )}
        </div>
      )}
    </>
  );
}
