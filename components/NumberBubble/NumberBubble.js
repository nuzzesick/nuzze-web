import PropTypes from 'prop-types';

const NumberBubble = ({ w, index }) => (
  <svg className="mx-auto md:-ml-8 w-24" viewBox="0 0 129 135" fill="none" xmlns="http://www.w3.org/2000/svg">
    <line x1="64.25" y1="65.01" x2="64.25" y2="7.62939e-06" stroke={`url(#${w.name})`} strokeWidth="1.5" />
    <g filter="url(#filter0_d-390698)">
      <circle cx="64.5" cy="68.4995" r="24.5" fill={`url(#${w.name}Circle)`} />
      <text x="50%" y="53%" textAnchor="middle" stroke="#fff">{index + 1}</text>
    </g>
    <defs>
      <filter id="filter0_d-390698" x="0" y="5.99951" width="129" height="129" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
        <feOffset dy="2" />
        <feGaussianBlur stdDeviation="20" />
        <feColorMatrix type="matrix" values="0 0 0 0 0.490196 0 0 0 0 0.270588 0 0 0 0 0.87451 0 0 0 0.4 0" />
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
      </filter>
    </defs>
    {/* Datia */}
    <linearGradient id="Datia" x1="65.4713" y1="0.00252094" x2="64.4558" y2="64.991" gradientUnits="userSpaceOnUse">
      <stop stopColor="#7F47DD" stopOpacity="0.09" />
      <stop offset="0.536458" stopColor="#5A1CFF" />
      <stop offset="1" stopColor="#7F47DD" />
    </linearGradient>
    <linearGradient id="DatiaCircle" x1="64.9983" y1="92.9977" x2="89.4606" y2="69.8574" gradientUnits="userSpaceOnUse">
      <stop stopColor="#7F47DD" />
      <stop offset="1" stopColor="#5A1CFF" />
    </linearGradient>
    {/* Rather */}
    <linearGradient id="Rather" x1="65.4712" y1="0.00251966" x2="65.8034" y2="32.507" gradientUnits="userSpaceOnUse">
      <stop stopColor="#8874FF" stopOpacity="0.09" />
      <stop offset="1" stopColor="#583FEE" />
    </linearGradient>
    <linearGradient id="RatherCircle" x1="88.9981" y1="67.0893" x2="64.4959" y2="67.0932" gradientUnits="userSpaceOnUse">
      <stop stopColor="#8874FF" />
      <stop offset="1" stopColor="#583FEE" />
    </linearGradient>
    {/* Bitflix */}
    <linearGradient id="Bitflix" x1="65.4713" y1="0.00252094" x2="64.4558" y2="64.991" gradientUnits="userSpaceOnUse">
      <stop stopColor="#2C71D8" stopOpacity="0.09" />
      <stop offset="0.536458" stopColor="#2260B7" />
      <stop offset="1" stopColor="#2C71D8" />
    </linearGradient>
    <linearGradient id="BitflixCircle" x1="64.9983" y1="92.9977" x2="89.4606" y2="69.8574" gradientUnits="userSpaceOnUse">
      <stop stopColor="#2C71D8" />
      <stop offset="1" stopColor="#2260B7" />
    </linearGradient>
    {/* NextTime */}
    <linearGradient id="NextTime" x1="65.4712" y1="0.00251966" x2="65.8034" y2="32.507" gradientUnits="userSpaceOnUse">
      <stop stopColor="#436BD2" stopOpacity="0.09" />
      <stop offset="1" stopColor="#3F66EE" />
    </linearGradient>
    <linearGradient id="NextTimeCircle" x1="88.9981" y1="67.0893" x2="64.4959" y2="67.0932" gradientUnits="userSpaceOnUse">
      <stop stopColor="#5038E0" />
      <stop offset="1" stopColor="#423FEE" />
    </linearGradient>
    {/* Entrenando */}
    <linearGradient id="Entrenando" x1="65.4712" y1="0.00251966" x2="65.8034" y2="32.507" gradientUnits="userSpaceOnUse">
      <stop stopColor="#353638" stopOpacity="0.09" />
      <stop offset="1" stopColor="#1C1815" />
    </linearGradient>
    <linearGradient id="EntrenandoCircle" x1="88.9981" y1="67.0893" x2="64.4959" y2="67.0932" gradientUnits="userSpaceOnUse">
      <stop />
      <stop offset="1" stopColor="#1C1815" />
    </linearGradient>
  </svg>
);

NumberBubble.propTypes = {
  index: PropTypes.number.isRequired,
  w: PropTypes.shape({
    name: PropTypes.string,
  }).isRequired,
};

export default NumberBubble;
