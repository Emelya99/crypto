import React from 'react';
import styles from './WelcomeSection.module.scss';
import Icons from '../Icons';
import welcomeBg from './welcome-bg.png';

const WelcomeSection = ({ onClickScroll }) => {
  return (
    <section className={styles.welcome}>
      <div className="container">
        <div className={styles.wrapper}>
          <p className={styles.subtitle}>crypto trading</p>
          <h1 className={styles.title}>
            Engineers Meet
            <span> Traders __</span>
          </h1>
          <p className={styles.text}>
            Advanced crypto algorithmic trading and efficient cross-chain execution, at scale.
          </p>
        </div>
        <a className={styles.btn} href="/#" onClick={onClickScroll}>
          Learn More
          <span>
            <Icons name="arrow-down" />
          </span>
        </a>
      </div>
      <img src={welcomeBg} className={styles.img} alt="welcome-bg" />
      <div className={styles.scroll} onClick={onClickScroll}>
        <Icons name="scroll" />
      </div>
    </section>
  );
};

export default WelcomeSection;
