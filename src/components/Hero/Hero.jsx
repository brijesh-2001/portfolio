import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Brijesh Rawat</h1>
        <p className={styles.description}>
        A driven BCA graduate with expertise in full-stack development using the MERN stack (MongoDB, Express.js, React, Node.js) and a strong foundation in Java programming, along with basic knowledge of C++. Eager to apply my skills in both front-end and back-end development to create dynamic, high-performance web applications. Seeking opportunities to contribute to
         innovative projects and further expand my technical expertise in a growth-oriented environment.
        </p>
        <a href="mailto:brijeshrawat2001@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/hero.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
export default Hero;