import React, { useContext } from 'react';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { ExampleFunctionContext } from './FunctionalContext';

export default function FunctionalMessage() {
  const { message, color, changeMessage } = useContext(ExampleFunctionContext);
  return (
    <Card
      title='Context with Function'
      footer={
        <span>
          <Button
            label='Change Message'
            className='p-button-secondary'
            onClick={changeMessage}
          />
        </span>
      }
      className='p-col-12 p-lg-6 p-lg-offset-3'
      style={{ textAlign: 'center', marginTop: '60px' }}
    >
      <h2 style={{ color: color }}>{message}</h2>
    </Card>
  );
}
