import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import { ctaText } from "../../public/animation";
import { Arrow, Tick } from "../../public/assets/Icons";
import styles from "../../styles/Home.module.scss";
import { CtaTextProps } from "../../types/Types";

const CtaText: React.FC<CtaTextProps> = ({
  link,
  arrow,
  tick,
  text,
  animateTick,
}) => {
  return (
    <div className={styles["textContainer"]}>
      <div className={styles["cta"]}>
        <Link href={link ? link : "/getstarted"}>{text}</Link>
        {tick && (
          <motion.pre
            animate={animateTick && "tick"}
            variants={ctaText}
            className={styles["tick"]}
          >
            <Tick />
          </motion.pre>
        )}
      </div>
      {arrow && (
        <motion.pre
          animate={"arrow"}
          variants={ctaText}
          className={styles["arrow"]}
        >
          <Arrow />
        </motion.pre>
      )}
    </div>
  );
};

export default CtaText;
