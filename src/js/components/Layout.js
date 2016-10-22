import React from 'react';
import Header from './Header';
import Footer from './Footer';

class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: 'Yukiyan!!!' };
  }

  render() {
    setTimeout(() => {
      this.setState({ name: 'Wakayama' });
    }, 2000);

    return (
      <div>
        {this.state.name}
        <Header />
        <Footer />
      </div>
    );
  }
}

export default Layout;
