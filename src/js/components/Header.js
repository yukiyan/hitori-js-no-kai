import React from 'react';
import Title from './Header/Title';

const Header = (props) => {
  const handleChange = (e) => {
    const title = e.target.value;
    props.changeTitle(title);
  };

  return (
    <div>
      <Title {...props} />
      <input value={props.title} onChange={handleChange} />
    </div>
  );
};

Header.propTypes = {
  changeTitle: React.PropTypes.func,
  title: React.PropTypes.string,
};

export default Header;
