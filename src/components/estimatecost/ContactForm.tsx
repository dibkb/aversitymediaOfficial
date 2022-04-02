import { motion } from "framer-motion";
import React, { createContext, useContext, useState } from "react";
import FormContext from "../../../context/context";
import { warningText } from "../../../public/animation";
import { Lock } from "../../../public/svg/Icons";
// ------------styles-----------
import styles from "../../../styles/ContactForm.module.scss";
import Contactdirectly from "./ContactFormComponents/Contactdirectly";
import Formemail from "./ContactFormComponents/Formemail";
import Formname from "./ContactFormComponents/Formname";
import Fornumber from "./ContactFormComponents/Formnumber";
export type ContactFormProps = {
  nameError: boolean;
  emailError: boolean;
  numberError: boolean;
  setNameError: (input: boolean) => void;
  setEmailError: (input: boolean) => void;
  setNumberError: (input: boolean) => void;
};

const ContactForm: React.FC<ContactFormProps> = ({
  nameError,
  emailError,
  numberError,
  setNameError,
  setEmailError,
  setNumberError,
}) => {
  const formContext = useContext(FormContext);
  // ================ Input =====================
  const [nameInput, setNameInput] = useState<string>(
    formContext!.formValue!.contact["name"] !== null
      ? formContext!.formValue!.contact["name"]
      : ""
  );
  const [emailInput, setEmailInput] = useState<string>(
    formContext!.formValue!.contact["email"] !== null
      ? formContext!.formValue!.contact["email"]
      : ""
  );
  const [numberInput, setNumberInput] = useState<number | "">(
    formContext!.formValue!.contact["number"] !== ""
      ? Number(formContext!.formValue!.contact["number"])
      : ""
  );
  return (
    <div className={styles["contactFormContainer"]}>
      <h1>My Contact info</h1>
      <main>
        <Formname
          nameInput={nameInput}
          setNameInput={setNameInput}
          setNameError={setNameError}
          nameError={nameError}
        />
        <Formemail
          emailInput={emailInput}
          setEmailError={setEmailError}
          setEmailInput={setEmailInput}
          emailError={emailError}
        />
        <Fornumber
          numberInput={numberInput}
          setNumberInput={setNumberInput}
          setNumberError={setNumberError}
          numberError={numberError}
        />
        <Contactdirectly />
      </main>
      <div className={styles["caution-container"]}>
        <motion.pre
          animate="animate"
          variants={warningText}
          className={nameError ? styles["visible"] : styles["invisible"]}
        >
          “{nameInput}” dosen&apos;t look like a VALID name.
        </motion.pre>
        <motion.pre
          animate="animate"
          variants={warningText}
          className={emailError ? styles["visible"] : styles["invisible"]}
        >
          “{emailInput}” is not a VALID email address.
        </motion.pre>
        <motion.pre
          animate="animate"
          variants={warningText}
          className={numberError ? styles["visible"] : styles["invisible"]}
        >
          “{numberInput}” is not a VALID phone number.
        </motion.pre>
      </div>
      <div className={styles["privacy-assurance"]}>
        <Lock />
        <pre>We won’t share your personal information with anyone.</pre>
      </div>
    </div>
  );
};

export default ContactForm;
