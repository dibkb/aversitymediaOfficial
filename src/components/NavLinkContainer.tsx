import React, { useState } from "react";
import Link from "next/link";
// scss------------
import styles from "../../styles/Navbar.module.scss";
import { Tick } from "../../public/assets/Icons";
import { NavLinkContainerProps } from "../../types/Types";
const NavLinkContainer: React.FC<NavLinkContainerProps> = ({
  setShowNav,
  pageUrl,
}) => {
  return (
    <>
      <Link href="/" passHref>
        <div className={`${pageUrl === "" ? styles["active"] : null}`}>
          <a onClick={() => setShowNav(false)}>Home</a>
          <span className={styles["tick"]}>
            <Tick />
          </span>
        </div>
      </Link>
      <Link href="/getstarted" passHref>
        <div
          className={`${pageUrl === "getstarted" ? styles["active"] : null}`}
        >
          <a onClick={() => setShowNav(false)}>Get Started</a>
          <span className={styles["tick"]}>
            <Tick />
          </span>
        </div>
      </Link>
      <Link href="/services" passHref>
        <div className={`${pageUrl === "services" ? styles["active"] : null}`}>
          <a onClick={() => setShowNav(false)}>Our Services</a>
          <span className={styles["tick"]}>
            <Tick />
          </span>
        </div>
      </Link>
      <Link href="/work" passHref>
        <div className={`${pageUrl === "work" ? styles["active"] : null}`}>
          <a onClick={() => setShowNav(false)}>Our Work</a>
          <span className={styles["tick"]}>
            <Tick />
          </span>
        </div>
      </Link>
      <Link href="/workflow" passHref>
        <div className={`${pageUrl === "workflow" ? styles["active"] : null}`}>
          <a onClick={() => setShowNav(false)}>Our WorkFlow</a>
          <span className={styles["tick"]}>
            <Tick />
          </span>
        </div>
      </Link>
      <Link href="/contact" passHref>
        <div className={`${pageUrl === "contact" ? styles["active"] : null}`}>
          <a onClick={() => setShowNav(false)}>Contact Us</a>
          <span className={styles["tick"]}>
            <Tick />
          </span>
        </div>
      </Link>
    </>
  );
};

export default NavLinkContainer;
