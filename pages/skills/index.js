import PropTypes from 'prop-types';
import classnames from 'classnames';
import {
  Header, WelcomeText, Footer,
} from '../../components';
import skills from '../../utils/skills';
import styles from './skills.module.css';

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
          <div className="my-12 text-left grid grid-cols-3 2xl:grid-cols-4 gap-4">
            {
              skills.map((s) => (
                <div
                  className={classnames(styles.card, 'flex flex-col items-center shadow-lg hover:shadow-xl bg-gray-900 px-2 py-6 rounded-md')}
                >
                  {s.icon}
                  <span className="mt-5 font-bold text-white text-xl">{s.name}</span>
                  <span className="text-gray-600 text-md">
                    Since
                    {' '}
                    {s.year}
                  </span>
                </div>
              ))
            }
          </div>
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
