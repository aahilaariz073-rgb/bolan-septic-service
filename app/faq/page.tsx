import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import CtaBand from "@/components/CtaBand";
import FaqAccordion from "@/components/FaqAccordion";
import { faqs } from "@/lib/faq-data";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Answers to common septic questions — pumping frequency, warning signs, OSS inspections for home sales, Washington's 2027 septic inspection law, pricing, and emergency service.",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.question,
    acceptedAnswer: { "@type": "Answer", text: f.answer },
  })),
};

export default function FaqPage() {
  return (
    <div>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Header activePage="faq" />
      <PageHero
        eyebrow="FAQ"
        title="Septic Questions, Answered Straight"
        description="Pumping schedules, warning signs, real estate inspections, and what's changing with Washington septic law — no jargon."
      />
      <div className={styles.content}>
        <FaqAccordion items={faqs} />
      </div>
      <CtaBand heading="Still Have a Question?" body="Call us and we'll give you a straight answer — no pressure." />
      <Footer />
    </div>
  );
}
