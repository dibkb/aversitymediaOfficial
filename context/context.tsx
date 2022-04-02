import React from "react";
import { formContext, formContextRoot } from "../types/Types";
export const formDefaultContext: formContext = {
  work: "",
  budget: null,
  contact: {
    name: null,
    email: null,
    number: "",
  },
};
const FormContext = React.createContext<formContextRoot | null>(null);
export default FormContext;
