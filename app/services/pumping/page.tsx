import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import CtaBand from "@/components/CtaBand";
import Checklist from "@/components/Checklist";
import StepsList from "@/components/StepsList";
import ServiceAreaNote from "@/components/ServiceAreaNote";
import { business, routes } from "@/lib/routes";
import { pumping } from "@/lib/services-data";
import styles from "@/components/ServiceDetail.module.css";

export const metadata: Metadata = {
  title: "Septic Tank Pumping",
  description:
    "Septic tank pumping in Aberdeen, Hoquiam, Olympia & Grays Harbor / Thurston County, WA. Fast scheduling, fair pricing, family-owned since 2000.",
};

export default function PumpingPage() {
  return (
    <div>
      <Header activePage="services" />
      <PageHero
        eyebrow="Services"
        title={pumping.title}
        description={pumping.description}
        align="left"
        breadcrumb={{ label: "Services", href: routes.services, current: "Septic Pumping" }}
        ctas={[
          { label: business.phone, href: business.phoneHref, variant: "solid", external: true },
          { label: "Request Service", href: routes.contact, variant: "outline" },
        ]}
      />
      <div className={styles.content}>
        <h2 className={styles.h2}>Why Regular Pumping Matters</h2>
        {pumping.intro.map((p) => (
          <p key={p} className={styles.intro}>
            {p}
          </p>
        ))}

        <div className={styles.block}>
          <h2 className={styles.h2Tight}>Signs Your Tank Needs Pumping</h2>
          <Checklist items={pumping.signs} />
        </div>

        <div className={styles.block}>
          <h2 className={styles.h2Tight}>Our Pumping Process</h2>
          <StepsList steps={pumping.steps} />
        </div>

        <ServiceAreaNote title="Pumping Service Across Southwest Washington" body={pumping.areaNote} />
      </div>
      <CtaBand heading="Due for a Pump-Out? Let's Get It Scheduled." />
      <Footer />
    </div>
  );
}
