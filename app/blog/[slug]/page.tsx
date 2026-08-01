import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import BlogBody from "@/components/BlogBody";
import { blogPosts } from "@/lib/blog-data";
import { routes, business } from "@/lib/routes";
import styles from "./page.module.css";

const SITE_URL = "https://bolanseptic.com";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};
  return { title: post.title, description: post.description };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    image: `${SITE_URL}${post.coverImage.src}`,
    author: { "@type": "Organization", name: business.name },
  };

  return (
    <div>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <Header activePage="blog" />
      <Breadcrumbs
        items={[
          { label: "Home", href: routes.home },
          { label: "Blog", href: routes.blog },
          { label: post.title },
        ]}
      />
      <article className={styles.content}>
        <Link href={routes.blog} className={styles.backLink}>
          ← All articles
        </Link>
        <div className={styles.date}>{post.dateLabel}</div>
        <h1 className={styles.title}>{post.title}</h1>
        <div className={styles.coverWrap}>
          <Image
            src={post.coverImage.src}
            alt={post.coverImage.alt}
            width={post.coverImage.width}
            height={post.coverImage.height}
            sizes="(max-width: 760px) 100vw, 720px"
            priority
            className={styles.cover}
          />
        </div>
        <BlogBody blocks={post.body} />
      </article>
      <div className={styles.footerCta}>
        <p className={styles.footerCtaText}>Have a septic question about your own property?</p>
        <a href={business.phoneHref} className={styles.footerCtaLink}>
          Call {business.phone}
        </a>
      </div>
      <Footer />
    </div>
  );
}
