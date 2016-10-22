import React from 'react';
import Header from './Header';
import Footer from './Footer';

class Layout extends React.Component {
  constructor() {
    super();
    this.state = {
      title: 'Welcome',
    };
    this.changeTitle = this.changeTitle.bind(this);
  }

  changeTitle(title) {
    this.setState({ title });
  }

  render() {
    return (
      <div>
        <Header changeTitle={this.changeTitle} title={this.state.title} />
        <Footer />
      </div>
    );
  }
}

export default Layout;
