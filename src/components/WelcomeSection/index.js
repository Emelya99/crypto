import React from 'react';
import styles from './WelcomeSection.module.scss';
import Icons from '../Icons';
import welcomeBg from './welcome-bg.png';
import { motion } from 'framer-motion';

const animationText = {
  hidden: {
    y: 70,
    opacity: 0,
  },
  visible: (custom) => ({
    y: 0,
    opacity: 1,
    transition: { delay: custom * 0.2 },
  }),
};

const animationImg = {
  hidden: {
    x: 150,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: { delay: 2 },
  },
};

const WelcomeSection = ({ onClickScroll }) => {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.2, once: true }}
      className={styles.welcome}>
      <div className="container">
        <div className={styles.wrapper}>
          <motion.p custom={1} variants={animationText} className={styles.subtitle}>
            crypto trading
          </motion.p>
          <motion.h1 custom={3} variants={animationText} className={styles.title}>
            Engineers Meet
            <span> Traders __</span>
          </motion.h1>
          <motion.p custom={5} variants={animationText} className={styles.text}>
            Advanced crypto algorithmic trading and efficient cross-chain execution, at scale.
          </motion.p>
        </div>
        <motion.a
          custom={7}
          variants={animationText}
          className={styles.btn}
          href="/#"
          onClick={onClickScroll}>
          Learn More
          <span>
            <Icons name="arrow-down" />
          </span>
        </motion.a>
      </div>
      <motion.img variants={animationImg} src={welcomeBg} className={styles.img} alt="welcome-bg" />
      <div className={styles.scroll} onClick={onClickScroll}>
        <Icons name="scroll" />
      </div>
    </motion.section>
  );
};

export default WelcomeSection;
