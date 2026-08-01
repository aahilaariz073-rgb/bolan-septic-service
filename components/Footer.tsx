import Image from "next/image";
import Link from "next/link";
import { routes, business } from "@/lib/routes";
import styles from "./Footer.module.css";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        <div className={styles.brandCol}>
          <Image src="/uploads/logo.png" alt="Bolan Septic" width={167} height={83} className={styles.logo} />
          <p className={styles.brandDesc}>
            Family-owned septic pumping, inspection, repair and installation serving Grays Harbor, Thurston, Mason &
            Lewis Counties since 2000.
          </p>
          <p className={styles.brandLicense}>Licensed, bonded &amp; insured in Washington State.</p>
        </div>

        <div className={styles.col}>
          <div className={styles.colHeading}>Services</div>
          <div className={styles.linkList}>
            <Link href={routes.servicePumping} className={styles.link}>Septic Pumping</Link>
            <Link href={routes.serviceInspections} className={styles.link}>Septic Inspections</Link>
            <Link href={routes.serviceRepairDrainfield} className={styles.link}>Repair &amp; Drain Field</Link>
            <Link href={routes.serviceInstallation} className={styles.link}>Installation</Link>
            <Link href={routes.serviceEmergency} className={styles.link}>Emergency Service</Link>
          </div>
        </div>

        <div className={styles.col}>
          <div className={styles.colHeading}>Company</div>
          <div className={styles.linkList}>
            <Link href={routes.about} className={styles.link}>About / Meet Rick</Link>
            <Link href={routes.serviceAreas} className={styles.link}>Service Areas</Link>
            <Link href={routes.gallery} className={styles.link}>Gallery</Link>
            <Link href={routes.blog} className={styles.link}>Blog</Link>
            <Link href={routes.faq} className={styles.link}>FAQ</Link>
            <Link href={routes.reviews} className={styles.link}>Reviews</Link>
            <Link href={routes.contact} className={styles.link}>Contact / Request Service</Link>
          </div>
        </div>

        <div className={styles.colWide}>
          <div className={styles.colHeading}>Contact</div>
          <div className={styles.contactList}>
            <a href={business.phoneHref} className={styles.contactPhone}>{business.phone}</a>
            <a href={business.emailHref} className={styles.link}>{business.email}</a>
            <span>
              {business.addressLine1}
              <br />
              {business.addressLine2}
            </span>
            <span>
              Sun–Fri: 24-Hour Emergency
              <br />
              Saturday: Closed
            </span>
          </div>
        </div>
      </div>

      <div className={styles.bottom}>
        <span>© {year} Bolan Septic Service. All rights reserved.</span>
        <span>Serving Aberdeen, Hoquiam, Olympia, Montesano, Elma, Shelton, Centralia, Ocean Shores &amp; surrounding areas.</span>
      </div>
    </footer>
  );
}
