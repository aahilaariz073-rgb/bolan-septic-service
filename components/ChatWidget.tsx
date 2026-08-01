"use client";

import { useEffect, useRef, useState } from "react";
import { business } from "@/lib/routes";
import { SERVICE_OPTIONS } from "@/lib/lead-options";
import styles from "./ChatWidget.module.css";

type Step = "name" | "phone" | "service" | "done";
type Message = { from: "bot" | "user"; text: string };

const GREETING =
  "Hi! 👋 I can pass your info straight to Rick's team so they can call you back. What's your name?";

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState<Step>("name");
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (open && messages.length === 0) {
      setMessages([{ from: "bot", text: GREETING }]);
    }
  }, [open, messages.length]);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages]);

  const addMessages = (...msgs: Message[]) => setMessages((prev) => [...prev, ...msgs]);

  const submitText = () => {
    const value = inputValue.trim();
    if (!value) return;
    setInputValue("");

    if (step === "name") {
      setName(value);
      addMessages(
        { from: "user", text: value },
        { from: "bot", text: `Thanks, ${value}! What's the best phone number to reach you?` }
      );
      setStep("phone");
    } else if (step === "phone") {
      setPhone(value);
      addMessages(
        { from: "user", text: value },
        { from: "bot", text: "Got it. And what service are you looking for?" }
      );
      setStep("service");
    }
  };

  const chooseService = (service: string) => {
    addMessages(
      { from: "user", text: service },
      {
        from: "bot",
        text: `Perfect — Rick's team will call ${name || "you"} at ${phone} about ${service.toLowerCase()}. Talk soon!`,
      }
    );
    setStep("done");
  };

  const restart = () => {
    setMessages([{ from: "bot", text: GREETING }]);
    setStep("name");
    setInputValue("");
    setName("");
    setPhone("");
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
          </div>

          {step === "service" && (
            <div className={styles.quickReplies}>
              {SERVICE_OPTIONS.map((s) => (
                <button key={s} type="button" onClick={() => chooseService(s)} className={styles.quickReplyBtn}>
                  {s}
                </button>
              ))}
            </div>
          )}

          {(step === "name" || step === "phone") && (
            <form
              className={styles.inputRow}
              onSubmit={(e) => {
                e.preventDefault();
                submitText();
              }}
            >
              <input
                type={step === "phone" ? "tel" : "text"}
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder={step === "name" ? "Your name" : "Your phone number"}
                className={styles.input}
                autoFocus
              />
              <button type="submit" disabled={!inputValue.trim()} aria-label="Send" className={styles.sendBtn}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M4 12h16M13 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </form>
          )}

          {step === "done" && (
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
