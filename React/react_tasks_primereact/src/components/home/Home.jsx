import React from 'react';
import './home.scss';

export default function Home() {
  return (
    <div
      id='home-page'
      style={{
        marginTop: '50px',
      }}
    >
      <header className='App-header'>
        <img src='assets/images/logo.svg' className='App-logo' alt='logo' />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
