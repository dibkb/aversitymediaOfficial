import React, { useState } from "react";
import styles from "../../styles/roundButton.module.scss";
import { ArrowNormal, ArrowHover } from "../../public/svg/Arrow";
import { motion } from "framer-motion";
import { roundButtonContainerArrow } from "../../public/animation";
export type RoundButtonProp = {
  // marginBottom: React.CSSProperties | null;
  animateArrow: boolean;
};
const RoundButton: React.FC<RoundButtonProp> = ({ animateArrow }) => {
  const [hovered, setHovered] = useState<boolean>(false);
  return (
    <div
      className={styles["roundButton-megaContainer"]}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className={styles["roundButton-Container"]}>
        <div className={styles["circle-Container"]}>
          <span className={styles["circle-outer"]}></span>
          <span
            className={
              hovered ? styles["circle-inner-hover"] : styles["circle-inner"]
            }
          ></span>
        </div>
        <motion.span
          animate={animateArrow && "animate"}
          variants={roundButtonContainerArrow}
          className={styles["arrow"]}
        >
          {hovered ? <ArrowHover /> : <ArrowNormal />}
        </motion.span>
        <span className={styles["arrow-invisible"]}>
          {hovered ? <ArrowHover /> : <ArrowNormal />}
        </span>
      </div>
    </div>
  );
};

export default RoundButton;
