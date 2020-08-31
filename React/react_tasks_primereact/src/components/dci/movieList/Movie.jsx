import React from 'react';
import { Card } from 'primereact/card';
import { InputNumber } from 'primereact/inputnumber';

export default function Movie(props) {
  const { name, price } = props.movie;
  return (
    <Card title={name}>
      <InputNumber
        value={price}
        disabled={true}
        mode='currency'
        currency='EUR'
        locale='de-DE'
        inputStyle={{ color: 'green', opacity: '1' }}
      />
    </Card>
  );
}
