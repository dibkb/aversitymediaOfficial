import { motion } from "framer-motion";
import React from "react";
import { body } from "../public/animation";
import { InstagramIcon } from "../public/svg/Icons";
import styles from "../styles/Contact.module.scss";
const contact: React.FC = () => {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={body}
      className={styles["contactContainer"]}
    >
      <section>
        <h2>Address</h2>
        <p>Niz-Kadamoni boiragimoth</p>
        <p>DIbrugarh,assam</p>
      </section>
      <section>
        <h2>Contact No</h2>
        <a href="tel:6900904286" className={styles["phoneNumber"]}>
          +91 6900 904 286
        </a>
        <a href="tel:8822436250" className={styles["phoneNumber"]}>
          +91 8822 436 250
        </a>
      </section>
      <section>
        <h2>Email</h2>
        <p className={styles["email"]}>aversitymedia@gmail.com</p>
      </section>
      <section>
        <h2>Social</h2>
        <a
          className={styles["instagram"]}
          href="https://www.instagram.com/aversitymedia/?hl=en"
        >
          <InstagramIcon />
        </a>
      </section>
    </motion.div>
  );
};

export default contact;
