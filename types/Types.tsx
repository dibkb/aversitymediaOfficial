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
export interface CtaTextProps {
  arrow: boolean;
  tick: boolean;
  text: string;
}
