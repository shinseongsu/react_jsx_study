import React from 'react';

class Counter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };

    this.increaseCount = this.increaseCount.bind(this);
  }

  increaseCount() {
    const { count } = this.state;

    this.setState({
      count: count + 1,
    });
  }

  render() {
    return (
      <div>
        <span>카운터: {this.state.count}</span>
        <button onClick={this.increaseCount}>카운터 증가</button>
      </div>
    );
  }
}

export default Counter;
