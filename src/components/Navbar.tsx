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
import { motion } from "framer-motion";
import {
  hamburgerContainer,
  navbar,
  navbarAstronautContainer,
} from "../../public/animation";
import Head from "next/head";
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
    <>
      <Head>
        <title>AVERSITY Media</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className={styles.navbar}>
        <div className={styles.header}>
          <span className={styles.logo}>
            <AversityMediaLogo />
          </span>
          <motion.span
            className={styles.hamburger}
            onClick={navbarTogle}
            whileHover="hover"
            whileTap="click"
            animate="normal"
            variants={hamburgerContainer}
          >
            {showNav ? <MenuIconActive /> : <MenuIcon />}
          </motion.span>
        </div>
        {showNav && (
          <motion.div
            initial={"initial"}
            animate={"animate"}
            variants={navbar}
            className={styles["navbar__body"]}
          >
            <main>
              <NavLinkContainer setShowNav={setShowNav} pageUrl={pageUrl} />
            </main>
            <motion.aside
              animate="animation"
              variants={navbarAstronautContainer}
            >
              <div className={styles["background__glow"]}></div>
              <img
                alt="astronaut"
                src={astranaut.src}
                className={styles["astronaut"]}
              />
            </motion.aside>
          </motion.div>
        )}
      </div>
    </>
  );
};

export default Navbar;
