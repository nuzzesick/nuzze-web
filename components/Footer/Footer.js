import HeartIcon from './HeartIcon';

const Footer = () => (
  <div className="px-6 md:px-24 lg:px-36 xl:px-64 2xl:px-96 py-4">
    <div className="flex items-center justify-between">
      <div className="flex items-center text-white">
        Made with
        <HeartIcon className="w-4 mx-2" />
        in Argentina.
      </div>
    </div>
  </div>
);

export default Footer;
