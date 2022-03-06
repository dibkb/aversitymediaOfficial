import Link from "next/link";
import React from "react";
// image import ------------
import astranaut from "../public/assets/astronaut.svg";
import { Arrow, Tick } from "../public/assets/Icons";
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
        <footer>
          <div className={styles["cta"]}>
            <Link href="/getstarted">Let&apos;s Get Started</Link>
            <pre className={styles["tick"]}>
              <Tick />
            </pre>
          </div>
          <pre className={styles["arrow"]}>
            <Arrow />
          </pre>
        </footer>
      </main>
    </div>
  );
};

export default Home;
