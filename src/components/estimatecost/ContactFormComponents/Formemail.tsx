import React, { useCallback, useEffect, useState } from "react";
import { Email, WarningRound } from "../../../../public/svg/Icons";
// styles-------------
import styles from "../../../../styles/ContactForm.module.scss";
import { emailInputProp } from "../../../../types/Types";
import { validateEmail } from "../../../../utils/utils";
const Formemail: React.FC<emailInputProp> = ({
  emailInput,
  setEmailError,
  setEmailInput,
}) => {
  const [state, setState] = useState<"normal" | "focus" | "error">("normal");
  useEffect(() => {
    if (emailInput.length > 0 && !validateEmail(emailInput)) {
      setState("error");
      setEmailError(true);
    } else if (emailInput.length !== 0) {
      setState("focus");
      setEmailError(false);
    } else {
      setState("normal");
      setEmailError(false);
    }
  }, [emailInput, setEmailError]);
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
          <Email fill={state === "error" ? "#E02828" : null} />
          <pre className={styles["label-text"]}>Email</pre>
        </span>
        <span className={styles["warning"]}>
          <WarningRound fill={state === "error" ? "#E02828" : "#ffffff"} />
        </span>
      </div>
      <div className={styles["input"]}>
        <input
          type="text"
          placeholder="johndoe@mail.com"
          value={emailInput}
          onChange={(e) => setEmailInput(e.target.value)}
          onFocus={onFocus}
          onBlur={onBlur}
        />
      </div>
    </div>
  );
};

export default Formemail;
