import React, { useContext } from 'react';
import { Toolbar } from 'primereact/toolbar';
import { FaFilm } from 'react-icons/fa';
import { MovieContext } from './MovieContext';

export default function Navbar() {
  const { movies } = useContext(MovieContext);
  return (
    <Toolbar
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: 'rgb(68, 68, 68)',
        color: 'white',
      }}
    >
      <FaFilm style={{ fontSize: '2em', margin: '5px' }} />
      <div>Total of movies: {movies.length}</div>
    </Toolbar>
  );
}
