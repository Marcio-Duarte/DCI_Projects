import React, { Component } from 'react';

export default class Announcement extends Component {
  constructor(props) {
    super(props);
    this.state = {
      announce: '',
    };
  }

  componentDidMount() {
    this.setState({
      announce:
        'Millions of movies, TV shows and people to discover. Explore now.',
    });
  }

  componentWillUnmount() {
    // alert('The announcement will be removed');
  }

  render() {
    return <div>{this.state.announce}</div>;
  }
}
