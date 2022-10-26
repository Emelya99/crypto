import React from 'react';
import styles from './Platform.module.scss';
import Icons from '../Icons';
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
    x: -150,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: { delay: 2 },
  },
};

const Platform = () => {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.2, once: true }}
      className={styles.platform}>
      <div className="container">
        <div className={styles.wrapper}>
          <motion.div variants={animationImg} className={styles.table}>
            <div className={`${styles.step1} ${styles.step}`}>
              <ul>
                <li>Artificial Intelligence</li>
                <li>Storage Networks</li>
                <li>P2P Networks</li>
              </ul>
            </div>
            <div className={styles.step2}>
              <ul>
                <li>Public Data</li>
                <li>Encrypted Private Data *</li>
              </ul>
            </div>
            <div className={`${styles.step3} ${styles.step}`}>
              <div className={styles.bg}></div>
              <Icons name="traders" />
              <p className={styles.desc}>
                Easy to use digital service and exclusive personal service for our active traders
              </p>
              <ul>
                <li>Indexing</li>
                <li>API</li>
              </ul>
              <p className={styles.consumers}>Consumers</p>
            </div>
          </motion.div>
          <div className={styles.content}>
            <motion.h2 custom={3} variants={animationText} className={styles.title}>
              The future <span className={styles.grey}>of</span> Cryptocurrency trading
              <span className={styles.gradient}> platform</span>
            </motion.h2>
            <motion.p custom={5} variants={animationText} className={styles.text}>
              Take advantage of time and sales, futures spread orders and depth trader — plus, trade
              directly from charts.
            </motion.p>
            <motion.a custom={7} variants={animationText} className={styles.link} href="/#">
              Learn more
            </motion.a>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Platform;
