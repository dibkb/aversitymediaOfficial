import { motion } from "framer-motion";
import React, { useCallback, useContext, useEffect, useState } from "react";
import FormContext from "../../../../context/context";
import { textBox } from "../../../../public/animation";
import { Email, WarningRound } from "../../../../public/svg/Icons";
// styles-------------
import styles from "../../../../styles/ContactForm.module.scss";
import { emailInputProp } from "../../../../types/Types";
import { validateEmail } from "../../../../utils/utils";
const Formemail: React.FC<emailInputProp> = ({
  emailError,
  emailInput,
  setEmailError,
  setEmailInput,
}) => {
  const [state, setState] = useState<"normal" | "focus">("normal");
  const formContext: any = useContext(FormContext);
  useEffect(() => {
    if (emailInput.length > 0 && !validateEmail(emailInput)) {
      setEmailError(true);
    } else if (emailInput.length !== 0) {
      setState("focus");
      setEmailError(false);
    } else {
      setState("normal");
      setEmailError(false);
    }
  }, [emailInput, setEmailError]);
  useEffect(() => {
    formContext.setFormValue({
      ...formContext.formValue,
      contact: {
        ...formContext.formValue.contact,
        email: emailInput,
      },
    });
  }, [emailInput]);
  return (
    <motion.div
      variants={textBox}
      animate={state === "focus" ? "hover" : ""}
      className={styles[`formContainer---${emailError ? "error" : state}`]}
    >
      <div className={styles["label"]}>
        <span className={styles["icon"]}>
          <Email fill={emailError ? "#E02828" : null} />
          <pre className={styles["label-text"]}>Email</pre>
        </span>
        <span className={styles["warning"]}>
          <WarningRound fill={emailError ? "#E02828" : "#ffffff"} />
        </span>
      </div>
      <div className={styles["input"]}>
        <input
          type="text"
          placeholder="johndoe@mail.com"
          value={emailInput}
          onChange={(e) => setEmailInput(e.target.value)}
          onFocus={() => setState("focus")}
          onBlur={() => setState("normal")}
        />
      </div>
    </motion.div>
  );
};

export default Formemail;
