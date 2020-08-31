import React, { Component, createContext } from 'react'

export const ExampleClassContext = createContext();

const reducer = (state, action) => {
  const msg1 = 'Message 1 from contextApi'
  const msg2 = 'Message 2 from contextApi'
  if (action.type === 'CHANGE_MESSAGE') {
    if (state.message === msg1) {
      return { message: msg2, color: 'green' }
    } else {
      return { message: msg1, color: 'red' }
    }
  }
}

export default class ExampleClassContextProvider extends Component {
  state = {
    message: '',
    color: '',
    dispatch: action => {
      this.setState(state => reducer(state, action))
    }
  }

  render() {
    return (
      <ExampleClassContext.Provider value={this.state}>
        {this.props.children}
      </ExampleClassContext.Provider>
    )
  }
}
