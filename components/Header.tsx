"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { routes, business } from "@/lib/routes";
import styles from "./Header.module.css";

type PageKey = "home" | "services" | "areas" | "about" | "reviews" | "contact";

const NAV_ITEMS: { key: PageKey; label: string; href: string }[] = [
  { key: "home", label: "Home", href: routes.home },
  { key: "services", label: "Services", href: routes.services },
  { key: "areas", label: "Service Areas", href: routes.serviceAreas },
  { key: "about", label: "About", href: routes.about },
  { key: "reviews", label: "Reviews", href: routes.reviews },
  { key: "contact", label: "Contact", href: routes.contact },
];

export default function Header({ activePage }: { activePage: PageKey }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={styles.wrap}>
      <div className={styles.topbar}>
        <span>Grays Harbor · Thurston · Mason · Lewis Counties, WA</span>
        <span className={styles.topbarDivider}>|</span>
        <span>24-Hour Emergency Service — Closed Saturdays</span>
      </div>

      <div className={styles.bar}>
        <Link href={routes.home} className={styles.logoLink}>
          <Image
            src="/uploads/logo.png"
            alt="Bolan Septic"
            width={167}
            height={83}
            className={styles.logo}
            priority
          />
        </Link>

        <nav className={styles.nav}>
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.key}
              href={item.href}
              className={`${styles.navLink} ${item.key === activePage ? styles.navLinkActive : ""}`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className={styles.desktopCta}>
          <a href={business.phoneHref} className={styles.desktopPhone}>
            {business.phone}
          </a>
          <Link href={routes.contact} className={styles.desktopRequestBtn}>
            Request Service
          </Link>
        </div>

        <div className={styles.mobileCta}>
          <a href={business.phoneHref} aria-label="Call Bolan Septic" className={styles.mobileCallBtn}>
            Call
          </a>
          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Menu"
            aria-expanded={menuOpen}
            className={styles.menuBtn}
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className={styles.mobileMenu}>
          <div className={styles.mobileMenuHeader}>
            <Image src="/uploads/logo.png" alt="Bolan Septic" width={167} height={83} className={styles.mobileMenuLogo} />
            <button type="button" onClick={() => setMenuOpen(false)} aria-label="Close menu" className={styles.closeBtn}>
              ✕
            </button>
          </div>
          <nav className={styles.mobileNav}>
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.key}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className={`${styles.mobileNavLink} ${item.key === activePage ? styles.mobileNavLinkActive : ""}`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className={styles.mobileMenuFooter}>
            <a href={business.phoneHref} className={styles.mobileMenuCallBtn}>
              Call {business.phone}
            </a>
            <Link href={routes.contact} onClick={() => setMenuOpen(false)} className={styles.mobileMenuRequestBtn}>
              Request Service
            </Link>
          </div>
        </div>
      )}

      <div className={styles.mobileStickyBar}>
        <a href={business.phoneHref} className={styles.mobileStickyCall}>
          Call Now
        </a>
        <Link href={routes.contact} className={styles.mobileStickyRequest}>
          Request Service
        </Link>
      </div>
    </header>
  );
}
