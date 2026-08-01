"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { routes, business } from "@/lib/routes";
import styles from "./Header.module.css";

type PageKey = "home" | "services" | "areas" | "about" | "reviews" | "contact" | "faq" | "gallery" | "blog";

const SERVICE_LINKS = [
  { label: "Septic Pumping", href: routes.servicePumping },
  { label: "Septic Inspections", href: routes.serviceInspections },
  { label: "Repair & Drain Field", href: routes.serviceRepairDrainfield },
  { label: "Installation", href: routes.serviceInstallation },
  { label: "Emergency Service", href: routes.serviceEmergency },
];

const NAV_ITEMS: { key: PageKey; label: string; href: string; children?: typeof SERVICE_LINKS }[] = [
  { key: "services", label: "Services", href: routes.services, children: SERVICE_LINKS },
  { key: "areas", label: "Areas", href: routes.serviceAreas },
  { key: "gallery", label: "Gallery", href: routes.gallery },
  { key: "blog", label: "Blog", href: routes.blog },
  { key: "faq", label: "FAQ", href: routes.faq },
  { key: "about", label: "About", href: routes.about },
  { key: "reviews", label: "Reviews", href: routes.reviews },
  { key: "contact", label: "Contact", href: routes.contact },
];

export default function Header({ activePage }: { activePage: PageKey }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState(false);

  const closeMobileMenu = () => {
    setMenuOpen(false);
    setOpenSubmenu(false);
  };

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
          {NAV_ITEMS.map((item) =>
            item.children ? (
              <div key={item.key} className={styles.navDropdownWrap}>
                <Link
                  href={item.href}
                  className={`${styles.navLink} ${styles.navDropdownTrigger} ${
                    item.key === activePage ? styles.navLinkActive : ""
                  }`}
                >
                  {item.label}
                  <svg width="10" height="6" viewBox="0 0 10 6" fill="none" aria-hidden="true">
                    <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
                <div className={styles.navDropdown}>
                  {item.children.map((child) => (
                    <Link key={child.href} href={child.href} className={styles.navDropdownLink}>
                      {child.label}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={item.key}
                href={item.href}
                className={`${styles.navLink} ${item.key === activePage ? styles.navLinkActive : ""}`}
              >
                {item.label}
              </Link>
            )
          )}
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
            onClick={() => (menuOpen ? closeMobileMenu() : setMenuOpen(true))}
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
            <button type="button" onClick={closeMobileMenu} aria-label="Close menu" className={styles.closeBtn}>
              ✕
            </button>
          </div>
          <nav className={styles.mobileNav}>
            {NAV_ITEMS.map((item) =>
              item.children ? (
                <div key={item.key} className={styles.mobileNavGroup}>
                  <div className={styles.mobileNavRow}>
                    <Link
                      href={item.href}
                      onClick={closeMobileMenu}
                      className={`${styles.mobileNavLink} ${item.key === activePage ? styles.mobileNavLinkActive : ""}`}
                    >
                      {item.label}
                    </Link>
                    <button
                      type="button"
                      onClick={() => setOpenSubmenu((v) => !v)}
                      aria-label={openSubmenu ? "Collapse services" : "Expand services"}
                      aria-expanded={openSubmenu}
                      className={styles.mobileSubmenuToggle}
                    >
                      <svg
                        width="14"
                        height="8"
                        viewBox="0 0 10 6"
                        fill="none"
                        aria-hidden="true"
                        className={openSubmenu ? styles.mobileSubmenuIconOpen : ""}
                      >
                        <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </button>
                  </div>
                  {openSubmenu && (
                    <div className={styles.mobileSubmenu}>
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          onClick={closeMobileMenu}
                          className={styles.mobileSubmenuLink}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.key}
                  href={item.href}
                  onClick={closeMobileMenu}
                  className={`${styles.mobileNavLink} ${item.key === activePage ? styles.mobileNavLinkActive : ""}`}
                >
                  {item.label}
                </Link>
              )
            )}
          </nav>
          <div className={styles.mobileMenuFooter}>
            <a href={business.phoneHref} className={styles.mobileMenuCallBtn}>
              Call {business.phone}
            </a>
            <Link href={routes.contact} onClick={closeMobileMenu} className={styles.mobileMenuRequestBtn}>
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
