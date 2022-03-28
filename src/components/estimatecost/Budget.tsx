import React, { useContext, useState } from "react";
import { Warning } from "../../../public/svg/Icons";
//---------------------  styles --------------------
import styles from "../../../styles/EstimateCost.module.scss";
import { formBudget } from "../../../types/Types";
import { CheckBoxEmpty, CheckBoxTick } from "../CheckBoxes";
import { budgetInfo } from "./Budgetinfo";
import FormContext from "../../../context/context";
export const Budget: React.FC = () => {
  const formContext = useContext(FormContext);
  const [budget, setBudget] = useState<formBudget>("category-2");
  const formValue = useContext(FormContext);
  const selectBudgetHandler = (id: formBudget) => {
    setBudget(id);
    formContext.setFormValue({
      ...formContext.formValue,
      budget: id,
    });
  };
  return (
    <div className={styles["budget-subContainer"]}>
      <h1>My budget is</h1>
      <main>
        {budgetInfo.map((item) => {
          return (
            <div key={item.id} onClick={() => selectBudgetHandler(item.id)}>
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
    </div>
  );
};
