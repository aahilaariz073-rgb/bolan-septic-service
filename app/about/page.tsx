import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CtaBand from "@/components/CtaBand";
import PhotoPlaceholder from "@/components/PhotoPlaceholder";
import { values, credentials } from "@/lib/about-data";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "About / Meet Rick",
  description: "Meet Rick Bolan, owner of Bolan Septic Service — family-owned and operated in Aberdeen, WA since 2000.",
};

export default function AboutPage() {
  return (
    <div>
      <Header activePage="about" />

      <section className={styles.bio}>
        <div className={styles.bioInner}>
          <div className={styles.portraitCol}>
            <PhotoPlaceholder hint="Photo of Rick Bolan" className={styles.portrait} />
          </div>
          <div className={styles.copyCol}>
            <div className={styles.eyebrow}>About Us</div>
            <h1 className={styles.h1}>Meet Rick Bolan</h1>
            <p className={styles.p}>
              Rick Bolan founded Bolan Septic Service in 2000, running it the way he&apos;d want it run for his own
              family: show up when you say you will, tell people the truth about what their system needs, and never
              cut corners on a job buried in someone&apos;s yard.
            </p>
            <p className={styles.pLast}>
              Twenty-five years later, it&apos;s still a hands-on, family-run operation — no call centers, no
              national franchise, no subcontracted crews. Just Rick and a small local team serving the same
              counties they grew up in.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.values}>
        <div className={styles.valuesGrid}>
          {values.map((v) => (
            <div key={v.title} className={styles.valueItem}>
              <h3 className={styles.valueTitle}>{v.title}</h3>
              <p className={styles.valueDesc}>{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.crew}>
        <div className={styles.eyebrow}>Our Crew &amp; Trucks</div>
        <h2 className={styles.crewHeading}>The People Who Show Up</h2>
        <div className={styles.crewGrid}>
          <PhotoPlaceholder hint="Crew photo" className={styles.crewPhoto} />
          <PhotoPlaceholder hint="Truck / job-site photo" className={styles.crewPhoto} />
          <PhotoPlaceholder hint="Truck / job-site photo" className={styles.crewPhoto} />
        </div>
      </section>

      <section className={styles.credentials}>
        <div className={styles.credentialsInner}>
          {credentials.map((c) => (
            <div key={c.title} className={styles.credentialItem}>
              <div className={styles.credentialTitle}>{c.title}</div>
              <div className={styles.credentialDesc}>{c.desc}</div>
            </div>
          ))}
        </div>
      </section>

      <CtaBand heading="Talk to Rick's Team Today" />
      <Footer />
    </div>
  );
}
