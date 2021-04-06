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
      description: "Bitflix is an open source web application that allows you to watch movies through torrents directly in your browser. I'm the creator, developer, designer and maintainer of the app, but it is also connected to third party API's and projects.",
      type: 'project',
      url: 'https://bitflix.surge.sh',
      image: '../images/bitflix.png',
    },
    {
      startDate: 'July 2020',
      endDate: 'Now',
      name: 'NextTime',
      role: 'Creator',
      description: 'NextTime is an open source web application that allows you to know the time in any country in the world, either now or in the future.',
      type: 'project',
      url: 'https://nexttime.now.sh',
      image: '../images/nexttime.png',
    },
    {
      startDate: 'June 2020',
      endDate: 'Now',
      name: 'Entrenando',
      role: 'Creator',
      description: 'Entrenando is an open-source web-application that allows you to know how long time you were training. In my case, I cannot exceed 2 minutes :(',
      type: 'project',
      url: 'https://entrenando.now.sh',
      image: '../images/entrenando.png',
    },
  ];
  return (
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
  );
};

export default Home;
