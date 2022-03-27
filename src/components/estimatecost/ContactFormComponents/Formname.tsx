import React, { useState } from "react";
import { User, WarningRound } from "../../../../public/svg/Icons";
// styles-------------
import styles from "../../../../styles/ContactForm.module.scss";
const Formname: React.FC = () => {
  const [focus, setFocus] = useState<boolean>(false);
  return (
    <div
      className={
        focus ? styles["formContainer---focus"] : styles["formContainer"]
      }
    >
      <div className={styles["label"]}>
        <span className={styles["icon"]}>
          <User />
          <pre className={styles["label-text"]}>Name</pre>
        </span>
        <span className={styles["warning"]}>
          <WarningRound />
        </span>
      </div>
      <div className={styles["input"]}>
        <input
          type="text"
          placeholder="John Doe"
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
        />
      </div>
    </div>
  );
};

export default Formname;
