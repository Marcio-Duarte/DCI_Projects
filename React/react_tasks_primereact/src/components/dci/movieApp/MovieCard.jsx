import React from 'react';
import { Card } from 'primereact/card';

export default function MovieCard(props) {
  const {
    name,
    poster_path,
    overview,
    origin_country,
    vote_average,
    first_air_date,
  } = props.movie;
  const image = (
    <img alt='Card' src={`https://image.tmdb.org/t/p/w500/${poster_path}`} />
  );
  return (
    <div className='movieCard p-grid'>
      <div className='p-col'>
        <Card className='left-card' title={name}>
          <div className='p-card-header'>{image}</div>
        </Card>
      </div>
      <div className='p-col'>
        <Card className='right-card' title='Overview'>
          <div className='overview'> {overview}</div>
          <div className='movie-details'>
            <div> {`Release date: ${first_air_date}`}</div>
            <div> {`Origin Country: ${origin_country[0]}`}</div>
            <div> {`Vote Average: ${vote_average}`}</div>
          </div>
        </Card>
      </div>
    </div>
  );
}
