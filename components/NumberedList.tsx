import styles from "./NumberedList.module.css";

export default function NumberedList({ items }: { items: string[] }) {
  return (
    <div className={styles.list}>
      {items.map((item, i) => (
        <div key={item} className={styles.item}>
          <div className={styles.num}>{i + 1}</div>
          <div className={styles.text}>{item}</div>
        </div>
      ))}
    </div>
  );
}
