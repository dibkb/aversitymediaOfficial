import React from "react";
import styles from "../styles/Services.module.scss";
import artImage from "../public/assets/dizzy-multitasking.svg";
import devImage from "../public/assets/dizzy-web-design.svg";
import { ourServices } from "../public/content/ourservices";
import CtaText from "../src/components/CtaText";
import { body } from "../public/animation";
import { motion } from "framer-motion";
const services: React.FC = () => {
  return (
    <div className={styles["services__container"]}>
      <h1>Our Services</h1>
      <motion.main initial="initial" animate="services" variants={body}>
        <section className={styles["design"]}>
          <h3>1. UI/UX Design</h3>
          <img src={artImage.src} alt="artImage" />
          <div className={styles["content"]}>
            {ourServices["design"].map((para) => {
              return <p key={para.slice(3, 69)}>{para}</p>;
            })}
          </div>
        </section>
        <section className={styles["development"]}>
          <h3>2. Web Development</h3>
          <img src={devImage.src} alt="artImage" />
          <div className={styles["content"]}>
            {ourServices["development"].map((para) => {
              return <p key={para.slice(3, 69)}>{para}</p>;
            })}
          </div>
        </section>
      </motion.main>
      <footer>
        <CtaText
          text="Our Work"
          link={"/work"}
          arrow={false}
          tick={false}
          animateTick={false}
        />
        <CtaText
          text="Get Started with us"
          link={null}
          arrow={true}
          tick={true}
          animateTick={true}
        />
      </footer>
    </div>
  );
};

export default services;
