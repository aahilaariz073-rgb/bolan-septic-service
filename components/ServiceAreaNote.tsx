import Link from "next/link";
import { routes } from "@/lib/routes";
import styles from "./ServiceAreaNote.module.css";

export default function ServiceAreaNote({ title, body }: { title: string; body: string }) {
  return (
    <div className={styles.box}>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.body}>
        {body}{" "}
        <Link href={routes.serviceAreas} className={styles.link}>
          See our full service area
        </Link>
      </p>
    </div>
  );
}
