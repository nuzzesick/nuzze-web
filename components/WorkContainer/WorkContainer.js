import PropTypes from 'prop-types';
import classnames from 'classnames';
import { NumberBubble, ActionButton } from '..';
import styles from './work-container.module.css';

const WorkContainer = ({ w, index }) => {
  const { name } = w;
  return (
    <>
      <div className="flex flex-col text-left md:w-5/12">
        <NumberBubble w={w} index={index} />
        <div className="font-semibold text-gray-600 -mt-4">
          {w.startDate}
          {' '}
          -
          {' '}
          {w.endDate === 'Now' ? <span className="text-white">{w.endDate}</span> : w.endDate}
        </div>
        <div className="mt-8">
          <h2 className="font-bold text-4xl text-gray-100 tracking-wide">{w.name}</h2>
          <span className="block font-semibold text-gray-600 text-sm py-3">{w.role}</span>
          <span className="block font-normal text-gray-300 text-md">{w.description}</span>
          <div className="flex mt-8">
            <ActionButton url={w.url} type={w.type} />
          </div>
        </div>
      </div>
      <div className="text-white hidden md:block md:w-5/12 text-right">
        <img src={w.image} className={classnames(styles[name], 'rounded-sm')} alt={`${w.name}-img`} />
      </div>
    </>
  );
};

WorkContainer.propTypes = {
  w: PropTypes.shape({
    description: PropTypes.string,
    endDate: PropTypes.string,
    image: PropTypes.string,
    name: PropTypes.string,
    role: PropTypes.string,
    startDate: PropTypes.string,
    type: PropTypes.string,
    url: PropTypes.string,
  }).isRequired,
  index: PropTypes.number.isRequired,
};

export default WorkContainer;
