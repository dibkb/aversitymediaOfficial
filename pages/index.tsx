import Link from "next/link";
import React from "react";
// image import ------------
import astranaut from "../public/assets/astronaut.svg";
import { Arrow, Tick } from "../public/assets/Icons";
import CtaText from "../src/components/CtaText";
// scss import-----------------------
import styles from "../styles/Home.module.scss";
const Home: React.FC = () => {
  return (
    <div className={styles["home"]}>
      <h1>We deliver premium webapps at affordable rates.</h1>
      <main>
        <body>
          <p>
            Work with us to scale your business&apos;s online presence to the
            next level : &#41;
          </p>
          <aside>
            <div className={styles["background__glow"]}></div>
            <img
              src={astranaut.src}
              alt="astronaut"
              className={styles["astronaut"]}
            />
          </aside>
        </body>
        <CtaText arrow={true} tick={true} text="Let's Get Started" />
      </main>
    </div>
  );
};

export default Home;
