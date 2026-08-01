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
      "Routine pumping is the single best thing you can do for a septic system's lifespan. Most residential tanks need it every 3–5 years — more often for larger households or a garbage disposal. While we're on-site, we check the tank condition and tell you honestly if anything else needs attention. No upselling, no guesswork.",
    href: routes.servicePumping,
    photo: { src: "/uploads/services/svc-3-hose-riser.webp", alt: "Technician feeding a pump hose into a septic tank riser", width: 1538, height: 1023 },
  },
  {
    title: "Septic Inspections",
    longDesc:
      "Buying or selling a home in Washington almost always means an OSS (On-Site Sewage) inspection first. We perform real estate and routine septic inspections across Grays Harbor, Thurston, Mason and Lewis Counties, with same-week scheduling and a written report fast enough to keep your closing on track.",
    href: routes.serviceInspections,
    photo: { src: "/uploads/services/svc-5-manhole-open.webp", alt: "Technician opening a septic tank access lid for inspection", width: 1200, height: 800 },
  },
  {
    title: "Repair & Drain Field",
    longDesc:
      "Slow drains, a soggy yard, or a sewage smell near the tank usually points to a specific, fixable problem — not always a full drain field replacement. We diagnose what's actually failing, from cracked tanks and bad risers to saturated drain lines, and only recommend replacing what genuinely needs it.",
    href: routes.serviceRepairDrainfield,
    photo: { src: "/uploads/services/svc-4-trench-excavator.webp", alt: "Excavator laying new drain field piping in a trench", width: 1500, height: 2000 },
  },
  {
    title: "Septic Installation",
    longDesc:
      "Building new or replacing a system that's finally failed for good? We design and permit new septic systems sized correctly for your property, soil conditions, and household — installed to Washington State DOH standards and built to last for decades, not just pass inspection.",
    href: routes.serviceInstallation,
    photo: { src: "/uploads/services/svc-2-tanks-hole.webp", alt: "New septic tanks set in the ground before backfilling", width: 1471, height: 1069 },
  },
  {
    title: "Emergency Service",
    longDesc:
      "A backed-up system doesn't wait for business hours, and neither do we. Call any time, any day but Saturday, and a real person from our crew answers and gets a truck moving — fast response for backups, alarms, and overflowing tanks anywhere in our service area.",
    href: routes.serviceEmergency,
    photo: { src: "/uploads/services/svc-1-truck-road.webp", alt: "Bolan Septic pump truck responding on the road", width: 1536, height: 1024 },
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
