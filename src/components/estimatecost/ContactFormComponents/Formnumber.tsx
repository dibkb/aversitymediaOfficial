import { motion } from "framer-motion";
import React, { useCallback, useEffect, useState } from "react";
import FormContext from "../../../../context/context";
import { textBox } from "../../../../public/animation";
import { Whatsapp, WarningRound } from "../../../../public/svg/Icons";
// styles-------------
import styles from "../../../../styles/ContactForm.module.scss";
import { numberInputProp } from "../../../../types/Types";
const Fornumber: React.FC<numberInputProp> = ({
  numberInput,
  setNumberError,
  setNumberInput,
}) => {
  const formContext: any = React.useContext(FormContext);
  const [state, setState] = useState<"normal" | "focus" | "error">("normal");
  const updateInput = (input: any) => {
    if (String(input).length > 10) {
      setNumberInput(Number(String(input).slice(0, 10)));
      setState("normal");
    } else {
      setNumberInput(input);
    }
  };
  useEffect(() => {
    if (numberInput !== undefined)
      if (String(numberInput).length > 0 && String(numberInput)?.length < 10) {
        setState("error");
        setNumberError(true);
      } else if (String(numberInput).length !== 0) {
        setState("focus");
        setNumberError(false);
      } else {
        setState("normal");
        setNumberError(false);
      }
  }, [numberInput, setNumberError]);
  useEffect(() => {
    formContext.setFormValue({
      ...formContext.formValue,
      contact: {
        ...formContext.formValue.contact,
        number: numberInput,
      },
    });
  }, [numberInput]);
  const onFocus = useCallback(() => {
    if (state !== "error") {
      setState("focus");
    }
  }, [state]);
  const onBlur = useCallback(() => {
    if (state !== "error") {
      setState("normal");
    }
  }, [state]);
  return (
    <motion.div
      variants={textBox}
      animate={state === "focus" ? "hover" : ""}
      className={styles[`formContainer---${state}`]}
      onMouseOver={onFocus}
      onMouseOut={onBlur}
    >
      <div className={styles["label"]}>
        <span className={styles["icon"]}>
          <Whatsapp fill={state === "error" ? "#E02828" : null} />
          <pre className={styles["label-text"]}>WhatsApp Number</pre>
        </span>
        <span className={styles["warning"]}>
          <WarningRound fill={state === "error" ? "#E02828" : "#ffffff"} />
        </span>
      </div>
      <div className={styles["input-number"]}>
        <input
          type="number"
          placeholder="0123-456-789"
          value={numberInput}
          maxLength={10}
          onChange={(e) => updateInput(e.target.value)}
          onFocus={onFocus}
          onBlur={onBlur}
        />
      </div>
    </motion.div>
  );
};
export default Fornumber;
function useContext(FormContext: any): any {
  throw new Error("Function not implemented.");
}
