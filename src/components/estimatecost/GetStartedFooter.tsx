import React, { useEffect, useState } from "react";
import CtaText from "../CtaText";
import RoundButton from "../roundButton";
import styles from "../../../styles/EstimateCost.module.scss";
import { formContext } from "../../../types/Types";
import { sliderValue } from "../../../pages/getstarted";
export type GetStartedFooterProps = {
  formValue: formContext;
  slider: sliderValue;
  nameError: boolean;
  emailError: boolean;
  numberError: boolean;
  setSlider: (input: any) => void;
};
const GetStartedFooter: React.FC<GetStartedFooterProps> = ({
  formValue,
  slider,
  setSlider,
  nameError,
  emailError,
  numberError,
}) => {
  const incrementSlide = () => {
    setSlider((prev: sliderValue) => prev + 1);
  };
  const decrementSlide = () => {
    setSlider((prev: sliderValue) => prev - 1);
  };
  const [validateSubmit, setValidateSubmit] = useState<boolean>(false);
  useEffect(() => {
    if (
      nameError === false &&
      emailError === false &&
      numberError === false &&
      formValue.contact.email &&
      formValue.contact.name &&
      formValue.contact.number
    ) {
      setValidateSubmit(true);
    } else {
      setValidateSubmit(false);
    }
  }, [nameError, emailError, numberError, formValue]);
  return (
    <footer>
      {slider !== 0 && (
        <a href="#" className={styles["back-button"]} onClick={decrementSlide}>
          Go Back
        </a>
      )}
      {slider === 0 && <span className={styles["buffer"]}>buffer</span>}
      {/* ================== next button =================== */}
      {slider === 2 && (
        <div
          className={
            validateSubmit
              ? styles["submit-container"]
              : styles["submit-container--disable"]
          }
        >
          <CtaText arrow={false} tick={true} text="Submit Response" />
        </div>
      )}
      {slider === 1 && (
        <div
          className={
            formValue.budget !== null
              ? styles["roundButtonContainer"]
              : styles["roundButtonContainer--disable"]
          }
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
                : styles["roundButtonContainer--disable"]
            }
            onClick={incrementSlide}
          >
            <RoundButton />
          </div>
        </>
      )}
      {/* ================== next button =================== */}
    </footer>
  );
};

export default GetStartedFooter;