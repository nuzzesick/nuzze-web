import PropTypes from 'prop-types';
import 'tailwindcss/tailwind.css';
import '../styles/globals.css';

const App = ({ Component, pageProps }) => <Component pageProps={pageProps} />;

App.propTypes = {
  Component: PropTypes.func.isRequired,
  pageProps: PropTypes.shape({}).isRequired,
};

export default App;
