import PropTypes from 'prop-types';
import React from 'react';
import classnames from 'classnames';
import { Logo } from '..';
import styles from './header.module.css';

const Header = ({ menu, setMenu }) => (
  <div className={classnames(styles.header, 'fixed w-full h-20 left-0 right-0 px-6 md:px-24 lg:px-36 xl:px-64 2xl:px-96 z-20')}>
    <div className="flex items-center justify-between text-white h-20">
      <Logo className="w-28" />
      <div className="flex flex-col items-center">
        <button
          type="button"
          className={styles.menuButton}
          onClick={() => { setMenu(!menu); }}
        >
          <img src="./images/nuzze.jpeg" className="w-8 rounded-full" alt="nuzze-img" />
        </button>
        {menu && (
        <div
          className={classnames(styles.menu, 'text-white absolute mt-10 py-3 px-6 rounded-md')}
        >
          MENU
        </div>
        )}
      </div>
    </div>
  </div>
);

Header.propTypes = {
  menu: PropTypes.bool.isRequired,
  setMenu: PropTypes.func.isRequired,
};

export default Header;
