import React, { useState } from "react";
// import images
import UIUX from "../../../public/assets/UIUX.svg";
import UIUXHover from "../../../public/assets/UIUX-hover.svg";
import Dev from "../../../public/assets/Dev.svg";
import DevHover from "../../../public/assets/Dev-hover.svg";
import styles from "../../../styles/EstimateCost.module.scss";
import RoundButton from "../roundButton";
const Work: React.FC = () => {
  const [uiuxHovered, setUiUxHovered] = useState<boolean>(false);
  const toggleUiUxHover: React.MouseEventHandler<HTMLDivElement> = () =>
    setUiUxHovered(!uiuxHovered);
  const [devHovered, setDevHovered] = useState<boolean>(false);
  const toggleDevHover: React.MouseEventHandler<HTMLDivElement> = () =>
    setDevHovered(!devHovered);
  return (
    <div className={styles["work-sub-Container"]}>
      <h1>I am here for</h1>
      <main>
        <section>
          <div
            className={styles["image-Container"]}
            onMouseEnter={toggleUiUxHover}
            onMouseLeave={toggleUiUxHover}
          >
            <img
              src={uiuxHovered ? UIUXHover.src : UIUX.src}
              alt="uiux-normal"
            />
          </div>
          <pre>UI/UX Design</pre>
        </section>
        <section onMouseEnter={toggleDevHover} onMouseLeave={toggleDevHover}>
          <div className={styles["image-Container"]}>
            <img src={devHovered ? DevHover.src : Dev.src} alt="dev-normal" />
          </div>
          <pre>UI/UX and Development</pre>
        </section>
      </main>
      <a href="#" className={styles["know-more-link"]}>
        Know about our services in detail
      </a>
      <div className={styles["arrow"]}>
        <RoundButton />
      </div>
    </div>
  );
};

export default Work;
