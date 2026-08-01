const SITE_URL = "https://bolanseptic.com";

export function serviceSchema({ name, description, url }: { name: string; description: string; url: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: name,
    name,
    description,
    provider: { "@type": "LocalBusiness", "@id": `${SITE_URL}/#business`, name: "Bolan Septic Service" },
    areaServed: [
      { "@type": "AdministrativeArea", name: "Grays Harbor County, WA" },
      { "@type": "AdministrativeArea", name: "Thurston County, WA" },
      { "@type": "AdministrativeArea", name: "Mason County, WA" },
      { "@type": "AdministrativeArea", name: "Lewis County, WA" },
    ],
    url: `${SITE_URL}${url}`,
  };
}
