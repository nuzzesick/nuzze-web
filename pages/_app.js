import PropTypes from 'prop-types';
import React from 'react';
import Head from 'next/head';
import 'tailwindcss/tailwind.css';
import '../styles/globals.css';

const App = ({ Component, pageProps }) => {
  const [menu, setMenu] = React.useState(false);
  return (
    <>
      <Head>
        <meta charset="utf-8" />
        <title>Nuzze</title>
        <meta name="viewport" content="width=device-width" />
        <meta name="description" content="I'm Nuzze a 21 years old Software developer born in La Plata, Buenos Aires." />
        <meta property="og:title" content="Nuzze" />
        <meta property="og:site_name" content="Nuzze" />
        <meta name="keywords" content="Software, Developer, Programmer, Web, Fullstack, Frontend, Backend" />
        <meta name="author" content="Nuzze" />
        <meta property="og:url" content="https://www.nuzze.dev" />
        <meta property="og:description" content="I'm Nuzze a 21 years old Software developer born in La Plata, Buenos Aires." />
        <meta property="og:image" content="https://www.nuzze.dev/images/seo-image.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" value="@nuzzze" />
        <link rel="icon" type="image/png" href="images/favicon.png" />
      </Head>
      <Component pageProps={pageProps} menu={menu} setMenu={setMenu} />
    </>
  );
};

App.propTypes = {
  Component: PropTypes.func.isRequired,
  pageProps: PropTypes.shape({}).isRequired,
};

export default App;
