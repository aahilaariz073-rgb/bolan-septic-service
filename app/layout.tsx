import type { Metadata, Viewport } from "next";
import { Source_Serif_4, Source_Sans_3 } from "next/font/google";
import "./globals.css";

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  weight: ["600", "700"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://bolanseptic.com"),
  title: {
    default: "Bolan Septic Service | Septic Pumping, Inspections & Repair in Aberdeen, WA",
    template: "%s | Bolan Septic Service",
  },
  description:
    "Septic pumping, inspections, repair, drain field and installation service in Aberdeen, Olympia & across Grays Harbor, Thurston, Mason & Lewis Counties, WA. Family-owned since 2000. 24-hour emergency service.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://bolanseptic.com/#website",
  name: "Bolan Septic Service",
  url: "https://bolanseptic.com",
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://bolanseptic.com/#business",
  name: "Bolan Septic Service",
  image: "https://bolanseptic.com/uploads/truck-real.webp",
  logo: "https://bolanseptic.com/uploads/logo.png",
  telephone: "+1-360-956-0134",
  email: "ricky.bolan@gmail.com",
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: "800 E Wishkah St, Unit 204",
    addressLocality: "Aberdeen",
    addressRegion: "WA",
    postalCode: "98520",
    addressCountry: "US",
  },
  areaServed: [
    { "@type": "AdministrativeArea", name: "Grays Harbor County, WA" },
    { "@type": "AdministrativeArea", name: "Thurston County, WA" },
    { "@type": "AdministrativeArea", name: "Mason County, WA" },
    { "@type": "AdministrativeArea", name: "Lewis County, WA" },
  ],
  foundingDate: "2000",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5.0",
    reviewCount: "25",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "00:00",
      closes: "23:59",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${sourceSerif.variable} ${sourceSans.variable}`}>
      <head>
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
