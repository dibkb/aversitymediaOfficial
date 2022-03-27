import React, { useState } from "react";
import { Warning } from "../../../public/svg/Icons";
//---------------------  styles --------------------
import styles from "../../../styles/EstimateCost.module.scss";
import { formBudget } from "../../../types/Types";
import { CheckBoxEmpty, CheckBoxTick } from "../CheckBoxes";
import { budgetInfo } from "./Budgetinfo";
const Budget: React.FC = () => {
  const [budget, setBudget] = useState<formBudget>(
    "category-1" || "category-2" || "category-3"
  );
  return (
    <div className={styles["budget-subContainer"]}>
      <h1>My budget is</h1>
      <main>
        {budgetInfo.map((item) => {
          return (
            <div key={item.id} onClick={() => setBudget(item.id)}>
              <span>
                {budget === item.id ? <CheckBoxTick /> : <CheckBoxEmpty />}
              </span>
              <pre>{item.price}</pre>
            </div>
          );
        })}
      </main>
      <div className={styles["caution"]}>
        <pre>
          <Warning />
        </pre>
        <p>Hosting Price and Domain Price is not included.</p>
      </div>
      <a href="#" className={styles["backBtn"]}>
        Go Back
      </a>
    </div>
  );
};

export default Budget;
