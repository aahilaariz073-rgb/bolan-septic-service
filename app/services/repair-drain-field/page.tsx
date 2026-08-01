import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import PageHero from "@/components/PageHero";
import CtaBand from "@/components/CtaBand";
import TypeCards from "@/components/TypeCards";
import ServiceAreaNote from "@/components/ServiceAreaNote";
import { business, routes } from "@/lib/routes";
import { repair } from "@/lib/services-data";
import { serviceSchema } from "@/lib/service-schema";
import styles from "@/components/ServiceDetail.module.css";

export const metadata: Metadata = {
  title: "Septic Repair & Drain Field",
  description:
    "Septic repair and drain field repair in Grays Harbor, Thurston, Mason & Lewis Counties, WA. Tank, baffle, riser and drain field repairs done right.",
};

const schema = serviceSchema({
  name: "Repair & Drain Field",
  description: repair.description,
  url: routes.serviceRepairDrainfield,
});

export default function RepairDrainfieldPage() {
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
          { label: "Repair & Drain Field" },
        ]}
      />
      <PageHero
        eyebrow="Services"
        title={repair.title}
        description={repair.description}
        align="left"
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
