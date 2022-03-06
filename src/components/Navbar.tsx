// library imports---------
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
// component imports ----------
import NavLinkContainer from "./NavLinkContainer";
// SVG import------------
import { AversityMediaLogo } from "../../public/svg/Logo";
import { MenuIcon } from "../../public/svg/Icons";
// image import ------------
import astranaut from "../../public/assets/astronaut.svg";
// scss------------
import styles from "../../styles/Navbar.module.scss";
const Navbar: React.FC = () => {
  const router = useRouter();
  const [showNav, setShowNav] = useState<Boolean>(false);
  const [pageUrl, setPageUrl] = useState<string>("");
  useEffect(() => {
    if (router) setPageUrl(router.pathname.split("/")[1]);
  }, [router]);
  const navbarTogle = () => {
    setShowNav((prev) => !prev);
    if (showNav === false) {
      console.log("rotate");
    }
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
            <NavLinkContainer setShowNav={setShowNav} pageUrl={pageUrl} />
          </main>
          <aside>
            <div className={styles["background__glow"]}></div>
            <img src={astranaut.src} alt="astronaut" />
          </aside>
        </div>
      )}
    </div>
  );
};

export default Navbar;
