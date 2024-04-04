import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Nayan</h1>
        <p className={styles.description}>
          I'm a Kathmandu University graduate-to-be passionate about web development,
          especially in Node.js and React.js. Seeking an internship to apply and enhance
          my skills. Let's build something awesome together!
        </p>
        <a href="mailto:thapamagarnayan393@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
