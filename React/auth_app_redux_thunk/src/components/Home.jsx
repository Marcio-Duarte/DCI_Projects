import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    textAlign: 'center',
    '& .App-header': {
      backgroundColor: '#282c34',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 'calc(10px + 2vmin)',
      color: 'white',
    },
    '& .App-logo': {
      height: '40vmin',
      pointerEvents: 'none',
    },
    '& .App-link': {
      color: '#61dafb',
    },
  },
});

export default function Home() {
  const css = useStyles();
  return (
    <div className={css.root}>
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
