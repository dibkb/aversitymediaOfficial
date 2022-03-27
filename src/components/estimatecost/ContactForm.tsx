import React from "react";
import { Lock } from "../../../public/svg/Icons";
// ------------styles-----------
import styles from "../../../styles/ContactForm.module.scss";
import CtaText from "../CtaText";
import Contactdirectly from "./ContactFormComponents/Contactdirectly";
import Formemail from "./ContactFormComponents/Formemail";
import Formname from "./ContactFormComponents/Formname";
import Fornumber from "./ContactFormComponents/Formnumber";
const ContactForm: React.FC = () => {
  return (
    <div className={styles["contactFormContainer"]}>
      <h1>My Contact info</h1>
      <main>
        <Formname />
        <Formemail />
        <Fornumber />
        <Contactdirectly />
      </main>
      <div className={styles["caution-container"]}>
        <pre>“crazyswine@@mail.com” is not a VALID email address.</pre>
        <pre>“crazyswine@@mail.com” is not a VALID email address.</pre>
        <pre>“crazyswine@@mail.com” is not a VALID email address.</pre>
      </div>
      <div className={styles["privacy-assurance"]}>
        <Lock />
        <pre>We won’t share your personal information with anyone.</pre>
      </div>
    </div>
  );
};

export default ContactForm;
