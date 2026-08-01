import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import CtaBand from "@/components/CtaBand";
import PhotoPlaceholder from "@/components/PhotoPlaceholder";
import { galleryPhotos, galleryPlaceholders } from "@/lib/gallery-data";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Photos of Bolan Septic Service at work — pump trucks, tank pumping, inspections, drain field trenching, and installations across Southwest Washington.",
};

export default function GalleryPage() {
  return (
    <div>
      <Header activePage="gallery" />
      <PageHero
        eyebrow="Gallery"
        title="A Look at the Work"
        description="Real trucks, real job sites — pumping, inspections, repairs and installations across our service area."
      />
      <div className={styles.content}>
        <div className={styles.grid}>
          {galleryPhotos.map((photo) => (
            <figure key={photo.src} className={styles.tile}>
              <div className={styles.photoWrap}>
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  width={photo.width}
                  height={photo.height}
                  sizes="(max-width: 700px) 100vw, 33vw"
                  className={styles.img}
                />
              </div>
              <figcaption className={styles.caption}>{photo.caption}</figcaption>
            </figure>
          ))}
          {galleryPlaceholders.map((hint) => (
            <figure key={hint} className={styles.tile}>
              <div className={styles.placeholderWrap}>
                <PhotoPlaceholder hint={hint} />
              </div>
              <figcaption className={styles.caption}>{hint}</figcaption>
            </figure>
          ))}
        </div>
      </div>
      <CtaBand heading="Need Work Done That Looks This Clean?" />
      <Footer />
    </div>
  );
}
