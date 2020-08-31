import React from 'react';
import { Button } from 'primereact/button';

const NavTopbar = (props) => {
  const { handleShowSidebar } = props;
  return (
    <div id={'app-nav-topbar'}>
      <Button icon='pi pi-bars' onClick={handleShowSidebar} />
    </div>
  );
};

export default NavTopbar;
