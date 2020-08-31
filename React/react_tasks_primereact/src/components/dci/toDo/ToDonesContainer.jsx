import React from 'react';
import ToDoItem from './ToDoItem';

export default function ToDonesContainer(props) {
  const { tasks, handleChangeTaskStatus } = props;
  const todoItems = tasks.map((item, i) => {
    return (
      <ToDoItem
        key={i}
        task={item}
        handleChangeTaskStatus={handleChangeTaskStatus}
      />
    );
  });

  return (
    <div>
      <h1>BACKLOG</h1>
      <div className='todos-container'>{todoItems}</div>
    </div>
  );
}
