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

export const serviceShowcase = [
  {
    title: "Septic Pumping",
    longDesc:
      "Routine septic pumping keeps your system running clean and helps you avoid backups. We recommend having most residential tanks pumped every 3–5 years, and we'll tell you straight if yours can wait.",
    href: routes.servicePumping,
  },
  {
    title: "Septic Inspections",
    longDesc:
      "Selling a home in Washington usually means an OSS inspection first. We handle real estate and routine septic inspections across Grays Harbor, Thurston, Mason and Lewis Counties, with fast turnaround so closings stay on schedule.",
    href: routes.serviceInspections,
  },
  {
    title: "Repair & Drain Field",
    longDesc:
      "From a failing drain field to a cracked tank or bad riser, we diagnose the actual problem before we recommend a fix — no guessing, no unnecessary replacements.",
    href: routes.serviceRepairDrainfield,
  },
  {
    title: "Septic Installation",
    longDesc:
      "Ready to install a new septic system? Bolan Septic Service designs and permits new systems and full replacements the right way, built to last for homes across Southwest Washington.",
    href: routes.serviceInstallation,
  },
  {
    title: "Emergency Service",
    longDesc:
      "Septic emergencies don't wait for business hours, and neither do we. 24-hour response for backups, alarms and overflowing systems — call and a real person picks up.",
    href: routes.serviceEmergency,
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
