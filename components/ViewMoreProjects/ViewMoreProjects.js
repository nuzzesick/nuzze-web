import classnames from 'classnames';
import React from 'react';
import styles from './view-more-projects.module.css';

const ViewMoreProjects = () => {
  const [data, setData] = React.useState([]);
  React.useEffect(async () => {
    const res = await fetch('https://api.github.com/users/nuzzesick');
    const json = await res.json();
    setData(json);
  }, []);
  return (
    <div className={classnames(styles.moreProjectsContainer, 'my-4')}>
      <div className="px-6 md:px-24 lg:px-36 xl:px-64 2xl:px-96 py-28 flex flex-col items-center">
        <h2 className="font-bold text-4xl text-center">More stuff on GitHub</h2>
        <span className="text-md text-gray-200 mt-3 text-center">
          I have
          {' '}
          <span className="font-semibold">{data.public_repos}</span>
          {' '}
          repositories available on my GitHub account that you can see right now.
        </span>
        <a
          className="py-2 px-10 rounded-md text-white my-6"
          href="https://github.com/nuzzesick?tab=repositories"
          target="_blank"
          rel="noreferrer"
        >
          View
        </a>
      </div>
    </div>
  );
};

export default ViewMoreProjects;
