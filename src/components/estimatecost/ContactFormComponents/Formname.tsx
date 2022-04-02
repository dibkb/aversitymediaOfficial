import { motion } from "framer-motion";
import React, { useCallback, useContext, useEffect, useState } from "react";
import FormContext from "../../../../context/context";
import { textBox } from "../../../../public/animation";
import { User, WarningRound } from "../../../../public/svg/Icons";
// styles-------------
import styles from "../../../../styles/ContactForm.module.scss";
import { nameInputProp } from "../../../../types/Types";
import { validateName } from "../../../../utils/utils";
const Formname: React.FC<nameInputProp> = ({
  nameError,
  nameInput,
  setNameError,
  setNameInput,
}) => {
  const formContext: any = useContext(FormContext);
  const [state, setState] = useState<"normal" | "focus">("normal");
  useEffect(() => {
    if (nameInput.length > 0 && !validateName(nameInput)) {
      setNameError(true);
    } else if (nameInput.length !== 0) {
      setState("focus");
      setNameError(false);
    } else {
      setState("normal");
      setNameError(false);
    }
  }, [nameInput, setNameError]);
  useEffect(() => {
    formContext.setFormValue({
      ...formContext.formValue,
      contact: {
        ...formContext.formValue.contact,
        name: nameInput,
      },
    });
  }, [nameInput]);
  return (
    <motion.div
      variants={textBox}
      animate={state === "focus" ? "hover" : ""}
      className={styles[`formContainer---${nameError ? "error" : state}`]}
    >
      <div className={styles["label"]}>
        <span className={styles["icon"]}>
          <User fill={nameError ? "#E02828" : null} />
          <pre className={styles["label-text"]}>Name</pre>
        </span>
        <span className={styles["warning"]}>
          <WarningRound fill={nameError ? "#E02828" : "#ffffff"} />
        </span>
      </div>
      <div className={styles["input"]}>
        <input
          type="text"
          placeholder="John Doe"
          onChange={(e) => setNameInput(e.target.value)}
          value={nameInput}
          onFocus={() => setState("focus")}
          onBlur={() => setState("normal")}
        />
      </div>
    </motion.div>
  );
};

export default Formname;
