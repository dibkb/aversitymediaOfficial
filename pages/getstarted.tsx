import React, { useState } from "react";
import Budget from "../src/components/estimatecost/Budget";
import ContactForm from "../src/components/estimatecost/ContactForm";
import Work from "../src/components/estimatecost/Work";
import RoundButton from "../src/components/roundButton";
import styles from "../styles/EstimateCost.module.scss";
const Getstarted: React.FC = () => {
  const [slider, setSlider] = useState<number>(0);
  return (
    <div className={styles["EC-container"]}>
      <body>
        {slider === 0 && <Work />}
        {slider === 1 && <Budget />}
        {slider === 2 && <ContactForm />}
      </body>
      <div className={styles["arrow"]} onClick={() => setSlider(2)}>
        {slider !== 2 && <RoundButton />}
      </div>
    </div>
  );
};

export default Getstarted;
