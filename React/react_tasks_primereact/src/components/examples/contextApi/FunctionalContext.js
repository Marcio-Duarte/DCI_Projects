import React, { createContext, useState } from 'react'

export const ExampleFunctionContext = createContext();

export default function ExampleFunctionContextProvider({ children }) {
  const [message, setMessage] = useState('');
  const [color, setColor] = useState('');

  const changeMessage = () => {
    const msg1 = 'Message 1 from contextApi'
    const msg2 = 'Message 2 from contextApi'
    if (message === msg1) {
      setMessage(msg2);
      setColor('green')
    } else {
      setMessage(msg1);
      setColor('red')
    }
  }

  return (
    <ExampleFunctionContext.Provider value={{ message, color, changeMessage }}>
      {children}
    </ExampleFunctionContext.Provider>
  )
}
