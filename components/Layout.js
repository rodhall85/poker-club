import Head from 'next/head';

import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <div className="font-dosis text-text mx-auto w-full">
      <Head>
        <title>Ivy Leaf Poker Club</title>
        <meta name="description" content="Poker Tournaments and Cash Games in Whittlesey, Cambridgeshire`" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      { children }
      <Footer />
    </div>
  );
};

export default Layout;