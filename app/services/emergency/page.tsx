import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import CtaBand from "@/components/CtaBand";
import Checklist from "@/components/Checklist";
import NumberedList from "@/components/NumberedList";
import ServiceAreaNote from "@/components/ServiceAreaNote";
import { business } from "@/lib/routes";
import { emergency } from "@/lib/services-data";
import styles from "@/components/ServiceDetail.module.css";

export const metadata: Metadata = {
  title: "Emergency Septic Service",
  description:
    "24-hour emergency septic service in Grays Harbor, Thurston, Mason & Lewis Counties, WA. Backups, alarms and overflows — call (360) 956-0134.",
};

export default function EmergencyPage() {
  return (
    <div>
      <Header activePage="services" />
      <PageHero
        eyebrow="24-Hour Emergency Line — Closed Saturdays"
        title={emergency.title}
        description={emergency.description}
        align="center"
        deep
        ctas={[{ label: `Call ${business.phone}`, href: business.phoneHref, variant: "solid", external: true }]}
      />
      <div className={styles.content}>
        <div className={styles.block}>
          <h2 className={styles.h2Tight}>Signs You Need Emergency Service</h2>
          <Checklist items={emergency.signs} />
        </div>

        <div className={styles.block}>
          <h2 className={styles.h2Tight}>While You Wait for Us</h2>
          <NumberedList items={emergency.tips} />
        </div>

        <ServiceAreaNote title="Emergency Response Across Southwest Washington" body={emergency.areaNote} />
      </div>
      <CtaBand heading="Don't Wait — Call Bolan Septic Now." phoneOnly deep />
      <Footer />
    </div>
  );
}
