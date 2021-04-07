import PropTypes from 'prop-types';
import React from 'react';
import classnames from 'classnames';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Logo } from '..';
import styles from './header.module.css';

const Header = ({ menu, setMenu }) => {
  const Router = useRouter();
  const { asPath: currentPath } = Router;
  return (
    <div className={classnames(styles.header, 'fixed w-full h-20 left-0 right-0 px-6 md:px-24 lg:px-36 xl:px-64 2xl:px-96 z-20')}>
      <div className="flex items-center justify-between text-white h-20">
        <Link href="/">
          <div className="cursor-pointer">
            <Logo className="w-28" />
          </div>
        </Link>
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
            className={classnames(styles.menu, 'flex flex-col absolute mt-10 py-3 px-6 rounded-md')}
          >
            <div className={classnames(currentPath === '/skills' ? 'text-white font-semibold' : 'text-gray-400', 'my-1 hover:text-white')}>
              <Link href="/skills">Skills</Link>
            </div>
            <div className={classnames(currentPath === '/about' ? 'text-white font-semibold' : 'text-gray-400', 'my-1 hover:text-white')}>
              <Link href="/about">About</Link>
            </div>
            <div className="my-1 text-gray-400 hover:text-white">
              <a href="/resume.pdf" target="_blank">Resume</a>
            </div>
          </div>
          )}
        </div>
      </div>
    </div>
  );
};

Header.propTypes = {
  menu: PropTypes.bool.isRequired,
  setMenu: PropTypes.func.isRequired,
};

export default Header;
