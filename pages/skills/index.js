import PropTypes from 'prop-types';
import classnames from 'classnames';
import {
  Header, WelcomeText, Footer,
} from '../../components';

const Skills = ({ menu, setMenu }) => {
  const handleMenu = () => {
    if (menu) setMenu(false);
  };
  return (
    <>
      <div className="px-6 md:px-24 lg:px-36 xl:px-64 2xl:px-96" onClick={handleMenu} onKeyPress={handleMenu}>
        <Header menu={menu} setMenu={setMenu} />
        <div className="relative pt-36 mx-auto flex flex-col text-center">
          <span className="text-gray-600 font-semibold text-lg">Hello, I&apos;m a</span>
          <h1 className="hidden">Software developer from Argentina.</h1>
          <WelcomeText />
        </div>
        <div className="relative pt-16 mx-auto flex flex-col text-center">
          <span className="text-gray-600 font-semibold text-sm uppercase mb-8">Skills</span>
        </div>
      </div>
      <Footer />
    </>
  );
};

Skills.propTypes = {
  menu: PropTypes.bool.isRequired,
  setMenu: PropTypes.func.isRequired,
};

export default Skills;
