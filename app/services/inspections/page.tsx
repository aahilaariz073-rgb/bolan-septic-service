import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import PageHero from "@/components/PageHero";
import CtaBand from "@/components/CtaBand";
import Checklist from "@/components/Checklist";
import TypeCards from "@/components/TypeCards";
import ServiceAreaNote from "@/components/ServiceAreaNote";
import { business, routes } from "@/lib/routes";
import { inspections } from "@/lib/services-data";
import { serviceSchema } from "@/lib/service-schema";
import styles from "@/components/ServiceDetail.module.css";

export const metadata: Metadata = {
  title: "Septic Inspections",
  description:
    "Septic inspections in Grays Harbor, Thurston & Lewis Counties, WA — including real estate / OSS inspections for home sales. Fast turnaround for closings.",
};

const schema = serviceSchema({
  name: "Septic Inspections",
  description: inspections.description,
  url: routes.serviceInspections,
});

export default function InspectionsPage() {
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
          { label: "Septic Inspections" },
        ]}
      />
      <PageHero
        eyebrow="Services"
        title={inspections.title}
        description={inspections.description}
        align="left"
        ctas={[
          { label: business.phone, href: business.phoneHref, variant: "solid", external: true },
          { label: "Request Service", href: routes.contact, variant: "outline" },
        ]}
      />
      <div className={styles.content}>
        <TypeCards items={inspections.types} />

        <div className={styles.block}>
          <h2 className={styles.h2Tight}>What We Check</h2>
          <Checklist items={inspections.checklist} />
        </div>

        <div className={styles.block}>
          <h2 className={styles.h2Tight}>Selling or Buying a Home on Septic?</h2>
          <p className={styles.intro}>{inspections.blurb}</p>
        </div>

        <ServiceAreaNote title="Inspections Across Southwest Washington" body={inspections.areaNote} />
      </div>
      <CtaBand heading="Closing Deadline? Call Now to Get on the Schedule." />
      <Footer />
    </div>
  );
}
