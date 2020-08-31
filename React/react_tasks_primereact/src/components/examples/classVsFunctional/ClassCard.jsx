import React, { Component } from 'react';
import { Card } from 'primereact/card';
import PropTypes from 'prop-types';

export default class ClassCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 0,
      numberType: 'odd',
    };
    this.handleClick = this.handleClick.bind(this);
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('ClassCard shouldComponentUpdate...');
    return true;
  }

  /* getDerivedStateFromProps(e) {
    console.log('ClassCard getDerivedStateFromProp...');
  } */

  componentDidMount() {
    console.log('ClassCard componentDidMount...');
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('ClassCard componentDidUpdate...');
  }

  componentWillUnmount() {
    console.log('ClassCard componentWillUnmount...');
  }

  handleClick(arg, event) {
    this.setState({
      number: this.state.number + arg,
      numberType:
        this.state.numberType === 'odd'
          ? (this.numberType = 'even')
          : (this.numberType = 'odd'),
    });
  }

  render() {
    return (
      <div>
        <Card style={{ color: 'black' }} title={this.props.title}>
          <p>You clicked {this.state.number} times</p>
          <p>This is {this.state.numberType.toString()} number</p>
          <button
            // ### 2 different ways To bind a function to a component instance with arguments ###
            onClick={this.handleClick.bind(this, 1)}
            // onClick={() => {this.handleClick(1, this); }}
          >
            Click me
          </button>
        </Card>
      </div>
    );
  }
}

ClassCard.defaultProps = {
  number: 5,
};

ClassCard.propTypes = {
  number: PropTypes.number.isRequired,
};
