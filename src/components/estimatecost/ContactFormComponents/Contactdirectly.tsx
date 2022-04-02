import Link from "next/link";
import React from "react";
// ===========styles==================
import styles from "../../../../styles/ContactForm.module.scss";
const Contactdirectly = () => {
  return (
    <div className={styles["contactDirectly--container"]}>
      <pre>OR</pre>
      <Link href={"/contact"}>
        <a href="#">Contact us directly</a>
      </Link>
    </div>
  );
};

export default Contactdirectly;
