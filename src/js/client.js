import React from 'react';
import ReactDOM from 'react-dom';


class Layout extends React.Component {
  static getVal(val) {
    return `Will${val}`;
  }

  render() {
    return (
      <h1>It works!! {Layout.getVal(1)}!</h1>
    );
  }

}

ReactDOM.render(
  <Layout />,
  document.getElementById('app')
);
