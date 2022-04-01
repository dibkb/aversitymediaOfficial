import React, { useCallback, useContext, useState } from "react";
import { motion } from "framer-motion";
// import images
import UIUX from "../../../public/assets/UIUX.svg";
import UIUXHover from "../../../public/assets/UIUX-hover.svg";
import Dev from "../../../public/assets/Dev.svg";
import DevHover from "../../../public/assets/Dev-hover.svg";
import styles from "../../../styles/EstimateCost.module.scss";
import FormContext from "../../../context/context";
import {
  infoText,
  workDesignContainer,
  workDevContainer,
} from "../../../public/animation";
const Work: React.FC = () => {
  const formContext = useContext(FormContext);
  const [uiuxActive, setUiUxActive] = useState<boolean>(
    formContext.formValue.work === "designOnly" ? true : false
  );
  const [devActive, setDevActive] = useState<boolean>(
    formContext.formValue.work === "designAndDev" ? true : false
  );
  const selectUi = useCallback(() => {
    setUiUxActive(true);
    setDevActive(false);
    formContext.setFormValue({
      ...formContext.formValue,
      work: "designOnly",
    });
  }, [setUiUxActive, setDevActive, formContext]);
  const selectDev = useCallback(() => {
    setUiUxActive(false);
    setDevActive(true);
    formContext.setFormValue({
      ...formContext.formValue,
      work: "designAndDev",
    });
  }, [setUiUxActive, setDevActive, formContext]);
  return (
    <div className={styles["work-sub-Container"]}>
      <h1>I am here for</h1>
      <main>
        <section
          className={uiuxActive ? styles["--active"] : ""}
          onClick={selectUi}
        >
          <motion.div
            variants={workDesignContainer}
            animate="static"
            whileHover="hover"
            whileTap="click"
            className={styles["image-Container"]}
          >
            <img
              src={uiuxActive ? UIUXHover.src : UIUX.src}
              alt="uiux-normal"
            />
          </motion.div>
          <motion.pre
            animate={
              uiuxActive
                ? workDesignContainer.textActive
                : workDesignContainer.textNormal
            }
          >
            UI/UX Design
          </motion.pre>
        </section>
        <section
          className={devActive ? styles["--active"] : ""}
          onClick={selectDev}
        >
          <motion.div
            animate="static"
            variants={workDevContainer}
            whileHover="hover"
            whileTap="click"
            className={styles["image-Container"]}
          >
            <img src={devActive ? DevHover.src : Dev.src} alt="dev-normal" />
          </motion.div>
          <motion.pre
            animate={
              devActive
                ? workDevContainer.textActive
                : workDevContainer.textNormal
            }
          >
            UI/UX and Development
          </motion.pre>
        </section>
      </main>
      <motion.a
        href="#"
        whileHover={"hover"}
        variants={infoText}
        className={styles["know-more-link"]}
      >
        Know about our services in detail
      </motion.a>
    </div>
  );
};

export default Work;
