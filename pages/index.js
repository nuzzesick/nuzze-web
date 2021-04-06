import classnames from 'classnames';
import {
  Header, WelcomeText, WorkContainer,
} from '../components';

const Home = () => {
  const works = [
    {
      startDate: 'Nov 2020',
      endDate: 'Now',
      name: 'Datia',
      role: 'Junior Software Engineer',
      description: 'Datia helps you automate your sustainability workflows and manage the EU Taxonomy and Sustainable Finance Disclosure Regulation.',
      type: 'job',
      url: 'https://www.linkedin.com/company/datiaapp/',
      image: '../images/datia.png',
    },
    {
      startDate: 'Aug 2020',
      endDate: 'Nov 2020',
      name: 'Rather',
      role: 'Front-end developer',
      description: 'We all like to give recommendations about certain aspects of our lives that we enjoy, that we value or use. And on those aspects that we remain in doubt, we like to consult people we know can give us valuable recommendations.',
      type: 'job',
      url: 'https://www.linkedin.com/company/friends-recommendations/',
      image: '../images/rather.png',
    },
    {
      startDate: 'May 2020',
      endDate: 'Now',
      name: 'Bitflix',
      role: 'Creator',
      description: "Bitflix is an open source web application that allows you to watch movies through torrents directly in your browser. I'm the creator, developer, designer and maintainer of the web-application, but it is also connected to third party API's and projects.",
      type: 'project',
      url: 'https://bitflix.surge.sh',
      image: '../images/bitflix.png',
    },
  ];
  return (
    <div className="px-24">
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
  );
};

export default Home;
