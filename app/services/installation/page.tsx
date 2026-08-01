import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import PageHero from "@/components/PageHero";
import CtaBand from "@/components/CtaBand";
import Checklist from "@/components/Checklist";
import StepsList from "@/components/StepsList";
import ServiceAreaNote from "@/components/ServiceAreaNote";
import { business, routes } from "@/lib/routes";
import { installation } from "@/lib/services-data";
import { serviceSchema } from "@/lib/service-schema";
import styles from "@/components/ServiceDetail.module.css";

export const metadata: Metadata = {
  title: "Septic Installation",
  description:
    "Septic system installation in Grays Harbor, Thurston, Mason & Lewis Counties, WA. New construction and full system replacements.",
};

const schema = serviceSchema({
  name: "Septic Installation",
  description: installation.description,
  url: routes.serviceInstallation,
});

export default function InstallationPage() {
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
          { label: "Installation" },
        ]}
      />
      <PageHero
        eyebrow="Services"
        title={installation.title}
        description={installation.description}
        align="left"
        ctas={[
          { label: business.phone, href: business.phoneHref, variant: "solid", external: true },
          { label: "Request Service", href: routes.contact, variant: "outline" },
        ]}
      />
      <div className={styles.content}>
        <div className={styles.block}>
          <h2 className={styles.h2Tight}>When You Need a New System</h2>
          <Checklist items={installation.cases} />
        </div>

        <div className={styles.block}>
          <h2 className={styles.h2Tight}>Our Installation Process</h2>
          <StepsList steps={installation.steps} />
        </div>

        <ServiceAreaNote title="Installations Across Southwest Washington" body={installation.areaNote} />
      </div>
      <CtaBand heading="Planning a New System? Let's Talk Through It." />
      <Footer />
    </div>
  );
}
