import React, { Component } from 'react';
import { ExampleClassContext } from './ClassContext';

export default class ClassMessage extends Component {
  render() {
    return (
      <ExampleClassContext.Consumer>
        {(context) => {
          const { message, color } = context;
          return (
            <React.Fragment>
              <h2 style={{ color: color }}>{message}</h2>
            </React.Fragment>
          );
        }}
      </ExampleClassContext.Consumer>
    );
  }
}
