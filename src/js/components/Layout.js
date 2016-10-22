import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Layout = () => {
  const title = 'HEY!!!';

  return (
    <div>
      <Header title={title} />
      <Footer />
    </div>
  );
};

export default Layout;
