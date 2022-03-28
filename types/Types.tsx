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
export interface IconProp {
  fill: string | null;
}
export interface nameInputProp {
  nameInput: string;
  setNameInput: (input: string) => void;
  setNameError: (input: boolean) => void;
}
export interface emailInputProp {
  emailInput: string;
  setEmailInput: (input: string) => void;
  setEmailError: (input: boolean) => void;
}
export interface numberInputProp {
  numberInput: number | undefined;
  setNumberInput: (input: number) => void;
  setNumberError: (input: boolean) => void;
}
export type budgetInfoType = {
  id: formBudget;
  price: string;
}[];
export type formContext = {
  work: "designOnly | designAndDev" | null;
  budget: formBudget | null;
  contact: {
    name: string | null;
    email: string | null;
    number: number | null;
  };
};
