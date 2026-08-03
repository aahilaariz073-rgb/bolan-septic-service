import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import PageHero from "@/components/PageHero";
import CtaBand from "@/components/CtaBand";
import Checklist from "@/components/Checklist";
import NumberedList from "@/components/NumberedList";
import ServiceAreaNote from "@/components/ServiceAreaNote";
import { business, routes } from "@/lib/routes";
import { emergency } from "@/lib/services-data";
import { serviceSchema } from "@/lib/service-schema";
import styles from "@/components/ServiceDetail.module.css";

export const metadata: Metadata = {
  title: "Emergency Septic Service",
  description:
    "24-hour emergency septic service in Grays Harbor, Thurston & Lewis Counties, WA. Backups, alarms and overflows — call (360) 956-0134.",
};

const schema = serviceSchema({
  name: "Emergency Septic Service",
  description: emergency.description,
  url: routes.serviceEmergency,
});

export default function EmergencyPage() {
  return (
    <div>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <Header activePage="services" />
      <Breadcrumbs
        items={[
          { label: "Home", href: routes.home },
          { label: "Services", href: routes.services },
          { label: "Emergency Service" },
        ]}
      />
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
