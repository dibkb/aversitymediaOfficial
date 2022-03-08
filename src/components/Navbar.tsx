// library imports---------
import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";
// component imports ----------
import NavLinkContainer from "./NavLinkContainer";
// SVG import------------
import { AversityMediaLogo } from "../../public/svg/Logo";
import { MenuIcon, MenuIconActive } from "../../public/svg/Icons";
// image import ------------
import astranaut from "../../public/assets/astronaut.svg";
// scss------------
import styles from "../../styles/Navbar.module.scss";
interface Props {
  showNav: Boolean;
  setShowNav: (value: any) => void;
}
const Navbar: React.FC<Props> = ({ showNav, setShowNav }) => {
  const router = useRouter();
  const [pageUrl, setPageUrl] = useState<string>("");
  useEffect(() => {
    if (router) setPageUrl(router.pathname.split("/")[1]);
  }, [router]);
  const navbarTogle = () => {
    setShowNav((prev: boolean) => !prev);
  };
  return (
    <div className={styles.navbar}>
      <div className={styles.header}>
        <span className={styles.logo}>
          <AversityMediaLogo />
        </span>
        <span className={styles.hamburger} onClick={navbarTogle}>
          {showNav ? <MenuIconActive /> : <MenuIcon />}
        </span>
      </div>
      {showNav && (
        <div className={styles["navbar__body"]}>
          <main>
            <NavLinkContainer setShowNav={setShowNav} pageUrl={pageUrl} />
          </main>
          <aside>
            <div className={styles["background__glow"]}></div>
            <img
              src={astranaut.src}
              alt="astronaut"
              className={styles["astronaut"]}
            />
          </aside>
        </div>
      )}
    </div>
  );
};

export default Navbar;
