export const routes = {
  home: "/",
  services: "/services",
  servicePumping: "/services/pumping",
  serviceInspections: "/services/inspections",
  serviceRepairDrainfield: "/services/repair-drain-field",
  serviceInstallation: "/services/installation",
  serviceEmergency: "/services/emergency",
  serviceAreas: "/service-areas",
  about: "/about",
  reviews: "/reviews",
  contact: "/contact",
} as const;

export const business = {
  name: "Bolan Septic Service",
  phone: "(360) 956-0134",
  phoneHref: "tel:+13609560134",
  email: "ricky.bolan@gmail.com",
  emailHref: "mailto:ricky.bolan@gmail.com",
  addressLine1: "800 E Wishkah St, Unit 204",
  addressLine2: "Aberdeen, WA 98520",
  hours: "Sun–Fri: 24-Hour Emergency · Saturday: Closed",
} as const;
