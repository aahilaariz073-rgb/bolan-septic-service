import styles from "./PhotoPlaceholder.module.css";

export default function PhotoPlaceholder({ hint, className }: { hint: string; className?: string }) {
  return (
    <div className={`${styles.placeholder} ${className || ""}`}>
      <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true">
        <rect x="3" y="5" width="18" height="14" rx="1.5" />
        <circle cx="8.5" cy="10" r="1.5" />
        <path d="M21 16l-5.5-5.5L9 17" />
      </svg>
      <span className={styles.label}>Photo needed</span>
      <span className={styles.hint}>{hint}</span>
    </div>
  );
}
