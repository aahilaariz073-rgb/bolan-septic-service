const ICON_PROPS = {
  width: 22,
  height: 22,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function ClockIcon() {
  return (
    <svg {...ICON_PROPS} aria-hidden="true">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3.5 2" />
    </svg>
  );
}

export function ShieldIcon() {
  return (
    <svg {...ICON_PROPS} aria-hidden="true">
      <path d="M12 3.5l7 2.8v5.2c0 4.6-3 7.9-7 9-4-1.1-7-4.4-7-9V6.3l7-2.8z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  );
}

export function ChecklistIcon() {
  return (
    <svg {...ICON_PROPS} aria-hidden="true">
      <rect x="4.5" y="3.5" width="15" height="17" rx="1.5" />
      <path d="M8.5 9.5l1.5 1.5 3-3" />
      <path d="M8.5 15.5h7" />
    </svg>
  );
}

export const WHY_CHOOSE_ICONS = {
  clock: ClockIcon,
  shield: ShieldIcon,
  checklist: ChecklistIcon,
};
