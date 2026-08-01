import Link from "next/link";
import { breadcrumbListSchema, type Crumb } from "@/lib/breadcrumb-schema";
import styles from "./Breadcrumbs.module.css";

export default function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbListSchema(items)) }}
      />
      <nav aria-label="Breadcrumb" className={styles.bar}>
        <ol className={styles.inner}>
          {items.map((item, i) => (
            <li key={item.label} className={styles.crumb}>
              {i > 0 && <span className={styles.separator}>/</span>}
              {item.href ? (
                <Link href={item.href} className={styles.link}>
                  {item.label}
                </Link>
              ) : (
                <span className={styles.current} aria-current="page">
                  {item.label}
                </span>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}
