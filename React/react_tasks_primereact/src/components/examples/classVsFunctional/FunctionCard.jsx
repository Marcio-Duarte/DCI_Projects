import React, { useState, useEffect } from 'react';
import { Card } from 'primereact/card';
import PropTypes from 'prop-types';

export default function FunctionCard(props) {
  /* Function state example */
  const [numberType, setnumberType] = useState('even');
  const [number, setNumber] = useState(0);

  useEffect(() => {
    console.log('FunctionCard componentDidMount...');
    return () => {
      console.log('FunctionCard componentWillUnmount...');
    };
  }, [number]);

  function handleClick(arg, event) {
    setNumber(number + arg);
    numberType === 'odd' ? setnumberType('even') : setnumberType('odd');
  }

  return (
    <div>
      <Card
        className='function-card'
        style={{ color: 'black' }}
        title={props.title}
      >
        <p>You clicked {number} times</p>
        <p>This is {numberType.toString()} number</p>
        {/* ### 2 different ways To bind a function to a component instance with arguments ### */}
        <button onClick={handleClick.bind(this, 1)}>Click me</button>
        {/* <button onClick={(event) => { handleClick(1, event) }}> Click me </button> */}
      </Card>
    </div>
  );
}

FunctionCard.defaultProps = {
  number: 3,
};

FunctionCard.propTypes = {
  number: PropTypes.number.isRequired,
};
