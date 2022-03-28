import React from "react";
import { formContext } from "../types/Types";
export const formDefaultContext: formContext = {
  work: null,
  budget: null,
  contact: {
    name: null,
    email: null,
    number: null,
  },
};
const FormContext = React.createContext({});
export default FormContext;
