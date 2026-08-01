import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import CtaBand from "@/components/CtaBand";
import { business } from "@/lib/routes";
import { allReviews } from "@/lib/reviews-data";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Reviews",
  description:
    "Read reviews for Bolan Septic Service — 5.0 out of 5 stars on Google from customers across Grays Harbor, Thurston, Mason & Lewis Counties, WA.",
};

export default function ReviewsPage() {
  return (
    <div>
      <Header activePage="reviews" />
      <PageHero eyebrow="Reviews" title="What Our Customers Say" description="★★★★★  5.0 out of 5 — 25 Google Reviews" />

      <div className={styles.content}>
        <div className={styles.grid}>
          {allReviews.map((rv) => (
            <div key={rv.quote} className={styles.card}>
              <div className={styles.stars}>★★★★★</div>
              <p className={styles.quote}>&quot;{rv.quote}&quot;</p>
              <div className={styles.name}>{rv.name}</div>
            </div>
          ))}
        </div>
      </div>

      <section className={styles.googleBand}>
        <h2 className={styles.googleTitle}>Had a Good Experience With Us?</h2>
        <p className={styles.googleBody}>
          A quick Google review helps other homeowners in Grays Harbor, Thurston, Mason and Lewis Counties find us.
        </p>
        <a href={business.googleReviewUrl} className={styles.googleBtn}>
          Leave a Google Review
        </a>
      </section>

      <CtaBand heading="Ready to Join Our List of Happy Customers?" />
      <Footer />
    </div>
  );
}
