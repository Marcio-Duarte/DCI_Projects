import React, { useState } from 'react';
import ToDoItem from './ToDoItem';

export default function ToDosContainer(props) {
  const [inputValue, setInputValue] = useState('');
  const {
    tasks,
    handleAddNewTask,
    handleChangeTaskStatus,
    handleDeleteTask,
  } = props;

  const todoItems = tasks.map((item, i) => {
    return (
      <ToDoItem
        key={i}
        task={item}
        handleChangeTaskStatus={handleChangeTaskStatus}
        handleDeleteTask={handleDeleteTask}
      />
    );
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    handleAddNewTask(inputValue);
    setInputValue('');
  };

  return (
    <div>
      <h1>TO DO</h1>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          maxLength='75'
          value={inputValue}
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
          style={{ width: '100%' }}
        />
        <button type='submit'>Add</button>
      </form>
      <div className='todos-container'>{todoItems}</div>
    </div>
  );
}
