import React, { createContext, useState } from "react";
import { Budget } from "../src/components/estimatecost/Budget";
import ContactForm from "../src/components/estimatecost/ContactForm";
import Work from "../src/components/estimatecost/Work";
import styles from "../styles/EstimateCost.module.scss";
// ========setup context===================
import FormContext, { formDefaultContext } from "../context/context";
import GetStartedFooter from "../src/components/estimatecost/GetStartedFooter";
import { formContext } from "../types/Types";
export type sliderValue = 0 | 1 | 2;
const Getstarted: React.FC = () => {
  const [nameError, setNameError] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<boolean>(false);
  const [numberError, setNumberError] = useState<boolean>(false);
  const [slider, setSlider] = useState<sliderValue>(0);
  const [formValue, setFormValue] = useState<formContext>(formDefaultContext);
  return (
    <FormContext.Provider
      value={{
        formValue: formValue,
        setFormValue: setFormValue,
      }}
    >
      <div className={styles["EC-container"]}>
        <div className={styles["body"]}>
          {slider === 0 && <Work />}
          {slider === 1 && <Budget />}
          {slider === 2 && (
            <ContactForm
              nameError={nameError}
              emailError={emailError}
              numberError={numberError}
              setNameError={setNameError}
              setEmailError={setEmailError}
              setNumberError={setNumberError}
            />
          )}
        </div>
        <GetStartedFooter
          formValue={formValue}
          slider={slider}
          setSlider={setSlider}
          nameError={nameError}
          emailError={emailError}
          numberError={numberError}
        />
      </div>
    </FormContext.Provider>
  );
};

export default Getstarted;
