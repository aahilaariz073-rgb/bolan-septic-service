import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import CtaBand from "@/components/CtaBand";
import Checklist from "@/components/Checklist";
import StepsList from "@/components/StepsList";
import ServiceAreaNote from "@/components/ServiceAreaNote";
import { business, routes } from "@/lib/routes";
import { installation } from "@/lib/services-data";
import styles from "@/components/ServiceDetail.module.css";

export const metadata: Metadata = {
  title: "Septic Installation",
  description:
    "Septic system installation in Grays Harbor, Thurston, Mason & Lewis Counties, WA. New construction and full system replacements.",
};

export default function InstallationPage() {
  return (
    <div>
      <Header activePage="services" />
      <PageHero
        eyebrow="Services"
        title={installation.title}
        description={installation.description}
        align="left"
        breadcrumb={{ label: "Services", href: routes.services, current: "Installation" }}
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
