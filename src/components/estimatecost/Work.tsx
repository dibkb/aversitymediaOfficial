import React, { useCallback, useContext, useEffect, useState } from "react";
// import images
import UIUX from "../../../public/assets/UIUX.svg";
import UIUXHover from "../../../public/assets/UIUX-hover.svg";
import Dev from "../../../public/assets/Dev.svg";
import DevHover from "../../../public/assets/Dev-hover.svg";
import styles from "../../../styles/EstimateCost.module.scss";
import FormContext from "../../../context/context";
const Work: React.FC = () => {
  const formContext = useContext(FormContext);
  const [uiuxActive, setUiUxActive] = useState<boolean>(false);
  const [devActive, setDevActive] = useState<boolean>(false);
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
          <div className={styles["image-Container"]}>
            <img
              src={uiuxActive ? UIUXHover.src : UIUX.src}
              alt="uiux-normal"
            />
          </div>
          <pre>UI/UX Design</pre>
        </section>
        <section
          className={devActive ? styles["--active"] : ""}
          onClick={selectDev}
        >
          <div className={styles["image-Container"]}>
            <img src={devActive ? DevHover.src : Dev.src} alt="dev-normal" />
          </div>
          <pre>UI/UX and Development</pre>
        </section>
      </main>
      <a href="#" className={styles["know-more-link"]}>
        Know about our services in detail
      </a>
    </div>
  );
};

export default Work;
