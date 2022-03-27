import React, { useCallback, useEffect, useState } from "react";
import { User, WarningRound } from "../../../../public/svg/Icons";
// styles-------------
import styles from "../../../../styles/ContactForm.module.scss";
const Formname: React.FC = () => {
  const [state, setState] = useState<"normal" | "focus" | "error">("normal");
  const [nameInput, setNameInput] = useState<string>("");
  useEffect(() => {
    if (nameInput.length > 0) {
      setState("error");
    } else if (nameInput.length !== 0) {
      setState("focus");
    } else {
      setState("normal");
    }
  }, [nameInput]);
  const onFocus = useCallback(() => {
    if (state !== "error") {
      setState("focus");
    }
  }, [state]);
  const onBlur = useCallback(() => {
    console.log("first");
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
