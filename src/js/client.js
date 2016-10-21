import React from 'react';
import ReactDOM from 'react-dom';

class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  render() {
    return (
      <div>
        <input
          type="text"
          placeholder="input your text"
          value={this.state.value}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

ReactDOM.render(
  <Layout />,
  document.getElementById('app')
);
