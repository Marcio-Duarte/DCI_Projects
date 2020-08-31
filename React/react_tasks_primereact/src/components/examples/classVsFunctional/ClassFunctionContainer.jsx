import React from 'react';
import ClassCard from './ClassCard';
import FunctionCard from './FunctionCard';

export default function ClassFunctionContainer() {
  return (
    <div className='p-grid' style={{ textAlign: 'center', marginTop: '60px' }}>
      <div className='p-col-12 p-lg-6'>
        <FunctionCard title='Functional component example' />
      </div>
      <div className='p-col-12 p-lg-6'>
        <ClassCard title='Class component example' />
      </div>
    </div>
  );
}
