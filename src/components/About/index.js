import React from 'react';
import styles from './About.module.scss';
import chart from './chart.svg';
import { motion } from 'framer-motion';

const animationText = {
  hidden: {
    y: 70,
    opacity: 0,
  },
  visible: (custom) => ({
    y: 0,
    opacity: 1,
    transition: { delay: custom * 0.2, duration: 0.8 },
  }),
};

const animationImg = {
  hidden: {
    x: -150,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: { delay: 2, duration: 0.8 },
  },
};

const About = ({ welcomeRef }) => {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.2, once: true }}
      className={styles.about}
      ref={welcomeRef}>
      <div className="container">
        <motion.p custom={1} variants={animationText} className={styles.subtitle}>
          about us
        </motion.p>
        <motion.h2 custom={1} variants={animationText}>
          Global technologies
        </motion.h2>
        <div className={styles.wrapper}>
          <motion.div variants={animationImg} className={styles.imgBox}>
            <img src={chart} alt="chart" />
          </motion.div>
          <div className={styles.content}>
            <motion.h3 custom={5} variants={animationText} className={styles.title}>
              Level 1
            </motion.h3>
            <ul className={styles.list}>
              <motion.li custom={7} variants={animationText}>
                Deploy a multi-legged futures strategy by simultaneously placing orders to buy and
                sell from the same order ticket.
              </motion.li>
              <motion.li custom={9} variants={animationText}>
                Place and manage orders based on the Level 2 order book, which provides a live
                display of all bids and offers waiting to be executed.
              </motion.li>
            </ul>
            <motion.a
              whileHover={{ scale: 1.1 }}
              transition={{ type: 'spring', stiffness: 400, damping: 10 }}
              custom={11}
              variants={animationText}
              className={styles.btn}
              href="/#">
              Start Now
            </motion.a>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
