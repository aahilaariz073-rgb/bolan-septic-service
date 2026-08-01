import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import RequestServiceForm from "@/components/RequestServiceForm";
import { business } from "@/lib/routes";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Contact / Request Service",
  description:
    "Contact Bolan Septic Service or request service online. Call (360) 956-0134 or send your address and service needed — serving Grays Harbor, Thurston, Mason & Lewis Counties, WA.",
};

export default function ContactPage() {
  return (
    <div>
      <Header activePage="contact" />
      <PageHero
        eyebrow="Contact Us"
        title="Request Service"
        description="Fill out the form below or call us directly — we usually call back the same day."
      />

      <div className={styles.content}>
        <RequestServiceForm />

        <div className={styles.sidebar}>
          <div className={styles.sidebarItem}>
            <div className={styles.sidebarLabel}>Call Us</div>
            <a href={business.phoneHref} className={styles.sidebarPhone}>
              {business.phone}
            </a>
          </div>
          <div className={styles.sidebarItem}>
            <div className={styles.sidebarLabel}>Email</div>
            <a href={business.emailHref} className={styles.sidebarValue}>
              {business.email}
            </a>
          </div>
          <div className={styles.sidebarItem}>
            <div className={styles.sidebarLabel}>Address</div>
            <div className={styles.sidebarValue}>
              {business.addressLine1}
              <br />
              {business.addressLine2}
            </div>
          </div>
          <div className={styles.sidebarItemLast}>
            <div className={styles.sidebarLabel}>Hours</div>
            <div className={styles.sidebarValue}>
              Sunday–Friday: 24-Hour Emergency
              <br />
              Saturday: Closed
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
