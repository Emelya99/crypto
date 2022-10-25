import React from 'react';
import styles from './Header.module.scss';
import Icons from '../Icons';

const Header = () => {
  return (
    <div className={styles.wrapper}>
      <div className="container">
        header
        <Icons name="traders" />
      </div>
    </div>
  );
};

export default Header;
