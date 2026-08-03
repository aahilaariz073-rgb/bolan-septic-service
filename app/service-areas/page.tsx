import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import PageHero from "@/components/PageHero";
import CtaBand from "@/components/CtaBand";
import { business, routes } from "@/lib/routes";
import { counties } from "@/lib/areas-data";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Service Areas",
  description:
    "Bolan Septic Service serves Grays Harbor, Thurston & Lewis Counties, WA — Aberdeen, Hoquiam, Olympia, Montesano, Elma, Centralia, Ocean Shores and more.",
};

export default function ServiceAreasPage() {
  return (
    <div>
      <Header activePage="areas" />
      <Breadcrumbs items={[{ label: "Home", href: routes.home }, { label: "Service Areas" }]} />
      <PageHero
        eyebrow="Service Areas"
        title="Serving Southwest Washington, Within 50 Miles of Aberdeen"
        description="Grays Harbor, Thurston and Lewis Counties — from the coast to the county lines."
      />
      <div className={styles.content}>
        {counties.map((county) => (
          <div key={county.name} className={styles.county}>
            <div className={styles.countyCopy}>
              <h2 className={styles.countyTitle}>{county.name}</h2>
              <p className={styles.countyBlurb}>{county.blurb}</p>
            </div>
            <div className={styles.cities}>
              {county.cities.map((city) => (
                <span key={city} className={styles.cityChip}>
                  {city}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <section className={styles.notListed}>
        <div className={styles.notListedInner}>
          <div>
            <h2 className={styles.notListedTitle}>Don&apos;t See Your Town Listed?</h2>
            <p className={styles.notListedBody}>
              We serve most areas within roughly 50 miles of our Aberdeen headquarters. If you&apos;re just outside
              these lists, call us — we likely still cover your address.
            </p>
          </div>
          <a href={business.phoneHref} className={styles.callBtn}>
            Call {business.phone}
          </a>
        </div>
      </section>

      <CtaBand heading="Ready to Schedule Service in Your Area?" />
      <Footer />
    </div>
  );
}
