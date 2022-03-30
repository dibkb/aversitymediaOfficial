import Link from "next/link";
import React from "react";
// image import ------------
import astranaut from "../public/assets/astronaut.svg";
import CtaText from "../src/components/CtaText";
import Typewriter from "typewriter-effect";
// scss import-----------------------
import styles from "../styles/Home.module.scss";
const Home: React.FC = () => {
  return (
    <div className={styles["home"]}>
      <h1>
        <Typewriter
          options={{ loop: true }}
          onInit={(typewriter) => {
            typewriter
              .start()
              .typeString("We deliver premium websites at affordable an rate.")
              .pauseFor(900)
              .deleteChars(39)
              .typeString("performance.")
              .pauseFor(900)
              .deleteChars(12)
              .typeString("results.")
              .pauseFor(900)
              .deleteChars(8);
          }}
        />
      </h1>
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
          <CtaText arrow={true} tick={true} text="Let's Get Started" />
        </footer>
      </main>
    </div>
  );
};

export default Home;
