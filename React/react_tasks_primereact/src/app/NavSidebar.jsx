import React from 'react';
import { Sidebar } from 'primereact/sidebar';
import NavPanelMenu from './NavPanelMenu';

export default function NavSidebar(props) {
  const { showSidebar, handleShowSidebar } = props;

  const hideSideBar = (show) => {
    setTimeout(() => {
      handleShowSidebar(show);
    }, 100);
  };

  return (
    <div>
      <Sidebar
        id='app-nav-sidebar'
        visible={showSidebar}
        onHide={hideSideBar}
        modal={true}
        showCloseIcon={false}
        blockScroll={true}
      >
        <NavPanelMenu handleShowSidebar={hideSideBar} />
      </Sidebar>
    </div>
  );
}
