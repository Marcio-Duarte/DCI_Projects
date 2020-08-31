import React, { useState } from 'react';
import { TextField, Button } from '@material-ui/core';
import {
  createMuiTheme,
  ThemeProvider,
  makeStyles,
} from '@material-ui/core/styles';

const textInputTheme = createMuiTheme({
  palette: {
    primary: {
      light: '#39796b',
      main: '#004d40',
      dark: '#00251a',
      contrastText: '#fff',
    },
  },
});

const useStyles = makeStyles(() => ({
  form: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    height: 120,
  },
}));

export default function SearchForm({ fetchMovies }) {
  const css = useStyles();
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchMovies(input);
  };

  return (
    <form className={css.form} noValidate onSubmit={handleSubmit}>
      <ThemeProvider theme={textInputTheme}>
        <TextField
          label='Movie Search'
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
      </ThemeProvider>
      <Button variant='outlined' color='secondary' type='submit'>
        SEARCH
      </Button>
    </form>
  );
}
