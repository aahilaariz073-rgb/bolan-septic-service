import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import CtaBand from "@/components/CtaBand";
import { serviceLinks } from "@/lib/services-data";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Septic Services",
  description:
    "Septic services in Grays Harbor, Thurston, Mason & Lewis Counties, WA: pumping, inspections, repair, drain field and new installation. Family-owned since 2000.",
};

export default function ServicesPage() {
  return (
    <div>
      <Header activePage="services" />
      <PageHero
        eyebrow="Our Services"
        title="Septic Services for Every Job — Big or Small"
        description="Pumping, inspections, repair, drain fields and new installations across Grays Harbor, Thurston, Mason & Lewis Counties."
      />
      <div className={styles.grid}>
        {serviceLinks.map((svc) => (
          <Link key={svc.title} href={svc.href} className={styles.card}>
            <div className={styles.num}>{svc.num}</div>
            <div className={styles.title}>{svc.title}</div>
            <p className={styles.desc}>{svc.desc}</p>
            <span className={styles.link}>View details</span>
          </Link>
        ))}
      </div>
      <CtaBand
        heading="Not Sure What Your System Needs?"
        body="Call us and describe the problem — we'll tell you exactly what service to book."
      />
      <Footer />
    </div>
  );
}
