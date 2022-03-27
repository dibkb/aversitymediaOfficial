export type pageurl =
  | ""
  | "getstarted"
  | "services"
  | "work"
  | "workflow"
  | "contact";
export type formBudget = "category-1" | "category-2" | "category-3";
export interface NavLinkContainerProps {
  setShowNav: (value: boolean) => void;
  pageUrl: string;
}
export interface CtaTextProps {
  arrow: boolean;
  tick: boolean;
  text: string;
}
export type budgetInfoType = {
  id: formBudget;
  price: string;
}[];
