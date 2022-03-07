import React, { useState } from "react";
import Link from "next/link";
// scss------------
import styles from "../../styles/Navbar.module.scss";
import { Tick } from "../../public/assets/Icons";
import { NavLinkContainerProps } from "../../types/Types";
import { navLinks } from "./navLinkInfo";
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
            <div
              className={`${
                pageUrl === nav.urlEndPoint ? styles["active"] : null
              }`}
            >
              <a onClick={() => setShowNav(false)}>{nav.text}</a>
              <span className={styles["tick"]}>
                <Tick />
              </span>
            </div>
          </Link>
        );
      })}
    </>
  );
};

export default NavLinkContainer;
