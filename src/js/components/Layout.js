import React from 'react';
import Header from './Header';

const list = [
  <Header />,
  <Header />,
  <Header />,
];

const Layout = () => (
  <div>
    {list}
  </div>
);

export default Layout;
