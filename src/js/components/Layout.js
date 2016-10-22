import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Layout = () => {
  const title = 'Title';

  return (
    <div>
      <Header title={title} />
      <Header title={'Other Title'} />
      <Footer />
    </div>
  );
};

export default Layout;
