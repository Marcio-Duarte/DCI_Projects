import React, { useState, useEffect } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import {
  makeStyles,
  createMuiTheme,
  ThemeProvider,
} from '@material-ui/core/styles';
import { Paper, Tabs, Tab } from '@material-ui/core';
import { lightBlue } from '@material-ui/core/colors';

const useStyles = makeStyles({
  navbar: {
    flexGrow: 1,
    position: 'fixed',
    width: '100%',
    height: '70px',
    zIndex: 2,
    backgroundColor: '#424242',
    '& div': {
      height: 'inherit',
    },
    '&  .MuiButtonBase-root:not(.Mui-selected)': {
      color: '#cfd8dc',
    },
    '& .MuiTab-wrapper': {
      fontWeight: 'bold',
    },
  },
});

const theme = createMuiTheme({
  palette: {
    primary: lightBlue,
  },
});

export default function Navbar() {
  const [selectedTab, setSelectedTab] = useState(0);
  const css = useStyles();
  const { push } = useHistory();
  const location = useLocation();

  useEffect(() => {
    switch (location.pathname) {
      case '/':
        setSelectedTab(0);
        break;
      case '/login':
        setSelectedTab(1);
        break;
      default:
        setSelectedTab(false);
    }
  }, [location.pathname, push]);

  const handleChangeTab = (event, newValue) => {
    setSelectedTab(newValue);
  };

  return (
    <ThemeProvider theme={theme}>
      <Paper className={css.navbar} square={true}>
        <Tabs
          value={selectedTab}
          onChange={handleChangeTab}
          indicatorColor='primary'
          textColor='primary'
          centered
        >
          <Tab label='Home' to='/' component={Link} />
          <Tab label='Login' to='/login' component={Link} />
        </Tabs>
      </Paper>
    </ThemeProvider>
  );
}
