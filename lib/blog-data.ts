export type BlogBlock = { type: "p"; text: string } | { type: "h2"; text: string } | { type: "ul"; items: string[] };

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  description: string;
  date: string;
  dateLabel: string;
  coverImage: { src: string; alt: string; width: number; height: number };
  body: BlogBlock[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "how-often-pump-septic-tank",
    title: "How Often Should You Pump Your Septic Tank in Washington?",
    excerpt:
      "\"Every 3 to 5 years\" is the standard answer, and it's a reasonable starting point — but it's a range, not a rule. Here's how to figure out where your household actually falls.",
    description:
      "How often to pump a septic tank in Washington, what actually determines the interval, and the warning signs that mean you're overdue.",
    date: "2026-03-10",
    dateLabel: "March 10, 2026",
    coverImage: {
      src: "/uploads/services/svc-3-hose-riser.webp",
      alt: "Technician feeding a pump hose into a septic tank riser",
      width: 1538,
      height: 1023,
    },
    body: [
      {
        type: "p",
        text: "Every septic company will tell you \"every 3 to 5 years,\" and that's a reasonable place to start — but it's a range, not a fixed rule. We've pumped tanks that were fine at year 5 and tanks that needed attention at year 2. The interval that's right for your house depends on a few specific things, not a calendar.",
      },
      { type: "h2", text: "What actually determines your pumping schedule" },
      {
        type: "ul",
        items: [
          "Household size — more people means more solids going into the tank",
          "Tank size — an undersized tank for your household fills faster",
          "Garbage disposal use — food waste adds solids that don't break down like normal waste",
          "Water usage habits — heavy laundry days, long showers, and leaky fixtures all add volume",
        ],
      },
      {
        type: "p",
        text: "A family of five with a garbage disposal and an older, smaller tank might genuinely need pumping every 2–3 years. A couple in a home with a properly sized modern tank might comfortably stretch to 5. Neither one is wrong — they're just different situations.",
      },
      { type: "h2", text: "Signs you're overdue, regardless of the calendar" },
      {
        type: "ul",
        items: [
          "Slow drains or gurgling pipes throughout the house",
          "Standing water or unusually green, spongy grass over the drain field",
          "Sewage odor near the tank or in the yard",
          "Sewage backing up into tubs, sinks, or toilets",
        ],
      },
      {
        type: "p",
        text: "If you're seeing any of those, don't wait for your \"scheduled\" pumping date — call. Those are signs the tank is already full enough that solids are starting to move where they shouldn't.",
      },
      { type: "h2", text: "What happens if you skip it" },
      {
        type: "p",
        text: "When a tank isn't pumped on time, solids build up until they start migrating into the drain field. That's the single most common — and most expensive — way septic systems fail, because drain fields are much harder and costlier to fix than a tank is to pump. Regular pumping is cheap insurance against a five-figure drain field replacement.",
      },
      {
        type: "p",
        text: "If it's been a while since your last pumping and you're not sure where you stand, we'll take a look, tell you honestly what your tank needs, and give you a realistic next date — not just an upsell.",
      },
    ],
  },
  {
    slug: "warning-signs-septic-repair",
    title: "5 Warning Signs Your Septic System Needs Repair",
    excerpt:
      "Septic problems rarely show up out of nowhere. Most systems give you warning signs weeks or months before an actual backup — here's what to watch for.",
    description:
      "The five most common warning signs a septic system needs repair, from slow drains to a failing drain field, and what to do about them.",
    date: "2026-04-02",
    dateLabel: "April 2, 2026",
    coverImage: {
      src: "/uploads/services/svc-4-trench-excavator.webp",
      alt: "Excavator laying new drain field piping in a trench",
      width: 1500,
      height: 2000,
    },
    body: [
      {
        type: "p",
        text: "Septic failures rarely happen without warning. Most systems give you signs weeks or even months before an actual backup — the trick is knowing what to look for and not writing it off as a minor annoyance.",
      },
      { type: "h2", text: "1. Slow drains or gurgling pipes" },
      {
        type: "p",
        text: "One slow drain is probably a clog. Multiple slow drains throughout the house, or drains that gurgle after you flush or run water, usually point to something further downstream — either the tank is full or there's a blockage between the house and the tank.",
      },
      { type: "h2", text: "2. Standing water or bright green grass over the drain field" },
      {
        type: "p",
        text: "A drain field that's working properly shouldn't leave standing water or noticeably greener, spongier grass on the surface. When you see that, it usually means effluent is surfacing instead of draining into the soil the way it's supposed to.",
      },
      { type: "h2", text: "3. Sewage odor near the tank or in the yard" },
      {
        type: "p",
        text: "A properly functioning septic system shouldn't smell. Odor near the tank lid, risers, or out in the yard is one of the more reliable early signs that something needs attention — a cracked lid, a failing baffle, or a drain field that's struggling.",
      },
      { type: "h2", text: "4. Sewage backing up into the house" },
      {
        type: "p",
        text: "This is the sign nobody misses, and by the time it happens the problem has usually been building for a while. If it happens, stop using water in the house and call for emergency service rather than waiting to see if it clears on its own.",
      },
      { type: "h2", text: "5. It's been years since anyone looked at the system" },
      {
        type: "p",
        text: "No physical symptoms yet, but you also can't remember the last time the tank was pumped or inspected? That's a warning sign on its own. Septic problems are far cheaper to catch early than to fix after a failure.",
      },
      {
        type: "p",
        text: "If any of this sounds familiar, we diagnose the actual problem before recommending work — a lot of what looks like \"the drain field is failing\" turns out to be a fixable baffle, riser, or line issue instead.",
      },
    ],
  },
  {
    slug: "oss-inspection-home-sale-washington",
    title: "What Is an OSS Inspection — And Do You Need One to Sell Your Home in Washington?",
    excerpt:
      "If you're selling a home on a septic system in Washington, there's a good chance you'll need an OSS inspection before closing. Here's what it covers and why the requirements aren't the same everywhere.",
    description:
      "What a Washington OSS (on-site sewage) inspection covers, why county requirements for home sales vary, and how to plan around it before closing.",
    date: "2026-05-14",
    dateLabel: "May 14, 2026",
    coverImage: {
      src: "/uploads/services/svc-5-manhole-open.webp",
      alt: "Technician opening a septic tank access lid for inspection",
      width: 1200,
      height: 800,
    },
    body: [
      {
        type: "p",
        text: "If you're buying or selling a home on a septic system in Washington, \"OSS inspection\" is a phrase you'll run into fast. OSS stands for On-Site Sewage system, and the inspection is exactly what it sounds like — a professional look at the tank, drain field, and system components to document their condition.",
      },
      { type: "h2", text: "What an OSS inspection actually checks" },
      {
        type: "ul",
        items: [
          "Tank condition, lids, and risers",
          "Sludge and scum layer levels inside the tank",
          "Baffles, tees, and the outlet filter",
          "Drain field surface condition and drainage",
          "Pump and alarm function, on systems that have them",
          "Signs of leaks, backups, or root intrusion",
        ],
      },
      {
        type: "p",
        text: "The result is a written report — the same report lenders, title companies, and often county health departments want to see before a septic-served home changes hands.",
      },
      { type: "h2", text: "Here's the part people don't expect: requirements vary by county" },
      {
        type: "p",
        text: "There's no single statewide rule (yet — more on that below). Some Washington counties require an inspection or an O&M report before a property with a septic system can transfer ownership; others don't currently mandate one at the time of sale at all. The window for how recent the inspection needs to be also differs from county to county.",
      },
      {
        type: "p",
        text: "That means the honest answer to \"do I need one?\" is: it depends on which of our four counties your property is in, and that can change. Rather than guess, call us with the address and your target closing date — we'll tell you exactly what's required and get it scheduled with enough runway that it doesn't hold up the sale.",
      },
      { type: "h2", text: "Why timing matters" },
      {
        type: "p",
        text: "Inspections take time to schedule, and if the report turns up an issue, fixing it takes time too. We work directly with real estate agents, title companies, and homeowners to get inspections done and reports delivered fast, so financing deadlines don't slip — but the earlier you start, the more room you have if anything needs attention before closing.",
      },
    ],
  },
  {
    slug: "washington-septic-law-2027",
    title: "Washington's New Septic Inspection Law: What Changes Starting February 2027",
    excerpt:
      "Right now, whether you need a septic inspection to sell your home depends on which county you're in. That's about to change statewide.",
    description:
      "What Washington's new statewide septic inspection requirement — taking effect February 1, 2027 — means for homeowners planning to sell a septic-served property.",
    date: "2026-07-08",
    dateLabel: "July 8, 2026",
    coverImage: {
      src: "/uploads/services/svc-2-tanks-hole.webp",
      alt: "New septic tanks set in the ground before backfilling",
      width: 1471,
      height: 1069,
    },
    body: [
      {
        type: "p",
        text: "Right now, whether a septic-served home needs an inspection before it can be sold in Washington depends heavily on which county it's in. Some counties require one, some don't, and the rules aren't identical where they do exist. That patchwork is going away.",
      },
      { type: "h2", text: "What's changing" },
      {
        type: "p",
        text: "Starting February 1, 2027, Washington will require septic-served properties to get a property-transfer inspection completed by a third-party inspector authorized by the local health officer before the sale or deed transfer goes through. It's designed to standardize a rule that currently varies from county to county across the state.",
      },
      { type: "h2", text: "Why it's happening" },
      {
        type: "p",
        text: "Failing septic systems are expensive surprises for new homeowners and a real public health concern when they're not caught early. A consistent statewide inspection requirement closes the gap in counties that currently don't require anything at time of sale, so buyers get the same baseline information no matter where in Washington they're buying.",
      },
      { type: "h2", text: "What this means if you're planning to sell" },
      {
        type: "ul",
        items: [
          "If your county doesn't currently require an inspection, it will after February 1, 2027 — plan for it even if you haven't had to before",
          "Inspections that turn up issues take time to resolve, so getting one done well ahead of listing gives you room to fix problems on your own timeline instead of a buyer's",
          "The inspector has to be authorized by the local health officer — not just any contractor — so it's worth confirming credentials before you book",
        ],
      },
      { type: "h2", text: "How we can help" },
      {
        type: "p",
        text: "We're OSS certified and already perform real estate inspections across Grays Harbor, Thurston, Mason, and Lewis Counties under the current county-by-county rules. If you're thinking about selling anytime in the next couple of years, getting a baseline inspection now — before the statewide requirement kicks in and everyone's booking at once — is a good way to get ahead of it.",
      },
    ],
  },
  {
    slug: "septic-dos-and-donts",
    title: "Septic Do's and Don'ts: A Homeowner's Guide",
    excerpt:
      "Most septic problems we get called out for trace back to a handful of everyday habits. Here's the short list of what actually protects your system.",
    description:
      "A practical do's and don'ts guide to septic system care — what to flush, what to avoid, and how to protect your drain field, based on EPA guidance.",
    date: "2026-07-25",
    dateLabel: "July 25, 2026",
    coverImage: {
      src: "/uploads/truck-real.webp",
      alt: "Bolan Septic pump truck parked at the yard",
      width: 1782,
      height: 883,
    },
    body: [
      {
        type: "p",
        text: "Most septic problems we get called out for trace back to a handful of everyday habits, not bad luck. None of this is complicated — it just isn't always obvious.",
      },
      { type: "h2", text: "Do" },
      {
        type: "ul",
        items: [
          "Have your tank pumped every 3–5 years (sooner for larger households or heavy garbage disposal use)",
          "Spread out laundry and heavy water use across the week instead of all at once",
          "Keep a record of when the tank was last pumped and inspected",
          "Know where your tank and drain field are located",
        ],
      },
      { type: "h2", text: "Don't flush" },
      {
        type: "ul",
        items: [
          "Wipes of any kind — including ones labeled \"flushable\"",
          "Feminine hygiene products",
          "Dental floss",
          "Cigarette butts",
          "Cat litter or diapers",
        ],
      },
      {
        type: "p",
        text: "If it isn't human waste or toilet paper, it doesn't belong in the system. These items don't break down the way a septic system needs them to, and they're one of the most common causes of clogs and backups we see.",
      },
      { type: "h2", text: "Don't pour down the drain" },
      {
        type: "ul",
        items: [
          "Cooking grease or oil — let it harden and throw it in the trash instead",
          "Coffee grounds",
          "Harsh household chemicals in large quantities",
        ],
      },
      { type: "h2", text: "Keep your drain field clear" },
      {
        type: "p",
        text: "Drain fields aren't built to handle weight or impermeable surfaces. Don't park cars or drive equipment over the field — it compacts the soil and can crush the pipes underneath. Don't build a deck, shed, or pour concrete or asphalt over it either, since that blocks the oxygen and evaporation the field needs to actually work. And when planting nearby, keep large trees and shrubs with aggressive root systems away from the lines.",
      },
      {
        type: "p",
        text: "None of this requires special equipment or a monthly routine — it's mostly just paying attention to what goes down the drain and staying off the field. Combined with regular pumping, it's the difference between a system that lasts decades and one that needs expensive repairs way ahead of schedule.",
      },
    ],
  },
];
