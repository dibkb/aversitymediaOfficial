export interface PageUrl {
  pageurl: "" | "getstarted" | "services" | "work" | "workflow" | "contact";
}
export type pageurl =
  | ""
  | "getstarted"
  | "services"
  | "work"
  | "workflow"
  | "contact";
export interface NavLinkContainerProps {
  setShowNav: (value: boolean) => void;
  pageUrl: string;
}
