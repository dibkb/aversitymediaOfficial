import React from "react";
import styles from "../styles/Thankyou.module.scss";
import loveEmoji from "../public/assets/love.svg";
import ape from "../public/assets/app.svg";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  loveEmojiAnim,
  infoText,
  astroApeAnimation,
} from "../public/animation";
const thankyou: React.FC = () => {
  return (
    <div className={styles["thankyou__container"]}>
      <h1>Your response has been recorded.</h1>
      <div>
        <p>Our team will reach out to you shortly</p>
        <motion.img
          animate="animation"
          variants={loveEmojiAnim}
          src={loveEmoji.src}
          alt="loveEyesEmoji"
          className={styles["emoji"]}
        />
      </div>
      <motion.img
        animate="animation"
        variants={astroApeAnimation}
        src={ape.src}
        alt="astro-ape"
        className={styles["ape"]}
      />
      <Link href={"/"}>
        <motion.a
          animate="animate"
          whileHover={"hover"}
          variants={infoText}
          className={styles["home"]}
        >
          Go Home
        </motion.a>
      </Link>
    </div>
  );
};

export default thankyou;
