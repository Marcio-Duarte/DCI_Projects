import React from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';

export default function UserTable(props) {
  const { userList, handleDeleteUser } = props;

  const deleteButton = (rowData) => {
    return (
      <div>
        <Button
          type='button'
          icon='pi pi-trash'
          className='p-button-raised p-button-danger'
          onClick={() => {
            handleDeleteUser(rowData.id);
          }}
        ></Button>
      </div>
    );
  };
  return (
    <div>
      <DataTable value={userList} responsive={true} editable={true}>
        <Column field='name' header='Name' />
        <Column field='job' header='Job' />
        <Column
          body={deleteButton}
          style={{ textAlign: 'center', width: '8em' }}
        />
      </DataTable>
    </div>
  );
}
