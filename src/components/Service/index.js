import React from 'react';
import styles from './Service.module.scss';

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
    <section className={styles.service}>
      <div className="container">
        <div className={styles.wrapper}>
          {items.map((item) => {
            return (
              <div className={styles.item} key={item.id}>
                <div className={styles.box}>
                  <p className={styles.subtitle}>{item.subtitle}</p>
                  <h3 className={styles.title}>
                    {item.title} <span>{item.span} </span> {item.titleSecond}
                  </h3>
                  <a className={styles.link} href="/#">
                    {item.link}
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Service;
