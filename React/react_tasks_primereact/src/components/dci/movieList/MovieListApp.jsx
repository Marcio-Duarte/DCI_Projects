import React from 'react';
import Navbar from './Nav';
import AddUser from './AddMovie';
import MovieList from './MovieList';
import MovieContextProvider from './MovieContext';

export default function MovieListApp() {
  return (
    <div style={{ marginTop: '50px' }}>
      <MovieContextProvider>
        <Navbar />
        <AddUser />
        <MovieList />
      </MovieContextProvider>
    </div>
  );
}
