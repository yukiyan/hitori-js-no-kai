import React from 'react';
import ReactDOM from 'react-dom';

const Layout = props => <h1>{props.name} がやっていく</h1>;

Layout.propTypes = {
  name: React.PropTypes.string.isRequired,
};

ReactDOM.render(
  <Layout name="yukiyan" />,
  document.getElementById('app')
);
