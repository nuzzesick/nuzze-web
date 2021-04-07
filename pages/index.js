import classnames from 'classnames';
import {
  Header, WelcomeText, WorkContainer, ViewMoreProjects, Footer,
} from '../components';
import works from '../utils/works';

const Home = () => (
  <>
    <div className="px-6 md:px-24 lg:px-36 xl:px-64 2xl:px-96">
      <Header />
      <div className="relative pt-36 mx-auto flex flex-col text-center">
        <span className="text-gray-600 font-semibold text-lg">Hello, I&apos;m a</span>
        <h1 className="hidden">Software developer from Argentina.</h1>
        <WelcomeText />
      </div>
      <div className="relative pt-16 mx-auto flex flex-col text-center">
        <span className="text-gray-600 font-semibold text-sm uppercase mb-8">Jobs & Projects</span>
        {
          works.map((w, index) => (
            <div className={classnames((index + 1) % 2 === 0 && 'flex-row-reverse', 'flex items-end justify-between my-12')} key={`work-${w.name}`}>
              <WorkContainer w={w} index={index} />
            </div>
          ))
        }
      </div>
    </div>
    <ViewMoreProjects />
    <Footer />
  </>
);

export default Home;
