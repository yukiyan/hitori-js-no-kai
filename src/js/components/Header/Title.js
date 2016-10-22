import React from 'react';

const Title = props => (
  <h1>{props.title}</h1>
);

Title.propTypes = {
  title: React.PropTypes.string,
};

export default Title;
