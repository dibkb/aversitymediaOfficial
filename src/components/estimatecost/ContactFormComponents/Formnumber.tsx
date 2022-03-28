import React, { useCallback, useEffect, useState } from "react";
import { Whatsapp, WarningRound } from "../../../../public/svg/Icons";
// styles-------------
import styles from "../../../../styles/ContactForm.module.scss";
import { numberInputProp } from "../../../../types/Types";
const Fornumber: React.FC<numberInputProp> = ({
  numberInput,
  setNumberError,
  setNumberInput,
}) => {
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
  const onFocus = () => {
    if (state !== "error") {
      setState("focus");
    }
  };
  const onBlur = () => {
    if (state !== "error") {
      setState("normal");
    }
  };
  return (
    <div
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
    </div>
  );
};
export default Fornumber;
