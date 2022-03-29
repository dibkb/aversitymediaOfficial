import React, { createContext, useState } from "react";
import CtaText from "../src/components/CtaText";
import { Budget } from "../src/components/estimatecost/Budget";
import ContactForm from "../src/components/estimatecost/ContactForm";
import Work from "../src/components/estimatecost/Work";
import RoundButton from "../src/components/roundButton";
import styles from "../styles/EstimateCost.module.scss";
// ========setup context===================
import FormContext, { formDefaultContext } from "../context/context";
const Getstarted: React.FC = () => {
  const [slider, setSlider] = useState<number>(0);
  const incrementSlide = () => {
    setSlider((prev) => prev + 1);
  };
  const decrementSlide = () => {
    setSlider((prev) => prev - 1);
  };
  const [formValue, setFormValue] = useState(formDefaultContext);
  console.log(formValue.work);
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
          {slider === 2 && <ContactForm />}
        </div>
        <footer>
          {slider !== 0 && (
            <a
              href="#"
              className={styles["back-button"]}
              onClick={decrementSlide}
            >
              Go Back
            </a>
          )}
          {slider === 0 && <span className={styles["buffer"]}>buffer</span>}
          {/* ================== next button =================== */}
          {slider === 2 && (
            <div className={styles["submit-container"]}>
              <CtaText arrow={false} tick={true} text="Submit Response" />
            </div>
          )}
          {slider === 1 && (
            <div
              className={styles["roundButtonContainer"]}
              onClick={incrementSlide}
            >
              <RoundButton />
            </div>
          )}
          {slider === 0 && (
            <>
              <div
                className={
                  formValue.work !== null
                    ? styles["roundButtonContainer"]
                    : styles["roundButtonContainer--disable "]
                }
                onClick={incrementSlide}
              >
                <RoundButton />
              </div>
            </>
          )}
          {/* ================== next button =================== */}
        </footer>
      </div>
    </FormContext.Provider>
  );
};

export default Getstarted;
