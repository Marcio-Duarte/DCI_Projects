import React from 'react';
import { Menubar } from 'primereact/menubar';
import { FaFilm } from 'react-icons/fa';

export default function Navbar() {
  return (
    <Menubar id='navbar' className='p-grid p-justify-center'>
      <div className='p-col'>
        <FaFilm />
        <div className='nav-info'>
          <div>TV Guide</div>
        </div>
      </div>
    </Menubar>
  );
}
