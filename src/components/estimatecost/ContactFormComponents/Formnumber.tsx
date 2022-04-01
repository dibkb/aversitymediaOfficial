import { motion } from "framer-motion";
import React, { useCallback, useEffect, useState } from "react";
import FormContext from "../../../../context/context";
import { textBox } from "../../../../public/animation";
import { Whatsapp, WarningRound } from "../../../../public/svg/Icons";
// styles-------------
import styles from "../../../../styles/ContactForm.module.scss";
import { numberInputProp } from "../../../../types/Types";
const Fornumber: React.FC<numberInputProp> = ({
  numberError,
  numberInput,
  setNumberError,
  setNumberInput,
}) => {
  const formContext: any = React.useContext(FormContext);
  const [state, setState] = useState<"normal" | "focus">("normal");
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
  return (
    <motion.div
      variants={textBox}
      animate={state === "focus" ? "hover" : ""}
      className={styles[`formContainer---${numberError ? "error" : state}`]}
    >
      <div className={styles["label"]}>
        <span className={styles["icon"]}>
          <Whatsapp fill={numberError ? "#E02828" : null} />
          <pre className={styles["label-text"]}>WhatsApp Number</pre>
        </span>
        <span className={styles["warning"]}>
          <WarningRound fill={numberError ? "#E02828" : "#ffffff"} />
        </span>
      </div>
      <div className={styles["input-number"]}>
        <input
          type="number"
          placeholder="0123-456-789"
          value={numberInput}
          maxLength={10}
          onChange={(e) => updateInput(e.target.value)}
          onFocus={() => setState("focus")}
          onBlur={() => setState("normal")}
        />
      </div>
    </motion.div>
  );
};
export default Fornumber;
