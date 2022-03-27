import React, { useCallback, useEffect, useState } from "react";
import { Whatsapp, WarningRound } from "../../../../public/svg/Icons";
// styles-------------
import styles from "../../../../styles/ContactForm.module.scss";
const Fornumber: React.FC = () => {
  const [numberinput, setNumberInput] = useState<number>();
  const [focus, setFocus] = useState<boolean>(false);
  const updateInput = (input: any) => {
    if (String(input).length > 10) {
      setNumberInput(Number(String(input).slice(0, 10)));
      setFocus(false);
    } else {
      setNumberInput(input);
    }
  };
  return (
    <div
      className={
        focus ? styles["formContainer---focus"] : styles["formContainer"]
      }
    >
      <div className={styles["label"]}>
        <span className={styles["icon"]}>
          <Whatsapp />
          <pre className={styles["label-text"]}>WhatsApp Number</pre>
        </span>
        <span className={styles["warning"]}>
          <WarningRound />
        </span>
      </div>
      <div className={styles["input-number"]}>
        <input
          type="number"
          placeholder="0123-456-789"
          value={numberinput}
          maxLength={10}
          onChange={(e) => updateInput(e.target.value)}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
        />
      </div>
    </div>
  );
};
export default Fornumber;
