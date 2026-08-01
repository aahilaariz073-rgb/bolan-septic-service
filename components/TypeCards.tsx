import styles from "./TypeCards.module.css";

export default function TypeCards({
  items,
  compact = false,
}: {
  items: { title: string; desc: string }[];
  compact?: boolean;
}) {
  return (
    <div className={styles.grid}>
      {items.map((item) => (
        <div key={item.title} className={compact ? styles.cardCompact : styles.card}>
          <div className={compact ? styles.titleCompact : styles.title}>{item.title}</div>
          <p className={compact ? styles.descCompact : styles.desc}>{item.desc}</p>
        </div>
      ))}
    </div>
  );
}
