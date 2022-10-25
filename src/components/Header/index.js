import React from 'react';
import styles from './Header.module.scss';
import Icons from '../Icons';

const Header = () => {
  const [menu, setMenu] = React.useState(true);

  const onClickBurger = () => {
    setMenu(!menu);
  };

  React.useEffect(() => {
    if (window.screen.width <= 766) {
      setMenu(false);
    }
  }, []);

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
          {menu && (
            <div className={styles.content}>
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
              <a className={styles.btn} href="/#">
                <span>Career</span>
                <Icons name="arrow-right-up" />
              </a>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
