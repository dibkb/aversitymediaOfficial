import React, { createContext, useContext, useState } from "react";
import { Lock } from "../../../public/svg/Icons";
// ------------styles-----------
import styles from "../../../styles/ContactForm.module.scss";
import Contactdirectly from "./ContactFormComponents/Contactdirectly";
import Formemail from "./ContactFormComponents/Formemail";
import Formname from "./ContactFormComponents/Formname";
import Fornumber from "./ContactFormComponents/Formnumber";
const ContactForm: React.FC = () => {
  const [nameError, setNameError] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<boolean>(false);
  const [numberError, setNumberError] = useState<boolean>(false);
  // ================ Input =====================
  const [nameInput, setNameInput] = useState<string>("");
  const [emailInput, setEmailInput] = useState<string>("");
  const [numberInput, setNumberInput] = useState<number>();
  return (
    <div className={styles["contactFormContainer"]}>
      <h1>My Contact info</h1>
      <main>
        <Formname
          nameInput={nameInput}
          setNameInput={setNameInput}
          setNameError={setNameError}
        />
        <Formemail
          emailInput={emailInput}
          setEmailError={setEmailError}
          setEmailInput={setEmailInput}
        />
        <Fornumber
          numberInput={numberInput}
          setNumberInput={setNumberInput}
          setNumberError={setNumberError}
        />
        <Contactdirectly />
      </main>
      <div className={styles["caution-container"]}>
        <pre className={nameError ? styles["visible"] : styles["invisible"]}>
          “{nameInput}” dosen&apos;t look like a VALID name.
        </pre>
        <pre className={emailError ? styles["visible"] : styles["invisible"]}>
          “{emailInput}” is not a VALID email address.
        </pre>
        <pre className={numberError ? styles["visible"] : styles["invisible"]}>
          “{numberInput}” is not a VALID phone number.
        </pre>
      </div>
      <div className={styles["privacy-assurance"]}>
        <Lock />
        <pre>We won’t share your personal information with anyone.</pre>
      </div>
    </div>
  );
};

export default ContactForm;
