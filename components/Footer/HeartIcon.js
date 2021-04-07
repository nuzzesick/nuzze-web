import PropTypes from 'prop-types';
import classnames from 'classnames';
import styles from './heart-icon.module.css';

const HeartIcon = ({ className }) => (
  <svg className={classnames(styles.heartIcon, className)} viewBox="0 0 21 19" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M14.9017 0.365497C14.0505 0.363468 13.2104 0.558123 12.4469 0.934276C11.6833 1.31043 11.017 1.85791 10.5 2.534C9.98281 1.85778 9.3164 1.31022 8.55271 0.934057C7.78903 0.557897 6.94875 0.363314 6.09745 0.365497C3.03095 0.365497 0.526704 2.86875 0.514954 5.9455C0.503454 9.25675 2.1047 11.209 3.3917 12.7782L3.6677 13.1155C5.19145 14.9942 9.9157 18.3687 10.1157 18.5115C10.228 18.5914 10.3625 18.6344 10.5003 18.6344C10.6382 18.6344 10.7726 18.5914 10.885 18.5115C11.085 18.3687 15.8092 14.9942 17.333 13.1155L17.6087 12.7782C18.8955 11.209 20.497 9.25675 20.4855 5.9455C20.4735 2.86875 17.969 0.365497 14.9017 0.365497V0.365497Z" />
  </svg>
);

HeartIcon.propTypes = {
  className: PropTypes.string.isRequired,
};

export default HeartIcon;