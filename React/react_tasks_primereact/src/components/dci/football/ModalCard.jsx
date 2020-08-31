import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Card } from 'primereact/card';
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

export default function ModalCard(props) {
  const [modalVisible, setModalVisible] = useState(false);
  const { team, image, statistics } = props.football;

  const handleClick = (arg) => {
    setModalVisible(arg);
  };

  const dataTableColumns = Object.keys(statistics[0]).map((field) => {
    return (
      <Column
        className=' p-col-12 p-md-6 p-lg-3'
        key={field}
        field={field}
        header={field}
      />
    );
  });

  const header = (
    <img
      src={image || 'assets/images/no_image.png'}
      alt={'.'}
      style={{ width: '5em', marginTop: '1em' }}
    />
  );

  const footer = (
    <span>
      <Button
        label='More'
        icon='pi pi-info'
        onClick={handleClick.bind(this, true)}
      />
    </span>
  );
  return (
    <div className='modal-card p-col-12 p-md-6 p-lg-3'>
      <Dialog
        header={team || 'Unknown team'}
        visible={modalVisible}
        style={{ width: '50vw' }}
        modal={true}
        onHide={handleClick.bind(this, false)}
      >
        <DataTable value={statistics}>{dataTableColumns}</DataTable>
      </Dialog>

      <Card
        header={header}
        title={team || 'Unknown team'}
        subTitle={'points'}
        footer={footer}
      >
        {statistics[0].points}
      </Card>
    </div>
  );
}
ModalCard.propTypes = {
  football: PropTypes.object.isRequired,
};
