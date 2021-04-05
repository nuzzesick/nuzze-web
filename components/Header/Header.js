import classnames from 'classnames';
import { Logo } from '..';
import styles from './header.module.css';

const Header = () => (
  <div className={classnames(styles.header, 'fixed w-full h-20')}>
    <div className="flex items-center justify-between px-24 text-white h-20">
      <Logo className="w-32" />
    </div>
  </div>
);

export default Header;
