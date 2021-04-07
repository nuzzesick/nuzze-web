import PropTypes from 'prop-types';
import classnames from 'classnames';
import { LinkedInIcon } from '..';
import styles from './action-button.module.css';

const ActionButton = ({ url, type }) => (
  <a href={url} target="_blank" className={classnames(styles.actionButton, 'flex items-center px-10 py-1 rounded-sm bg-gray-800 text-white hover:bg-gray-900')} rel="noreferrer">
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
};

export default ActionButton;
