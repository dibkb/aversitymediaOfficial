import { motion } from "framer-motion";
import React from "react";
import { body } from "../public/animation";
import { Guarantee } from "../public/svg/Icons";
import CtaText from "../src/components/CtaText";
import styles from "../styles/GetStarted.module.scss";
const workflow: React.FC = () => {
  return (
    <div className={styles["getStartedContainer"]}>
      <h3>Our Project Workflow</h3>
      <motion.main
        initial="initial"
        animate="animate"
        variants={body}
        className={styles["body"]}
      >
        <section>
          <aside className={styles["left"]}></aside>
          <aside className={styles["right"]}>
            <p className={styles["points"]}>You submit your response</p>
            <p className={styles["points"]}>
              we will contact you and understand your requiremnets
            </p>
          </aside>
        </section>
        <section>
          <aside className={styles["left"]}></aside>
          <aside className={styles["right"]}>
            <p className={styles["points"]}>
              We will discuss our planned project structure with you
            </p>
            <p className={styles["points"]}>WE will deliver as promised</p>
          </aside>
        </section>
      </motion.main>
      <footer>
        <CtaText
          link=""
          animateTick={false}
          arrow={true}
          tick={false}
          text="Get Started with us"
        />
        <CtaText
          link={"contact"}
          animateTick={true}
          arrow={false}
          tick={true}
          text="Contact Us"
        />
      </footer>
      <div className={styles["tagline"]}>
        <pre>
          <Guarantee />
        </pre>
        <p>100% money back guaranteed if not delivered as proposed.</p>
      </div>
    </div>
  );
};

export default workflow;
