import React, { useEffect, useState } from "react";
import CtaText from "../CtaText";
import RoundButton from "../roundButton";
import styles from "../../../styles/EstimateCost.module.scss";
import { formContext } from "../../../types/Types";
import { sliderValue } from "../../../pages/getstarted";
import { motion } from "framer-motion";
import { infoText } from "../../../public/animation";
import {
  collection,
  addDoc,
  serverTimestamp,
  setDoc,
  doc,
} from "firebase/firestore";
import { db } from "../../../pages/api/firebase-config";
import Router from "next/router";
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
  console.log(formValue);
  const submitForm = async () => {
    const usersCollectionRef = collection(db, "test field");
    if (validateSubmit) {
      console.log(usersCollectionRef);
      const res = await addDoc(usersCollectionRef, {
        ...formValue,
        time: serverTimestamp(),
      });
      console.log(res);
      if (res) {
        Router.push("/thankyou");
      }
    }
  };
  return (
    <footer>
      {slider !== 0 && (
        <motion.a
          animate="animate"
          whileHover={"hover"}
          variants={infoText}
          href="#"
          className={styles["back-button"]}
          onClick={decrementSlide}
        >
          Go Back
        </motion.a>
      )}
      {slider === 0 && <span className={styles["buffer"]}>buffer</span>}
      {/* ================== next button =================== */}
      {slider === 2 && (
        <div
          onClick={submitForm}
          className={
            validateSubmit
              ? styles["submit-container"]
              : styles["submit-container--disable"]
          }
        >
          <CtaText
            link={null}
            animateTick={validateSubmit}
            arrow={false}
            tick={true}
            text="Submit Response"
          />
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
          <RoundButton animateArrow={formValue.budget !== null} />
        </div>
      )}
      {slider === 0 && (
        <>
          <div
            className={
              formValue.work !== ""
                ? styles["roundButtonContainer"]
                : styles["roundButtonContainer--disable"]
            }
            onClick={incrementSlide}
          >
            <RoundButton animateArrow={formValue.work !== null} />
          </div>
        </>
      )}
      {/* ================== next button =================== */}
    </footer>
  );
};

export default GetStartedFooter;
