import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import CtaBand from "@/components/CtaBand";
import TypeCards from "@/components/TypeCards";
import ServiceAreaNote from "@/components/ServiceAreaNote";
import { business, routes } from "@/lib/routes";
import { repair } from "@/lib/services-data";
import styles from "@/components/ServiceDetail.module.css";

export const metadata: Metadata = {
  title: "Septic Repair & Drain Field",
  description:
    "Septic repair and drain field repair in Grays Harbor, Thurston, Mason & Lewis Counties, WA. Tank, baffle, riser and drain field repairs done right.",
};

export default function RepairDrainfieldPage() {
  return (
    <div>
      <Header activePage="services" />
      <PageHero
        eyebrow="Services"
        title={repair.title}
        description={repair.description}
        align="left"
        breadcrumb={{ label: "Services", href: routes.services, current: "Repair & Drain Field" }}
        ctas={[
          { label: business.phone, href: business.phoneHref, variant: "solid", external: true },
          { label: "Request Service", href: routes.contact, variant: "outline" },
        ]}
      />
      <div className={styles.content}>
        <div className={styles.block}>
          <h2 className={styles.h2Tight}>Common Repairs We Handle</h2>
          <TypeCards items={repair.repairs} compact />
        </div>

        <h2 className={styles.h2Tight}>Drain Field Failing? Here&apos;s What We Do</h2>
        <p className={styles.intro}>{repair.blurb}</p>

        <div className={styles.noteSpaced}>
          <ServiceAreaNote title="Repairs Across Southwest Washington" body={repair.areaNote} />
        </div>
      </div>
      <CtaBand heading="Something Wrong With Your System? Let's Diagnose It." />
      <Footer />
    </div>
  );
}
