import React, { useState } from "react";
import styles from "../../styles/roundButton.module.scss";
import { ArrowNormal, ArrowHover } from "../../public/svg/Arrow";
const RoundButton: React.FC = () => {
  const [hovered, setHovered] = useState(false);
  const toggleHover: React.MouseEventHandler<HTMLDivElement> = () =>
    setHovered(!hovered);
  return (
    <div
      className={styles["roundButton-megaContainer"]}
      onMouseEnter={toggleHover}
      onMouseLeave={toggleHover}
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
      </div>
    </div>
  );
};

export default RoundButton;
