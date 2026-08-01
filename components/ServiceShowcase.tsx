import Image from "next/image";
import Link from "next/link";
import { serviceShowcase } from "@/lib/services-data";
import styles from "./ServiceShowcase.module.css";

export default function ServiceShowcase() {
  return (
    <section aria-label="Service showcase">
      {serviceShowcase.map((svc, i) => (
        <div key={svc.title} className={styles.row}>
          <div className={`${styles.photo} ${i % 2 === 1 ? styles.photoSecond : ""}`}>
            <Image
              src={svc.photo.src}
              alt={svc.photo.alt}
              width={svc.photo.width}
              height={svc.photo.height}
              sizes="(max-width: 760px) 100vw, 50vw"
              className={styles.img}
            />
          </div>
          <div className={styles.text}>
            <h3 className={styles.title}>{svc.title}</h3>
            <p className={styles.desc}>{svc.longDesc}</p>
            <Link href={svc.href} className={styles.cta}>
              Learn More
            </Link>
          </div>
        </div>
      ))}
    </section>
  );
}
