import { routes } from "@/lib/routes";

export const heroStats = [
  { value: "25+", label: "Years in business" },
  { value: "5.0★", label: "Google rating" },
  { value: "24/7", label: "Emergency line" },
];

export const trustItems = [
  { value: "25+ Years", label: "Serving WA since 2000" },
  { value: "5.0 / 24 Reviews", label: "Google customer rating" },
  { value: "Licensed & Insured", label: "Washington State septic contractor" },
  { value: "24-Hour", label: "Emergency service, closed Saturdays" },
];

export const services = [
  {
    num: "01",
    title: "Septic Pumping",
    desc: "Routine and emergency tank pumping to keep your system running clean.",
    href: routes.servicePumping,
  },
  {
    num: "02",
    title: "Septic Inspections",
    desc: "Real estate / OSS inspections for home sales, plus routine system checkups.",
    href: routes.serviceInspections,
  },
  {
    num: "03",
    title: "Repair & Drain Field",
    desc: "Diagnose and fix tanks, lines, risers and failing drain fields.",
    href: routes.serviceRepairDrainfield,
  },
  {
    num: "04",
    title: "Installation",
    desc: "New septic systems and full replacements, designed and permitted right.",
    href: routes.serviceInstallation,
  },
  {
    num: "05",
    title: "Emergency Service",
    desc: "24-hour response for backups, alarms and overflowing systems.",
    href: routes.serviceEmergency,
  },
  {
    num: "06",
    title: "Service Areas",
    desc: "Grays Harbor, Thurston, Mason & Lewis Counties — city by city.",
    href: routes.serviceAreas,
  },
];

export const whyChooseUs: { icon: "clock" | "shield" | "checklist"; title: string; desc: string }[] = [
  {
    icon: "clock",
    title: "Rapid Response Promise",
    desc: "Fast, reliable help when septic issues can't wait.",
  },
  {
    icon: "shield",
    title: "Trusted Local Expertise",
    desc: "25+ years of real-world experience delivering dependable septic solutions.",
  },
  {
    icon: "checklist",
    title: "Complete System Care",
    desc: "From inspection to repair, we handle it all end-to-end.",
  },
];

export const counties = ["Grays Harbor County", "Thurston County", "Mason County", "Lewis County"];

export const reviews = [
  {
    quote:
      "Showed up on time, explained everything, and the price was fair. Exactly what you want from a septic company.",
    name: "Google review — swap in real quote",
  },
  {
    quote: "Needed a real estate inspection fast to close on time. Ricky’s team got it done in a day.",
    name: "Google review — swap in real quote",
  },
  {
    quote: "Called on a Sunday with a backup and they actually picked up and came out. Lifesavers.",
    name: "Google review — swap in real quote",
  },
];
