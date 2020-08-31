import React, { useState } from 'react';
import { Panel } from 'primereact/panel';
import UserForm from './UserForm';
import UserTable from './UserTable';
import { getIndexOfObjInArray } from '../../../utils/array-utils';
import './userList.scss';

export default function Userlist() {
  const userList1 = [
    { id: 0, name: 'Marcio', job: 'WebDeveloper' },
    { id: 1, name: 'Duarte', job: 'Soft Developer' },
  ];
  const jobList = [
    'DevOps',
    'Web Developer',
    'IT technician',
    'IT security specialist',
    'Network engineer',
  ];
  const [users, setUsers] = useState(userList1);

  const addUser = (name, job) => {
    const newUser = { id: Date.now(), name: name.trim(), job: job };
    setUsers(users.concat(newUser));
  };

  const deleteUser = (id) => {
    const index = getIndexOfObjInArray(users, id, 'id');
    const newUsers = [...users];
    newUsers.splice(index, 1);
    setUsers(newUsers);
  };

  return (
    <div
      id='dci-user-list'
      className='p-grid'
      style={{
        marginTop: '80px',
      }}
    >
      <div className='p-col-12 p-lg-4'>
        <UserForm handleAddUser={addUser} jobList={jobList} />
      </div>

      <div className='p-col-12  p-lg-6'>
        <Panel header='Users'>
          <UserTable
            userList={users}
            jobList={jobList}
            handleDeleteUser={deleteUser}
          />
        </Panel>
      </div>
    </div>
  );
}
