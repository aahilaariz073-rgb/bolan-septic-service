import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { routes, business } from "@/lib/routes";
import { heroStats, trustItems, services, counties, reviews } from "@/lib/home-data";
import styles from "./page.module.css";

export default function HomePage() {
  return (
    <div className={styles.page}>
      <Header activePage="home" />

      <section aria-label="Hero" className={styles.hero}>
        <div className={styles.heroInner}>
          <div className={styles.heroCopy}>
            <div className={styles.eyebrowOnDark}>Family-Owned in Aberdeen, WA — Since 2000</div>
            <h1 className={styles.h1}>Septic Pumping, Inspections &amp; Repair You Can Trust</h1>
            <p className={styles.heroLede}>
              Serving Grays Harbor, Thurston, Mason &amp; Lewis Counties with honest, on-time septic service —
              pumping, real estate inspections, repairs, drain fields and new installations.
            </p>
            <div className={styles.heroCtas}>
              <a href={business.phoneHref} className={styles.btnCopper}>
                {business.phone}
              </a>
              <Link href={routes.contact} className={styles.btnOutlineOnDark}>
                Request Service
              </Link>
            </div>
            <div className={styles.heroStats}>
              {heroStats.map((stat) => (
                <div key={stat.label} className={styles.heroStat}>
                  <div className={styles.heroStatValue}>{stat.value}</div>
                  <div className={styles.heroStatLabel}>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.heroPhoto}>
            <Image
              src="/uploads/truck-real.webp"
              alt="Bolan Septic pump truck parked at the yard"
              width={1782}
              height={883}
              sizes="(max-width: 900px) 100vw, 560px"
              className={styles.heroPhotoImg}
              priority
            />
          </div>
        </div>
      </section>

      <section aria-label="Trust indicators" className={styles.trustBar}>
        <div className={styles.trustBarInner}>
          {trustItems.map((t) => (
            <div key={t.label} className={styles.trustItem}>
              <div className={styles.trustValue}>{t.value}</div>
              <div className={styles.trustLabel}>{t.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section aria-label="Services overview" className={styles.section}>
        <div className={styles.sectionHead}>
          <div className={styles.eyebrow}>What We Do</div>
          <h2 className={styles.h2}>Full-Service Septic Care</h2>
        </div>
        <div className={styles.servicesGrid}>
          {services.map((svc) => (
            <Link key={svc.title} href={svc.href} className={styles.serviceCard}>
              <div className={styles.serviceNum}>{svc.num}</div>
              <div className={styles.serviceTitle}>{svc.title}</div>
              <p className={styles.serviceDesc}>{svc.desc}</p>
              <span className={styles.learnMore}>Learn more</span>
            </Link>
          ))}
        </div>
      </section>

      <section aria-label="Local and family-run" className={styles.truckBand}>
        <div className={styles.truckBandInner}>
          <div className={styles.truckImgCol}>
            <Image
              src="/uploads/truck-real.webp"
              alt="Bolan Septic pump truck parked at the yard"
              width={1782}
              height={883}
              sizes="(max-width: 900px) 100vw, 600px"
              className={styles.truckImg}
            />
          </div>
          <div className={styles.truckCopyCol}>
            <div className={styles.eyebrow}>Local &amp; Family-Run</div>
            <h2 className={styles.h2Tight}>One Call. One Crew You Can Trust.</h2>
            <p className={styles.bodyText}>
              Ricky Bolan has run this company since 2000 — no call centers, no subcontractors. When you call Bolan
              Septic, you get a real local crew that shows up on time and explains exactly what your system needs.
            </p>
            <Link href={routes.about} className={styles.textLink}>
              Meet the owner
            </Link>
          </div>
        </div>
      </section>

      <section aria-label="Service area" className={styles.section}>
        <div className={styles.areaInner}>
          <div className={styles.areaCopyCol}>
            <div className={styles.eyebrow}>Where We Work</div>
            <h2 className={styles.h2Tight}>Proudly Serving Southwest Washington</h2>
            <p className={styles.bodyText}>
              We serve homes and businesses within roughly 50 miles of Aberdeen — Grays Harbor, Thurston, Mason and
              Lewis Counties.
            </p>
            <div className={styles.countyList}>
              {counties.map((c) => (
                <div key={c} className={styles.countyItem}>
                  {c}
                </div>
              ))}
            </div>
            <Link href={routes.serviceAreas} className={styles.textLink}>
              See all cities we serve
            </Link>
          </div>
          <div className={styles.areaCard}>
            <div className={styles.areaCardEyebrow}>Headquartered In Aberdeen</div>
            <div className={styles.areaCardLine1}>{business.addressLine1}</div>
            <div className={styles.areaCardLine2}>{business.addressLine2}</div>
            <a href={business.phoneHref} className={styles.areaCardCall}>
              Call {business.phone}
            </a>
          </div>
        </div>
      </section>

      <section aria-label="Customer reviews" className={styles.reviewsBand}>
        <div className={styles.reviewsInner}>
          <div className={styles.reviewsHead}>
            <div>
              <div className={styles.eyebrow}>Reputation</div>
              <h2 className={styles.h2Tight}>What Customers Say</h2>
              <div className={styles.reviewsRating}>★★★★★ &nbsp;5.0 out of 5 — 24 Google reviews</div>
            </div>
            <Link href={routes.reviews} className={styles.textLink}>
              Read all reviews
            </Link>
          </div>
          <div className={styles.reviewsGrid}>
            {reviews.map((rv, i) => (
              <div key={i} className={styles.reviewCard}>
                <div className={styles.quoteMark}>&ldquo;</div>
                <p className={styles.quoteText}>{rv.quote}</p>
                <div className={styles.quoteName}>{rv.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section aria-label="Call to action" className={styles.ctaBand}>
        <h2 className={styles.ctaHeading}>Septic Problem? We&apos;re On Call — Even Sundays.</h2>
        <p className={styles.ctaBody}>Same-day scheduling available. Call now or send a request online.</p>
        <div className={styles.ctaButtons}>
          <a href={business.phoneHref} className={styles.btnCopper}>
            {business.phone}
          </a>
          <Link href={routes.contact} className={styles.btnOutlineOnDark}>
            Request Service
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
