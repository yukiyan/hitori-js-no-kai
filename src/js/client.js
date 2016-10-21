import React from 'react';
import ReactDOM from 'react-dom';

const Layout = props => <h1>{props.name} がやっていく {props.children}</h1>;

Layout.propTypes = {
  name: React.PropTypes.string.isRequired,
  children: React.PropTypes.string.isRequired,
};

Layout.defaultProps = {
  children: 'これからずっとな',
};

ReactDOM.render(
  <Layout name="yukiyan" />,
  document.getElementById('app')
);
