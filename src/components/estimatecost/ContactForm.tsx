import React from "react";
import { Lock } from "../../../public/svg/Icons";
// ------------styles-----------
import styles from "../../../styles/ContactForm.module.scss";
import CtaText from "../CtaText";
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
        <Formname />
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
      <a href="#" className={styles["back-button"]}>
        Go Back
      </a>
      <div className={styles["submit-container"]}>
        <CtaText arrow={false} tick={true} text="Submit Response" />
      </div>
    </div>
  );
};

export default ContactForm;
