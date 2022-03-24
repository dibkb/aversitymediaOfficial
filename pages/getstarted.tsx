import React, { useState } from "react";
import Work from "../src/components/estimatecost/Work";
import styles from "../styles/EstimateCost.module.scss";
const Getstarted: React.FC = () => {
  const [slider, setSlider] = useState<number>(0);
  return (
    <div className={styles["EC-container"]}>{slider === 0 && <Work />}</div>
  );
};

export default Getstarted;
