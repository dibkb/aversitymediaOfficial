import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
// image import ------------
import astranaut from "../public/assets/astronaut.svg";
import CtaText from "../src/components/CtaText";
import Typewriter from "typewriter-effect";
// scss import-----------------------
import styles from "../styles/Home.module.scss";
import { motion } from "framer-motion";
import { astronautContainer } from "../public/animation";
const Home: React.FC = () => {
  const headingref = useRef<HTMLHeadingElement>(null);
  const [headingheight, setHeadingHeight] = useState<number | null>(null);
  useEffect(() => {
    if (headingref.current) {
      setHeadingHeight(headingref.current?.clientHeight);
      headingref.current.style.display = "none";
    }
  }, [headingref, setHeadingHeight]);
  return (
    <div className={styles["home"]}>
      <h1
        style={{
          position: "relative",
          width: "100%",
          display: "block",
          minHeight: `${headingheight}px`,
        }}
      >
        <Typewriter
          options={{ loop: true, deleteSpeed: 3 }}
          onInit={(typewriter) => {
            typewriter
              .start()
              .typeString("We deliver premium webapps at an affordable rate.")
              .pauseFor(900)
              .deleteChars(38)
              .pauseFor(900)
              .typeString("an aesthetic online presence.")
              .pauseFor(900)
              .deleteChars(29)
              .pauseFor(900)
              .typeString("results.")
              .pauseFor(900)
              .deleteChars(8);
          }}
        />
      </h1>
      <h1 ref={headingref}>
        We deliver premium webapps at an affordable rate.
      </h1>
      <main>
        <body>
          <p>
            Work with us to scale your business&apos;s online presence to the
            next level : &#41;
          </p>
          <motion.aside animate="animation" variants={astronautContainer}>
            <div className={styles["background__glow"]}></div>
            <img
              src={astranaut.src}
              alt="astronaut"
              className={styles["astronaut"]}
            />
          </motion.aside>
        </body>
        <footer>
          <CtaText
            link={null}
            animateTick={true}
            arrow={true}
            tick={true}
            text="Let's Get Started"
          />
        </footer>
      </main>
    </div>
  );
};

export default Home;
