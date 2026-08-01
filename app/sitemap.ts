import type { MetadataRoute } from "next";
import { routes } from "@/lib/routes";
import { blogPosts } from "@/lib/blog-data";

const SITE_URL = "https://bolanseptic.com";

type Entry = {
  path: string;
  priority: number;
  changeFrequency: "weekly" | "monthly";
  lastModified: string | Date;
};

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes: Entry[] = [
    { path: routes.home, priority: 1, changeFrequency: "weekly", lastModified: now },
    { path: routes.services, priority: 0.9, changeFrequency: "monthly", lastModified: now },
    { path: routes.servicePumping, priority: 0.8, changeFrequency: "monthly", lastModified: now },
    { path: routes.serviceInspections, priority: 0.8, changeFrequency: "monthly", lastModified: now },
    { path: routes.serviceRepairDrainfield, priority: 0.8, changeFrequency: "monthly", lastModified: now },
    { path: routes.serviceInstallation, priority: 0.8, changeFrequency: "monthly", lastModified: now },
    { path: routes.serviceEmergency, priority: 0.8, changeFrequency: "monthly", lastModified: now },
    { path: routes.serviceAreas, priority: 0.7, changeFrequency: "monthly", lastModified: now },
    { path: routes.about, priority: 0.6, changeFrequency: "monthly", lastModified: now },
    { path: routes.reviews, priority: 0.6, changeFrequency: "weekly", lastModified: now },
    { path: routes.gallery, priority: 0.5, changeFrequency: "monthly", lastModified: now },
    { path: routes.faq, priority: 0.6, changeFrequency: "monthly", lastModified: now },
    { path: routes.blog, priority: 0.6, changeFrequency: "weekly", lastModified: now },
    { path: routes.contact, priority: 0.7, changeFrequency: "monthly", lastModified: now },
  ];

  const blogRoutes: Entry[] = blogPosts.map((post) => ({
    path: `${routes.blog}/${post.slug}`,
    priority: 0.5,
    changeFrequency: "monthly",
    lastModified: post.date,
  }));

  return [...staticRoutes, ...blogRoutes].map((r) => ({
    url: `${SITE_URL}${r.path}`,
    lastModified: r.lastModified,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));
}
