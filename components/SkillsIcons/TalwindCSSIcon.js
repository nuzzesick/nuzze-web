import PropTypes from 'prop-types';

const TailwindCSSIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 218 131" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M109 0C79.9336 0 61.7664 14.5558 54.5 43.6667C65.4 29.1108 78.1164 23.6525 92.65 27.2917C100.942 29.3675 106.869 35.393 113.429 42.0616C124.116 52.9262 136.484 65.5 163.5 65.5C192.566 65.5 210.734 50.9442 218 21.8333C207.1 36.3892 194.384 41.8475 179.85 38.2083C171.558 36.1325 165.631 30.107 159.071 23.4384C148.384 12.5738 136.016 0 109 0ZM54.5 65.5C25.4336 65.5 7.26638 80.0558 0 109.167C10.9 94.6108 23.6164 89.1525 38.15 92.7917C46.4417 94.8675 52.3685 100.893 58.929 107.562C69.6161 118.426 81.9842 131 109 131C138.066 131 156.234 116.444 163.5 87.3333C152.6 101.889 139.884 107.348 125.35 103.708C117.058 101.632 111.131 95.607 104.571 88.9384C93.8839 78.0738 81.5158 65.5 54.5 65.5Z" fill="url(#paint0_linear-182505)" />
    <defs>
      <linearGradient id="paint0_linear-182505" x1="-6.05604" y1="41.92" x2="182.366" y2="150.395" gradientUnits="userSpaceOnUse">
        <stop stopColor="#2298BD" />
        <stop offset="1" stopColor="#0ED7B5" />
      </linearGradient>
    </defs>
  </svg>
);

TailwindCSSIcon.propTypes = {
  className: PropTypes.string.isRequired,
};

export default TailwindCSSIcon;
