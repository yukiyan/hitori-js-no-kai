import React from 'react';
import ReactDOM from 'react-dom';


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

ReactDOM.render(
  <Layout />,
  document.getElementById('app')
);
