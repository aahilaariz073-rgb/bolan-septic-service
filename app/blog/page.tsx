import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import CtaBand from "@/components/CtaBand";
import { blogPosts } from "@/lib/blog-data";
import { routes } from "@/lib/routes";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Septic tips and Washington-specific guidance from Bolan Septic Service — pumping schedules, warning signs, OSS inspections for home sales, and what's changing with state septic law.",
};

export default function BlogIndexPage() {
  const sorted = [...blogPosts].sort((a, b) => (a.date < b.date ? 1 : -1));

  return (
    <div>
      <Header activePage="blog" />
      <PageHero
        eyebrow="Blog"
        title="Septic Tips & Local Guidance"
        description="Practical advice for homeowners in Grays Harbor, Thurston, Mason & Lewis Counties — no jargon, no fluff."
      />
      <div className={styles.content}>
        {sorted.map((post) => (
          <Link key={post.slug} href={`${routes.blog}/${post.slug}`} className={styles.card}>
            <div className={styles.date}>{post.dateLabel}</div>
            <h2 className={styles.title}>{post.title}</h2>
            <p className={styles.excerpt}>{post.excerpt}</p>
            <span className={styles.readMore}>Read more</span>
          </Link>
        ))}
      </div>
      <CtaBand heading="Have a Septic Question We Didn't Cover?" body="Call us — we're happy to talk through it." />
      <Footer />
    </div>
  );
}
