import React from 'react';
import styles from './Service.module.scss';
import { motion } from 'framer-motion';

const animationItem = {
  hidden: {
    opacity: 0,
  },
  visible: (custom) => ({
    opacity: 1,
    transition: { delay: custom * 0.3 },
  }),
};

const items = [
  {
    id: 1,
    subtitle: 'Spot & Margin',
    title: 'Trade ',
    titleSecond: 'pairs with up to 10x leverage',
    span: '200+',
    link: 'Learn more',
  },
  {
    id: 2,
    subtitle: 'Derivatives',
    title: '',
    titleSecond: 'quarterly futures and contracts',
    span: '40+',
    link: 'Learn more',
  },
  {
    id: 3,
    subtitle: 'Trading Arena',
    title: 'Prize pools worth up to ',
    titleSecond: '',
    span: 'USD 1,000,000',
    link: 'Learn more',
  },
  {
    id: 4,
    subtitle: 'mobile app',
    title: 'Trade anytime, ',
    titleSecond: '',
    span: 'anywhere',
    link: 'Learn more',
  },
];

const Service = () => {
  return (
    <motion.section
      viewport={{ amount: 0.2, once: true }}
      initial="hidden"
      whileInView="visible"
      className={styles.service}>
      <div className="container">
        <div className={styles.wrapper}>
          {items.map((item) => {
            return (
              <motion.div
                variants={animationItem}
                custom={item.id}
                className={styles.item}
                key={item.id}>
                <div className={styles.box}>
                  <p className={styles.subtitle}>{item.subtitle}</p>
                  <h3 className={styles.title}>
                    {item.title} <span>{item.span} </span> {item.titleSecond}
                  </h3>
                  <a className={styles.link} href="/#">
                    {item.link}
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
};

export default Service;
