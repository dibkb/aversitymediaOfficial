import React from "react";
import Link from "next/link";
// scss------------
import styles from "../../styles/Navbar.module.scss";
import { Tick } from "../../public/assets/Icons";
import { NavLinkContainerProps } from "../../types/Types";
import { navLinks } from "./navLinkInfo";
import { motion } from "framer-motion";
import {
  navbarAstronautContainer,
  navLinkContainer,
} from "../../public/animation";
const NavLinkContainer: React.FC<NavLinkContainerProps> = ({
  setShowNav,
  pageUrl,
}) => {
  return (
    <>
      {navLinks.map((nav, index) => {
        return (
          <Link
            key={nav.urlEndPoint + index}
            href={`/${nav.urlEndPoint}`}
            passHref
          >
            <motion.div
              whileHover="hover"
              variants={navLinkContainer}
              className={`${
                pageUrl === nav.urlEndPoint ? styles["active"] : null
              }`}
            >
              <a onClick={() => setShowNav(false)}>{nav.text}</a>
              <span className={styles["tick"]}>
                <Tick />
              </span>
            </motion.div>
          </Link>
        );
      })}
    </>
  );
};

export default NavLinkContainer;
