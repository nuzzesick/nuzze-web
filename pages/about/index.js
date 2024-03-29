import PropTypes from 'prop-types';
import classnames from 'classnames';
import Head from 'next/head';
import {
  Header, WelcomeText, Footer,
} from '../../components';
import styles from './about.module.css';

const About = ({ menu, setMenu }) => {
  const handleMenu = () => {
    if (menu) setMenu(false);
  };
  return (
    <>
      <Head>
        <title>About | Nuzze</title>
      </Head>
      <div className="px-6 md:px-24 lg:px-36 xl:px-64 2xl:px-96 h-screen" onClick={handleMenu} onKeyPress={handleMenu}>
        <Header menu={menu} setMenu={setMenu} />
        <div className="relative pt-36 mx-auto flex flex-col text-center">
          <span className="text-gray-600 font-semibold text-lg">Hello, I&apos;m a</span>
          <h1 className="hidden">Software developer from Argentina.</h1>
          <WelcomeText />
        </div>
        <div className="relative pt-16 mx-auto flex flex-col text-center">
          <span className="text-gray-600 font-semibold text-sm uppercase mb-8">About</span>
          <div className="my-12 text-left w-4/5 mx-auto flex flex-col">
            <span className="text-gray-200 text-lg leading-7">
              Hi there! my name is
              {' '}
              <span className="font-semibold">Matías Nuccetelli</span>
              {' '}
              but everybody calls me: “Nuzze”.
              <br />
              I&apos;m a 23 years old Software developer born and raised in Buenos Aires,
              Argentina. 🇦🇷
              <br />
              I love the web-world since I&apos;m a child (I think it inspired me when
              I saw the movie: &quot;The Social Network&quot;).
              <br />
              At the age of 15, I started coding in HTML &amp; CSS,
              and since I was so very excited about these technologies at the age of 17
              I started programming in JavaScript and my mind started blowing.
              <br />
              My experience at the university was not the best, therefore
              {' '}
              <span className="font-semibold">
                I always studied and
                learned on my own.
              </span>
              <br />
              I also love UI/UX design so I always dedicated myself to the frontend side and
              to build and ship performant and easy-to-use websites.
              <br />
              I&apos;m fully focused on learning about accessibility and DX.
              <br />
              And of course, as a good argentinian
              {' '}
              <span className="font-semibold">I love soccer and mate. ⚽🧉</span>
              <br />
              If you want to have a nice talk, do not hesitate to contact me.
            </span>
            <a
              href="mailto:mati280341@gmail.com"
              className={classnames(styles.contactButton, 'text-md font-semibold text-white px-6 py-2 rounded-md w-48 text-center mt-16 mx-auto')}
            >
              Contact me
            </a>
          </div>
        </div>
        <div className="absolute w-full left-0">
          <Footer />
        </div>
      </div>
    </>
  );
};

About.propTypes = {
  menu: PropTypes.bool.isRequired,
  setMenu: PropTypes.func.isRequired,
};

export default About;
