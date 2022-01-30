// library imports---------
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
// component imports ----------
// SVG import------------
import { AversityMediaLogo } from "../../public/svg/Logo";
import { MenuIcon } from "../../public/svg/Icons";
// image import ------------
import astranaut from "../../public/assets/astronaut.svg";
// scss------------
import styles from "../../styles/Navbar.module.scss";
const Navbar: React.FC = () => {
  const [showNav, setShowNav] = useState<Boolean>(false);
  const navbarTogle = () => {
    setShowNav((prev) => !prev);
  };
  return (
    <div
      className={`${styles.container} ${showNav ? styles["full__nav"] : null}`}
    >
      <div className={styles.header}>
        <span className={styles.logo}>
          <AversityMediaLogo />
        </span>
        <span className={styles.hamburger} onClick={navbarTogle}>
          <MenuIcon />
        </span>
      </div>
      {showNav && (
        <div className={styles["navbar__body"]}>
          <main>
            <Link href="/">
              <a onClick={() => setShowNav(false)}>Home</a>
            </Link>
            <Link href="/portfolio">Port</Link>
          </main>
          <aside>
            <img src={astranaut.src} alt="astronaut" />
          </aside>
        </div>
      )}
    </div>
  );
};

export default Navbar;
