import Link from "next/link";
import React from "react";
import { Arrow, Tick } from "../../public/assets/Icons";
import styles from "../../styles/Home.module.scss";
import { CtaTextProps } from "../../types/Types";

const CtaText: React.FC<CtaTextProps> = ({ arrow, tick, text }) => {
  return (
    <div className={styles["textContainer"]}>
      <div className={styles["cta"]}>
        <Link href="/getstarted">{text}</Link>
        {tick && (
          <pre className={styles["tick"]}>
            <Tick />
          </pre>
        )}
      </div>
      {arrow && (
        <pre className={styles["arrow"]}>
          <Arrow />
        </pre>
      )}
    </div>
  );
};

export default CtaText;
