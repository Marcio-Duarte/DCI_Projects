import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import {
  makeStyles,
  createMuiTheme,
  ThemeProvider,
} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { BlogContext } from '../context';

const useStyles = makeStyles(() => ({
  root: {
    backgroundColor: '#bdbdbd',
    minHeight: '100vh',
  },
  paper: {
    padding: '0 20px 20px 20px',
    borderRadius: '10px',
    width: '60%',
    textAlign: 'center',
    height: '400px',
    backgroundColor: '#eceff1',
    '& form': {
      height: 'inherit',
      display: 'flex',
      flexDirection: 'column',
      '& .MuiTextField-root': {
        marginTop: 'auto',
      },
    },
    '& button': {
      width: '100%',
      marginTop: 'auto',
    },
  },
}));

const btnTheme = createMuiTheme({
  palette: {
    primary: {
      light: '#708690',
      main: '#445963',
      dark: '#1b3039',
      contrastText: '#fff',
    },
  },
});

export default function Form() {
  const [inputs, setInputs] = useState({
    userName: '',
    title: '',
    content: '',
  });
  const [warnings, setWarnings] = useState({
    userName: false,
    title: false,
    content: false,
  });
  const { addPost } = useContext(BlogContext);
  const { push } = useHistory();
  const css = useStyles();

  const handleOnChange = (value, input) => {
    setInputs({ ...inputs, [input]: value });
    setWarnings({ ...warnings, [input]: false });
  };

  const resetInputs = () => {
    const cleanInputs = {};
    Object.keys(inputs).forEach((input) => {
      cleanInputs[input] = '';
    });
    setInputs(cleanInputs);
  };

  const handleWarnings = (checkInputs) => {
    const newWarnings = {};
    Object.keys(warnings).forEach((warning) => {
      if (checkInputs.includes(warning)) {
        newWarnings[warning] = true;
      } else {
        newWarnings[warning] = false;
      }
    });
    setWarnings(newWarnings);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const checkInputs = Object.keys(inputs)
      .map((input) => {
        if (
          inputs[input].trim() === '' ||
          (input === 'content' &&
            inputs['content'].replace(/\s/g, '').length < 10)
        ) {
          return input;
        } else return null;
      })
      .filter(Boolean);

    if (checkInputs.length === 0) {
      addPost(inputs);
      resetInputs();
      push('/allposts');
    } else {
      handleWarnings(checkInputs);
    }
  };

  return (
    <Grid
      container
      direction='row'
      justify='center'
      alignItems='center'
      className={css.root}
    >
      <Paper elevation={8} className={css.paper}>
        <form onSubmit={handleSubmit}>
          <TextField
            id='outlined-basic'
            label='Username'
            value={inputs.userName}
            onChange={(e) => {
              handleOnChange(e.target.value, 'userName');
            }}
            variant='standard'
            error={warnings.userName}
            helperText={warnings.userName ? 'Field is required.' : null}
          />
          <TextField
            id='outlined-basic'
            label='Title'
            value={inputs.title}
            onChange={(e) => {
              handleOnChange(e.target.value, 'title');
            }}
            variant='standard'
            error={warnings.title}
            helperText={warnings.title ? 'Field is required.' : null}
          />
          <TextField
            id='filled-multiline-static'
            label='What`s on your mind?'
            multiline
            rows={4}
            value={inputs.content}
            onChange={(e) => {
              handleOnChange(e.target.value, 'content');
            }}
            variant='filled'
            error={warnings.content}
            helperText={
              warnings.content ? 'Write at least 10 characters.' : null
            }
          />
          <ThemeProvider theme={btnTheme}>
            <Button
              variant='contained'
              color='primary'
              size='large'
              type='submit'
            >
              Post
            </Button>
          </ThemeProvider>
        </form>
      </Paper>
    </Grid>
  );
}
