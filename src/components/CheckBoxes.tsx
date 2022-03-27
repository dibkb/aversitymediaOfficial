import React from "react";
import { FormTick } from "../../public/svg/Icons";
import styles from "../../styles/FormCheckBox.module.scss";
export const CheckBoxEmpty: React.FC = () => {
  return <div className={styles["boxEmptyContainer"]}></div>;
};
export const CheckBoxTick: React.FC = () => {
  return (
    <div className={styles["boxTickContainer"]}>
      <FormTick />
    </div>
  );
};
