import React from "react";
// import components----------
import Navbar from "./Navbar";
// import scss-------------
import styles from "../../styles/Layout.module.scss";
// prop type-----------
interface Props {
  children: React.ReactNode;
}
const Layout: React.FC<Props> = (props) => {
  return (
    <div className={styles.container}>
      <header>
        <Navbar />
      </header>
      <div className={styles.body}>{props.children}</div>
    </div>
  );
};

export default Layout;
