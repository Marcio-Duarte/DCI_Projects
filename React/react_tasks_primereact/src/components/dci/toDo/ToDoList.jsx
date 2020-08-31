import React, { Component } from 'react';
import ToDosContainer from './ToDosContainer';
import ToDonesContainer from './ToDonesContainer';
import { getIndexOfObjInArray } from '../../../utils/array-utils';
import './toDoList.scss';

export default class TodoList extends Component {
  constructor() {
    super();
    this.state = {
      items: [
        { id: 0, title: 'Make a Website', status: true },
        { id: 1, title: 'Call my Mother', status: true },
        { id: 2, title: 'Wash my face', status: false },
        { id: 3, title: 'Finish reading my book', status: true },
        { id: 4, title: 'Make more money', status: true },
        { id: 5, title: 'Walk the dog', status: false },
        { id: 6, title: 'Pay the rent', status: false },
        { id: 7, title: 'Go to the supermaket', status: false },
      ],
    };
    this.addNewTask = this.addNewTask.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
    this.changeTaskStatus = this.changeTaskStatus.bind(this);
  }

  getNotDoneTasks() {
    return this.state.items.filter((item) => !item.status);
  }

  getDoneTasks() {
    return this.state.items.filter((item) => item.status);
  }

  addNewTask(value) {
    if (value.trim()) {
      const newTask = {
        id: Date.now(),
        title: value.trim(),
        done: false,
      };
      this.setState({
        /* items: [...this.state.items, newTask], */
        items: this.state.items.concat(newTask),
      });
    } else {
      alert('Please enter a valid name for the new task...');
    }
  }

  deleteTask(id) {
    const { items } = this.state;
    const index = getIndexOfObjInArray(items, id, 'id');
    items.splice(index, 1);
    this.setState({
      items: items,
    });
  }

  changeTaskStatus(id) {
    const { items } = this.state;
    const index = getIndexOfObjInArray(items, id, 'id');
    items[index].status = !items[index].status;
    this.setState({
      items: items,
    });
  }

  render() {
    return (
      <div id='dci-todo-list' className='p-col-8 p-offset-2'>
        <div className='navbar'>
          <div className='navbar-title'>Todo App</div>
        </div>
        <div className='content'>
          <ToDosContainer
            tasks={this.getNotDoneTasks()}
            handleAddNewTask={this.addNewTask}
            handleChangeTaskStatus={this.changeTaskStatus}
            handleDeleteTask={this.deleteTask}
          />
          <ToDonesContainer
            tasks={this.getDoneTasks()}
            handleChangeTaskStatus={this.changeTaskStatus}
          />
        </div>
      </div>
    );
  }
}
