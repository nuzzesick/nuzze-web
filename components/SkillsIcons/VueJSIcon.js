import PropTypes from 'prop-types';

const VueJSIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 152 131" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M121.507 0H151.884L75.942 131L0 0H58.0956L75.942 30.3768L93.4087 0H121.507Z" fill="#41B883" />
    <path d="M0 0L75.942 131L151.884 0H121.507L75.942 78.6L29.9971 0H0Z" fill="#41B883" />
    <path d="M29.9971 0L75.942 78.9797L121.507 0H93.4087L75.942 30.3768L58.0956 0H29.9971Z" fill="#35495E" />
  </svg>
);

VueJSIcon.propTypes = {
  className: PropTypes.string.isRequired,
};

export default VueJSIcon;
