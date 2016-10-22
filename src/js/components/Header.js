import React from 'react';
import Title from './Header/Title';

const Header = props => (
  <div>
    <Title title={props.title} />
  </div>
);

Header.propTypes = {
  title: React.PropTypes.string,
};

export default Header;
