import React, { useState, useContext } from 'react';
import { Fieldset } from 'primereact/fieldset';
import { InputText } from 'primereact/inputtext';
import { InputNumber } from 'primereact/inputnumber';
import { Button } from 'primereact/button';
import { Message } from 'primereact/message';
import { MovieContext } from './MovieContext';

export default function AddMovie() {
  const [movie, setMovie] = useState('');
  const [price, setPrice] = useState(0);
  const [movieLabel, setMovieLabel] = useState('Movie Name');
  const [showInputMessage, setShowInputMessage] = useState(false);
  const { addMovie } = useContext(MovieContext);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (movie !== '') {
      addMovie({ name: movie, price: price });
      setMovie('');
      setMovieLabel('Movie Name');
      setPrice(0);
    } else {
      setShowInputMessage(true);
    }
  };

  return (
    <form
      onSubmit={(e) => {
        handleOnSubmit(e);
      }}
    >
      <Fieldset legend='Add Movie'>
        <div
          className=''
          style={{
            paddingTop: '20px',
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
          }}
        >
          <div className='p-float-label' style={{ margin: '10px' }}>
            <InputText
              id='input-Moviename'
              value={movie}
              onChange={(e) => {
                setMovie(e.target.value);
              }}
              onFocus={() => {
                setMovieLabel('Movie Name');
                setShowInputMessage(false);
              }}
            />
            <label htmlFor='input-Moviename' style={{ color: 'black' }}>
              {movieLabel}
            </label>
            {showInputMessage ? (
              <span
                onClick={() => {
                  setShowInputMessage(false);
                }}
              >
                <Message severity='error' text='' />
              </span>
            ) : null}
          </div>
          <div className='p-float-label' style={{ margin: '10px' }}>
            <InputNumber
              id='float-number'
              value={price}
              mode='currency'
              currency='EUR'
              locale='de-DE'
              onChange={(e) => {
                setPrice(e.target.value);
              }}
              onBlur={() => {
                if (price === null) {
                  setPrice(0);
                }
              }}
            />
            <label htmlFor='float-number' style={{ color: 'black' }}>
              Price
            </label>
          </div>
          <div style={{ margin: '10px' }}>
            <Button label='Submit' type='submit' className='p-button-raised' />
          </div>
        </div>
      </Fieldset>
    </form>
  );
}
