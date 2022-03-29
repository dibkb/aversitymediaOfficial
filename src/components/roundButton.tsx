import React, { useState } from "react";
import styles from "../../styles/roundButton.module.scss";
import { ArrowNormal, ArrowHover } from "../../public/svg/Arrow";
export type RoundButtonProp = {
  marginBottom: React.CSSProperties | null;
};
const RoundButton: React.FC = () => {
  const [hovered, setHovered] = useState(false);
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
        <span className={styles["arrow"]}>
          {hovered ? <ArrowHover /> : <ArrowNormal />}
        </span>
        <span className={styles["arrow-invisible"]}>
          {hovered ? <ArrowHover /> : <ArrowNormal />}
        </span>
      </div>
    </div>
  );
};

export default RoundButton;
