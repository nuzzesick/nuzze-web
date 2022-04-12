import PropTypes from 'prop-types';
import classnames from 'classnames';
import { LinkedInIcon } from '..';
import styles from './action-button.module.css';

const ActionButton = ({ url, type, gradient }) => (
  <a href={url} target="_blank" style={{ background: gradient }} className={classnames(styles.actionButton, 'flex items-center px-8 py-2 rounded-sm text-white font-medium')} rel="noreferrer">
    {
      type === 'job' ? (
        <>
          <LinkedInIcon className="w-3" />
          LinkedIn
        </>
      ) : (
        <>
          Open project
        </>
      )
    }
  </a>
);

ActionButton.propTypes = {
  url: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  gradient: PropTypes.string.isRequired,
};

export default ActionButton;
