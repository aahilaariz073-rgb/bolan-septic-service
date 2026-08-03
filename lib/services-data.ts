import { routes } from "@/lib/routes";

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
      "Buying or selling a home in Washington almost always means an OSS (On-Site Sewage) inspection first. We perform real estate and routine septic inspections across Grays Harbor, Thurston and Lewis Counties, with same-week scheduling and a written report fast enough to keep your closing on track.",
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

export const pumping = {
  title: "Septic Tank Pumping",
  description:
    "Fast, honest tank pumping across Grays Harbor, Thurston and Lewis Counties — routine maintenance or same-day emergency calls.",
  intro: [
    "Most homes in Western Washington need their septic tank pumped every 3–5 years, depending on household size and tank capacity — sooner for larger families or older systems. Skipping pumping lets solids build up and migrate into your drain field, which is the single most common (and most expensive) way septic systems fail.",
    "We pump, inspect the baffles and tees while we're there, and let you know if anything else needs attention — no upselling, no surprises.",
  ],
  signs: [
    "Slow drains or gurgling pipes",
    "Standing water or soggy spots over the drain field",
    "Sewage odor near the tank or yard",
    "It has been 3–5+ years since the last pumping",
    "Bright green, spongy grass over the drain field",
    "Sewage backing up into the house",
  ],
  steps: [
    { title: "Locate & Uncover", desc: "We locate the tank and access lids (or install risers if buried) so future service is easier." },
    { title: "Pump & Clean", desc: "We pump all chambers of the tank and remove sludge and scum layers completely." },
    { title: "Inspect Components", desc: "We check baffles, tees and the outlet filter for wear or damage while the tank is open." },
    { title: "Report & Recommend", desc: "You get a plain-language rundown of your system's condition and next recommended service date." },
  ],
  areaNote:
    "We regularly pump tanks in Aberdeen, Hoquiam, Ocean Shores, Montesano and Elma in Grays Harbor County; Olympia, Lacey and Tumwater in Thurston County; and Centralia and Chehalis in Lewis County.",
};

export const inspections = {
  title: "Septic Inspections — Including Real Estate / OSS Inspections",
  description:
    "Buying, selling or refinancing a home on a septic system? We provide the OSS inspection reports lenders, buyers and county health departments require — with fast turnaround for closings.",
  types: [
    { title: "Real Estate / OSS Inspection", desc: "A full report on tank, drain field and system condition — the report homebuyers, sellers and lenders need before closing." },
    { title: "Routine O&M Inspection", desc: "A periodic checkup to catch small issues (worn baffles, root intrusion, high sludge levels) before they become expensive." },
  ],
  checklist: [
    "Tank condition, lids and risers",
    "Sludge and scum layer levels",
    "Baffles, tees and outlet filter",
    "Drain field surface and drainage",
    "Pump and alarm function (if equipped)",
    "Signs of leaks, backups or root intrusion",
  ],
  blurb:
    "Most Washington counties require a current OSS (on-site sewage system) inspection report before closing on a home with a septic system. We work directly with real estate agents, title companies and homeowners to get inspections scheduled and reports delivered fast — so financing deadlines don't slip.",
  areaNote:
    "Serving real estate transactions and routine checkups in Aberdeen, Hoquiam, Ocean Shores, Montesano and Elma in Grays Harbor County; Olympia, Lacey and Tumwater in Thurston County; and Centralia and Chehalis in Lewis County.",
};

export const repair = {
  title: "Septic Repair & Drain Field Restoration",
  description:
    "Backups, alarms and soggy yards usually mean a fixable problem — not a full replacement. We diagnose the real issue before recommending work.",
  repairs: [
    { title: "Baffle & Tee Repair", desc: "Replacing worn or broken baffles that let solids escape into the drain field." },
    { title: "Riser Installation", desc: "Bringing access lids to grade so future pumping and inspections are easier and cheaper." },
    { title: "Line & Pipe Repair", desc: "Fixing cracked, crushed or root-invaded lines between the house, tank and field." },
    { title: "Pump & Alarm Repair", desc: "Diagnosing and repairing effluent pumps, floats and alarm panels on pressure systems." },
    { title: "Drain Field Rehabilitation", desc: "Jetting, resting or partially replacing a struggling drain field before full replacement is needed." },
    { title: "Tank Structural Repair", desc: "Sealing cracks and repairing lids on older concrete tanks." },
  ],
  blurb:
    "A failing drain field shows up as standing water, sewage odor, or unusually green grass over the lines. We inspect the field, check distribution boxes and lines with a camera when needed, and recommend the least invasive fix that solves the problem — from jetting and rest periods to partial or full field replacement.",
  areaNote:
    "We repair systems in Aberdeen, Hoquiam, Ocean Shores, Montesano and Elma in Grays Harbor County; Olympia, Lacey and Tumwater in Thurston County; and Centralia and Chehalis in Lewis County.",
};

export const installation = {
  title: "New Septic System Installation",
  description:
    "Building new or replacing a failed system? We install septic systems sized and sited correctly for your property, coordinated with your county's permitting process.",
  cases: [
    "Building new construction on unserved land",
    "Your current system has failed beyond repair",
    "Adding bedrooms or fixtures beyond your system's rated capacity",
  ],
  steps: [
    { title: "Site Evaluation", desc: "We assess soil conditions, setbacks and layout options for your property." },
    { title: "Design Coordination", desc: "We work with a licensed designer to size and specify a system that fits your site and permit requirements." },
    { title: "Permitting", desc: "We help coordinate the county permit application so nothing holds up your project." },
    { title: "Installation", desc: "Our crew installs the tank, distribution system and drain field to spec." },
    { title: "Final Inspection & Walkthrough", desc: "We coordinate the county sign-off and walk you through operating your new system." },
  ],
  areaNote:
    "We install systems in Aberdeen, Hoquiam, Ocean Shores, Montesano and Elma in Grays Harbor County; Olympia, Lacey and Tumwater in Thurston County; and Centralia and Chehalis in Lewis County.",
};

export const emergency = {
  title: "Sewage Backup or Alarm Going Off? Call Now.",
  description:
    "A septic emergency doesn't wait for business hours — neither do we. We respond to backups, high-water alarms, overflowing tanks and sewage odors across our service area.",
  signs: [
    "Sewage backing up into tubs, toilets or drains",
    "High-water alarm sounding on a pump system",
    "Standing sewage or strong odor in the yard",
    "Tank overflowing after heavy rain",
    "Gurgling drains throughout the house",
    "Sewage odor inside the home",
  ],
  tips: [
    "Stop using water — toilets, sinks, showers and laundry — until we arrive.",
    "Keep people and pets away from any standing water or wet areas in the yard.",
    "If safe, locate your tank lids or risers so our crew can get to work faster.",
    "Note when the problem started and anything unusual (recent heavy use, rain, etc.) to tell our technician.",
  ],
  areaNote:
    "We respond to septic emergencies in Aberdeen, Hoquiam, Ocean Shores, Montesano and Elma in Grays Harbor County; Olympia, Lacey and Tumwater in Thurston County; and Centralia and Chehalis in Lewis County.",
};
