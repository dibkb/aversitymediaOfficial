import React, { useState } from "react";
import CtaText from "../src/components/CtaText";
import Budget from "../src/components/estimatecost/Budget";
import ContactForm from "../src/components/estimatecost/ContactForm";
import Work from "../src/components/estimatecost/Work";
import RoundButton from "../src/components/roundButton";
import styles from "../styles/EstimateCost.module.scss";
const Getstarted: React.FC = () => {
  const [slider, setSlider] = useState<number>(0);
  const incrementSlide = () => {
    setSlider((prev) => prev + 1);
  };
  const decrementSlide = () => {
    setSlider((prev) => prev - 1);
  };
  return (
    <div className={styles["EC-container"]}>
      <div className={styles["body"]}>
        {slider === 0 && <Work />}
        {slider === 1 && <Budget />}
        {slider === 2 && <ContactForm />}
      </div>
      <footer>
        {slider !== 0 && (
          <a
            href="#"
            className={styles["back-button"]}
            onClick={decrementSlide}
          >
            Go Back
          </a>
        )}
        {slider === 0 && <span className={styles["buffer"]}>buffer</span>}
        {slider === 2 && (
          <div className={styles["submit-container"]}>
            <CtaText arrow={false} tick={true} text="Submit Response" />
          </div>
        )}
        {slider !== 2 && (
          <div className={styles["arrow"]} onClick={incrementSlide}>
            <RoundButton />
          </div>
        )}
      </footer>
    </div>
  );
};

export default Getstarted;
