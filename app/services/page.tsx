import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import PageHero from "@/components/PageHero";
import CtaBand from "@/components/CtaBand";
import ServiceShowcase from "@/components/ServiceShowcase";
import { routes } from "@/lib/routes";

export const metadata: Metadata = {
  title: "Septic Services",
  description:
    "Septic services in Grays Harbor, Thurston, Mason & Lewis Counties, WA: pumping, inspections, repair, drain field and new installation. Family-owned since 2000.",
};

export default function ServicesPage() {
  return (
    <div>
      <Header activePage="services" />
      <Breadcrumbs items={[{ label: "Home", href: routes.home }, { label: "Services" }]} />
      <PageHero
        eyebrow="Our Services"
        title="Septic Services for Every Job — Big or Small"
        description="Pumping, inspections, repair, drain fields and new installations across Grays Harbor, Thurston, Mason & Lewis Counties."
      />
      <ServiceShowcase />
      <CtaBand
        heading="Not Sure What Your System Needs?"
        body="Call us and describe the problem — we'll tell you exactly what service to book."
      />
      <Footer />
    </div>
  );
}
