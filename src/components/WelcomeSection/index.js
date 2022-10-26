import React from 'react';
import styles from './WelcomeSection.module.scss';
import Icons from '../Icons';
import welcomeBg from './welcome-bg.svg';
import { motion } from 'framer-motion';

const animationText = {
  hidden: {
    y: 100,
    opacity: 0,
  },
  visible: (custom) => ({
    y: 0,
    opacity: 1,
    transition: { delay: custom * 0.2, duration: 0.8, transitionProperty: 'ease' },
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
    transition: { delay: 2, duration: 0.8, transitionProperty: 'ease' },
  },
};

const WelcomeSection = ({ onClickScroll, windowHeight }) => {
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
          <motion.h1
            custom={3}
            variants={animationText}
            className={`${styles.title} ${windowHeight < 470 ? 'hide' : ''}`}>
            Engineers Meet
            <span> Traders __</span>
          </motion.h1>
          <motion.p
            custom={5}
            variants={animationText}
            className={`${styles.text} ${windowHeight < 575 ? 'hide' : ''}`}>
            Advanced crypto algorithmic trading and efficient cross-chain execution, at scale.
          </motion.p>
        </div>
        <motion.a
          custom={7}
          variants={animationText}
          className={`${styles.btn} ${windowHeight < 840 ? 'hide' : ''}`}
          href="/#"
          onClick={onClickScroll}>
          Learn More
          <span>
            <Icons name="arrow-down" />
          </span>
        </motion.a>
        <motion.img
          variants={animationImg}
          src={welcomeBg}
          className={`${styles.img} ${windowHeight < 575 ? 'hide' : ''}`}
          alt="welcome-bg"
        />
      </div>

      <div className={styles.scroll} onClick={onClickScroll}>
        <Icons name="scroll" />
      </div>
    </motion.section>
  );
};

export default WelcomeSection;
