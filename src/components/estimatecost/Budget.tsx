import React, { useContext, useEffect, useState } from "react";
import { Warning } from "../../../public/svg/Icons";
//---------------------  styles --------------------
import styles from "../../../styles/EstimateCost.module.scss";
import { budgetInfoType, formBudget } from "../../../types/Types";
import { CheckBoxEmpty, CheckBoxTick } from "../CheckBoxes";
import { budgetInfoDesign, budgetInfoDesignAndDev } from "./Budgetinfo";
import FormContext from "../../../context/context";
import { formContextRoot } from "../../../types/Types";
import { motion } from "framer-motion";
import { checkBox, warningSign } from "../../../public/animation";
export const Budget: React.FC = () => {
  const formContext: any = useContext(FormContext);
  const [budgetInfo, setBudgetInfo] = useState<budgetInfoType>();
  const [budget, setBudget] = useState<formBudget>();
  useEffect(() => {
    if (formContext.formValue.work === "designOnly") {
      setBudgetInfo(budgetInfoDesign);
    }
    if (formContext.formValue.work === "designAndDev") {
      setBudgetInfo(budgetInfoDesignAndDev);
    }
  }, [formContext]);
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
        {budgetInfo &&
          budgetInfo.map((item) => {
            return (
              <div key={item.id} onClick={() => selectBudgetHandler(item.id)}>
                <motion.span
                  animate={"static"}
                  whileHover={"hover"}
                  whileTap={"click"}
                  variants={checkBox}
                >
                  {budget === item.id ? <CheckBoxTick /> : <CheckBoxEmpty />}
                </motion.span>
                <motion.pre
                  animate={budget === item.id ? "textActive" : "textNormal"}
                  variants={checkBox}
                >
                  {item.price}
                </motion.pre>
              </div>
            );
          })}
      </main>
      <div
        className={
          budgetInfo === budgetInfoDesign
            ? styles["caution--invisible"]
            : styles["caution"]
        }
      >
        <motion.pre animate="animate" variants={warningSign}>
          <Warning />
        </motion.pre>
        <p>Hosting Price and Domain Price is not included.</p>
      </div>
    </div>
  );
};
