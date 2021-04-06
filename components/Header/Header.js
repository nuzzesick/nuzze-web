import classnames from 'classnames';
import { Logo } from '..';
import styles from './header.module.css';

const Header = () => (
  <div className={classnames(styles.header, 'fixed w-full h-20 left-0 right-0 px-24 z-20')}>
    <div className="flex items-center justify-between text-white h-20">
      <Logo className="w-28" />
    </div>
  </div>
);

export default Header;
