import styles from "./StepsList.module.css";

export default function StepsList({ steps }: { steps: { title: string; desc: string }[] }) {
  return (
    <div className={styles.list}>
      {steps.map((step, i) => (
        <div key={step.title} className={styles.step}>
          <div className={styles.num}>{i + 1}</div>
          <div>
            <div className={styles.title}>{step.title}</div>
            <div className={styles.desc}>{step.desc}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
