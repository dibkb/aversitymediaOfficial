import React, { useState } from "react";
import { Email, WarningRound } from "../../../../public/svg/Icons";
// styles-------------
import styles from "../../../../styles/ContactForm.module.scss";
const Formemail: React.FC = () => {
  const [focus, setFocus] = useState<boolean>(false);
  return (
    <div
      className={
        focus ? styles["formContainer---focus"] : styles["formContainer"]
      }
    >
      <div className={styles["label"]}>
        <span className={styles["icon"]}>
          <Email />
          <pre className={styles["label-text"]}>Email</pre>
        </span>
        <span className={styles["warning"]}>
          <WarningRound />
        </span>
      </div>
      <div className={styles["input"]}>
        <input
          type="text"
          placeholder="johndoe@mail.com"
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
        />
      </div>
    </div>
  );
};

export default Formemail;
