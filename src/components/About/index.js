import React from 'react';
import styles from './About.module.scss';
import chart from './chart.png';

const About = () => {
  return (
    <section className={styles.about}>
      <div className="container">
        <p className={styles.subtitle}>about us</p>
        <h2>Global technologies</h2>
        <div className={styles.wrapper}>
          <div className={styles.imgBox}>
            <img src={chart} alt="chart" />
          </div>
          <div className={styles.content}>
            <h3 className={styles.title}>Level 1</h3>
            <ul className={styles.list}>
              <li>
                Deploy a multi-legged futures strategy by simultaneously placing orders to buy and
                sell from the same order ticket.
              </li>
              <li>
                Place and manage orders based on the Level 2 order book, which provides a live
                display of all bids and offers waiting to be executed.
              </li>
            </ul>
            <a className={styles.btn} href="/#">
              Start Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
