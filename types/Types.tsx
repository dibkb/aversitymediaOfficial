export type pageurl =
  | ""
  | "getstarted"
  | "services"
  | "work"
  | "workflow"
  | "contact";
export type formBudget = "category-1" | "category-2" | "category-3" | null;
export interface NavLinkContainerProps {
  setShowNav: (value: boolean) => void;
  pageUrl: string;
}
export const WORK = {
  DESIGN: "DESIGN",
  DESIGN_AND_DEV: "DESIGN_AND_DEV",
};
export interface CtaTextProps {
  link: string | undefined | null;
  arrow: boolean;
  tick: boolean;
  text: string;
  animateTick: boolean;
}
export interface IconProp {
  fill: string | null;
}
export interface nameInputProp {
  nameError: boolean;
  nameInput: string;
  setNameInput: (input: string) => void;
  setNameError: (input: boolean) => void;
}
export interface emailInputProp {
  emailError: boolean;
  emailInput: string;
  setEmailInput: (input: string) => void;
  setEmailError: (input: boolean) => void;
}
export interface numberInputProp {
  numberError: boolean;
  numberInput: number | undefined;
  setNumberInput: (input: number) => void;
  setNumberError: (input: boolean) => void;
}
export type budgetInfoType = {
  id: formBudget;
  price: string;
}[];
export type formContext = {
  // work: "designOnly | designAndDev";
  work: string;
  budget: formBudget;
  contact: {
    name: string | null;
    email: string | null;
    number: number | "";
  };
};
export type formContextRoot = {
  formValue: formContext;
  setFormValue: (input: formContext) => void;
};
