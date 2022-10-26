import React from 'react';
import styles from './Header.module.scss';
import Icons from '../Icons';
import { motion } from 'framer-motion';

const Header = () => {
  const [menu, setMenu] = React.useState(false);

  const onClickBurger = () => {
    setMenu(!menu);
  };

  React.useEffect(() => {
    if (menu && window.screen.width <= 766) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'visible';
    }
  }, [menu]);

  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.wrapper}>
          <a className={styles.logo} href="/#">
            <Icons name="logo" />
          </a>
          <div className={styles.burger} onClick={onClickBurger}></div>
          <div className={`${styles.content} ${menu ? 'visible' : ''}`}>
            <nav>
              <ul className={styles.menu}>
                <li>
                  <a href="/#">Activities</a>
                </li>
                <li>
                  <a href="/#">Technology</a>
                </li>
                <li>
                  <a href="/#">R&D</a>
                </li>
                <li>
                  <a href="/#">Community</a>
                </li>
              </ul>
            </nav>
            <motion.a
              whileHover={{ scale: 1.1 }}
              transition={{ type: 'spring', stiffness: 400, damping: 10 }}
              className={styles.btn}
              href="/#">
              <span>Career</span>
              <Icons name="arrow-right-up" />
            </motion.a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
