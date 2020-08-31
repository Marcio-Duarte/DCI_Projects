import React, { useState, useRef } from 'react';
import { PanelMenu } from 'primereact/panelmenu';

export default function NavPanelMenu(props) {
  const { handleShowSidebar } = props;
  const menuItems = [
    {
      label: 'Home',
      icon: 'pi pi-home',
      command: (event) => {
        window.location.hash = '/';
        setActiveMenu(event);
        handleShowSidebar(false);
        panelMenuRef.current.state = event.item;
      },
    },
    {
      label: 'React Tests',
      icon: 'pi pi-exclamation-triangle',
      command: () => {},
      items: [
        {
          label: 'Classes vs Functions',
          icon: 'pi pi-globe',
          command: (event) => {
            window.location.hash = '/tests/classvsfunction';
            setActiveMenu(event);
            handleShowSidebar(false);
          },
        },
        {
          label: 'ContextApi',
          icon: 'pi pi-globe',
          command: (event) => {
            window.location.hash = '/tests/contextapi';
            setActiveMenu(event);
            handleShowSidebar(false);
          },
        },
      ],
    },
    {
      label: 'DCI Projects',
      icon: 'pi pi-inbox',
      command: () => {},
      items: [
        {
          label: 'Todo List',
          icon: 'pi pi-calendar',
          command: (event) => {
            window.location.hash = '/dci/todolist';
            setActiveMenu(event);
            handleShowSidebar(false);
          },
        },
        {
          label: 'Football Teams',
          icon: 'pi pi-globe',
          command: (event) => {
            window.location.hash = '/dci/footballteams';
            setActiveMenu(event);
            handleShowSidebar(false);
          },
        },
        {
          label: 'Movie Guide',
          icon: 'pi pi-video',
          command: (event) => {
            window.location.hash = '/dci/movieApp';
            setActiveMenu(event);
            handleShowSidebar(false);
          },
        },
        {
          label: 'Movie List',
          icon: 'pi pi-video',
          command: (event) => {
            window.location.hash = '/dci/movielist';
            setActiveMenu(event);
            handleShowSidebar(false);
          },
        },
        {
          label: 'User List',
          icon: 'pi pi-users',
          command: (event) => {
            window.location.hash = '/dci/userlist';
            setActiveMenu(event);
            handleShowSidebar(false);
          },
        },
      ],
    },
  ];
  const panelMenuRef = useRef(null);
  const [items] = useState(menuItems);

  function setActiveMenu(event) {
    const { props } = panelMenuRef.current;

    props.model.forEach((item) => {
      if (item.items) {
        item.items.forEach((item) => {
          delete item.className;
        });
      } else {
        delete item.className;
      }
    });
    event.item.className = 'activeItem';
  }

  return (
    <div id='app-nav-panelmenu'>
      <PanelMenu ref={panelMenuRef} model={items} />
    </div>
  );
}
