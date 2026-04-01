export type NavItem = {
  label: string;
  href: string;
  type: "anchor" | "route";
  sectionId?: string;
};