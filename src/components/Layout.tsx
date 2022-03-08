import React, { useState } from "react";
// import components----------
import Navbar from "./Navbar";
// import scss-------------
import styles from "../../styles/Layout.module.scss";
// prop type-----------
interface Props {
  children: React.ReactNode;
}
const Layout: React.FC<Props> = (props) => {
  const [showNav, setShowNav] = useState<Boolean>(false);
  return (
    <div className={styles.container}>
      <div className={styles.containerLayout}>
        <header>
          <Navbar showNav={showNav} setShowNav={setShowNav} />
        </header>
        {!showNav && <div className={styles.body}>{props.children}</div>}
      </div>
    </div>
  );
};

export default Layout;
