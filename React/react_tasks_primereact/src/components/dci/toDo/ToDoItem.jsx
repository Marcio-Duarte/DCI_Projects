import React from 'react';

export default function ToDoItem(props) {
  const { task, handleChangeTaskStatus, handleDeleteTask } = props;

  return (
    <div className='toDoItem'>
      <p className={task.status ? 'task-done' : ''}>{task.title}</p>
      <div className='btn-group'>
        <button
          onClick={() => {
            handleChangeTaskStatus(task.id);
          }}
        >
          {task.status ? <span>&#10149;</span> : <span>&#10004;</span>}
        </button>
        {task.status ? (
          ''
        ) : (
          <button
            onClick={() => {
              handleDeleteTask(task.id);
            }}
          >
            &#10006;
          </button>
        )}
      </div>
    </div>
  );
}
