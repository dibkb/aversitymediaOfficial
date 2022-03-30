import React, { useCallback, useContext, useEffect, useState } from "react";
import FormContext from "../../../../context/context";
import { User, WarningRound } from "../../../../public/svg/Icons";
// styles-------------
import styles from "../../../../styles/ContactForm.module.scss";
import { nameInputProp } from "../../../../types/Types";
import { validateName } from "../../../../utils/utils";
const Formname: React.FC<nameInputProp> = ({
  nameInput,
  setNameError,
  setNameInput,
}) => {
  const formContext: any = useContext(FormContext);
  const [state, setState] = useState<"normal" | "focus" | "error">("normal");
  useEffect(() => {
    if (nameInput.length > 0 && validateName(nameInput)) {
      setState("error");
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
    <div className={styles[`formContainer---${state}`]}>
      <div className={styles["label"]}>
        <span className={styles["icon"]}>
          <User fill={state === "error" ? "#E02828" : null} />
          <pre className={styles["label-text"]}>Name</pre>
        </span>
        <span className={styles["warning"]}>
          <WarningRound fill={state === "error" ? "#E02828" : "#ffffff"} />
        </span>
      </div>
      <div className={styles["input"]}>
        <input
          type="text"
          placeholder="John Doe"
          onChange={(e) => setNameInput(e.target.value)}
          onFocus={onFocus}
          onBlur={onBlur}
        />
      </div>
    </div>
  );
};

export default Formname;
