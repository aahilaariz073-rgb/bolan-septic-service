import styles from "./Checklist.module.css";

export default function Checklist({ items }: { items: string[] }) {
  return (
    <div className={styles.grid}>
      {items.map((item) => (
        <div key={item} className={styles.item}>
          <span className={styles.dot} />
          <span className={styles.text}>{item}</span>
        </div>
      ))}
    </div>
  );
}
