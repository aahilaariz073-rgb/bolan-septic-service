import Link from "next/link";
import styles from "./PageHero.module.css";

export type Cta = { label: string; href: string; variant: "solid" | "outline"; external?: boolean };

export default function PageHero({
  eyebrow,
  title,
  description,
  align = "center",
  breadcrumb,
  ctas,
  deep = false,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "center" | "left";
  breadcrumb?: { label: string; href: string; current: string };
  ctas?: Cta[];
  deep?: boolean;
}) {
  return (
    <section className={deep ? styles.heroDeep : styles.hero}>
      <div className={`${styles.inner} ${align === "center" ? styles.center : ""} ${ctas ? styles.hasCtas : ""}`}>
        {breadcrumb && (
          <div className={styles.breadcrumb}>
            <Link href={breadcrumb.href} className={styles.breadcrumbLink}>
              {breadcrumb.label}
            </Link>
            &nbsp;/&nbsp;{breadcrumb.current}
          </div>
        )}
        <div className={styles.eyebrow}>{eyebrow}</div>
        <h1 className={styles.title}>{title}</h1>
        {description && <p className={styles.description}>{description}</p>}
        {ctas && (
          <div className={styles.ctas}>
            {ctas.map((cta) =>
              cta.external ? (
                <a
                  key={cta.label}
                  href={cta.href}
                  className={cta.variant === "solid" ? styles.btnSolid : styles.btnOutline}
                >
                  {cta.label}
                </a>
              ) : (
                <Link
                  key={cta.label}
                  href={cta.href}
                  className={cta.variant === "solid" ? styles.btnSolid : styles.btnOutline}
                >
                  {cta.label}
                </Link>
              )
            )}
          </div>
        )}
      </div>
    </section>
  );
}
