import PropTypes from 'prop-types';
import React from 'react';
import 'tailwindcss/tailwind.css';
import '../styles/globals.css';

const App = ({ Component, pageProps }) => {
  const [menu, setMenu] = React.useState(false);
  return (
    <Component pageProps={pageProps} menu={menu} setMenu={setMenu} />
  );
};

App.propTypes = {
  Component: PropTypes.func.isRequired,
  pageProps: PropTypes.shape({}).isRequired,
};

export default App;
