import React, { Component } from 'react';

export default class Timmer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: 0,
    };
  }

  timmeCounter() {
    this.setState({
      time: this.state.time + 1,
    });
  }

  componentDidMount() {
    this.timer = setInterval(() => this.timmeCounter(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    return (
      <div className='timer'>
        <span>You are visiting our page for {this.state.time} seconds</span>
      </div>
    );
  }
}
