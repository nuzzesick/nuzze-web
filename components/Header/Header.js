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
          <div className={classnames(styles.logoContainer, 'cursor-pointer')}>
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
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd" /></svg>
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
              <a href="cv/MATIAS_NUCCETELLI_CV_EN.pdf" target="_blank">Resume</a>
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
