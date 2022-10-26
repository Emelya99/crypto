import React from 'react';
import styles from './Platform.module.scss';
import Icons from '../Icons';

const Platform = () => {
  return (
    <section className={styles.platform}>
      <div className="container">
        <div className={styles.wrapper}>
          <div className={styles.table}>
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
          </div>
          <div className={styles.content}>
            <h2 className={styles.title}>
              The future <span className={styles.grey}>of</span> Cryptocurrency trading
              <span className={styles.gradient}> platform</span>
            </h2>
            <p className={styles.text}>
              Take advantage of time and sales, futures spread orders and depth trader — plus, trade
              directly from charts.
            </p>
            <a className={styles.link} href="/#">
              Learn more
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Platform;
