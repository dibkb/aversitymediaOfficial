import React from "react";
import errorMonster from "../public/assets/monster404.jpg";
import thinkEmoji from "../public/assets/thinkEmoji.svg";
import styles from "../styles/404.module.scss";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  errorMonsterAnimation,
  infoText,
  loveEmojiAnim,
} from "../public/animation";
const Custom404 = () => {
  return (
    <div className={styles["error__container"]}>
      <h3>Goolops ate the page.</h3>
      <section>
        <div>
          <p>Just Kidding !!!</p>
        </div>
        <div className={styles["emojiDiv"]}>
          <p>The URL dosen’t exists or something’s broken on our end.</p>
          <motion.img
            animate="animation"
            variants={loveEmojiAnim}
            src={thinkEmoji.src}
            alt="thinkEmoji"
            className={styles["emoji"]}
          />
        </div>
      </section>
      <motion.img
        animate="animation"
        variants={errorMonsterAnimation}
        src={errorMonster.src}
        alt="404Monster"
        className={styles["monster"]}
      />
      <footer>
        <Link href={"/"} passHref>
          <motion.a
            animate="animate"
            whileHover={"hover"}
            variants={infoText}
            className={styles["home"]}
          >
            Go Home
          </motion.a>
        </Link>
      </footer>
    </div>
  );
};

export default Custom404;
