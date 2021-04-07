import classnames from 'classnames';
import HeartIcon from './HeartIcon';
import { TwitterIcon, GitHubIcon, LinkedInIcon } from '..';
import styles from './footer.module.css';

const Footer = () => {
  const socialNetworks = [
    {
      icon: <TwitterIcon className="w-4" />,
      style: styles.twitter,
      url: 'https://www.twitter.com/nuzzze/',
    },
    {
      icon: <GitHubIcon className="w-4" />,
      style: styles.github,
      url: 'https://www.github.com/nuzzesick/',
    },
    {
      icon: <LinkedInIcon className="w-4" />,
      style: styles.linkedin,
      url: 'https://www.linkedin.com/in/mat%C3%ADas-nuccetelli-a028141a9/',
    },
  ];
  return (
    <div className="px-6 md:px-24 lg:px-36 xl:px-64 2xl:px-96 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center text-white">
          Made with
          <HeartIcon className="w-4 mx-2" />
          in Argentina.
        </div>
        <div className={classnames(styles.socialContainer, 'flex items-center')}>
          {
            socialNetworks.map((s) => (
              <a href={s.url} target="_blank" rel="noreferrer" className={s.style}>
                {s.icon}
              </a>
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default Footer;
