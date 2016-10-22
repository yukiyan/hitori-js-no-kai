import React from 'react';

class Layout extends React.Component {
  constructor() {
    super();
    this.name = 'Yukiyan';
  }

  render() {
    return (
      <h1>It works!! {this.name}!</h1>
    );
  }

}

export default Layout;
