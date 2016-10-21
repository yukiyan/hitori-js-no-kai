import React from 'react';
import ReactDOM from 'react-dom';

const Layout = props => <h1>{props.name} がやっていく</h1>;

ReactDOM.render(
  <Layout name="yukiyan" />,
  document.getElementById('app')
);
