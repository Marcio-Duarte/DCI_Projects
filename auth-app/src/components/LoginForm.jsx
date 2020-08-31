import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchUser } from '../actions/userActions';
import {
  makeStyles,
  createMuiTheme,
  ThemeProvider,
} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

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

const mapStateToProps = (state) => ({
  state: state,
});

// Dispatch mapping
const mapDispatchToProps = (dispatch) => ({
  fetchUser: (credencials) => dispatch(fetchUser(credencials)),
});

function LoginForm({ state, fetchUser }) {
  const { authentication, user } = state;
  const css = useStyles();

  const [inputs, setInputs] = useState({
    userName: '',
    password: '',
  });
  const [warnings, setWarnings] = useState({
    userName: false,
    password: false,
  });

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
        if (inputs[input].trim() === '') {
          return input;
        } else return null;
      })
      .filter(Boolean); // This condition filter null values

    if (checkInputs.length === 0) {
      fetchUser(inputs);
      resetInputs();
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
      {authentication ? (
        <Redirect
          to={{
            pathname: `/${user.name}`,
            state: user.name,
          }}
        />
      ) : null}

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
            id='filled-password-input'
            label='Password'
            type='password'
            value={inputs.password}
            onChange={(e) => {
              handleOnChange(e.target.value, 'password');
            }}
            variant='standard'
            error={warnings.password}
            helperText={warnings.password ? 'Field is required.' : null}
          />
          <ThemeProvider theme={btnTheme}>
            <Button
              variant='contained'
              color='primary'
              size='large'
              type='submit'
            >
              Login
            </Button>
          </ThemeProvider>
        </form>
      </Paper>
    </Grid>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
