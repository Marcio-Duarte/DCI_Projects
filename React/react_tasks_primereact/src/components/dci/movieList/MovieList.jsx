import React, { useContext } from 'react';
import { Panel } from 'primereact/panel';
import Movie from './Movie';
import { MovieContext } from './MovieContext';

export default function MovieList() {
  const { movies } = useContext(MovieContext);
  return (
    <div className='p-col'>
      <Panel header='Available Movies'>
        {movies.map((movie, index) => {
          return <Movie key={index} movie={movie}></Movie>;
        })}
      </Panel>
    </div>
  );
}
