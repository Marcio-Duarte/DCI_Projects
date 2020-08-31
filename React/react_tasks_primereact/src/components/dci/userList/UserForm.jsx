import React, { useState } from 'react';
import { Fieldset } from 'primereact/fieldset';
import { InputText } from 'primereact/inputtext';
import { Dropdown } from 'primereact/dropdown';
import { Button } from 'primereact/button';

export default function UserForm(props) {
  const { handleAddUser, jobList } = props;
  const [user, setUser] = useState('');
  const [userLabel, setUserLabel] = useState('Username');
  const [job, setJob] = useState('');

  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (user.trim() === '') {
      alert('Enter a valid name!!!');
    } else if (job.trim() === '') {
      alert(`Enter a valid Job for ${user}!!!`);
    } else {
      handleAddUser(user, job);
      setUser('');
      setJob('');
      setUserLabel('Username');
    }
  };
  return (
    <form
      onSubmit={(e) => {
        handleOnSubmit(e);
      }}
    >
      <Fieldset legend='Add User'>
        <span className='p-float-label'>
          <InputText
            id='input-username'
            value={user}
            onChange={(e) => {
              setUser(e.target.value);
            }}
            onFocus={() => {
              setUserLabel('Username');
            }}
          />
          <label htmlFor='input-username'>{userLabel}</label>
        </span>
        <Dropdown
          id='input-job'
          placeholder='Select a Job'
          value={job}
          options={jobList}
          onChange={(e) => {
            setJob(e.target.value);
          }}
        />
        <div>
          <Button label='Submit' type='submit' className='p-button-raised' />
        </div>
      </Fieldset>
    </form>
  );
}
