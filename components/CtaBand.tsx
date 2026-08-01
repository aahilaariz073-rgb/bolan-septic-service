import Link from "next/link";
import { business, routes } from "@/lib/routes";
import styles from "./CtaBand.module.css";

export default function CtaBand({
  heading,
  body,
  phoneOnly = false,
  deep = false,
}: {
  heading: string;
  body?: string;
  phoneOnly?: boolean;
  deep?: boolean;
}) {
  return (
    <section className={deep ? styles.bandDeep : styles.band}>
      <h2 className={styles.heading}>{heading}</h2>
      {body && <p className={styles.body}>{body}</p>}
      <div className={styles.ctas}>
        <a href={business.phoneHref} className={styles.btnSolid}>
          {phoneOnly ? `Call ${business.phone}` : business.phone}
        </a>
        {!phoneOnly && (
          <Link href={routes.contact} className={styles.btnOutline}>
            Request Service
          </Link>
        )}
      </div>
    </section>
  );
}
